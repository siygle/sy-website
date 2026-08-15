---
title: "網路黑手的呢喃 - #29"
date: "2023-04-15"
description: "我见过一些人直接把自己的public key放在邮件的签名栏里，这的确是一个不错的主意。这样任何人都可以直接向你发送加密邮件了。"
tags:
  - BlockChain
  - Deno
  - GraphQL
  - Newsletter
  - Node.js
---
Node.js 默默達到 v20 的里程碑啦、Deno SaaS template、GraphQL又被拿出來戰了(我只是看熱鬧，拜託不要戰我)、信件內容加密小技巧、酷酷的區塊鏈部落格平台，以及網路讚讚好東西！

---

## Node.js 默默達到 v20 啦 🎉🎉

真的是時光飛逝，Node.js 從 2009/05/28 開始，也已經走到了 v20 這個版本了（雖然因為 release plan 的關係進版飛速，不過比起 Chrome 還是有很大的進步空間嘛😆）

身為一下 LTS 的版號，可以從中看到一下未來即將釋出的新特性，譬如之前提過好幾次的，參考 Deno 的[權限機制](https://github.com/nodejs/node/pull/44004)、伴隨著 V8 升版到 11.3 後的[新功能](https://github.com/nodejs/node/pull/47251)等，下方的 Release RP 裡面都有很詳細的說明。

[2023-04-18, Version 20.0.0 (Current) by RafaelGSS · Pull Request #47381 · nodejs/node](https://github.com/nodejs/node/pull/47381)

看不下文件的話，這邊有整理好的版本😆

![](https://twitter.com/bitandbang/status/1646904003169595394)

## Deno 釋出 SaaS 模板

Deno 作為後起之秀，也是受到蠻多人的關注，不過雖然有些酷酷的特性，要追上 Node.js 已經建構起龐大的生態圈還是有點困難，所以也可能看出 Deno 也是不斷嘗試一些突破點，最近放出的新東西 - SaaSkit 看起來也是其一。

不過其實這也不是什麼神奇的東西或新產品，其實就是基於 Fresh 以及一些整合好的第三方服務（如金流的 Stripe、認證與儲存的 Supabase）的模板，讓你可以快速就可以建立起一個網路服務（當然直接佈署到 Deno Deploy 就更快啦 😆)

老實說最近算是蠻期待 Deno 未來發展的使用者，不過對於近期它們的開發狀況感覺到有點困惑，不太知道到底 Deno 未來明確的發展方向到底是什麼？許多原本特有的功能，也漸漸引入到 Node.js 裡面，效能等也沒看到明顯的優勢。現在看起來有點像要押寶在 [Edge Computing](https://deno.com/blog/the-future-of-web-is-on-the-edge) 上，但是相關的服務開發狀況又不是很積極（像 Deploy 到現在都還不能用上 [npm specifier](https://github.com/denoland/deploy_feedback/issues/314)，上次更新都已經是[去年的事](https://deno.com/blog/deploy-beta4)；然後走 SSR 的 Fresh 框架發展也感覺很消極，起碼比起隔壁棚的 Next.js 真的是兩個世界）。

***不知道是不是我期望太高了* 😅**

![](https://twitter.com/deno_land/status/1643313610117255168)

## GraphQL🔥

*嗯，我是指另一種含義* (本段有許多情緒發言，如果你是 GraphQL 教義派的話，可以直接略過不看，以免影響自身的心情) 🤣

看到大大發這串推文，真的是心有戚戚焉阿～

老實說雖然 GraphQL 發展至今應該算是相當有知名度，即便像 Github/Shopify 這類的大廠都推出支援了，不過我從來沒喜歡過這個東西，原因這篇文章的作者也有提到，就是不依循 HTTP Status Code，以及共用同一個端點這兩點。不依循別人定好的標準走，弄一條特立獨行的路，這種特性我就是沒辦法喜歡阿 🙅‍♂️

不過我不否定它的特性的確讓前端變得更方便，這就大家各取所需吧，這也是 Web 生態令人喜愛的一點啦（我自己是不看好它啦，覺得這一兩年發展好像有冷下來了，過個幾年再回來看看誰的觀點能走到最後吧）。

![](https://twitter.com/haoel/status/1646305086489116678)

非常認同大大結語時提到的 **KISS（Keep It Simple and Stupid）** 這個特點，Web 生態到蓬勃有時候會帶來許多新奇酷炫的東西，不過走到後來發現，其實基本、簡單的東西才能走的長久。

## 信件中的加密內容

原本瞄到這篇的時候有猜到應該也是用公私鑰的方式處理，不過結尾提到的小撇步就沒想到了

> 我见过一些人直接把自己的public key放在邮件的签名栏里，这的确是一个不错的主意。这样任何人都可以直接向你发送加密邮件了。
[https://www.yejianye.com/2012/10/24/send-sensitive-info-in-email/](https://www.yejianye.com/2012/10/24/send-sensitive-info-in-email/)
> 

的確是非常方便的小技巧😆

![](https://twitter.com/hsins_/status/1645100428013735936)

## 猛猛的區塊鏈部落格平台

最近好像興起一股鼓勵大家自己寫作的風氣（不知道是不是我的錯覺😆）

其實現在的網路環境，你想要不被大平台鎖住（嘿，我就是大家又愛罵又離不開的FB），已經有非常多的平台都可以提供更佳方便的寫作環境給你，諸如 WordPress.com、substack.com、Medium.com，或者一些更佳小巧精美的平台如 [Gridea](https://gridea.dev/) 或是 [Sora](https://sora.city/)。

不過最近看到這個基於區塊鏈的部落格平台，眼睛突然一亮。其實基於區塊鏈的部落格並不是什麼新鮮的創舉，例如 [MIRROR](https://mirror.xyz) 也是之前就存在的類似服務，不過難得看到區塊鏈可以用在這麼正向的用途上 **#誤**。

另外，xlog 的作者對於開放內容的構思也是讓我相當佩服，除了 xlog [平台本身就深度與區塊鏈的特性相結合](https://xlog.app/)之外，xlog 其實是隸屬於作者另一個專案 [Crossbell](https://crossbell.io/) 之下的其一，提供一個開放寫作的平台，其他如社交資料的同步，瀏覽等，可以看出他們的目標不是只作一個部落格平台而已。

> **Own your social activities**
Crossbell is a platform for owning your social activities, composed of an EVM-compatible blockchain and a set of smart contracts.Scroll
[https://crossbell.io/](https://crossbell.io/)
> 

老實說我覺得跟 IndieWeb 的核心精神也滿類似的，期待後續它的發展。

![](https://twitter.com/realDSH_CN/status/1645790609897324550)

---

## 網路是個好東西

### 傷薪的人才懂😢

![](https://twitter.com/forest162dk/status/1645607370490515456)

### 原來是數學

我還以為要合起來唸，丟臉的原來是我自己。🤣

![](https://twitter.com/chacharu84/status/1646135631574351872)

### 我想挖礦還要跟你說嗎？ #誤

![](https://twitter.com/macdog/status/1643786673493520384)

### 福特你真懂行銷😍

*反差萌最有魅力了！沒想到 [Sydney Sweeney](https://www.instagram.com/sydney_sweeney/) 居然是黑手世家起身的，太威啦～*

![](https://twitter.com/Ford/status/1639250793705373697)

### 所有 web 界的大大，不是已經在 Vercel 就是正在前往的途中 #可能無誤

![](https://twitter.com/as790726/status/1640901087036346368)

*因為太多人了，所以還要出來澄清一下* 😆

![](https://twitter.com/devongovett/status/1640893736535175169)

*flag已立*😆

![](https://twitter.com/siygle/status/1641322192242892800)