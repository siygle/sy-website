---
title: "網路黑手的呢喃 - #12"
date: "2022-04-21"
description: "滿滿的 Node.js 18：新功能、prefix-only core modules，還有進行中的 SEA。Netlify 也推出自家的 Edge Functions 以及辨識度超高的 Notio…"
tags:
  - Netlify
  - News
  - Newsletter
  - Node.js
  - Notion
---
> 滿滿的 Node.js 18：新功能、prefix-only core modules，還有進行中的 SEA。Netlify 也推出自家的 Edge Functions 以及辨識度超高的 Notion 設計風格。
> 

---

## Node.js version 18.0.0 問世！

[https://twitter.com/yosuke_furukawa/status/1515283726137106443](https://twitter.com/yosuke_furukawa/status/1515283726137106443)

不過目前也算正式釋出了— [**Node.js 18.0.0**](https://nodejs.org/en/blog/release/v18.0.0/)！新版中加入了哪些新功能都有在[官方文章](https://nodejs.org/en/blog/announcements/v18-release-announce/)中簡介了，除了在前幾期有陸續提到的 [fetch](https://nodejs.org/en/blog/announcements/v18-release-announce/#fetch-experimental)、[test runner](https://nodejs.org/en/blog/announcements/v18-release-announce/#test-runner-module-experimental)、[V8 10 帶來的新功能](https://nodejs.org/en/blog/announcements/v18-release-announce/#v8-10-1)，以及 [Web Streams API](https://nodejs.org/en/blog/announcements/v18-release-announce/#web-streams-api-experimental) 標準的實作，還有許多有趣的東西，也可以參考 Red Hat 撰寫的介紹文— [Welcome Node.js 18](https://www.redhat.com/en/blog/welcome-nodejs-18)（別意外，因為 Node.js 核心開發、維護者中有不少都是出自 Red Hat 呢😙）。

## Prefix-Only Core Modules?

如果有仔細看過上述 18.0.0 的官方文章的人，應該有注意到一個不太一樣的地方，在介紹到新功能 test runner 的時候，它給的範例是像這樣：

```
import test from 'node:test';
```

這部分也是 18 才開始引入的，prefix-only core modules，可以參考下方這篇由開發者撰寫的文章。

簡單地說，就是之後核心模組的引用，都必須使用 `node:xxx` 這種形式（現有的核心模組都有向下相容，所以你還是可以不加前綴的使用，不過新加入的就有這種限制了（目前就是只有 [test](https://nodejs.org/dist/latest-v18.x/docs/api/test.html) 這個模組需要）。

用途呢？一來是便於閱讀，讓開發者可以一眼看出這是核心模組，另一也是便於核心團隊的開發，日後增加新功能的話，就可以在名稱上使用更精簡、精確的命名，不用擔心已經有同名的模組被 npm 生態圈使用了。

[https://twitter.com/fusebitio/status/1516463781534175244](https://twitter.com/fusebitio/status/1516463781534175244)

## Run Node.js program as binary code!

*我承認我是標題黨，對被騙的讀者致歉*😅，但這只是非常早期的草案，而且還不確定有沒有機會走到這邊（但想想之後如果能跟其他靜態語言一樣打包成 binary code 後一鍵跑起就覺得真是太美好了）

[https://twitter.com/azu_re/status/1505907038186254340](https://twitter.com/azu_re/status/1505907038186254340)

在 Node.js 18 當中有個 - [Build-time user-land snapshot](https://nodejs.org/en/blog/announcements/v18-release-announce/#build-time-user-land-snapshot-experimental) 的功能，算是跟這個 SEA（Single Executable Application） 提案有關聯的開發，可參考範例：

https://twitter.com/JoyeeCheung/status/1398343597133471745

它可以在編譯階段加入用戶自定義的快照，然後執行的時候就不需要再去載入即可執行。這看起來目前還是實驗性質居多的功能，也還有[很多相關的功能](https://github.com/nodejs/node/issues/42566)需要[實驗評估](https://github.com/nodejs/next-10/blob/main/meetings/summit-nov-2021.md#single-executable-applications)，不過是希望能看到實作出來的一天阿！

## Netlify 也推出自家的 Edge Functions

[https://www.youtube.com/watch?v=9s7epEgk4II](https://www.youtube.com/watch?v=9s7epEgk4II)

Netlify 也跟上眾雲端服務商的腳步，開始提供自家的 Edge Functions 功能，一個小特點是，它們也[選了 Deno 成為合作對象](https://deno.com/blog/netlify-edge-functions-on-deno-deploy)來建構它們的服務（看起來就是用 Deno 家的 [Deploy](https://deno.com/deploy)）。

也可以參考 Netlify 的[公告](https://www.netlify.com/blog/announcing-serverless-compute-with-edge-functions/)跟[範例](https://github.com/netlify/edge-functions-examples)，還有這串自家員工的推，清楚說明 Edge Functions 特色與使用情境 😄。（感覺 Netlify 與 Vercel 越來越重疊了，之後可能可以看到更多的競爭）

[https://twitter.com/whitep4nth3r/status/1516699390097960962](https://twitter.com/whitep4nth3r/status/1516699390097960962)

## Notion 的設計風格

[https://twitter.com/NotionHQ/status/1509190876551073793](https://twitter.com/NotionHQ/status/1509190876551073793)

稍微規模大一點的企業，通常都會開始塑造自己的品牌形象，最直接相關的通常就是設計風格，像 Apple 的淨白簡約，或者像超跑界的 Ferrari、Lamborghini，它們的設計跟配色，都可以很快跟它們的品牌聯想在一起。

軟體服務中 [Notion](https://www.notion.so/) 也算是作的非常不錯的（覺得它也是不遺餘力在執行這件事），看連廣告看板都這麼有 Notion 的風格！😃