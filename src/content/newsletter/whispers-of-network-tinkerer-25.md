---
title: "網路黑手的呢喃 - #25"
date: "2023-02-02"
description: "Deno 跟 Bun 的恩怨情仇（續）、後 Twitter 時代大混戰、Deno 現在夠穩了嗎？每年都要更新一波的 Node.js 近況與展望，當然還有比文本更多的網路好東西 🤣"
tags:
  - Deno
  - Newsletter
  - Node.js
  - Twitter
  - bun
  - nostr
---
> Deno 跟 Bun 的恩怨情仇（續）、後 Twitter 時代大混戰、Deno 現在夠穩了嗎？每年都要更新一波的 Node.js 近況與展望，當然還有比文本更多的網路好東西 🤣
> 

---

## Deno 跟 Bun 是不是有仇阿~

可能技術人也是有八卦魂在心中，看見 drama 跟講垃圾話也是苦悶生活中調劑身心的好東西吧 😆。

之前已經有提過好幾次關於 bun & Deno 的恩怨情仇，看來沒有要消火的意思阿，一個 podcast 中的一段採訪，就又讓兩邊戰起來了。（頂樓推主真的很故意，還 mention 兩邊約戰...😆。

[https://twitter.com/lcasdev/status/1614669039015727108](https://twitter.com/lcasdev/status/1614669039015727108)

## 後 Twitter 時代，誰與爭鋒！

*謎之音：請不要自己把 Twitter 當成已經過去的東西好嗎？*

今天看到傑克又發了重大消息啦，之前他[投資](https://www.coindesk.com/tech/2022/12/15/jack-dorsey-gives-decentralized-social-network-nostr-14-btc-in-funding/)的另一個分散式架構的社交網路 - nostr，終於有可以測試的版本出來啦，各平台都有喔。👍

不過老實說，稍微玩過的想法，這比起另一邊的 Fediverse，這個感覺玩具感太重（當然考慮到它剛推出沒多久，也不太可能有多成熟的生態），雖然[它號稱可以透過簡單的架構達到分散跟隱私的目的](https://github.com/nostr-protocol/nostr)。不過再觀望看看吧～

[https://twitter.com/jack/status/1620552041600000000](https://twitter.com/jack/status/1620552041600000000)

但其實之前有提過的另一個也是從 Twitter 家催生出來的 - [Bluesky](https://blueskyweb.xyz/)，最近也開始有些動作，不過這專案其實開跑至今也是蠻長一段時間了（但還是沒看到什麼實際的東西），考慮到很多人要來分食，動作太慢的話可能也是沒什麼太大影響了。😅

[https://twitter.com/bluesky/status/1583184127465259009](https://twitter.com/bluesky/status/1583184127465259009)

目前看起來還是 Fediverse 最有機會接下來，畢竟生態圈比起其他競爭者成熟許多，[ActivityPub](https://zh.wikipedia.org/wiki/ActivityPub)協定也行之有年了，不過怎麼讓一般用戶（或是核心用戶）也願意轉移過來，是它能不能笑到最後的因素（還是其實它不在意？畢竟前幾年它也是慢慢活在自己的角落，要不是因為有馬加速師出現 😄）。

不過起碼現在看起來，網路世界比起之前有趣多了～

## Deno 加加油阿 🤞🦕

無意間看到網友轉發了這個小專案，覺得蠻有意思的（開源圈就是這麼熱血）。感覺作者應該也是小恐龍的愛用者，但是目前恨鐵不成鋼 #誤

作者針對目前 Deno 缺少及不足的東西，有開發第三方模組，也有整理一些相關資訊，都收錄在[這個網站](https://duno.land/)裡面。

> Why Deno might not be ready for you and what we are doing about it
> 
> 
> 看一下網站的 solgan 真是好勵志阿 😆
> 

[https://twitter.com/azu_re/status/1620039657710051328](https://twitter.com/azu_re/status/1620039657710051328)

雖然我私心也是很希望看到 Deno 能夠起來，不過目前感覺前路也是滿艱辛的。因為跟 Node.js 生態高度重疊，首要會遇到的問題一定是「為什麼我 Node.js 用的好好的，要換去用一個新的？」，尤其是新品沒有非常明顯的優勢的話。

所以這個作者在站中提及的那幾點，我覺得都有提到關鍵點上。

- **不夠快** - 我也覺得 Deno 的比較者要放到 Go 這類靜態語言上（至於有沒有可能優化到這種程度，就要看 ry 跟 core team 了），尤其近來跟 bun 感覺有競爭激化，bun 最常就是拿 benchmark 出來比較，這也是只能硬上的肉搏戰。
- **不夠成熟** - 在 [1.29 加上 npm 模組的支援](https://deno.com/blog/v1.29)，以及 [1.30 也開始支援 Node.js 核心模組](https://deno.com/blog/v1.30)這兩大功能後，Deno 起碼終於開始走上相容 Node.js 生態之路，雖然可能還有很長一段路要走，不過比較之前早期的版本，現在開發起來是蠻香的。😄
- **資源不夠多** - 這就有點雞生蛋、蛋生雞的問題了，基本上除非 Deno 真的迎來起飛點，不然在開發者少的情況下，資源一定也是少的。

總之我還是會繼續關注 Deno 發展的，畢竟我是那麼喜新厭舊的嘛～ #誤

最近它們也像詢問開發者的意見來調整它們未來發展的方向，有興趣的開發者也可以幫忙它們一下喔 ⬇️

[https://twitter.com/deno_land/status/1617574544050638850](https://twitter.com/deno_land/status/1617574544050638850)

## Node.js - what's next?

*應該每年都會有類似的文章出現 😆*

又是盤點最近 Node.js 生態的狀況，以及新版本和未來有什麼有趣的功能已經進入 review 或討論了（還是需要有趣的東東來提升一下活力阿）。

雖然文章是日本，不過搭配些微的漢字跟圖片，其實應該都可以知道在說些什麼。裡面有不少也在之前有提過，像內建 [test runnner](https://nodejs.org/en/blog/release/v18.13.0/)、[watch mode](https://nodejs.org/en/blog/release/v18.11.0/)，還有類似 [Deno 的權限](https://github.com/nodejs/node/pull/44004)以及自看到以來就非常期待的 [Single executable application](https://github.com/nodejs/node/pull/45038)。有些已經正式上線（v18），有些則還在討論階段，不過看到 Node.js 的生態仍舊這麼活躍真令人欣慰👍

有些之前沒留意的 PR 也是蠻令人期待的 😙

- [QUIC (HTTP/3)](https://github.com/nodejs/node/pull/44325)
- 很多程式都有內建的，[起一個 static server 的功能](https://github.com/nodejs/node/pull/45096)（之後就不用再裝第三方或是 `python -m` 啦！）

當然還有很多，有興趣也可以定期看一下 [Next-10](https://github.com/nodejs/next-10) 裡面的討論，想練一下日文聽力的話可以直接收聽[當天的錄影](https://www.youtube.com/watch?v=cXi4L4IuGZs)。

[https://twitter.com/shisama_/status/1618845722253889536](https://twitter.com/shisama_/status/1618845722253889536)

---

## 網路是個好東西

### 變太快真的追不上了😅

[https://twitter.com/fzhantw/status/1614831177562730496](https://twitter.com/fzhantw/status/1614831177562730496)

### 我也好想有這種墊高的起跳點😅

[https://twitter.com/anaconda1030089/status/1620272701209473024](https://twitter.com/anaconda1030089/status/1620272701209473024)

### 怎麼跟我一樣😆

一切都是浮雲～

[https://twitter.com/fffabs/status/1619740105438302209](https://twitter.com/fffabs/status/1619740105438302209)

### 錯失的疫情裁員紅利 #誤

是怎麼想到這種方法的🤣

[https://twitter.com/vikingmute/status/1619872671529062400](https://twitter.com/vikingmute/status/1619872671529062400)

### 實用年更文 😆

買好了嗎 #誤

[https://twitter.com/shouldwang/status/1618600738539864064](https://twitter.com/shouldwang/status/1618600738539864064)

### 我都直接攻頂 #誤

還是要穩紮穩打啦XD

[https://twitter.com/loige/status/1618301187056406530](https://twitter.com/loige/status/1618301187056406530)

### 其實我還滿年輕的嘛 😆

[https://twitter.com/Megabits_mzq/status/1617738043187933184](https://twitter.com/Megabits_mzq/status/1617738043187933184)