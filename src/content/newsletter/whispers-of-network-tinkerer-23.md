---
title: "網路黑手的呢喃 - #23"
date: "2022-12-21"
description: "百花齊放之 ChatGPT 應用、又見資安、Node.js permission mode、周圍都是大神的感覺如何 - Vercel、Deno 大步邁向 npm 相容之路，以及不能少的網路好東西！"
tags:
  - AI
  - Deno
  - News
  - Newsletter
  - Node.js
  - OSS
  - Security
---
> 百花齊放之 ChatGPT 應用、又見資安、Node.js permission mode、周圍都是大神的感覺如何 - Vercel、Deno 大步邁向 npm 相容之路，以及不能少的網路好東西！
> 

---

## AI to the terminal!!

自從 ChatGPT 橫空出世之後，每天幾乎都可以看到有人玩弄它的貼圖🤣。不過看到 AI 的發展，真的讓人對未來有很大的期望呢～

因為有提供 API 的關係，很快就可以看到[一堆 ChatGPT 的衍生擴充](https://github.com/humanloop/awesome-chatgpt)，擴展到各個使用平台上面，當然不意外馬上就有人移植到 CLI 上面了，之後大家再也不用記 POXIS 上面晦澀的指令啦（？）

按照目前 ChatGPT 一本正經講幹話的特性，看來政客會是最快被取代的行業 #誤

![](https://twitter.com/codepo8/status/1605176767173591042)

## 無所不在的攻擊手段

網路安全其實不是專門，但看到還是會稍微瞄一眼，有時候真的很佩服這些駭客的頭腦，真的各式各樣的手法讓人防不勝防，資安真的是一場永無終止的戰鬥😅。

這篇提到的攻擊手法是利用近來也常見的 SVG 的特性，把攻擊的 script 包在裡面從而達到把攻擊程式直接入侵到被攻擊者的電腦上，繞過其他的防護措施。文中有提到一個搭配 email 附件的攻擊方式，有興趣的可以看看。

![](https://twitter.com/about_hiroppy/status/1604632433152122880)

## Node.js 也引入權限控管了

![](https://twitter.com/_rafaelgss/status/1602404583250313216)

之前有提過 Node.js 打算引入跟 Deno 一樣的權限控管機制（也就是需要對定對應的權限才能執行），目前已經有雛形並進入 [review](https://github.com/nodejs/node/pull/44004) 了，應該有機會可以在 v19/v20 看到？

看到 runtime 之前彼此借鏡互相刺激求進步也是蠻有趣的🙌

## Vercel 的工作體驗？

![](https://twitter.com/_limboy/status/1595949009969250304)

最近無意間看到這集 podcast，來賓剛好是 web development 很知名的新創 - Vercel 的員工（[Shu](https://twitter.com/shuding_)、聽了之後才知道原來他在德國，那應該跟 webpack 作者是在同個工作區域吧，Vercel 真的都快把 web 開發界的大神都集滿了  😆）

裡面有提到不少有趣的業界八卦😄，當初為什麼會被找進來 zeit（Vercel 改名之前的名稱）都有提到，真的好嚮往能在開源界工作阿～

內容非常豐富，歡迎開發者收聽！

## Deno 最近猛猛的

等好久的 npm 相容的功能，終於在 Deno 1.28 中正式釋出了，當然沒辦法百分百支援，不過這部分團隊也會不斷持續的優化，有任何使用上的問題，都可以回報到 [Deno](https://github.com/denoland/deno/issues)。npm 相容也還會持續下去，v1.29 也有不少跟 npm 相關的改進，看來 v1.x 都會不斷看到優化的。有興趣也可以關注[這邊](https://github.com/denoland/deno/issues/15960)。

- 不過有用 Deno Deploy 服務的要注意一下，目前它[還沒支援這個](https://github.com/denoland/deploy_feedback/issues/314)😅

![](https://twitter.com/deno_land/status/1592147093673615362)

![](https://twitter.com/deno_land/status/1603509812079181824)

## 網路是個好東西

### 幸福企業正解

![](https://twitter.com/peekabo7749/status/1390484354422370307)

*沒辦法比這個更中肯了!*

### 參與開源專案也是要非常小心😅

![](https://twitter.com/yetone/status/1599962727946293248)

*一個不小心跑了 test 就發現本地檔案被砍光啦🤣*

### Airbnb 的新嘗試，不過有個大前提

![](https://twitter.com/blackanger/status/1595421765689217024)

*錢錢是很重要滴*

### 好物大推薦 - Readwise

![](https://twitter.com/WuPingJu/status/1604407739244900352)

*非常強大的閱讀、知識整理的工具，可參考大大的介紹文*