---
title: "網路黑手的呢喃 - #37"
date: "2023-10-26"
description: "另外一個就是 7.0 把原本的 Query Engine 重寫過了，顯著的改善。專案的其中一位開發者也寫了一篇文章很詳細的講述了何為 Query Engine、為何要重寫、以及實作的細節，值得一讀 …"
tags:
  - Cloud
  - Cloudflare
  - MongoDB
  - Newsletter
  - Node.js
---
MongoDB 7.0！還有一些有趣的新東西、Cloudflare #BirthdayWeek、The state of WebAssembly 2023，還有慣例的 JS、AI 更新，當然還有不能少的網路好東西！

---

# MongoDB keep moving forward

雖然還是不少開發者不把 NoSQL 當成偏門左道，不過不能不說身為其中的領頭羊 MongoDB，還是一種快速開發實作下，相當好用的儲存方案。雖然一開始以 NoSQL 起身，不過 MongoDB 也是持續不斷在優化自己的資料庫與雲服務，前一陣子剛結束的 [**MongoDB.local 2023**](https://www.youtube.com/playlist?list=PL4RCxklHWZ9u2GenfMloNQPskKq4LZilO) 也提到不少即將推出的新功能。

![](https://www.youtube.com/watch?v=uA8ATFAc4JM)

主軸應該可以分成兩個部分，一個是 MongoDB 7 的新功能，另一個當然就是搭上 Buzzword 的 AI 常見的 Vector Search 的功能，其中還有許多新東西，如果有興趣的話可以看一下議程。

### **MongoDB 7.0**

每年一個大版號應該也成為 MongoDB 的慣例了，今年發布的 7.0 比起新功能，感覺更多是針對現有功能的增強與改進，有興趣可以參考上面的 7.0 highlight 影片，裡面有詳細的說明。

- [Compound wildcard indexes](https://www.mongodb.com/docs/v7.0/core/indexes/index-types/index-wildcard/index-wildcard-compound/) → 針對 nested object 作索引將不再需要用條列式來處理，對大型 collection 應該蠻有幫助的。
- Move the calculation to the MongoDB → 這次新版多了幾個常見計算方式的新指定（如 $[median](https://www.mongodb.com/docs/v7.0/reference/operator/aggregation/median/)、$[percentiles](https://www.mongodb.com/docs/v7.0/reference/operator/aggregation/percentile/))，可以直接計算出中位數、百分比等結果，非常方便啊～
- Change Streams → 看起來要做一些監控或 hooks 好像更方便了，可以針對 DB 或 collection 來進行監聽並客製後續的行為。
- Queryable Encryption → 這其實在 6.0 就被提出了，不過到 7.0 算是正式公開了，想瞭解更深入的實作可以參考[官方的專文](https://www.mongodb.com/blog/post/mongodb-announces-queryable-encryption)。對於有加密強需求的領域看起來會試試看（簡單說就是儲存方完全沒辦法看到資料內容，但是卻可以正常做到 DB 查詢的功能）。

> 另外一個就是 7.0 把原本的 Query Engine 重寫過了，顯著的改善。專案的其中一位開發者也寫了一篇文章很詳細的講述了何為 Query Engine、為何要重寫、以及實作的細節，值得一讀 ⬇️

**Inside New Query Engine of MongoDB**
[https://laplab.me/posts/inside-new-query-engine-of-mongodb/](https://laplab.me/posts/inside-new-query-engine-of-mongodb/)
> 

### Atlas Vector Search

除了一些新功能之外，在大家都圍繞著 AI 發力的時刻，當然 MongoDB 也沒錯過，推出它們的新服務 - Atlas Vector Search。（其實看了感覺應該有部分基於之前的 Atlas Search）

> **Introducing Atlas Vector Search: Build Intelligent Applications with Semantic Search and AI Over Any Type of Data**
[https://www.mongodb.com/blog/post/introducing-atlas-vector-search-build-intelligent-applications-semantic-search-ai](https://www.mongodb.com/blog/post/introducing-atlas-vector-search-build-intelligent-applications-semantic-search-ai)

**Vector Search is a capability that allows you to query your data based on semantics or the meaning of the data rather than the data itself.**
> 

其實對於 Vector Search 我自己也是有點似懂非懂，畢竟沒有完整試過整個 Machine Learning 的創建流程，不過找資料的時候剛好看到[**這篇文章**](https://yangfei.me/tutorials/mongodb-atlas-vector-search)，它也用了 Atlas Vector Search 來說明，如果跟我一樣還在 AI 新手村的話可以先參考看看😅。

總之簡單說，Vector Search 就是可以讓你搜尋出「相似的結果」，所以還是得先透過機器模型的工具（Embedding Model）把資料作轉換，然後就可以接上 Atlas Vector Search 來計算相似度並提取你期望的結果。上面的範例剛好提了一個完整的流程，透過 Atlas Trigger Function，就可以把整段自動化 ⬇️

> *嵌入式模型（Embedding Model）是一種常見的機器學習模型，用於將高維度的資料轉換為低維度的表示形式。這種轉換通常是為了更有效地處理和分析資料，特別是在自然語言處理（NLP）和圖像處理等領域。在 NLP 中，嵌入式模型被用來將單詞或詞彙轉換為密集的向量表示，以便更容易處理和分析文本數據。*

— from ChatGPT
> 

![Untitled](../assets/網路黑手的呢喃 #37 - Untitled.png)

感覺大家都要進來 AI 領域分一杯羹，看來這個 buzzword 還會燒一陣子😆。可以期待下 MongoDB 接下來還會拿出什麼有趣的東西來。

# Cloudflare #BirthdayWeek

不能不說最近 Cloudflare 在心中的排名真的是急遽上升中，默默耕耘著雲端開發的它們，也開始成為一股不容忽視的戰力了。

剛結束的開發週又丟出不少有趣的東西了，剛好寫了一篇簡單記錄一些有趣的東西，當然也可以直接看它們的官網[一系列的文章](https://blog.cloudflare.com/tag/birthday-week/)，會有更詳細的介紹。

> **2023 Cloudflare #BirthdayWeek!**
[https://chat.sylee.dev/2023/10/07/2023-cloudflare-birthdayweek](https://chat.sylee.dev/2023/10/07/2023-cloudflare-birthdayweek)
> 

# 例行的 JS-ecosystem 新消息

### Node.js v21.0 出爐！

真的是時光飛逝，居然已經到 [v21](https://twitter.com/nodejs/status/1714310805745758435) 版本了😅

相信有在關注相關新聞的使用者，應該也已經大概知道有哪些新功能了，不過社群的力量總是讓人無形中得到許多來自不同參與者的給予，這次升版當然也不例外，身為核心開發者的 Red Hat 工程師照例也是發了一篇新版本的介紹文。（詳細的 PR 的可以跳轉[這邊](https://github.com/nodejs/node/pull/49870)）

- Fetch 已進入「穩定」的階段 → 這樣幾乎不再需要第三方的 http client 了吧 🙌
- 原生 [WebSocket](https://github.com/nodejs/node/commit/e28dbe1c2b) 支援 → 又少了一個第三方的依賴了。
- ESM（default-type） → 多了這個 flag 可以直接參數指定專案的模組（不過老實說覺得 ESM 的相容問題真的還需要多加把勁，起碼像 bun 兩邊相容應該是可以看齊的目標，這應該是開發者最希望看到的🤞）

*大家應該還記得 Node.js 的發行慣例吧，v21 將會是開發版本，待穩定之後就會升版至 v22，然後成為下一個 LTS*。

![src: [https://twitter.com/mhdawson1/status/1714323191139639471](https://twitter.com/mhdawson1/status/1714323191139639471)](../assets/網路黑手的呢喃 #37 - Untitled 1.png)

src: [https://twitter.com/mhdawson1/status/1714323191139639471](https://twitter.com/mhdawson1/status/1714323191139639471)

### Node.js needs a new mascot 😄

Node.js 終於考慮要設計一個專案代表的吉祥物了（就跟 [Rust](https://www.google.com/search?q=rust+mascot&sca_esv=575623720&rlz=1C5CHFA_enTW1068TW1068&tbm=isch&sxsrf=AM9HkKlfZ3teow9pLZNA1TwngBbQt0NZIg:1697995040520&source=lnms&sa=X&ved=2ahUKEwjow-G5lIqCAxUfdvUHHXz1DzkQ_AUoAXoECAIQAw&biw=1512&bih=742&dpr=2) 的螃蟹或 [Go](https://www.google.com/search?q=go+mascot&tbm=isch&ved=2ahUKEwi5tOu6lIqCAxX40zQHHRl0BD4Q2-cCegQIABAA&oq=go+mascot&gs_lcp=CgNpbWcQAzIHCAAQExCABDIICAAQBxAeEBMyCAgAEAcQHhATMggIABAHEB4QEzIICAAQBxAeEBMyCAgAEAcQHhATMggIABAHEB4QEzIICAAQBxAeEBMyCAgAEAcQHhATMggIABAHEB4QEzoICAAQCBAeEBM6BQgAEIAEOgYIABAHEB5QyAlYuhdg2hhoA3AAeACAAT2IAf0CkgEBN5gBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=Ilk1ZbmbL_in0-kPmeiR8AM&bih=742&biw=1512&rlz=1C5CHFA_enTW1068TW1068) 的地鼠一樣)，好期待阿🥹（之前有人提到 [rocket turtle](https://github.com/nodejs/admin/issues/828) 覺得真的滿適合的，有種自我解嘲的含義，而且這 symbol 我印象也是之前某個 Node.js 專案先設計的）

![](https://twitter.com/nodejs/status/1713984983566610540)

### Deno Fest

還在等待 Deno 2.0 出現的時刻，沒想到它們居然跑去日本開了一個小型 [Conference](https://deno-fest-2023.deno.dev/)，其中不少核心成員都出席了（當然也都各自講了一些相關的議程），有興趣的可以收聽它們當天的[議程錄影](https://www.youtube.com/watch?v=dAt-r7-Imgk)喔。（但是沒盼到期待的 2.0 或新功能，大部分是講述目前現有 Deno 生態圈的部分😢）

![](https://twitter.com/toranoana_lab/status/1715304686071447891)

# The State of WebAssembly 2023

WebAssembly 也是最近一直有在留意的部分，雖然也不是什麼新東西，不過近來越來越多應用都開始涉足 WemAssembly，各語言的支援也都逐步到位，感覺應該是有機會成長起來。

就跟其他語言每年會調查開發者的意見回饋，WebAssembly 這邊也不例外，所以最近就看到 2023 的調查結果已經[公布](https://blog.scottlogic.com/2023/10/18/the-state-of-webassembly-2023.html)了！

![src: [https://blog.scottlogic.com/2023/10/18/the-state-of-webassembly-2023.html](https://blog.scottlogic.com/2023/10/18/the-state-of-webassembly-2023.html)](../assets/網路黑手的呢喃 #37 - Untitled 2.png)

src: [https://blog.scottlogic.com/2023/10/18/the-state-of-webassembly-2023.html](https://blog.scottlogic.com/2023/10/18/the-state-of-webassembly-2023.html)

文中有很貼心幫讀者整理好 TL;DR，所以如果懶得看全文的話可以直接看頁首也就知道個大概了。

不過自己簡單瀏覽過之後也看到一些自己比較感興趣的地方。

- 開發語言部分 → Go、Swift、Zig 崛起，尤其最近 Zig 真的曝光度頗高阿 😄
- 原來有這麼多東西都採用 WebAssembly 來開發 Plugin 的功能，原本只有留意到 Zellij 而已（居然還有 Microsoft Flight Simulator 🤣）
- 第一次留意到 [Component Model](https://github.com/WebAssembly/component-model/blob/main/design/high-level/Goals.md) 這個東西（強化不同語言開發的 wasm 之間的互通），真的有像「一個新領域開始逐步打地基」的感覺。

# 本年度 buzzword - AI

### AI特化版 - Mojo，Mac 版本終於釋出了

之前提過 Swift 爸爸現在跑來 AI 創業，然後它們弄了一個類 python 的新語言，專門針對機器學習這個領域來優化它的執行效能，最近終於把 Mac 版本釋出了，不知道之後還會帶給大家什麼驚奇。😄

![](https://twitter.com/Modular_AI/status/1714020585775448473)

### 越來越猛了，之後內容感覺會被農場大量攻佔😓

![](https://twitter.com/Zuntan03/status/1704807854384066714)

# 網路是個好東西

### 看不懂這是褒是貶🤣

![](https://twitter.com/jayair/status/1716542046310150615)

### Notion高級技巧👀

一個軟體工程師在使用 Notion 來搭配自己的日常作息，裡面有不少非常實用的技巧與第三方的應用，就算不是身為工程師的人也很受用。

*不過現在搭配 AI 的功能，都需要另外再付一筆費用，真的是越來越貴的訂閱費阿。*😅

![](https://www.youtube.com/watch?v=7z0HYLZX8Xg)

### 直到我背部中了一箭😢

年紀大真的開始各種痛，大家都要好好照顧自己的身體阿 🤞

![](https://twitter.com/yschen25/status/1712433945911107863)

### 拯救現代人的絕好物

這樣就可以放心躺著滑了 #大誤

![](https://twitter.com/seevua/status/1712634262019580072)

### 原來尷尬的是我 😅

![](https://twitter.com/tw111111111111/status/1714315149765677213)

### 最帥的阿杯無誤

最近 Nvidia 真的跟著 AI 聲勢也是水漲船高，不過除了聽他說 Machine Learning 的東西之外，不少訪談都蠻值得一聽了，真的是隱藏不住的帥！

![](https://twitter.com/pirrer/status/1714125373045366943)

### 身為老粉的我也想被甩

不懂這梗可以跳轉[這邊](https://www.youtube.com/watch?v=uhZTG8w0t7c)🤣

![](https://twitter.com/maka_0805/status/1713522908713361817)

### 歐卡玩家就是這麼樸實無華🤣

駕駛座是很重要的，我只是稍微認真一下而已 #誤

[https://www.instagram.com/p/CxtWoocvULl](https://www.instagram.com/p/CxtWoocvULl)