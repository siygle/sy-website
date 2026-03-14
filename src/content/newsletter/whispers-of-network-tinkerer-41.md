---
title: "網路黑手的呢喃 - #41"
date: "2024-01-18"
description: "**A fascinating phenomenon in developer tooling is how often programming language paradigms are cou…"
tags:
  - AI
  - Deno
  - Newsletter
  - Node.js
  - WebAssembly
  - bluesky
  - bun
---
Web 例行更新：Node.js、Deno 都持續進化，不過 Bun 真的是越來越猛了、私心的 BlueSky 近期更新、CDK 也推出 GUI 介面的工具、2024 is the year for WebAssembly？Zig 最近丟出它們的財務報告才知道它們這麼酷，還有當然少不了 ML 跟網路好東西啦！

---

# **Web 生態圈例行更新**

### 預設開啟 Corepack？

看到這個出現在 Node.js 討論中，或許還有人不知道 Corepack 是什麼（畢竟不是主要常用的功能），Corepack 其實是基於 Node.js ~~奢侈的~~生態出現的 😆，因為太多套件管理器，造成使用上的問題，如「[專案用了 yarn 我卻是習慣用 pnpm](https://nodejs.org/api/corepack.html#enabling-the-feature)」、「[別人用的版本跟我不一樣](https://nodejs.org/api/packages.html#packagemanager)」等等這類的問題，都可以透過 Corepack 來解決。

不過因為它需要先啟用才能實際跑起來，這個提案才會出現，希望能變成預設開啟的模式。

觀望，畢竟我也不太會用到這類的功能，不過覺得 JS 生態老是不斷重造輪子有點煩人了，光是個套件管理器就有好幾家產品（所以才會出現 Corepack 這種東西），就不能像 Rust 一樣好好用 Cargo，大家一起來把不好的地方修正就好嗎？（老了，喪失動力只想好好躺平 😅）

![src: [https://twitter.com/styfle/status/1745578786207281454](https://twitter.com/styfle/status/1745578786207281454)](../assets/網路黑手的呢喃 #41 - Untitled.png)

src: [https://twitter.com/styfle/status/1745578786207281454](https://twitter.com/styfle/status/1745578786207281454)

### Deno 真的要另推一個 package manager？

在最近剛釋出的 [Deno 1.39.3](https://github.com/denoland/deno/releases/tag/v1.39.3) 裡面看到一個有趣的東西 ⬇️

[https://github.com/denoland/deno/pull/21873](https://github.com/denoland/deno/pull/21873)

之前在 Deno 2 的消息中有提到一個關鍵字 - JSR，看來的確是印證了大家的猜測，就是原本 Deno 支援的 npm specific 的擴充，然後順著這個 RP 追下去，就可以看到[討論到 package manager](https://github.com/denoland/deno/pull/20517) 的部分。（雖然我到現在還是不太明白走這步的意圖是什麼 😅），期待看後續有沒有更多關於這方面的更新消息。

### Bun 也是一直有有趣的改進

最近看到 Bun 貼出下面這個即將加入的新功能，看起來也是跟 [import attributes](https://github.com/tc39/proposal-import-attributes) 有些關聯，之前 Bun 比起 Deno 的定位感覺更明確，它們就是要成為 [Node.js drop-in replacement](https://twitter.com/jarredsumner/status/1747355392118788472)，所以 Node.js 生態全相容、加上包好的相關工具鏈，及一些有益於開發的功能，看起來應該是它們的目標。

印象中之前 Bun 開發文件有提到 [transpiler](https://bun.sh/docs/api/transpiler)，說不定這類功能都依賴它快速實作出來（看 [RP](https://github.com/oven-sh/bun/pull/8178/files) 應該是？），再次體認到底層 API 設計的重要😄。

![src: [https://twitter.com/jarredsumner/status/1746892626618671322](https://twitter.com/jarredsumner/status/1746892626618671322)](../assets/網路黑手的呢喃 #41 - Untitled 1.png)

src: [https://twitter.com/jarredsumner/status/1746892626618671322](https://twitter.com/jarredsumner/status/1746892626618671322)

另外這個是剛出爐沒多久的 1.0.24 版本加上的功能，可以直接用 js 來撰寫 [shell script](https://bun.sh/blog/the-bun-shell) 的功能（對這項功能有興趣可以參考連結的官方文），不能不說對近對 Bun 有點改觀了，他們真的是猛！不僅開發戰力非常強大，感覺他們對目標也很明確，許多新加上的功能都是圍繞著這個目標在建構的，真的覺得 Deno 再不趕快提起直追，等 Bun 越來越穩定之後可能差距會被拉得更開 😅。

![src: [https://twitter.com/bunjavascript/status/1748587391433253044](https://twitter.com/bunjavascript/status/1748587391433253044)](../assets/網路黑手的呢喃 #41 - Untitled 2.png)

src: [https://twitter.com/bunjavascript/status/1748587391433253044](https://twitter.com/bunjavascript/status/1748587391433253044)

# 私心的 BlueSky 更新報

有自己的天地一個最大的好處，就是想寫什麼就可以寫甚麼 😎

**註：現在 BlueSky 已經支援 public-read 囉，所以不用登入也可以看到裡面的文章啦！*

自從進入選戰期之後，各種假消息充斥似乎大家也見怪不怪了，不過除了剛結束的台灣戰場之外，接下來還有不少地方都會相續舉辦各自的選舉，所以針對假訊息的這件事，其實也是許多媒體人希望改善的部分。然後就很剛好看到 BlueSky 上面有媒體人提到這件事，還特別[寫了一篇文章](https://www.aendra.com/posts/my-top-bluesky-feature-requests-for-2024)來說明，他覺得 BlueSky 哪些特性有助於媒體經營，以及期望 BlueSky 能補齊哪些媒體業眼中看來目前還缺乏的東西。

[@siygle (@sylee.dev)](https://bsky.app/profile/sylee.dev/post/3ki3ptfhk7r2n)

然後不約而同看到身為核心團隊成員的 Emily 也寫了一篇類似的文章，說明目前 BlueSky 有哪些功能有助於媒體面對即將到來的選舉季，能夠如何搭配使用。

[@siygle (@sylee.dev)](https://bsky.app/profile/sylee.dev/post/3kimesxvk6k25)

覺得雖然 BlueSky 目前用戶跟影響力都還非常不足，但可以看出它們真的是想做些什麼，來改善目前網路生態的問題。最近剛好台灣選舉後，帶起了一群政治人物用 Threads 的熱潮，不過個人更希望 BlueSky 能夠順勢而起，因為比起那些商業公司的服務，我還比較相信 BlueSky 才真的有可能做出些什麼改變。🤞

最後追加一件事，[**BlueSky 最近也開始支援 RSS 的功能啦**](https://openrss.org/blog/bluesky-has-launched-rss-feeds)，之後就可以無縫接上 RSS Reader 來追蹤自己喜歡的帳號更新啦（這麼基本的東西，原本 Twitter 也是有的，可惜…，每個人的選擇在無形中都會影響到網路生態的變化！）

# CDK 也推出 GUI 工具啦

之前提過的 [WingLang](https://chat.sylee.dev/2023/07/05/%E7%B6%B2%E8%B7%AF%E9%BB%91%E6%89%8B%E7%9A%84%E5%91%A2%E5%96%83-33#c346f4992ff24831994ca4c28061aa8d) 這個針對雲平台開發而生的有趣專案，其中它們有個蠻有趣的功能，就是可以直接透過 GUI 來設定你的雲架構，看起來好用的東西也會很快被其他人「借鏡」啦。AWS 自家的 CDK 也推出類似的功能，看起來簡化雲端架構，也是各家開發工具有留意到的一塊，說不定很快又會有其他家跟上了。😄

![src: [https://twitter.com/danilop/status/1747661058188214579](https://twitter.com/danilop/status/1747661058188214579)](../assets/網路黑手的呢喃 #41 - Untitled 3.png)

src: [https://twitter.com/danilop/status/1747661058188214579](https://twitter.com/danilop/status/1747661058188214579)

# 2024 is the year for WebAssembly?

#先不要（亂立 flag 是很危險的一件事😅）

這篇由 Fermyon 的創辦人撰寫關於 2024 發展的預測，雖然這種 buzzword 每年都可以看到， WebAssembly 也被「喊聲」了好一陣子了，不過隨著越來越多的標準及元件到位，也逐漸看到越來越多的相關應用出現，說不定真的有機會起飛。

![src: [https://twitter.com/technosophos/status/1743015192873599198](https://twitter.com/technosophos/status/1743015192873599198)](../assets/網路黑手的呢喃 #41 - Untitled 4.png)

src: [https://twitter.com/technosophos/status/1743015192873599198](https://twitter.com/technosophos/status/1743015192873599198)

文章內容可以參考看看，不過內文倒是有個地方很贊同

> **A fascinating phenomenon in developer tooling is how often programming language paradigms are coupled with infrastructure advances.** Java accompanied the web in the 1990s. Python was the big data language as NoSQL-style databases took hold. The Go language boomed alongside the container ecosystem.

[https://thenewstack.io/webassembly-4-predictions-for-2024/](https://thenewstack.io/webassembly-4-predictions-for-2024/)
> 

 通常某語言的崛起都是抓住當時的風潮順勢而起，所以如果能抓住這次 AI 崛起的機會，說不定 WebAssembly 真的也可以如法炮製，展翅高飛！（會不會太樂觀😆）

### Apple 好像也有動作？

對 Apple 的生態圈不是很熟悉，不過也是有大大挖到關鍵字出現了，雖然不太確定它們會怎麼使用，可以期待看看後續。👀

![src: [https://twitter.com/kevinzhow/status/1744628110593761555](https://twitter.com/kevinzhow/status/1744628110593761555)](../assets/網路黑手的呢喃 #41 - Untitled 5.png)

src: [https://twitter.com/kevinzhow/status/1744628110593761555](https://twitter.com/kevinzhow/status/1744628110593761555)

### Chrome 也不落後

Chrome 對於推動 WebAssembly 也是不遺餘力，最近也加上了對 WebAssembly 的除錯功能（不過目前看起來只支援了 C/C++，之後應該會陸續加上其他熱門語言的支持吧？）

[https://twitter.com/jecfish/status/1745875683400687757](https://twitter.com/jecfish/status/1745875683400687757)

# Zig 也是一個酷酷的東西

最近看到不少人提到最近這篇 Zig 基金會列出的 2023 年度的財務報告，其中這段真是讓所以開源貢獻者感到欣慰😄

> Zig Software Foundation is a 501(c)(3) non-profit organization which I am proud to say makes extremely efficient use of monetary resources. Unlike many of our peers, **our primary expense is direct payments to contributors for their enhancements to the Zig project**.

[https://ziglang.org/news/2024-financials/](https://ziglang.org/news/2024-financials/)
> 

真的不開玩笑，它們直接在報告中列出如何運用所以的贊助金額，其中**超過了 66% 的比例**是撥給了對 Zig 專案的貢獻者（如下圖），這種把開源貢獻者列為首要的作法，真的跟一般的組織很不一樣，更別說那些只拿但都不願一些回饋的資本企業了😠。（然後也[有人不意外提到了 Rust](https://bsky.app/profile/jamesmunns.com/post/3kjd7zxpny52e)）

![Untitled](../assets/網路黑手的呢喃 #41 - Untitled 6.png)

HashiCorp 的前創辦人（Mitchell）也是 Zig 的愛用者，他在看到財務報告之後，也身先士卒還號召喜歡這個語言的開發者，可以多多幫助這個專案，他也依循其他贊助者捐了一筆等值的贊助，真的太威！（真希望開源能夠有更正向的經營，不然常常看到很多開源貢獻者不是一窮二白，不然就是身心備受煎熬😢）

![src: src: [https://twitter.com/mitchellh/status/1748011347923935552](https://twitter.com/mitchellh/status/1748011347923935552)](../assets/網路黑手的呢喃 #41 - Untitled 7.png)

src: src: [https://twitter.com/mitchellh/status/1748011347923935552](https://twitter.com/mitchellh/status/1748011347923935552)

最近崛起的 bun，Zig 也是它們的開發鏈之一，所以它們也是固定的贊助者之一喔，讚！👍

![src: [https://twitter.com/jarredsumner/status/1748101961231331589](https://twitter.com/jarredsumner/status/1748101961231331589)](../assets/網路黑手的呢喃 #41 - Untitled 8.png)

src: [https://twitter.com/jarredsumner/status/1748101961231331589](https://twitter.com/jarredsumner/status/1748101961231331589)

*是不是新年度也來找時間玩一下 Zig* 😄

# 新年度仍然要繼續 ML

### 我需要這個酷酷的東西 😆

身為碼農最大的痛苦，應該有一部分開發者可以感同身受吧，寫 commit message 真的是太煩人了，果然我大 ML 就立刻有人想到並實作這類的功能了，現在 vscode 也支援囉 🎉

![src: [https://twitter.com/code/status/1745164198282236295](https://twitter.com/code/status/1745164198282236295)](../assets/網路黑手的呢喃 #41 - Untitled 9.png)

src: [https://twitter.com/code/status/1745164198282236295](https://twitter.com/code/status/1745164198282236295)

### 果然也有人動腦筋到 SQL 上啦

果然所有不是非自然語言的東西，都會準備用 AI 來改善了😄。

![src: [https://twitter.com/xiaohuggg/status/1747226873195794817](https://twitter.com/xiaohuggg/status/1747226873195794817)](../assets/網路黑手的呢喃 #41 - Untitled 10.png)

src: [https://twitter.com/xiaohuggg/status/1747226873195794817](https://twitter.com/xiaohuggg/status/1747226873195794817)

### Meta 也來火力展示

在元宇宙跌了一跤的 Meta，最近在 ML 崛起的世代也是不落人後，不同於 OpenAI 封閉的生態，馬克看起來鐵了心要用開源模型來一決高下。最近他[透過 IG 發表了一連串](https://www.instagram.com/p/C2QARHJR1sZ/)相關的組織調整以及未來的動向（[這邊有大大幫忙翻譯整理了](https://twitter.com/dotey/status/1748120766103609715)😄）

- 整併 AI 研究團隊
- Llama 3 進行中，並要大量採購建構 AI 基礎設施（預計採購 600k H100s，目前單價是 35k 😅，有錢人就是任性，現在進場 NVDA 是否太慢了）
- 持續 Smart Glass 的投資（這邊難得跟 Mark 有類似的想法，其實我也覺得眼鏡才是 AI 時代更好的載體，比起手機或是手持裝置「如最近火紅的 Rabbit R1」，因為它同時可以支援更多的偵測資料，視覺、聽覺等，也相對提供更多的輸入互動介面，蠻期待後續產品的發展🤞。）

[https://www.instagram.com/p/C2QARHJR1sZ/](https://www.instagram.com/p/C2QARHJR1sZ/)

# **網路是個好東西**

### 大推優質的硬體相關頻道

硬體相關的領域不太熟悉，不過自從看到[黃信惠](https://www.youtube.com/@davidhuanglab)這個頻道之後，就變成忠實觀眾了，每次都可以從獲得不少硬體開發的小知識，大推！

[https://www.youtube.com/watch?v=qzTYrj30u-c](https://www.youtube.com/watch?v=qzTYrj30u-c)

### 希望各大餐廳都能考慮加上這個選項

一行字解決人生中最大的難題😂

![src: [https://twitter.com/Cldeop/status/1748223511364043169](https://twitter.com/Cldeop/status/1748223511364043169)](../assets/網路黑手的呢喃 #41 - Untitled 11.png)

src: [https://twitter.com/Cldeop/status/1748223511364043169](https://twitter.com/Cldeop/status/1748223511364043169)

### 也想被這種攻擊

最近網路上暴戾之氣太重，需要多一些這種力量 #大誤

但是最近真的很愛韓韶禧，是位真性情的女漢子😆

![src: [https://twitter.com/tw_americano/status/1748544318523191728](https://twitter.com/tw_americano/status/1748544318523191728)](../assets/網路黑手的呢喃 #41 - Untitled 12.png)

src: [https://twitter.com/tw_americano/status/1748544318523191728](https://twitter.com/tw_americano/status/1748544318523191728)

### 信仰總是無法即時充值😭

好希望有跟上~~（正確）~~車的一天喔…

![src: [https://twitter.com/kojilin/status/1748512231141396701](https://twitter.com/kojilin/status/1748512231141396701)](../assets/網路黑手的呢喃 #41 - Untitled 13.png)

src: [https://twitter.com/kojilin/status/1748512231141396701](https://twitter.com/kojilin/status/1748512231141396701)

### 我最近也是這麼覺得

大家真的不要去搶什麼門票，待在家裡聽最棒了（轉頭衝刺），特別是 [4/6、4/7](https://www.instagram.com/p/C2KnMYWySCl/?utm_source=ig_embed&ig_rid=340bcb2a-e7a6-4a4c-9bd4-d8f7f0c96ec7&img_index=2) 這週大家一定要好好地待在家裡喔～

![src: [https://twitter.com/taco_0131/status/1747575909086052383](https://twitter.com/taco_0131/status/1747575909086052383)](../assets/網路黑手的呢喃 #41 - Untitled 14.png)

src: [https://twitter.com/taco_0131/status/1747575909086052383](https://twitter.com/taco_0131/status/1747575909086052383)