---
title: "網路黑手的呢喃 - #49"
date: "2024-06-18"
description: "AWS 終於準備推出 TPE Region 啦！Deno 推出企業服務、TC39 例行會又有什麼有趣的新玩意出現呢👀、Cloudflare 真的是一間很酷的公司、伴隨 AI 熱潮，也開始出現不少問…"
tags:
  - AI
  - Apple
  - Cloudflare
  - Deno
  - ECMAScript
  - Newsletter
  - Node.js
  - Rust
  - Security
---
---

AWS 終於準備推出 TPE Region 啦！Deno 推出企業服務、TC39 例行會又有什麼有趣的新玩意出現呢👀、Cloudflare 真的是一間很酷的公司、伴隨 AI 熱潮，也開始出現不少問題了、Zed 準備支援 Ollama，Apple 家的密碼管理器

---

# **Web 生態圈例行更新**

## AWS 終於（準備）來台灣了！

新聞出來的這一天，果然不出意料網路上到處都在轉推，連政治圈都可以看到，看大家等多久了（誤），以往都只能從日本跟新加坡挑選的我們，終於有自己的 region 可以選啦！

預定是明天初就可以看到，不知道是不是準備來搶 AI StartUp 的熱潮，就近取貨那 GPU 相關的服務可以算便宜一點嗎？ #大誤 #並不會 😂

