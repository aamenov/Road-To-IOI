import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Road To IOI",
  description: "Русскоязычный маршрут по спортивному программированию для школьников Казахстана.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
