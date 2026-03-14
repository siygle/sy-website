---
title: "網路黑手的呢喃 - #61"
date: "2025-01-27"
description: "主題：等好久的 Ghostty 終於現身了、Epoch Semantic Versioning、Expo 重磅消息！、RN @ Shopify、WinterCG → WinterTC"
tags:
  - Javascript
  - Newsletter
  - OSS
  - React
  - ReactNative
  - TypeScript
---
## 等好久的 [Ghostty](https://ghostty.org/) 終於現身了

或者之前有人聽過這個專案名稱，甚至有人有機會已經玩過了，不過自從知道 Hashi 的創辦人退休之後跑去開始一個 terminal 的專案之後，就一直對這個東西有點期待（不過我人品不好沒機會提到玩到），不過終於在 2024 年底的時候看到作者發文準備公開的消息，也不意外在放出來之後就看到不少開發者第一時間就下載來試用了 😄

![](https://x.com/mitchellh/status/1871329568310882657)

雖然現在只是 1.0 的版本，不過基本功能也都包含在其中了（雖然還是很陽春），目前試用起來也是非常舒服，說真的對 terminal 這個工具而言，我也不需要什麼特別功能（尤其是硬要跟 AI 綁定在一起，雖然有其方便性，但我寧可透過其他 CLI 來達到就好），單純講究渲染快速的 Ghostty 立刻成為我的新歡。

然後雖然目前 Ghostty 還沒有一個方便的設定介面，不過愛用者的助力總是特別強大，已經有大大弄了一個網路介面的版本，可以讓使用者簡單調整自己的設定然後匯出設定檔，而且它的介面還是不那種陽春版本，相當精緻，猛！

[Ghostty Config](https://ghostty.zerebos.com/)

## Epoch Semantic Versioning

*這又是什麼東西，JS 世界拜託不要再搞什麼奇怪的東西出來了（心裡 OS* 😅

別擔心，這只是一個實驗性的提議，是由 Vue 知名的開發者 antfu 最近提到的觀點，不過裡面幾個想法覺得蠻有意思的（他本人也實際力行這個想法，[把自己手邊維護或開發的幾個專案的版本](https://bsky.app/profile/antfu.me/post/3lfc56ebxqk2o)，都改用這篇提到的 Epoch Semantic Versioning 了。）

主要是因為幾個因素：

- Major 升版代表有破壞性的改變，不過單純的 v2 → v3 也可能只有一兩個破壞性改動，也可能代表 100 個，作者本人更傾向把多個重大更新，分散到數個升級版本中，這樣讓用戶更容易了解與採用升級版本。
- 另外，因為人們對於數字的變化，當版本 v2 → v3 對比 v133 → v134，雖然都一樣是 breaking change，但人們會直覺的把 v2 → v3 視為更重大的變更而忽視 v133 → v134 的這種版本變動。

![](https://bsky.app/profile/antfu.me/post/3lf5msrem322f)

所以作者提出了 Epoch Semantic Versioning 這個概念（原本他希望是四位數字的格式，不過考慮到行之有年的 Semantic Versioning，所以改提出了下列這種，合併了 Epoch & Major 的作法）

![image.png](../assets/網路黑手的呢喃 #61 - image.png)

看起來就是透過 EPOCH 這個機制，把 breaking change 再切分出「不相容的變更」&「重大的不相容變更」兩種情境。蠻有意思的討論，不知道會不會有其他開發者也跟上一樣的方法。😃

## Expo 重磅消息！

身為標題黨，這樣很不錯 #誤

身為 react-native 的重要第三方開發工具的 [Expo](https://expo.dev/)，最近放出了它們自家的 hosting 服務 - [EAS](https://expo.dev/eas) hosting。看起來應該是補齊 web 這塊的需求，就是開發之後可以透過 `eas deploy` 這個簡單的指令，就把 web 的部分部署到網路上（可以參考官方公告）。

雖然不確定多少開發者會一條龍 react-native 處理 iOS、Android & web，不過看它們的 hosting 也不陽春，該有的後端功能都具備了（甚至覺得別某些後端主打的還完整，轉頭看 Deno Deploy…😅）。

[EAS Hosting (Preview): Host Expo server code in the cloud with EAS](https://expo.dev/blog/expo-announces-eas-hosting-service)

想快速了解它有什麼功能，以及如何使用，可以看一下它們自家的說明影片⬇️

![](https://www.youtube.com/watch?v=NaKsfWciJLo)

## RN @ Shopify

接續 RN 的話題，剛好 Shopify 也寫了一篇關於它們這五年以來引入 RN 的心路歷程。作為深耕已久，以及幾乎全 app 都轉移到 RN 的大企業，這篇文章應該是相當具有參考價值，裡面也提到不少對 RN 的認知偏誤。

如果是我自己來總結的話：

- 開發快（共享模組、技術棧、開發資源）
- 經調校之後 RN 也可以很快（而且對未來發展樂觀）
- all-in-RN 不是正確的作法（native developer & 背後支援都是很重要，以及根據使用情境切換不同的技術）。

而且 Shopify 在身為使用者的同時，也貢獻了不少開源專案回饋給這個生態。 👍

[Five years of React Native at Shopify (2025) - Shopify](https://shopify.engineering/five-years-of-react-native-at-shopify?q=v)

## WinterCG → WinterTC

之前為了 JS 互通性而成立的 WinterCG（the Web-INTEroperable Runtimes Community Group） 這個組織，最近改制成 WinterTC 啦！由原本的社群組織進化到技術委員會（Technical Committee）之後，也成為可以制定標準的組織，所以之後應該會跟 TC39 一樣，每年發布經討論之後決議後的項目。

[WinterCG becomes Ecma's WinterTC | Igalia](https://www.igalia.com/2025/01/10/WinterCG-becomes-Ecma's-WinterTC.html)

說到互通性，最近也無意間看到這個 🔽

[https://github.com/standard-schema/standard-schema](https://github.com/standard-schema/standard-schema)

**A common interface for TypeScript validation libraries**

其實原本看到這個以為是 [json schema](https://json-schema.org/) 的什麼附屬延伸，不過後來找了一波，專案裡面也沒有特別提到應該無關 😅，不過兩者還是有類似的概念存在。

JSON Schema 是用來定義 json 資料格式的規範，不少函式庫就支援 JSON Schema 作為定義[驗證](https://fastify.dev/docs/latest/Reference/Validation-and-Serialization/)資料的功能。這邊提到的 standard-schema 就是由 TS 中知名的資料驗證函式 - Zod, Valibot, and ArkType 作者共同制訂的。它就有點像是 WinterCG for TypeScript validation libraries 的概念 😄，定義出通用的 interface。

## 真正 hacker 精神！

時至今日，對於開發硬體產品比起過往已經是更方便許多，不過像這個影片一樣，從頭開始製作自己的筆記型電腦這麼嗨的主題，我也是第一次看到，真的是太酷啦！

![](https://www.youtube.com/watch?v=fks3PBodyiE)

除了影片已經很完整介紹作者的開發歷程之外，他也把所有相關的資料都開源出來了，有興趣的可以試試看 😅

[https://github.com/Hello9999901/laptop](https://github.com/Hello9999901/laptop)

## **網路是個好東西**

### bababa.tw

最近的亂象應該不少人都感到無力，不過大家還是可以靜下心，先照顧好自己，然後在自己力有所逮的地方，[付出自己能作到的](https://bababa.tw)。

剛好看到芋圓字典的發文覺得很有感。常常看到有人不願意在政治上表態，大家應該認知到，在民主制度下，支持某個政黨或政治人物，不代表你要把他當作精神領袖，而是認同他們的價值觀或對國家發展的方向。

雖然近期很讓人沮喪，不過希望匯集越來越多力量之後能有好的成果。

[https://www.threads.net/@taro.dict/post/DE6KwGJzBjc](https://www.threads.net/@taro.dict/post/DE6KwGJzBjc)

另，最近聽癌大的分享也蠻同意他的觀點（有興趣可以跳轉 [EP523 49:00](https://podcasts.apple.com/tw/podcast/ep523/id1500839292?i=1000684039214) 開始處），冷靜的溝通才能走到最大公因數，對於特定分子你跟他們吵根本就沒意義，對於對立面的支持者而言，好好說話才有說服對方的可能，亂槍打鳥並不會讓支持者變多，只會把本來潛在支持者嚇跑（或氣跑）而已，沒有想溝通的你也不用浪費時間跟他抬槓，協助擴散正確的消息並且好好照顧自己的情緒，這樣就夠了，大家加油！

### 小紅書崛起

最近因為美國的抖音被封，導致有一群外國人跑去用中國的小紅書，而且[大肆稱讚](https://bsky.app/search?q=rednote)。我個人是不太理解這種行為，不過相信很快就會感受到黨的鐵拳 😅。

![](https://bsky.app/profile/jaowon.bsky.social/post/3lfqgsw3adk22)

不過後來看到這個之後，才驚覺原來有很深的佈局。 😆

![](https://x.com/baoshu88/status/1879402971408306371)

我只能說，生活在沒有明顯威脅的國家真好，完全不需要有什麼危機意識。

### 如此中肯

![](https://x.com/causemx/status/1871480768586981531)

### 邦妮子例行更新 😆

![](https://x.com/__yunhand__/status/1864278825649197351)

[https://www.threads.net/@potterkim0531/post/DE5R6U6SAjE?xmt=AQGza7s1mBV4LDzUxVLGJLC8K1tda80z7F_CR_J614iuwg](https://www.threads.net/@potterkim0531/post/DE5R6U6SAjE?xmt=AQGza7s1mBV4LDzUxVLGJLC8K1tda80z7F_CR_J614iuwg)

### IVE 新歌釋出，大家刷起來！

![](https://x.com/wanna_with0813/status/1879320988728607139)

![](https://www.youtube.com/watch?v=g36q0ZLvygQ)