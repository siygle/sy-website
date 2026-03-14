---
title: "網路黑手的呢喃 - #11"
date: "2022-04-10"
description: "每年的熬夜的時間又來了😪、Slack beta platform 嘗鮮、Golang 對應 supply chain attacks 的作法與 1.18 加入的 workspaces 功能，以及強…"
tags:
  - Apple
  - Golang
  - Google
  - Microsoft
  - Newsletter
  - Node.js
  - Security
---
> 每年的熬夜的時間又來了😪、Slack beta platform 嘗鮮、Golang 對應 supply chain attacks 的作法與 1.18 加入的 workspaces 功能，以及強大的 twitter 搜尋功能！
> 

---

## 三大家都到齊了囉

大家都已經養成習慣每年年中就是 MS、Apple、Google 三大家的年會舉辦的時候，雖然近來都沒什麼真的非常驚豔的東西，不過應該還是能期待一些新產品或有趣的東西出現（吧!?）

**Google IO 2022/05/11**

[https://twitter.com/sundarpichai/status/1504205169797435395](https://twitter.com/sundarpichai/status/1504205169797435395)

**MS Build 2022/05/24~26**

[https://twitter.com/msdev/status/1509215842491326464](https://twitter.com/msdev/status/1509215842491326464)

**Apple WWDC 2022/06/06~10**

[https://twitter.com/ethanhuang13/status/1511401138826129408](https://twitter.com/ethanhuang13/status/1511401138826129408)

## Slack beta platform - 試玩篇

[之前](https://chat.sylee.dev/2021/11/28/%e7%b6%b2%e8%b7%af%e9%bb%91%e6%89%8b%e7%9a%84%e5%91%a2%e5%96%83-2/)有提過 Slack 基於 deno 打造下一代的 app 平台，最近剛好有機會在公司內部試玩，就稍微簡單記錄了下心得跟一些有趣的地方。

[https://twitter.com/siygle/status/1512745270538571776](https://twitter.com/siygle/status/1512745270538571776)

## 大家都要拿 npm 出來鞭屍 #誤

哈，其實是 PTSD 發作😆

這是 Go 團隊針對近期不斷出現的 Supply-Chain Attacks 所撰寫的文章，提到在 Go 的生態圈與模組處理上有哪些機制，是可以防制 Supply chain attacks 攻擊的發生。其實文章裡面蠻多的內容都是引用自 [Go mod 實作文件](https://go.dev/ref/mod)裡面，所以找時間啃一下會很有幫助。

不過文內提到兩個特質倒是值得最近 Node.js 陣營好好審思一番的，一個是 lock & never change 的概念，目前 npm 安裝預設是會是 `^` 也就是它默認會[自動安裝 minor upgrade](https://docs.npmjs.com/cli/v7/using-npm/config#save-prefix)（原本 `~` 就已經會造成類似的問題了），看最近幾次的問題不都是因為這個行為帶來的問題😕

另一個是 Standard library 的問題，這其實也在 Node.js 陣營裡面討論過不少次了（看每年的 state survey，標準函式庫都是期待改善的[高排名](https://2020.stateofjs.com/en-US/opinions/#missing_from_js)，Filippo 在文中也提到，越少的依賴就相對讓 Supply chain attacks 發生的機率降低，像 Golang 本身有很完善的 std 就不需要開發者依賴太多第三方的套件就可以進行開發。

或許這兩項都是 Node.js 陣營應該好好思考的（轉頭看 Deno 都沒這種問題 😎）

[https://twitter.com/FiloSottile/status/1509574230274416648](https://twitter.com/FiloSottile/status/1509574230274416648)

## Multi-Module workspaces in Golang 1.18

Golang 1.18 終於問世，大家可能都是聚焦在期待很久的 Generics 的功能上（不過 Rob 都還對 Generics 的變革很保守，距離成熟很能也還需要一段時間 ），不過有個有趣的東西也默默加入到 1.18 的版本了，就是 [multi-module workspaces](https://github.com/golang/proposal/blob/master/design/45713-workspace.md)。

透過新定義的一系列指令跟 `go.work` 檔案，可以處理本地端開發會遇到的多模組依賴的問題，有一點類似 Node.js 生態圈常提到的 monorepo 可以解決的問題之一，更多細節一樣也可以參考 [Tony Bai 的新特性系列文](https://tonybai.com/2021/11/12/go-workspace-mode-in-go-1-18/)。

[https://twitter.com/golang/status/1511787444781428737](https://twitter.com/golang/status/1511787444781428737)

## 進階 twitter 搜尋技巧

無意間看到這則推文，裡面介紹了 twitter 上面的一些搜尋技巧，FB 的搜尋一比較起來真的跟垃圾差不多了（#戰）

簡單整理如下，詳細介紹可以看原作者的推文介紹

- **from**:twittername (找特定用戶的發文）
- keyword1 OR keyword2
- **min_faves**:2000（找 > 2000 like 的推文）
- **min_retweets**:2000（找> 2000 轉推）
- **filter**:links（找內文有連結）
- **filter**:images（找推文有圖片）
- **since**:YYYY-MM-DD （加上時間過濾，從）
- **until**:YYYY-MM-DD （加上時間過濾，到）
- **near**:location within:15mi（發推者的位置）

[https://twitter.com/TessaRDavis/status/1512402324102291467](https://twitter.com/TessaRDavis/status/1512402324102291467)