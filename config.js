/**
 * 井口ヤング 公式サイト設定
 * 参照元: https://iguchiyoung.jimdofree.com/
 */

const SITE_CONFIG = {
  name: "井口ヤング",
  nameEn: "IGUCHI YOUNG",
  tagline: "仲間と明るく・楽しく・のびのび野球！",
  area: "東京都三鷹市",
  established: "1977",
  establishedLabel: "1977（昭和52）年",
  sourceUrl: "https://iguchiyoung.jimdofree.com/",
  description:
    "井口ヤングは、東京都三鷹市で活動する地域密着の少年野球チームです。野球を通じて青少年の育成を図ることを目的に、明るくアットホームな雰囲気で活動しています。",

  links: {
    line: "https://lin.ee/oZJ19DI",
    instagram: "https://www.instagram.com/iguchiyoung/",
    facebook: "https://www.facebook.com/iguchiyoung",
    email: "mailto:iguchiyoung@gmail.com",
    source: "https://iguchiyoung.jimdofree.com/",
    kazumaSports: "https://kazuma.storeinfo.jp/",
    map: "https://www.google.com/maps/search/?api=1&query=%E4%B8%89%E9%B7%B9%E5%B8%82%E7%AB%8B%E4%BA%95%E5%8F%A3%E5%B0%8F%E5%AD%A6%E6%A0%A1",
    federation: "https://www.mitaka-jbb.com/",
    jsbb: "https://www.jsbb.or.jp/",
  },

  contact: {
    email: "iguchiyoung@gmail.com",
    instagramHandle: "@iguchiyoung",
    facebookName: "井口ヤング",
    lineLabel: "公式LINE",
    practiceLocation: "にしみたか学園 三鷹市立井口小学校",
    practiceAddress: "〒181-0011 東京都三鷹市井口3丁目7-11",
    practiceSchedule:
      "主に土曜・日曜・祝日の9:00〜17:00のうち、学年により2時間半〜5、6時間",
    practiceNote:
      "井口小学校、井口特設グラウンド、大沢グラウンドなどで活動します。遠征や大会により場所・時間は変わります。",
    mapEmbed:
      "https://www.google.com/maps/d/embed?mid=1Nne67s7f1LM7ZQeRgocyUab9JFI&hl=ja&ehbc=2E312F",
  },

  nav: [
    { label: "ホーム", href: "index.html" },
    { label: "チーム紹介", href: "team.html" },
    { label: "部員募集", href: "recruit.html" },
    { label: "活動報告", href: "news.html" },
    { label: "お問い合わせ", href: "contact.html" },
  ],

  images: {
    logo: "images/logo.png",
    hero: "images/hero.jpg",
    recruitBanner: "images/recruit-banner.png",
    gallery: [
      "images/gallery-1.png",
      "images/gallery-2.jpg",
      "images/gallery-3.jpg",
      "images/gallery-4.jpg",
      "images/gallery-5.jpg",
    ],
  },

  stats: [
    { label: "創設", value: "1977年" },
    { label: "部員数", value: "39名" },
    { label: "対象", value: "小1〜6" },
    { label: "会費", value: "年間7,000円" },
  ],

  highlights: [
    {
      title: "地域で見守るチーム",
      body:
        "指導者はOBや父兄を中心に、井口地区・深大寺地区など近隣に住む人たち。卒業後まで子どもたちを見守る地域のつながりがあります。",
    },
    {
      title: "経験有無不問・男女OK",
      body:
        "一年を通じて、小学校1〜6年生の男女児童を募集しています。野球が初めてのお子さんも歓迎です。",
    },
    {
      title: "保護者の当番なし",
      body:
        "より多くの家庭が気軽に参加できるよう、当番制はありません。試合の引率や夏季練習のサポートなどは無理のない範囲でお願いしています。",
    },
  ],

  activity: {
    purpose:
      "野球を通じて青少年の育成を図ることを目的としているチームです。",
    atmosphere:
      "明るくアットホームで、部員・指導者・保護者が団結してチームを盛り上げています。",
    area:
      "三鷹市立にしみたか学園井口小学校グラウンド、三鷹市井口特設グラウンド、三鷹市大沢グラウンドなどで活動しています。",
    supporter: "井口協和会",
  },

  composition: [
    { team: "Aチーム", grade: "6年生", members: "11名" },
    { team: "Bチーム", grade: "5年生", members: "19名" },
    { team: "Cチーム", grade: "4年生", members: "2名" },
    { team: "Cチーム", grade: "3年生", members: "4名" },
    { team: "Cチーム", grade: "2年生", members: "3名" },
  ],
  compositionNote: "合計39名（2025年3月現在）",

  staff: [
    { role: "総監督", name: "渡辺" },
    { role: "三鷹市少年軟式野球連盟派遣", name: "渡辺（理事長）、杉本（理事）" },
    {
      role: "Aチーム（6年生）",
      name: "村越 監督",
      detail: "代表：渡邊 / コーチ：安藤、野々村、青木、溝口、田口、西川、阿部、高見",
    },
    {
      role: "Bチーム（5年生）",
      name: "荒井 監督",
      detail: "代表：島田 / コーチ：小林、永田、大友、崎山、高橋",
    },
    {
      role: "Cチーム（4年生以下）",
      name: "林 監督",
      detail:
        "代表：佐々木 / コーチ：佐々木、加賀妻、高村、関根、伊藤、風戸、土田、田島、吉野、島田、阿部、杉本、岩野、一瀬",
    },
  ],

  fees: [
    { label: "会費", value: "年間7,000円（うち1,000円は保険代）" },
    { label: "入会金", value: "ありません" },
    { label: "対象", value: "小学校1〜6年生の男女児童" },
    { label: "活動期間", value: "1〜12月" },
  ],

  tools: [
    {
      name: "グローブ",
      note:
        "体の成長に合わせて2〜3年に1回は買い替えます。低学年は慣れてから自分に合うものを選ぶのがおすすめです。",
    },
    {
      name: "バット",
      note:
        "指定はありません。友達のバットを借りて振り、自分に合った長さ・重さを決めてから購入しましょう。",
    },
    {
      name: "ヘルメット",
      note:
        "上級生からのお下がりがない場合は、安全確保のため早めの購入をお願いします。",
    },
    {
      name: "帽子・ユニフォーム",
      note:
        "井口ヤングオリジナルです。取扱店のカズマスポーツで購入をお願いします。",
    },
    {
      name: "練習着",
      note:
        "練習用パンツと、上はTシャツやトレーナーを着用します。試合用ユニフォームは試合で着用します。",
    },
    {
      name: "シューズ・ソックス",
      note:
        "下級生は運動靴でも問題ありません。上級生は樹脂歯のスパイクがおすすめです。",
    },
  ],

  achievements: [
    { year: "2023年 Aチーム", items: ["ジャビットカップ三鷹市大会 3位", "三鷹市秋季大会 準優勝", "赤い羽根少年野球大会出場"] },
    { year: "2022年 Aチーム", items: ["三鷹市少年軟式野球連盟秋季大会 3位", "ジャビットカップ 3位"] },
    { year: "2022年 Bチーム", items: ["三鷹市少年軟式野球連盟秋季大会 3位", "三鷹市少年軟式野球連盟夏季大会 準優勝", "三鷹市少年軟式野球連盟春季大会 優勝"] },
    { year: "2021年 Aチーム", items: ["三鷹市少年軟式野球連盟夏季大会 準優勝", "東京都市町村対抗軟式野球大会出場", "三鷹市少年軟式野球連盟秋季大会 準優勝"] },
    { year: "2021年 Bチーム", items: ["三鷹市少年軟式野球連盟秋季大会 準優勝"] },
  ],

  recentPosts: [
    {
      date: "2026-04-29",
      team: "Aチーム",
      title: "三鷹市夏季大会一回戦 A vs 野崎シャークスA",
      excerpt: "野崎シャークスさん対戦ありがとうございました。",
      url: "https://iguchiyoung.jimdofree.com/試合結果/aチーム/",
    },
    {
      date: "2026-04-27",
      team: "Cチーム",
      title: "三鷹市連盟夏季大会 vs 三鷹ジャガーズC",
      excerpt: "春季大会終了後、体験デーにて仲間を増やす事に重点を置き、再度基礎から練習を積み重ねてきました。",
      url: "https://iguchiyoung.jimdofree.com/試合結果/cチーム/",
    },
    {
      date: "2026-04-04",
      team: "Aチーム",
      title: "多摩学童野球大会一回戦 A vs 田無エンジェルスラッガーズA",
      excerpt: "田無エンジェルスラッガーズさん対戦ありがとうございました。",
      url: "https://iguchiyoung.jimdofree.com/試合結果/aチーム/",
    },
    {
      date: "2026-03-27",
      team: "Aチーム",
      title: "練習試合 A vs 蜂の子ブレーブス",
      excerpt: "蜂の子ブレーブス様 対戦ありがとうございました。",
      url: "https://iguchiyoung.jimdofree.com/試合結果/aチーム/",
    },
    {
      date: "2026-03-23",
      team: "Cチーム",
      title: "春季大会3位決定戦 C vs 新川リトルズC",
      excerpt: "新チーム3位決定戦。何とかメダルを三位一体でを願った。",
      url: "https://iguchiyoung.jimdofree.com/試合結果/cチーム/",
    },
    {
      date: "2025-09-21",
      team: "Bチーム",
      title: "多摩川親善野球大会新人の部二回戦 B vs 諏訪インディアンスB",
      excerpt: "諏訪インディアンスさん対戦ありがとうございました。",
      url: "https://iguchiyoung.jimdofree.com/試合結果/bチーム/",
    },
  ],

  faqs: [
    {
      q: "練習には必ず出なければいけませんか？",
      a: "都合が悪い時はお休みでOKです。試合前はポジションを決めて練習するため、なるべく参加した方が本人のやる気にもつながります。",
    },
    {
      q: "会費や入会金はいくらですか？",
      a: "会費は年間7,000円です。そのうち1,000円は保険代です。入会金はありません。",
    },
    {
      q: "親の当番はありますか？",
      a: "お当番はありません。夏季練習のサポート、試合の引率やお手伝い、高学年の合宿のお手伝いをお願いする場合がありますが、無理のない範囲での協力をお願いしています。",
    },
    {
      q: "必要な道具は何ですか？",
      a: "ユニフォームや練習着、グローブ、バットなどを各自で用意します。お下がりが出ることもありますので、代表・監督・コーチに相談しながら揃えましょう。",
    },
  ],
};

// 旧テンプレート互換用
const SITE = {
  teamName: SITE_CONFIG.name,
  lineUrl: SITE_CONFIG.links.line,
  instagramUrl: SITE_CONFIG.links.instagram,
  instagramId: SITE_CONFIG.contact.instagramHandle,
};
