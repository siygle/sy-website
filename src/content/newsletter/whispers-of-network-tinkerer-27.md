---
title: "網路黑手的呢喃 - #27"
date: "2023-03-16"
description: "陸續出現的 Node.js 的新功能(SEA、FFI)太香啦、Deno又在相容npm生態更近一步，還有在不遠處的 2.0？聯邦宇宙有機會崛起嗎？方便的小工具 - val.town，以及越來越多的網路…"
tags:
  - Deno
  - Fediverse
  - Newsletter
  - Node.js
  - StartUp
---
> 陸續出現的 Node.js 的新功能(SEA、FFI)太香啦、Deno又在相容npm生態更近一步，還有在不遠處的 2.0？聯邦宇宙有機會崛起嗎？方便的小工具 - val.town，以及越來越多的網路好東西 #不務正業
> 

---

## SEA 降臨 Node.js 19.7.0!!

之前提過好幾次的 single executable application 的功能，終於有第一個實作的版本啦，就在最新釋出的開發版本 - 19.7.0！好期待這個專案之後的發展啊，不知道有沒有機會讓未來的發布跟部署都能更精簡。

![](https://twitter.com/azu_re/status/1628193437135798273)

此外剛好有 core team 成員介紹了 Node.js 近期還支援了哪些新功能，也可以參考一下 ⬇️（其實應該在這邊都陸續提過了啦 😎）

![](https://twitter.com/ruyadorno/status/1628484773227253763)

## Node.js 也準備要支援 FFI 啦！

最近 Node.js 真的是動作頻頻耶，果然是「刺激求進步」（老人梗），有競爭者的情況下真的變革快上許多。

[https://github.com/nodejs/node/pull/46905](https://github.com/nodejs/node/pull/46905)

一旦支援 [FFI(Foreign Function Interface)](https://en.wikipedia.org/wiki/Foreign_function_interface)，Node.js 要整合其他靜態語言函式庫就更方便了。🙌（看提案裡面原作者的說明，目前初稿的 FFI 只能算最基本也還有許多限制，應該可以期待之後還會有更多的改進～）

![](https://twitter.com/bengl/status/1631055802059333632)

## Deno 1.31 & coming 2.0?

Deno 最近都很固定就會發布新版，然後近期看起來對 Node.js 生態的支持是首重的任務，所以新版幾乎也都圍繞在這點上，剛出爐的 1.31 也開始支援 Node.js 專案裡必備的 `package.json` 檔案，對於相容也更進了一步。

![](https://twitter.com/deno_land/status/1629123230492463106)

不過老實說，最近對於 Deno 的定位覺得有點尷尬，對於前輩 Node.js 也逐步增加了許多類似 Deno 優點的功能，譬如之前提過的[權限系統](https://github.com/nodejs/node/pull/44004)，或是更進一步的 [Single executable applications](https://nodejs.org/docs/latest-v19.x/api/single-executable-applications.html)，跟 Deno 之前越來越貼近了，然後還有不少[後起之秀](https://bun.sh/)，[各有自己的主場](https://github.com/cloudflare/workerd)，也不知道 Deno 有沒有機會殺出重圍站穩自己的腳步？

四月份的 nodecongress，[Ryan 以 Deno 2.0 作為題目](https://nodecongress.com/)，不知道有沒有機會聽到一些有趣的東西。😎

ps: 最近他們的[官方帳號](https://twitter.com/deno_land)經常會更新許多 tips，對 Deno 有興趣的開發者不妨可以追蹤起來。然後看起來他們也越來越重視相關的文件跟範例這類的資源，對於想投入的新開發者很有幫助。

![](https://twitter.com/hashedrock/status/1635514059079688192)

## Fediverse 有機會繼續擴展嗎？

之前提過 Automattic 旗下也算知名的 Tumblr [宣佈要支援 ActivityPub 協定](https://www.ithome.com.tw/news/154430)，也算正式宣告要支援 Fediverse（雖然一直等到現在都還沒實現😅)，然後最近又看到這個消息⬇️

![](https://twitter.com/TechCrunch/status/1635321424062844929)

看起來的確很像是 Automattic 會做的事阿😄

這樣應該官方直接支援 Fediverse 的功能應該不久之後有可能會直接整合到 WordPress & [WordPress.com](http://WordPress.com) 裡面也說不定。雖然這個分散式的社交協定在馬老闆常常自爆的情況下成長了不少，但是對一般使用者要轉移還是有相當的難度，大多都還是有技術背景的用戶比較願意嘗鮮。

WordPress 這個難以撼動的市占王者宣佈支援或許是個契機，然後最近冒出來的 [Meta 好像也打算弄一個類似的產品](https://www.businessinsider.com/meta-working-on-twitter-like-social-network-p92-instagram-logins-2023-3)的新聞，說不定也有機會推波助瀾，可以期待看看 😆

![](https://twitter.com/mattn_jp/status/1635888782959611905?s=61&t=-8QfXIkAo_EJ2rtVc89xcg)

說到這邊又想起隔壁棚的 [bluesky](https://bsky.app)，最近悄悄開始邀請制的測試，畫面真的是完全致敬 twitter 啊（不過我覺得這不算壞事拉，如果希望能最大程度挖角原 twitter 的使用者的話，相似的使用介面應該很有幫助。）

不過讓我注意到的是，bluesky 似乎也是可以支援不同 instance 的登入，雖然他們是自己設計的[新協定](https://atproto.com)，不知道有沒有機會最後也能加入 Fediverse 的陣容裡面。😁

## 好方便的網路小工具

最近發現這個叫 [`val.town`](https://www.val.town/) 的服務真的是一個非常方便的小工具。它有點像 gist 的加強版，一樣是可以讓你簡單放一段小程式，但跟 gist 不同的是，它不像 gist 用途大多是分享跟討論，但 val.town 能夠讓你執行這段程式，而且你還可以很簡單去呼叫別人寫好的功能，所以透過它你就可以很方便組合出一些有趣的東西來，可以參考它的[範例](https://www.val.town/explore)。😄

[https://www.loom.com/share/c075dc075909400a85591ac3f83d1ca5](https://www.loom.com/share/c075dc075909400a85591ac3f83d1ca5)

然後最近它的作者宣布，平台的運行環境從原本的 Node.js 改成 Deno 了，這樣應該可以無痛直接使用 Deno 的許多方便的功能啦（TS & npm 相容 🚀）

ps：不過原本以為連模組都可以支援，看起來好像沒有😢

![](https://twitter.com/stevekrouse/status/1635720615628767287)

---

## 網路是個好東西

### 可以開始期待每個人在不久的將來都有個語音助理了嗎🤩

![](https://twitter.com/cyukang/status/1635248899073150977)

### 動起來動起來，備戰GPT4!

看你人工智慧比較厲害，還是我人海戰 #誤

![](https://twitter.com/walkingice/status/1635889019518345216)

### 沒有富爸爸真的很辛苦😢

我也很喜歡 Gitlab，印象中他們算是跟 Automattic 兩大知名的全遠端軟體開發商，有點感傷啊，在資本主義的鐵拳下大家都要趴下…

![](https://twitter.com/vikingmute/status/1635445268878606339)

### 難怪我一直都這麼平靜🤣

![](https://twitter.com/leafwind/status/1635277274584059909)

### 千萬別得罪天橋底下說書的🤣

![](https://twitter.com/zptgddq/status/1634910155392557057)

### 今天才猛然了解這個血淋淋的現實🫢

![](https://twitter.com/Wesker_Davis/status/1632334887280869376)

### 千萬不要買錯戒指 #誤

![](https://twitter.com/tw111111111111/status/1635998455431589888)