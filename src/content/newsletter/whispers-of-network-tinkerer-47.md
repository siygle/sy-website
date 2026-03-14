---
title: "網路黑手的呢喃 - #47"
date: "2024-04-20"
description: "又…改寫了😅、藍天持續進化，身為愛用者的我也貢獻了小工具、用雲端平台還是要小心一點、感謝 Cloudflare 對諸多（窮）開發者的支持、好用的服務佈署小工具 - dokploy、AWS 大大也玩…"
tags:
  - AI
  - AWS
  - Cloudflare
  - Deno
  - Fresh
  - Newsletter
  - OSS
  - bluesky
---
又…改寫了😅、藍天持續進化，身為愛用者的我也貢獻了小工具、用雲端平台還是要小心一點、感謝 Cloudflare 對諸多（窮）開發者的支持、好用的服務佈署小工具 - dokploy、AWS 大大也玩 AI side-project 順便火力展示自家產品（居然還有 rust！）

---

# 這裡好像不太一樣？

不知道有沒有留意到這邊好像不太一樣了？沒錯！因為一些原因，花了一點時間把這邊又翻掉了，雖然又是衝動但這次不是因為一時的心血來潮做的，而是因為原本依賴專案的一些原因才進行這個動作，詳細過程[可以跳轉這邊](https://sylee.dev/blog/2024-05-08-rewrite-chat)（當然還是很衝動拿了 Deno + Fresh 來改 ）。

**這次停更這麼久一段時間都是因為這件事的關係啦（找到藉口）*😁

** *~~好像踩到  Notion 的 API rate limit，要先優化一下快取，只好先切回原本的 vercel 版本~~* （更新快取機制，再次測試 😅）

[https://bsky.app/profile/sylee.dev/post/3kry4b2xb4d2b](https://bsky.app/profile/sylee.dev/post/3kry4b2xb4d2b)

# **Web 生態圈例行更新**

### 藍天繼續向前邁進

雖然成長的腳步有點停滯，不過最近 BlueSky 相關的新聞跟消息也是沒有停下腳步，除了 [Jack 終於跟 BlueSky 劃清界限](https://bsky.app/profile/bsky.app/post/3krreazpfpu2t)之外（我自己覺得這是好事啦，不然大家老是愛問藍天跟 Jack 的關係，而且明眼人應該都看得出來他其實對這邊沒有愛 😆），最近也公布了數個未來與進行中的計畫 ⬇️

[https://bsky.app/profile/bsky.app/post/3krwrn4rato2z](https://bsky.app/profile/bsky.app/post/3krwrn4rato2z)

幫忙畫一下重點：

- DM（開發中）
- 影片支援規劃中（最初可能為最長 90s 的限制）
- [OAuth](https://github.com/bluesky-social/proposals/tree/main/0004-oauth)（等好久啦！）

雖然聽到不少聲音說 BlueSky 跟 X（前 Twitter）很像，但我覺得活潑的社群參與才是它的特色（當然還有分散式的願景），不過在陸續補齊一些基本功能之後，期待它可以更邁一步有更多有趣的發展跟應用。

**說真的，第三方才是 BlueSky 的強項，殊不見連類 X（前 Twitter）的音訊空間都[已經有人跳出來實作啦](https://www.bluecast.app/)！* 🙌

### Fresh 2.0 on the road

延續上面改寫的議題，因為這次選了 Deno + Fresh 來實作，所以也稍微留意了一下 Fresh 這個 Deno 親生框架的目前現況，就看到下面這篇關於即將到來的 2.0 的規劃 ⬇️

[https://github.com/denoland/fresh/issues/2363](https://github.com/denoland/fresh/issues/2363)

其實現在拿 Fresh 來寫一些小專案還算方便，身為 Preactjs 為基底的 SSR 框架，能相容 react 生態圈，也能搭上 SSR 的酷酷列車，可以作到的事項也是不少了，看 2.0 的規劃也是朝向更加易用的方向持續改善，如果本身就用 Deno 真的是首選好工具，不過還是希望經過一些大型的網站的考驗（有機會嗎？因為 Deno 感覺也不上不下 😅），也能有更多的參考資源。

### 一個不小心 S3 帳單炸裂

前陣子炎上的文章，原來 AWS S3 unauthorized incoming request 是會對擁有者收費，所以有人因為這樣被帳單炸裂。案例的苦主似乎是名稱跟某個外部開源專案的名稱一樣 😅，所以說專案命名可能要複雜一點避免重複會比較安全，然後也不要隨便外流，說真的，使用雲端的確方便，但是需要注意的眉眉角角也是很多。（[不過後來 AWS 說他們會修正這個問題](https://twitter.com/jeffbarr/status/1787844682216792163)）

[How an empty S3 bucket can make your AWS bill explode](https://medium.com/@maciej.pocwierz/how-an-empty-s3-bucket-can-make-your-aws-bill-explode-934a383cb8b1)

### 一些例行更新

- **Deno 1.43** - 還是等不到 2.0，不過除了持續 Node.js 生態的相容這個重點工作之外，也可以看到已經開始 [2.0 breaking change](https://deno.com/blog/v1.43#try-out-deno-2-features-with-deno_future1) 的測試了： `DENO_FUTURE=1` 。

[Deno 1.43: Improved Language Server performance](https://deno.com/blog/v1.43)

- **Expressjs 5.0 - last push!** - 難得終於看到 expressjs 又動了起來，前陣子提到這個 Node.js 長青專案，終於又在加入了一批貢獻者之後終於邁向 5.0 版本了！看起來也準備進到最後確認的階段，希望這些 checkbox 都完成之日就是 5.0 面世之時啦（不過我最近都換用 [Hono](https://hono.dev/) 了，也是相容 expressjs 的好用框架 😄）

[https://github.com/expressjs/discussions/issues/233](https://github.com/expressjs/discussions/issues/233)

# 開源世界真有趣

### 方便開發 browser extension 的小工具

最近因為留意到 BlueSky 開始支援 Action intent links 的功能，所以可以透過特別的網址達成分享貼文的效果，那時候就想了要不乾脆寫個簡單的 Chrome extension，後來發現到這個小工具，可以提供很不錯的開發環境 🔽

[https://github.com/cezaraugusto/extension.js](https://github.com/cezaraugusto/extension.js)

所以就簡單研究一下丟出來下面這個了，它功能就是簡單把目前瀏覽的頁面，或是選取的文字，然後快速分享到 BlueSky 上（也歡迎大家來試試 [BlueSky](https://bsky.app/) 喔，它的功能越來越完備了）

[Share on BlueSky](https://chromewebstore.google.com/detail/share-on-bluesky/algffldnpbfdjnbpehbghbjjbbahljdd)

### 感謝網路開發救星 Cloudflare

看到網路上有人整理了基於 Cloudflare 各項服務的許多好用的開源項目，有圖床、短網址、暫時性電子郵件、流量分析等許多好用的工具，真的不能不再次感謝 Cloudflare 對於免費仔的大力贊助 😅

其實也都陸續有分享過不少 Cloudflare 家開發的好東西，最近它們在雲端平台的發展也是有目共睹，陸續推出需多好用的服務，甚至連最近的 AI 戰也沒脫隊，不過我心裡一直都有個疑問，到底為什麼 Cloudflare 可以這樣一直燒錢阿，到底它是靠什麼營收來支撐的，真的佩服 🫡

[https://github.com/zhuima/awesome-cloudflare](https://github.com/zhuima/awesome-cloudflare)

### 窮人救星又一枚 🤗

身為窮人黨的一員，無所不用其極的榨乾開發環境的資源一直是很重要的事，畢竟每個雲端服務一個比一個貴，實在是負擔不起 😅。所以近期又注意到這個好用的工具 🔽

![Untitled](../assets/網路黑手的呢喃 #47 - Untitled.png)

[https://github.com/Dokploy/dokploy](https://github.com/Dokploy/dokploy)

其實這種類 heroku 的工具真的不少，最早期我接觸到的是 [dokku](https://github.com/dokku/dokku)，他到現在也仍舊是非常方便的工具，隨便找一台 VPS 就可以跑起來，然後就可以簡單佈署 & 管理自己的一大堆 side-project 啦！要測試一些網路服務的專案也是非常方便。在 docker 生態普及之後，要作這類的工具又更方便了，基本上清一色支援 Docker，再加上個 proxy server 就算是個陽春版本了。

Dokploy 看起來也是，它是基於 Docker + Traefik，不過不能不大推一下它的 UI/UX 真的是非常絲滑，然後[相關一些基本功能](https://docs.dokploy.com/)（custom domain、HTTPS）也有支援，看起來開發者也會持續增加功能 & 優化，所以如果有這類需求的開發者可以嘗試看看 👍。

# 引領風潮的 ML

### AWS 頭頭也來玩 ML（居然還有 Rust 😄）

**身為 AWS CTO 寫文章玩 side-project 來推薦自家不是很正常的事嘛** 😆

最近大大[寫了一篇](https://www.allthingsdistributed.com/2024/05/hacking-our-way-to-better-team-meetings.html?utm_source=twitter&utm_medium=social)因為開會而延伸出來的一個小專案，當然是結合了幾個酷酷的東西來實作才能符合身為雲端大廠的身分（自己說），這個小工具簡單說就是「根據會議的錄音檔，自動解析並做出統整，然後貼回開會人員的群組」，實作上當然是用了 AWS 自家的 Lamdba、S3、Bedrock 等工具（順便火力展示）

![src: [https://twitter.com/Werner/status/1788269263557689430](https://twitter.com/Werner/status/1788269263557689430)](../assets/網路黑手的呢喃 #47 - Untitled 1.png)

src: [https://twitter.com/Werner/status/1788269263557689430](https://twitter.com/Werner/status/1788269263557689430)

不過大大當然不會止於這樣，順便帶出了最近被同事推坑愛上了 Rust，所以他打算更進一步把這個工具延伸成 Rust CLI，可以期待後續開源之後來玩玩看。🤭

### 這波 AI 的風潮，真的是美術設計苦手救星

雖然 AI 的浪潮還不知道要燒多久，不過對我而言最顯著的幫助就是工作相關的如 Copilot 的功能，另一方便就是眾多美術設計的產生器了，原本完全不忍直視的 UI 在眾多工具的幫助之下，好像稍微能看一些了 😅

最近又多了一個競爭者 - [**Ilus AI](https://ilus.ai/)，**它能產生類 Notion 那種風格的作品出來，這類的工具真的是多多益善耶（但是帳單也是，能不能整合一下阿 😂）

[https://www.youtube.com/watch?v=QgdEcznBpdg](https://www.youtube.com/watch?v=QgdEcznBpdg)

### 速度為王？

看起來 AI 的回應速度會很大程度影響能不能加速普及化的一項重要因素，所以也越來越多這類的實驗出現，譬如之前提過的 [llamafile](https://github.com/Mozilla-Ocho/llamafile) 這類的嘗試，還有之前 Apple 放出的模型 - [ELM](https://huggingface.co/apple/OpenELM)。然後無意間看到有看到種本地跟 edge 的搭配，或許也是一種路線（是說 Cloudflare 好像也提供了不少好用的 AI 工具，應該要找時間來玩玩看！）

![src: [https://twitter.com/dotey/status/1787325739747995872](https://twitter.com/dotey/status/1787325739747995872)](../assets/網路黑手的呢喃 #47 - Untitled 2.png)

src: [https://twitter.com/dotey/status/1787325739747995872](https://twitter.com/dotey/status/1787325739747995872)

# **網路是個好東西**

### 天網的第一步：You can’t kill me!

[https://twitter.com/Steve8708/status/1789068269883916468](https://twitter.com/Steve8708/status/1789068269883916468)

### 我很想看但沒有資格

#不解釋 #有錢就好了 😢

[https://twitter.com/vinta/status/1788336470610387138](https://twitter.com/vinta/status/1788336470610387138)

### 這我妙懂

只能說吾少也賤，故諸多能鄙事（小時候不學好，老是到處玩 😅）

[https://twitter.com/youhaveagift/status/1783721784384299176](https://twitter.com/youhaveagift/status/1783721784384299176)

### 蘋果這次真的是大翻車

老實說我對這個最近炎上的廣告沒什麼意見，不過後來被翻出來居然是抄別人的，真是何等諷刺。😓

（居然原本出處被刪了，[只好多備幾份](https://twitter.com/BrandonKHill/status/1788489290760237104)！）

[https://twitter.com/hSATAC/status/1788822725638918522](https://twitter.com/hSATAC/status/1788822725638918522)

### 老是有人喜歡這樣挑戰自己的肩頸 😅

嗯，Rabbit R1 + Vscode，很酷！

但是等年紀大之後你就知道這種對身體多麼傷害…（看我都放棄用 IPad 寫程式的幻想了 🙅）

[https://twitter.com/code/status/1789053139640824301](https://twitter.com/code/status/1789053139640824301)