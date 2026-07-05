import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mitatei.apex-plus.co.jp"),
  title: "石垣島しゃぶしゃぶ｜石垣牛・アグー豚｜三田丁",
  description:
    "石垣島で石垣牛と純血アグー豚を味わうしゃぶしゃぶ専門店。海ぶどうを巻く島ならではの食体験、落ち着いた空間、丁寧なおもてなしで旅の一席を彩ります。",
  openGraph: {
    title: "石垣島しゃぶしゃぶ｜石垣牛・アグー豚｜三田丁",
    description:
      "石垣牛・アグー豚・海ぶどうを味わう、石垣島ならではのしゃぶしゃぶ体験。",
    url: "https://mitatei.apex-plus.co.jp",
    siteName: "三田丁",
    images: [
      {
        url: "/images/ogp.jpg",
        width: 1200,
        height: 630,
        alt: "三田丁 石垣島しゃぶしゃぶ",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "石垣島しゃぶしゃぶ｜石垣牛・アグー豚｜三田丁",
    description:
      "石垣牛・アグー豚・海ぶどうを味わう、石垣島ならではのしゃぶしゃぶ体験。",
    images: ["/images/ogp.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
