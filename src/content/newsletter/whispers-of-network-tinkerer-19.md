---
title: "網路黑手的呢喃 - #19"
date: "2022-08-30"
description: "輪到 Deno 的回合、Bun 的火紅（然後就燒過頭了）、WebAssembly at the edge、持續入侵 JS infra 的 rust、MongoDB 的資安建議，以及持續不務正業的網路…"
tags:
  - Deno
  - Javascript
  - MongoDB
  - News
  - Newsletter
  - Security
  - Vercel
  - bun
---
> 輪到 Deno 的回合、Bun 的火紅（然後就燒過頭了）、WebAssembly at the edge、持續入侵 JS infra 的 rust、MongoDB 的資安建議，以及持續不務正業的網路好東西。
> 

---

## The response by Deno!

不知道是不是因為最近 bun 收到大量的注目，讓原本的 Deno 有點悶（自己小劇場），最近 Deno 發表了一則更新說明近期 & 即將釋出的一些更新，相當猛阿 🙌

![](https://twitter.com/deno_land/status/1559148057383641089)

大家最引頸期盼的 npm 生態相容的問題，官方宣佈將在未來的三個月內實現，而且會涵蓋 80~90% 的條件，使用的方式會是像這樣的形式：

```
import express from "npm:express@5";
```

然後另一個是最近被 bun 比下去的效能的問題（雖然這有點噱頭的成分，之前也提過不同的執行情境下本會造成不同的結果），但 Deno 還是針對這部分做出回應了 - [**The fastest JavaScript runtime**](https://deno.com/blog/changes#the-fastest-javascript-runtime) 😄，進行了大量的優化，所以也可以期待接下來的更新。🎉🎉

**更新（v1.25.0）**

官方緊接著就釋出新版  [**v1.25.0**](https://deno.com/blog/v1.25)，裡面已經包含了部分文章中提及的功能：諸如[效能](https://deno.com/blog/v1.25#new-experimental-http-server-api)[提升](https://deno.com/blog/v1.25#improvements-to-startup-time)、以及 [npm 模組的相容](https://deno.com/blog/v1.25#experimental-npm-support)，都如火如荼的進行中，可以期待最近的幾個版本，都可以給我們帶來驚喜。

![](https://twitter.com/deno_land/status/1562763983496814593)

## 近期火紅的 bun 募資成功並成立公司，然後就炎上了...

最近聲勢頗大的新 JS runtime - bun（之前也提過這個），最近宣佈他們已經拿到投資，也順勢成立了公司 [Oven](https://oven.sh/)，準備全力開發 bun。

![](https://twitter.com/oven_sh/status/1562248114773565440)

不過原本是好事，但不知道是 founder 太求好心切，還是講話太直（我說的很委婉了😎），拿到投資之後就開始徵才，不過卻因為徵才文中的一則推文，導致後續在網路上炸開了：

![](https://site202343284.files.wordpress.com/2022/08/up-1581bda70bd029bf5c37e6d45b7172f3090.webp?w=718)

想當然爾，這種言論不意外立刻就引起許多人的回覆，不少人都覺得這種「有毒」的工作氛圍，對於發展是有害的

![](https://twitter.com/siygle/status/1562635968095866883)

*我自己的想法很膚淺，你給的薪水夠多嗎？ #科科 #生命的價格*

*不過撰文的時候，Oven 已經把相關的推文都刪除了😅*

![](https://twitter.com/Yu_Wei_Wu/status/1563161276657700865)

BTW，原本對於 runtime 各立山頭有點困惑，不太確定這樣的發展對生態到底是好還會是不好，不過後來出現的 [WinterCG](https://wintercg.org/)，看出眾開發者也有留意到這個問題（不確定 bun 會不會加入，不過與 Node.js 生態相容也是它一開始提出的口號，應該也是會合流才對），有時候一些酷酷的專案也是可以吸引眾開發者投入，出現[更多酷酷的東西](https://github.com/facebookresearch/shumai)😄，Node.js 一開始也是這樣長大起來的。

不過至於 Oven 是不是間適合去的公司就不好說了（反正弱者如我不太需要考慮這件事😅），希望不要 burnout 就好，老了之後覺得身心健康真的是很重要。 #慣老闆真的不要

## WebAssembly at the Edge

繼前輩 [Cloudflare Worker](https://blog.cloudflare.com/webassembly-on-cloudflare-workers/)、跟 [Deno deploy](https://deno.land/manual@v1.25.0/webassembly/using_wasm) 都有類似直接佈署 wasm 的功能，Vercel 也不落人後在最近也釋出了相同的功能。（翻相關的文件的時候才發現原來 Vercel edge function 也不是用 Node.js 而是[基於 v8 自行開發的 runtime](https://edge-runtime.vercel.app/)。

真的遍地都是 JS runtime 😆

![](https://twitter.com/vercel/status/1563217002558173190)

![](https://twitter.com/robpalmer2/status/1559617948653965319)

*Bloomberg 也說他們也要弄一個 runtime 啦*

## 繼續蠶食鯨吞 JS infra 的 rust :)

已經有不少人[提出過這個觀點](https://leerob.io/blog/rust)，也的確看到越來越多工具被改寫成 rust 了。（所以之後一次要學兩個語言才能入門，是嗎？🤣）

![](https://twitter.com/mnt_io/status/1562404633171136512)

![](https://twitter.com/sebmck/status/1563095255875866625)

## 4 common misconceptions about security

資料庫的安全性問題一直都是經常被拿出來強調的一個議題，在邁入 NoSQL 的時代之後，其實該注意的地方還是跟原本的 RDBMS 沒有太大的差異（不過也真的是很佩服安全從業人員），有些攻擊方式真的不是一般人會留意到的 😅

MongoDB 在前陣子舉辦的 MongoDB World 2022 上面也提到了安全性相關的議程，舉出幾項攻擊者經常使用的攻擊手法以及建議：

- **NoSQL Injection** -> Never trust user input！
- **Social engineering attacks** -> Authentication is the most basic security feature。
- **TLS and network traffic** -> TLS should always be used to ensure any data that is transferred between two systems is encrypted。

![](https://twitter.com/MongoDB/status/1559595347919372290)

對這篇文章有興趣的話，也可以考慮直接看 MongoDB 的本家議程🔽

![](https://www.youtube.com/watch?v=_0TYUG3ic4A)

## 網路是個好東西

### 原來音樂也是一個解題的過程😆

![](https://twitter.com/_hisriver/status/1563719544870678529)

### 拯救蒼生的 Copilot

這應該作為重點功能 😄

![](https://twitter.com/github/status/1563225678866067457)

### 樂高真的是個危險的東西

最近新品的燈塔好吸引人阿，真的是要剁手了 🤣

![](https://www.youtube.com/watch?v=x1MfbUqMX7s)