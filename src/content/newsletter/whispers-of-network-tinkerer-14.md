---
title: "網路黑手的呢喃 - #14"
date: "2022-05-29"
description: "Winter is coming！Cloudflare 舉辦 platform week 火力展示，包含一個有趣的公告：Worker 要開源囉！npm 安全性問題持續發生，終於被拿出來檢視與討論，以…"
tags:
  - Cloudflare
  - Deno
  - Newsletter
  - Node.js
  - Security
  - Web
---
> Winter is coming！Cloudflare 舉辦 platform week 火力展示，包含一個有趣的公告：Worker 要開源囉！npm 安全性問題持續發生，終於被拿出來檢視與討論，以及可能的解決方案!?
> 

---

## Winter is coming!

別懷疑，不是跑錯棚 😆

這其實是一個新組織的縮寫，全名是（[**Web-interoperable Runtimes Community Group**](https://wintercg.org/)），它是由幾個[知名的 JS runtime 開發者與網路服務平台](https://wintercg.org/faq#who-controls-the-wintercg)一起成立的，主要是考慮瀏覽器以外的使用情境，目前已經有多個不同的實作，雖然都宣稱是 Web API 但各自的實作都有些不同（跟瀏覽器的版本也是），為了有更一致的 API 介面，所以才會有這個組織的出現。

當然，主要制定者還是 W3C or WHATWG，但因為其制定通常只考慮到瀏覽器的使用情境，所以透過 WinterCG 的運作，可以反饋這些不同使用場景的意見回去，讓整個生態能更趨於一致。

很有理想的目標，很期待它們能作到多少 🤞。有興趣可以看看 [Cloudflare](https://blog.cloudflare.com/introducing-the-wintercg/) & [Deno](https://deno.com/blog/announcing-wintercg) 的公告，都說明得很清楚，另外它們也已經開始針對幾個議題討論（fetch、webcrypto & Minimum Common API），相關資源應該都會放在它們的 [Github](https://github.com/wintercg) 裡。

## Cloudflare Platform weekly

Cloudflare 也是我覺得很酷的一間公司，它們對於網路相關的服務不少都會很人眼睛一亮，最近更是大張旗鼓朝向雲端服務提供者這個角色邁進。就在那[無聊的 IO22](https://chat.sylee.dev/2022/05/12/%e7%99%bc%e7%99%bc%e5%b0%8d-io2022-%e7%a1%ac%e9%ab%94%e7%94%a2%e5%93%81%e7%9a%84%e7%89%a2%e9%a8%b7/) 幾乎重疊的時刻，注意到 Cloudflare 也有一個 [**Platform week**](https://www.cloudflare.com/zh-tw/platform-week/) 的活動。

有點像是 Cloudflare 家的火力展示，因為太多新東西了，有興趣的可以去上面的連結頁面看看，它們很貼心做好了一個包含所有新聞、新產品的頁面。👍

感覺有機會可以一定程度取代其他的雲端大廠，Storage ([R2](https://blog.cloudflare.com/r2-open-beta)）加上 Edge serverless 就可以弄出不少東西了，然後現在它們也提供自家的 SQL database - [D1](https://www.cloudflare.com/lp/d1/)，然後它是基於 sqlite 的😆，最近 Cloudflare 也是滿猛的，越來越多有趣的東西。

[https://twitter.com/Cloudflare/status/1523348823128834048](https://twitter.com/Cloudflare/status/1523348823128834048)

## Cloudflare Worker: open source

接續上面的兩個議題，Cloudflare 也在 platform week 上面宣布它們將會把 Worker（這邊應該是執行的 runtime，就跟 Node.js 一樣），一直以為 Cloudflare 就是直接用 Node.js 結果很驚訝的發現原來它們實作了自家的 JS runtime（不過還是有基於[部份的 V8 的功能](https://developers.cloudflare.com/workers/learning/how-workers-works/#isolates)），其他細節就要等它們正式開源出來才能看到了。

這也就是為什麼第一則提到的 WinterCG 之所以需要成立的原因，這樣算起來起碼就有三個類 JS 的 runtime 了：Node.js/deno/Cloudflare Worker。

[https://twitter.com/ritakozlov_/status/1523652698784296961](https://twitter.com/ritakozlov_/status/1523652698784296961)

## 是喔，又是 npm 了

最近幾乎都篇都有 npm 相關的安全性問題，實在是 🤦‍♂️

- [NPM package event-source-polyfill compromised by political activists](https://news.ycombinator.com/item?id=30963600)

不過也是有好的新聞啦，有問題當然也會出現嘗試解決問題的人或團隊出現。

有開發者針對先有 Node.js 根本運作的機制，來討論是否有可能從中改善起：「[NodeJS packages don't deserve your trust](https://josephg.com/blog/node-sandbox/)」，譬如引入類似 access token + permission scope 的方式（但這應該是不小的工程），或者是[取消預設執行 script](https://docs.npmjs.com/cli/v8/commands/npm-install#ignore-scripts) 這類的行為。

另一個是新創 [Socket](https://socket.dev/)，而且它們已經拿到創投資金了，在 package.json 的變動時，即時幫開發者依賴的模組作[相關的安全檢查](https://socket.dev/npm/issue)（不過印象 [Snyk](https://snyk.io/) 好像有類似的服務？但它們宣稱比 Snyk 的監測服務更好😎），目前有 Github app 可以使用，但現在還很陽春，後續會有更多功能推出，希望可以它們能對 Supply-Chain attack 的問題有更好的防護手段，成員中有不少是 Node.js 知名的開發者，值得期待。

[https://twitter.com/feross/status/1524419187334017025](https://twitter.com/feross/status/1524419187334017025)

然後也有人是從另一個角度切入的 😄

試著把自己想成攻擊者，妳會怎麼做呢？下面這篇就是一個簡單的範例，當然這個陽春版的勒索程式，應該不太會有人中招（？），不過透過這篇可以知道其實要在 Node.js 模組裡面埋一些有的沒的真的是很簡單的一件事。

尤其當這個套件又已經被很多人引用的話，真的一瞬間就可以造成很大的傷害。雖然可以預期還會不斷出現這類的事件，但看來有人起身開始思索解決的方法，也是蠻值得開心的，這也是開源社群迷人之處吧。

[https://twitter.com/devdevcharlie/status/1522604033449422849](https://twitter.com/devdevcharlie/status/1522604033449422849)

## Permission Model

哈哈，前面撲梗就是為了這篇（好長的梗）😅

開源社群就是動的這麼快，真的有開始討論安全性這個問題了（其實 [2020](https://www.nearform.com/blog/adding-a-permission-system-to-node-js/) 就有相關的研究了），有興趣可以看看這個討論串，如何在現在 Node.js 生態圈裡面，引進更安全的權限管理 ⬇️

核心概念有點類似目前 deno 的模式，就是你必須指定程式執行需要哪些權限，若沒有就會噴錯，可以在執行階段變更權限（看起來是只能[拒絕](https://github.com/nodejs/security-wg/issues/791#issuecomment-1139685445)）。不過目前尚在討論的階段，還不確定會不會正式引入，希望在各大集思廣益之下，能設計出一些有效改善 Node.js 生態安全性問題的方案。🤞

[https://twitter.com/marcin_hoppe/status/1517831296218812417](https://twitter.com/marcin_hoppe/status/1517831296218812417)

## What do you think?

Deno 前幾天發了這個有趣的推詢問各開發者，不知道有在玩 Deno 的各位覺得是甚麼呢？我還是希望有個比較好使用&管理模組的方式，雖然它設計的初衷有提到就是不希望有像 npm 一樣的管理器...

兩難阿🤣

[https://twitter.com/deno_land/status/1527627754019205125](https://twitter.com/deno_land/status/1527627754019205125)