import { LayoutProps } from "@/common/types/next-components.type";
import "./globals.css";
import { Metadata } from "next";
import { Baner } from "./components";

export const metadata: Metadata = {
  title: "arvan test app",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html className="text-[0.833333vw]" lang="en" dir="rtl">
      <body>
        <header>
          <Baner />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
