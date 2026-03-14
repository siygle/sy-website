---
title: "網路黑手的呢喃 - #22"
date: "2022-11-11"
description: "很強大的 Mac app（健忘者的救贖）、Node.js 的官方安全指南以及繼續增加的內建功能、熱騰騰剛結束的 Github Universe，當然還是有比本體還重要的網路八卦（誤）！"
tags:
  - AI
  - Github
  - News
  - Newsletter
  - Node.js
  - Security
  - StartUp
---
> 很強大的 Mac app（健忘者的救贖）、Node.js 的官方安全指南以及繼續增加的內建功能、熱騰騰剛結束的 Github Universe，當然還是有比本體還重要的網路八卦（誤）！
> 

---

## 看過、聽過、說過，就幫你記著

這位 Dan Siroker 是之前拿過創投的另一間新創 [Optimizely](https://www.optimizely.com/) 的共同創辦人之一，這次他又帶來一個很酷的新產品 — [rewind](https://www.rewind.ai/)！ 這產品名稱也取得很好，跟 icon 以及功能完全融合在一起 😄

這個產品是個 Mac app，它會把你看過的（看描述跟 demo 應該是螢幕出現的）、聽過的、說過的（近來火紅的 WFH 一定有的線上會議），都記錄下來，然後可以透過簡單的介面來搜尋，而且資料跟運算完全都是本地處理，感覺非常猛阿！

![](https://twitter.com/dsiroker/status/1587415342896148480)

## 安全真的是很難搞的事😅

前幾集有陸續提過幾個目前在 Node.js 生態圈裡面的安全性問題（大多是依賴鏈攻擊），不過其實安全相關的議題真的是又大又精深，這次官方也特別把一些常見的攻擊跟危險撰寫成一份[文件](https://nodejs.org/en/docs/guides/security/)。雖然是針對 Node.js 生態來舉例說明，不過只要是處理網路相關服務的，都值得拜讀一番。

![](https://twitter.com/_rafaelgss/status/1590703062704082946)

## Node.js越來越強~~（肥）~~啦！

最近 Node.js 的走向跟以往維持精簡核心的態度有點不一樣了（不知道是不是受到競品的影響😜），開始考慮把一些對開發有幫助的功能加到核心支援裡面。

之前有提過不少，這邊又是一樣大家熟悉的功能，就是 python 裡面常見的 CLI 功能之一：起一個本地端的 http server。

**`*沒錯就是 python -m http.server 啦*`**

雖然這功能在 [npm 實在太多了](https://www.npmjs.com/package/serve)，但能原生支援的話，之後使用上就更方便啦！🎉

![](https://twitter.com/shisama_/status/1589646398349144064)

npm 也默默進版到 v9 的版號了，目前[看起來](https://github.com/npm/cli/blob/latest/CHANGELOG.md)大多是汰除一些原有的指令，跟 auth 參數的調整，還沒看到什麼非常重大的功能更新。

![](https://twitter.com/MylesBorins/status/1590482425121247233)

## Github Universe 2022

日前剛結束的 [**Github Universe**](https://githubuniverse.com/) 已成為 Github 宣佈新功能，甚至是下一代產品的場合，今年的內容也是相當豐富，有興趣可以跳轉官方剛釋出的[新聞稿](https://github.blog/2022-11-09-everything-new-from-github-universe-2022/)。

![](https://twitter.com/github/status/1590978384254959617)

![](https://www.youtube.com/watch?v=ZH71p_KaxGI)

![](https://www.youtube.com/watch?v=owXWqvvOTQw)

Copilot 跟 Codspaces 其實都是之前就已經釋出（或是開始提供測試）的產品，所以沒有什麼非常特別的地方。不過它們放出的幾個[次代產品](https://githubnext.com/)就蠻有意思了😎

譬如讓「用嘴巴寫 code」成為事實的 [voice-to-code](https://githubnext.com/projects/hey-github/)（發音不標準怎麼辦，是不是要考慮轉行了😆）、重新設計的 repository - [Github Blocks](https://blocks.githubnext.com/)、幫你擺脫老是忘記 CLI 指令要怎麼下的 - [Copilot CLI](https://githubnext.com/projects/copilot-cli/)，以及改善以為專案進行，不同階段需要不斷切換 context/tools 的痛苦，現在都集中到同個專案區下面的 - [Collaborative Workspaces](https://githubnext.com/projects/workspaces/)。

上面每個專案看起來都好嗨阿，真希望能趕快提供試玩！（裡面好多都是基於 Copilot，*天網要來了宅宅們快逃啊* ）。

---

## 網路是個好東西

### izs又投入新創了

可能不在 Node.js 生態圈的會不太知道，不過這位 izs 就是知名 npm 的作者，後來也順勢創立了 npm.com 公司，然後被 Github 收購進入有錢爸爸（M$）的家族裡面了🤣。

本以為賺這麼一大票應該是可以退休了，沒想到最近看到他又投入新的創業之路了，這次是針對雲端服務的 - [Tier.run](https://www.tier.run/)，它是針對使用雲平台的開發者的痛點：「每月帳單」，來切入的新創。能透過簡單的設定檔來針對不同預算，彈性調整使用雲端服務的額度（它們自稱「Terraform for your pricing」蠻有趣的😄）。

![](https://twitter.com/izs/status/1587580579981103105)

### 當你難受你就比爛

*有種被療癒的感覺🤣*

![](https://twitter.com/mengkunghsieh/status/1590662225102278656)

### WFH必讀寶典🙌

這串真的值得所有 WFH 的工作者好好拜讀一下，有時候說遠端工作沒效率，很多時候是導入的時候沒有意識到要有對應的工作 & 溝通方式阿～

*「你好，在嗎？」榮登最惹怒人的一句話🤣*

![](https://twitter.com/aki_chy/status/1587030845231345664)

### 推特霹靂火🔥

*謎之音：標題洩漏了你的年紀*

最近每天光是看 Twitter 的新聞就夠了，真的不需要再看什麼娛樂節目了阿😆。自從馬老闆進駐之後，原本的 Twitter 應該起了天翻地覆的變化了，到底這會[如 SpaceX 的火箭一樣一飛衝天](https://twitter.com/CaseyNewton/status/1590725083294990336)，還是會跟鐵達尼一樣沉了，我們就靜靜一旁吃瓜看熱鬧就好😎🌊。

是說這樣說不定以後就沒有推文可以嵌入了，哭哭～

![](https://twitter.com/JFrankensteiner/status/1589418718819647489)

[https://pca.st/fsn5mfxd](https://pca.st/fsn5mfxd)

*有興趣聽內部員工第一手分享的，不要錯過最新集的矽谷輕鬆談喔！*

對了，如果你想一個清淨的地方遠離塵囂，可以考慮 Mastodon 這個聯邦制的社交網絡。

![](https://twitter.com/bitinn/status/1589097815552438272)