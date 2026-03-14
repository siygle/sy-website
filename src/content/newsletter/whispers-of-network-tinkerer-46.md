---
title: "網路黑手的呢喃 - #46"
date: "2024-04-19"
description: "倚老賣老（就是我）、Privacy-first architecture、看看最近 TC39 又有什麼新東西、Node.js 最新 LTS - 22.0.0、k8s 1.30 跟一些有意思的開源專案…"
tags:
  - AI
  - Javascript
  - NVIDIA
  - Newsletter
  - Node.js
  - TC39
  - Toolkit
  - k8s
---
倚老賣老（就是我）、Privacy-first architecture、看看最近 TC39 又有什麼新東西、Node.js 最新 LTS - 22.0.0、k8s 1.30 跟一些有意思的開源專案、Llama3問世（還有追不完的 ML 消息）、當然還有少不了的網路好東西 👍

---

# **Web 生態圈例行更新**

### 時光飛逝

看到有人發個這個推文，突然百感交集，原來已經過了這麼多年了（哼，比這個還久的我都知道呢，我可是連[紀錄片](https://www.youtube.com/watch?v=LB8KwiiUGy0)都可以跟上的老人阿）

雖然年紀大了，沒辦法跟之前一樣熱血，對於新技術的看法跟想法也都跟之前不太一樣了，不過網路還是一樣是個有趣的東西呢，不知道再過 10 年之後又會是怎樣的風景呢？ 😁

![src: [https://twitter.com/kettanaito/status/1780875036405985685](https://twitter.com/kettanaito/status/1780875036405985685)](../assets/網路黑手的呢喃 #46 - Untitled.png)

src: [https://twitter.com/kettanaito/status/1780875036405985685](https://twitter.com/kettanaito/status/1780875036405985685)

*後來[還有人問了另一個更老的東西](https://twitter.com/vvoyer/status/1780897865465835971)，哼，我[還是知道](https://github.com/browserify/path-browserify)咧（除了比別人老沒別的東西贏過其他人*😢）

### 隱私優先的架構設計

無意間看到這個有趣的主題，原作者也把當初的分享[**投影片**](https://slides.com/ai/privacy)分享出來，有興趣的開發者可以瀏覽看看，主要提到最近越來越被重視的網路使用的隱私權，內容相關全面，從一開頭的 common knowledge 開始，然後後面說到怎樣的架構設計，更能夠提供較好隱私的服務，甚至還有以不同國家可能遭遇不同的問題來思考。

平常我們都可能在開發或設計產品的時候都不太會注意這部分，蠻有意思的。

![ src: [https://twitter.com/sitnikcode/status/1779172039175082299](https://twitter.com/sitnikcode/status/1779172039175082299)](../assets/網路黑手的呢喃 #46 - Untitled 1.png)

 src: [https://twitter.com/sitnikcode/status/1779172039175082299](https://twitter.com/sitnikcode/status/1779172039175082299)

### TC39 又有一些有趣的提案了

**proposal-signals**

沒錯，這就是你在一些前端框架裡面看到的那個 [Signals](https://preactjs.com/guide/v10/signals/)，用來更好處理狀態變更與頁面渲染的工具，不過會看到它出現在 TC39 提案也是有點驚訝，雖然它也提到不止前端工作有益而已，有興趣可以直接到提案的 repo 裡面有更詳細的說明 ⬇️

[https://github.com/tc39/proposal-signals](https://github.com/tc39/proposal-signals)

**proposal-set-methods**

像這類針對 JS 資料結構提供更多語法糖的提案，在 TC39 裡面也是不少，當然這種工具性質的是樂觀其成啦（不過我還是希望有個 standard library 來收斂這些東西會更好，唉，只能做夢 😅）

[https://github.com/tc39/proposal-set-methods](https://github.com/tc39/proposal-set-methods)

**propposal-math-sum**

就是提供一個能針對浮點數求和，能有更精確處理的方法。JS 不嚴謹本來就很常被拿來酸了，不過對數學運算的不足，看起來最近也有些提案是針對這塊有一些補強（https://github.com/tc39/proposal-bigint、https://github.com/tc39/proposal-float16array、https://github.com/tc39/proposal-decimal），值得期待（不過[被丟棄](https://github.com/tc39/proposals/blob/main/inactive-proposals.md)的也不少 😓）。

[https://github.com/tc39/proposal-math-sum](https://github.com/tc39/proposal-math-sum)

還有我最期待的 https://github.com/tc39/proposal-pattern-matching 最近都沒有進度，哭哭…

### Node.js 邁向下一個 LTS 啦 - Version 22.0.0

不囉嗦立刻放上！

[https://github.com/nodejs/node/pull/52505](https://github.com/nodejs/node/pull/52505)

其實如果看了上面的 PR 內容，應該發現不少就是之前有提過的東西，身為 JS 仔當然會持續更新相關的一些功能，不過除了新的 LTS 之外，如果有稍微留意專案裡的一些 PR 的話應該也有留意到，近期 Node.js 不少都是針對性能優化的工作（Joyee、Yagiz 兩位大大就發了好幾個）

- https://github.com/nodejs/node/pull/52535
- https://github.com/nodejs/node/pull/52427
- https://github.com/nodejs/node/pull/52428

另外也看到一個有趣的 PR，引入了一個類似 `npm run` 的指令 `node --run` （雖然不是完全相容，不過目前看[比較的數據](https://twitter.com/vinii_joga10/status/1779230799314727406)，相當威阿）

[https://github.com/nodejs/node/pull/52190](https://github.com/nodejs/node/pull/52190)

開源專案的維護者其實很辛苦，有些甚至都是在本職之外另外抽空來作無償的貢獻。寫到這邊就想起，之前. bun 問世的時候因為它的效能也讓 Node.js 這邊跟著燒起來，那時候看到一些不太理性的使用者來抱怨為什麼 Node.js 不能像 bun 一樣快，變向在抱怨核心貢獻者的不作為，看來也是笑笑 🤷（在抱怨之前怎麼不想想為什麼自己不送幾個 RP 呢？）

當我們有這些方便的工具可以使用的時候，是不是也能針對自己力有所逮的部分也能作一些回饋，而不是坐享其成還在那邊頤指氣使…（對，特別在說自己賺大錢，卻[吝嗇得很的各大企業](https://twitter.com/FFmpeg/status/1775178805704888726)【[詳細翻譯版](https://twitter.com/dotey/status/1775642924065161498)】）

# 開源世界真有趣

### 承上，一個方便的效能比較的工具

*對，就是講上面關於 Node.js 那段* 😅

在 `node --run` 那段，[無意間看到](https://twitter.com/vinii_joga10/status/1779230799314727406)開發者用了這個工具來跑 benchmark 比較，好方便啊，只要把各自的測試指令一併輸入，就可以拿到簡單明瞭的跑分數據，大推！(嘿嘿，你猜的沒錯，它是 Rust-based 的啦）

如果你有在開發一些 CLI 的話，這個工具可說是必備利器！

[https://github.com/sharkdp/hyperfine](https://github.com/sharkdp/hyperfine)

### k8s 1.30

雖然大家都說愛惜生命，遠離 k8s（並沒有），不過伴隨 container 一起崛起的 k8s 也不知不覺邁進了 1.30 版本的時候了，我只是個菜菜的使用者不敢說自己跟它很熟，所以介紹它就交給大大來吧，對 1.30 版本又多了哪些新功能，可以[跳轉這邊](https://moelove.info/2024/04/02/Kubernetes-v1.30-%E6%96%B0%E7%89%B9%E6%80%A7%E4%B8%80%E8%A7%88/)。

![](https://twitter.com/KubernetesPod/status/1780728830468210935)

### 原來 lodash 還有在開發 😅

我一度以為這個專案已經進入維護模式了，結果猛然看到作者發了這推文。不知道大家對這種 helper 的看法是什麼，不過我是很希望像這種工具型的還是很需要的，如果哪天 JS 世界會出現標準函式庫的話，希望它務必能加進去。（btw，大大現在也是 [bun](https://bun.sh/) 的成員之一）

![](https://twitter.com/jdalton/status/1780626154900070708)

### 深入剖析 JSR

前陣子 Deno 丟出新的 JS package registry 服務 - [JSR](https://jsr.io/)，目前看起來有不少正面的迴響，雖然不知道有沒有機會挑戰 npm 的地位，不過起碼是個很有趣的嘗試。

最近 Deno 團隊也特別[撰寫了一篇文章](https://deno.com/blog/how-we-built-jsr)，深入說明 JSR 的實作細節 ⬇️

![src: [https://deno.com/blog/how-we-built-jsr](https://deno.com/blog/how-we-built-jsr)](../assets/網路黑手的呢喃 #46 - Untitled 2.png)

src: [https://deno.com/blog/how-we-built-jsr](https://deno.com/blog/how-we-built-jsr)

如果對 JSR 有興趣的，相當推薦可以看看這篇文章，之前看專案 repo 就大概可以知道，它是 API（Rust）、Frontend（fresh）、Postgres、GCP 為基本的技術桟。不過這篇文章又更深入去說明它們在決定要開發 JSR 特別有訂出一些重點，以及它們如果採用對應的技術工具來達到這些目標。

# 引領風潮的 ML

### [Llama3](https://llama.meta.com/llama3/) 就這樣釋出了

真的是截稿前的最新消息 😁

不過反正我們也用不到 [Meta.ai](http://Meta.ai) 所以其實跟我們沒什麼關係 #大誤

說真的，也只有像 Meta 這種大企業才能這麼闊氣的用開源戰法，看來 Mark 也打算持續在這個戰場用這個戰到底，不過到底後來要怎麼把這個作法連結到企業獲利上，蠻有意思的。

除了 AI 之外，從這個訪談可以聽到其實 Meta 有打算把 AI、Device、Metaverse 結合起來的企圖心（雖然現在看到 Metaverse 可能很多人只想到它們「掉漆」的展示成果），不過很多願景在技術到位之後或許又是另一番風景，期待看看吧。

![](https://www.youtube.com/watch?v=8HrzoEvLWH0)

同場加映由 HuggingFace 提供的數據，看起來這個開源打法很有成效阿 😛

![](https://twitter.com/ClementDelangue/status/1781068939641999388)

### 又來個影像的應用

自從 Sora 發表之後，大家對 AI 在影像處理這個領域的應用，好像又多了許多的想像，當然這個腳步也不會因為 Sora 就停止，大家都有各自不同努力的方向，譬如像這篇提到的 [Viggle.AI](https://viggle.ai/)，不囉嗦看一下成果就可以感受到，一個動畫模板加上一張圖，就可以幫你產生一部換皮的新作品（不過看小丑那個版本，仔細看還是可以看到變造的痕跡。😅

不過這一看之後，應該應該會被有心人士拿去作類似 deepfake 的行為吧。

![](https://twitter.com/kuhaku__ai/status/1780342252184772660)

### 這個一定有搞頭的吧

不能不佩服這位作者，對於 AI 的應用真的是又快又精準！😂

裡面有個針對文字分析情緒的部分，這個原作者看起來是用中國的服務提供者 [APISpace](https://www.apispace.com/eolink/api/wbqgfx/introduction)，這個或者可以轉用其他類似的牆外服務（像這種 - https://github.com/SannketNikam/Emotion-Detection-in-Text，搜尋一下應該也是可以找到不少）。

![](https://x.com/imxiaohu/status/1780945982253044013)

### 個人用 ML 開發機

無意間看到推友提到 [tinybox](https://tinygrad.org/) 這個東西（原來 Geohot 現在也跑來 AI 的場子玩了 😄）

![](https://twitter.com/kalanyei/status/1780450845999665182)

覺得大大們的行動力跟其他人真的不是同一個等級的。不過想起之前有其他網友提到 NVIDIA 也有針對[邊緣場景](https://www.nvidia.com/zh-tw/autonomous-machines/embedded-systems/)的設備，看起來也是可以作為個人開發使用。不能不說 AI 真的是全民運動，針對各種使用族群都不放過，各項設備一應俱全 😅，不過如果實在手邊的錢錢多到不像話，也是可以考慮上更威的 ⬇️

[閒聊 - 用來跑 AI 模型的「八卡機」長什麼樣子？-黑暗執行緒](https://blog.darkthread.net/blog/machine-for-ai-training/)

# **網路是個好東西**

### 真希望多來個幾次

大家都有去 IU 演唱會嗎？（我沒有，因為人品搶不到😭），沒想到除了來臺灣開唱之外還給了粉絲們這麼特別的服務。

![](https://twitter.com/IU_winter/status/1778710607518429634)

**歌單聽起來！**

[https://music.youtube.com/playlist?list=PL342HR4LDx9a3Dr2ji3THQ--R4k38RS9k&si=FiSfV8xJ7uy06KAB](https://music.youtube.com/playlist?list=PL342HR4LDx9a3Dr2ji3THQ--R4k38RS9k&si=FiSfV8xJ7uy06KAB)

**同場加映（我也想被帶走 #被揍）**

![](https://twitter.com/imvosl/status/1780907324355608799)

### 過於真實

我絕對不會承認跟我有 87% 相似。🤣

![](https://twitter.com/Yoda4ever/status/1779864358941835474)

### 買起來！

真的是鞭辟入裡的忠告。 #但是我的錢包一直哭

![](https://x.com/glenna9305/status/1780931847314362755)

### 夢幻逸品😍

看到安森大大介紹這個結合機械鍵盤跟樂高的夢幻逸品，敗家魂瞬間燃起（但是我最近剛入手新鍵盤，應該沒辦法過審，只能哭泣 😭）

![](https://www.youtube.com/watch?v=xyWQLwV_PQ0)

### 原來是我們認真了

![](https://twitter.com/ayanamist/status/1779715540518637747)

### 井字棋永動機

會不會沒有結束的一天啊，好可怕的遊戲 😅

![](https://twitter.com/Rainmaker1973/status/1779548640530321464)