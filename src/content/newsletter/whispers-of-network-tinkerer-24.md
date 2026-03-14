---
title: "網路黑手的呢喃 - #24"
date: "2023-01-11"
description: "Node.js 考慮讓 TS 開發者更開心、本地端也可以執行圖片壓縮呢、想販賣自己的 NPM package 嗎？還有值得期待的 HTTP/3！"
tags:
  - HTTP
  - Javascript
  - Newsletter
  - Node.js
  - Taiwan
  - Web
  - npm
---
> Node.js 考慮讓 TS 開發者更開心、本地端也可以執行圖片壓縮呢、想販賣自己的 NPM package 嗎？還有值得期待的 HTTP/3！
> 

---

## Node.js 考慮提供更方便的 TypeScript 協作？

雖然不少人對於近來 TS 崛起不以為然 😅，不過的確可以明顯的感受到以 TypeScript 來開發的專案越來越多了（也有許多是從原本 JS 改成 TS 的專案）。看來 Node.js 的開發者也有察覺這個現象，看到最近這個由核心貢獻者提出的這個討論，不像 Deno 這麼激進的直接整合提供原生支援，希望達到的目標是：

> I'm talking about shipping something that would provide a better user experience for TypeScript users without additional configuration.
> 
> 
> [nodejs/node #43818](https://github.com/nodejs/node/issues/43818#issuecomment-1183239025)
> 

![](https://twitter.com/about_hiroppy/status/1610916569131155456)

## Client-side image compression

> Compress An Image Before Upload With JavaScript
> 
> 
> https://pqina.nl/blog/compress-image-before-upload
> 

原來有這個好方法，可以不需要等到圖片傳到伺服器上之前就可以作圖片壓縮的動作，當然是透過 `canvas` 這個好東西 😆（其實 [Canvas APIs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob) 裡面有不少都有支援類似的行為，除了本文提及的 `toBlob` 還有 `toDataURL` 其實也可以）。

## Sell your NPM package

終於有開發者也想到這方面的應用了，如果你希望不再無償提供自己的開發的軟體，現在透過這個機制可以讓你銷售自己的 NPM package 囉 👍

實作方式作者有簡述在[專案頁面](https://npm-kiosk.remotion.dev/)上，應該就是透過隨機ID + Stripe payment session ID，再加上 Github package token 來對應。開發者跟使用上的流程都跟原本 NPM 沒有差別，就只是安裝連結從 npm registry 改成購買端產生的連結而已。

![](https://twitter.com/JNYBGR/status/1612430804780474369)

## HTTP/3 也是個好東西?

[Planetscale](https://planetscale.com/) 是間提供 serverless MYSQL 服務的新創，他們對於自家服務的優化也是不遺餘力，這篇是他們對於引用 HTTP/3 對於服務品質的研究評估，蠻有意思的。簡而言之，HTTP/3 對於高延遲的網路環境有明顯的改善，他們也火速在自家服務上提供了 HTTP/3 的支援（不過能不能用上就要看客戶端的評估啦 😄），研究的過程蠻值得，也可以看另一個 YT 製作的[解說版本](https://www.youtube.com/watch?v=3cpUdppYzJw)。

![](https://twitter.com/mattrobenolt/status/1610680867118276608)

---

## 網路是個好東西

### 雨後春筍般冒出的 AI 應用服務

![](https://twitter.com/steventey/status/1610656840412696578)

真的 爆 炸 多，有興趣可以看一下這串 😆

但是別忘了 AI 是好貴的玩具 🤣

![](https://twitter.com/smallufo/status/1611609129210253313)

### 好用的 logseq 也有整合 chatGPT 的擴充啦

![](https://twitter.com/Tisoga/status/1611430367327846403)

### 小工具大合集！

當你需要各式各樣的小功能時，可以先來這邊看看 😃

![](https://twitter.com/HiTw93/status/1611666452368560129)

### 在資本主義的鐵拳下，所有人都要倒下 #誤

![](https://twitter.com/leadream4/status/1612819156331823104)