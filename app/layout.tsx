import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = "https://mitatei.apex-plus.co.jp";
const siteTitle = "石垣島でしゃぶしゃぶなら三田丁｜石垣牛・アグー豚・海ぶどう";
const siteDescription =
  "石垣島でしゃぶしゃぶディナーなら三田丁。石垣牛・純血アグー豚・名物海ぶどう巻きを落ち着いた和空間で楽しめます。旅行や記念日、大切な方とのお食事に。TableCheckから24時間予約受付中。";
const ogImage = "/images/hero.jpg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "三田丁",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "石垣島のしゃぶしゃぶ 三田丁",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImage],
  },
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "三田丁",
  image: [
    `${siteUrl}/images/hero.jpg`,
    `${siteUrl}/images/wagyu.jpg`,
    `${siteUrl}/images/agu.jpg`,
    `${siteUrl}/images/umibudo.jpg`,
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "石垣270-6",
    addressLocality: "石垣市",
    addressRegion: "沖縄県",
    postalCode: "907-0024",
    addressCountry: "JP",
  },
  telephone: "+81-980-82-6351",
  servesCuisine: ["しゃぶしゃぶ", "和食", "石垣牛", "アグー豚", "沖縄料理"],
  priceRange: "¥¥¥",
  url: siteUrl,
  openingHours: ["Mo-We 17:00-23:00", "Fr-Su 17:00-23:00"],
  sameAs: ["https://www.instagram.com/nikudo_ishigaki_mitatei/"],
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
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
