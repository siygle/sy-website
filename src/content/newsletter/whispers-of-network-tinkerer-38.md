---
title: "網路黑手的呢喃 - #38"
date: "2023-11-13"
description: "**WinterJS is a JavaScript Service Workers server written in Rust, that uses the SpiderMonkey engin…"
tags:
  - AI
  - Deno
  - Newsletter
  - Node.js
  - Rust
  - WebAssembly
  - bluesky
---
默默前行的 BlueSky、Web 生態圈例行更新、WebAssembly 的腳步沒有要停下的意思阿、不甘寂寞的 xAI 準備加入戰局、帶著鐵拳回來的 OpenAI 發表會，以及其他網路好東西！

---

# 雖然不被爸爸疼，但還是緩步邁前的 BlueSky

先抖個包袱（因為三不五時就會有人問 Jack 爸爸怎麼都不太管這邊的事，或者是擔心相關的問題，其實 Jack 比較愛的是 [nostr](https://nostr.com/)！），請不要誤會 [**BlueSky**](https://bsky.app/) 沒這麼可憐啦🤣

因為先前已經[拿到投資](https://techcrunch.com/2023/07/05/bluesky-announces-its-8m-seed-round-first-paid-service-custom-domains/?guccounter=1)的關係，現在 BlueSky 這邊也有比較多的資源可以招募成員，逐步朝向它們的規劃往前邁進。最近它們開始把原本 [bsky.social](http://bsky.social) 的用戶開始分散到不同的網路，開始測試分散式的架構⬇️。不知道未來有沒有機會甚至可以跟 ActivityPub 聯動呢🤞😄

src: [https://bsky.app/profile/sylee.dev/post/3kdsldzmq6k2x](https://bsky.app/profile/sylee.dev/post/3kdsldzmq6k2x)

如果已經在 BlueSky 的用戶，可以用這個 [`!jazbot whereami`](https://bsky.app/profile/sylee.dev/post/3kdsl5jdtss2a) 來呼叫機器人，它會回覆你的帳號目前處在那個網路中。希望它們可以趕快確定 Protocol 等相關問題後，用力的跑起來阿！🙌

# 蓬勃（？）的 Web 生態圈

### 又來一個被 Rust 改寫的前端工具了😅

最近才留意到這個消息，雖然對前端人來說應該見怪不怪了，只是「又」多了一個用 Rust 改寫的工具而已。不過也不用太期待，看起來目前還要評估期而已，距離真正改寫應該還有一段時間（而且可能還有很多工作要做），看起來是基於 Node.js [核心成員](https://github.com/anonrig)之前的一個 side project → https://github.com/pnpm/pacquet。

src: [https://github.com/orgs/pnpm/discussions/7296](https://github.com/orgs/pnpm/discussions/7296)

### Deno 動作頻頻，KV 帶頭衝！

雖然 JS runtime 群雄割據，不過對於 Deno 的動向總是多了一份好奇，所以除了本家 Node.js 之外也會稍微留意一下它們的動向。最近已經默默走到 1.38 的版本（但是 2.0 到底什麼時候會出現阿 😅）

除了一直進行中的 Node.js 相容相關工作之外，1.38 還是可以看到幾個有趣的新功能出現。一個是快速產生文件的 `deno doc --html` 就可以快速產生出根據你的專案內容的文件（static真香），再也不要抱怨寫文件很煩人啦（有這麼簡單就好了🤣）另一個就是支援 Hot module replacement 的功能啦！

此外，還有一個不知道為什麼沒有列到公告裡面的 → [**`Deno.cron`**](https://github.com/denoland/deno/pull/21019) ，看到名稱應該就可以知道這是做什麼的了吧，往後處理排程就更方便啦（不過可能功能還不穩定,當然先暫時別這麼快用到正式環境上比較安全😅）

src: [https://deno.com/blog/v1.38](https://deno.com/blog/v1.38)

除了 Deno 本身之外，前陣子也留意到它們把之前推出的儲存方案 KV 另外分出一個 [repo](https://github.com/denoland/denokv) 來，果不其然就有了一些新動作，前幾天放出來的消息，現在起開發者也可以跑 self-hosted KV 啦！看來 Deno 目標應該不只是 JS runtime 本身而已，不知道是不是也打算建一個圍繞 Deno 展開的雲端開發平台？（就算是，可能還有很多工作等著，競爭者也很多阿😅）

src: [https://deno.com/blog/kv-is-open-source-with-continuous-backup](https://deno.com/blog/kv-is-open-source-with-continuous-backup)

### NodeConf EU 2023

每年例行的 NodeConf 總是可以得到不少 Node.js 生態的各種消息跟功能介紹，算是開發者不能錯過的好資源，前幾年因為疫情的關係在今年都陸續回歸了，剛結束的歐洲場，議程錄影也在近日放出來啦！

[NodeConf EU 2023](https://www.youtube.com/playlist?list=PL0CdgOSSGlBYI7_e6Zs4kFSXL9LvOn8gM)

# WebAssembly 的腳步仍然大步邁進中～

### Winter is coming..🤣

這個新出來的 WinterJS 又是什麼東西，先看一下定義⬇️

> **WinterJS is a JavaScript Service Workers server written in Rust, that uses the SpiderMonkey engine to execute JavaScript (the same engine that Firefox uses).**

[https://wasmer.io/posts/announcing-winterjs-service-workers](https://wasmer.io/posts/announcing-winterjs-service-workers)
> 

不能不說，雖然 [Wasmer](https://wasmer.io/) 有些[爭議](https://twitter.com/siygle/status/1646791026387083264)，不過不能否認它們對於 WebAssembly 的未來有很多想法跟創新，真的常常可以看到很多魔改的專案出現。🤣

繼之前的 [WASIX](https://wasix.org/) 之後，Wasmer 又把目標放到了 JS service worker 上，當然跟一般的 runtime 下運作的 service workers 不太一樣，透過 WinterJS 它可以被編譯成 WebAssembly 然後跑在 WebAssembly runtime（目前當然是它們自家的 wasmer），所以簡單說透過 winterjs，說不定未來的 JS app 都可以無痛轉移到 WebAssembly 啦～

[https://github.com/wasmerio/winterjs](https://github.com/wasmerio/winterjs)

雖然目前還不太確定有什麼明確的應用，不過官方目前的目標倒是非常值得期待（不過轉換後應該也還需要調校效能吧，看起來主要目標應該是先挖別人牆角轉到自己的平台上？😎）。

> By creating WinterJS we are aiming to move our website Next.js frontend from Vercel into Wasmer Edge and save tons of $ on the process :)

[https://wasmer.io/posts/winterjs-vs-alternatives-is-blazing-fast](https://wasmer.io/posts/winterjs-vs-alternatives-is-blazing-fast)
> 

*順帶一提，除了上面這個新東西之外，最近也留意到 Firefox 另一個遺產🤣 - Servo 好像也有[新計畫](https://twitter.com/__syumai/status/1722013433904968057)了，不知道有沒有機會在下一個平台轉移的時候，再次重回競爭者的行列。*

### WebAssembly GC

> **WebAssembly Garbage Collection (WasmGC) now enabled by default in Chrome**
[https://developer.chrome.com/blog/wasmgc/](https://developer.chrome.com/blog/wasmgc/)
> 

WasmGC 終於開始在各瀏覽器中[實作](https://webassembly.org/roadmap/)了，Chrome 的團隊最近也針對這個主題發表了好幾篇相關的文章來介紹與說明。有了 WasmGC，原有 GC 行為的語言在編譯之後就不再需要針對垃圾回收的部分再重新實作，可以直接使用 WasmGC 來處理，一來可以得到比較好的效能也較安全，另一方面要移植其他支援 GC 的程式語言到 WebAssembly 也更容易。

下面這篇則是 v8 團隊撰寫，更深入說明它們如何實作 WasmGC 及其細節，內容滿滿，有興趣了解的不要錯過：

> **A new way to bring garbage collected programming languages efficiently to WebAssembly**
[https://v8.dev/blog/wasm-gc-porting](https://v8.dev/blog/wasm-gc-porting)
> 

### 然後生態圈（競爭者）也越來越豐富了😅

除了不斷完善 WebAssembly 的協定與規範之外，圍繞在 WebAssembly 而生的相關服務也越來越多了，除了原本有知名的 [Wasmer](https://wasmer.io/)、[Fermyon](https://www.fermyon.com/#) 之外，看來又多了幾個不同面向的競爭者，譬如下面這個 ⬇️

> Moonbit - an "Intelligent developer platform for Cloud and Edge using WASM”
[https://www.moonbitlang.com/](https://www.moonbitlang.com/)
> 

不過我覺得這個子標題有點誤導人，原本以為類似 spin 這種針對 wasm 的雲端平台，後來發現它其實是個新語言 😅

src: [https://twitter.com/robpalmer2/status/1721814644656845177](https://twitter.com/robpalmer2/status/1721814644656845177)

目前瞄一眼範例跟文件，看起來跟 Rust 高度類似，不過它更著重[針對 WebAssembly 的優化](https://www.moonbitlang.com/blog/first-announce/#a-taste-of-moonbit)。不過目前還在開發階段，可能要到明年才會推出第一個穩定版，可以期待一下看看。

### Spin 也釋出 2.0 囉

之前有提過的 Fermyon 的 Serverless app platform，目前其實越長越大，功能也越來越延伸，然後近日也默默放出了 2.0 了。

目前看起來 2.0 最大的改變，就是加入了 [Component Model](https://github.com/WebAssembly/component-model/blob/main/design/high-level/Goals.md) 的支援，之前也一樣提過這個東西，它也是包含在 WebAssembly 中被提出的草案之一，它主要是希望能改善不同 wasm 之間互動的問題，詳細的介紹跟範例，可以參考官方文 🔽

[Composing Components with Spin 2.0](https://www.fermyon.com/blog/composing-components-with-spin-2)

# xAI 重磅(?)出擊

雖然有八卦，不過馬老闆對 AI 的愛真的是隱藏不住，為了不讓其他競品專美於前，X（previously Twitter 😅）也推出了圍繞自家產品的 [xAI](https://x.ai/) 準備要加入這個戰場啦！

除了 AI 模型之外，他們也推出了相關的」[開發工具](https://twitter.com/xai/status/1721568361883279850)，算是有了蠻完整的開場。

其實它的命名 - Grok 也是有特別的含義存在的，感謝大大的解惑。😄

src: [https://twitter.com/fuxiangPro/status/1720984636602605901](https://twitter.com/fuxiangPro/status/1720984636602605901)

除了馬老闆自帶鎂光燈的效果之外，Grok 這個專案還有一個蠻有趣的地方，就是它 heavy dependence on Rust（螃蟹黨嗨起來！🦀）(雖然目前沒什麼開源的部分，不過這是[公告有提及](https://x.ai/)的），看來 Rust 也漸漸把觸手伸到 Machine Learning 的應用了啊！👀

# OpenAI 鐵拳砸來，新創哀鴻遍野🤣

剛結束的 OpenAI 發表會，裡面真的是內容滿滿，又是一次重磅出擊，看起來不少新創都要陸續倒地了。

![](https://www.youtube.com/live/U9mJuUkhUzk?si=4NT2WciGAzDDqrbY)

有大大幫我們整理了發表會內容，可以跳轉[這邊](https://mp.weixin.qq.com/s/K7vtemjyST2grGBJAtQjbw)。

因為這次的發表會，不少人調侃又要倒一片新創公司，因為親爸自己跳出來作，不過其實之前 Sam 就已經[警告](https://www.panewslab.com/zh_hk/articledetails/ii3son3uFt.html)過這件事了。說到底，當你的產品就是別人東西的套殼而已，那怎麼期待它有什麼競爭力可言呢。剛好 [builder.io](http://builder.io) 最近也剛好針對這點寫了一篇文章，字字直擊。🤣

[Don’t Build AI Products The Way Everyone Else Is Doing It](https://www.builder.io/blog/build-ai#a-common-misconception-about-ai-products)

> **But the magic will come from the small but critical areas you use AI models for.**
> 

# 網路是個好東西

### 教務主任就是這個人

就算已經退休好一陣子，打起球來還是這麼殺（我知道你一定是故意的😎）

![](https://twitter.com/Markus_9527/status/1721784868261278093)

### 十二月只有一件重要的事！

居然有機會能在有生之年看到 GTA6 問世了嗎😅

![](https://twitter.com/RockstarGames/status/1722237703553798312)

### 不能重選嗎？🤣

![](https://twitter.com/buitengebieden/status/1719468485351256084)

### g0v 就是要推！

![](https://twitter.com/g0vtw/status/1720380302336610346)

### 被家務耽誤的高手媽媽

![](https://twitter.com/takomalu1/status/1718612687163158979)

### 之後遊戲裡面會不會都是 AI 產生出來的東西了

不過這對遊戲製作者來說應該是個福音😅。

![](https://twitter.com/lencx_/status/1719371423708578077)

### 我也想要這個酷酷的東西😄

這個子標題好像每集都會出現 #炸

![](https://twitter.com/memeflyfly/status/1720452603908444592)