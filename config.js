/**
 * 井口ヤング 公式サイト設定ファイル
 * このファイルを編集することで、サイト全体の情報を一元管理できます。
 * ※ 画像はすべて images/ フォルダ内に配置してください
 */

const SITE_CONFIG = {

  /* ───────── 基本情報 ───────── */
  name: "井口ヤング",
        catchphrase: "仲間と明るく・楽しく・のびのび野球！",
        established: "1977年", 
        location: "東京都三鷹市",
        mainGround: "三鷹市立井口小学校グラウンド", 
        targetAge: "年長・小学1年生〜6年生（男女問わず、通う学校も不問）",
        contactEmail: "iguchiyoung@gmail.com",
        fee: "年会費：7,000円 (井口協和会からの補助等により、お財布に優しい安心の会費設定)"
	
  /* ───────── 連絡先・SNS ───────── */
  contact: {
    lineUrl: "https://lin.ee/oZJ19DI",   // ← 実際のLINE公式アカウントURLに変更
    lineId: "@iguchi-young",
    instagramUrl: "https://www.instagram.com/iguchi_young/", // ← 実際のURLに変更
    instagramHandle: "@iguchi_young",
    email: "mailto:iguchiyoung@gmail.com",            // ← 実際のメールアドレスに変更
    address: "三鷹市立井口小学校グラウンド",  // ← 実際の住所に変更
    practiceLocation: "井口グラウンド",                 // ← 実際の練習場所に変更
    practiceSchedule: "毎週土曜・日曜",
    practiceNote: "祝日・大会時は変更あり。詳細は公式LINEにてご確認ください。",
  },

  /* ───────── 画像パス（すべて images/ フォルダ内） ───────── */
  images: {
    logo:         "images/logo.png",          // チームロゴ（推奨: 正方形 200×200px）
    heroMain:     "images/main-hero.jpg",     // トップヒーロー画像（推奨: 1920×1080px）
    heroSub:      "images/hero-sub.jpg",      // ヒーロー画像（サブ）
    teamPhoto:    "images/team-photo.jpg",    // チーム集合写真（推奨: 1200×800px）
    teamHero:     "images/team-hero.jpg",     // チーム紹介ページヒーロー
    recruitHero:  "images/recruit-hero.jpg",  // 部員募集ページヒーロー
    ogImage:      "images/og-image.jpg",      // OGP画像（推奨: 1200×630px）

    // ギャラリー画像（正方形推奨 800×800px）
    gallery: [
      "images/gallery1.jpg",
      "images/gallery2.jpg",
      "images/gallery3.jpg",
      "images/gallery4.jpg",
      "images/gallery5.jpg",
      "images/gallery6.jpg",
    ],

    // 活動報告記事のデフォルトサムネイル
    blogDefault: "images/blog-default.jpg",

    // コーチ・指導者写真（推奨: 正方形 400×400px）
    coaches: [
      { name: "山田 太郎", role: "監督", img: "images/coach1.jpg" },
      { name: "鈴木 次郎", role: "コーチ", img: "images/coach2.jpg" },
      { name: "田中 三郎", role: "コーチ", img: "images/coach3.jpg" },
    ],
  },

  /* ───────── ナビゲーション ───────── */
  nav: [
    { label: "ホーム",    href: "index.html"   },
    { label: "チーム紹介", href: "team.html"    },
    { label: "活動報告",  href: "blog.html"    },
    { label: "部員募集",  href: "recruit.html" },
    { label: "お問い合わせ", href: "contact.html" },
  ],

  /* ───────── 数字で見るチーム（トップページ）───────── */
  stats: [
    { label: "創設",     value: "2005年" },
    { label: "部員数",   value: "32名"   },
    { label: "優勝実績", value: "15回"   },
    { label: "体験入部", value: "随時受付" },
  ],

  /* ───────── チームの理念 ───────── */
  philosophy: [
    {
      icon: "⚾",
      title: "楽しく野球を",
      desc: "野球の基礎から丁寧に指導。まずは「野球って楽しい！」と感じてもらうことを最優先にしています。",
    },
    {
      icon: "🙏",
      title: "礼儀を学ぶ",
      desc: "挨拶・礼節を通じて、スポーツだけでなく人としての成長をサポートします。",
    },
    {
      icon: "🤝",
      title: "仲間を大切に",
      desc: "チームワークを育み、子供たちが一生の仲間と出会える場所を目指しています。",
    },
  ],

  /* ───────── よくある質問（recruit.html 用）───────── */
  faq: [
    {
      q: "お茶当番など、保護者の負担が心配です...",
      a: "井口ヤングでは親御さんの当番が少なく、負担は最小限になるよう運営しています。お仕事をお持ちの保護者の方も安心してご参加いただけます。",
    },
    {
      q: "道具は最初から全部揃えないといけませんか？",
      a: "体験入部期間中はグローブ・バットを無料でお貸しします。",
    },
    {
		q: "野球をやったことがなくても大丈夫ですか？",
		a: "もちろん大歓迎です！1年生から6年生まで、また年長のお子様でも、それぞれのレベルに合わせて指導者がキャッチボールの基本から丁寧にサポートします。"
    },
    {
            q: "女の子でも入れますか？",
            a: "男女問わず大歓迎です！男の子も女の子も、みんな一緒に「仲間と明るく楽しく」をモットーにグラウンドを駆け回っています。"
    },
  ],

  /* ───────── 体験入部の流れ（recruit.html 用）───────── */
  experienceFlow: [
    {
      step: "01",
      title: "LINEで「体験したい！」と送る",
      desc: "公式LINEに「体験参加希望」と送るだけ。日程を一緒に決めます。",
    },
    {
      step: "02",
      title: "動きやすい服装で来てね",
      desc: "運動できる服装・靴でOK。道具は不要、手ぶらで来てください！",
    },
    {
      step: "03",
      title: "みんなと一緒に練習",
      desc: "キャッチボールや簡単なゲームから体験。先輩部員がやさしく教えます。",
    },
    {
      step: "04",
      title: "保護者の方と懇談",
      desc: "練習中に担当者がチームについて詳しくご説明。疑問はなんでも聞いてください！",
    },
  ],

  /* ───────── 最新の活動報告（仮データ / CMSと連携後は削除可）───────── */
  recentPosts: [
    {
      date: "2025年6月8日",
      category: "試合結果",
      title: "春季大会 準決勝進出！熱戦を制して4強入り",
      excerpt: "先週末に行われた春季大会の準々決勝で、井口ヤングが見事勝利！次戦の準決勝に進出しました。",
      img: "images/blog1.jpg",
      href: "blog/2025-06-08-spring.html",
    },
    {
      date: "2025年5月25日",
      category: "練習風景",
      title: "バッティング練習で全員ホームラン達成！",
      excerpt: "今週の練習では全部員がホームラン性の当たりを放ちました。春の大会に向けて打撃好調です！",
      img: "images/blog2.jpg",
      href: "blog/2025-05-25-batting.html",
    },
    {
      date: "2025年5月10日",
      category: "イベント",
      title: "新入部員歓迎会！2名の仲間が加わりました",
      excerpt: "5月より2名の新しい仲間が入部しました。早速みんなと打ち解けて楽しく練習しています。",
      img: "images/blog3.jpg",
      href: "blog/2025-05-10-welcome.html",
    },
  ],

};
