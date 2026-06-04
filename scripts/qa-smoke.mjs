import { spawn } from "node:child_process";

const baseUrl = "http://127.0.0.1:3000";
const routes = [
  "/",
  "/ru",
  "/ru/start",
  "/ru/curriculum",
  "/ru/glossary",
  "/ru/glossary/algorithm",
  "/ru/modules/contest-workflow",
  "/ru/modules/time-complexity",
  "/ru/modules/bronze-complete-search",
  "/ru/teachers",
  "/ru/olympiad-map",
  "/ru/attribution",
];

const child = spawn(
  process.execPath,
  ["node_modules/next/dist/bin/next", "dev", "--hostname", "127.0.0.1", "--port", "3000"],
  {
    cwd: process.cwd(),
    stdio: ["ignore", "pipe", "pipe"],
    windowsHide: true,
  },
);

let logs = "";
child.stdout.on("data", (chunk) => {
  logs += chunk.toString();
});
child.stderr.on("data", (chunk) => {
  logs += chunk.toString();
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForReady() {
  for (let attempt = 0; attempt < 30; attempt += 1) {
    try {
      const response = await fetch(`${baseUrl}/ru`);
      if (response.ok) return;
    } catch {
      // Retry while Next starts.
    }
    await sleep(500);
  }

  throw new Error(`Next dev server did not become ready.\n${logs}`);
}

async function expectOk(path) {
  const response = await fetch(`${baseUrl}${path}`, { redirect: "follow" });
  const text = await response.text();

  if (!response.ok) {
    throw new Error(`${path} returned ${response.status}`);
  }

  if (text.length < 500) {
    throw new Error(`${path} returned suspiciously short HTML (${text.length} chars)`);
  }

  const h1Count = (text.match(/<h1/g) || []).length;
  if (h1Count !== 1) {
    throw new Error(`${path} rendered ${h1Count} h1 elements; expected exactly 1`);
  }

  for (const landmark of ["<html lang=\"ru\"", "<nav", "<main", "<footer"]) {
    if (!text.includes(landmark)) {
      throw new Error(`${path} is missing landmark or language marker ${landmark}`);
    }
  }

  if (text.includes(">undefined<") || text.includes(">null<")) {
    throw new Error(`${path} rendered placeholder text from missing data`);
  }

  return text;
}

async function main() {
  await waitForReady();

  const visited = new Set();
  for (const route of routes) {
    await expectOk(route);
    visited.add(route);
  }

  for (const route of ["/ru", "/ru/start", "/ru/curriculum", "/ru/glossary", "/ru/attribution"]) {
    const html = await expectOk(route);
    const hrefs = [...html.matchAll(/href="([^"]+)"/g)]
      .map((match) => match[1])
      .filter((href) => href === "/" || href.startsWith("/ru"))
      .map((href) => href.split("#")[0])
      .filter(Boolean);

    for (const href of hrefs) {
      if (visited.has(href)) continue;
      await expectOk(href);
      visited.add(href);
    }
  }

  const missing = await fetch(`${baseUrl}/ru/missing-page`);
  if (missing.status !== 404) {
    throw new Error(`/ru/missing-page returned ${missing.status}; expected 404`);
  }

  console.log(`QA smoke passed: ${visited.size} internal routes checked plus 404 behavior.`);
}

main()
  .catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  })
  .finally(() => {
    child.kill();
  });
