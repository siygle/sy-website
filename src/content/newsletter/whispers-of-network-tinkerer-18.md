---
title: "網路黑手的呢喃 - #18"
date: "2022-08-14"
description: "npm query & 安全性的持續改善、OpenJS World 2022 速記、State of Deno 2022，還有一些有趣的小東西。"
tags:
  - Deno
  - Newsletter
  - Node.js
  - QpenJS
  - Rust
  - Security
  - npm
---
> npm query & 安全性的持續改善、OpenJS World 2022 速記、State of Deno 2022，還有一些有趣的小東西。
> 

---

## npm "query"

npm CLI 在最新釋出的版本中新加入了一個新的功能 `query`，可以針對專案中的套件進行搜尋、過濾，所以透過這個功能就可以很快速找出專案中所有依賴套件的一些特性或資料。如文中舉的例子（剛好搭配之前安全性的問題）

找出套件中有執行 `postinstall` 行為的：

```
npm query ":attr(scripts, [postinstall]):not(:root > *)"
```

簡單吧，透過上面的指令就可以很快找出來。👍

文中也提到未來還會加入更多的條件式，目前已經支援的用法可以直接參考[文件](https://docs.npmjs.com/cli/v8/using-npm/dependency-selectors)或相關的 [RFC](https://github.com/npm/rfcs/blob/3d5b2130504139bdc8a3b599923aa07d2ff79c96/accepted/0000-dependency-selector-syntax.md)。

![](https://twitter.com/npmjs/status/1554906219923611650)

## OpenJS World 2022 速記

之前提過的 OpenJS，最近陸續挑了幾個自己有興趣的主題，也順手寫了速記，應該會在茶餘飯後的時候把有趣的議程都聽過，值得記錄的部分應該會陸續補進吧（應該😙）。

![](https://twitter.com/siygle/status/1557069088576352257)

## State of Deno (2022)

最近 JS runtime 的世界真的是百家爭鳴，不斷出現有趣的東西，尤其最近竄紅的 bun，不知道會給原本後繼者 Deno 帶來什麼變化。最近 Deno 自家員工也蠻常出現在相關的研討會上面，當然這類介紹的議程也蠻多的，不過這場比較特別的是，講者有特別針對 Deno 的核心技術棧有較多的說明，有興趣了解的可以看一下（[1](https://youtu.be/B_v1c4RJEGU?t=393) & [2](https://youtu.be/B_v1c4RJEGU?t=498)）。

![](https://youtu.be/B_v1c4RJEGU)

當然你也可以更激進一點，就跟 bun 一樣寫一個自己的 JS runtime 吧😆👍，想知道要怎麼進行嗎？透過 [deno_core](https://crates.io/crates/deno_core) 就可以輕鬆作到囉～

![](https://twitter.com/about_hiroppy/status/1552990869040803840)

## npm & Sigstore

![](https://twitter.com/MylesBorins/status/1556683462681272322)

最近 npm 對安全性問題，真的是用盡全力來處理，除了上面在 OpenJS 的場子，提到了許多針對提升安全性的功能之外，最近又發佈了上面的消息：

> New request for comments on improving npm security with Sigstore is now open
> 
> 
> https://github.blog/2022-08-08-new-request-for-comments-on-improving-npm-security-with-sigstore-is-now-open/
> 

剛看到 [Sigstore](https://www.sigstore.dev/) 完全不知道這是什麼東西，後來[找了一下](https://www.ithome.com.tw/news/143161)原來去年就已經啟動這個專案了，主要就是要針對開源軟體的供應鏈安全問題，提出一個透過簽署發佈的軟體，以確保軟體供應鏈的安全。（後來才發現 [kubernetes](https://blog.sigstore.dev/kubernetes-signals-massive-adoption-of-sigstore-for-protecting-open-source-ecosystem-73a6757da73) 也已經採用這個方式了）

看起來這是個影響不小的嘗試，雖然現在看起來[有些討論](https://www.ithome.com.tw/news/152397)的[聲音](https://github.com/npm/rfcs/pull/626)，不過還是期待後續的發展。

## 啦哩拉雜的一些有趣消息

### 正名

之前在 Node.js 生態裡面，對於「native modules」這個詞彙的使用有造成一些困惑，現在有正式的定義了，自此之後，對於 Node.js 內建的模組，將稱之為「built-in modules」，而那些透過諸如  Node-api 的動態連結函式庫，則稱「addons」。

![](https://twitter.com/JoyeeCheung/status/1556717639614902274)

### 富爸爸的火力碾壓 😅

沒想到居然已經被拉開這麼多了，M$ 果然戰鬥力驚人（覺得被 Salesforce 併購的都沒什麼好下場，希望 Slack 不要重蹈覆轍阿 😞）

![](https://twitter.com/myvaluepicks/status/1582248020783296513)

### 子承父業

不知道這種感覺是怎樣，但又覺得好像是推他進火坑 #誤

![](https://twitter.com/jasnell/status/1553191682044153856)

### 你終究是要辱華的

#不解釋。大家終究是要遇到這件事的，只是 what & when 而已 🤣

![](https://twitter.com/haoel/status/1557380131966005249)