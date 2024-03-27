import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ヒムプレイヤー(Web)",
  description: "讃美歌を再生するアプリです。日本福音ルーテル教会讃美歌の讃美歌を再生できます。",
  keywords: ["ヒムプレイヤー", "讃美歌", "日本福音ルーテル教会", "スマホで讃美歌"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-JFGD64T885" />
    </html>
  );
}
