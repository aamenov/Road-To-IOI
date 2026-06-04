import type { ReactNode } from "react";
import { AppShell } from "@/components/AppShell";

export default function RussianLayout({ children }: { children: ReactNode }) {
  return <AppShell>{children}</AppShell>;
}
