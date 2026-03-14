---
title: "網路黑手的呢喃 - #31"
date: "2023-05-25"
description: "**Recapping Developer Week (2023)**"
tags:
  - AI
  - Chat
  - Cloud
  - Cloudflare
  - Game
  - Newsletter
---
爆多的 Cloudflare Developer Week 2023 相關資訊（整理完就沒力了😆）、一個不簡單的小房間遊戲、酷壳😢（大家都要好好保重自己的身體）

---

# Cloudflare Developer Week 2023!

現在 Cloudflare 的自家場 [Cloudflare Developer Week](https://www.cloudflare.com/developer-week/) 端出來的東西也越來越精采了！近年來 Cloudflare 陸續推出的產品線，好像漸漸把雲端平台的完整性都搭建起來了

- Computing → Workers
- Web → Pages
- Storage → KV、D1、R2

還有 Queues 跟原本就很完整的網路相關功能。覺得越來越可以跟御三家抗衡了呢😎

[https://twitter.com/Cloudflare/status/1657793145487208448](https://twitter.com/Cloudflare/status/1657793145487208448)

## [**Introducing Constellation, bringing AI to the Cloudflare stack**](https://blog.cloudflare.com/introducing-constellation/)

![Untitled](../assets/網路黑手的呢喃 #31 - Untitled.png)

果然也是踏進 AI 的熱潮，推出 Constellation 這個新產品線，針對最近大熱門的 AI 應用，提供開發者透過 Cloudflare 的平台，可以佈署 Machine-learning Models 到平台上並運行，當然如果開發者希望能直接用現成，它們也有 Cloudflare 提供的模型可供使用。

文中有以一個圖片辨識作為範例，看起來真的非常方便（目前 Constellation 需要排隊才能使用），有興趣的開發者可以趕快加入試玩的行列（沒看到價錢的部分，不過我猜應該是所費不貲😅）。

另外 Cloudflare 也想到了引入 AI 對於客戶可能帶來的安全性問題，這部分他們也有推出相應的安全管理的功能，可以參考這篇 - [**A complete suite of Zero Trust security tools to help get the most from AI**](https://blog.cloudflare.com/zero-trust-ai-security/)。

還有另一個相關的是，[LangChainJS](https://github.com/hwchase17/langchainjs) 也[宣佈](https://blog.langchain.dev/js-envs/)支援多個 JS runtime，所以自然而然 Cloudflare workers 也是其一，所以現在也可以在它的平台上，透過 LangChainJS 來搭建大型語言模型（LLM）的應用程式。

<aside>
💡 *PS: 其實我一開始也不知道什麼是 LangChain，所以找了一下，他[主要是提供兩個特點](https://js.langchain.com/docs/)：*

- *Be data-aware: connect a language model to other sources of data*
- *Be agentic: allow a language model to interact with its environment*

*也就是讓不同語言模型之間可以互動，另一個就是讓模型可以與外部資源連結（如 ChatGPT 原本無法連網這部分，就可以透過 LangChain 實現，可以[參考範例](https://www.youtube.com/watch?v=tdEM-tVOBcc)）*

</aside>

## [Cursor - Cloudflare AI Assistant](https://blog.cloudflare.com/introducing-cursor-the-ai-assistant-for-docs/)

![Untitled](../assets/網路黑手的呢喃 #31 - Untitled 1.png)

看來 Cloudflare 也知道開發者找文件是一件非常折磨人的體驗，尤其是對方的文件系統又不怎麼樣的時候，更是花了大把的時間，也找不到自己想得到的答案😅。

所以 Cloudflare 非常快速地整合了 AI 自家的開發者資源，就是這次釋出的 AI 助理 - Cursor。顧名思義，就是透過大家都很熟悉的 ChatGPT 使用方式，直接把需要的問題詢問 Cursor，它就會回答你的問題並列出相關的文件連結。

![*是不是超方便滴！*😄](../assets/網路黑手的呢喃 #31 - Untitled 2.png)

*是不是超方便滴！*😄

## [**Announcing database integrations: a few clicks to connect to Neon, PlanetScale and Supabase on Workers**](https://blog.cloudflare.com/announcing-database-integrations/)

*這個感覺蠻有針對性的* 😆

不過最近許多雲端服務商不約而同地推出了他們各自的儲存解決方案，像前陣子提到的 Deno KV，還有剛結束的 Vercel Ship 發佈的 Vercel Storage。Cloudflare 看起來也是不落人後。不過因為他們本來就已經有相關的產品，如 SQL 相容的 [D1](https://developers.cloudflare.com/d1/)，還有一樣的 [KV](https://developers.cloudflare.com/workers/runtime-apis/kv/#kv)。

不過除了自家的服務之外，Cloudflare 這次提供了更多與外部服務提供者的整合，這邊列出了三個在 Edge Computing 常見的三間資料庫提供商：Neon、PlanetScale 及 Supabase（還會陸續增加更多的整合）。比起之前被酸包一層費用被扒一層皮的 Vercel，我覺得 Cloudflare 提供的方式更加聰明，它提供開發者可以直接在 Workers 裡面直接使用對方的 SDK 來整合，也沒有特別再加收費用。

與之相關的兩個延伸，一個是 Worker 裡面支援一新的 API - [**`connect()`](https://blog.cloudflare.com/workers-tcp-socket-api-connect-databases/)** 支援 TCP socket 的連線，對於第三方的資料庫支援，這個功能應該是基礎。

另一個則是 [**Smart Placement**](https://blog.cloudflare.com/announcing-workers-smart-placement/)，不過看它啟用的方式，跟它能提供的效果真是不成比例。如果你打算開啟這個功能，只需要在設定檔裡面多加上⬇️

```toml
[placement]
mode = "smart"
```

就這樣😆

剩下是 Cloudflare 的事了，它會自動計算應該把 Worker 移到什麼地方，才能夠得到最好的 Response time。為什麼需要移動呢？一般我們可能以為 Worker 距離用戶越近越好，但 Worker 與儲存方案的距離有時候才是瓶頸所在，把 Worker 移動至 DB 的附近可能比起放在用戶端能達到更好的效果。當然計算的部分就是 Cloudflare 會自動幫開發者處理了。👍

## [**Improved local development with wrangler and workerd**](https://blog.cloudflare.com/wrangler3/)

Cloudflare 除了有不錯用的網頁介面之外，身為開發者友善的平台，提供 CLI 工具是一定要的 - [**wrangler**](https://www.npmjs.com/package/wrangler)。許多開發的行為都可以直接透過工具執行，對於習慣 teminal 操作的開發者的確是非常方便的工具！今年的議程中一樣提到了持續優化的這個工具：

優化 [Miniflare](https://github.com/cloudflare/miniflare) → 就把它想成 Cloudflare Worker 的模擬器，可以讓開發者能夠在本地開發的時候模擬 Workers 的行為。在最新版本 v3 中，執行 `wrangler dev` 將可以完全模擬 Worker，包含其他的服務的互動，如 K1、R2、Queue 等（這看起來頗威，這樣體驗跟 Deno KV 差不多了👍，想來試玩看看）。

這篇文中還提及了他們開發的細節跟如何做到跨平台的支援，其中有提到 Miniflare v3 已改用他們自家開發的 JS runtime - [workerd](https://github.com/cloudflare/workerd) 來取代。對於 workerd 的現況有興趣的也可以接續這篇 - [**More Node.js APIs in Cloudflare Workers — Streams, Path, StringDecoder**](https://blog.cloudflare.com/workers-node-js-apis-stream-path/)，由 workerd（也是 Node.js 核心開發者）的 [James M Snell](https://twitter.com/jasnell) 介紹 workerd 的現況以及不斷進行中的 Node.js 相容的開發進度。

## [**Improving customer experience in China using China Express**](https://blog.cloudflare.com/improving-customer-experience-in-china-using-china-express/?utm_medium=organic_social&utm_source=facebook,linkedin,twitter)

😒這沒什麼好說的，為什麼 AWS 到現在不能推類似的功能啊😥 #令人厭煩的牆

看起來是透過跟 CMI 的合作，靜態資源直接從中國境內的 data center 讀取，動態則走 Tunnel 到香港的機房。簡而言之就是幫開發者處理好中國牆帶來的網路問題，降低中國境內用戶受影響的程度（我是蠻感興趣它們會怎麼收費，如果免費提供的話就太強了 *#怎麼可能*）。

![Untitled](../assets/網路黑手的呢喃 #31 - Untitled 3.png)

## 開發平台新功能！

- [**Announcing Cloudflare Secrets Store**](https://blog.cloudflare.com/secrets-store/)

又一項補上其他雲端廠商的功能，現在也有 vault 啦😄

跟 AWS 上面熟悉的 Secret Manager 一樣的功能，就可以讓你以加密的形式來儲存一些比較私密的資訊。看起來是放在原本環境變數的功能裡面，直接多一個按鈕就可以轉換。（老實說我覺得 Cloudflare 的操作介面比起 AWS/GCP 都好很多，Azure 不太熟不好評論😆）

![Untitled](../assets/網路黑手的呢喃 #31 - Untitled 4.png)

- [**Workers Browser Rendering API enters open beta**](https://blog.cloudflare.com/browser-rendering-open-beta/)

看這個標題應該就知道是什麼了，就是支援 headless browser 的操作，它也是拿知名的 [Puppeteer](https://pptr.dev/) 來改寫接上自家的 Workers Browser Rendering API，文中也拿網頁截圖當成範例也說明，基本上跟一般的 Puppeteer 的使用差不多，就只是多加上 wrangler.toml 裡面要加上對應的參數設定即可。

```toml
browser = { binding = "MYBROWSER", type = "browser" }
```

```jsx
import puppeteer from "@cloudflare/puppeteer";

// worker startup and launch puppeteer
const browser = await puppeteer.launch(env.MYBROWSER);
```

不過我覺得滿佩服的是，文中有提到為什麼他們要加上這個功能，也就是 Cloudflare 很引以為傲的 dogfood 文化，然後就帶到另一個新產品 → [Cloudflare Radar URL Scanner](https://radar.cloudflare.com/scan)，也就是蠻常見的網站效能、安全性分析的功能，就是利用了 Browser Rendering API 的功能搭配 Workers 平台實作出來的，真的很讚，說服力實十足！😄

## 其他零零總總的平台優化

其他有不少主題就是提到持續優化的平台功能：

- [**Making Cloudflare the best place for your web applications](https://blog.cloudflare.com/making-cloudflare-for-web/)** → 這篇算是 Pages/Workers 優化大集合，如果想知道這兩個 web application 開發的最佳拍檔又增加了哪些新功能，千萬不要錯過這篇。比較特別的是，Cloudflare 開發了另一個方便的 CLI 工具 - [**create-cloudflare**](https://www.npmjs.com/package/create-cloudflare)，能夠讓你快速建立起眾多（真的是幾乎常見的框架都支援了）網路應用程式的基礎設定，然後就可以開始衝刺了。
- [**Cloudflare Queues: messages at your speed with consumer concurrency and explicit acknowledgement](https://blog.cloudflare.com/messages-at-your-speed-with-concurrency-and-explicit-acknowledgement/)** → 這篇則是提到 Cloudflare Queue 服務的改善，我自己是還沒實際玩過這功能，不過看起來跟一般 Queue 服務提供的差不多，這篇就是加強火力而已，支援 concurrency 以及 Explicit Acknowledgment（搭配 `ack、retry` 來精準處理各別 message 是成功還是需要重跑）的功能。然後還有優化 Queue 的執行效率（100 to 400 messages per second）。
- [**A whole new Quick Edit in Cloudflare Workers](https://blog.cloudflare.com/improved-quick-edit/)** → 簡單説就是升級線上編輯器，由原本的 [Monaco editor](https://microsoft.github.io/monaco-editor/) 改成 [VSCode for Web](https://code.visualstudio.com/docs/editor/vscode-web)（文中有提及他們實作的方法，有興趣可以看本文）。
- [**D1: We turned it up to 11](https://blog.cloudflare.com/d1-turning-it-up-to-11/)** → ****[D1](https://blog.cloudflare.com/introducing-d1/) 是 Cloudflare 用 SQLite 魔改出來的關聯式資料庫產品，去年出現的時候應該不少開發者有驚豔到，Cloudflare 仍然持續至對這個產品進行更多的開發：
    - 優化（讀取、寫入跟批次都有顯著的進步，這可以參考「**Turning it up to 11**」那段）
    - 加強
        - 後台工具等相關的操作
        - DB 非常需要的備份回溯的功能也支援啦🔽
        
        > **Time Travel allows you to restore your D1 database to any minute within the last 30 days**
        > 
    - 此外，也特別提到開發者比較會關心的收費問題（錢難賺😅），有一些經濟實惠的計算方式（譬如 global read repliacatio 不額外收費），不過它們也還可能會有後續調整。
- [**Developer Week Performance Update: Spotlight on R2**](https://blog.cloudflare.com/r2-is-faster-than-s3/) → [R2](https://blog.cloudflare.com/r2-open-beta/) 就看成是 Cloudflare 家的 S3 應該大家比較容易記住😆。它們展示的方式也很威，就直接找假想敵 S3 出來 PK，對比在各區域的速度。另外，除了儲存之外，Edge Computing 也拿了 AWS Lambda@Edge 以及 Fastly’s Compute@Edge 來比較。（言下之意，Computing & IO 都是我比較快啦！）

## 結語

它們放出了很多新東西，我這邊就簡述幾個自己比較感興趣的東西：（有發現網路大大也作了類似的整理，所以也可以直接參考[**這邊](https://twitter.com/cosmtrek/status/1658232816742854657)，**或者是 Cloudflare 的 Recap），就可以很清楚囉。

> **Recapping Developer Week (2023)**
[https://blog.cloudflare.com/developer-week-2023-wrap-up/](https://blog.cloudflare.com/developer-week-2023-wrap-up/)
> 

雖然我自己沒有很深入玩過 Cloudflare 的開發平台，不過這一兩年看它們在雲端開發不斷發力，覺得似乎可以來試用看看。個人感覺它們打算走一條跟 AWS 不太一樣的路，比起產品的完整性，Cloudflare 自然是跟 AWS/GCP/Azure 這些先行者還有蠻大的落差，不過看它們也是一塊塊地拼起來，而且覺得它們在設計產品的時候，有把「**易用性**」優先考量。看無論是 `wrangler dev` 提供的完善本地開發體驗、 `Workers` 裡呼叫其他服務（KV、R2、Queue、D1等）比起 AWS 應該是非常明顯好用許多。還有像 `Smart replacement` 以及文件系統的 AI - `Cursor`，都可以感受到它們希望盡可能降低開發者使用上的難度。覺得假以時日如果 Cloudflare 漸漸補上更多更完整的產品線，說不定 AWS 霸主的地位也不是那麼遙不可及（Azure：是不把我放在眼裡是嗎🤣）。

---

# 別錯過這個酷酷的東西 - Rooms.xyz，一個可以自定義互動式房間的小遊戲👍

小遊戲何其多，為什麼特別要拿這個出來介紹？

這個名為 [Rooms.xyz](http://Rooms.xyz) 的小遊戲，是幾位 Google 前工程師出來一起製作的，從介紹看可以知道它就是一款可以讓你創造、裝飾自己一個小房間的遊戲，有點類似 Steam 上面另一款著名的遊戲. - [**My Dream Setup**](https://store.steampowered.com/app/2200780/My_Dream_Setup/)，唯一看起來不同的是，它走的是像素風。😆

但如果你以為它就只是這樣而已，那就太小看它了，除了擺設、佈置的元素之外，我覺得 [Roooms.xyz](http://Roooms.xyz) 最厲害的地方是它提供用戶可以自己[撰寫程式](https://rooms.xyz/docs)(嘿嘿，喜歡lua嗎😄)，來讓裡面的元件有一些獨特的互動行為，可以看[**範例**](https://rooms.xyz/tutorial)或一些強者[已經做好的成品](https://rooms.xyz/)，非常酷！

[https://twitter.com/jasontoff/status/1658429535841296388](https://twitter.com/jasontoff/status/1658429535841296388)

---

# 紀念耗子哥與惠我良多的 CoolShell

那天無意間在推上看到這則訊息，腦子突然像當機了一樣發呆了好一陣子。或許有人還不知道文中提到的耗子是誰，不過應該技術人或多或少都曾經在某個時刻點進過【[**酷 壳 – CoolShell**](https://coolshell.cn/)】這個網站過吧。沒想到經常可以在網路上看到的一個熟悉帳號的技術人，突然間就這樣離開這個世界了…

其實我完全沒見過 haoel，連[唯一一次他受邀](https://twitter.com/Brecht/status/1658647747116019713)來參加臺灣研討會 ModernWeb 也剛好沒參加到， 所以就僅僅是「酷壳讀者」這個聯繫而已，不過不管換過幾個 RSS Reader，他的 RSS Feed 始終都存留在我的訂閱清單裡面。無論是部落格針對技術方面的侃侃而談，還是推特上面不經意看到的不卑不亢、不溫不火的言論與回覆，都從中學到了不少。

[https://twitter.com/ghosTM55/status/1657946836643241985](https://twitter.com/ghosTM55/status/1657946836643241985)

看到中國開發者自發開始收集大家對耗子哥的緬懷文，也著手要把他留下的這些文字、記錄、知識好好保存下來，突然也感受到一股暖流，比起大家常見網路上火爆、虛假、嘲諷的那一面更讓人多了份感動。

[https://github.com/megaease/Remembering-Haoel](https://github.com/megaease/Remembering-Haoel)

[https://twitter.com/haoel/status/1648737026613862400](https://twitter.com/haoel/status/1648737026613862400)

看到網友轉了耗子哥曾經發過的這則推文，在這個時間點想想也覺得蠻有意思的，或許某天我們人雖然不在了，但是思想或精神卻以某種方式留存了下來，不也是某種 cyberpunk 式的浪漫嗎？

### **Rest In Peace**

---

# 擋不住的AI浪潮（天網倒數中😆）

### Meta也開始做自製 AI 晶片了

最近 Meta 舉辦了一場關於 AI 基礎架構的發表會，裡面提到不少針對 AI 相關的硬體消息，其中看到下面這個有趣的消息，跟隨 Google 的腳步，Meta 也[開發自己的 AI 優化晶片](https://twitter.com/MetaAI/status/1659228639286665216)了。

看起來新一輪的軍備競賽又要開始了！😄

其他還有提到不少有趣的東西，像優化 AI 計算的 [SuperCluster](https://twitter.com/MetaAI/status/1659238427601281024)，還有針對多媒體檔案處理的 [MSVP](https://twitter.com/MetaAI/status/1659256339334574080)（Meta Scalable Video Processor），都蠻有意思的，看來 AI 真的帶動全方面都動起來了，不單是軟體層面而已呢😱。

![Untitled](../assets/網路黑手的呢喃 #31 - Untitled 5.png)

## 雲端情人不遠矣

[https://twitter.com/GPTDAOCN/status/1656182426484477953](https://twitter.com/GPTDAOCN/status/1656182426484477953)

有興趣想聽完整版本的話，可以到這邊 ⬇️

> **The Disappearing Computer: An Exclusive Preview of Humane’s Screenless Tech | Imran Chaudhri | TED**
[https://www.youtube.com/watch?v=gMsQO5u7-NQ](https://www.youtube.com/watch?v=gMsQO5u7-NQ)
> 

## 另類的應用

做好產品是第一步，但是如果做好宣傳也是一個很重要的功課，不然光有好的產品卻沒有多少人知道又有什麼用呢？這篇文章提到一個很有趣的研究過程，如何讓自己撰寫的內容可以在 [Hacker News](https://news.ycombinator.com/) 上面拿到高排名。😆

> **How to hack Hacker News (and consistently hit the front page)**
[https://www.indiehackers.com/post/how-to-hack-hacker-news-and-consistently-hit-the-front-page-56b4a04e12l](https://www.indiehackers.com/post/how-to-hack-hacker-news-and-consistently-hit-the-front-page-56b4a04e12l)
> 

其中他們有引用 ChatGPT 來協助即時分析新聞來源的關聯程度，如果足夠相關就自動觸發後續的行為，蠻有意思的。

[https://twitter.com/AdriaanvRossum/status/1633318894508146689](https://twitter.com/AdriaanvRossum/status/1633318894508146689)

---

# 網路是個好東西

## 有錢就有高度

原來這是真的，真是受教了！

[https://twitter.com/DQ_yam/status/1658723524864020481](https://twitter.com/DQ_yam/status/1658723524864020481)

## 出生即厭世

[這位爸爸請不要這樣](https://twitter.com/matsu___ta/status/1658701663627247617)😆

![Untitled](../assets/網路黑手的呢喃 #31 - Untitled 6.png)

## 他只是個孩子阿～

[https://twitter.com/cctvidiots/status/1658089454488395778](https://twitter.com/cctvidiots/status/1658089454488395778)

## 白狼說的話要聽

在家玩有趣多了👍

[https://twitter.com/Blue01530961/status/1658061890214588417](https://twitter.com/Blue01530961/status/1658061890214588417)

## 總是該來些福利

其實我是想偷推 LE SSERAFIM 最近又有新歌啦，[UNFORGIVEN](https://www.youtube.com/watch?v=UBURTj20HXI) 聽起來！

[https://twitter.com/tzangms/status/1658317420086304768](https://twitter.com/tzangms/status/1658317420086304768)

## 海拉魯大陸上，正在經歷第一次工業革命😄

[https://twitter.com/AceTaiwan/status/1657221162009763841](https://twitter.com/AceTaiwan/status/1657221162009763841)

在某個時間點，我們都成了卑鄙的外鄉人 #誤

[https://twitter.com/Switch_movie_SS/status/1658958724638334976](https://twitter.com/Switch_movie_SS/status/1658958724638334976)