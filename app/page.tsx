"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const subImages = [
  "/images/experience-sub1.jpg",
  "/images/experience-sub2.jpg",
  "/images/experience-sub3.jpg",
  "/images/experience-sub4.jpg",
];

const languages = {
  ja: {
    label: "JP",
    htmlLang: "ja",
    reservationUrl:
      "https://www.tablecheck.com/ja/mitatei-ishigaki/reserve/message?utm_source=google&rwg_token=AE37R_jSEzNenTBqTJ-MR5OQ6sdwE--4i9JpOev87X4rmYa6aylqZ9Z4Pw84Kif8AYZkpCxiz41euycLdjnSKHArxrOE1VNu3MGhJIW9girNeMBqNFL9oiM%3D",
    messages: {
      navigationLabel: "メインナビゲーション",
      languageLabel: "言語を選択",
      nav: {
        experience: "体験",
        ingredients: "メニュー",
        space: "空間",
        access: "アクセス",
        reservation: "予約する",
      },
      hero: {
        titleFirst: "石垣島の旅に、",
        titleSecond: "記憶に残る一席を。",
        description:
          "石垣牛とアグー豚、海ぶどうを巻いて味わうひと口。丁寧なおもてなしと落ち着いた空間で、石垣島ならではのディナーをお楽しみください。",
        reservation: "席を予約する",
        ingredients: "島のごちそうを見る",
        imageAlt: "石垣牛しゃぶしゃぶ",
      },
      experience: {
        eyebrow: "Our Concept",
        title: "三田丁の体験",
        first:
          "石垣島の自然が育んだ、力強くも繊細な味わい。私たちは、単なる食事を超えた「記憶に残る体験」を提供することを使命としています。",
        second:
          "洗練された和の空間で味わう、石垣牛とアグー豚。名物の海ぶどう巻きまで、島のごちそうを一度に楽しむ時間が、旅の最後の夜を鮮やかに彩ります。",
        quote: "「旅の余韻まで、美味しい夜に。」",
        imageAlt: "しゃぶしゃぶセット",
        subImageAlt: "体験写真",
      },
      ingredients: {
        eyebrow: "The Bounty of Ishigaki",
        title: "旅の最後に味わいたい、島の三大ごちそう",
        wagyu: {
          name: "石垣牛",
          description:
            "石垣島の温暖な気候と豊かな緑が育んだブランド牛。きめ細かなサシ、上品な甘み、とろける口どけをしゃぶしゃぶでご堪能ください。",
        },
        agu: {
          name: "アグー豚",
          description:
            "沖縄在来の血統を受け継ぐ希少な純血種。濃い旨みと、口の中ですっとほどける脂の甘みが、石垣島の夜を贅沢に締めくくります。",
        },
        seaGrapes: {
          name: "名物・海ぶどう巻き",
          description:
            "さっと出汁にくぐらせたアグー豚を、海ぶどうで巻く三田丁ならではの一品。弾ける食感と塩味が、肉の甘みを引き立てます。",
        },
        finale: {
          imageAlt: "〆の雑炊",
          name: "〆の逸品",
          description:
            "肉の旨みが溶け出した出汁で愉しむ、究極のアーサー雑炊。",
        },
      },
      reviews: {
        eyebrow: "Guest Experiences",
        title: "お客様の声から見える、三田丁の魅力",
        lead:
          "お客様から寄せられた声には、料理の美味しさだけではない、三田丁ならではの時間が表れています。",
        note:
          "Google口コミに寄せられた内容の傾向を、テーマごとに要約しています。",
        cards: {
          discovery: {
            title: "味わいの発見",
            description:
              "アグー豚の甘みと、肉を海ぶどうで巻く驚き。石垣島らしい食材と食べ方が、記憶に残るひと口をつくる。",
          },
          hospitality: {
            title: "心を添えるおもてなし",
            description:
              "食材や美味しい食べ方を丁寧に案内する接客が、初めての方にも安心して楽しめる時間をつくる。",
          },
          memory: {
            title: "旅の記憶になる時間",
            description:
              "落ち着いた空間で、大切な人とゆっくり食事を楽しむ。その時間全体が、石垣島の旅の思い出になる。",
          },
        },
      },
      space: {
        eyebrow: "The Atmosphere",
        title: "五感で愉しむ空間",
        description:
          "都会の喧騒を離れ、洗練されたモダンな和の空間へ。カウンター席ではカジュアルな空間を、個室では大切な方とのプライベートな時間を。",
        counterAlt: "カウンター席",
        privateAlt: "個室",
        wideAlt: "店内全景",
      },
      access: {
        title: "店舗情報",
        addressLabel: "Address",
        addressFirst: "〒907-0024",
        addressSecond: "沖縄県石垣市石垣270-6",
        hoursLabel: "Hours",
        hoursFirst: "17:00 - 23:00 (L.O. 22:00)",
        hoursSecond: "定休日：木曜日",
        contactLabel: "Contact",
        exteriorAlt: "店舗外観",
        mapTitle: "三田丁へのアクセスマップ",
        directions: "石垣空港より車で約20分 / 市街地中心部より徒歩5分",
      },
      reservation: {
        eyebrow: "Reservation",
        titleFirst: "旅の思い出になる、",
        titleSecond: "石垣島のディナーを。",
        leadFirst: "石垣牛、アグー豚、名物の海ぶどう巻き。",
        leadSecond: "三田丁で、旅の余韻まで美味しい夜を。",
        noteFirst: "席数に限りがございます。ご来店予定がお決まりの際は、",
        noteSecond: "事前のご予約をおすすめしております。",
        online: "空席を確認・予約する →",
        phone: "電話で相談する",
      },
      footer: {
        description:
          "石垣島の食材にこだわり抜いた、究極のしゃぶしゃぶ専門店。",
        menuLabel: "Menu",
        experience: "三田丁の体験",
        ingredients: "厳選食材",
        space: "お席のご案内",
        access: "アクセス",
        socialLabel: "Social",
        copyright: "© 三田丁 All Rights Reserved.",
      },
    },
  },
  en: {
    label: "EN",
    htmlLang: "en",
    reservationUrl:
      "https://www.tablecheck.com/en/mitatei-ishigaki/reserve/message?utm_source=google&rwg_token=AE37R_jSEzNenTBqTJ-MR5OQ6sdwE--4i9JpOev87X4rmYa6aylqZ9Z4Pw84Kif8AYZkpCxiz41euycLdjnSKHArxrOE1VNu3MGhJIW9girNeMBqNFL9oiM%3D",
    messages: {
      navigationLabel: "Main navigation",
      languageLabel: "Select language",
      nav: {
        experience: "Experience",
        ingredients: "Menu",
        space: "Atmosphere",
        access: "Access",
        reservation: "Book a Table",
      },
      hero: {
        titleFirst: "An Ishigaki dining experience",
        titleSecond: "to remember.",
        description:
          "Savor Ishigaki beef, Okinawan Agu pork, and our signature sea grape roll, served with thoughtful hospitality in a calm, refined setting.",
        reservation: "Book a Table",
        ingredients: "Explore the Island Feast",
        imageAlt: "Ishigaki beef shabu-shabu",
      },
      experience: {
        eyebrow: "Our Concept",
        title: "The Mitatei Experience",
        first:
          "The nature of Ishigaki Island nurtures flavors that are both bold and refined. At Mitatei, our purpose is to offer more than a meal—we create an experience to remember.",
        second:
          "Savor Ishigaki beef and Okinawan Agu pork in a refined Japanese setting, then discover our signature sea grape rolls. It is an island feast designed to make the final night of your trip unforgettable.",
        quote: "“A delicious final chapter to your island journey.”",
        imageAlt: "Mitatei shabu-shabu set",
        subImageAlt: "Dining experience",
      },
      ingredients: {
        eyebrow: "The Bounty of Ishigaki",
        title: "Three Island Specialties for Your Final Night",
        wagyu: {
          name: "Ishigaki Beef",
          description:
            "Raised in Ishigaki’s warm climate and lush greenery, this celebrated wagyu brings fine marbling, elegant sweetness, and melt-in-the-mouth richness to every dip in the broth.",
        },
        agu: {
          name: "Okinawan Agu Pork",
          description:
            "A rare heritage breed carrying Okinawa’s native bloodline, prized for its deep flavor and clean, gently sweet fat that melts delicately on the palate.",
        },
        seaGrapes: {
          name: "Signature Sea Grape Roll",
          description:
            "Wrap tender Okinawan Agu pork in fresh sea grapes for Mitatei’s signature bite: a lively pop of ocean brine that lifts the pork’s natural sweetness.",
        },
        finale: {
          imageAlt: "Rice porridge finale",
          name: "The Perfect Finale",
          description:
            "A comforting rice porridge with fragrant Okinawan sea lettuce, prepared in a broth enriched with every last drop of savory flavor.",
        },
      },
      reviews: {
        eyebrow: "Guest Experiences",
        title: "What Guests Remember About Mitatei",
        lead:
          "Guest feedback reveals an experience shaped by more than the food alone.",
        note:
          "These themes summarize common feedback shared in Google reviews; they are not direct quotations.",
        cards: {
          discovery: {
            title: "A Taste of Discovery",
            description:
              "The gentle sweetness of Okinawan Agu pork meets the surprising pop of sea grapes in a distinctly Ishigaki bite.",
          },
          hospitality: {
            title: "Thoughtful Hospitality",
            description:
              "Careful guidance on the ingredients and how to enjoy them helps first-time guests feel at ease throughout the meal.",
          },
          memory: {
            title: "A Moment to Remember",
            description:
              "A calm, refined setting invites guests to slow down, share a meal, and carry the experience with them as part of their Ishigaki journey.",
          },
        },
      },
      space: {
        eyebrow: "The Atmosphere",
        title: "A Feast for Every Sense",
        description:
          "Leave the bustle behind and step into a refined, contemporary Japanese setting. Settle in at the counter for a relaxed evening, or choose a private room for an intimate meal with someone special.",
        counterAlt: "Counter seating",
        privateAlt: "Private dining room",
        wideAlt: "Restaurant interior",
      },
      access: {
        title: "Location & Hours",
        addressLabel: "Address",
        addressFirst: "270-6 Ishigaki",
        addressSecond: "Ishigaki, Okinawa 907-0024",
        hoursLabel: "Hours",
        hoursFirst: "5:00 PM - 11:00 PM (L.O. 10:00 PM)",
        hoursSecond: "Closed Thursdays",
        contactLabel: "Contact",
        exteriorAlt: "Mitatei exterior",
        mapTitle: "Map to Mitatei",
        directions:
          "About 20 minutes by car from Ishigaki Airport / 5 minutes on foot from central Ishigaki",
      },
      reservation: {
        eyebrow: "Reservation",
        titleFirst: "A memorable dinner",
        titleSecond: "in Ishigaki.",
        leadFirst:
          "Ishigaki beef, Okinawan Agu pork, and our signature sea grape rolls—",
        leadSecond: "an island feast at Mitatei.",
        noteFirst: "Seating is limited.",
        noteSecond:
          "We recommend booking in advance once your plans are confirmed.",
        online: "Check Availability & Book →",
        phone: "Call Us",
      },
      footer: {
        description:
          "An exceptional shabu-shabu restaurant dedicated to the finest ingredients of Ishigaki Island.",
        menuLabel: "Menu",
        experience: "The Mitatei Experience",
        ingredients: "Our Ingredients",
        space: "Seating & Atmosphere",
        access: "Access",
        socialLabel: "Social",
        copyright: "© Mitatei. All Rights Reserved.",
      },
    },
  },
} as const;

