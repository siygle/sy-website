---
title: '開發工具推薦 - Zeke Sikelianos'
date: '2017-01-14'
tags: ['Node.js', 'tools', '2017']
draft: false
summary: '印象中，從 Paul 分享過開發工具之後，好像每年都可以看到不少以這作為分享主題的議程，好用的工具真的是對開發有很大的幫助'
---

印象中，從 [Paul 分享過開發工具](https://www.youtube.com/results?search_query=Paul+Irish+tool) 之後，好像每年都可以看到不少以這作為分享主題的議程，好用的工具真的是對開發有很大的幫助，所以每年許多重造輪子基本上我沒什麼意見（_這是什麼大偏題_

最近掃到這位 Github 前端工程師的分享，裡面也提到不少好用的工具 ;p

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/rKWHS2cfcAw"
  frameborder="0"
  allowfullscreen
></iframe>

#### [DuckDuckGo/Bang](https://duckduckgo.com/bang)

跟 Google 對著幹的搜尋引擎 #誤
這個叫 bang 的東西有點像特定領域的搜尋，譬如你想找 Github 上的東西，就可以透過 `!gh {KEYWORD}` 來達到（雖然 chrome 也是一個 tab 就可以做到了 XD

#### [npm-hub](https://npmhub.org/)

這是作者自己的作品，是個簡單的 browser extension，他會根據 `package.json` 把依賴的套件列出來，對於研究新專案相當有幫助。

![](https://npmhub.org/images/npm-hub-screenshot.png)

#### [OctoLinker](https://github.com/OctoLinker/browser-extension)

![](https://cloud.githubusercontent.com/assets/1393946/17873217/77fa7404-68c4-11e6-94d7-1a3e4cebec58.png)
這東西可以跟上面 npm-hub 合起來用，相當方便，它會把套件名稱直接連結到該專案的 Github Repo。

#### [trymodule](https://www.npmjs.com/package/trymodule)

有時候你會希望能快速測試下某些套件的功能，這 CLI 就可以讓你方便做到這件事。

```
\> trymodule lodash=_
\> _.forEach([1,2,3], (i) => { console.log(i);})
```
