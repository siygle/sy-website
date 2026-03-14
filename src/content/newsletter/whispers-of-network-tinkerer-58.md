---
title: "網路黑手的呢喃 - #58"
date: "2024-11-18"
description: "主題：Web 生態圈更新、開源世界真有趣、愛讀冊啦～、ML 趨勢、網路好東西"
tags:
---
最後一定要說：NewJeans never die!!
tags: AI, Deno, Javascript, KPOP, Newsletter, Node.js, Rust, bluesky, npm
category: 不定期的呢喃

---

## **Web 生態圈例行更新**

### Bluesky 拿到 A 輪投資啦

之前一直可以看到藍天上面不少人擔心這個服務的後續要怎麼經營下去，因為目前看起來沒有太多的營收管道，只透過 custom domain handle 的方式，不太可能撐起他們每天燒錢的服務吧 😅

不過前陣子看到他們公告了拿到了新一輪的投資，然後也稍微透露了之後他們的一些計畫，譬如訂閱制（不同於 X 那種，猜測他們應該會很小心去設計），然後還有整合支付服務，讓創作者可以透過平台銷售他們的作品。看起來 Bluesky 也是很積極想走出一條不同於一般社交服務的路。

雖然未來的事不好說，不過我也曾經提了數次自己目前很喜歡這個平台以及他們的團隊，希望大家都能來試試看，也希望能愛上這個服務。😃

