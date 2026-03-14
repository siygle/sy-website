---
title: "網路黑手的呢喃 - #64"
date: "2025-04-01"
description: "主題：Teahour 回來啦！、Shell 就是好物 - Dagger Shell、MCP 一統江湖！、BlueSky status & ATmosphere Conference"
tags:
  - AI
  - Chat
  - ECMAScript
  - LocalFirst
  - Newsletter
  - Podcasts
  - bluesky
---
## [Teahour](https://teahour.dev/) 回來啦！

都已經忘記是多少年前一聽到 [teahour](https://teahour.fm/) 就立刻加到收聽清單裡面，也伴隨我度過好多個運動的時光（沒錯，我是習慣邊運動邊聽 Podcasts 的那種 😅），幾年前停更之後本來想說大概就是個回憶了，沒想到居然 2.0 突然就出現了！🙌

[Casmitter](https://teahour.dev/episodes/1)

然後也發現連官方 X 也一併改了 😅

[https://x.com/teahourdev/status/1902264734445117893](https://x.com/teahourdev/status/1902264734445117893)

<aside>
💡

雖然主持人有些變動，不過 teahour 的味道還是跟之前很像 😄。我自己很喜歡它那種圍繞在軟體人為主卻走向亂聊的氛圍，雖然隨興但其他分享的觀點或內容，常常是讓我很驚喜的。（真的很難實際去描述，可以參考本集其中的一段，講到各自選出三位影響自己的 programmer，真的就帶出很多有趣的東西。**想聽聽看可以跳轉 1:14:25 的時間點**）

期待 2.0 回歸的 teahour 可以為苦悶（又可悲）的軟體人帶來一些開心的東西 😅

</aside>

*截稿前 Ch2 也釋出了* 😄🎉

[https://bsky.app/profile/sylee.dev/post/3lm4pdvkvuk2t](https://bsky.app/profile/sylee.dev/post/3lm4pdvkvuk2t)

## Shell 就是好物 - Dagger Shell

*多麼武斷的標題，我喜歡 #誤*

[Dagger](https://dagger.io/) 應該也有不少人知道，它其實就是 Docker 作者  Solomon Hykes 離開 Docker 之後另外創辦了新公司，主要是針對 CI/CD 的工作流這塊的應用而來。

我自己是沒實際用過，不過我也不是要講他們的產品，而是最近他們丟出來了一個小工具 - Dragger Shell，顧名思義，大概也可以猜到它跟 Shell 應該有些什麼關係 😄，跳轉專案首頁的範例就大概知道了 ⬇️

[A Shell for the Container Age: Introducing Dagger Shell - Dagger](https://dagger.io/blog/dagger-shell)

<aside>
💡

```
Dagger Shell is the fastest way to interact with the Dagger API. Dagger Shell brings the power of pipelines to fully typed API objects while maintaining a familiar Bash-like syntax.

原本以為是透過 shell 的方式來操作 Docker，後來看了文件其實底層就是他們自家的 Dagger Engine，所以其實不單只有 Docker 這部分的功能而已。重點是可以透過 Dagger Shell 用開發者熟悉的 Shell 操作方式來組合並管理開發環境。

那個 pipeline 真的是太讚了🤩
```

</aside>

## MCP 一統江湖！

這陣子 AI 相關的 buzzword 大概就是 MCP 了吧，身為 AI knowledge extend 的重要拼圖，它的功效應該也不需要在這邊說明，相信大部分開發者都已經知道了。不過之前大家疑慮的地方在於身為 Anthropic 力推的協定，身為領跑者的 OpenAI 會怎麼回應，如果它不願接受的話，那這個協定也沒辦法發揮出最大的綜效。

不過看到最近 Altman 發下面這則推文之後，大家的疑慮應該都一掃而盡了吧 😎

**All-in-MCP!! #誤**

[https://x.com/sama/status/1904957253456941061](https://x.com/sama/status/1904957253456941061)

老闆都發佈了，內容資源當然要馬上趕上才行嘛，文件跟相關的範例 repo 都一併釋出了，有興趣想嘗鮮的開發者不妨試試（不過大概也不用多久就是滿地的範例了，AI 時代阿～ 😅）

[Model context protocol (MCP) - OpenAI Agents SDK](https://openai.github.io/openai-agents-python/mcp/)

[openai-agents-python/examples/mcp at main · openai/openai-agents-python](https://github.com/openai/openai-agents-python/tree/main/examples/mcp)

<aside>
💡

最近每天滑推都是看到滿滿的 MCP，看來這個熱潮短時間應該還不會散去了 😅

既然兩大家都已經支援，應該是有很大的機會出線，想必其他競品應該也會跟上吧，有統一的規格除了對開發者、對模型提供者應該也是利大於弊。不過不知道內容提供者能不能透過 MCP 也走出一條活路（付費提供？ 🤔）

現在的 AI 雖然資訊滿滿，但是還在初期探索的它，不知道後續還會推出多少有趣的東西～

</aside>

## BlueSky status & ATmosphere Conference

身為（目前的）死忠粉，當然要定期更新一下目前 BlueSky 的近況，雖然距離起飛可能還有一段不遠的時間，平台也還缺乏許多必要的功能，不過這個開源驅動的專案，特別容易看到一些驚豔的東西出現（大家都太有創意了）！ 

最近剛好看到 TC 特別寫了一篇介紹數個基於 AT Protocol 的應用，這個 BlueSky 核心運作的協定，不只是能驅動 BlueSky，更能夠作為分散式架構的訊息互通的基礎協定。對這個生態有興趣的開發者，不妨看看目前已經有多少不同的服務已經採用了 AT Protocol 來建構 ⬇️

[https://bsky.app/profile/sylee.dev/post/3llndkadkq227](https://bsky.app/profile/sylee.dev/post/3llndkadkq227)

除了新聞介紹之外，最近社群也剛舉辦了 AT Protocol 第一屆的研討會，其中的[議程也都陸續放出來了](https://www.youtube.com/playlist?list=PLyIg0j_mbb2tVegEMBg5ke2Z-1ALksU-I)，裡面有相當豐富的內容，這邊只稍微列出幾個自己有追然後感興趣的地方 ⬇️

### Jay Graber

CEO 的場子，當然是要精神喊話一下，內容簡短扼要，對藍天（以及背後更重要的 AT Protocol）的理念，可以透過這個場子初步了解一下（還有意外成為[焦點的衣服](https://bsky.app/profile/bsky.app/post/3lkodsqshc22h) - 沒有凱撒的世界 😎）

[https://www.youtube.com/watch?v=dZ08qoNO0K4](https://www.youtube.com/watch?v=dZ08qoNO0K4)

### Paul Frazee - Where did we come from where will we go

藍天的 CTO，其實在創立藍天之前，之前有弄了不少 Peer-to-Peer 的專案（譬如這個很有趣實驗性質的瀏覽器 - https://github.com/beakerbrowser）

對於藍天未來的方向，這場一定不要錯過，裡面提到許多規劃中的項目都很有意思。不過我自己是對一個簡單自架的專案很感興趣（聽說目前是叫 IndieSky），不知道之後實際丟出來會是怎樣（如果能用一個 RPi 的硬體設備就能跑起來的話，一定會很有意思 😛）。

[https://www.youtube.com/watch?v=i0hz9uzHEbc](https://www.youtube.com/watch?v=i0hz9uzHEbc)

### Daniel Holmgren - ATProto Ethos

AT Protocol 的協定作者之一，這場主要在講述 AT Protocol 的精神，以及為什麼他們會這麼設計等，內容頗硬（其實有不少我也不太理解 😅)，不過如果想深入了解這個協定的核心理念的話，可以試著聽看看。（講者後來也寫了[一篇專文](https://atproto.com/articles/atproto-ethos)，有更完整詳細的介紹）

[https://www.youtube.com/watch?v=1A-0k58TfPo](https://www.youtube.com/watch?v=1A-0k58TfPo)

### Devin Ivy - The Shape of Apps to Come

本場的講者也是 BlueSky 的核心成員之一，這場就是以開發者的角度來闡述，如果要開發一個基於 AT Protocol 的應用程式的話要怎麼進行，以及相關的實作細節。

[https://www.youtube.com/watch?v=bPvuRQW1Ykk](https://www.youtube.com/watch?v=bPvuRQW1Ykk)

### **Nick Gerakines - Smoke Signal an journey in building open ecosystems for communities**

[Smoke Signal](https://smokesignal.events/) 這個基於 AT Protocol 的類 meetup 的服務，身為作者的 Nick 就透過一路以來親身實作這個 side project 的經驗談，裡面包含也是很多實作的細節，相當值得想深入玩玩 AT Protocol 的開發者不要錯過。

*另外一提，這位作者也是深耕 AT Protocol 的開發者之一，有開源許多相關套件 - https://github.com/astrenoxcoop*。

[https://www.youtube.com/watch?v=BnOtwX5Ogmw](https://www.youtube.com/watch?v=BnOtwX5Ogmw)

### [***tangled](https://tangled.sh/) -** tightly-knit social coding*

另外想特別提一個雖然不在議程，但也是基於 AT Protocol 的 social coding 服務 - [Tangled](https://tangled.sh/)，搭配 git 真正可以作到程式碼以及相關協作既是分散式架構，也讓用戶保有資料的擁有權。對於他的架構細節，他們也有寫了一篇文章來簡述，可以參考一下 ⬇️

目前還在初期開發中，不過基本功能都已具備，像嘗鮮的可以去試玩看看喔～

[introducing tangled](https://blog.tangled.sh/intro)

## Turso 也邁向 Local-First 啦～

之前也[介紹過好幾次](https://www.google.com/search?q=turso+site%3Achat.sylee.dev&sca_esv=5d14021b5f0ff6fa&rlz=1C5CHFA_enTW1068TW1068&sxsrf=AHTn8zoVfzc0zULIZIHN-uQ9c2Jl9oXoeg%3A1743614317954&ei=bXHtZ6yCOp6dvr0PiY26uAQ&ved=0ahUKEwjs7K_A7bmMAxWejq8BHYmGDkcQ4dUDCBA&uact=5&oq=turso+site%3Achat.sylee.dev&gs_lp=Egxnd3Mtd2l6LXNlcnAiGXR1cnNvIHNpdGU6Y2hhdC5zeWxlZS5kZXZIpQ5Q3AhYpQtwAngBkAEAmAEtoAGPAaoBATS4AQPIAQD4AQGYAgKgAgTCAgoQABiwAxjWBBhHmAMAiAYBkAYEkgcBMqAHzAGyBwC4BwA&sclient=gws-wiz-serp)的 Turso，最近又丟出有趣的東西啦，看來決定用 Rust 重寫之後果然不 一樣，可以自己決定實作許多有趣的東西（在相容 Sqlite 為前提之下） 😎

這次是之前提過的 [Local-First](https://chat.sylee.dev/2024/07/26/local-first-conf-2024) 這個架構有關的功能，也就是 Turso 正式提供 Offline Sync 的功能了。之前在前篇有針對 Local-first 的定義，其中一項很重要的就是必須要能夠支援離線使用。所以目前一些相關的專案都是由一個 sync engine 來驅動，也就是一個同步資料的機制。而這偏提到的 Offline Sync 就是這個啦！（官方文裡面直接提供了 [TS](https://turso.tech/blog/turso-offline-sync-public-beta#typescript)、[Rust](https://turso.tech/blog/turso-offline-sync-public-beta#rust) 兩個範例讓大家感受一下實際操作是怎樣）

[Offline Sync Public Beta](https://turso.tech/blog/turso-offline-sync-public-beta)

<aside>
💡

雖然沒實際開發過 Local-First 的應用，不過還是持續會看看有沒有什麼有趣的應用出現。除了 Local-First 之外，Turso 也是我一直注意的資料庫服務商，最近他們推了一個 [Developer 的付費方案](https://x.com/glcst/status/1902367141040406557)，4.99 但是非常划算，如果有開發 side project 的開發者不妨可以試試看。

</aside>

## **網路是個好東西**

### 微軟 50 週年

時光真的過得好快阿～ 😅

雖然一直不是它的支持者，不過畢竟也是一路跟 Windows、Office 成長的過來的，看到他們近年來華麗轉身也是很佩服，沒想到一間老企業也是有中興的可能。

[https://x.com/Microsoft/status/1908142566094119421](https://x.com/Microsoft/status/1908142566094119421)

蓋茲爸爸也放出了一篇專文，除了闡述了早期微軟的發展史之外，也開源了 Altair BASIC 的程式（這個網頁作的也是相當酷 😎）

[www.gatesnotes.com](https://www.gatesnotes.com/meet-bill/source-code/reader/microsoft-original-source-code)

### 好用程式庫分析小工具

[https://x.com/hellokaton/status/1906580259727958089](https://x.com/hellokaton/status/1906580259727958089)

底下是跑了 denoland/fresh 的範例，大概可以看出跑出來的成效。是個可以簡單又快速的了解 repo 架構的好工具，[翻了下程式碼](https://github.com/ahmedkhaleel2004/gitdiagram/tree/main)看起來應該也是抓內容然後丟到 claude 去跑出分析（真的什麼都先用 AI 處理了阿～）

![image.png](../assets/網路黑手的呢喃 #64 - image.png)

### Vibe 起來！

荒謬的世界還是持續喔～

![src: [https://x.com/fetalkpodcast/status/1906391604224782594](https://x.com/fetalkpodcast/status/1906391604224782594)](../assets/網路黑手的呢喃 #64 - image 1.png)

src: [https://x.com/fetalkpodcast/status/1906391604224782594](https://x.com/fetalkpodcast/status/1906391604224782594)

![src: [https://x.com/d4m1n/status/1905669155090563116](https://x.com/d4m1n/status/1905669155090563116)](../assets/網路黑手的呢喃 #64 - image 2.png)

src: [https://x.com/d4m1n/status/1905669155090563116](https://x.com/d4m1n/status/1905669155090563116)

### 大家動起來！

這根本就是為了久坐宅宅族精心設計，衛福部真懂 😅

[https://x.com/MOHW_Taiwan/status/1908726010394402841](https://x.com/MOHW_Taiwan/status/1908726010394402841)