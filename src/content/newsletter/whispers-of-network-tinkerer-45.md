---
title: "網路黑手的呢喃 - #45"
date: "2024-03-28"
description: "Node.js 又針對模組問題有新嘗試了、硬派優化工作 JS 篇、又有針對 package manager 而來的新創（而且創辦人還不簡單）、開源消息之 Redis 篇及 Astro 框架的新東西，…"
tags:
  - AI
  - Frontend
  - Javascript
  - Newsletter
  - Node.js
  - OpenSource
  - bun
---
Node.js 又針對模組問題有新嘗試了、硬派優化工作 JS 篇、又有針對 package manager 而來的新創（而且創辦人還不簡單）、開源消息之 Redis 篇及 Astro 框架的新東西，當然還有講不完的 AI 以及網路好東西！

---

# **Web 生態圈例行更新**

### Node.js support require()ing synchronous ESM module

老實說剛看到這個 RP 的消息覺得怪怪的，大家應該都知道 CJS/ESM 的問題是目前 Node.js 生態中一項相當令人頭痛的問題，目前不同的 JS runtime 也各自有不同的解法，有的像 bun 走向兩者兼容的路線，也有像 Deno 一樣擁抱 ESM 的決定。

老實說目前 Node.js 的方案相當糟糕，要透過 `mjs` 或是 `packages.json 裡面的 type` 來切換 ESM 的使用，而且兩者不兼容，真的對開發者來說相當的不友善，而且也讓人感到錯亂。

