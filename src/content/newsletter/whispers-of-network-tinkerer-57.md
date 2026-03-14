---
title: "網路黑手的呢喃 - #57"
date: "2024-10-24"
description: "主題：Web 生態圈例行更新、開源世界真有趣、愛讀冊啦～、引領風潮的 ML、網路是個好東西"
tags:
  - AI
  - Debug
  - ECMAScript
  - Hardware
  - Newsletter
  - Node.js
  - OSS
  - bluesky
---
---

## **Web 生態圈例行更新**

### TC39 最近又通過了一批好東西

除了上集提到的 structs 之外，這次的 TC39 會議也通過了一波提案，其中也不乏已經準備正式發佈的 stage 4 了，看來各位開發者很快就可以在開發中用上啦～

[TC39 Advances 10+ ECMAScript Proposals: Key Features to Watc...](https://socket.dev/blog/tc39-advances-10-ecmascript-proposals-key-features-to-watch)

### 最近藍天又噴了，謝謝 EME 🤣

又默默多了 50 萬人，對新服務這麼友好是可以的嗎？希望有更多人可以知道 BlueSky 也能在使用之後愛上這個特別的地方～

![](https://bsky.app/profile/bsky.app/post/3l6pwjlt7hu2z)

什麼是 EME？就是 [**Elon Musk Event**](https://bsky.app/profile/joshuajfriedman.com/post/3l6r2ds4acx2y) 啦（正名！😄）

最近因為這波搬家潮，看到不少原本 Twitter 上面追的帳號也有幾位大大跑到 BlueSky（終於出現科技圈的人了，感動！），希望大家都能意會到 BlueSky 有機會成為更好的那個選擇，尤其現在開發者動能好強，真的有早期 Twitter 的感覺，希望能希望越來越多的用戶來，也能激勵更多不同的應用出現。🤞

前陣子 BlueSky 工程師，也是 React 陣營知名的 Dan 有在 React Conf 上特別介紹了 BlueSky，以及背後的 ATProto，有興趣的也可以跳轉收聽喔～

![](https://www.youtube.com/watch?v=F1sJW6nTP6E)

**有鑑於出現的搬家潮，已經有人幫忙製作了公告，有需要可以取用* 🤣

![](https://bsky.app/profile/justingarrison.com/post/3l6yfyqmnnu2k)

### Node.js v23 展開！

默默地又到了 Node.js 切分新的開發版本的時間了，居然已經走到 v23 了，時間真是過的好快阿😅。關於 v23 現有新功能，已經有許多大大整理好了，這邊可以參考。

[Node.js v23の主な変更点 - 別にしんどくないブログ](https://shisama.hatenablog.com/entry/2024/10/18/080000)

目前看起來影響最大的就是 `require(esm)` 這個功能，就是可以在 CommonJS 裡面載入 ESM 的功能（我原本以為是反向的 😅），看起來也是為了解決 CommonJS & ESM 長期以來的相容問題，有了這個功能希望可以增進 ESM 的普及速度。

如果對這個 v23 將預設支援的 require(esm) 的功能有興趣的話，也可以轉聽下面這個議程，主講就是提交這個 PR 的開發者。

![](https://x.com/JoyeeCheung/status/1846936141586436199)

## **開源世界真有趣**

### JSR → Open governance？

沒錯，就是 Deno 開發的號稱下一代的 JS package registry 的那個 [JSR](https://jsr.io/) 沒錯 😄，那你可能會說，它不是本來就是開源專案了嗎，有什麼好奇怪的。

因為最近看到 Deno 家的員工出來說一些即將到來的線上會議，看起來是要討論未來 JSR 的發展，因為特別提到了開放政府的關鍵字，所以有其他開發者就問了下，結果看起來的確是有打算要朝向這方向來推動。

如果真這樣的話就很有意思了，不過維護 registry 本身也是不小功夫，理論上能達到自給自足可能會是比較好的模式，那要怎麼處理開發、維護的成本，以及專案的開發流程會怎麼進行，不知道能不能在 10/25 的會議之後都有更明確的規畫。👀

![](https://x.com/matteocollina/status/1848430402639433898)

### 又要多一個 terminal 啦！

看到頭像應該不少人就認出來了吧。沒錯！他就是 terraform 的作者 & HashiCorp 的創辦人。正因為前述這個非常成功的創業，目前他應該是財富自由了（這是他自己說的，但原因是我猜的 🤣），正所謂有錢就可以任性（這邊不是貶義），大大目前進行一個名為 **Ghostty** 的 terminal 專案（其實這邊還有一個大支線，因為 Ghostty 是用 zig 開發的，所以他甚至還針對 [**zig**](https://ziglang.org/) 語言的發展[出錢出力](https://x.com/mitchellh/status/1841167210896900266)，真的是非常猛）。

一直有看到不少測試者會出來炫耀（沒錯！），不過因為還沒公開測試，所以像我這種 nobody 就是只能在旁邊聞香而已 😅，不過終於決定公測的時間啦，就是今年的十二月！

除了測試之外，其實目前是一人專案，不過大大也已經考慮到未來發展的問題，所以在他的公告文裡面也略略提及了這個部分，希望有機會發展成非營利組織的形式來持續下去。

想稍微了解 Ghostty 以及它的特點，可以跳轉前陣子 [Mitchell 在 System Distributed 24](https://www.youtube.com/watch?v=cPaGkEesw20&t=3015s) 的議程。

![](https://x.com/mitchellh/status/1848715417696518337)

### Cloudflare 提供自架版 docker registry

不解釋！ ☺️

Docker 最近[調漲了許多旗下的服務價格](https://www.ithome.com.tw/news/165046)，身為窮苦的開發者真的是很艱辛 😂。然後就看到了 Cloudflare 就推出了自家平台的替代方案，可以透過 Workers & R2 自架 docker registry 服務，這樣起碼就可以省下 Hub 的部分啦。

[https://github.com/cloudflare/serverless-registry](https://github.com/cloudflare/serverless-registry)

### 無線耳機變身遙控筆

無意間看到推上有開發者提到了這個有趣的應用，就是可以把手邊常見的無線耳機變成遙控筆，直接在演講的時候使用，超級方便。

文中也提及了是怎麼實作這個功能的，就是透過瀏覽器的 MediaSession 這個 API，因為它提供控制媒體的介面，然後就可以透過它來覆寫原本的播放、暫停、前一首等功能，然後把行為接到你想要實作的行為，譬如這個案例，就是接到簡報的後一頁、前一頁的功能。有興趣的話可以[跳傳作者的程式碼](https://github.com/Ice-Hazymoon/slidev-addon-slidepods/blob/main/global-bottom.vue)。

[MediaSession: setActionHandler() method - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/MediaSession/setActionHandler)

![](https://x.com/Ice_Hazymoon/status/1847914252352573739)

### 圖表 by CSS

網頁中，特別是後台，經常會需要圖表的方式來呈現許多數據，所以相關的函式庫也是非常多，不過不經意看到這個由 CSS 驅動的函式庫，看起來頗威阿～

***All you needs is a CSS file.*** 🙌

![](https://bsky.app/profile/mariusvatasoiu.com/post/3l752y6emkk2z)

## **愛讀冊啦～**

### 又是找 bug，這次 Node.js & k8s 😅

最近經常看到一些線上除錯或是效能調校的文章，覺得這些有經驗的工程師願意把這個過程記錄下來真的是很有價值，無論是過程中的想法，或是使用的工具等，都很有參考價值。

這次是因為升級 Node.js（從 v18 → v20）之後，發現了效能下降的問題：

<aside>
💡

這邊發現是從 dashboard 圖表，再次印證 monitor/metrics/logs 是發現問題跟調校的第一步。 😄

</aside>

這篇真的很值得拜讀，尤其開發環境是 k8s + Node.js 的話，你一定也會用到的。😂

1. 先從從後台的 dashboard 先發現 v18 → v20 有效能的問題。
2. 根據 metrics 找到可能是 GC 的問題。
3. 發現因為 new space 的變化導致。
4. 找 v8/Node.js 的 commit，發現新版本的 v8 引入 `-max-semi-space-size` 。
5. 利用新指令指定 Node.js 的 semi space (16)。
6. 問題排除。
7. 繼續追查為什麼 semi space 會突然變小。
8. 透過測試發現問題，原來是 k8s 的 Pod 的記憶體設定會影響到 semi space。
9. Problem solved!!

真是嚴謹的考究步驟，值得好好學習。🙌

[Node.js 20 upgrade: a Journey through unexpected HEAP issues with kubernetes](https://blog.ztec.fr/en/2024/post/node.js-20-upgrade-journey-though-unexpected-heap-issues-with-kubernetes/)

## **引領風潮的 ML**

### 默默不斷進化的影像產生

[Runway Research | Introducing Act-One](https://runwayml.com/research/introducing-act-one)

最近看到推上有人轉了 Runway 展示自家的 Act-One 的服務，簡單說就是可以透過手邊的設備（手機）擷取人的面部表情並套用到 AI 產生的物件上（可以看下面的展示影片）。

覺得再過一陣子，可能動畫電影的成本就可能翻天覆地的改變了，真是可怕。

![](https://x.com/runwayml/status/1848785907723473001)

### Anthropic 又升級啦！

雖然跟 OpenAI 的競爭不斷持續中，不過 Anthropic 顯然在程式方面有更不錯的表現，許多開發工具也都是介接 Anthropic 的 Claude 為多，看來它們也是持續朝這個方向發展，前幾天放出了一波針對現有模型升級的訊息：

[Introducing computer use, a new Claude 3.5 Sonnet, and Claude 3.5 Haiku](https://www.anthropic.com/news/3-5-models-and-computer-use)

除了新模型跟 Sonnet 更好的表現之外，提供還提到一個有趣的新功能，就是下面展示的這個 [Computer use](https://docs.anthropic.com/en/docs/build-with-claude/computer-use)。看起來就是可以叫 AI 像人一樣去操作電腦的行為，看起來真的用嘴叫 AI 幫你工作的世界真的不遠了，好可怕 😓。

![](https://www.youtube.com/watch?v=vH2f7cjXjKI)

## **網路是個好東西**

### 宅宅專屬！

[之前看到的](https://eieio.games/nonsense/game-14-one-million-checkboxes/)，不過因為在海總電子報又看到一次所以才翻開來看，只能說宅宅連玩都跟別人不太一樣 😅，還有多學一些有的沒的還是有幫助的，不知道什麼時候可以派上用場。

![](https://bsky.app/profile/sylee.dev/post/3l6k5bi4wwx2o)

### 敗家魂再起！

又是從海總報那邊看到的東西（越來越覺得那是個可怕的地方了，常常看到心動的東西 😅），看了介紹之後立刻就準備 ~~敗家了~~ 心動了！本身又支援多個協定，感覺可以惡搞許多東西～

![](https://bsky.app/profile/sylee.dev/post/3l75z752edu2t)

### 為什麼我沒看到這台車 😢

一切都太遲了…

![](https://x.com/weihsi/status/1846918116263317605)

### 追星內容是每集一定要的👍

爸爸媽媽都很擔心在外的小孩的，但有個幫忙平安的好朋友真好 #誤 🤣

![](https://x.com/Mclimcoon/status/1848753685956071862)

這麼帥是可以的嗎？

![](https://x.com/anpoca01/status/1848871273956573228)

### 趁你睡著要你食物

最近看小河馬錦集真的覺得，怎麼這麼好笑 🤣

![](https://x.com/khamoo_fc/status/1848514983971442746)

不知道猴子梗，下面是一路來的成長史 🤣

![](https://x.com/khamoo_fc/status/1848161385617994228)