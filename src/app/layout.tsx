import localFont from "next/font/local";
import { LayoutProps } from "@/common/types/next-components.type";
import "./globals.css";
import { Metadata } from "next";
import { Baner } from "./components";

export const metadata: Metadata = {
  title: "arvan test app",
};

const BNazaninFont = localFont({
  src: "../../public/fonts/B_NAZANIN/B-NAZANIN.ttf",
  variable: "--font-b-nazanin",
});

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html className={BNazaninFont.className} lang="en" dir="rtl">
      <body>
        <header>
          <Baner />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
