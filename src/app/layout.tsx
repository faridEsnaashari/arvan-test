import { LayoutProps } from "@/common/types/next-components.type";
import "./globals.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "arvan test app",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
