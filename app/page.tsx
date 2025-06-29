import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Camera,
  Film,
  Calendar,
  MapPin,
  Users,
  Trophy,
  Star,
  Gift,
  Link,
  FileText,
  Award,
  CheckCircle,
} from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { Header } from "@/components/header"
import { CleanAccordion } from "@/components/clean-accordion"
import Image from "next/image"
import { HashtagCopyButton } from "@/components/hashtag-copy-button"

export default function PhotoContestSite() {
  const contestDetails = [
    {
      title: "会場・アクセス",
      content:
        "東京サマーランド（東京都あきる野市）で開催！プールエリアでの撮影となります。最寄り駅からの無料シャトルバスも運行予定です。",
      icon: <MapPin className="w-5 h-5 text-purple-600" />,
    },
    {
      title: "SNS投稿のお願い",
      content:
        "撮影作品についてはSNSなどにアップのご協力をお願いします！ハッシュタグ：#真夏の水着祭 #ぴにょぐらむ をご利用ください。",
      icon: <Users className="w-5 h-5 text-purple-600" />,
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-16 relative w-full">
        {/* Desktop Hero Image */}
        <div className="hidden md:block w-full">
          <Image
            src="/hero-desktop-new.png"
            alt="コラボ撮影コンテスト - 真夏の水着祭 × Pinyogram"
            width={1920}
            height={1080}
            className="w-full h-auto object-contain"
            priority
            sizes="100vw"
          />
        </div>

        {/* Mobile Hero Image */}
        <div className="block md:hidden w-full">
          <Image
            src="/hero-mobile-new.png"
            alt="コラボ撮影コンテスト - 真夏の水着祭 × Pinyogram"
            width={750}
            height={1334}
            className="w-full h-auto object-contain"
            priority
            sizes="100vw"
          />
        </div>
      </section>

      {/* Main Content */}
      <main className="relative w-full">
        {/* Contest Schedule Section - Prominent placement */}
        <section
          id="schedule"
          className="py-20 md:py-24 bg-gradient-to-b from-[#e1d1fa] via-[#e1d1fa] to-[#f5d1fa] scroll-mt-20"
        >
          <div className="max-w-6xl mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-16 md:mb-20">
                <div className="inline-flex items-center gap-3 bg-purple-600 text-white rounded-full px-6 py-3 mb-6">
                  <Calendar className="w-6 h-6" />
                  <span className="text-lg font-bold">📅 重要なスケジュール</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-black mb-6">コンテストスケジュール</h2>
                <p className="text-xl md:text-2xl text-gray-700 font-semibold">見逃せない重要な日程をチェック！</p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <AnimatedSection delay={100}>
                <Card className="bg-white border-4 border-purple-200 hover:border-purple-400 transition-all duration-300 shadow-xl hover:shadow-2xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FileText className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">応募期間</h3>
                    <p className="text-4xl font-black text-green-600 mb-2">7/2 〜 7/31</p>
                    <p className="text-lg text-gray-600 font-medium">作品応募受付中</p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <Card className="bg-white border-4 border-purple-200 hover:border-purple-400 transition-all duration-300 shadow-xl hover:shadow-2xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">審査期間</h3>
                    <p className="text-4xl font-black text-blue-600 mb-2">7/31 〜 8/15</p>
                    <p className="text-lg text-gray-600 font-medium">プロ審査員による厳正審査</p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <Card className="bg-white border-4 border-purple-200 hover:border-purple-400 transition-all duration-300 shadow-xl hover:shadow-2xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Award className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">結果発表</h3>
                    <p className="text-4xl font-black text-orange-600 mb-2">8/20</p>
                    <p className="text-lg text-gray-600 font-medium">受賞者発表</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Requirements Section - Prominent placement */}
        <section
          id="requirements"
          className="py-20 md:py-24 bg-gradient-to-b from-[#f5d1fa] via-[#f5d1fa] to-[#742ce8] scroll-mt-20"
        >
          <div className="max-w-6xl mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-16 md:mb-20">
                <div className="inline-flex items-center gap-3 bg-blue-600 text-white rounded-full px-6 py-3 mb-6">
                  <FileText className="w-6 h-6" />
                  <span className="text-lg font-bold">📝 応募要項</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-black mb-6">応募要項</h2>
                <p className="text-xl md:text-2xl text-gray-700 font-semibold">必ずお読みください</p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <AnimatedSection delay={100}>
                <Card className="bg-white border-4 border-blue-200 hover:border-blue-400 transition-all duration-300 shadow-xl h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center">
                        <Camera className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900">作品について</h3>
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-4">
                        <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-lg text-gray-700 font-medium">5〜10枚を1組で応募</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-lg text-gray-700 font-medium">複数・単体モデル問わず</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-lg text-gray-700 font-medium">高解像度での応募推奨</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-lg text-gray-700 font-medium">フォーマット：jpg、png</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <Card className="bg-white border-4 border-blue-200 hover:border-blue-400 transition-all duration-300 shadow-xl h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-700 rounded-xl flex items-center justify-center">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900">SNS投稿</h3>
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-4">
                        <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-lg text-gray-700 font-medium">SNS投稿にご協力ください</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-lg text-gray-700 font-medium">ハッシュタグ必須</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-lg font-bold text-pink-600">#真夏の水着祭</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-lg font-bold text-pink-600">#ぴにょぐらむ</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Prizes Section - Highlighted and prominent */}
        <section
          id="prizes"
          className="py-20 md:py-24 bg-gradient-to-b from-[#742ce8] via-[#faf5d1] to-[#faf5d1] scroll-mt-20 relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 "></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#faf5d1]/30 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-200/20 rounded-full translate-y-48 -translate-x-48"></div>

          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <AnimatedSection>
              <div className="text-center mb-16 md:mb-20">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full px-8 py-4 mb-6 shadow-lg">
                  <Trophy className="w-8 h-8" />
                  <span className="text-xl font-black">🎁 豪華賞品あり!</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black mb-4">賞品総額</h2>
                <p className="text-6xl md:text-8xl font-black bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent mb-6">
                  200,000円+
                </p>
                <p className="text-2xl md:text-3xl text-white font-bold">Get these amazing prizes!</p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <AnimatedSection delay={100}>
                <Card className="bg-white border-4 border-yellow-300 hover:border-yellow-500 transition-all duration-300 shadow-2xl hover:shadow-3xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-gradient-to-br from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-bl-2xl font-black text-lg">
                    最高賞
                  </div>
                  <CardContent className="p-8 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Trophy className="w-12 h-12 text-yellow-900" />
                    </div>
                    <h3 className="text-3xl font-black text-gray-900 mb-4">🥇 大賞</h3>
                    <p className="text-5xl font-black text-yellow-600 mb-4">50,000円</p>
                    <div className="bg-yellow-100 rounded-lg p-4 mb-4">
                      <p className="text-lg font-bold text-yellow-800">+ pinyogram撮影会参加券</p>
                    </div>
                    <p className="text-sm text-gray-600 font-medium">最も優秀な作品に贈られる栄誉ある賞</p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <Card className="bg-white border-4 border-orange-300 hover:border-orange-500 transition-all duration-300 shadow-2xl hover:shadow-3xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Star className="w-12 h-12 text-orange-900" />
                    </div>
                    <h3 className="text-3xl font-black text-gray-900 mb-4">🥈 審査員賞</h3>
                    <p className="text-4xl font-black text-orange-600 mb-2">30,000円</p>
                    <p className="text-2xl font-bold text-gray-700 mb-4"></p>
                    <div className="bg-orange-100 rounded-lg p-4 mb-4">
                      <p className="text-lg font-bold text-orange-800">+ pinyogram撮影会参加券</p>
                    </div>
                    <p className="text-sm text-gray-600 font-medium">各審査員が選ぶ特別な作品</p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <Card className="bg-white border-4 border-green-300 hover:border-green-500 transition-all duration-300 shadow-2xl hover:shadow-3xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Gift className="w-12 h-12 text-green-900" />
                    </div>
                    <h3 className="text-3xl font-black text-gray-900 mb-4">🎁 参加賞</h3>
                    <p className="text-4xl font-black text-green-600 mb-4">20% OFF</p>
                    <div className="bg-green-100 rounded-lg p-4 mb-4">
                      <p className="text-lg font-bold text-green-800">撮影会割引クーポン</p>
                    </div>
                    <p className="text-sm text-gray-600 font-medium">応募者全員にプレゼント！</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Judges Section */}
        <section id="judges" className="py-16 md:py-20 bg-gradient-to-b from-[#faf5d1] to-[#dad1fa] scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">審査員紹介</h2>
                <p className="text-lg md:text-xl text-gray-600">業界のプロフェッショナルが厳正に審査いたします</p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <AnimatedSection delay={100}>
                <Card className="text-center hover-lift border-2 border-gray-100 h-full">
                  <CardContent className="p-6 md:p-8">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                      <Camera className="w-8 h-8 md:w-10 md:h-10 text-purple-600" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">くりえみ KURIEMI</h3>
                    <p className="text-sm md:text-base text-purple-600 font-medium mb-3">
                      Pinyokio株式会社CEO / AiHUB株式会社CMO
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      起業家・会社経営者として活動する一方で、モデル・タレントとしても幅広く活躍。2023年12月、日本初のAIキャラクター芸能事務所を設立。自己プロデュース力を武器に、次世代のエンタメ業界を切り拓いている。
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <Card className="text-center hover-lift border-2 border-gray-100 h-full">
                  <CardContent className="p-6 md:p-8">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                      <Film className="w-8 h-8 md:w-10 md:h-10 text-blue-600" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">井上博明</h3>
                    <p className="text-sm md:text-base text-blue-600 font-medium mb-3">アニメプロデューサー</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      手塚治虫の元で『鉄腕アトム』に制作進行として参加後、『オネアミスの翼』などを手がけ、ガイナックス副社長を歴任。『天地無用！』シリーズや『PERFECT
                      BLUE』など多くの話題作をプロデュース。
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <Card className="text-center hover-lift border-2 border-gray-100 h-full">
                  <CardContent className="p-6 md:p-8">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                      <Camera className="w-8 h-8 md:w-10 md:h-10 text-pink-600" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">カメラマン</h3>
                    <p className="text-sm md:text-base text-pink-600 font-medium mb-3">調整中</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      プロフェッショナルカメラマンによる審査を予定しております。詳細は後日発表いたします。
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">コンテスト概要</h2>
                <p className="text-lg md:text-xl text-gray-600">参加方法や詳細情報をご確認ください</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <CleanAccordion items={contestDetails} />
            </AnimatedSection>
          </div>
        </section>

        {/* Application Section */}
        <section id="application" className="py-16 md:py-20 bg-white scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">応募方法</h2>
                <p className="text-lg md:text-xl text-gray-600">日程ごとにフォームを用意しています</p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <AnimatedSection delay={100}>
                <Card className="hover-lift border-2 border-gray-100">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                        <Calendar className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-900">7月2日 応募フォーム</h3>
                    </div>
                    <div className="space-y-3 md:space-y-4">
                      <Button className="w-full h-10 md:h-12 text-base md:text-lg bg-transparent" variant="outline">
                        <Link className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
                        第一応募フォーム
                      </Button>
                      <Button className="w-full h-10 md:h-12 text-base md:text-lg bg-transparent" variant="outline">
                        <Link className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
                        第二応募フォーム
                      </Button>
                      <Button className="w-full h-10 md:h-12 text-base md:text-lg bg-transparent" variant="outline">
                        <Link className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
                        第三応募フォーム
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <Card className="hover-lift border-2 border-gray-100">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Calendar className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-900">7月3日 応募フォーム</h3>
                    </div>
                    <div className="space-y-3 md:space-y-4">
                      <Button className="w-full h-10 md:h-12 text-base md:text-lg bg-transparent" variant="outline">
                        <Link className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
                        第一応募フォーム
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* SNS Hashtag Section */}
        <section className="py-16 md:py-20 bg-purple-50">
          <div className="max-w-4xl mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">SNS投稿用ハッシュタグ</h2>
                <p className="text-lg md:text-xl text-gray-600">撮影作品をSNSに投稿する際にご利用ください</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <Card className="hover-lift border-2 border-purple-200 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <p className="text-2xl font-bold text-purple-600 mb-2">#真夏の水着祭 #ぴにょぐらむ</p>
                  </div>
                  <HashtagCopyButton hashtags="#真夏の水着祭 #ぴにょぐらむ" />
                  <p className="text-gray-600 mt-4">クリックでクリップボードにコピーされます</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6">
            <Camera className="w-6 h-6 md:w-8 md:h-8 text-purple-400" />
            <h3 className="text-xl md:text-2xl font-semibold">コラボ撮影コンテスト</h3>
          </div>
          <p className="text-gray-400 mb-6 md:mb-8 text-base md:text-lg">真夏の水着祭 × Pinyogram</p>
          <div className="border-t border-gray-700 pt-6 md:pt-8">
            <p className="text-gray-500 text-sm md:text-base">© 2025 コラボ撮影コンテスト. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