[https://github.com/nodejs/node/pull/51977](https://github.com/nodejs/node/pull/51977)

不過這個 PR 就是走一條大家沒想到的路線 — 支援用 CJM 的 `require` 來引入 ESM 模組！作者也是 Node.js 核心貢獻者之一的 [joyeecheung](https://github.com/joyeecheung)，她也特別針對這個議題寫了一篇更完整的文章來說明為什麼會有這個 PR 的開發動機，以及許多關於 module loader 的事，推薦大家都可以去看看。⬇️

[require(esm) in Node.js](https://joyeecheung.github.io/blog/2024/03/18/require-esm-in-node-js/)

### 優化真的是一門黑手工作 😅

幾乎各語言都會有這類說明優化技巧的文章，JS 就更不用說了，網路上隨便搜尋應該都可以找到一堆，不過每每看到這類的文章還是會點進去看一下，每次也都有不同的收穫，畢竟隨著時代的改變，JS engines 也隨之有很多的變化，更不要說不同的 engine 可能還有不同的優化方式。

[romgrk](https://romgrk.com/posts/optimizing-javascript)

不過老實說看了幾個裡面提到的要點，譬如「[Avoid array/object methods](https://romgrk.com/posts/optimizing-javascript#3-avoid-arrayobject-methods)」、「[Avoid indirection](https://romgrk.com/posts/optimizing-javascript#4-avoid-indirection)」裡面提到的範例，感覺很多都是針對所謂的 modern JS 或是一些更友善的程式風格（它裡面是用 functional vs Imperative，還有 Proxy 這個新功能來舉例），結果反而這類都是影響速度的負面因素（這樣不就代表新東西最好都不要隨便用 😓）

### Ry 重磅回歸

雖然這個消息跟開發沒有直接關係，不過如果是 JS 開發者應該多數都認識 Ryan Dahl 這位 Node.js 以及 Deno 的作者。之前因為受不了 SNS 所帶來的影響，他刪了自己的 Twitter 帳號離開了 SNS 好長一段時間，然後[最近終於又回來了](https://twitter.com/rough__sea)！🙌

雖然不知道是不是這樣也比較方便宣傳自家 deno_land 的服務，不過看到大大回歸真好！

![src: [https://twitter.com/rough__sea](https://twitter.com/rough__sea)](../assets/網路黑手的呢喃 #45 - Untitled.png)

src: [https://twitter.com/rough__sea](https://twitter.com/rough__sea)

其中提到一個回歸原因就是最近 Node.js 放出的紀錄片，真的是內容滿滿，身為一路走來的老人感觸好深，雖然 JS 三不五時就會被拿來調侃，本身也有很多缺陷，但是社群的活力一直是它最令人喜愛的地方（當然 Drama 也是不會少 😁）

![](https://www.youtube.com/watch?v=LB8KwiiUGy0)

## 幾個更新的消息

### Bun 1.1 準備要上了

其中最大的影響就是支援 Windows 啦！

不能不說，Bun 真的是目前 Node.js 繼承者中最突出的那個，感覺它們選擇走的路線很聰明，也看到不少第三方也開始擁抱它們了（比 Deno 還多的感覺 😂），可以期待它們後續的發展～

![](https://www.youtube.com/watch?v=yXTFOeGly9o)

### Node.js v20.12.0（LTS）出爐，還有大家也可以久違回去看一下官網喔 😁

LTS 默默也到了 v20.12.0 這個版本，最近目前新功能應該是在 v21 進行，不過還是可以看到幾個 backport 出現，譬如[針對 env 的改善](https://nodejs.org/en/blog/release/v20.12.0#loading-and-parsing-environment-variables)、[文字樣式](https://nodejs.org/en/blog/release/v20.12.0#text-styling)（所以應該不需要 color 了吧）等功能。不過最近如果回去官網的話應該會發現不太一樣了？

最近它們也針對官網改版這件事寫了一篇公告跟說明文，稍微講述了改版的過程以及它們採用了哪些第三方服務（看起來部分就是 Node.js 生態的服務商 😁），有興趣的話可以[瀏覽一下](https://nodejs.org/en/blog/announcements/diving-into-the-nodejs-website-redesign?utm_content=287222882&utm_medium=social&utm_source=twitter&hss_channel=tw-91985735)。

![src: [https://nodejs.org/en/blog/announcements/diving-into-the-nodejs-website-redesign](https://nodejs.org/en/blog/announcements/diving-into-the-nodejs-website-redesign)](../assets/網路黑手的呢喃 #45 - Untitled 1.png)

src: [https://nodejs.org/en/blog/announcements/diving-into-the-nodejs-website-redesign](https://nodejs.org/en/blog/announcements/diving-into-the-nodejs-website-redesign)

### 又一個 JS package manager？

如下圖（不解釋 😂

三個前 npm 的相關人士集合在一起創業，想必應該是跟 package manager 有關吧，雖然目前

從標語只能猜到這些，但實際要做些什麼目前還看不太出來。

<aside>
💡 We are building the future of JavaScript packages.

[https://www.vlt.sh/](https://www.vlt.sh/)

</aside>

自己是希望不要是又只是多了一個 package manager 這樣程度而已，畢竟 JS 圈最愛重造輪子了，現存的 npm、yarn、pnpm、bun，如果又多了一個不怕大家選擇障礙嗎 😅。

不知道是不是劍指最近 Deno 推出的 JSR 而來，是圍繞在模組的生態而來的，而不是單純的工具而已。不過話又說回來，如果只是這樣，那現在的 JSR 也足夠驚豔了，好像也不需要再多一個 registry 類的服務？

只能瞎猜，目前還真不知道它們打算做什麼 🤔

![src: [https://blog.vlt.sh/blog/the-team](https://blog.vlt.sh/blog/the-team)](../assets/網路黑手的呢喃 #45 - Untitled 2.png)

src: [https://blog.vlt.sh/blog/the-team](https://blog.vlt.sh/blog/the-team)

# 開源世界真有趣

### 為什麼 MS 好像知道些什麼…

最近開源圈比較大的一個新聞，應該就是 Redis 宣布變更了開源授權的消息吧，剛好看到大大也出了一篇文章再講這件事。

[Redis 改變授權，變成非開源軟體](https://blog.gslin.org/archives/2024/03/22/11710/redis-改變授權，變成非開源軟體/)

看歷史的脈絡，好像其實之前就已經陸續針對自家開發的元件早已經更改，不過現在連 Redis 本體也走上 SSPL 之後，看起來應該會走向之前 Elastic 的老路吧（企業 vs 開源社群？），然後也因為這樣才注意到原來早就有 Redis fork 的版本 - [KeyDB](https://docs.keydb.dev/) 了。

不過更讓人遐想的是，在這個消息出現的幾天前，富爸爸 MS 才剛放出了一個自家開發的類 Redis 軟體 - Garnet，莫非它們是早就知道這件事了嗎 😆。

[https://github.com/microsoft/garnet](https://github.com/microsoft/garnet)

### 又一個前端框架提供全端方案

為什麼說又，因為之前 Deno 的 Fresh 也有類似的行為，就是自家的 fresh + KV，然後這次是另一個新期頗受注目的前端框架 - Astro，也推出他們自家的儲存方案 - [**Astro DB**](https://astro.build/db/)。

![src: [https://twitter.com/astrodotbuild/status/1767605560671969619](https://twitter.com/astrodotbuild/status/1767605560671969619)](../assets/網路黑手的呢喃 #45 - Untitled 3.png)

src: [https://twitter.com/astrodotbuild/status/1767605560671969619](https://twitter.com/astrodotbuild/status/1767605560671969619)

除了服務的說明頁之外，他們也特別針對 Astro DB 寫了一篇專門的公告文章，來解釋它的技術細節，以及為什麼它們採用 libSQL 的原因（沒錯！當我們看到 libSQL 就可以猜到後面提供服務的平台就是 [libSQL 本家服務 Turso](https://twitter.com/tursodatabase/status/1770523849576095984) 啦！）。

[Astro DB: A Deep Dive | Astro](https://astro.build/blog/astro-db-deep-dive/)

其實自己沒有親自玩過 Astro，不過印象中之前好像看到一個說法是 Astro 比較適合處理靜態內容為主的網站，但是現在透過加入 DB 跟框架本身深度整合，是不是現在 SPA/SRR 也可以用 Astro 來弄呢？🤔（真的該花一點時間來玩玩看）

# 引領風潮的 ML

### Suno 越來越強了！

之前就已經小有名氣的 AI 創作歌曲 - [suno.ai](http://suno.ai)，先前發布已經升級到 [v3](https://www.suno.ai/blog/v3) 版本的消息，根據他們的說法，出了產生出來的歌曲品質更好之外，歌曲的長度也延長到 2min，幾乎已經快跟一般個歌曲差不多了。然後最重要的 v4 on the road。😁

然後我就拿了本老人粉最愛的 SNSD 的一首歌丟進去，歌詞則是直接放歌詞原封不動的翻譯，就做出下面這個範例，覺得好像還不錯，真的以後創作歌曲會不會也出現一個強大的競爭者 😆

[https://app.suno.ai/song/ef9608ea-8850-4b03-b4a2-99170c4dc170](https://app.suno.ai/song/ef9608ea-8850-4b03-b4a2-99170c4dc170)

### 劍指 Nvidia

正所謂樹大招風，可能因為目前股價實在太引人注目了，幾乎目前的 AI 運算的基礎都是根據 Nvidia 的晶片與平台，導致其他人非常眼紅（誤），所以出現了這個叫 The Unified Acceleration Foundation 的組織，要提供一個開源的軟體套件來脫離 Nvidia 的專有技術。

雖然出現這個一點都不意外，不過看到成員裡面有 Google 就會覺得是不是又落個虎頭蛇尾的下場 😅。

[Nvidia’s AI chip dominance is being targeted by Google, Intel, and Arm](https://www.theverge.com/2024/3/25/24111435/nvidia-ai-market-google-intel-arm-uxl-foundation-cuda)

### 又來了一個 AI 應用，但推薦大家可以試玩看看

雖然各服務套上 AI 之後重出江湖已經不算是什麼特別的事了（而且套殼之後付費直接升級成訂閱制啦！😅），不過這個由推友新推出的 AI + 語言學習的 app，還是很推薦大家可以去試玩看看。

![src: [https://twitter.com/kevinzhow/status/1772810844117819688](https://twitter.com/kevinzhow/status/1772810844117819688)](../assets/網路黑手的呢喃 #45 - Untitled 4.png)

src: [https://twitter.com/kevinzhow/status/1772810844117819688](https://twitter.com/kevinzhow/status/1772810844117819688)

# **網路是個好東西**

### 好像不只 Elastic 有這種感覺而已

![](https://twitter.com/jasonbosco/status/1769878223427338440)

### 熟悉的感覺😂

![](https://twitter.com/moeSkyHigh/status/1770615940843184552)

### 雖然有點殘忍，但是有種爽快感😆

![](https://twitter.com/InternetH0F/status/1772493698732830741)

### 辦公室的好東西

是說這個一組怎麼夠用，起碼要標配 3~4 組才能涵蓋這個角度的突擊。😂

![](https://twitter.com/twibuznews/status/1772541080157995482)

### 科技發展是一個循環

雖然這個應用看起來有點搞笑，但是科技的發展好像常常這樣，轉過來又轉回去。

![](https://twitter.com/benhylak/status/1772729326104187270)