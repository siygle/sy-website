---
title: "網路黑手的呢喃 - #59"
date: "2024-12-09"
description: "主題：Deno 2.1 - the first LTS version、Bluesky 真的沒有要停下來的意思 😄、AWS 大大每年的趨勢預測文又來啦！、Model Context Protocol"
tags:
  - AI
  - Anthropic
  - Deno
  - Newsletter
  - bluesky
---
---

## Deno 2.1 - the first LTS version

默默走到 2.1 版本的 Deno，除了加入了哭哭的 [**import WASM**](https://docs.deno.com/runtime/reference/wasm/) 的功能之外，另一個比較值得留意的，就是從這個版本開始，它們也開始有 [LTS](https://deno.com/blog/v2.1#long-term-support-release)（Long term support release）的版本了，目前看公告的說明，應該是六個月一個 LTS 版本（另外，它們也提到六週會有一個 minor 版本）。看起來應該是針對企業用戶而來，而穩定也的確是這類用戶首要考量的因素，所以也是期待 Deno 能持續成長啦！

不過身為愛用者的我還是要抱怨一下，真的不太理解 Deno 的發展策略，覺得它們開了一堆支線，但是每個都沒有到驚豔，甚至有些還不太確定它們會不會繼續維護下去（對，我就是在說你 Fresh 😓，到底 2.0 什麼時候才要釋出阿，Deno 自己都已經走到 2.1 了）。

[Deno 2.1: Wasm Imports and other enhancements](https://deno.com/blog/v2.1)

另外提一個小東西，也是伴隨 2.1.2 之後可以使用 `deno compile --include` 的方式把靜態檔案一併打包，所以就可以透過下面這篇文章提到的方式，把 fresh 打包成一個執行檔來佈署，其實我也是期待 compile 的這個指令，用這樣的方式來部署也是會更方便。

[Deno Fresh アプリを実行可能なシングルバイナリにまとめる方法 | Leaves](https://leaves.chiba.dev/posts/345)

不過老實說提到 Fresh 也是很惆悵，之前的[專職維護者](https://github.com/marvinhagemeister)好像也離開 Deno 了（不確定，只是單看 Github 的狀態，之前記得他公司是掛在 denoland 下面但現在拿掉了，雖然目前他還是有在回覆 Fresh 的問題），說好的 v2 也遲遲不見下文，開太多支線結果維護不來的話，個人覺得對身為開發者工具導向的服務，應該不是一件好事吧，唉。

## Bluesky 真的沒有要停下來的意思 😄

伴隨著更多的開發者加入 Bluesky，相關的資源也是成等比成長，也越來越多應用跟著出現。因為我自己就是愛用者之一，所以就用這個段落稍微整理一下目前看到一些有趣的東西 😋

### **Bluesky 上面也有審查制嗎？**

先回答，是有的！這篇文章就針對這個議題做了簡單的介紹。

有使用 Bluesky 的用戶應該都有注意到，它本身提供了很詳細針對上傳媒體檔案的定義，所以你可以主動標上這類的標籤，就可以降低其他用戶對你檢舉。不過這類 NSFW 的東西，還是有其底線，譬如兒童色情這類，看起來 Bluesky 有利用其他第三方的服務來協助檢查（文章裡面提到他們是用了 Thorn，從來沒聽過原來大有來頭）。

<aside>
💡

From ChatGPT

Thorn 是一個致力於保護兒童免受性剝削和虐待的非營利組織，其官方網站是 [https://www.thorn.org/](https://www.thorn.org/)。它由演員 Ashton Kutcher 和 Demi Moore 於 2012 年共同創立，專注於開發技術工具來識別並打擊兒童性虐待材料的傳播，以及協助受害者尋求幫助。

Thorn 的核心目標是利用技術和合作，幫助執法機構、科技公司和其他相關組織更有效地預防和打擊這些犯罪行為。

</aside>

除了這個底線之外，其他搭配 Bluesky 自身的審核系統，然後他們也有利用 Hive AI 的服務來辨識媒體檔案（針對那些沒有主動標上標籤的上傳者，還是會再過這層）。

[Blueskyに絵をポストしたらポルノ扱いされたんですけど！ラベルの話 | ubanis(Bluesky)](https://whtwnd.com/ubanis.com/entries/Bluesky%E3%81%AB%E7%B5%B5%E3%82%92%E3%83%9D%E3%82%B9%E3%83%88%E3%81%97%E3%81%9F%E3%82%89%E3%83%9D%E3%83%AB%E3%83%8E%E6%89%B1%E3%81%84%E3%81%95%E3%82%8C%E3%81%9F%E3%82%93%E3%81%A7%E3%81%99%E3%81%91%E3%81%A9%EF%BC%81%E3%83%A9%E3%83%99%E3%83%AB%E3%81%AE%E8%A9%B1)

最後就是他們開源的審核申訴的系統 Ozone，可以提供有相同需求的社群或是使用者使用，不過這應該是針對版主（[moderator](https://bsky.social/about/blog/03-12-2024-stackable-moderation)）比較會用到的功能。

[https://github.com/bluesky-social/ozone](https://github.com/bluesky-social/ozone)

### **AT Protocol 續篇**

這篇則是前幾集中有提及的，針對 Bluesky 協定跟架構有比較深入介紹的好文（作者真的繼續寫下去啦），這邊是系列文中的第二篇，這次主角就是 Bluesky 背後的基礎架構 - [**ATProtocol**](https://atproto.com/)。

如果想對 ATProto 的設計了解的話，非常建議大家可以花一點時間看下這篇文章。

[AT Protocol入門：プロトコルの背景にある考えを理解する | Bam](https://whtwnd.com/boobam.bsky.social/entries/AT%20Protocol%E5%85%A5%E9%96%80%EF%BC%9A%E3%83%97%E3%83%AD%E3%83%88%E3%82%B3%E3%83%AB%E3%81%AE%E8%83%8C%E6%99%AF%E3%81%AB%E3%81%82%E3%82%8B%E8%80%83%E3%81%88%E3%82%92%E7%90%86%E8%A7%A3%E3%81%99%E3%82%8B)

### **沒想到 Windows desktop app 居然比 macOS 還快出現** 😅

身為 Bluesky 什麼不多就是第三方的客戶端最多，不過身為愛好者的我還是有幾個殘念，一個是遲遲不見好用的原生 Android app，然後另一個就是沒看到 macOS app，結果沒想到居然 Windows app 比這兩個都早出現了，桑心 😭

*不過作者說他的目標是[跨平台](https://bsky.app/profile/firecube.bsky.social/post/3lbhxz2wzj223)，所以說不定之後其他平台也可以看到了～

[https://github.com/FireCubeStudios/DarkSky](https://github.com/FireCubeStudios/DarkSky)

### **可以看一下現在已經有多少 sdk & 第三方生態了** 😎

最近有天友也整理了號稱開發者強大的藍天社群目前到底有多少第三方的 sdk 或開源應用，希望這個熱潮可以繼續維持下去啊。🥰

[sdk.blue](https://sdk.blue/)

### 連 AI 也有佔一角 😅

身為最近的 buzzword，雖然 Bluesky 不是直接相關，不過開發者威能還是帶來了許多基於 AI 的有趣應用，譬如下面這個透過 AI 來分析發文內容，進而分析你的人格特質，雖然是個偏歡樂屬性的東西就是了（不過還是很佩服這些行動力強大的開發者 🙌）。

[Get Your Bluesky Personality Analyzed (With a Side of Gentle Roasting) | Bluesky Roast](https://blueskyroast.com/)

### 開源友善也幫助了第三方的開發者

除了上述許多技術相關的資訊之外，Bluesky 上也有讓人覺得很溫暖的事情。[deck.blue](https://deck.blue/)（知名的第三方客戶端之一，如果你曾經是 tweetdeck 的愛好者，一定不要錯過這個藍天上的相似版本）的作者發了下面這篇訊息。

因為有許多付費的用戶，讓前陣子被資遣的他因此可以度過這個難關。

真的希望有更多像這類良性的軟體、服務生態，可以圍繞在 Bluesky 持續成長。🤞

[https://bsky.app/profile/deck.blue/post/3lcm6zyy45x2o](https://bsky.app/profile/deck.blue/post/3lcm6zyy45x2o)

## AWS 大大每年的趨勢預測文又來啦！

AWS 的 CTO [**Werner**](https://bsky.app/profile/werner.social) 每年都會針對未來的趨勢寫下自己的想法，今年的文章在前陣子也寫好了 😄，裡面不少議題也都心有戚戚焉，希望 disinformation 跟 Intention-driven 這兩點真有改善的可能就好了～

*我自己是比較悲觀一點，因為有太多人為的惡意在裡面* 😓

不過該文還是很推薦大家可以去看看，每項議題都鞭辟入裡。

[Tech predictions for 2025 and beyond](https://www.allthingsdistributed.com/2024/12/tech-predictions-for-2025-and-beyond.html)

## Model Context Protocol

前幾天看到 Claude 本家 Anthropic 又放出新東西就看了一下這個名為 MCP 是什麼東西，看起來是透過這個統一的協定，讓 AI Agent 跟外部資料有更好的互動，也更方便整合，而更重要的是，透過這個協定的資料互動是支援上下文的完整性的。

感覺可以期待一下後續的發展，Anthropic 其實在放出之前也已經有找了幾個合作夥伴測試過，也開源了包含 [SDK](https://modelcontextprotocol.io/introduction) 以及[數個外部資料源的範例](https://github.com/modelcontextprotocol/servers)，如果越來越多服務商願意採用相同的規範，相信之後 AI 模型會越來越強大。

**不過 OpenAI、Google 這些也是大模型提供商應該不會接受，猜測會另外推自己的方案，觀望後續的發展* 🤔

[Introducing the Model Context Protocol](https://www.anthropic.com/news/model-context-protocol)

## AI 也整合到 DevTools 了

雖然看到好像也不覺得多驚奇，畢竟 Google 幾乎就是傾全力要把 AI 整合到各項產品裡面（不過成效如何就不好說了），簡單說就是讓網頁開發者有個更方便使用的 AI，因為它直接整合在瀏覽器裡面，所以可以直接透過 AI 快速調整頁面或詢問它頁面的任何問題（譬如你可以透過 devtool 選擇特定區域，然後詢問 AI 或請他調整，可以更精確比起一般的對談介面。）

[Introducing AI Assistance in Chrome DevTools](https://addyosmani.com/blog/ai-assistance/)

## **網路是個好東西**

### 沒想到我們有贏下棒球國際賽冠軍的一天 😭

身為國際賽球迷，看這次一路走來真的很嗨！

沒想到我們居然有跨過日本隊高牆的一天，覺得這次大家都好拼阿，看我們國家隊終於可以在大賽中跟其他好手一較高下，希望未來也可以越來越好 🤞🎉

*不知道是第幾次簽賭案之後就沒在進場過了，是不是該帶孩子再回球場了呢* 🥹

[https://www.youtube.com/watch?v=kcYVc4k3-Sg](https://www.youtube.com/watch?v=kcYVc4k3-Sg)

### 希望 NewJeans 可以一切順利

看到記者會那天就寫下了下面這則，雖然後續艱難，但希望這群勇敢的孩子可以一切順利（每次講到都要說：「房時爀你真的是爛透了！」）

[https://bsky.app/profile/did:plc:z57tkg4b3hw7fsn47lud3kf5/post/3lc2kkpiqlc2j](https://bsky.app/profile/did:plc:z57tkg4b3hw7fsn47lud3kf5/post/3lc2kkpiqlc2j)

### 這個影片怎麼會一直循環播放

[https://x.com/cc_puppy_/status/1863237437851631793](https://x.com/cc_puppy_/status/1863237437851631793)

### 我也有一樣的困擾

只要跟 side projects 沾上邊我就做不完 #挺 😅

![src: [https://bsky.app/profile/jasnell.me/post/3lcm6zmoxd22g](https://bsky.app/profile/jasnell.me/post/3lcm6zmoxd22g)](../assets/網路黑手的呢喃 #59 - image.png)

src: [https://bsky.app/profile/jasnell.me/post/3lcm6zmoxd22g](https://bsky.app/profile/jasnell.me/post/3lcm6zmoxd22g)