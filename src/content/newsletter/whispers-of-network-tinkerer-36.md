---
title: "網路黑手的呢喃 - #36"
date: "2023-09-20"
description: "P.S. Jarred 是我见过的最不睡觉的老哥了... 一周工作 90 小时... 恐怖如斯…"
tags:
  - AI
  - Deno
  - Newsletter
  - Node.js
  - bun
---
Bun 1.0 終於出爐、例行的 Deno/Node.js 新東西更新、Fermyon 這次也搭上 AI、Verce、AI、老人講古，當然少不了還有網路好東西！

---

# 終於問世 Bun 1.0

![](https://www.youtube.com/watch?v=BsnCpESUEqM)

Bun 終於釋出他們一個穩定的大版號了（1.0）🎉。

雖然 JS runtime 已經多到再多一個新的也不意外的境界了，不過 Bun 還是有其特殊之處，首先應該是它經常拿出來展示的 - [**Fast**](https://bun.sh/)。

![src:[https://twitter.com/kalanyei/status/1701086352006385938](https://twitter.com/kalanyei/status/1701086352006385938)](../assets/網路黑手的呢喃 #36 - Untitled.png)

src:[https://twitter.com/kalanyei/status/1701086352006385938](https://twitter.com/kalanyei/status/1701086352006385938)

剛好看到有推友整理到這篇文章，裡面也提到為什麼基於 Zig/JSC 的 Bun 能比起隔壁棚的競品更快，除了一小部分技術桟的差別之外，其實更多的是小地方一點一點的優化累積起來的成效。

***還有不睡覺的主開發者 #誤*** 🤣

> P.S. Jarred 是我见过的最不睡觉的老哥了... 一周工作 90 小时... 恐怖如斯…
[https://www.zhihu.com/question/541820800](https://www.zhihu.com/question/541820800)
> 

不過除了很猛的 core team 持續不斷的優化之外，它其實也作了一些很不錯的抉擇

### 1. 針對模組相容的作法，簡單卻讓人印象深刻。

近年在 JS 生態最讓人頭大的應該就是兩套不相容的模組系統了，應該說這個是 JS 界的 python2 應該不會有人反對吧😓。標準的 ESM，以及跟著 Node.js 崛起的 CJS，也正因為如此帶給開發者很多的麻煩，光是這個議題關係了 `js、mjs、package.json -> type` 等，在以往要嘛是 All-in ESM，不然就是待在原本的 CJS，或是透過[工具](https://github.com/egoist/tsup)一次讓模組產出相容各自的格式。

但 Bun 決定走最大程度的相容，所以就跟下圖一樣，你可以同時使用兩種不同的格式，Bun 則會幫你處理相容的問題，簡單暴力。（無論是 Node.js 或是 Deno 都可能是為了遵守協定而走了不同的路線，但對開發者而言，簡單方便才是最受大家青睞的方案👍）

![Untitled](../assets/網路黑手的呢喃 #36 - Untitled 1.png)

## 2. 頗威的 FFI 還有 Plugin API

後面會帶到 FFI 的東西，所以如果不知道這是什麼可以跳到下一段，目前 Node.js 還沒這種呼叫 native lib 的方式，不過 Deno/Bun 跟其他許多語言都有支援這種呼叫方式。不過 Bun 還有另一個 Plugin API 的功能，其中有個就是可以撰寫自定義的 [Loader](https://bun.sh/docs/runtime/plugins#loaders) 的功能，然後你就可以[作到像下圖一樣的效果](https://twitter.com/jarredsumner/status/1681616846938841088)，直接在 JS/TS 檔案裡面呼叫 native code。

![Untitled](../assets/網路黑手的呢喃 #36 - Untitled 2.png)

當然還有不少特點，譬如說內建 package manager & bundler 等功能，讓開發的體驗更好不再需要東抓西找其他的套件才能開始開發。跟 Deno 初期不講求完全相容於 Node.js（不過後來還是回來作相容了😅），Bun 一直強調自己是 drop-in replacement，也就是期待可以無縫直接替換原有的 Node.js 開發環境，應該是它們希望達到的目標。看起來這個走向受到更多開發者接受。雖然才剛發布 1.0 但已經引起許多開發者的注意，可以期待它們後續發展。

### Bonus - 雲端平台的評測

在收尾前看到果然已經有人拿去測試 Bun 在 severless 上的效能如何，可以看到目前在 CPU-bound 的測試有明顯的優勢，一般的 API 則跟 Node.js 差不多，不過 Cold-start 則是明顯慢了許多。這邊作者也提及應該是 AWS 還沒針對 Bun 進行優化，所以 Cold-start 這塊才會這樣不理想的表現，不過隨著後續的優化應該會有改善。

> **Serverless Bun vs Node: Benchmarking on AWS Lambda**
[https://medium.com/@mitchellkossoris/serverless-bun-vs-node-benchmarking-on-aws-lambda-ecd4fe7c2fc2](https://medium.com/@mitchellkossoris/serverless-bun-vs-node-benchmarking-on-aws-lambda-ecd4fe7c2fc2)
> 

看來 Bun 的後勢看漲阿，持續留意！😎

# Deno 最近動作頻頻 😄

### Deno jupyter?

無間間看到這個即將釋出的功能，就是針對 [Jupyter notebooks](https://zh.wikipedia.org/zh-tw/Jupyter) 的支持。Jupyter 應該不用說大家都知道了，因為它可以直接在網頁上執行程式的功能，一般常用來作為技術文章的撰寫呈現或是拿來作 playground 的方便工具。另外 Machine learning 也蠻常用到到這個工具，或許 Deno 希望透過這個功能可以踏入 ML 的領域也未知。

[https://github.com/denoland/deno/pull/20337](https://github.com/denoland/deno/pull/20337)

不過可能因為自己本身不算是這個功能的受眾，覺得這有點小偏題，畢竟在 Bun 強勢崛起之後，好像有更多值得先實作或優化的東西😅，而且一直延遲的 2.0 也不知道是不是因為受到這些的影響。

### Deno Deploy 終於支持 npm specifiers 啦!!

***真的等好久阿***🥹

Deno 終於在近期釋出，Deno Deploy 已經開始支援 `npm specifiers` 的功能啦！所以現在在 Deploy 上面的專案，想引用 npm 生態的模組大部分應該都可以直接透過 `npm:xxxxx` 的方式引入使用了。

![ src: [https://twitter.com/deno_land/status/1699478475240005991](https://twitter.com/deno_land/status/1699478475240005991)](../assets/網路黑手的呢喃 #36 - Untitled 3.png)

 src: [https://twitter.com/deno_land/status/1699478475240005991](https://twitter.com/deno_land/status/1699478475240005991)

# 這次多講一些 Node.js

### 果然有競爭就不一樣😄

看到這個最近出現在 Node.js 的提案，不禁莞爾一笑。真的有競品存在還是有它的好處的，目前百花爭鳴的 JS 生態，許多 runtime 本身就提供一個儲存的介面可以使用，如 Deno 的 `KV`，還有 Bun 的 `bun:sqlite`。

現在看到 Node.js 也有開發者提出了類似的功能，希望大前輩也能加上類似的功能。（不知道有沒有機會通過阿！）

[https://github.com/nodejs/node/issues/49663](https://github.com/nodejs/node/issues/49663)

### 還沒完，還有 FFI

你以為只有上述的 KV API 嗎？那你可太輕看 Node.js 社群的反應速度啦，目前 Deno/Bun 都有支援的 FFI(Foreign Function Interface）也已經在討論中了（看起來有可能會在 [v21](https://github.com/nodejs/node/pull/46905#pullrequestreview-1618682458) 中加入）

[https://github.com/nodejs/node/pull/46905](https://github.com/nodejs/node/pull/46905)

不過前陣子看到 Bun 放出這個範例，透過 Plugin API + FFI 可以做到直接引用原檔，不用再手動先編譯好 lib 之後再引用，雖然類似語法糖而已不過能整合到這樣的話才更方便啊！🤞

![](https://x.com/jarredsumner/status/1681608754067046400?s=20)

### 開源維護者值得我們的尊重

最近因為 Bun 的問世，重新讓 JS 生態又活躍起來，然後大家看到 Bun 那比起競品好上許多的效能跟整合不少酷酷的功能（可以參考上面😆)當然也嗨了！

不過其中有些人，卻開始攻擊或是用一些很無禮的語句來批評 Node.js 專案或維護者，也導致有些維護者因而退出了。個人覺得我們當伸手牌的人，有什麼資格去攻擊那些花費自己寶貴時間的人，尤其你可能只是出一張嘴不頭疼的人。如果你真的看不下去想做些甚麼，發 PR、提出 Proposal 來與其他開發者討論有沒有改善的可能，都比起出一張嘴來得有用。

![](https://twitter.com/siygle/status/1702346443208745194)

# WebAssembly + Machine Learning!

不能不說 Fermyon 在目前這波 WebAssembly 真的是一個很引人注目的存在，除了自己開發了網路服務的雲端平台 Spin 之外（當然是基於 WebAssembly😄），也是不斷優化它的功能，如果是老讀者的話應該也有印象這個名稱已經出現好幾次了。

![src: [https://twitter.com/fermyontech/status/1698988841149792598](https://twitter.com/fermyontech/status/1698988841149792598)](../assets/網路黑手的呢喃 #36 - Untitled 4.png)

src: [https://twitter.com/fermyontech/status/1698988841149792598](https://twitter.com/fermyontech/status/1698988841149792598)

***最近它們又有[新動作](https://www.globenewswire.com/news-release/2023/09/05/2737010/0/en/Fermyon-First-to-Make-Enterprise-AI-Apps-100x-Faster-to-Run-With-Game-Changing-WebAssembly-Compute-Innovation.html?utm_content=263108179&utm_medium=social&utm_source=twitter&hss_channel=tw-1444404500437995520)啦！***

這次也搭上了 AI 這個 buzzword 囉～

[https://github.com/fermyon/ai-examples](https://github.com/fermyon/ai-examples)

目前看範例跟文件，他們是支援 Meta 開源的 Llama2 & CodeLlama 模型，跟之前一樣它們也支援了本地開發的方式（不過跑 inferencing 要看機器夠不夠力，而且還需要下載訓練的模型資料），根據它們的說法，本地執行會切換較低品質的結果以增加執行速度（不過還是很慢 😅）

> When developing locally, Spin takes advantage of an inference optimization technique called quantization, which lets you execute the inferencing operation on a model with lower precision, which can speed up the inferencing operation
[https://www.fermyon.com/blog/introducing-fermyon-serverless-ai](https://www.fermyon.com/blog/introducing-fermyon-serverless-ai)
> 

不過當你跑完開發之後，只要 `spin cloud deploy` 就可以直接上雲，然後切換到 Fermyon 的架構了（它們是跟 [Civo](https://www.civo.com/navigate) 合作搭建這套執行的環境）

# Vercel 又推新東西啦🙌

雖然之前酸過 Vercel 🤣，不過不能不承認他們的確是網路服務的領頭羊，除了基本的技術底子之外，他們對科技運用的敏銳嗅覺也是很讓人佩服，常常驚呼於從他們放出的新服務、新產品。

![Untitled](../assets/網路黑手的呢喃 #36 - Untitled 5.png)

這次的 [v0.dev](http://v0.dev) 是他們最近放出的新服務，就是把 AI 跟 UI 作了完美的結合，讓開發者可以透過描述自己需要的 UI，透過 AI 直接產生元件給你（當然包含[程式碼](https://v0.dev/t/0W13RkH)一併提供給你！），真的是太方便了，好想趕快嘗鮮阿🤩

[**火力展示一下](https://v0.dev/t/a0plNNT) ⬇️**

![src: [https://twitter.com/MichelleBakels/status/1703775584025752002](https://twitter.com/MichelleBakels/status/1703775584025752002)](../assets/網路黑手的呢喃 #36 - Untitled 6.png)

src: [https://twitter.com/MichelleBakels/status/1703775584025752002](https://twitter.com/MichelleBakels/status/1703775584025752002)

# 手語翻譯也出現了！

真的是人才輩出阿，不過這個世界需要多一些這樣的人，如此一來，就算之後不懂手語也能夠互相溝通了🎉

![](https://twitter.com/xiaohuggg/status/1703702454842581497)

# People change, and we should celebrate it!

*這個跟開發新聞沒有關係，就當是老人講古吧*😅

無意間看到有網友在 Hacker News 上面問了這個問題：[**What Happened to TJ Holowaychuk?**](https://news.ycombinator.com/item?id=37531423)，一瞬間千頭萬緒就順手發了這篇推文。

![src: [https://twitter.com/siygle/status/1702934627332321744](https://twitter.com/siygle/status/1702934627332321744)](../assets/網路黑手的呢喃 #36 - Untitled 7.png)

src: [https://twitter.com/siygle/status/1702934627332321744](https://twitter.com/siygle/status/1702934627332321744)

或許有年輕網友已經不知道 TJ 是誰了😅。不過如果接觸 Node.js 生態有點年紀的開發者，應該都知道這位[產能超高的開發者](https://github.com/tj)🙌，許多知名的 Node.js 模組都是出自他的手，譬如 [Express](https://github.com/expressjs)、[Koa](https://github.com/koajs)、Commandjs等，族繁不及備載。如果說 Node.js 初期是隨著 TJ 的許多模組一起成長的也不為過吧。

不過自從他的雲端開發新創 [Apex](https://github.com/apex) 沒有成功之後，他就漸漸消失在開發者的圈子了，目前頂多就在 IG 上可以看到他的[攝影作品](https://www.instagram.com/tjholowaychuk)而已。一直都覺得如果 Node.js 還能有這位超強開發者該多好，其實一路從 Node.js 0.x 走到現在快要 20.x 了，除了 TJ 之外也有很多之前開發者逐漸消失了，有些可能是轉移陣營不再開發 Node.js、有個可能不在從事開發的工作了，甚至也有些已經從這個世界上消失了😢。

雖然有點感慨，不過看到這位標題這句網友的回覆，也總算是能釋懷了，或許在未來的某個時間點，我們又可以因著某個有趣的東西再次相遇～

*其實除了 TJ 之外，有另一位當時也是戰力很強的 [substack](https://substack.net/) 也消失了，連 [Github Profile](https://github.com/substack) 都砍掉了*😢

![](https://www.youtube.com/watch?v=faxfLmChjVQ)

# 網路是個好東西

### 太過真實不忍直視🤣

![src: [https://twitter.com/DavidKPiano/status/1700672267863077119](https://twitter.com/DavidKPiano/status/1700672267863077119)](../assets/網路黑手的呢喃 #36 - Untitled 8.png)

src: [https://twitter.com/DavidKPiano/status/1700672267863077119](https://twitter.com/DavidKPiano/status/1700672267863077119)

### Good Old Days😢

一去不復返的好日子，為什麼這個世界越來越糟…

![](https://twitter.com/ghosTM55/status/1699069439713628565)

### 我也是這麼覺得😅

#有錢就好了🤑

![src: [https://twitter.com/tw111111111111/status/1701240469437452471](https://twitter.com/tw111111111111/status/1701240469437452471)](../assets/網路黑手的呢喃 #36 - Untitled 9.png)

src: [https://twitter.com/tw111111111111/status/1701240469437452471](https://twitter.com/tw111111111111/status/1701240469437452471)

### 太過聰明😎

![](https://twitter.com/tw111111111111/status/1701201689712459945)

### 人中之龍！

![](https://twitter.com/hsins_/status/1702231069293232198)

### 望週知

現在真的很難判斷到底是 Google 比較爛，還是那個叫 X 的東西。🤷

![](https://twitter.com/thecat/status/1701378099794055328)

### 窮人版機械鍵盤

我只買得起這個了😅

![](https://twitter.com/jedisct1/status/1699312091620909407)