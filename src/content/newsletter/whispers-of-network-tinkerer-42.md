---
title: "網路黑手的呢喃 - #42"
date: "2024-01-22"
description: "The Interop organization is a group that aims to promote interoperability and collaboration between…"
tags:
  - AI
  - Apple
  - Deno
  - Docker
  - Meta
  - Newsletter
  - Web
  - bun
---
Deno & Bun 近況、Interop 2023 & 2024、Frontend 世界跑太快心累了😓（但還是看看 2024 有什麼可能的發展）、Docker Build Cloud，以及滿滿的 ML、Apple Vision Pro 與網路好東西！

---

# **Web 生態圈例行更新**

### Deno 1.40

Deno 例行更新，這次是 [1.40](https://deno.com/blog/v1.40)（會是 Deno2 之前最後一個 minor 版本嗎？🤔）。除了例行的修 bug、Node.js 生態圈的相容之外，比較讓人驚奇的是 [Temporal API](https://tc39.es/proposal-temporal/docs/) 跟 [Decorators](https://github.com/tc39/proposal-decorators) 居然在這個版本開始支援了，真快！

一開始因為 ry 跟 Rust 的關係，對 Deno 這個專案一直有好感，也滿希望它能做出自己的特色來，不過在強力競爭者 Bun 崛起的現在，Deno 感覺定位好像有點尷尬，希望它能狠狠給我打臉。🤞

![src: [https://twitter.com/deno_land/status/1750514791607644437](https://twitter.com/deno_land/status/1750514791607644437)](../assets/網路黑手的呢喃 #42 - Untitled.png)

src: [https://twitter.com/deno_land/status/1750514791607644437](https://twitter.com/deno_land/status/1750514791607644437)

最近它們也[回顧了過去一年中的進展](https://deno.com/blog/deno-in-2023)，其實 Deno 也是默默一直在進化，不過實在是隔壁棚的 Bun 實在開發力度太驚人，然後一開始沒有很積極作 Node.js/npm 相容的這塊，後來才提起直追（不過老實說我也還不是很確定它們對模組的定位，因為[看起來 2.0 又要推一個自家的](https://jsr.io) 🤔）。

### Bun or Windows on the road

Bun 也準備要跨到 Windows 了，倒數計時中，然後 [1.1.0](https://twitter.com/jarredsumner/status/1753465407141474482) 可能也在不遠處了，最近在眾 JS runtime 之中，Bun 的戰鬥力應該是數一數二的了，期待外來這一年中還會帶給大家什麼驚喜。

![src: [https://twitter.com/bunjavascript/status/1753267105909416079](https://twitter.com/bunjavascript/status/1753267105909416079)](../assets/網路黑手的呢喃 #42 - Untitled 1.png)

src: [https://twitter.com/bunjavascript/status/1753267105909416079](https://twitter.com/bunjavascript/status/1753267105909416079)

### 原來有 Interop 這個組織

看到 Webkit 貼了這篇，想說什麼是 Interop？🤔

> The Interop organization is a group that aims to promote interoperability and collaboration between different web browsers and platforms. They work towards developing common standards and guidelines to ensure that web technologies work consistently across different systems.

感謝 Notion AI 😄
> 

簡單說就是一個眾瀏覽器開發商的組織，會於每年討論出一些重點領域以及其自動化的測試，以期望達成更好的網路互通性，可以看到在過去一年中，瀏覽器三大家的測試覆蓋率都有顯著的提升，在這個組織努力之下，開發者針對已經通過測試的項目，可以不用擔心跨瀏覽器而造成無法使用的問題。對使用者來說，也能更快享受到一些新技術更快被實作到一般的網路應用上，帶來更好的使用體驗。

如果想知道未來這一年又有那些項目將被視為重點項目，[可以參考這邊](https://wpt.fyi/interop-2024?stable)（Mozilla 也有針對 2024 [寫了一篇](https://hacks.mozilla.org/2024/02/announcing-interop-2024/)喔，當然 [Google 也有一篇](https://web.dev/blog/interop-2024)～）。

![src: [https://twitter.com/webkit/status/1753102868012503529](https://twitter.com/webkit/status/1753102868012503529)](../assets/網路黑手的呢喃 #42 - Untitled 2.png)

src: [https://twitter.com/webkit/status/1753102868012503529](https://twitter.com/webkit/status/1753102868012503529)

### 最近前端到底是怎麼了😓

連大大都看不下去了…

感覺最近前端開發的世界也是多事之秋，但自從 React、Next.js 相繼走向一個大家都很 🤔 的方向之後，看到越來越多開發者出來說了類似的[令人沮喪](https://www.reddit.com/r/rails/comments/19esh32/my_experience_so_far_switching_from_nextjs/)的開發體驗。

雖然我不算是專職前端，不過曾經、也或多或少會碰一些的情況之下，也隨著年紀越長開始一些想法的改變，一直覺得 JS 的最大問題就是太有活力（這是貶義），經常一言不合就重寫、換新的框架等，但這些對追求穩定的企業用戶來說其實很令人沮喪，或許經常會出現「技術債」的說法，但怎麼其他語言難道就沒有一樣的問題嗎？但也沒像 JS 生態老是這麼激進，但你回頭來看，這樣一路走來，SPA → SSR → Server Components，真的有很大幅度的改善嗎？🤔，

*個人意見，大家的看法、想法可能都不同，就當是我老了、跑不動了* 😅*，不想在 tach-stack 上面琢磨，只想把僅存的力氣放在解決問題跟產品設計上。*

![src: [https://twitter.com/antirez/status/1750478644936425914](https://twitter.com/antirez/status/1750478644936425914)](../assets/網路黑手的呢喃 #42 - Untitled 3.png)

src: [https://twitter.com/antirez/status/1750478644936425914](https://twitter.com/antirez/status/1750478644936425914)

### 2024 的前端又會變成怎樣呢？

最近真的要抱怨一下 X 的推薦，成天看到的不是廣告就是垃圾文，很多好文章都要靠不斷的轉推才有機會浮上來。😓

承上題，雖然 FE 的世界越來越讓人灰心，不過還是偶有一些讓人驚豔的東西出現，[這篇對 FE 2023 的總結，以及對 2024 的預測相當有料](https://buttondown.email/whatever_jamie/archive/frontend-predictions-for-2024/)，裡面看到不少有趣的專案跟資料，大推！（下面是有網路上熱心幫忙翻譯的版本）

![src: [https://twitter.com/LinguaBrowse/status/1754056998285660561](https://twitter.com/LinguaBrowse/status/1754056998285660561)](../assets/網路黑手的呢喃 #42 - Untitled 4.png)

src: [https://twitter.com/LinguaBrowse/status/1754056998285660561](https://twitter.com/LinguaBrowse/status/1754056998285660561)

# Docker 推自家新服務 - Docker Build Cloud

看到 Docker 這一步不能說很意外，感覺是可預期的發展，畢竟它家的核心就是容器服務嘛。這次推出的 Docker Build Cloud 簡單說就是可以遠端幫你建構 docker container。

![src: [https://twitter.com/ajeetsraina/status/1750004725649662187](https://twitter.com/ajeetsraina/status/1750004725649662187)](../assets/網路黑手的呢喃 #42 - Untitled 5.png)

src: [https://twitter.com/ajeetsraina/status/1750004725649662187](https://twitter.com/ajeetsraina/status/1750004725649662187)

這對一般用戶或者架構相對較小的企業可能比較沒什麼感覺，不過如果服務比較大或複雜，原本編譯的時間需要很長的情況下，根據目前測試的結果可以有相當有感的改善幅度（可以參考下開發者已經測試的比較 ⬇️）

![src: [https://twitter.com/fatihbaltaci_/status/1749876727440965817](https://twitter.com/fatihbaltaci_/status/1749876727440965817)](../assets/網路黑手的呢喃 #42 - Untitled 6.png)

src: [https://twitter.com/fatihbaltaci_/status/1749876727440965817](https://twitter.com/fatihbaltaci_/status/1749876727440965817)

# 引領風潮的 ML

### [v0.dev](http://v0.dev) 的開源版，更強！

之前也介紹過 Vercel 家出品的網站模板快速產生器 - [v0.dev](https://v0.dev/)，結果過沒多久就開發者做出了這個更棒的開源版 [vx.dev](https://vxdev.pages.dev/)。可以參考官網介紹或是該推包含的 demo 影片，之所以覺得它更強是因為它直接與 Github 的系統深度整合：

1. 發 Issue 描述需求
2. Github Actions 自動執行並產出範例
3. PR 產生結果把包含佈署到 Cloudflare Pages 的範例頁面。

真的超讚！👍

![src: [https://twitter.com/xiaohuggg/status/1749711488884130247](https://twitter.com/xiaohuggg/status/1749711488884130247)](../assets/網路黑手的呢喃 #42 - Untitled 7.png)

src: [https://twitter.com/xiaohuggg/status/1749711488884130247](https://twitter.com/xiaohuggg/status/1749711488884130247)

### 看起來 Meta 打算用開源硬扛到底😄

雖然 OpenAI 還是以 ChatGPT 領跑目前的 AI 應用，不過很多後起之秀也是很讓人期待，其中 Meta 就是其中一名佼佼者，而他們開源的  [Llama](https://llama.meta.com/) 也是相當強悍的模型之一，最近除了[老闆親自出來確認](https://twitter.com/AIatMeta/status/1753195225311563848) AI 的後續龐大投資之外，它們的開源模型 [Llama 2](https://twitter.com/AIatMeta/status/1752013879532782075) 也有很大的進展。

不知道有沒有機會跟 OpenAI 來個黃金交叉，不過起碼目前 [Meta 的股價](https://twitter.com/Carnage4Life/status/1753431910490263727)應該讓股東很滿意😄

![src: [https://twitter.com/JefferyTatsuya/status/1752222571037442199](https://twitter.com/JefferyTatsuya/status/1752222571037442199)](../assets/網路黑手的呢喃 #42 - Untitled 8.png)

src: [https://twitter.com/JefferyTatsuya/status/1752222571037442199](https://twitter.com/JefferyTatsuya/status/1752222571037442199)

# 最近是 Apple 的主場！

從 2/1 發售以來就可以看到滿滿的迷因以及評測，看來大家還要被 Apple 洗版好一陣子了（我也好想要玩玩看，但是沒錢😢）

## 開發者看過來！

當然提到 Vision Pro 一定是 Apple 自家技術桟（不熟😅），不過如果你是 React Native 的愛用者，它們也[有針對 Vision Pro 的支持](https://twitter.com/o_kwasniewski/status/1753392157904326891)，[其他模組](https://twitter.com/tomekzaw_/status/1753914430939611338)應該也會陸續跟上（甚至還有[看到大大已經送審 app](https://twitter.com/o_kwasniewski/status/1754081806104621073)，不知道出來的效果是怎樣 👀）

另一個跟 Vision Pro 沒什麼關係，不過因為是 Apple 出品就一起擺在這邊，因為很難得能看到 Apple 出現開源作品😂，就是下面這個 → `pkl` ，看名稱應該也知道它的用途了，就是拿來寫參數設定的新語言，如果有碰 terraform 的開發者應該會覺得跟 [HCL](https://github.com/hashicorp/hcl) 滿類似的，看起來應該是 Apple 用在自家服務上衍生出來的產品？不過不知道會不會陸續推到其他東西上，可以觀察看看。

![src: [https://twitter.com/ingramchen/status/1753973668185768063](https://twitter.com/ingramchen/status/1753973668185768063)](../assets/網路黑手的呢喃 #42 - Untitled 9.png)

src: [https://twitter.com/ingramchen/status/1753973668185768063](https://twitter.com/ingramchen/status/1753973668185768063)

## 滿滿的 Vision Pro 大平台！

**謎之音：這個梗會不會老到很多人看不懂了* 😅

### **真 賽伯龐克**

良心提醒，開車戴 Vision Pro 是違法的喔，要小心被警察抓 😆

![](https://twitter.com/chrisfralic/status/1754134345105670173)

### 已經出現好多應用、遊戲、概念啦，期待更多更有趣的玩法！

![](https://twitter.com/PofatTseng/status/1754088684029092260)

![](https://twitter.com/iamjesserichard/status/1753826288568238339)

![](https://twitter.com/minchoi/status/1753428879451005249)

### 這辨識的能力有點強

從 FaceID 一路累積過來的經驗，堆積成有點厲害的成果了 🙌

![](https://twitter.com/tracy__henry/status/1753549141983330735)

### 毫不意外[滿滿的網紅開箱](https://www.youtube.com/results?search_query=vision+pro+review)

不過居然可以遇到 Tim Cook 首賣，還是不能不佩服網紅的行動力（~~以及錢錢的力量~~），好羨慕阿 😍

![](https://www.youtube.com/watch?v=PdYD6CSPhxo)

# **網路是個好東西**

### 臺灣值得更多好企業

自從知道 NET 這間企業有針對弱勢家庭的孩童挑選衣服的義舉之後（而且用很棒的方式），就對這間公司很有好感，臺灣真的值得多一些這種好企業。最近基隆的爭議延燒，雖然幫不上太多，但希望透過這邊能多擴散這件事，讓更多人能來關注這件~~（[很扯的](https://www.youtube.com/watch?v=5U4kMdB0isE)）~~事。😡

![src: [https://twitter.com/HSG14215289ooop/status/1753568488038527469](https://twitter.com/HSG14215289ooop/status/1753568488038527469)](../assets/網路黑手的呢喃 #42 - Untitled 10.png)

src: [https://twitter.com/HSG14215289ooop/status/1753568488038527469](https://twitter.com/HSG14215289ooop/status/1753568488038527469)

### 我又想要這個酷酷的東西了

每個月都有好多[酷酷的東西](https://twitter.com/nomad_suzuki/status/1753201260088697239)🤣 #錢難賺

![](https://twitter.com/nomad_suzuki/status/1753201260088697239)

### 話不要亂說，車也不要亂坐😆

![src: [https://twitter.com/worinibaba/status/1752909136407511435](https://twitter.com/worinibaba/status/1752909136407511435)](../assets/網路黑手的呢喃 #42 - Untitled 11.png)

src: [https://twitter.com/worinibaba/status/1752909136407511435](https://twitter.com/worinibaba/status/1752909136407511435)

### 我得了一種看到[酷酷鍵盤](https://worklouder.cc/nomad-e/)就想敗家的病😅

![Untitled](../assets/網路黑手的呢喃 #42 - Untitled 12.png)

![Untitled](../assets/網路黑手的呢喃 #42 - Untitled 13.png)