"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const subImages = [
  "/images/experience-sub1.jpg",
  "/images/experience-sub2.jpg",
  "/images/experience-sub3.jpg",
  "/images/experience-sub4.jpg",
];

export default function Home() {
  const [currentSub, setCurrentSub] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSub((prev) => (prev + 1) % subImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-[#131313] text-[#e5e2e1] min-h-screen">

      {/* ナビゲーション */}
      <nav className="sticky top-0 z-50 bg-[#131313]/80 backdrop-blur-md border-b border-[#4e4639]/30">
        <div className="flex justify-between items-center px-5 md:px-[120px] py-4 w-full max-w-[1200px] mx-auto">
          <div className="text-[#e9c176] font-bold text-2xl">三田丁</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#experience" className="text-sm text-[#d1c5b4] hover:text-[#e9c176] transition-colors">体験</a>
            <a href="#ingredients" className="text-sm text-[#d1c5b4] hover:text-[#e9c176] transition-colors">メニュー</a>
            <a href="#space" className="text-sm text-[#d1c5b4] hover:text-[#e9c176] transition-colors">空間</a>
            <a href="#access" className="text-sm text-[#d1c5b4] hover:text-[#e9c176] transition-colors">アクセス</a>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-xs text-[#B38B4D] tracking-widest hidden sm:inline">JP/EN/KR/CN</span>
            <a href="#reservation" className="bg-[#c5a059] text-[#4e3700] px-6 py-2 text-sm font-bold hover:brightness-110 transition-all">予約する</a>
          </div>
        </div>
      </nav>

      {/* ヒーロー */}
      <section className="relative h-[921px] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero.jpg" alt="石垣牛しゃぶしゃぶ" fill className="object-cover opacity-60" priority />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#131313] via-[#131313]/60 to-transparent"></div>
        </div>
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 md:px-[120px]">
          <div className="max-w-xl mb-20">
            <h1 className="text-3xl md:text-[52px] font-bold text-[#F9F8F6] mb-8 leading-tight">
              石垣島の恵みを味わう、<br />至福のしゃぶしゃぶ体験。
            </h1>
            <p className="text-lg text-[#d1c5b4] mb-12 max-w-lg leading-relaxed">
              厳選された石垣牛と、島特有の食材が織りなす極上の和食。プライベートな空間で、心ゆくまで贅沢なひとときを。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#reservation" className="bg-[#e9c176] py-4 px-12 text-[#412d00] font-bold text-lg text-center hover:bg-[#B38B4D] transition-colors">今すぐ予約する</a>
              <a href="#ingredients" className="border border-[#4e4639] py-4 px-12 text-[#F9F8F6] font-bold text-lg text-center hover:bg-white/5 transition-colors">お品書きを見る</a>
            </div>
          </div>
        </div>
      </section>

      {/* 体験セクション */}
      <section className="py-20 md:py-[120px] px-5 md:px-0" id="experience">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs text-[#B38B4D] tracking-[0.2em] uppercase mb-4 block">Our Concept</span>
              <h2 className="text-3xl font-bold text-[#F9F8F6] mb-8">三田丁の体験</h2>
              <p className="text-lg text-[#d1c5b4] mb-6 leading-relaxed">
                石垣島の自然が育んだ、力強くも繊細な味わい。私たちは、単なる食事を超えた「記憶に残る体験」を提供することを使命としています。
              </p>
              <p className="text-base text-[#d1c5b4] mb-12 leading-relaxed">
                洗練された和の空間で、職人が選び抜いた最高級の石垣牛とアグー豚をご用意。海ぶどうのプチプチとした食感と肉の旨みが溶け合う、当店ならではのシグネチャーメニューをお楽しみください。
              </p>
              <div className="border-l-2 border-[#e9c176] pl-6 py-2 italic text-[#B38B4D] text-lg">
                「島と人が繋がる、最も贅沢な時間」
              </div>
            </div>
            <div className="relative h-[500px]">
              <Image src="/images/experience.jpg" alt="しゃぶしゃぶセット" fill className="object-cover rounded-lg shadow-2xl" />
              {/* スライドショー */}
              <div className="absolute -bottom-10 -right-4 w-56 h-40 overflow-hidden rounded-lg border-4 border-[#131313] shadow-xl">
                {subImages.map((src, i) => (
                  <Image
                    key={src}
                    src={src}
                    alt={`体験写真${i + 1}`}
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
            <span className="text-xs text-[#B38B4D] tracking-[0.2em] uppercase mb-4 block">The Bounty of Ishigaki</span>
            <h2 className="text-3xl font-bold text-[#F9F8F6]">厳選された至高の食材</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-6 md:h-[900px]">
            <div className="md:col-span-5 md:row-span-2 relative overflow-hidden group min-h-[400px]">
              <Image src="/images/wagyu.jpg" alt="石垣牛" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 p-10">
                <h3 className="text-2xl font-bold text-[#e9c176] mb-3">石垣牛</h3>
                <p className="text-[#d1c5b4] max-w-md text-sm">石垣島の温暖な気候と豊かな緑で育ったブランド牛。きめ細やかなサシが口の中で甘く溶け出す、極上の旨みをご堪能ください。</p>
              </div>
            </div>
            <div className="md:col-span-7 relative overflow-hidden group min-h-[280px]">
              <Image src="/images/agu.jpg" alt="アグー豚" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 p-10">
                <h3 className="text-2xl font-bold text-[#e9c176] mb-3">純血アグー豚</h3>
                <p className="text-[#d1c5b4] text-sm">希少な沖縄の在来種。通常の豚よりも融点が低く、コクがありながらもさっぱりとした脂の甘みが特徴です。</p>
              </div>
            </div>
            <div className="md:col-span-3 relative overflow-hidden group min-h-[250px]">
              <Image src="/images/umibudo.jpg" alt="海ぶどう" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 p-6">
                <h3 className="text-xl font-bold text-[#e9c176] mb-2">海ぶどう</h3>
                <p className="text-[#d1c5b4] text-sm">プチプチとした磯の宝石。</p>
              </div>
            </div>
            <div className="md:col-span-4 bg-[#2a2a2a] p-8 flex flex-col justify-center">
              <div className="relative w-full h-32 overflow-hidden rounded-lg mb-6">
                <Image src="/images/shime.jpg" alt="〆の雑炊" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-[#F9F8F6] mb-4">〆の逸品</h3>
              <p className="text-[#d1c5b4] text-sm mb-4">肉の旨みが溶け出した出汁で愉しむ、究極のアーサー雑炊。</p>
              <a href="#reservation" className="text-[#e9c176] border-b border-[#e9c176]/30 pb-1 text-sm font-bold hover:text-[#B38B4D] transition-colors inline-block w-fit">予約する →</a>
            </div>
          </div>
        </div>
      </section>

      {/* 空間セクション */}
      <section className="py-20 md:py-[120px]" id="space">
        <div className="max-w-[1200px] mx-auto px-5 md:px-[120px]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <span className="text-xs text-[#B38B4D] tracking-[0.2em] uppercase mb-4 block">The Atmosphere</span>
              <h2 className="text-3xl font-bold text-[#F9F8F6]">五感で愉しむ空間</h2>
            </div>
            <p className="max-w-md text-[#d1c5b4] mt-6 md:mt-0">
              都会の喧騒を離れ、洗練されたモダンな和の空間へ。カウンター席では職人の技を間近に、個室では大切な方とのプライベートな時間を。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
              <Image src="/images/space-counter.jpg" alt="カウンター席" fill className="object-cover" />
            </div>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
              <Image src="/images/space-private.jpg" alt="個室" fill className="object-cover" />
            </div>
            <div className="md:col-span-2 relative w-full aspect-[21/9] overflow-hidden rounded-lg">
              <Image src="/images/space-wide.jpg" alt="店内全景" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* アクセスセクション */}
      <section className="py-20 md:py-[120px] bg-[#0e0e0e]" id="access">
        <div className="max-w-[1200px] mx-auto px-5 md:px-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-[#F9F8F6] mb-10">店舗情報</h2>
              <div className="space-y-8 text-[#d1c5b4]">
                <div>
                  <span className="text-xs text-[#B38B4D] tracking-[0.2em] uppercase block mb-2">Address</span>
                  <p>〒907-0024<br />沖縄県石垣市石垣270-6</p>
                </div>
                <div>
                  <span className="text-xs text-[#B38B4D] tracking-[0.2em] uppercase block mb-2">Hours</span>
                  <p>17:00 - 23:00 (L.O. 22:00)<br />定休日：木曜日</p>
                </div>
                <div>
                  <span className="text-xs text-[#B38B4D] tracking-[0.2em] uppercase block mb-2">Contact</span>
                  <p>TEL: 0980-82-6351</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden border border-[#4e4639]/30">
                <Image src="/images/exterior.jpg" alt="店舗外観" fill className="object-cover" />
              </div>
            </div>
          </div>
          <div className="mt-16">
            <div className="w-full h-[450px] bg-[#201f1f] rounded-lg overflow-hidden border border-[#4e4639]/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.123456789!2d124.156789!3d24.345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x345fd123456789%3A0x123456789abcdef!2sIshigaki%2C%20Okinawa!5e0!3m2!1sen!2sjp!4v1700000000000!5m2!1sen!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <p className="mt-6 text-sm text-[#d1c5b4] text-center">
              石垣空港より車で約20分 / 市街地中心部より徒歩5分
            </p>
          </div>
        </div>
      </section>

      {/* 予約セクション */}
      <section className="py-20 md:py-[120px] bg-[#c5a059] text-[#4e3700]" id="reservation">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <h2 className="text-4xl md:text-[64px] font-bold mb-8">至福のひとときを予約する</h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto opacity-90 leading-relaxed">
            お電話またはウェブ予約にて承っております。<br className="hidden md:block" />皆様のご来店を、心よりお待ち申し上げております。
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a href="#" className="flex items-center justify-center gap-3 w-full md:w-auto bg-[#4e3700] text-[#c5a059] font-bold py-5 px-10 text-xl hover:brightness-110 transition-all">
              今すぐウェブで予約する
            </a>
            <a href="tel:0980-82-6351" className="flex items-center justify-center gap-3 w-full md:w-auto border-2 border-[#4e3700] text-[#4e3700] font-bold py-5 px-10 text-xl hover:bg-[#4e3700] hover:text-[#c5a059] transition-all">
              お電話で予約・相談する
            </a>
          </div>
          <div className="mt-8 text-2xl font-bold tracking-widest">
            TEL: 0980-82-6351
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-[#121212] border-t border-[#4e4639]/20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5 md:px-[120px] py-10 max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-6">
            <div className="text-2xl font-bold text-[#e9c176]">三田丁</div>
            <p className="text-sm text-[#d1c5b4]">石垣島の食材にこだわり抜いた、究極のしゃぶしゃぶ専門店。</p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs text-[#B38B4D] tracking-[0.2em] uppercase">Menu</span>
            <a href="#experience" className="text-sm text-[#d1c5b4] hover:text-[#e9c176] transition-colors">三田丁の体験</a>
            <a href="#ingredients" className="text-sm text-[#d1c5b4] hover:text-[#e9c176] transition-colors">厳選食材</a>
            <a href="#space" className="text-sm text-[#d1c5b4] hover:text-[#e9c176] transition-colors">お席のご案内</a>
            <a href="#access" className="text-sm text-[#d1c5b4] hover:text-[#e9c176] transition-colors">アクセス</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs text-[#B38B4D] tracking-[0.2em] uppercase">Social</span>
            <a href="#" className="text-sm text-[#d1c5b4] hover:text-[#e9c176] transition-colors">Instagram</a>
            <div className="mt-8 text-sm text-[#d1c5b4]">© 三田丁 All Rights Reserved.</div>
          </div>
        </div>
      </footer>

    </main>
  );
}