![](https://bsky.app/profile/sylee.dev/post/3l7bj2ydpy22r)

不能不提到它強大的開發社群，在越來越多人登陸 Bluesky 之後，許許多多有趣的開發跟服務，也陸續不斷的出現，希望這股開發者的力量，也可以成為 Bluesky 崛起的一大助力！🤞

[https://bsky-users.theo.io/](https://bsky-users.theo.io/)

### Deno 2.1

剛跨過 2.0 里程碑的 Deno，也是持續往前邁進，最近看到 ry 丟出來 2.1 的計畫，裡面看到一些有趣的東西，譬如直接引入 wasm 的功能，想起之前 ry 受訪的時候有提過對於 webassembly 沒有太多的興趣，不過我覺得目前 JS runtime 競爭激烈，如果沒打到開發者的興趣（或痛點）的話，覺得沉下去的機會比較大。

其實碎念過不少次了，不多說了，就當愛好者的殷殷期盼 😓。

![](https://x.com/rough__sea/status/1857481657281913017)

### 每次看到設計工具都要記錄一下

身為沒有設計天分的我，只能靠別人寫好的工具跟 AI 了。

*It’s just like a gift, but I don’ have it.* 😅

對色盲/色弱的開發者來說也是一種福音吧（苦主之一）。突然想到最近搭配 AI 的許多前端頁面的生成式服務，不知道有沒有機會整合這類的設計語言進去（透過 prompt? 🤔），這樣之後設計真的門檻真的會越來越輕鬆了，雖然細節可能還無法達成設計人員的等級，不過如果是簡單元件，或是設計影響不那麼重要的服務，說不定真的幾乎不需要人力來特別處理了。

![](https://x.com/ccbikai/status/1854170247634538773)

## 開源世界真有趣

### 果然有人跳出來劍指 [Wordpress 替代品](https://www.nextpress.ai/)了

雖然好像在意料之中，但看到怎麼會選了 Next.js 😅（轉頭看 OpenNext）。

看起來是 2025 才會出現，不過它特別提到了生態圈也會被考慮到（theme、plugin 等），這就蠻有趣的，不知道完全不同的技術桟會怎麼達到這個目的 🤔。雖然選了 Node.js 不是什麼驚奇的事，畢竟之前就有 [Ghost](https://ghost.org/) 了，不過它跟 WordPress 還是完全不同生態規模（Ghost 好像到現在都沒有 plugin 這個設計吧 😅）。

觀望，我是覺得全相容好像沒那麼簡單，好奇後續會怎麼進行。然後看 WordPress 走到現在這個情況真的是讓人感傷阿，為什麼能好好處理的事會變成這樣。

![](https://bsky.app/profile/sylee.dev/post/3l7fp2gbprd2h)

### JS 世界最不缺少的就是 package manager 啦

現在真的是多到數不清了 😅

之前稍微提過，由幾位前 npm、Node.js 的開發者集結的新創公司 - vlt，最近終於釋出他們的產品 與服務了，的確正如之前他們略略提過的，一樣是針對 JS/Node.js 套件生態而來，而這次釋出的東西也就是與公司名稱一樣的，又一個新的 package manager - [**vlt**](https://docs.vlt.sh/)。

除了 vlt 之外，他們還一併推出了自架 registry 的服務 - [**vlr**](https://www.vlt.sh/serverless-registry)，目前自架方案可以在 Cloudflare 平台上部署起來，所以有興趣的開發者也可以實際測試看看。

看起來他們的方向可能跟 Deno 家的 JSR 蠻類似的，就是在相容現有的 npm 生態之外，去改進 CLI、registry，不過現在因為還在早期開發，距離實際用在正式環境可能還有一段時間，不過應該值得開發者留意它的發展。👀

![](https://bsky.app/profile/vlt.sh/post/3labr7axt2t2p)

### Toasty - ORM in Rust

雖然 Rust 早就入侵各個領域了，不過看到 ORM 這麼上層的應用還是看了下，原來也是 Tokio 的生態之一，因為我這個菜雞也想慢慢來摸索 Rust，所以前陣子挑了自己比較熟悉的 Web 相關來入手，剛好選了 [axum](https://github.com/tokio-rs/axum) 這個框架來玩玩，才發現有不少好物都是基於 Tokio 這個強大的 async runtime 來實作的。

[Announcing Toasty, an async ORM for Rust | Tokio - An asynchronous Rust runtime](https://tokio.rs/blog/2024-10-23-announcing-toasty)

其實之前也提過 [spin](https://github.com/fermyon/spin) 這個從 WebAssembly 切入 Serverless 的開發框架，其實也慢慢可以看到不少基於 Rust 的網路服務或元件，說不定 Rust 生態也能走出一條自己的路。

## 愛讀冊啦～

### 安全性一直是 npm 生態需要面對的問題

[Nightmares on npm: How Two Malicious Packages Facilitate Dat...](https://socket.dev/blog/nightmares-on-npm-how-two-malicious-packages-facilitate-data-theft-and-destruction)

這類的文章應該也在這邊出現好幾次了，伴隨著龐大的套件數量，相關的安全性問題也是一直被提出，應該也不少人知道 [socket.dev](http://socket.dev) 這間公司，就是專門在研究 Node.js 生態的安全性的新創公司。最近他們又公開了一篇最近的發現。

其實不難發現，這類的安全性問題大多是「偷資料」或是「搞破壞」兩種，搭配竊取相同（或相似）的公司或組織的名稱，讓使用者失去警覺，然後就偷偷在程式裡面動手腳。

所以 [socket.dev](http://socket.dev) 也在文末提出了一些建議：

- **Verify Package Sources：**慎選使用的套件，通常受過比較大量檢驗與使用量的套件，當然是相關更加安全一些。（我自己想到，其實對於 buzzword 的東西更是要小心，譬如 AI 相關的，因為短期之內竄起，更有動手腳的空間與機會）。
- **Code Review：**對於使用的套件，也是需要 review 一下它實際上做了些什麼，特別是包含外部呼叫的行為的話。
- **Use Security Tools：**考慮使用安全性的工具。（譬如 socket [本家](https://socket.dev/features/github)的[工具](https://socket.dev/features/cli)、老牌 [snyk](https://docs.snyk.io/supported-languages-package-managers-and-frameworks/javascript/best-practices-for-javascript-and-node.js) 之類的）。

## 引領風潮的 ML

### Github Universe 2024

果然在這個 AI buzzword 的時代，不提到 AI 就會脫隊了，身為一開始編輯器整合 Copilot 的先驅，最近因為眾多競爭者的關係，好像有點落後的 Github，這次在自家的場子，果然是滿滿的 AI 相關功能，如果有興趣的開發者，可以看它們的官方公告以及議程：

[New from Universe 2024: Get the latest previews and releases](https://github.blog/news-insights/product-news/universe-2024-previews-releases/)

![](https://www.youtube.com/watch?v=5ov2NYBdGSw)

- Copilot 要支援多模型了，所以很快可以切換 ChatGPT o1 & o1-mini、Claude 3.5 跟 Gemini 1.5 等。

[Bringing developer choice to Copilot with Anthropic’s Claude 3.5 Sonnet, Google’s Gemini 1.5 Pro, and OpenAI’s o1-preview](https://github.blog/news-insights/product-news/bringing-developer-choice-to-copilot/)

- Copilot Workspace：看起來是整合 AI 功能到平常的開發流程裡面，所以可以整合 Copilot for Pull Request & Copilot Code Review（之後沒人幫忙 review 就找 Copilot 吧 😆），有點想試玩看看但需要排隊。

[GitHub Copilot code review in GitHub.com (public preview) · GitHub Changelog](https://github.blog/changelog/2024-10-29-github-copilot-code-review-in-github-com-public-preview/)

- Github 也推了一個跟 Vercel [v0.dev](http://v0.dev/) 很像的東西 → Github Spark （已經看到好幾個用 Spark 的產品，大家為什麼都很愛用這個名稱 😆)

[GitHub Next | GitHub Spark](https://githubnext.com/projects/github-spark)

### ChatGPT for macOS levelUp!

現在 AI 服務競爭激烈，應該也給先行者帶來了不小的壓力。不知道是不是又一個 Cursor 的受害者，不過最近 OpenAI 在自家的桌面軟體也是動作頻頻。之前整合了搜尋的功能進去之後，現在又推出了跟桌面軟體的整合功能，首發當然是針對開發者最有感的程式開發。

透過這個功能就可以簡化原本互相切換跟 copy paste 的動作，不過我蠻懷疑有多少開發者會這樣做，應該幾乎都會直接用支持 AI 功能的編輯器直接進行開發了吧 😅。

不過如果之後能擴大到其他軟體的話，或許就有意思了 🤔

![](https://x.com/OpenAIDevs/status/1857129790312272179)

## **網路是個好東西**

### NewJeans Never Die!

#不解釋 

只能補一句房時爀真的是垃圾 😡

雖然世界不太可能這麼順利，不過還是希望[解約](https://www.youtube.com/watch?v=OS9zFH_oSnY)能順利走完，這種爛公司還是別待了🤞

![](https://bsky.app/profile/sylee.dev/post/3lb5lwuozk22o)

### 家長懂玩

一開始其實還沒意會到這個是 COSPLAY。😅

只能說家長真懂玩，應該是賺了不少。

![](https://x.com/StockMKTNewz/status/1851330355753791926)

### 沒有想到介紹河狸可以這麼有趣 🤣

Discovery 可以啟用這位中文配音嗎 #炸

![](https://x.com/wodanggangqiang/status/1856369717977784467)

### 沒想到還有這種 profile 的形式

只能說開發者都很有創意，如果是 Indie Developer 又更適合了，又有趣又可以達到宣傳自己作品的目的（不過數量要夠多才行 😅）

![](https://x.com/tualatrix/status/1852544946248814790)

### 突破天際的閃電麥昆

這個影片一定要耐著性子看下去 😆

![](https://x.com/JZhen72937/status/1855594944007983448)

### 為什麼受傷的總是我

真的會被 IVE 這團笑死，相愛相殺的體現。

![](https://x.com/cocoxi_/status/1850920065786380293)

![](https://x.com/hyeyu05/status/1855976803447542206)