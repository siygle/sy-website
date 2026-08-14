---
title: "網路黑手的呢喃 - #60"
date: "2025-01-10"
description: "Our goal is to build a reimplementation of SQLite from scratch, fully compatible at the language an…"
tags:
  - AI
  - Database
  - Deno
  - Javascript
  - MooDeng
  - Newsletter
  - Node.js
  - Toolkit
  - Web
  - bun
---
---

## JS runtime 的軍備競賽還是持續中 😆

看到 Deno 準備支援 QUIC 跟 SQLite 的消息了。

[QUIC](https://medium.com/jalexs-murmur/intro-http3-quic-dc11e77bbb9f) 應該就是 HTTP3 的部分了，雖然 HTTP2 到現在好像都還沒普及，現在走到 3 可能也只是實驗性質居多，不過 [Node.js 那邊也是在 v23](https://github.com/nodejs/node/pull/44325) 開始逐步實作了，希望可以帶動一些其他的應用出現。

![](https://x.com/rough__sea/status/1870225654257725478)

然後因為 QUIC 已經實作，所以其他的應用也會開始出現了，譬如 WebSocket 的進化版 - [WebTransport](https://github.com/w3c/webtransport) 也出現在下一版的功能中了。（其實我是看到 PR 才知道這個東西的，真的是進化的速度太快已經追不上了 😅）

[https://github.com/denoland/deno/pull/27431](https://github.com/denoland/deno/pull/27431)

另外，之前提過的 KV 的本地實作就是 SQLite，印象中原本就是 Deno KV 先出現，然後 Node.js 實作 node:sqlite，結果現在為了相容 Deno 又支援了 `node:sqlite` 的功能，覺得也是很微妙 😅

![](https://x.com/rough__sea/status/1875749204129382694)

然後最近 Deno 的 Star 也正式突破 10 萬大關了（雖然實際使用的比率感覺還比不上這個數量 😓），體感 2.0 之後 Deno 受到的關注好像有變多一些，不過缺少一些強力的使用場景，讓它還是有點不上不下，還是希望能越來越成熟並吸引更多開發者。

![](https://x.com/deno_land/status/1870134621230538956)

不過隔壁棚的 Bun 也沒閒著，看到它們也準備加上 S3 的功能（我自己是不太喜歡這種功能內建到 runtime 裡面的，覺得這應該是 modules 去處理的），可能大家都是走向 all-in-one 的方向去，畢竟 JS 生態的碎片化也是一直被詬病的問題之一，雖然 all-in-one 有好處，不過我更傾向 Deno 用 std 來處理的方法，更優雅一點。

![](https://x.com/jarredsumner/status/1875432015870546058)

最後老牌的 Node.js 也沒停下腳步，最近熱門的應該就是最新的 v23 版本已經支援執行 TypeScript 檔案啦！ 🎉

![](https://x.com/satanacchio/status/1876690820155531775)

但這也只算初步而已，目前也還不是完全支援 TS 的所有功能，然後 Node.js 這邊也還有進行中的後續，其他的細節可以參考其他開發者已經整理好的文件 ⬇️

[Node’s new built-in support for TypeScript](https://2ality.com/2025/01/nodejs-strip-type.html)

## Limbo，這是什麼？

[***Turso**](https://turso.tech/) 也是一間很愛惡搞又熱血的公司阿 #尊敬貌* 🙌

SQLite 應該是大家很熟悉的一個輕量嵌入式資料庫，因為簡單易用也方便整合，成為許多開發場景的首選，不過因為它設計的目的並不是針對雲端、分散式的環境，所以當初為了基於 SQLite 並拓展它到雲端的開發環境，Turso 決定從 [SQLite](https://github.com/sqlite/sqlite) 分支出 [libSQL](https://github.com/tursodatabase/libsql) 來，目的就是在維持對 SQLite 的相容之下，還能快速的增加其他的功能進去。

[Introducing Limbo: A complete rewrite of SQLite in Rust](https://turso.tech/blog/introducing-limbo-a-complete-rewrite-of-sqlite-in-rust)

沒想到他們的野心可不止這樣而已，上面這篇最新的公告，就是介紹他們最新的官方專案 - [Limbo](https://github.com/tursodatabase/limbo)，用 rust 重新改寫的 SQLite ⬇️，希望透過 rust 安全的特性，能夠快速實作自家服務想要加入的新功能（如 AI 相關的 vector search），也能維持，甚至有更好的性能表現，仍能相容於 SQLite。

> Our goal is to build a reimplementation of SQLite from scratch, fully compatible at the language and file format level, with the same or higher reliability SQLite is known for, but with full memory safety and on a new, modern architecture.
> 

雖然這個專案還在初期，不過文中已經提及很多有趣的變革，譬如非同步的 I/O、原生支援 WebAssembly 等，此外它們也提及它們如何透過 Deterministic Simulation Testing 在實作的過程中，能夠達到更好的測試。

有興趣或喜愛 Turso 服務的開發者，非常建議可以留意這個有趣的專案 👍

## 擋不完的 Supply Chain Attach

前幾天瞄到這個 [issue](https://github.com/web-infra-dev/rspack/issues/8767) 沒太留意它的內容，不過就緊接著看到 Socket 發出來的安全公告以及專文，沒想到這次的受災戶居然是 Rspack！

詳細的內容可以參考 Socket 的專文，看起來又是一次 token theft attack，然後「有心人士」就透過擁有發布新版的權限，塞入了惡意的程式，然後順勢發布了新版出去。

[Supply Chain Attack on Rspack npm Packages Injects Cryptojac...](https://socket.dev/blog/rspack-supply-chain-attack)

蠻有意思的是，因為這起攻擊事件的後續討論，看到有開發者提議在套件管理器這邊加上一個限制，禁止有認證的版本升級到非認證的版本，詳細的討論可以看下面的連結 🔽

[https://github.com/pnpm/pnpm/issues/8889](https://github.com/pnpm/pnpm/issues/8889)

這邊的認證猜測應該是利用 npm provenance 的功能，這是之前 Github 增加的安全性機制，等同於幫套件驗證「這個版本是在 Github Actions」上建構後發布的，不是隨便哪位在本地端跑一跑上傳的版本。

如果透過上述的兩個機制，這次的 Rspack 事件就可以被擋下來，因為即便攻擊者竊取到 token、植入並發布惡意版本，因為它沒辦法取得 CI 的權限，自然拿不到 provenance 認證，然後套件管理器就會阻擋這類的新版被使用。

[Introducing npm package provenance](https://github.blog/security/supply-chain-security/introducing-npm-package-provenance/)

或許可以留意下這個議題的後續發展，攻擊的方式實在太多了，這種諜對諜的攻防想必還是會一直充斥在整個開發環境中的。😅

不過既然講到供應鏈攻擊，最近 swc 的作者也提出了一個解法：

[Open Letter: Let's stop supply chain attack](https://kdy1.dev/2025-1-3-open-letter-lets-stop-supply-chain-attack)

這邊其實就是增加驗證的機制（因為 2FA 沒辦法在自動化流程中使用），下方是作者用 swc 作範例來說明的流程圖。其實就是多了 Verification Request 這個步驟，然後需要多個維護成員審核之後才會正式發佈出去。以之前的幾個案例來看，攻擊是因為金鑰竊取之後，攻擊者直接在本地發佈注入惡意程式的版本導致。多了這個審核機制的話，就可以防止上述的情境發生，多一層的防護。

看到各家大大都有針對安全性提出不同的改善方法，駭客與資安真的是持續不斷的攻防。

## 2024 JavaScript Rising Stars

這種年更文也差不多都是在歲末年初的時候出現，今年的版本也發了（不過正如我寫的，老了之後真的什麼都沒有興趣了，尤其是 JS 生態更是心累，永遠類似的東西不斷出現 😓），不過有興趣想知道最近又出現什麼有趣的東西的話，還是可以看看。（果不其然多了 AI 這個新的分類）

![](https://bsky.app/profile/sylee.dev/post/3lfajtps6q22k)

## 方便的截圖小工具

沒想到 2025 年一開始就可以看到這麼方便的小工具 🙌

自從轉過去藍天之後，就經常困擾的一件事，因為多數的資訊還是在 X 那邊，有時候就會需要轉文過來，但若遇到長文或是包含媒體檔案的時候就會有點麻煩，不過這個小工具就無痛解決這個問題啦！直接跑 CLI 就幫你產出完整的截圖出來，超方便～（範例可以參考下文）

[https://github.com/fa0311/twitter-snap](https://github.com/fa0311/twitter-snap)

## 中國特色 AI 😅

*承上題，順便讓大家看一下截出來的效果如何* 😄

有稍微瞄到這個新聞不過沒太留意，後來居然是在數個財經相關的 Podcasts 聽到（這篇的股癌也是其中之一沒錯 😅），因為 AI 的軍備競賽直接關係到的就是相關的晶片，所以去年大家應該很常在財經股票投資的相關議題中聽到。

不過大家應該也知道因為中美貿易戰的關係，美國對中國有高階晶片的限制，所以中國沒辦法大量取得高階晶片，所以一直在 AI 模型沒什麼特別的產出，就因為這樣，所以這個 [DeepSeek](https://github.com/deepseek-ai/DeepSeek-V3) 以相關較少的運算成本，卻可以達到媲美其他大型模型的品質，不知道會不會給 AI 戰場帶來新的改變（如果晶片不再佔據這麼重要的角色的話？）

src: [https://x.com/Evan_Lin/status/1873656100102537308](https://x.com/Evan_Lin/status/1873656100102537308)

## Nvidia @ CES

[東西蠻多](https://www.youtube.com/watch?v=k82RwXqZHY8)的但只留意到財力範圍內的東西 😅

雖然這種小型機也不是什麼神奇的東西，不過畢竟是 AI 霸主出的自帶光環。然後看起來就是面向工作室或中小型企業有 AI 需求的話，可以作為一個輕量版的自架機使用。說不定之後真的是人人家中都要有一台 AI Hub 了。

![](https://bsky.app/profile/sylee.dev/post/3lf55s3lygk26)

不過另外帶到說不定 Nvidia 有可能要跨進 desktop CPU 的計畫，覺得這世界變化真的是太快了，原本的霸主 Intel 會不會 2025 消逝的速度會更快阿～（後來翻了下資料，原來 Nvidia 本來就有一款 [Grace CPU](https://www.nvidia.com/zh-tw/data-center/grace-cpu/) 了）

[Nvidia’s Jensen Huang hints at ‘plans’ for its own desktop CPU](https://www.theverge.com/2025/1/8/24338939/nvidia-jensen-huang-hints-arm-desktop-cpu)

## **網路是個好東西**

### 不解釋

盼望各地的戰友們都加油！

[罷免民主快餐 aka 罷免新手懶人包 | Linktree](https://linktr.ee/apple004)

![](https://x.com/mmm_twlzl/status/1869593120092172678)

### 看到廣末就要推！

沒想到居然可以看到她以歌手的身分登場 😆

![](https://x.com/memeonmusic/status/1876119198738571572)

### ~~奧術續作！~~  被騙了，[原來只是遊戲](https://gnn.gamer.com.tw/detail.php?sn=279267) 😢

*其實現在還不確定到底是真的要上了，還是這是別的東西* 😅

但看起來的確是奧術裡面的人物，難道續作**諾克薩斯**真的 2025/1/10 就要上了！這會不會太嗨了，拳頭社早就默默開始製作了嗎？

![](https://www.youtube.com/watch?v=I76wvt0aEE4)

### 最近世界太悶，只能繼續看可愛 Moo Deng 😅

![](https://x.com/auramoneyman/status/1876752955321282753)

![](https://x.com/sighyam/status/1837903612871094669)

![](https://x.com/auramoneyman/status/1866226369975251005)

![](https://x.com/auramoneyman/status/1862787440718524595)

![](https://x.com/auramoneyman/status/1868683361818222630)