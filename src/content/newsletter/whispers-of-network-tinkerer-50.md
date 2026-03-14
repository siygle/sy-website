---
title: "網路黑手的呢喃 - #50"
date: "2024-07-03"
description: "One toolchain for your web project Format, lint, and more in a fraction of a second."
tags:
  - AI
  - Anime
  - Javascript
  - KPOP
  - Mac
  - NewJeans
  - Newsletter
  - OSS
  - Web
  - bun
---
Bun 第三季目標（好像有好玩的要來了）、State of JS 2023 跟一些近期更新、瀏覽器戰場又出現新玩家了？開源界從不缺少 Drama、AI 裝置仍舊夯、被 Bartender 嚇到的可以考慮下 Ice

還有，上週末的鬼殺隊以及東京巨蛋的邦妮子，都是幸福的吧 😁

---

# **Web 生態圈例行更新**

## Bun Q3 roadmap

看到 Bun 那位都不睡覺的專案領導人又公布了下一季的專案目標 🤣 ⬇️

![src: [https://x.com/jarredsumner/status/1807731197046653438](https://x.com/jarredsumner/status/1807731197046653438)](../assets/網路黑手的呢喃 #50 - Untitled.png)

src: [https://x.com/jarredsumner/status/1807731197046653438](https://x.com/jarredsumner/status/1807731197046653438)

Kit 可能是類似 deno compile 的存在，然後 Text lockfile 目前不確定是什麼功能 🤔，然後除了一貫的效能優化之外，Node.js 的相容看起來也是 Bun 現階段注重的工作項目之一。

剛釋出的 State of JavaScript 2023，裡面看到 Bun 已經是[僅次於 Node.js](https://2023.stateofjs.com/en-US/other-tools/#runtimes) 的存在了（Deno 哭哭 😅），看起來它的確吸引了不少 JS developer 的喜愛，不知道再過幾年之後，市占又會有什麼變化。

說到每年的問卷 State of JavaScript 剛發出的 2023 統計結果（都已經年中了才放去年的資料，會不會太多了），其實最近感覺對 JS 生態越來越無感了，今年也的確沒什麼很讓人印象深刻的東西，不過各痛點真的看了之後，應該是眾 JS 開發者都會苦笑的點 😂

![src: [https://2023.stateofjs.com/en-US/libraries/front-end-frameworks/#front_end_frameworks_pain_points](https://2023.stateofjs.com/en-US/libraries/front-end-frameworks/#front_end_frameworks_pain_points)](../assets/網路黑手的呢喃 #50 - Untitled 1.png)

src: [https://2023.stateofjs.com/en-US/libraries/front-end-frameworks/#front_end_frameworks_pain_points](https://2023.stateofjs.com/en-US/libraries/front-end-frameworks/#front_end_frameworks_pain_points)

![src: [https://2023.stateofjs.com/en-US/features/#language_pain_points](https://2023.stateofjs.com/en-US/features/#language_pain_points)](../assets/網路黑手的呢喃 #50 - Untitled 2.png)

src: [https://2023.stateofjs.com/en-US/features/#language_pain_points](https://2023.stateofjs.com/en-US/features/#language_pain_points)

還有永遠都是那幾項的 missing features 😓

![src: [https://2023.stateofjs.com/en-US/usage/#top_currently_missing_from_js](https://2023.stateofjs.com/en-US/usage/#top_currently_missing_from_js)](../assets/網路黑手的呢喃 #50 - Untitled 3.png)

src: [https://2023.stateofjs.com/en-US/usage/#top_currently_missing_from_js](https://2023.stateofjs.com/en-US/usage/#top_currently_missing_from_js)

## 拉拉雜雜的一堆更新

### More Set methods

Collection 類型一直是很便於開發的結構，之前也提過 ECMAScript 提案最近也出現不少類似的 helper 功能，這邊是針對 `Set` 近期各瀏覽器都已經支援的，針對多個 Set 之間互動行為的一些語法糖。 👍

不過老實說，ECMAScript 不知道什麼時候才能考慮像其他 runtime 一樣推一個 std，這樣使用上不是能更簡潔方便嗎？😓

[New JavaScript Set methods | MDN Blog](https://developer.mozilla.org/en-US/blog/javascript-set-methods/)

### TypeScript 5.5

TS 5.5 問世！

*雖然 JS 世界很糟糕，但是加上型別之後會好一點嗎？*（*並不會* 😂）

雖然 TS 一直是很爭議的存在（愛的很愛，討厭的很討厭，像極了 DPP #誤），不過隨著持續的更新，還是有越來越方便的東西出現，譬如：

- 5.5 增強的[型別推論](https://devblogs.microsoft.com/typescript/announcing-typescript-5-5/#inferred-type-predicates)，終於可以讓陣列裡的資料也能正確被解析。
- 上面提及的 [Set methods](https://devblogs.microsoft.com/typescript/announcing-typescript-5-5/#support-for-new-ecmascript-set-methods)（沒想到居然到 5.5 才加上）

[Announcing TypeScript 5.5 - TypeScript](https://devblogs.microsoft.com/typescript/announcing-typescript-5-5/)

### ECMAScript 2024

每年一版的 ECMAScript 2024 版本也出來了，當然已經有人幫忙整理好了，可以快速看一下下篇這份統整的文章，看看又多了哪些新工具即將可以使用 😃

[Atomics](https://2ality.com/2024/06/ecmascript-2024.html#atomics.waitasync()) 似乎是個有趣的東西，應該來啃一下文件。

[Ecma International approves ECMAScript 2024: What’s new?](https://2ality.com/2024/06/ecmascript-2024.html)

## 希望 JS 開發可以越來越簡化

最近留意到一篇推文就想起這個名為 [Biome](https://biomejs.dev/) 的專案，或許有人還不知道，它就是之前 [Rome](https://github.com/rome/tools) 這個專案分支出來的，而且 Rome 一開始的作者之一就是 Babeljs 的作者啦（對考古有興趣的朋友們，可以[跳轉這邊](https://biomejs.dev/blog/annoucing-biome/) 😄）。

*雖然知道脈絡對本文沒什麼關係* 😅

> One toolchain for your web project Format, lint, and more in a fraction of a second.
— [https://biomejs.dev/](https://biomejs.dev/)
> 

從官網標題就不難看出（其實如果妳玩過 Rome 應該早就知道了），它的目標就是一個 JS 工具鏈，而目前它可以提供的就是 format & lint 這兩個 JS 常見的行為，當然就是對標下方截圖提到的 eslint & prettier（或其他類似的工具）。

雖然對 JS 老是作一樣的事覺得很心累，不過這次看了有心動還是因為起碼它做到了簡化（~~因為它是 rust  改寫的~~），我也真心希望 JS 生態能朝向這個方向走去，不然一個專案都還沒開始就要裝一堆有的沒的，一點都不開發者友善。

**當然根據生態慣例，還有另一個類似的專案 - [**oxc**](https://github.com/oxc-project/oxc)*  😅。

![src: [https://x.com/jonathan_wilke/status/1805846786164015301](https://x.com/jonathan_wilke/status/1805846786164015301)](../assets/網路黑手的呢喃 #50 - Untitled 4.png)

src: [https://x.com/jonathan_wilke/status/1805846786164015301](https://x.com/jonathan_wilke/status/1805846786164015301)

# 開源世界真有趣

### 這次新瀏覽器新玩家不太一樣呢 🤩

看到 Github 前創辦人就知道有戲 🤣

雖然 Web 不算是目前的顯學，不過還是很多創新跟有趣的東西都是在其上發展的，然後瀏覽器的發展當然在其中佔了很重要的地位。雖然目前檯面上的瀏覽器相當多，不過很多都是基於 Chrome 背後的開源專案 - [Chromium](https://www.chromium.org/Home/)，真的能算上不同陣營的大概只剩 Firefox 以及 iOS 陣營的 Webkit 了吧？

![src: [https://x.com/defunkt/status/1807779408092234134](https://x.com/defunkt/status/1807779408092234134)](../assets/網路黑手的呢喃 #50 - Untitled 5.png)

src: [https://x.com/defunkt/status/1807779408092234134](https://x.com/defunkt/status/1807779408092234134)

然後 Chris Wanstrath 就跟 SerenityOS 的作者 [Andreas Kling](https://x.com/awesomekling) 就一起宣布了這個名為 [**Ladybird**](https://ladybird.org/) 的新瀏覽器專案的消息（它的確也是從 SerenityOS 專案裡面的 HTML 瀏覽器分支出來起手開發），目前應該還在初期的開發階段，預計是 2026 才能看到雛形（但 2 年的時間真的有點久阿，不知道這個專案能不能支撐這麼久 😅）。

[Why we need Ladybird - Chris Wanstrath](https://ladybird.org/why-ladybird.html)

### JS 總是充滿許多的 drama 😅

追開源圈除了經常出現許多有趣的東西之外，八卦也是沒在少的，真的是給眾開發者帶來許多樂趣 #大誤 🤣。

我沒有要站隊的意思，所以興趣的話可以去看這串討論串 ⬇️

[https://github.com/A11yance/axobject-query/pull/354](https://github.com/A11yance/axobject-query/pull/354)

大略提一下就是有個下載數頗高的套件 - [axobject-query](https://www.npmjs.com/package/axobject-query)，最近變更了它的依賴，然後也就是這個 RP 的內容導致後續的炎上：

- 有些開發者質疑為什麼要改動 [dequal](https://github.com/A11yance/axobject-query/pull/354/files#diff-7ae45ad102eab3b6d7e7896acd08c427a9b25b346470d7bc6507b6481575d519L66) 換成 [deep-equal-json](https://www.npmjs.com/package/deep-equal-json)，然後這個套件就是 RP 的開發者 [ljharb](https://github.com/ljharb)（Node.js 的開發者應該都看這個帳號的 ID，算是非常有名的一位開源貢獻者）。
- 後續有其他開發者提及了 tidelift 會針對加入它們的開源專案，有一定比例的拆帳機制（也就是說下載量越高，分到的金額就可能越多）
- 根據 ljharb [提供的資料](https://github.com/A11yance/axobject-query/pull/354#issuecomment-2184123388)，tidelift 給予的金額其實很少，而且並不是主因，他變更的原因是為了針對 0.4 版本的相容，才抽換成自己維護的套件。

這邊是我稍微追一下內容之後理解的部分，當然還有很多的討論（也不要只看我的片面之詞），大家可能都有不同的想法。其實我一開始也覺得是不是作者別有用心，才特別提出這個變更的，而且針對已經是數年前的 0.4，還需要支援，似乎也有點小題大做。

不過後來看了其他開發者陸續有發表各自的看法，覺得或許是自己想得太狹隘了點，對於 Node.js 生態有開發者願意作這麼大的努力，就為了達到向下相容，這不是 JS 這個生態一直很缺乏的一點嗎？

![src: [https://x.com/mitsuhiko/status/1805478152539386095](https://x.com/mitsuhiko/status/1805478152539386095)](../assets/網路黑手的呢喃 #50 - Untitled 6.png)

src: [https://x.com/mitsuhiko/status/1805478152539386095](https://x.com/mitsuhiko/status/1805478152539386095)

[https://bsky.app/profile/danabra.mov/post/3kvlkrpus522z](https://bsky.app/profile/danabra.mov/post/3kvlkrpus522z)

當然，每個人都有他自己的觀點，你也可以不認同，不過覺得針對願意花大量時間在開源專案的開發者，我自己還是更願意多一些體諒跟相信。

### Ice - Bartender 的開源替替代品

前陣子，Mac 上算小有名氣的自訂選單功能的 app - Bartender 因為[出了一些事](https://x.com/jimmy_su/status/1798545804346749182)，所以不少原本的使用者決定離開找尋其他適合的替代品。後來不少人都發現了有個叫 [Ice](https://github.com/jordanbaird/Ice) 的開源專案有著很類似的功能。

不過應該不少使用者是因為為了解決 Macbook 那精美的瀏海，所以才用了 Bartender（起碼我是這樣啦 😅），因為它可以把延伸的選單變成另一個獨立選單，所以就不會被瀏海擋到，不過 Ice 一開始的版本並還沒支援這個功能。

[https://github.com/jordanbaird/Ice/issues/1](https://github.com/jordanbaird/Ice/issues/1)

後來因為大量用戶湧入，開發者加快原本開發的腳步，真的在很短的時間內就實作並提供測試版本，在目前我自己測試的 0.10 beta5 就幾乎可以正常使用了。

所以在開心之餘也發了下面這則 skeet，開源開發者真的很需要使用者的贊助，要維護一個專案是很辛苦也很不容易的事。🙌

[https://bsky.app/profile/did:plc:z57tkg4b3hw7fsn47lud3kf5/post/3kvocj6quyy2o](https://bsky.app/profile/did:plc:z57tkg4b3hw7fsn47lud3kf5/post/3kvocj6quyy2o)

### dotenv 新版本 - dotenvx

前陣子看到 dotenv 的作者寫了一篇文章，順便介紹了他的最新作品 - [**dotenvx](https://github.com/dotenvx/dotenvx)。**

看這個名稱應該就可以猜到它跟原本的 dotenv 應該很類似。沒錯，它主要是解決之前的幾個痛點，譬如跨平台的問題、多環境、以及不小心洩漏私密資料。其中針對 env 內容加密的作法算是蠻有意思的作法，它採用了跟 BitCoin 一樣的加密方法 - [secp256k1](https://github.com/ecies/js)。

詳細可以瀏覽下作者的原文，裡面有很詳細的說明以及範例。

[From dotenv to dotenvx: Next Generation Config Management](https://dotenvx.com/blog/2024/06/24/dotenvx-next-generation-config-management.html)

# 引領風潮的 ML

### LangChain 發布自家的雲端服務 - LangGraph Cloud

身為 AI 開發的知名框架，LangChain 的腳步也沒有停下來的意思，圍繞著 [LangChain](https://www.langchain.com/langchain) 陸續推出了用於測試與除錯的工具 - [LangSmith](https://www.langchain.com/langsmith)，以及更高層級，用於組合與協作多個不同的 Chain、Agent 的 [LangGraph](https://www.langchain.com/langgraph)，然後前陣子官方也宣布推出自家的服務 - LangGraph Cloud，想當然爾，就是拿來佈署 LangGraph（覺得這好像跟 AWS 家的 SegeMaker Studio 有點像 🤔）

[Announcing LangGraph v0.1 & LangGraph Cloud: Running agents at scale, reliably](https://blog.langchain.dev/langgraph-cloud/)

LangChain 官方的 YouTube 頻道上也有很多相關的教學與範例，如果想了解 LangGraph Cloud 的功能與特性，對於我們開發、管理 LLMs app 有什麼幫助，可以參考下面這個範例說明：

[https://www.youtube.com/watch?v=EKNiz_fWrDk](https://www.youtube.com/watch?v=EKNiz_fWrDk)

### 前仆後繼的 AI 裝置

雖然之前的 Rabbit R1 以及 AI Pin 都已經氣數已盡，不過想搭上 AI 這班車的創業家還是不會輕易被嚇跑的，尤其是目前硬體還在摸索的階段，大家都在嘗試什麼是有可能成功的形式。

最近又出現這個名為 Friend 的佩戴裝置：

![Untitled](../assets/網路黑手的呢喃 #50 - Untitled 7.png)

目前看介紹跟展示影片，很像是 Rewind 以及之前 MS 爭議很大的 Recall，但是不同於以上都是針對電腦的桌面記錄，Friend 則是針對我們日常生活的所有「說話」記錄。看起來像項鍊一樣的外型，其實就是一個隨時錄音的裝置，搭配上 app 的 AI，隨時把你的說話記錄，轉換文字之後順便概括提供重點給你。

[Friend: Open Source AI Wearable Recording Device](https://www.kickstarter.com/projects/kodjima333/friend-open-source-ai-wearable-recording-device)

不能說很驚豔，畢竟[這類的應用](https://www.zeczec.com/projects/plaudnote)也是有了，不過起碼也是另一種的嘗試，如果使用的體驗不錯的話，這種升級版錄音筆的功能，一定有它市場。不過我自己是覺得如果能調校到不錯的品質，然後以 local model 來取代 GPT 的話，感覺會更有競爭力一點。

不過這個專案還有個特點是，它也是個開源的專案，所以裡面相關的技術棧都可以在他們的專案 repo 裡面挖寶，讚！

[https://github.com/BasedHardware/Friend](https://github.com/BasedHardware/Friend)

**後來發現這就是之前弄開源智慧眼鏡的那個團隊，看起來他們都是針對 AI 裝置再嘗試各種可能，有興趣可以[跟隨它們](https://github.com/BasedHardware)，說不定之後還會有更多有趣的東西出現*。😄

# **網路是個好東西**

### 希望這真能成為臺灣人普遍擁有的特質 🥰

[https://x.com/MoonMoon724/status/1804468138123375010](https://x.com/MoonMoon724/status/1804468138123375010)

### 手殘黨福音

最近各位退色者是不是都再次回到交界地啦 😆

身為手殘黨的我，對於這類魂系遊戲真的不太行，所以常常也玩著玩著就棄坑了，不過最近看到一位直播網紅用了腦波控制的方式來玩，成功打過了 DLC 的舞獅 BOSS，看起來就算是手殘黨，好像也有機會可以重回交界地了！

[https://x.com/Dexerto/status/1804740072551461260](https://x.com/Dexerto/status/1804740072551461260)

### 聽完之後好糾結

我陷入了被說服與抵抗之間…

[https://x.com/RV_ismyjoy_/status/1806692811817079248](https://x.com/RV_ismyjoy_/status/1806692811817079248)

### 鬼滅準備進[無限城](https://kimetsu.com/anime/mugenjyohen_movie/)啦，最終章！🔥

大家都看過剛結束的柱訓練篇嗎？不能不說最後一集真的是太熱血了阿！

[https://x.com/yu_neoEG/status/1807427795804704946](https://x.com/yu_neoEG/status/1807427795804704946)

我現在腦海中都是這段配樂，好希望之後也會有音樂集推出 😍

[https://x.com/knyesta/status/1807437102201618479](https://x.com/knyesta/status/1807437102201618479)

動畫組這麼用心製作，接下來的三部曲希望都進電影院支持一下！

[https://x.com/siygle/status/1808173393252176134](https://x.com/siygle/status/1808173393252176134)

### 邦妮子集合啦！

最近幸好飯上了 [**New Jeans](https://www.instagram.com/newjeans_official/)** 才能夠有力氣面對[**諸多爛事](https://www.google.com/search?q=%E5%9C%8B%E6%B0%91%E9%BB%A8+%E6%B0%91%E7%9C%BE%E9%BB%A8&rlz=1C5CHFA_enTW1068TW1068&oq=%E5%9C%8B%E6%B0%91%E9%BB%A8+%E6%B0%91%E7%9C%BE%E9%BB%A8&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCTE3NzQyajBqMagCALACAA&sourceid=chrome&ie=UTF-8)（**可以不要說的這麼順利成章嗎 😅）。最近剛好 NJ 在東京巨蛋舉辦了粉絲見面會（NewJeans Bunnies Camp 2024）。

[https://www.youtube.com/playlist?list=PLCbuvKvLvnURyVzWay2mV2BqnkC-jcSBZ](https://www.youtube.com/playlist?list=PLCbuvKvLvnURyVzWay2mV2BqnkC-jcSBZ)

除了原本就耳熟能詳的曲目之外，原本就走復古風的 NJ，這次有三位成員翻唱了三首日本經典的歌曲，分別是松田聖子的[青い珊瑚礁](https://www.youtube.com/watch?v=hKFR5T0pcw8)、竹內瑪莉亞的 [Plastic Love](https://www.youtube.com/watch?v=T_lC2O1oIew)，以及本人入坑 Vaundy 的[踊り子](https://www.youtube.com/watch?v=7HgJIAUtICU)（絕對不是因為 Minji 的關係 😆，但如果想知道為什麼她選了這首可以[跳轉這邊](https://x.com/siygle/status/1807673681956766048)）**。**

[https://www.youtube.com/watch?v=9U983WWQayY&list=PLCbuvKvLvnURyVzWay2mV2BqnkC-jcSBZ&index=16](https://www.youtube.com/watch?v=9U983WWQayY&list=PLCbuvKvLvnURyVzWay2mV2BqnkC-jcSBZ&index=16)

*而且還發了一篇超級失禮的推文* （*實在是因為小松拍攝的 MV 演繹的太好，讓我一瞬間誤會以為主唱就是她，爆失禮* 😅）。

[https://x.com/LanLanFatCat/status/1806912364635427077](https://x.com/LanLanFatCat/status/1806912364635427077)

***在這個糟透的時間點，卻有 NJ 陪著邦妮子們，身為大叔粉真是太幸福啦！*** 🥰