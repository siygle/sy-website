---
title: "網路黑手的呢喃 - #56"
date: "2024-10-10"
description: "主題：VoidZero JS toolchain 新創、OpenNEXT、AI 工具、Bluesky 動態、開源新聞"
tags:
  - AI
  - Javascript
  - Newsletter
  - OSS
  - bluesky
---
---

# **Web 生態圈例行更新**

### [VoidZero](https://voidzero.dev/) - 又一個針對 JS toolchain 而來的新創團隊

可能看到 JS 開發工具相關，覺得這也不是什麼新聞（畢竟這個生態三不五時就在重造輪😆），不過 VoidZero 不同於其他的新創，因為他們並不是從零開始的團隊，而是包含了很多本來就已經是知名的幾個專案集合而成的，看一下這精美的名單 ⬇️

![image.png](../assets/網路黑手的呢喃 #56 - image.png)

**其實如果對這個生態略懂的話，應該不難知道為什麼這些專案會聯合起來* 🤣

雖然開發工具的創業直覺上是一條艱困的路，但不同其他的創業團隊，這些專案都已經是赫赫有名的開源專案，只是聯合起來而已，不需要再經歷開發者的檢驗。另外，它們幾乎清一色都是 JS + Rust 的工具鏈，看起來這個路線很值得期待阿 🤩

不過也是蠻好奇開發工具要怎麼轉換成穩定營收，畢竟開發者真的是最難取悅的一群人…

![](https://x.com/voidzerodev/status/1841100762203492595)

### OpenNEXT 這個專案，有點危 😎

前陣子是 Cloudflare 的 birthday week，照慣例它們都會在這週海量發表許多的新產品以及新功能，其中一個就是[宣布 Workers 平台上支援 Next.js](https://blog.cloudflare.com/builder-day-2024-announcements/#cloudflare-joins-opennext)（其實之前也可以但功能應該不完整，體驗應該也不是很好）。

不過有趣的是，它不是說支援 Next.js 而是透過名為 [OpenNext](https://opennext.js.org/) 的這個專案，而且還拉上了另一個開源專案 - [SST](https://sst.dev/)。

<aside>
💡

SST is a framework that makes it easy to build modern full-stack applications on your own infrastructure.

</aside>

看到能在不同的服務上支援 Next.js 應該是好事，不過其實 Next.js 某種程度已經漸漸變成部分功能非常依賴自家技術桟的框架，所以如果要非常方便的使用，你幾乎不會考慮使用 Vercel 以外的平台，而我猜測這也是 Vercel 的策略之一。

所以這種直接挖牆角的行為，不知道會不會後來演變成跟上一篇提到的 WordPress Drama 一樣的狀況，不好說阿 😅。

![](https://bsky.app/profile/sylee.dev/post/3l52ycbfz4m2l)

### 截稿前的新版本 - Deno2 & Bun 1.1.30

本來想說還要等下去，沒想到 Deno 2 終於出現啦，10/10 Deno 2.0 準備正式釋出啦！看起來當天會有一個線上的發佈直播會，沒跟到直播的開發者，可以點下方連結去看完整的內容，裡面有 ry 針對 Deno 有很詳細的介紹，然而會後的 AMA 也首次看到了 Deno 團隊的樣貌，看起來他們終於可以喘口氣了 😎

![](https://x.com/deno_land/status/1843641930783305934)

然後不獨有偶，隔壁棚的 Bun 也一併放出新版本 1.1.30。看起來它可能想走 JS toolchain 的方向，可以看到新版本也整合了 npm & bundle 的功能，給 JS 開發者一個無腦開箱（又更快）的開發工具 🤔。

多個 runtime 彼此競爭，大家都有各自不同的設計，雖然有時候覺得 JS 的世界很阿雜，但有時候看到不同的實作抉擇，熱熱鬧鬧很有活力的樣子，又覺得很有意思～（你就繼續自虐吧 😅）

![](https://x.com/bunjavascript/status/1843630360133009872)

### TC39 又來了，出現一個酷酷的東西

原本 TC39 固定開會的訊息都只是稍微瞄一下，因為有時候真的審核討論的時間實在太久，看了就算有什麼有趣的東西，也不知道到底要等到什麼時候才會出現、甚至是實際可以用上（我還在苦等的 [Pattern Matching](https://github.com/tc39/proposal-pattern-matching) 都在 Stage 1 不知道多久了😢) 。

結果這次就來一個猛的 → https://github.com/tc39/proposal-structs ⬇️ 😆

![](https://x.com/_hisriver/status/1843671089534382244)

不常碰 system language 不過看起來相關開發者都蠻看好的，解放了 JS 這類動態語言的潛力，可以用更偏向靜態語言的方法、更有效運用記憶體。看到 Bun 的作者也評論到了這個提案，看起來這個功能如果真的引入實作，應該是有不少的可能性出現 😄。

![](https://x.com/jarredsumner/status/1843665451446112392)

不過其實除了上述這個提案之外，也看到在這次的 TC39 也有一場提到了關於如何改善現在的 JS 的開發生態的分享 ⬇️，這題目真的是有點大阿，看起來是打算從 JS Engine 的架構重新去思考（真的看不太懂裡面的不少細節，這需要大大講解了 😓）

不過不管是上面或是下面這題，我想應該都不會是短時間會出現的東西（雖然 structs 這個提案，一瞬間就 stage 2 有點嚇到我 😆）。

![image.png](../assets/網路黑手的呢喃 #56 - 7d3c7764-f978-4f7a-94af-6c98be4b14d6.png)

# 開源世界真有趣

### Deno 提供自架 JSR 的設定

雖然 Deno 現在不上不下的狀況讓我這個愛好者有點難過，不過開源起身的他們還是不遺餘力貢獻了許多好東西出來，其中一個就是他們力推的 package registry - [JSR](https://github.com/jsr-io/jsr)。原本這個專案就有開源，不過最近在[週報](https://uki00a.github.io/deno-weekly/articles/2024/10/06)看到他們更放出了自架在 k8s 上的設定，支援 AWS & Azure 兩大平台。

[https://github.com/denoland/nextgen-install](https://github.com/denoland/nextgen-install)

所以如果你的公司或小團隊想使用類 JSR 的功能，但想跑在自家的機器上而不是直接使用 Deno 提供的服務，就可以考慮直接透過這個設定跑起來。

### DHH 最近很愛 Web

迷之音：是最近而已嗎 😆

雖然完全對 RoR 的世界陌生，不過還是常常看 DHH  所發表的一些東西，有留意的開發者應該也知道他最近來了一波去 Apple 的言論，工作機也從 Apple 改成用 [Framework](https://x.com/dhh/status/1823774028961902690) 了（我也有點心動，希望之後有機會可以回到 Linux 桌機的世界 😄）

然後最近他們也丟出了他們自家的 mobile app 開發方案 - [**Hotwire Native**](https://native.hotwired.dev/)。雖然這種 hybird 的模式一直受到某些原生開發者的…特殊評論 😆，不過它的確就是走一條快速開發的道路。Hotwire 跟另外更知名的專案 react native 或是 flutter 這類看起來應該是更輕量化，面對的應該也是比較簡單的 app，不過它提倡可以運用 Bridge Components & Native Screens 抽換成更貼近 native 體驗的元件，感覺也是蠻適合逐步調整的使用情境。

![](https://x.com/dhh/status/1840079708362551640)

# 愛讀冊啦～

### 深入解析藍天的 ATProto 選擇

[BlueskyがActivityPubを採用しなかった3つの理由 | Bam](https://whtwnd.com/boobam.bsky.social/entries/BlueskyがActivityPubを採用しなかった3つの理由)

身為藍天愛用者的我，看到相關的好文是一定要推的！

身為聯邦宇宙的一份子，Mastodon 跟 BlueSky 一直都會被拿來相比較，可能很多人也不是非常理解為什麼當初 BlueSky 開發的時候，不直接使用 Mastodon 的核心協定 [ActivityPub](https://activitypub.rocks/) 來實作就好，還要自己搞一套 [ATProto](https://atproto.com/) 出來。

這篇由日本開發者撰寫的文章寫的非常詳細，針對一些 ActivityPub 的運作原理跟遭遇問題，都做了簡單的介紹，歡迎大家可以閱讀（主要就是下列這三項，細節當然就大家自己到文章看吧😆）

![image.png](../assets/網路黑手的呢喃 #56 - 3d7c0da4-44bb-4648-802c-117ae17fa3f7.png)

- 第一個可視的問題，比較像分散式聯邦的文化造成的，但要改變也困難。
- 第二個可攜性則是 ActivityPub 的轉移並沒有那麼容易，然後造成後續的一些問題。
- 第三個擴展的技術的問題，之前其實有提過，有位 AWS 的開發者之前就針對這點寫了一篇文章來說明，有興趣也可以跳轉 → https://justingarrison.com/blog/2023-04-24-mastodon-is-doomed/。

其實目前 1 & 2 的問題，再藍天上也還沒辦法完全印證它是不是有更好的解法（畢竟還沒出現正式比較大型的第三方 instance。不過第三點起碼高流量的問題，在前陣子的[巴西事件](https://bsky.app/profile/did:plc:vpkhqolt662uhesyj6nxm7ys/post/3l3gvrir5bu2u?ref_src=embed&ref_url=https%253A%252F%252Fwhtwnd.com%252Fboobam.bsky.social%252Fentries%252FBluesky%2525E3%252581%25258CActivityPub%2525E3%252582%252592%2525E6%25258E%2525A1%2525E7%252594%2525A8%2525E3%252581%252597%2525E3%252581%2525AA%2525E3%252581%25258B%2525E3%252581%2525A3%2525E3%252581%25259F3%2525E3%252581%2525A4%2525E3%252581%2525AE%2525E7%252590%252586%2525E7%252594%2525B1)應該算是初步測試通過了。想比較起來，最近才宣布要擁抱 ActivityPub 的 Ghost 才在[最近的更新](https://activitypub.ghost.org/beta-plans/)中提到了他們遇到的問題（而且這才是向 5000 followers 發送更新的訊息而已）。

作者有預告應該會是系列文，之後會更深入提及技術細節的比較，期待阿～ 😄

### 優化系列 - 這次換 Discord

Discord 最近也發佈了一篇優化相關的文章，主要是提到透過替換原本的 zlib → [zstandard](https://facebook.github.io/zstd/)，達到降低 Websocket 流量的目標。

其中有段話也是令人印象深刻 ⤵️

<aside>
💡

Data is a big driver of engineering at Discord, and the data speaks for itself: it wasn’t worth investing more effort into.

</aside>

主要是測試的過程中，雖然後來找到 zstandard 的問題而成功改善取代 zlib 的目標，不過針對原本打算一併啟用的 dictionary，經測試後卻不甚理想，所以後來並沒有繼續導入。然後上句就是該段的一個小結論。

綜觀這些大企業的線上系統優化，可以看到很多都非常看重線上資料的收集跟分析，所以這也是為什麼 log/profile 之流的系統非常重要了，一切都是數據說話！看這些大企業的分享文，其實都蠻有收穫的。 👍

[How Discord Reduced Websocket Traffic by 40%](https://discord.com/blog/how-discord-reduced-websocket-traffic-by-40-percent)

# 引領風潮的 ML

### G 社終於追上了嘛

最近網路上不少人都不約而同提到 G 社最近放出的 [**NotebookLM**](https://notebooklm.google.com/) 這個產品，就是他可以根據提供的記事本內容（包含網站、檔案、文字等資料），然後它就可以快速產生一段類似 Podcasts 的語音對話出來。

**在這個知識掛帥的時代，最不值錢的就是知識本身了…**😅

![](https://x.com/lobatt/status/1843275689765793875)

不過單論產品成效也是蠻不錯的，畢竟這個大家都想快速產出東西的時代，寫一份文稿就可以同時產生 Podcasts 內容，多麼開心 🤣（也看到有[大大用這個方式在測試了](https://www.youtube.com/@ffred)）。G 家的產品團隊最近也出來分享它們是怎麼打造出這個產品以及一些開發經驗，當然，一定是要順便火力展示的啦！⬇️

![](https://x.com/jayspiel_/status/1842243021955633278)

### Coding + AI 真的是廝殺戰場

目前 Coding + AI 這個戰場真的是沒過幾天就會有新競爭者出現，IDE 相關的、線上環境的等，大家都不約而同整合了程式自動產生的功能，像之前有介紹過的 [Val Town](https://www.val.town/) 也是很方便又強大的服務。

然後現在又多了一位爭逐者了，這次換 [StackBlitz](https://stackblitz.com/) 下來玩了～

不同於 IDE 之流的 vscode 或是 Cursor，都只有針對程式本身，不過像 Val Town 或是這次出世的 StackBlitz，因為本身也是提供服務的平台，所以能做到更完整的 AI 產生 → 全棧 → 部署，一條龍處理完畢，當然是更方便了。

![](https://x.com/elmd_/status/1843264918356730238)

此外，這是 StackBlitz 還有更猛的一點是，它直接把這個新服務（[https://bolt.new/](https://bolt.new/)）開源了，所以你可以直接讀代碼知道他們是怎麼實作出來了，真是太威了！

[https://github.com/stackblitz/bolt.new](https://github.com/stackblitz/bolt.new)

不過老實說目前這種 AI 很快可以產生（或取代）寫程式的觀點，也是有些開發者不認同的 🔽 😅

![](https://x.com/cloudwu/status/1842756759259430945)

我自己是覺得某些簡單的小功能，或是 side project 的起手式，拿這類的工具來實作的確是快上不少，不過如果是大型的專案、或是非 web 相關的，現階段可能幫助就沒這麼明顯（？），個人觀察，也是歡迎其他有不同意見的開發者可以分享自己的經驗談。

不過目前看起來不少人都對 AI 很有信心，再過一陣子回來看看會變成怎樣吧（沒有黑 😅）

# **網路是個好東西**

### 還是要繼續彈跳！

原來看動物影片是真的可以紓壓的 🤣

![](https://x.com/and_khamoo/status/1843264797732921485)

![](https://x.com/KookCapitalLLC/status/1842987183621153180)

![](https://x.com/khamoo_fc/status/1840628852135227636)

### 我們飯的是四次元愛豆無誤

喵 🐱🤣

![](https://x.com/__yunhand__/status/1842852967273390358)

### 像文青般了解現在的時間

看到有人轉了這個產品，真的是世界無奇不有 

他會用一段文字來包含現在的時間，是不是連看個時間都感覺文青起來了呢🤣

[Author Clock: A Novel Way To Tell Time](https://www.authorclock.com/)

*謎之音：我只是想知道現在幾點* 😅

### 服裝才不是最大的問題

**重點是 _** 😂

不過木村大神好貼心阿，真的幫青年搭配了一週的裝搭。然後更猛的有人已經幫忙整理好了 🙌

![](https://x.com/littlegoodjack/status/1840561706428465525)