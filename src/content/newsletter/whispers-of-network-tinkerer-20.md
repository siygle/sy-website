---
title: "網路黑手的呢喃 - #20"
date: "2022-09-30"
description: "Slack新開發平台終於開放測試囉、Node.js 又有新的 built-in module 啦、遍地開花的 JS runtime，Cloudflare 火力持續展示，還有比正文還多的網路好東西 �…"
tags:
  - Cloudflare
  - Deno
  - Figma
  - News
  - Newsletter
  - Node.js
  - Slack
---
> Slack新開發平台終於開放測試囉、Node.js 又有新的 built-in module 啦、遍地開花的 JS runtime，Cloudflare 火力持續展示，還有比正文還多的網路好東西 😆。
> 

---

## 新一代 Slack 開發平台終於公開測試了

之前玩過的 Slack future platform 終於正式公開測試了，看起來[工具跟相關的 APIs](https://bible.fhl.net/new/read.php?id=28412&nodic=0&m=0) 也更新了不少，有興趣可以參考之前寫過的[試玩文](https://blog.sylee.dev/2022-04-09-406b24788046/)。玩看看有沒有什麼新功能後可以整理寫個 Chapter 2。（已經立下太多 flag 🤣）

[https://twitter.com/deno_land/status/1572615325904154624](https://twitter.com/deno_land/status/1572615325904154624)

## 又有一批 module 要被取代了

最近 Node.js 加了不少 built-in modules，譬如之前提過的 [test runner](https://nodejs.org/api/test.html)。在剛釋出的 18.10.0 版本又出現一個新的：[watcher](https://github.com/MoLow/node/blob/3a6c65b41f8441152fbf8397fbe64b8eaf73a828/doc/api/cli.md#--watch)（還沒正式加入，看起來似乎還有點問題）。不過正式引入之後看起來又會有一批模組可以退休了😆

[https://twitter.com/bitandbang/status/1574452786573578241](https://twitter.com/bitandbang/status/1574452786573578241)

然後同場加映新鮮出爐的 Node.js 19 🎉（掃過去目前看到有趣的是 [WebCrypto要成為預設內建](https://github.com/nodejs/node/commit/6de2673a9f)的功能～還沒看到有什麼介紹 branch 19 的文章出現，希望還會有更多有趣的東西出現！

[https://twitter.com/_rafaelgss/status/1569723036810485761](https://twitter.com/_rafaelgss/status/1569723036810485761)

## 又來~~一個~~幾個 JS runtime

現在看到出現新的 JS runtime 似乎已經沒什麼值得驚訝的了。😎

[https://twitter.com/yosuke_furukawa/status/1567693591732174848](https://twitter.com/yosuke_furukawa/status/1567693591732174848)

然後就是之前 Cloudflare 就有放話說過的即將開源的自家 runtime 也放出來了 😎，真的是大 JS runtime 時代阿。（但其實我心裡很複雜，一來看到生態蓬勃發展覺得很嗨，但是換個角度來看，JS 圈老是再做這種重造輪的行為，希望有其他更多涵蓋更多應用的專案 🤞）

[https://twitter.com/WalshyDev/status/1574747060926038017](https://twitter.com/WalshyDev/status/1574747060926038017)

## Cloudflare 持續深耕自家的雲端產品

順著上面提到的 workerd，Cloudflare 最近幾天又一口氣丟出不少新產品線，如果仔細審視一下它目前有提供的功能，說不定在未來它的市占也有機會在雲端平台中佔有一席之地呢。（不過目前比起三大家，如果要全面競爭的話可能還差了不只一點，看產品的規劃現階段應該是先著力 Serverless）

*不過前陣子它們也是[炎上了一波](https://www.ithome.com.tw/news/152888)，會不會影響到未來發展不太好說 😅*

[https://twitter.com/wey_gu/status/1574885103674675201](https://twitter.com/wey_gu/status/1574885103674675201)

---

## 網路是個好東西

### 紀念逝去的英雄

無意間看到這個推，真是令人難過 😞

Let's Encrypt 的出現真的造福了整個網路生態，沒想到創辦人就這麼走了，大家真的要注意自己的身體健康阿🤞

[https://twitter.com/hsins_/status/1566054140534747136](https://twitter.com/hsins_/status/1566054140534747136)

### Frontpage 強勢回歸！（年紀梗）

這種超簡單拖拉就可以弄出自己網頁的服務，一直都有它的市場存在呢 😙

[https://twitter.com/xhfloz/status/1392438711367909376](https://twitter.com/xhfloz/status/1392438711367909376)

### Figma 被收購之後出現的眾多梗 🤣

[https://twitter.com/_TommyMason/status/1570396411883294723](https://twitter.com/_TommyMason/status/1570396411883294723)

這是要爛掉的前奏曲嗎XD

[https://twitter.com/apixelpusher/status/1570424118553546753](https://twitter.com/apixelpusher/status/1570424118553546753)

[https://twitter.com/OmarShaik10/status/1570444624656994312](https://twitter.com/OmarShaik10/status/1570444624656994312)

網路就是這樣，所以話不要說太早阿，會被拿出來鞭屍

[https://twitter.com/siygle/status/1570429632985575425](https://twitter.com/siygle/status/1570429632985575425)

開源替代方案立刻崛起（但不知道能站多久呢）

還有一些有趣的小知識 🤣

[https://twitter.com/kevinzhow/status/1570389068462325762](https://twitter.com/kevinzhow/status/1570389068462325762)

[https://twitter.com/thecat/status/1570391879614869506](https://twitter.com/thecat/status/1570391879614869506)

### 來點感人的

[https://twitter.com/natsuki50364797/status/1574353100491870208](https://twitter.com/natsuki50364797/status/1574353100491870208)

這串真的是滿滿的洋蔥，我要先去哭一下 😢