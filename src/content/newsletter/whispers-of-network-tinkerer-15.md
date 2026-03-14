---
title: "網路黑手的呢喃 - #15"
date: "2022-06-21"
description: "MDBW2022、Open JS World 中提到的近期安全性問題、Serverless Postgres、（可能加入）新的 npm 指令、Web5!?，還有新開闢之林林總總（~~太短湊不到一個段…"
tags:
  - Deno
  - MongoDB
  - Newsletter
  - Node.js
  - Postgres
  - npm
---
> MDBW2022、Open JS World 中提到的近期安全性問題、Serverless Postgres、（可能加入）新的 npm 指令、Web5!?，還有新開闢之林林總總（~~太短湊不到一個段落~~）與網路是個好東西（~~垃圾話~~）。
> 

---

## MDBW22

MongoDB 的場子，終於在疫情關係停滯一陣子之後又[再次紐約實體](https://www.mongodb.com/world-2022)舉辦了，裡面有提到不少有趣的新功能，細節可以參考前篇整理的[專文](https://chat.sylee.dev/2022/06/19/%e7%ad%86%e8%a8%98-mongodb-world-2022/)。

## The State of JavaScript Supply Chain Security in 2022

[https://twitter.com/feross/status/1534641027323006976](https://twitter.com/feross/status/1534641027323006976)

之前幾期都提過的 Node.js/npm 生態圈近期的安全性問題（主要是 Supply Chain Attack），也有不少新創因之而起，譬如之前也提過的 [socket.dev](https://socket.dev/)，剛好在這次的 #OpenJSWorld22 其創辦人就剛好針對這個題目有一場議程分享，蠻值得 Node.js 開發者看看，也可以試試它們家提供的服務。

## Serverless Postgres - Neon

[https://twitter.com/Neondatabase/status/1537062599703011330](https://twitter.com/Neondatabase/status/1537062599703011330)

看 Document-based Database 近年來快速的發展，原本的 RDBMS 當然也不能落後，果然就有新創也是看準這個切入點，提供 Postgres 這套也是相當知名的 Postgres（其實妳也是可以把它拿來當作 Document-based 來用的，雖然知名度一直沒有 MySQL，也是很威的資料庫方案）

看起來跟 MongoDB 家的 serverless instance 類似，也是強調彈性的使用、延展，跟 pay-as-you-use 的特點，目前封測中，有興趣可以去派對，人品好的話有機會可以試用看看（我的人品不夠好 😢）。

## npm query

[https://twitter.com/bitandbang/status/1534916251461484544](https://twitter.com/bitandbang/status/1534916251461484544)

最近 npm 提出的其中一個 RFC，完整的說明文件可以參考這邊：[[doc](https://github.com/npm/cli/blob/4511d0d0e45a3a75be90ddfd8ac9dd6cbc5c14b6/docs/content/commands/npm-query.md)]、[[PR](https://github.com/npm/cli/pull/5000)]。這功能是其中一個新的指令 `npm query`，可以讓你透過 CLI 快速針對安裝的套件去進行各種的查詢語句，如下是一個文件舉的例子：

```
# find all git dependencies & explain who requires them
npm query ":type(git)" | jq 'map(.name)' | xargs -I {} npm why {}
```

## 歡迎來到Web5的到來!?

[https://twitter.com/TBD54566975/status/1535303403361824768](https://twitter.com/TBD54566975/status/1535303403361824768)

說不定有人看到標題就火氣上升了😅

近來太多的 NFT、加密貨幣的東西，看到現在大部分幾乎就是炒作的成分居多，就算很有心想推動商業化，但依照目前的情況來看，我看還有的等（會不會有等到的一天就難說）。然後現在 Web3 炒爛了，現在要改新目標 - [Web5](https://docs.google.com/presentation/d/1SaHGyY9TjPg4a0VNLCsfchoVG1yU3ffTDsPRcU99H1E/edit#slide=id.g11b904107df_0_1) ?

別擔心，不是想像的那種（至少目前看起來不是😆），看起來 [Jack 也是受夠](https://twitter.com/jack/status/1535314738078486533?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1535320421972725761%7Ctwgr%5E%7Ctwcon%5Es2_&ref_url=https%3A%2F%2Fwww.inside.com.tw%2Farticle%2F27979-jack-dorsey-block-tbd-web5) web3 的一堆炒作的現象，所以由自家 Block 提出的 Web5 的新概念，希望能基於比特幣協定，來搭建出下一代的分散式網路架構。現在只能說很理想但還不知道有沒有機會走到那步，不過根據之前 Jack 還在 Twitter 時期，一手推動的[Bluesky](https://blueskyweb.xyz/) 計畫的前例，還是有點期待後續的發展會是怎樣。😎

## 林林總總

- [Node.js 的 repo 也終於從 master 改為 main 了](https://github.com/nodejs/node/issues/33864)，雖然本身對這個作法不太能理解就是了（不予置評，我不想炎上阿） 😅
- [Deno 1.23](https://deno.com/blog/v1.23) 釋出，其中最大的改變應該是之前官方有提過，會[關掉預設型別檢查](https://deno.com/blog/v1.23#no-type-checking-by-default)的行為。
- [Node.js 18.4.0](https://github.com/nodejs/node/releases/tag/v18.4.0) 釋出，看出有持續在 webcrypto 整理，不確定是不是為了對齊 WinterCG 的關係，不知道之後跟原本的 crypto 會怎麼協助（目前看起來是[放在 crypto 下面](https://nodejs.org/api/webcrypto.html#web-crypto-api)）。

## 網路是個好東西

整理這篇的時候突然覺得，老是放這些苦悶的東西一點都沒辦法顯出我的本性，還是要多放些樓偏的東西才比較切合「呢喃」這個詞彙。😎

[https://www.youtube.com/watch?v=YUqSqJ6Jnc4](https://www.youtube.com/watch?v=YUqSqJ6Jnc4)

感謝 youtube 的推薦機制（~~大部分時間是感到厭煩~~），原本以為是商品開箱，結果竟然是動手做系列，太猛了（這個頻道大推！）。翻頁時鐘真的好療癒阿，真的會忍不住想動手弄一個（但是硬體實在太苦手🤣）