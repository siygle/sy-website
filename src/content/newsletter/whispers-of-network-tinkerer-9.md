---
title: "網路黑手的呢喃 - #9"
date: "2022-03-10"
description: "deno 持續發力，Node.js HTTPS import、Lodash in Golang、戰狼(科科)出沒＆ types in JS(!)"
tags:
  - Deno
  - Golang
  - Javascript
  - Newsletter
  - Node.js
---
> deno 持續發力，Node.js HTTPS import、Lodash in Golang、戰狼(科科)出沒＆ types in JS(!)
> 

---

## deno & npm

![](https://twitter.com/azu_re/status/1498263155629527040)

其實 deno 陣營也一直有把跟 Node.js 相容當作[一項重要](https://github.com/denoland/deno/issues/12577)的[目標](https://deno.com/blog/v1.15#improving-node-compatibility)，所以看到這個專案出現好像也不意外，一樣是 deno 團隊出品 - [dnt](https://github.com/denoland/dnt/)。簡單說就是 npm package 的轉換工具，開發者在 deno 實作，然後 dnt 幫你處理相容之後，就可以發布到 npm 上了，簡單暴力。

## Node.js Adds Support for Direct Registry-less HTTPS Imports

![](https://twitter.com/fusebitio/status/1496905106863837195)

之前提過的 Node.js 17 加入的新功能，類似 deno 套件引用的方式（上下兩篇一起看有點微妙😁），這篇文章更深入說明這項功能可以帶來的影響。

## Lodash in Golang

![](https://site202343284.files.wordpress.com/2022/03/3v62rtl.png?w=1024)

lodash 是 JS 的知名套件，有點像瑞士刀的概念把一些常見的資料處理的行為包裝成數個簡單、直覺的函式，因為太常用也非常方便，一直許願希望有朝一日會被放進 std 裡面（謎之音：你慢慢等，*JS*都不知道何年何月才會有 *std* 出現了😅）

因為太方便其他語言也不免俗可以看到類似的東西，就像這個 lo 專案，不過特別的是它是利用 1.18 的新功能 Generic 實作的，可以啃一下實作方法，蠻有趣的。

## 不要再說什麼【政治歸政治，技術歸技術】了！

![](https://site202343284.files.wordpress.com/2022/03/scr-20220307-ng1.png)

***人家戰狼可沒在理你呢😎***

俄羅斯入侵烏克蘭打得如火如荼（[#StandWithUkraine](https://twitter.com/hashtag/StandWithUkraine)!!），然後某國🇨🇳戰狼又習慣性出巡，針對表態支持烏克蘭的專案亂版攻擊，然後這次 React 這個知名專案，還上了新聞 🤷，如果你還不知道，有大大簡單的過程整理[上圖連結]。

## Bring types to JavaScript!

![](https://twitter.com/typescript/status/1501634547921801216)

***這應該算標題黨* 🤣**

不過[這個消息](https://devblogs.microsoft.com/typescript/a-proposal-for-type-syntax-in-javascript/)一出，立刻在 JS developer 圈子裡炎上了！

> This proposal aims to enable developers to add type annotations to their JavaScript code, allowing those annotations to be checked by a type checker that is external to JavaScript. At runtime, a JavaScript engine ignores them, treating the types as comments.
> 
> 
> [ECMAScript proposal: Types as Comments](https://github.com/giltayar/proposal-types-as-comments/)
> 

> This allows us to keep the things you love about TypeScript – its type-checking and editing experience – while removing the need for a build step in development.
> 
> 
> The biggest difference is that because we would not need a build step, we would *dramatically* lower the barrier to entry for JavaScript devs to experience the power of types and great tooling.
> 
> Our team isn’t proposing putting TypeScript’s type-checking in every browser and JavaScript runtime – nor are we proposing any new type-checker to be put in the browser.
> 
> we’re just proposing syntax that is compatible with and motivated by TypeScript, which could be used by any type-checker, but which would skipped over by JavaScript engines.
> 
> [A Proposal For Type Syntax in JavaScript](https://devblogs.microsoft.com/typescript/a-proposal-for-type-syntax-in-javascript/)
> 

節錄了部分重點，其實這個提案並不是大家看到的直覺「要把型別支援加入 JS」，而是「加入來自現有工具（typescript/flow之流）的子集語意，讓這些工具不再需要經過轉換就可使用，但 JS  Engine 則會忽略這些」，簡略了反覆的轉換行為，如此在開發階段相信會更開心許多。

不過當然也會有[反對的聲音](https://twitter.com/JessTelford/status/1501720911900454913)，這點也蠻認同的，因為等同加了一堆其實 JS Engine 不會實際執行的語句，讓語言內容變得更複雜（可以看原作者的舉例，很有喜感XD）。目前這個提案還在 stage 0 的階段，三月會正式提出希望能通過並列入 stage 1，有興趣的可以關注該專案的 [repo](https://github.com/giltayar/proposal-types-as-comments/)。

*個人想法：直接把型別引入語言層級不是更乾脆，提案[自己都提到](https://github.com/giltayar/proposal-types-as-comments/#community-usage-and-demand) State of JS 的結果，多數開發者都希望有靜態型別的功能嘛😆*