type Locale = keyof typeof languages;

export default function Home() {
  const [currentSub, setCurrentSub] = useState(0);
  const [locale, setLocale] = useState<Locale>("ja");
  const language = languages[locale];
  const t = language.messages;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSub((prev) => (prev + 1) % subImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language.htmlLang;
  }, [language.htmlLang]);

  return (
    <main className="bg-[#131313] text-[#e5e2e1] min-h-screen">

      {/* ナビゲーション */}
      <nav
        className="sticky top-0 z-50 bg-[#131313]/80 backdrop-blur-md border-b border-[#4e4639]/30"
        aria-label={t.navigationLabel}
      >
        <div className="flex justify-between items-center px-5 md:px-[120px] py-4 w-full max-w-[1200px] mx-auto">
          <Image
           src="/images/logo.png"
           alt="三田丁"
           width={140}
           height={50}
           className="w-[100px] sm:w-[140px] h-auto"
           priority
           />
          <div className="hidden md:flex items-center gap-8">
            <a href="#experience" className="text-sm text-[#d1c5b4] hover:text-[#e9c176] transition-colors">{t.nav.experience}</a>
            <a href="#ingredients" className="text-sm text-[#d1c5b4] hover:text-[#e9c176] transition-colors">{t.nav.ingredients}</a>
            <a href="#space" className="text-sm text-[#d1c5b4] hover:text-[#e9c176] transition-colors">{t.nav.space}</a>
            <a href="#access" className="text-sm text-[#d1c5b4] hover:text-[#e9c176] transition-colors">{t.nav.access}</a>
          </div>
          <div className="flex items-center gap-2 sm:gap-6">
            <div
              className="text-xs tracking-widest flex items-center gap-1 sm:gap-2"
              aria-label={t.languageLabel}
            >
              {(Object.keys(languages) as Locale[]).map((code, index) => (
                <span key={code} className="flex items-center gap-2">
                  {index > 0 && <span className="text-[#4e4639]">/</span>}
                  <button
                    type="button"
                    onClick={() => setLocale(code)}
                    aria-pressed={locale === code}
                    className={`transition-colors ${
                      locale === code
                        ? "text-[#e9c176]"
                        : "text-[#B38B4D] hover:text-[#e9c176]"
                    }`}
                  >
                    {languages[code].label}
                  </button>
                </span>
              ))}
            </div>
            <a href="#reservation" className="bg-[#c5a059] text-[#4e3700] px-3 sm:px-6 py-2 text-xs sm:text-sm whitespace-nowrap font-bold hover:brightness-110 transition-all">{t.nav.reservation}</a>
          </div>
        </div>
      </nav>

      {/* ヒーロー */}
      <section className="relative h-[921px] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero.jpg" alt={t.hero.imageAlt} fill className="object-cover opacity-60" priority />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#131313] via-[#131313]/60 to-transparent"></div>
        </div>
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 md:px-[120px]">
          <div className="max-w-xl mb-20">
            <h1 className="text-3xl md:text-[48px] font-bold text-[#F9F8F6] mb-8 leading-tight">
              {t.hero.titleFirst}<br />{t.hero.titleSecond}
            </h1>
            <p className="text-lg text-[#d1c5b4] mb-12 max-w-lg leading-relaxed">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#reservation" className="bg-[#e9c176] py-4 px-12 text-[#412d00] font-bold text-lg text-center hover:bg-[#B38B4D] transition-colors">{t.hero.reservation}</a>
              <a href="#ingredients" className="border border-[#4e4639] py-4 px-12 text-[#F9F8F6] font-bold text-lg text-center hover:bg-white/5 transition-colors">{t.hero.ingredients}</a>
            </div>
          </div>
        </div>
      </section>

      {/* 体験セクション */}
      <section className="py-20 md:py-[120px] px-5 md:px-0" id="experience">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs text-[#B38B4D] tracking-[0.2em] uppercase mb-4 block">{t.experience.eyebrow}</span>
              <h2 className="text-3xl font-bold text-[#F9F8F6] mb-8">{t.experience.title}</h2>
              <p className="text-lg text-[#d1c5b4] mb-6 leading-relaxed">
                {t.experience.first}
              </p>
              <p className="text-base text-[#d1c5b4] mb-12 leading-relaxed">
                {t.experience.second}
              </p>
              <div className="border-l-2 border-[#e9c176] pl-6 py-2 italic text-[#B38B4D] text-lg">
                {t.experience.quote}
              </div>
            </div>
            <div className="relative h-[500px]">
              <Image src="/images/experience.jpg" alt={t.experience.imageAlt} fill className="object-cover rounded-lg shadow-2xl" />
              {/* スライドショー */}
              <div className="absolute -bottom-10 -right-4 w-56 h-40 overflow-hidden rounded-lg border-4 border-[#131313] shadow-xl">
                {subImages.map((src, i) => (
                  <Image
                    key={src}
                    src={src}
                    alt={`${t.experience.subImageAlt} ${i + 1}`}
                    fill
                    className={`object-cover transition-opacity duration-1000 ${i === currentSub ? "opacity-100" : "opacity-0"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 食材セクション */}
      <section className="py-20 md:py-[120px] bg-[#1c1b1b]" id="ingredients">
        <div className="max-w-[1200px] mx-auto px-5 md:px-[120px]">
          <div className="text-center mb-16">
            <span className="text-xs text-[#B38B4D] tracking-[0.2em] uppercase mb-4 block">{t.ingredients.eyebrow}</span>
            <h2 className="text-3xl font-bold text-[#F9F8F6]">{t.ingredients.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-6 md:h-[900px]">
            <div className="md:col-span-5 md:row-span-2 relative overflow-hidden group min-h-[400px]">
              <Image src="/images/wagyu.jpg" alt={t.ingredients.wagyu.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 p-10">
                <h3 className="text-2xl font-bold text-[#e9c176] mb-3">{t.ingredients.wagyu.name}</h3>
                <p className="text-[#d1c5b4] max-w-md text-sm">{t.ingredients.wagyu.description}</p>
              </div>
            </div>
            <div className="md:col-span-7 relative overflow-hidden group min-h-[280px]">
              <Image src="/images/agu.jpg" alt={t.ingredients.agu.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 p-10">
                <h3 className="text-2xl font-bold text-[#e9c176] mb-3">{t.ingredients.agu.name}</h3>
                <p className="text-[#d1c5b4] text-sm">{t.ingredients.agu.description}</p>
              </div>
            </div>
            <div className="md:col-span-3 relative overflow-hidden group min-h-[250px]">
              <Image src="/images/umibudo.jpg" alt={t.ingredients.seaGrapes.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 p-6">
                <h3 className="text-xl font-bold text-[#e9c176] mb-2">{t.ingredients.seaGrapes.name}</h3>
                <p className="text-[#d1c5b4] text-sm">{t.ingredients.seaGrapes.description}</p>
              </div>
            </div>
            <div className="md:col-span-4 relative overflow-hidden group min-h-[250px]">
  <Image
    src="/images/shime.jpg"
    alt={t.ingredients.finale.imageAlt}
    fill
    className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
  <div className="absolute bottom-0 p-6">
    <h3 className="text-xl font-bold text-[#e9c176] mb-2">{t.ingredients.finale.name}</h3>
    <p className="text-[#d1c5b4] text-sm">
      {t.ingredients.finale.description}
    </p>
  </div>
</div>
          </div>
        </div>
      </section>

      {/* お客様の声セクション */}
      <section className="py-20 md:py-[120px]" id="reviews">
        <div className="max-w-[1200px] mx-auto px-5 md:px-[120px]">
          <div className="text-center mb-16">
            <span className="text-xs text-[#B38B4D] tracking-[0.2em] uppercase mb-4 block">
              {t.reviews.eyebrow}
            </span>
            <h2 className="text-3xl font-bold text-[#F9F8F6] mb-6">
              {t.reviews.title}
            </h2>
            <p className="max-w-2xl mx-auto text-[#d1c5b4] leading-relaxed">
              {t.reviews.lead}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.values(t.reviews.cards).map((card) => (
              <div
                key={card.title}
                className="bg-[#1c1b1b] border border-[#4e4639]/30 p-8 md:p-10"
              >
                <h3 className="text-xl font-bold text-[#e9c176] mb-4">
                  {card.title}
                </h3>
                <p className="text-[#d1c5b4] leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-[#B38B4D] text-center">
            {t.reviews.note}
          </p>
        </div>
      </section>

      {/* 空間セクション */}
      <section className="py-20 md:py-[120px]" id="space">
        <div className="max-w-[1200px] mx-auto px-5 md:px-[120px]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <span className="text-xs text-[#B38B4D] tracking-[0.2em] uppercase mb-4 block">{t.space.eyebrow}</span>
              <h2 className="text-3xl font-bold text-[#F9F8F6]">{t.space.title}</h2>
            </div>
            <p className="max-w-md text-[#d1c5b4] mt-6 md:mt-0">
              {t.space.description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
              <Image src="/images/space-counter.jpg" alt={t.space.counterAlt} fill className="object-cover" />
            </div>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
              <Image src="/images/space-private.jpg" alt={t.space.privateAlt} fill className="object-cover" />
            </div>
            <div className="md:col-span-2 relative w-full aspect-[21/9] overflow-hidden rounded-lg">
              <Image src="/images/space-wide.jpg" alt={t.space.wideAlt} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* アクセスセクション */}
      <section className="py-20 md:py-[120px] bg-[#0e0e0e]" id="access">
        <div className="max-w-[1200px] mx-auto px-5 md:px-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-[#F9F8F6] mb-10">{t.access.title}</h2>
              <div className="space-y-8 text-[#d1c5b4]">
                <div>
                  <span className="text-xs text-[#B38B4D] tracking-[0.2em] uppercase block mb-2">{t.access.addressLabel}</span>
                  <p>{t.access.addressFirst}<br />{t.access.addressSecond}</p>
                </div>
                <div>
                  <span className="text-xs text-[#B38B4D] tracking-[0.2em] uppercase block mb-2">{t.access.hoursLabel}</span>
                  <p>{t.access.hoursFirst}<br />{t.access.hoursSecond}</p>
                </div>
                <div>
                  <span className="text-xs text-[#B38B4D] tracking-[0.2em] uppercase block mb-2">{t.access.contactLabel}</span>
                  <p>TEL: 0980-82-6351</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden border border-[#4e4639]/30">
                <Image src="/images/exterior.jpg" alt={t.access.exteriorAlt} fill className="object-cover" />
              </div>
            </div>
          </div>
          <div className="mt-16">
            <div className="w-full h-[450px] bg-[#201f1f] rounded-lg overflow-hidden border border-[#4e4639]/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3635.1287341467437!2d124.15257447535427!3d24.34200792827138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z5LiJ55Sw5LiB!5e0!3m2!1sja!2sjp!4v1782864130432!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }}
                allowFullScreen
                loading="lazy"
                title={t.access.mapTitle}
              ></iframe>
            </div>
            <p className="mt-6 text-sm text-[#d1c5b4] text-center">
              {t.access.directions}
            </p>
          </div>
        </div>
      </section>

      {/* 予約セクション */}
<section className="py-20 md:py-[120px] bg-[#c5a059] text-[#2a1d00]" id="reservation">
  <div className="max-w-[1200px] mx-auto px-5 text-center">
    <span className="text-xs tracking-[0.25em] uppercase mb-6 block opacity-70">
      {t.reservation.eyebrow}
    </span>

    <h2 className="text-3xl md:text-[48px] font-bold mb-8 leading-tight">
      {t.reservation.titleFirst}<br className="hidden md:block" />
      {t.reservation.titleSecond}
    </h2>

    <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90 leading-relaxed">
      <span className="block">{t.reservation.leadFirst}</span>
      <span className="block">{t.reservation.leadSecond}</span>
    </p>

    <p className="text-sm md:text-base mb-12 max-w-2xl mx-auto opacity-80 leading-relaxed">
      <span className="block">{t.reservation.noteFirst}</span>
      <span className="block">{t.reservation.noteSecond}</span>
    </p>

    <div className="flex flex-col md:flex-row justify-center items-center gap-6">
      <a
  href={language.reservationUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center gap-3 w-full md:w-auto bg-[#2a1d00] text-[#e9c176] font-bold py-5 px-10 text-lg md:text-xl rounded-full hover:brightness-110 hover:scale-105 transition-all duration-500"
>
  {t.reservation.online}
</a>

      <a
        href="tel:0980826351"
        className="flex items-center justify-center gap-3 w-full md:w-auto border-2 border-[#2a1d00] text-[#2a1d00] font-bold py-5 px-10 text-lg md:text-xl rounded-full hover:bg-[#2a1d00] hover:text-[#e9c176] hover:scale-105 transition-all duration-500"
      >
        {t.reservation.phone}
      </a>
    </div>

    <div className="mt-8 text-xl md:text-2xl font-bold tracking-widest">
      TEL: 0980-82-6351
    </div>
  </div>
</section>

      {/* フッター */}
      <footer className="bg-[#121212] border-t border-[#4e4639]/20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5 md:px-[120px] py-10 max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-6">
            <div className="text-2xl font-bold text-[#e9c176]">三田丁</div>
            <p className="text-sm text-[#d1c5b4]">{t.footer.description}</p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs text-[#B38B4D] tracking-[0.2em] uppercase">{t.footer.menuLabel}</span>
            <a href="#experience" className="text-sm text-[#d1c5b4] hover:text-[#e9c176] transition-colors">{t.footer.experience}</a>
            <a href="#ingredients" className="text-sm text-[#d1c5b4] hover:text-[#e9c176] transition-colors">{t.footer.ingredients}</a>
            <a href="#space" className="text-sm text-[#d1c5b4] hover:text-[#e9c176] transition-colors">{t.footer.space}</a>
            <a href="#access" className="text-sm text-[#d1c5b4] hover:text-[#e9c176] transition-colors">{t.footer.access}</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs text-[#B38B4D] tracking-[0.2em] uppercase">{t.footer.socialLabel}</span>
            <a
              href="https://www.instagram.com/nikudo_ishigaki_mitatei/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 text-sm text-[#d1c5b4] hover:text-[#e9c176] transition-colors"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-4 w-4 shrink-0"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              Instagram
            </a>
            <div className="mt-8 text-sm text-[#d1c5b4]">{t.footer.copyright}</div>
          </div>
        </div>
      </footer>

    </main>
  );
}
