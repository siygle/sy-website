---
title: "網路黑手的呢喃 - #21"
date: "2022-10-27"
description: "滿滿的大 Node.js！WebAssembly 緩步成長中、讓 Readme 動起來，一定要有 drama 啦，以及持續不務正業的網路好東西🤣。"
tags:
  - Cloud
  - News
  - Newsletter
  - Node.js
  - WebAssembly
---
> 滿滿的大 Node.js！WebAssembly 緩步成長中、讓 Readme 動起來，一定要有 drama 啦，以及持續不務正業的網路好東西🤣。
> 

---

## 這次 Node.js 有不少東西 😆

### Node.js 19

上次提到的 Node.js 19 釋出，也正式開始了新的大版號，等一會果然就會有簡單的說明文了 ，有興趣看看新版本又會有什麼有趣的東西的開發者，不妨看看。

[https://twitter.com/openjsf/status/1582401872903618560](https://twitter.com/openjsf/status/1582401872903618560)

### 然後 LTS 正式切換到 18 版本啦 🎉

v18.20.0，跑起來！（如果忘記 v18 有什麼新功能的話，可以跳轉[這邊](https://chat.sylee.dev/2022/04/21/%e7%b6%b2%e8%b7%af%e9%bb%91%e6%89%8b%e7%9a%84%e5%91%a2%e5%96%83-12/)），不過光是支援 fetch 就值得啦，終於不用再裝一些第三方的 http client 套件啦～

[https://twitter.com/nodejs/status/1585029291380977665](https://twitter.com/nodejs/status/1585029291380977665)

其他公有雲應該也都會在不久加上對 v18 的支援：

- MS家 - [Azure](https://azure.github.io/AppService/2022/10/12/New-Language-Stacks-available-on-AppService.html)
- G家 - [GCP](https://github.com/GoogleCloudPlatform/cloud-builders/commit/e39d4970f8d7dc618e847da9e3220513874550e3)
- 還有下面的 AWS 🎉👍

[https://twitter.com/Sarutule/status/1585263998940872704](https://twitter.com/Sarutule/status/1585263998940872704)

### 是要持續擴編 bulti-in modules 嗎？

- [Proposal: Support `.env` files](https://github.com/nodejs/node/discussions/44975)
- util: add MIME utilities #[21128](https://github.com/nodejs/node/pull/21128)

這邊兩個最近被提出的 PR 也蠻有趣的，看來之後 [mime](https://www.npmjs.com/package/mime) 跟 [dotenv](https://www.npmjs.com/package/dotenv) 又可以準備退休了😎。感覺現在 Node.js 走向跟之前不太一樣，目前許多開發高度相關的功能，或許都有可能會加入原生支援（看起來受到 Deno、Bun.js 這類後起者不少影響呢）。

### single executable application! #這夢太美

[https://twitter.com/RaisinTen/status/1582007164087898112](https://twitter.com/RaisinTen/status/1582007164087898112)

### 感謝許多人的貢獻，才能發展良好

Node.js 的生態跟社群一直是蠻好的（雖然偶而會出現一些 drama 😆），其背後有許多人維護、貢獻才造就這樣的生態發展，真的是非常感謝。

這場 lightning talk 就是由其中一位核心維護者（之前 npm 專案的 leader）來分享許多我們可能不知道 Node.js 的 working group，以及他們各自負責的究竟是什麼。

[https://www.youtube.com/watch?v=csE5rFWj6IM](https://www.youtube.com/watch?v=csE5rFWj6IM)

## WebAssembly 默默發展中

已經喊了好幾年的 WebAssembly，雖然一般使用者沒有辦法明顯的體會到它的存在，但其實也默默滲入許多網路相關的應用，基本的工具鏈跟基礎架構，也慢慢茁壯中，想了解 2022 年的今日，到底 WebAssembly 的發展現況，可以參考[這篇文章](https://sapphireventures.com/blog/whats-up-with-webassembly-computes-next-paradigm-shift/)，內容非常詳盡。

Docker 最近也發布將在不久的新版開始支援 WebAssembly（它是透過跟 [wasmedge](https://wasmedge.org/) 合作來實現對其的支援，後者為 WebAssembly 其中一個知名的 runtime。）

[https://twitter.com/ajeetsraina/status/1584774772181069824](https://twitter.com/ajeetsraina/status/1584774772181069824)

另外也有面向 FaaS 類型的產品，譬如最近剛拿到融資的 Fermyon，這些遍地開花的嘗試，都讓我們可以期待未來 WebAssembly 的發展。

[https://twitter.com/fermyontech/status/1584863246150172672](https://twitter.com/fermyontech/status/1584863246150172672)

## 看到文件範例想嘗鮮？不再是問題啦！

無意間看到這個猛猛的工具，一般我們看 repo 或有趣的專案時，通常 readme 都會有一些簡單的範例，如果想試玩一下都需要花一點時間 boostrap 才能，現在透過這個 vscode plugin 就可以直接跑起來啦 🙌（它也有提供 CLI 工具）

*它實際行為應該是解析 markdown 文件裡面的命令指令後執行，[雲平台目前是支援](https://runme.dev/) `vercel` & `deno deploy`。*

[https://twitter.com/azu_re/status/1585239696015097856](https://twitter.com/azu_re/status/1585239696015097856)

## 一定要有 drama！

繼之前提過 Bun.js 之後，這個特別有戲的新創專案前陣子又上了 hacker news，原因是有一名 Deno 員工跳出來指責 Bun.js 用的效能測試有偏頗跟使用錯誤設定，之前他們有試圖在 issue 裡面提及，但似乎對方依然故我，所以才寫了這篇（看來是很氣😆）（不過原文後來刪除了，可能不想引起太多的爭端，有興趣可以看 [Archive](https://web.archive.org/web/20221015002123/https://gist.github.com/littledivy/b9351c3ccf8ab99f7e14461db37044dc)。）

我個人是蠻佩服 Bun.js 作者的超高產能，生態圈能互相激勵也是蠻好的一件事，不過老是跟 drama 有關聯，多了也會讓人有些刻板印象...

[https://twitter.com/siygle/status/1580788032537767936](https://twitter.com/siygle/status/1580788032537767936)

---

## 網路是個好東西

### 世界就是這麼不公平 🤣

[https://twitter.com/junairez/status/1579778559174135809](https://twitter.com/junairez/status/1579778559174135809)

### 一鍵匯入！

剛被收掉的 Figma 「目前」看起來沒受太多影響，依然是 UI/UX 工具穩鐺鐺的首選工具，其支援許多好用的 plugins 也是一大特點，像下面這個 html.to.design 就是很棒的火力展示 （這樣釣魚網站會不會更好作了 😄）

[https://twitter.com/hzlzh/status/1581191177943932929](https://twitter.com/hzlzh/status/1581191177943932929)

### 歷史總是不斷循環

DHH 大大每次發文總是可以引起許多討論，這次提到他們自家決定搬回 private cloud 以及為什麼會這麼決定，所以現在又要重新繞一次了嗎？🤣

不過論點應該大家都能理解，還是規模大到一定程度，當然回來自家處理能省下更多的費用，不過一般的小企業跟新創，應該還是直接用雲平台還是比較方便&便宜（養人維護是很貴滴）

[https://twitter.com/novoreorx/status/1582973319770361859](https://twitter.com/novoreorx/status/1582973319770361859)