[台灣 AWS 區域](https://aws.amazon.com/tw/local/taipei/)

## Deno 也正式跨入企業服務的領域啦！

雖然知道 Deno 一直都有跟幾個算知名的企業合作，不過現在也終於看到它們正式提供企業用戶的服務，或許沒什麼新奇的功能，不過有穩定的合作就代表有收入，不再一昧燒錢對未來發展總是好的。此外，其中也提及企業客戶有有先提出功能需求的權力（就像緊接著這篇新聞稿之後，也放出了幾項針對企業用戶常用的 [**Subhosting**](https://deno.com/blog/subhosting-flexible-domain-association) 的更新功能），能搭配業界的實際需求也是一件好事。 👍

![src: [https://deno.com/enterprise](https://deno.com/enterprise)](../assets/網路黑手的呢喃 #49 - Untitled.png)

src: [https://deno.com/enterprise](https://deno.com/enterprise)

## TC39 又開會啦！

熟悉 ECMAScript 流程的應該都知到 TC39 這個組織，也知道它們會週期性的開會來決定各項不同的提案有沒有機會能納入到 ECMAScript 的規範中，雖然這個流程是個漫長又無聊的一段時間 😅，不過也是可以看到不少有趣的東西在裡面。（無論最後有沒有被通過）

每次開會之後，都會有 TC39 的成員說明這次有那些提案晉級，以及它們大概是什麼的改動，所以有興趣的話，最新一期的內容可以參考下圖這個連結跳轉。

![src: [https://x.com/robpalmer2/status/1801239842908438694](https://x.com/robpalmer2/status/1801239842908438694)](../assets/網路黑手的呢喃 #49 - Untitled 1.png)

src: [https://x.com/robpalmer2/status/1801239842908438694](https://x.com/robpalmer2/status/1801239842908438694)

有幾個稍微吸引的我的注意 😎

- **Discard binding：**就是之前約定成俗的 `_` ，這個草案就是針對這種不會實際拿來用的變數的處理方式。看了提案也才發現其實其他語言是真的用 `_` 來處理（心裡 murmur 怎麼不依循這個方式就好），但這個提案是用 `void` 來代表。

[https://github.com/tc39/proposal-discard-binding](https://github.com/tc39/proposal-discard-binding)

- **幾個針對 Iterator 的好物**：最近這類 helper 提案也是越來越多了，這次下面這兩項是針對 iterator 的處理（[zip](https://iterator.zip/) 這個也是第一次注意到，想說這名稱也太😅，原來其他語言也是有類似的功能）。

[https://github.com/tc39/proposal-iterator-sequencing](https://github.com/tc39/proposal-iterator-sequencing)

[https://github.com/tc39/proposal-joint-iteration](https://github.com/tc39/proposal-joint-iteration)

- RegExp escape：就是預先針對正規表示式的字串預先處理，避免後續處理上的問題。

[https://github.com/tc39/proposal-regex-escaping/](https://github.com/tc39/proposal-regex-escaping/)

除了，上述幾項進行討論的提案之外，前幾天也看到 Deno 的成員好像也準備提出一個有趣的提案 - Semaphore， 又是一個其他語言已經存在的功能。看文件的描述，應該是類似資源管理器的用法，譬如可以限制 HTTP requests、或是寫入文件的並發數量。👍

[https://github.com/lucacasonato/proposal-semaphore](https://github.com/lucacasonato/proposal-semaphore)

不過還是希望幾個等很久的提案，可以趕快加點速度推進，譬如 [Temporal](https://github.com/tc39/proposal-temporal)，還有個人期待很久但是最近幾個會期都沒有任何進度的 [pattern matching](https://github.com/tc39/proposal-pattern-matching) 😢。

## Node.js 越來越包山包海啦

這個分享會提到了近年來 Node.js 逐步加上的功能，取代了哪些在原本開發中會用到的模組（其實不少之前有曾經提及了），也可以再度印證有適當的競品存在對於專案來說也是好事，可以讓進步的速度更加快一點。😁

如果你是沒那麼經常性跟隨 Node.js 專案的新版更新消息的人，不妨花個幾分鐘快速瀏覽一下，你會發現這段時間內，Node.js 已經加入了不少更加開發者友善的功能進來，也省卻了開發者還要花時間找第三方套件的時間。

[https://speakerdeck.com/masashi/you-may-not-need-xxx-in-nodejs](https://speakerdeck.com/masashi/you-may-not-need-xxx-in-nodejs)

除了上述這些新功能之外，最近也發現 Node.js 也在考慮實作 [**Web Storage API**](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) 的功能，但是後端是接上 Sqlite（嘿嘿，是不是很熟悉阿，沒錯！Bun & [Deno](https://github.com/denoland/deno/pull/7819) 都有類似的功能！）

[https://github.com/nodejs/node/pull/52435](https://github.com/nodejs/node/pull/52435)

# 開源世界真有趣

## 能在 Cloudflare 打工好酷阿！

說到 Cloudflare 這家以 CDN 起身的公司，應該很少網路相關從業人員不知道吧，而且大家對它最好奇的地方莫過於，它提供開發者這麼多好東西，而且很多都是免費使用的，到底它是靠什麼賺錢的阿 🤔！

這些問題都可以透過這集的 Podcast 得到解答啦！捕蛇者說邀請到了在 Cloudflare 工作的大大 - [**Yuchen Wu**](https://github.com/eaufavor) （他也是前陣子 Cloudflare 開源的 [Pingora](https://blog.cloudflare.com/pingora-open-source) 專案的主領之一）來跟大家分享在 Cloudflare 工作是怎樣的一個體驗，還有這間酷酷的公司還有什麼秘辛跟有趣的地方。身為開發者真的不要錯過，聽完之後我也好想投履歷阿！！（太弱 😢）

[Ep 46. 你知道『赛博佛祖』Cloudflare 吗？](https://pythonhunter.org/episodes/ep46)

## 跟 JSON 過招不能少的好東西

JSON 格式幾乎已經是開發網路服務一定會經手的資料格式，所以無論是測試  API 或是處理資料等都經常會使用到，也可以看到許多好用的小工具時不時出現在我們周遭。這次想分享的這個名為 `jnv` 的小工具，如果你需要從大量的 JSON 資料中，閱讀或找尋需要的欄位資料，這個小工具一定可以幫上你的忙。

非常類似另一個我們也很熟悉的 [`jq`](https://jqlang.github.io/jq/) 這個好工具，不過這個 `jnv` 除了能跟 `jq` 一樣快速解析輸入的 JSON 資料之外，它更在其上（其實是用 rust 重現的版本 - [jaq](https://github.com/01mf02/jaq)）提供了一些簡單的互動功能。

[https://github.com/ynqa/jnv](https://github.com/ynqa/jnv)

假設你想看一下 [BlueSky](https://bsky.app/) 首頁的資料，就可以用下列這方式，透過 jnv 與資料互動

```bash
*curl -XGET "https://api.bsky.app/xrpc/app.bsky.feed.getFeed?feed=at://did:plc:z72i7hdynmk6r22z27h6tvur/app.bsky.feed.generator/whats-hot" | jnv*
```

然後透過 jnv 就可以想拿什麼欄位資料，就下 pattern 給它即可（如下）

![bsky.gif](../assets/網路黑手的呢喃 #49 - bsky.gif)

## 雖然知道 JS runtime 非常多，但沒想到這麼多 😅

![Untitled](../assets/網路黑手的呢喃 #49 - Untitled 2.png)

其實這篇一開始是被上圖吸引的，原來現在有這麼多不同實作版本的 JS engine，不能不說 web ~~重造輪子的習慣~~ 活潑的生態圈，真的是永遠都不會改變 😅。這邊還只是算 engine 而已，如果再加上不同實作版本的 runtime 就更精采了。

這邊主要是介紹了 [**Boa**](https://boajs.dev/) 這個用 rust 實作的 JS engine，雖然穩定性等跟其他常見瀏覽器的 engine 可能沒得比，不過如果你想利用它來搭建自己的 runtime 的話相對簡單許多，作者直接用幾個範例來說明，蠻有趣的。

[Rust製JavaScriptエンジン『Boa JS』を試してみた](https://zenn.dev/itte/articles/5c8e5c191e386b)

### 你知道 Linux 各個目錄代表什麼嗎？

雖然常常在 *nix 的 terminal 切來切去，但還真的沒仔細想過每個命名後面代表的含義，原來 `/usr` 跟我想的差這麼多 😅。

![src: [https://x.com/bytebytego/status/1802216296387690697/photo/1](https://x.com/bytebytego/status/1802216296387690697/photo/1)](../assets/網路黑手的呢喃 #49 - Untitled 3.png)

src: [https://x.com/bytebytego/status/1802216296387690697/photo/1](https://x.com/bytebytego/status/1802216296387690697/photo/1)

# 引領風潮的 ML

## 伴隨 AI 的興起也出現其他的問題

大家都知道 AI 已經是今年的 keyword，伴隨著大量新創、應用程式的出現或整合 AI 的功能，雖然為大家帶來許多驚喜與方便，但是也伴隨者一些新的問題：

### **其一，就是安全與隱私的問題**

最近被燒到的就是 M$ 家即將在新版 Windows 上面推出的 Recall 功能（其實這個功能應該是高度借鏡 Mac 的 [Rewind](https://www.rewind.ai/) 這個 app 的，剛看到新聞的時候也是莞爾一笑，畢竟連操作方式都很像 😆）。

[Windows Recall demands an extraordinary level of trust that Microsoft hasn’t earned](https://arstechnica.com/ai/2024/06/windows-recall-demands-an-extraordinary-level-of-trust-that-microsoft-hasnt-earned/)

但因為安全研究人員（Kevin Beaumont）有警告這種形式可能會有安全性的問題（可能微軟有看到類似的言論之後，決定將這個功能改為用戶可以自行關掉，並預設為關閉），他也特地寫了一篇更詳細說明潛在威脅的文章（如下），有很多真的一般用戶不會想到到問題（預設不要記錄的資料，卻因為 Recall 被記錄下來，而且它不會被刪除。像這類的問題還很多，可以看文章有很多深入的說明）。

[](https://doublepulsar.com/recall-stealing-everything-youve-ever-typed-or-viewed-on-your-own-windows-pc-is-now-possible-da3e12e9465e)

### 其二，為了「取得內容」不擇手段

另外，這個是最近炎上的一個事件，就是 Adobe 最近變更了他們的使用者條款，然後裡面有一些非常誇張的內容（目前[還在等待 Adobe 的回覆](https://x.com/SamSantala/status/1798292952219091042)，但似乎它們也沒有要改的意思）。

![src: [https://x.com/MC_SHIZU/status/1798862223269560829](https://x.com/MC_SHIZU/status/1798862223269560829)](../assets/網路黑手的呢喃 #49 - Untitled 4.png)

src: [https://x.com/MC_SHIZU/status/1798862223269560829](https://x.com/MC_SHIZU/status/1798862223269560829)

後來發現除了 Adobe 之外，Meta 在早先也有了類似的條款變更，也是提到會拿用戶上傳或貼文來進行 AI 模型的訓練。在這個 AI 的時代，所有內容的被拿來當作訓練的資料，所有大企業都無所不用其極在收集各式各樣的用戶資料，相信這類的問題將來一定會越來越多也越來越嚴重。😣

[Meta is using your posts to train AI. It's not easy to opt out.](https://mashable.com/article/meta-using-posts-train-ai-opt-out)

### 截稿前的其三，開始作惡？

這段真的是截稿前才加上的，剛好也是延伸其二的問題，原本針對一些爬蟲機器人設立的協定（應該就是我們常見的 robots.txt），結果研究人員發現雖然放上了阻擋的規則，但是 AI 一樣能爬出內容並總結。在大家都在持續追求 AI 進步之下，很多原有約定成俗的規則可能都會被無視了（正所謂防君子不防小人）。

[Perplexity AI Is Lying about Their User Agent](https://rknight.me/blog/perplexity-ai-is-lying-about-its-user-agent/)

[2024-06-17 | Perplexity AI 的数据爬虫伪造 User Agent 引发争议](https://www.xiaoyuzhoufm.com/episode/666ee18dc26e396a362b1df3)

## Zed 也要支援 Ollama 啦！

如果還不知道 Zed 是什麼的話，它是最近默默竄紅的 rust-based editor，因為一開始就很注意在效能，所以有著非常快速的渲染速度，使用它的開發體驗也覺得越來越不錯，加上之後或許[有機會能相容 vscode 的 plugins](https://github.com/zed-industries/zed/issues/4845)，相當值得期待！

原本 zed 就有整合了 Github Copilot 的功能，不過最近開發團隊放出即將支援 [**Ollama**](https://www.ollama.com/)，也就是說之後不需要用 Github，直接跑 Ollama 支援的本地模型就可以了，超期待阿～ 👀

[https://x.com/KyleRayKelley/status/1800635412123374012](https://x.com/KyleRayKelley/status/1800635412123374012)

## 大家實作克隆版的速度會不會太快 😅

剛結束沒多久的 WWDC，相信就算不想還是被滿滿的 AI 洗版的各位，應該有留意到 iPad 上面即將支援名為 Math Notes 的功能，就是能透過 AI 直接把數學算式的結果算出來。想不到已經有人刻出克隆版本了，真是太強大了！

[https://x.com/tuturetom/status/1802655719319277796](https://x.com/tuturetom/status/1802655719319277796)

[https://github.com/ayushpai/AI-Math-Notes](https://github.com/ayushpai/AI-Math-Notes)

# 跟 1Password 說再見？

通常每年的 WWDC 之後，會出現的一個現象就是新版的 OS 出來之後，哪些第三方準備要收攤了，然後今年就輪到 1Password 了，因為 Apple 終於推出自家的 Password Manager。不過老實說，我看到類似的言論的時候，只是露出了尷尬而不失禮貌的微笑。😆

就過沒過多久真的出來打臉了，看到 DHH 轉了一個因為 [SIM swapped](https://blog.twnic.tw/2023/11/29/29151/)（這種攻擊方式在國內應該比較少出現）受害者的現身說法（有興趣可以從[這邊開始](https://x.com/blader/status/1800263787746066646)追）

![src: [https://x.com/dhh/status/1800458160039489774](https://x.com/dhh/status/1800458160039489774)](../assets/網路黑手的呢喃 #49 - Untitled 5.png)

src: [https://x.com/dhh/status/1800458160039489774](https://x.com/dhh/status/1800458160039489774)

其實除了跨平台的顧慮之外（這就見仁見智了，有人可能想當一輩子的果粉 😅），我個人對 Apple 自家服務也沒有到非常有信心，殊不見它們的服務也是常常出問題，之前也有[個人資料不見 Apple 也沒打算要處理](https://tw.news.yahoo.com/icloud-1-5%E8%90%AC%E7%85%A7%E7%89%87-%E6%B6%88%E5%A4%B1-%E7%94%B7%E5%BB%9A%E6%A7%93%E8%98%8B%E6%9E%9C%E6%B1%82%E5%84%9F300%E8%90%AC-063139190.html)的案例。所以怎麼會覺得把所有東西都放它們那裡是個好作法呢。

如果你是一般用戶，以前也沒有使用密碼管理器的習慣，那直接使用倒不是什麼問題，也能增加自己密碼的安全性，不過如果本來就有習慣用其他密碼管理器的，分散風險應該是更安全的作法，而且單就安全專業來說，像 1Password 這類的公司，比起大企業可能更能讓你信任。

# **網路是個好東西**

### 九日的官方 MV 出來啦！

不知道是不是太多人反映，官方居然釋出正式主題曲的 MV 啦！大家打不過的時候不妨休息一下聽個歌吧（誰像你這麼弱 ⇒ *我真的是弱雞，不開劇情模式真的打不過 #手殘黨想哭* 😅）

[https://www.youtube.com/watch?v=jo_-vr1FwJ0](https://www.youtube.com/watch?v=jo_-vr1FwJ0)

### 技能樹點錯了 😅

如果能一邊一睡一邊賺錢就太好了 #誤

[https://x.com/youhaveagift/status/1802598621051044183](https://x.com/youhaveagift/status/1802598621051044183)

### 希望大家都要好好練習

[https://x.com/kachu_CChaha/status/1800204188686914012](https://x.com/kachu_CChaha/status/1800204188686914012)