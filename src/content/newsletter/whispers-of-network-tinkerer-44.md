---
title: "網路黑手的呢喃 - #44"
date: "2024-03-09"
description: "**JavaScript toolchain for working with [WebAssembly Components](https://github.com/WebAssembly/com…"
tags:
  - AI
  - Deno
  - Newsletter
  - Node.js
  - Rust
---
Node.js 吉祥物以及新版本出爐！Deno 推出新 registry - JSR、藍天宇宙始動、Rust 仍然持續擴張領土、WebAssembly 又有新東西囉、當然還有 ML & 網路好東西

---

# **Web 生態圈例行更新**

### Node.js 終於有吉祥物啦！

歡迎火箭龜登場！😄

雖然不是跟開發直接相關的，不過走了這麼久 Node.js 終於有自己代表的圖樣了，超棒啦（看看隔壁棚幾乎每個都有 😓），不過討論的過程也是很有趣[可以看這邊](https://github.com/nodejs/admin/issues/828)。

![src: [https://twitter.com/nodejs/status/1759953849849167878](https://twitter.com/nodejs/status/1759953849849167878)](../assets/網路黑手的呢喃 #44 - Untitled.png)

src: [https://twitter.com/nodejs/status/1759953849849167878](https://twitter.com/nodejs/status/1759953849849167878)

不過老實說，如果是 0.x 就入隊的開發者，應該看到這個並不會陌生，因為這個形象在之前就出現過了（我記得是[這個專案](https://www.npmjs.com/package/dnode)，然後就看到一個熟悉的 ID：substack，這可不是近期大家熟知的 newsletter 服務喔，是 Node.js 早期很知名的一位開發者 - [**James Halliday**](https://www.youtube.com/watch?v=faxfLmChjVQ)）。

![src: [https://twitter.com/dshaw/status/1760197910531281352](https://twitter.com/dshaw/status/1760197910531281352)](../assets/網路黑手的呢喃 #44 - Untitled 1.png)

src: [https://twitter.com/dshaw/status/1760197910531281352](https://twitter.com/dshaw/status/1760197910531281352)

果然有同為老人的開發者提到了，好懷念早期的 TJ & substack 雙強的時代，常常丟出讓人驚奇的東西，結果兩位現在都消失在開發圈了。😢

### Node.js 21.7.0

好久沒更新 Node.js 了，不過倒是不需擔心它也是一直走自己的路線，截稿之前剛好上了一版 [**21.7.0**](https://github.com/nodejs/node/releases/tag/v21.7.0)，裡面也是看到一些熟悉的東西，像是之前提過的 Single Executable Apps（說到 SEA，發現[有些專案](https://github.com/microsoft/playwright/pull/29557)也開始測試了，而且還有更好的執行速度，讚讚！）、最近剛加上的 `.env` 相關功能持續改進，然後還有讓我有點突兀的新功能 - [styleText](https://github.com/nodejs/node/pull/51850)，看來應該下一個穩定版本的分支也快要出現了吧。Keep moving forward！

![src: [https://twitter.com/satanacchio/status/1765459330583699746](https://twitter.com/satanacchio/status/1765459330583699746)](../assets/網路黑手的呢喃 #44 - Untitled 2.png)

src: [https://twitter.com/satanacchio/status/1765459330583699746](https://twitter.com/satanacchio/status/1765459330583699746)

### [JSR](https://jsr.io/) 正式公開測試啦！

[上次提到的 JSR](https://chat.sylee.dev/2024/02/16/%E7%B6%B2%E8%B7%AF%E9%BB%91%E6%89%8B%E7%9A%84%E5%91%A2%E5%96%83-43#ce0750f6b879493a9627afcf20baea4d)，沒想到這麼快就開放出來了，而且 Deno 官方也是做足準備了呢，除了公開註冊之外，專案本身也跟著開源放到 Github 上面了，所以對它們怎麼實作出這個號稱下個世代的 JavaScript Registry 好奇的話，可以直接看[程式碼](https://github.com/jsr-io/jsr)啦！😄

![src: [https://deno.com/blog/jsr_open_beta](https://deno.com/blog/jsr_open_beta)](../assets/網路黑手的呢喃 #44 - Untitled 3.png)

src: [https://deno.com/blog/jsr_open_beta](https://deno.com/blog/jsr_open_beta)

除了上次提到一些關於 JSR 比較特別的功能之外，最近 Deno 成員也經常在推上分享關於 JSR 的特性，節錄一些看到有點驚豔的部分：

![src: [https://twitter.com/undefined_void/status/1763595861966102739](https://twitter.com/undefined_void/status/1763595861966102739)](../assets/網路黑手的呢喃 #44 - Untitled 4.png)

src: [https://twitter.com/undefined_void/status/1763595861966102739](https://twitter.com/undefined_void/status/1763595861966102739)

![src: [https://twitter.com/lcasdev/status/1762858506003050932](https://twitter.com/lcasdev/status/1762858506003050932)](../assets/網路黑手的呢喃 #44 - Untitled 5.png)

src: [https://twitter.com/lcasdev/status/1762858506003050932](https://twitter.com/lcasdev/status/1762858506003050932)

甚至還有直接上 podcast 節目分享 JSR 的特性，真的是宣傳滿滿阿，做到這樣應該也是足夠了吧 😃（這應該是近期 Deno 最大的開發專案了吧？）

[https://www.youtube.com/watch?v=dHfZiqVWVhk](https://www.youtube.com/watch?v=dHfZiqVWVhk)

# 正式開啟藍天宇宙！😎

最近終於開放的 Bluesky，看起來腳步並沒有要停下來的意思，在日前它們又發佈了一項重磅消息，就是現在起所有人都可以運行自己的 instance 加入藍天宇宙啦！目前看來是早期測試的版本，專案叫 PDS（Personal Data Server）有興趣的可以直接到 [Github repo](https://github.com/bluesky-social/pds) 上去看看，官方很貼心的提供了很友善的版本可以無痛佈署 & 跑起。

![src: [https://bsky.app/profile/bsky.app/post/3klzn456sls2w](https://bsky.app/profile/bsky.app/post/3klzn456sls2w)](../assets/網路黑手的呢喃 #44 - Untitled 6.png)

src: [https://bsky.app/profile/bsky.app/post/3klzn456sls2w](https://bsky.app/profile/bsky.app/post/3klzn456sls2w)

當然因為是早期測試的版本，所以它們目前不保證向後相容，然後目前資料轉移也只支援單向（Bluesky → self-hosted），所以可能你的資料不能保證之後能完整轉移回 bluesky（簡單說就是一切都可能爆炸啦 😆），所以歡迎勇敢的測試者加入！

詳細的內容可以參考開發者文件 - [Early Access Federation for Self-Hosters](https://docs.bsky.app/blog/self-host-federation)。

### 還有對開發者超級友善的消息！

雖然 #BlueSky 比起其他類 SNS 對於開發者的態度真的是好上不止一截而已（不用急著對號入座，就是大家都知道的其他那些 😂），不過看到最近的一則公告還是被驚豔到了，BlueSky 官方宣佈了針對第三方開發者的贊助方案，雖然金額不算很多，不能針對第三方開發者有這樣的行為，應該已經算是前無古人後來來者了吧，已經有作品的開發者都可以去申請看看喔。⬇️

[Announcing AT Protocol Grants | Bluesky](https://docs.bsky.app/blog/atproto-grants)

# Rust 最近又在鬧事了（稱讚意味 😆）

雖然好像沒什麼重磅消息，但是 Rust「掂惦吃三碗公」的習慣仍然沒變，仍然不斷在各大領域、企業中開疆闢土中。Cloudflare 這個也是為眾開發者所知的服務，也是 Rust 的愛用者之一，最近又丟出一個有趣的東西啦！

其實這個 pingora 的專案，在[幾年前就提過](https://blog.cloudflare.com/how-we-built-pingora-the-proxy-that-connects-cloudflare-to-the-internet-zh-tw)了，不過這次 Cloudflare 算是正式開源它，這個身為 nginx 的競品，在承受過 Cloudflare 量級的壓測之下，應該的確值得大家花點眼球來研究一下🕶️，不過嫌整理太麻煩的話，已經有大大幫大家整理好完成的開發脈絡囉，可以跳轉此文 → [**【Rust 研学】Cloudflare 开源最强网络框架 Pingora](https://mp.weixin.qq.com/s/q6S5qP10VOmqb147PFaZJQ)。**

![src: [https://twitter.com/vaniusrb/status/1762825201526374540](https://twitter.com/vaniusrb/status/1762825201526374540)](../assets/網路黑手的呢喃 #44 - Untitled 7.png)

src: [https://twitter.com/vaniusrb/status/1762825201526374540](https://twitter.com/vaniusrb/status/1762825201526374540)

除了上面的 pingora 之外，一直還常見的 JS toolchain 又出現一個用 Rust 撰寫的新品了，就是下面提到的 [**Rolldown**](https://github.com/rolldown-rs/rolldown)。大家看到是 Vue 的龍大應該也差不多猜出應該跟 Vue 生態圈有關，就是知名建構工具 Vite，其中處理打包的這部分，之後就會由 Rolldown 來接手處理。想必工具越好越快，各位開發者就越開心啦！（除了 DHH 之外，[我絕對沒有在偷臭](https://world.hey.com/dhh/you-can-t-get-faster-than-no-build-7a44131c) 😂）

![src: [https://twitter.com/youyuxi/status/1766014404666245582](https://twitter.com/youyuxi/status/1766014404666245582)](../assets/網路黑手的呢喃 #44 - Untitled 8.png)

src: [https://twitter.com/youyuxi/status/1766014404666245582](https://twitter.com/youyuxi/status/1766014404666245582)

# WebAssembly 的腳步沒有停下來過

### 怎麼又來一個 Jco

每每看到 Bytecode Alliance 有新文章總是會看一下，畢竟身為 WebAssembly 的領導地位，丟出來的東西都可能牽動接下來的變動，這次看到 Jco 就知道應該是什麼新工具，果然大 JS 還是不會被拋棄的啦（什麼結論 😅）

[Announcing Jco 1.0](https://bytecodealliance.org/articles/jco-1.0)

> **JavaScript toolchain for working with [WebAssembly Components](https://github.com/WebAssembly/component-model)

— A Bytecode Alliance project**
> 

看專案介紹應該就知道了吧，之前提過 WebAssembly Components 的重要功能就是提供各語言所編譯出來的元件之間的互通性，所以這個工具就是可以讓你在 JS 裡面呼叫各語言編譯出來符合 WebAssembly Component 規範的函式庫。

其實看了之後想到 WebAssembly Component 這個方式好像也可以拿來當成 Node.js addons 的一種方式，所以之後 Node.js 應該會有 N-API、FFI，然後就是 WebAssembly 三種方式來跟 native library 對接，不知道有沒有誰測試過哪個會比較快。😎

### 甚麼都要編譯成 WebAssembly 是嗎？😅

把各種東西編譯成 WebAssembly 似乎也是一種火力展示，所以看到下面這個專案出現，好像也沒那麼奇怪了—這次輪到資料庫 Postgres 啦！（不過老實說 [SQLite 之前就已經作過了](https://sqlite.org/wasm/doc/trunk/index.md)，覺得以輕量使用而言，好像 SQLite 就足矣，想不到什麼特別情境會需要用到這個 😅）

[https://github.com/electric-sql/pglite](https://github.com/electric-sql/pglite)

# 引領風潮的 ML

### 世界正朝向無法理解的方向前進 #誤

終於出現了聊天型的 AI 了，雖然大家應該不會太驚訝，畢竟我們早就有夥計跟阿斯拉了阿 #特大誤

看著跟電影「雲端情人」（[HER](https://www.youtube.com/watch?v=dJTU48_yghs)）相類似的情境出現也是滿微妙的，雖然實用度應該會差距很大，不過誰知道照目前這種發展速度下去，再來個五～十年之後，會不會真的人手一 AI，大家以後跟 AI 講話的機率比起真正的人更加頻繁了呢 😅

[https://www.youtube.com/watch?v=b1X0aBEM5p8](https://www.youtube.com/watch?v=b1X0aBEM5p8)

### 家用 AI 機

最近無意見看到推友[提到這個](https://www.nvidia.com/zh-tw/autonomous-machines/embedded-systems/jetson-nano/)，才警覺沒想到 NVidia 居然已經把腦筋動到桌上機這塊了，這樣之後開發者就可以自買自架自訓練了嘛（真是錢坑補不完）。

![src: [https://twitter.com/yetone/status/1762055882429624727](https://twitter.com/yetone/status/1762055882429624727)](../assets/網路黑手的呢喃 #44 - Untitled 9.png)

src: [https://twitter.com/yetone/status/1762055882429624727](https://twitter.com/yetone/status/1762055882429624727)

# **網路是個好東西**

### 這是 Move fast & break things 的實例嗎？🤣

不過因為這個事件才會出現 Reactjs，這應該算是好事吧（是吧 😳）

[https://twitter.com/zmx/status/1763203221554864327](https://twitter.com/zmx/status/1763203221554864327)

### 鳥山明老師 RIP 😭

陪伴許多人的鳥山明老師日前因病離開了，就算不是他的粉絲也一定看過他的作品，感覺死亡也漸漸逼近到自己成長的這一代了，大家都要好好照顧自己的身體阿～

[https://twitter.com/animesvibes__/status/1765996248115400837](https://twitter.com/animesvibes__/status/1765996248115400837)

### 沒想到我們也即將可以看到 Vault 啦！

想不到連 Fallout 也被改編成影集啦，雖然之前好像有瞄到新聞，不過預告放出來的時候還是大驚，2024/04/12 就要跟大家見面了！

雖然電玩改編還是讓人怕怕的，然後之前 Amazon 執導的 The Lord of the Rings 好像評價也是 😅，希望出來的時候不要讓廣大電玩迷失望啊（遙望廢寢忘食的那段時光）66我也經常有這種感覺 😅

[https://twitter.com/falloutonprime/status/1765753298533949843](https://twitter.com/falloutonprime/status/1765753298533949843)

[https://www.youtube.com/watch?v=0kQ8i2FpRDk](https://www.youtube.com/watch?v=0kQ8i2FpRDk)

### 我也經常有這種感覺 😅

[https://twitter.com/EryouHao/status/1763109065256005930](https://twitter.com/EryouHao/status/1763109065256005930)

### 到底是誰這麼ㄎㄧㄤ啦

[https://twitter.com/GoldenKnife2/status/1762722056762978448](https://twitter.com/GoldenKnife2/status/1762722056762978448)

### 既視感，但我是指所有的雲端服務 😂

[https://twitter.com/IroncladDev/status/1762127018072662204](https://twitter.com/IroncladDev/status/1762127018072662204)