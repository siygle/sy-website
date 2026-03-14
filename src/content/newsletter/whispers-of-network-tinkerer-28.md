---
title: "網路黑手的呢喃 - #28"
date: "2023-03-28"
description: "Deno was created to simplify and accelerate JavaScript development. Core features include native Ty…"
tags:
  - AI
  - Deno
  - Newsletter
  - OpenAI
  - TypeScript
  - npm
---
Socket 關心您的 npm 安全、Deno 支援 package.json 後的下一步是？TS 默默也升到 5.0 了、ChatGPT & AI 的未來會是？寫文的好工具，以及喧賓奪主的網路好東西（篇幅越來越長了😆）

---

## npm的安全，從安裝的第一步開始😊

之前提過 webtorrent/standard 這幾款知名的 Node.js 條件的開發者，跑出來成立了一間著重 npm 生態安全的公司 - [Socket](https://socket.dev/)。最近它們有發布了一個新工具 - `safe npm`。其實就是個 npm wrapper（其他套件管理器，譬如 yarn、pnpm 等，他們有提到會陸續支援），作用就是在安裝前幫你作安全的相關檢查。

不過畢竟 [Socket](https://socket.dev/) 是第三方的公司，不知道未來的發展會如何，不過當成一個幫忙檢查安全的小工具，對開發者來說的確是滿方便的。

![](https://twitter.com/feross/status/1636438247537782784)

## Why Deno decide to support package.json & 下一步是？

大概是因為不少開發者對 Deno 針對 npm 相容的動作有不少疑問（畢竟一開始出來的時候把npm、`package.json` 罵的這麼兇🤣），Ryan Dahl 最近發了下篇這篇官方文來說明為什麼會作這個決定的原因。

我猜或許 Deno 團隊也發現拋棄龐大的 npm 生態對於 Deno 的發展未必是一件好事，尤其 Deno 的核心目標—簡化與改善 JS 的開發。所以支援 npm 生態中必備的 `package.json` 也是抹平目前 Deno/Node.js 之間的一些必要手段。

> Deno was created to simplify and accelerate JavaScript development. Core features include native TypeScript support, built-in tooling, zero configuration by default, and web standard APIs.
> 

不過 Ryan 特別提到關於即將發布的 Major upgrade 的一些變更，它們即將要引入一個新的套件引用的方式 → `deno:oak@12` 透過這種方式引用的模組，Deno 將會更進一步處理模組依賴的問題。

![](https://twitter.com/deno_land/status/1637663385503268864)

除此之外，最近看 Deno repo 也看到一些有趣的東西，譬如像下面這個😄

[https://github.com/denoland/deno/pull/18232](https://github.com/denoland/deno/pull/18232)

印象中好像有人提過 Deploy 上會不會有原生支援的儲存方案，看起來說不定 Deno 團隊的確有在思考這方面？還是這是為了其他的變更在鋪陳？希望四月的 Deno 2.0 那場議程能有什麼有趣的東西出爐阿🤞

*ps: 截稿之前看到有人已經先試玩並簡述功能了，看起來的確是「進階版」key-value 儲存功能，或許可以期待 Deploy 上加上這個功能？*

> **Deno v1.32でKVストアが実装されました**
[https://zenn.dev/uki00a/articles/kv-store-introduced-in-deno-v1-32](https://zenn.dev/uki00a/articles/kv-store-introduced-in-deno-v1-32)
> 

## 邁向 5.0 的 TypeScript

TS 也默默走到 5.0 了，雖然大家對它評價不一，不過起碼每年的 survey 出來，tpying 一直都是穩坐第一名的位置，TS 當然還是會有一批支持它的人，不少新一代的 runtime 都預設支援 TS 就可以看出一些端倪。

大版本當然是海量更新，不過裡面比較感興趣的只有 [Decorators](https://devblogs.microsoft.com/typescript/announcing-typescript-5-0/#decorators) & [優化](https://devblogs.microsoft.com/typescript/announcing-typescript-5-0/#speed-memory-and-package-size-optimizations)這部分。當然我還是私心希望有天 TS 真的能變成 ECMAScript 的一部分，如果你很喜歡的話，可以考慮 Deno，它立馬就支援到 [5.0 版本](https://github.com/denoland/deno/pull/18294)啦（但是 Decorators 還沒支援😅）

![](https://twitter.com/typescript/status/1636416665071288321)

## ChatGPT & the future of AI

最近火紅的 ChatGPT 應該很少人到現在都完全沒玩過吧😄

伴隨著它強大的功能，大家也不禁想問，是不是真 AI 的世界快要到了呢！或許還有很長的一段路要走，可能也沒人知道後來到底會演變成怎樣，不過這些疑問都掩蓋不了目前它的鋒芒畢露。

最近 OpenAI CEO 上了 Podcast 用蠻長的時間跟主持人討論了許多 AI 的相關問題以及未來的發展，相當值得一聽。

![](https://www.youtube.com/watch?v=L_Guz73e6fw)

當然。如果你是英文苦手的話，這邊也是有其他達人已經幫忙做好筆記的⬇️

![](https://twitter.com/oran_ge/status/1640142896723808262)

### 小而美的發佈工具

自從經歷了[劍橋](https://zh.wikipedia.org/zh-tw/Facebook-%E5%89%91%E6%A1%A5%E5%88%86%E6%9E%90%E6%95%B0%E6%8D%AE%E4%B8%91%E9%97%BB)跟[推特自爆](https://twitterisgoinggreat.com/)等事件，可能越來越多人認為回歸原本的網路本質，不該把所有的東西放在巨人那邊可能才是對網路生態最好的。不知道是不是錯覺，最近似乎有不少小團體（或獨立開發者）都放出了類似的發佈內容小工具，譬如這篇提到的 - [Sora](https://sora.city)。

[https://die-partei.social/@hackernews/109888222387744243](https://die-partei.social/@hackernews/109888222387744243)

如果對中文比較習慣的也可以參考中國開發者的作品 - [Gridea](https://gridea.dev/)，都是很優秀的發佈工具，小而美最棒啦😄。（大家寫起來!!）

---

## 網路是個好東西

### 真的是UI苦手的福音😅

***連結記起來!! - [tailwindcomponents.com](https://tailwindcomponents.com/)***

![](https://twitter.com/vikingmute/status/1632200244355297280)

### 世界真的大步向前邁進，太快了！

除了 AI 之外，連遊戲世界也要迎來變革了。話說之後這麼容易建模的話，會不會有結合AI&3D建模兩者的應用，然後你的虛擬助理就具現化了！！

![](https://twitter.com/AnsonChen/status/1640261426907594752)

### 以後會不會出現教寫 prompt 的課程😆

![](https://twitter.com/ihower/status/1639451445920669701)

### 錄Podcast需要好工具

![](https://twitter.com/clonncd/status/1637302912903974912)

不過也是有大大實測之後給了不堪用的評論🤣(*再回去調整一下吧，Adobe*)

![](https://twitter.com/AnsonChen/status/1640398860454612992)

### 令人感慨

原本都走在眾人前面的 Google，居然也有變成追趕別人的一天，你缺乏的不是才華洋溢的創造力，你缺乏的是能好好把自己的產品打磨得更亮麗的能力。

![](https://twitter.com/oasisfeng/status/1638608786356326400)

### 你不小心說出商業機密了😆

*Bard 是最近 Google 推出的 ChatGPT 競品，因為討論熱度差太多，品質也差很多，防止有人不知道它是什麼😆*

![](https://twitter.com/siygle/status/1638360219003781120)

### 原來奶油可以這樣擠🫢

*受教了！*

![](https://twitter.com/roaneatan/status/1639322639809544193)

### 什麼時候警察杯杯變這麼幽默了🤣

[https://g0v.social/@miau715/109908986179173081](https://g0v.social/@miau715/109908986179173081)