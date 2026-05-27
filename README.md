# 井口ヤング 公式サイト

GitHub Pages で公開できる静的HTMLサイトです。掲載内容は下記の参照元に合わせています。

- 参照元: https://iguchiyoung.jimdofree.com/
- 公式LINE: https://lin.ee/oZJ19DI
- Instagram: https://www.instagram.com/iguchiyoung/
- Facebook: https://www.facebook.com/iguchiyoung

## ファイル構成

```text
.
├── index.html          # トップページ
├── team.html           # チーム紹介
├── recruit.html        # 部員募集・体験入部
├── news.html           # 活動報告
├── contact.html        # お問い合わせ
├── config.js           # サイト共通設定
├── news-list.js        # 活動報告リスト
├── css/style.css       # 共通スタイル
├── js/components.js    # 共通ヘッダー・フッター
├── js/main.js          # 共通スクリプト
├── images/             # 参照元サイト由来の主要画像
└── news/               # 記事テンプレート・個別記事
```

## 更新方法

連絡先やSNSリンクを変更する場合は `config.js` を編集してください。各ページのボタンは `config.js` のURLを参照します。

活動報告を追加する場合は、`news/template.html` をコピーして `news/YYYY-MM-DD.html` として保存し、`news-list.js` に1行追加してください。

## GitHub Pages 公開手順

1. このフォルダ内のファイルをGitHubリポジトリへアップロードします。
2. リポジトリの `Settings` → `Pages` を開きます。
3. Source を `Deploy from a branch`、Branch を `main`、フォルダを `/(root)` に設定します。
4. 数分後にGitHub PagesのURLで公開されます。
