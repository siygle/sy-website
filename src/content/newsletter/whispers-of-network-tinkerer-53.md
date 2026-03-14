---
title: "網路黑手的呢喃 - #53"
date: "2024-08-26"
description: "Deno 1.46 (our final 1.x release) continues to forge towards this vision"
tags:
---
以及少不了的 ML 和網路好東西！
tags: AI, Deno, Javascript, Newsletter, OSS, StartUp
category: 不定期的呢喃

---

# **Web 生態圈例行更新**

### Node.js & SQLite

之前提及過的 Node.js 考慮加上 SQLite 的功能，就跟隔壁的 Deno/Bun 相似的功能，目前相關的 PR 跟開發也是如火如荼進行中，看起來有機會增加一個 `node:sqlite` 的模組可以使用，往後開發儲存的功能整合 SQLite 就很方便了 👀。

[https://github.com/nodejs/node/pull/53900](https://github.com/nodejs/node/pull/53900)

然後新版 22.7.0 也在稍早之前發布了，之前提過針對 TypeScript 的後續功能 `--experimental-transform-types` 也加上了，目前 `Enum` & `namespace` 都已經支持。

[Node.js — Node v22.7.0 (Current)](https://nodejs.org/en/blog/release/v22.7.0)

### JS 真的是無法停止~~惡搞~~ 😅

看到這個語法不知道大家的感覺是什麼 #先別Go 😆

![src: [https://x.com/kentcdodds/status/1824188520191365535](https://x.com/kentcdodds/status/1824188520191365535)](../assets/網路黑手的呢喃 #53 - image.png)

src: [https://x.com/kentcdodds/status/1824188520191365535](https://x.com/kentcdodds/status/1824188520191365535)

原來已經有人提了這個類似 Go 常見的錯誤處理語法，好不好不好說，不過之前尚在 Go 一族的時候，少數喜歡的就是這個語法，但是多了用 `?=` 是要學它的 `:=` 嗎 #誤 😓。不過大家先看看就好，畢竟按照 TC39 的審核速度，就算真到有機會可以通過，我看要等到正式支援大概 2~3y 跑不掉。

[https://github.com/arthurfiorette/proposal-safe-assignment-operator](https://github.com/arthurfiorette/proposal-safe-assignment-operator)

### Deno 1.46 & Standard Library

*當你以為下一個版本就是 2.0 的時候，永遠都會再跑出一個次版號 #誤*

*真的是最後一個了啦！*

> Deno 1.46 (our final 1.x release) continues to forge towards this vision
- [https://deno.com/blog/v1.46](https://deno.com/blog/v1.46)
> 

最近幾個版本都可以看到 Deno 在各方便不斷收斂的跡象，可能沒有什麼大驚喜，不過可以看到持續進行的優化，以及與 Node.js/Npm 生態的相容。

不過除了 Deno 新版本之後，另一個更吸引我的消息是，終於進入穩定版本的 Deno 標準函式庫 🎉。在透過 JSR 的助力之下，主流的 Node.js 以及其他 JS runtime 應該都可以無痛使用它（有興趣也可以跳轉這個[官方推文的簡介](https://x.com/deno_land/status/1826406094287368293)，針對這個標準函式庫所涵蓋的功能作了一波簡介。

![](https://www.youtube.com/watch?v=RFhM34rBWnU)

提到這個話題，如果要詳細的討論下去應該又是會掀起一波論戰，不過我自己的立場應該是滿明顯的，我覺得能有個類似工具包的標準函式庫，對新入門，甚至一般開發者來說應該都是利多於弊，尤其這個老是不停重造輪子的 JS-Eco，如果能把這類的工具包有組織地維護跟開發，就更可以把力量放到其他的領域（目前有疑慮可能 Deno 畢竟還是算營利公司，雖然開源之後轉移不太是問題，不過如果有個開源組織來負責，說不定也更可以吸引更多貢獻者投入一起維護）。

還有官方都說 1.46 會是最後一個 1.x 的版本了，有意願使用 Deno 來開發的開發者也可以稍微啃一下 v1 → v2 的升級文件啦 ⬇️

[Deno 1.x to 2.x Migration Guide](https://docs.deno.com/runtime/manual/advanced/migrate_deprecations/)

# 開源世界真有趣

### 是否有機會每集都來個架站工具 🤣

*現在的 hello world 專案是不是已經進化到實作架站小工具了，最近出現的頻率真的超高的啦！*

這次是用 Deno 開發的小工具，作者很用心還專門寫了一篇介紹文，雖然是個小工具，不過內容一應俱全，乾淨的 codebase、markdown、template、cache、static files 等都有支援，還有一個簡單的擴充系統。佈署首選當然是 [Deno Deploy](https://deno.com/deploy)，不過其他家也都沒什麼問題，連 [smallweb](https://www.smallweb.run/) 的方式都有列到，超棒滴！

[a simple website builder ✦ thomas seeley](https://tseeley.com/posts/simpl-site)

現在開源社群遍地都有不少好用的開箱即用工具，誠摯邀請大家都可以架起自己的小站，寫下自己的記錄、心得與看法，真的不必要被大企業綁在小圈圈裡面（是說那個圈圈也不小就是了…😓）

### 沒想到連履歷都有人來制訂規範

這邊是接續上面的延伸，後來發現這位開發者還實作了不少有趣的東西，其中有一個就是個[線上的履歷](https://iamseeley-resumehandler.web.val.run/)，然後它是用之前提過的 [**Val Town**](https://www.val.town/) 來實作的（下面還會有提到，最近覺得這個服務越來越威了 😄）

有興趣可以跳轉他的[專案頁面](https://iamseeley-resumehandler.web.val.run/)，只要分支之後就可以無痛設定跑起來了。不過這邊我不是要提這個，而是無意間發現到原來有人跳出來針對「履歷」這個常見東西，也提出了相關的規範 ⬇️（當然這是社群驅動的，不過看到這種看似平凡的東西，也有人跳出來做了嘗試提出規範，當然後續就可以有很多玩法，也才會有這個有趣的速成履歷的小工具，社群的力量真的是很威阿  😎。

[Schema — JSON Resume](https://jsonresume.org/schema)

### 這是不是應該列為開發者筆記的必要功能

最近網路上真的有多因著 AI 崛起，也跟著出現很多有趣的東西（雖然看多了關鍵字覺得有點阿雜），不過這個推友提到的小工具 - [srcbook](https://srcbook.com/)，真的很有意思。其實看起來很像 AI 領域常見的 jupyter notebook，就是個可以直接寫 & 執行程式的筆記本。

不過這個 srcbook 不是針對 python 而是 TypeScript/JavaScript。而且它還整合了 AI 的功能進來，所以你可以直接當作測試的小工具，也可以透過 AI 幫你快速產生好 codebase，然後就可以簡單一步跑起來，也可以當成一個很方便的 playground 啦！

**如果 Notion 也可以提供這種功能就好了，比起產生文字的 AI 功能，程式碼才更有用阿～*

![](https://x.com/vikingmute/status/1826796814982676619)

### 手機程式測試的好工具 - Tophat

有時候任何一個開發流程的優化，都會對整個開發團隊有很大的幫助，最近已經出現很多針對開發後的測試改善的流程，譬如大家很熟悉的 Vercel 就可以針對每個變更提供各自版本的預覽，透過跟 Github 深度整合，開發後就可以很清楚看到 & 測試。

我對手機端開發沒那麼熟悉，但我想應該也是有不少類似的工具與服務存在。不過剛好偶然看到了 Shopify 最近也釋出了類似的工具 - [**tophat**](https://github.com/Shopify/tophat)。幾乎就是 Vercel 功能，只是現在也可以針對手機開發來一鍵開啟目標版本的 app 了（可以參考下方的展示影片）🤩。

![](https://x.com/mustafa01ali/status/1825920486666084360)

如果對這個工具感興趣的話，也可以去拜讀一下 Shopify 撰寫的專文 ⬇️

[Tophat: Crafting a Delightful Mobile Developer Experience (2024) - Shopify](https://shopify.engineering/shopify-tophat-mobile-developer-testing)

### 網路上真的不乏願意貢獻的大大們 👍

在藍天逛街的時候（隨時隨地都要置入行銷 😁）留意有大大整理的東亞語系的科技術語的對照表，如果有需修正的應該也可以到 repo 直接提 RP。🔽

[https://github.com/dahlia/cjk-compsci-terms](https://github.com/dahlia/cjk-compsci-terms)

太讚也太用心了，推推！

![](https://bsky.app/profile/hongminhee.org/post/3l2gmdb3owx2b)

這位大大除了這個之外，他也是 Fediverse 的大力推廣者喔，有好幾個相關的專案（包含目前 Ghost 準備整合的 ActivityPub 就是用了他開發的專案喔，超威！

[https://github.com/dahlia/fedify](https://github.com/dahlia/fedify)

# 愛讀冊啦～

### 改善效能真的是硬工夫

這篇的作者是針對 Deno 優化的一個[小動作](https://github.com/denoland/deno/commit/930ccf928aee3ce5befc0a7494e0f9caaf0c8c63)開始，去研究為什麼透過把資料結構包裝在 Rust 的 [Box](https://rust-lang.tw/book-tw/ch15-01-box.html) 之中，可以有效提升執行的效率。

[Rust - Put It in a Box and Win It](https://ianbull.com/posts/rust-in-a-box/)

> In Rust, you typically wrap your data structures in a Box to allocate them on the heap; otherwise, they will be allocated on the stack.
> 

主要的影響就是透過包裝在 Box，該資料就會被分配到 heap 而不是 stack。文中作者也針對這個議題繼續深究並記錄下自己測試的一些數據。覺得優化這件事，有時候真的是得伴隨著對系統運作有著相當程度的了解才行。

### Notion 優化分享 - WASM SQLite

下面這篇一樣是優化的記錄，不過這次改成 Notion 針對網頁版本的優化，它們是怎麼透過 WASM 版本的 SQLite 來達成這個目標的（當然過程也是有許多的試誤）。

[Notion engineers sped up Notion's browser speed with WASM SQLite](https://www.notion.so/blog/how-we-sped-up-notion-in-the-browser-with-wasm-sqlite)

# 引領風潮的 ML

### 之前提過的 Val Town 越來越猛了

之前介紹過這個 Val Town 的服務，就類似有一堆 code snippet，然後你可以任意像拼圖一樣使用、組合他們，之前玩過就很喜歡它，也一直默默留意它們的發展狀況。

在拿到投資之後，它們的腳步也沒有停下來，[持續不斷增加 & 優化自家的服務](https://blog.val.town/)。最近它們也不免俗的整合的 AI 的功能，也就是這篇提到的 [Townie](https://www.val.town/townie)，而這是官方對這個服務的描述：

<aside>
💡

[Townie](https://www.val.town/townie) has been completed redesigned in the past couple weeks. It’s seriously good at writing fullstack apps. 

</aside>

***Seriously good，會不會太狂！***

不過你實際去玩玩看，真的會讓你驚豔到，它的操作、互動方式，以及產生出的程式碼，都會讓你眼睛一亮。（有興趣可以先瞄一次創辦人的 LIVE Demo）⬇️

![](https://x.com/stevekrouse/status/1826680757466865732)

除了實戰之外， Val Town 還特別撰寫了這篇文章，記錄了他們是如何實作出目前這個品質極高的成品，一步一步的優化，以及他做了那些事來讓整個產生的體驗跟品質可以更好，這篇文章真的很值得每位開發者細細閱讀，工匠精神就是像這樣，真是佩服這些強者 🫡。

文中也是有提到不少有趣的觀察 😆：

> Claude Sonnet 3.5 is clearly the best model for writing code right now.
> 

> However, we don’t want to optimize too much for cheap models, because the premier models of today will be the cheap models of tomorrow.
> 

[How we built Townie – an app that generates fullstack apps](https://blog.val.town/blog/codegen/)

### Zed 不落 Cursor 之後

自從編輯器的風潮燒到 [Cursor](https://www.cursor.com/) 之後，彷彿它又變成許多開發者的首選，畢竟 tab 開發流實在太開心了，是吧 🤣。

不過老實說我對 Cursor 這個還是以 vscode 當作基底去改的編輯器是相對比較保留的，因為 AI 服務的變革實在太快，但也相對廉價許多，除非你本身有競爭力極強的模型，不然其他競品都不需要太久就可以追上了。果然沒多久就看到前陣子的寵兒 Zed 也開發了類似的功能，雖然他們也是直接跟 Anthropic 合作，直接採用他們的 Claude 模型，而且操作、互動功能上也還沒到 Cursor 這麼好。不過持續優化的話，會不會開發者過一陣子又要跳船另結新歡了呢？ 

*Let’s wait and see. #不好說* 😅

![](https://x.com/zeddotdev/status/1825967812629631034)

### Cloud Run & Ollama

對比 AWS Lamdba 的 G 家服務 Cloud Run 率先支援了 GPU 的使用（AWS Lambda 以及 MS 家的 Azure Function 應該都還沒直接支援，得透過其他服務來間接支援）。

所以在消息發表會上，他們還拉上了本地開發大家都很熟悉的 [Ollama](https://ollama.com/) 來個 LIVE DEMO，可以直接在 Cloud Run 透過 Ollama 輕鬆跑起它支援的任一模型（想感受一下的可以跳轉 [**3:55**](https://youtu.be/mMFOmkFLgbc?t=235)）。

雖然我對 G 家產品不太有信心，然後它的 GCP 介面也是非常的…微妙。但是畢竟還是~~（喜歡一直宣傳）~~擁抱 AI 的企業，最快整合 GPU 的使用想必會讓 Cloud Run 多了不少應用的場景。

![](https://www.youtube.com/watch?v=mMFOmkFLgbc)

# **網路是個好東西**

### 能夠這樣自由自在的活著，真好～

有興趣可以去聽一下[訪談的影片](https://www.youtube.com/watch?v=oFtjKbXKqbg)，真的很佩服這種自由創業者，自己對其中的分享有些許的體悟：

- 為了技術棧爭吵是沒什麼意義的，做出有人需要的服務就會有人買單，用戶真的不在乎這個。
- Just follow your heart 😄

![](https://x.com/SaitoWu/status/1826067739494215707)

### 你本週悟空了嗎

好像不玩黑神話就跟不上流行了是嗎？（雖然有些想說的話，不過之後有時間寫一篇專文吧）

依然手殘黨的我又不知道要卡多久之外，也是有一些有趣的數據值得看看 😆

![](https://x.com/IEObserve/status/1826585895119847883)

### Born to be a Hero

再誇張一點沒關係 😁

![](https://x.com/cynical_zenitsu/status/1827230782618005747)

### Netflix 偷偷放大絕

![](https://x.com/netflix/status/1825970947511210182)

### 本週的我在 IVE 與 NewJeans 之間搖擺不定

多麼幸福的掙扎 😆

![](https://x.com/ayjpix/status/1826935841513759156)

![](https://x.com/Minggom_16/status/1826577320058200125)

![](https://x.com/ayjpix/status/1826928334074458324)

![](https://x.com/newjeans_loop/status/1826568267819090406)

![](https://x.com/IVEstarship/status/1827934010955497638)