---
title: "網路黑手的呢喃 - #10"
date: "2022-03-27"
description: "Node.js Drama 再起、Node.js 考慮加入原生的 test runner、ES2022 and more、工程師就是要這麼 hardcore！"
tags:
  - ECMAScript
  - Newsletter
  - Node.js
---
> Node.js Drama 再起、Node.js 考慮加入原生的 test runner、ES2022 and more、工程師就是要這麼 hardcore！
> 

---

## Node.js 圈子就是要這麼刺激！

![](https://twitter.com/siygle/status/1504365268423700481)

烏俄戰爭不知道會持續多久，不過科技圈也[不閒著](https://www.storm.mg/article/4242802?page=1)，雙方都各有擅場，不過（脆弱的） Node.js 生態圈前陣子又被燒到了。😅

[**Alert: peacenotwar module sabotages npm developers in the node-ipc package to protest the invasion of Ukraine**](https://snyk.io/blog/peacenotwar-malicious-npm-node-ipc-package-vulnerability/)

如果你想懶人包，可以參考 [iThome 整理的相關新聞](https://www.ithome.com.tw/news/149990)。簡單說又是 npm 依賴造成的問題，一個知名套件 [node-ipc](https://www.npmjs.com/package/node-ipc) 的作者，為了支援反戰，在套件中加入了一個新依賴 peacenotwar，但是它會做出類似病毒的行為（自動增加宣揚反戰的檔案，其實一開始還打算針對用戶 IP 是俄羅斯&白俄羅斯的去覆寫檔案）。

最先被炸到的應該是 vue-cli，然後後續還衍生了更多的 drama...😅

![](https://twitter.com/hybridherbst/status/1504223953627369480)

![](https://twitter.com/aaefiikmnnnr/status/1504351530098786305)

嗯，我的想法就是最上推，支援烏克蘭或是個人表達抵制俄羅斯入侵的行為都是可以的，但是你利用多數人使用的套件去作這種類似病毒的行為，這帶來的傷害應該比作者希望達到的目的更多，而且完全失焦...

## Node.js 新提案 - test runner

![](https://twitter.com/jasnell/status/1503369966241812480)

[才剛提過](https://chat.sylee.dev/2022/03/10/%e7%b6%b2%e8%b7%af%e9%bb%91%e6%89%8b%e7%9a%84%e5%91%a2%e5%96%83-9/) Node.js 最近一直從 deno 那邊借鏡了許多功能，然後就又看到這個[新提案](https://github.com/nodejs/node/issues/40954)了（應該是已經通過，相信很快就會加到 master branch 了 😎

搭配原有的 [assert](https://nodejs.org/api/assert.html) 模組，之後測試幾乎不需要再依賴第三方套件了（這很 modern，GJ！），這樣下一步要考慮 std 了嗎？😄

## ES2022 and more~~~

ECMAScript 每年進化已經不是什麼新聞了，ECMA TC39 目前的工作模式幾乎就是固定開會、審 [proposal](https://github.com/tc39/proposals) 然後確認哪些是否可以晉級，[2022 版本](https://medium.com/@bsalwiczek/4-most-important-features-coming-in-es2022-that-you-should-know-about-f7e18c1bff9b)大約是年中就可以底定了。不過不經意看到這個系列介紹某些可能還沒到 stage4 但頗有意思的提案：

[**Pipeline Operators**](https://dev.to/smpnjn/future-javascript-javascript-pipeline-operators-5jj) -  個人最感興趣的一個，它就是相似 *nix CLI 指令或 shell scripts 的作業方式，能夠把資料流透過 `|>` 傳遞下去，很有意思😄（目前狀態：stage2）

```
let number = 6;
let calculate = number |> divideBySix(%) |> multiplyByTwo(%) |> addOne(%);

console.log(calculate); // Returns 3.
```

[**Records and Tuples**](https://dev.to/smpnjn/future-javascript-records-and-tuples-14fk) - 簡單地說，像是擁有不可變特性的 object 以及 array。（目前狀態： stage2）

```
let myRecord = #{
    name: "New Record",
    tags: #['some', 'tags', 'go', 'here']
}

myRecord.name = 'Another Record'; // This will throw an error
```

[**ShadowRealms**](https://dev.to/smpnjn/future-javascript-shadowrealms-20mg) - 有點類似 Node.js 核心模組的 vm，能建立獨立的 JS 運行環境，可以參考中國開發者的[簡介](https://www.zhihu.com/question/507404363/answer/2282856031)，相當淺顯易懂。（目前狀態：stage3）

```
let myRealm = new ShadowRealm();

let myFunction = await myRealm.importValue('./function-script.js', 'analyseFiles');

// Now we can run our function within our ShadowRealm
let fileAnalysis = myFunctions();
```

還有即將來取代現有問題多多的時間日期的 [Temporal](https://github.com/tc39/proposal-temporal)，目前已經在 stage3 的階段，相信再多不多久都有機會能用到啦！

## 工程師的休閒生活

就是這麼的樸實無華，隨手捻來一點都沒有阻礙 😆

![](https://twitter.com/malclocke/status/1504718243864653831)