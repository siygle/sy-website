---
title: "What's new in Node.JS v0.11.9"
date: '2013-11-29'
tags: ['Node.js', '2013']
draft: false
summary: '基本上我已經放棄看到 v1.0 在今年問世的可能性了，不過現在看起來連 v0.12 會不會出現可能都得打上問號。因為是最後一個穩定版號，所以看起來內部翻修、新增的東西都不少'
---

基本上我已經放棄看到 v1.0 在今年問世的可能性了，不過現在看起來連 v0.12 會不會出現可能都得打上問號。因為是最後一個穩定版號，所以看起來內部翻修、新增的東西都不少，這週丟出來的 [v0.11.9](http://blog.nodejs.org/2013/11/20/node-v0-11-9-unstable/) 也多了不少東西。

因為我這個人的花俏個性以及喜新厭舊的壞習慣，所以就只拿新東西出來說說，bugfix/improvement 就自行去看公告吧 xDD

#### [tls: add ECDH ciphers support](https://github.com/joyent/node/pull/5854)

就是某種[加密方法](http://en.wikipedia.org/wiki/Elliptic_curve_Diffie%E2%80%93Hellman)嘛（炸），可以藉以達到 [PFS(Prefect forward secrecy)](http://en.wikipedia.org/wiki/Forward_secrecy)。這種密碼學的東西實在超出我的能力太多了，有興趣的自行鑽研吧 XDD

不過新版出來沒幾天後，[twitter 也發了篇新聞稿](https://blog.twitter.com/2013/forward-secrecy-at-twitter-0)提到這東西，為了因應某(N)機(S)構(A)的特別行動（話說我寫這段話的時候也好緊張的說 XD）

> 簡單的說，現行 https 是以私鑰加密後傳送

> 不過往後如果某機構取得你的私鑰的話，還是可以把之前擷取的訊息全部解開

> 不過上了 ECDHE 之後，過一段時間之後私鑰就會過期，所以即使它拿到也無法解開加密的訊息。

這是我理解的部份，有錯的話麻煩鞭一下 XDD

總之在 nodejs v0.11.9 之後就可以直接在 [crypto](http://nodejs.org/docs/v0.11.9/api/crypto.html#crypto_class_diffiehellman) 中使用了 ;p

#### [node: add AsyncListener support](https://github.com/joyent/node/commit/efa62fd9cc817434206d9fd8592b7bbeaa240e9c)

這也是在這個版本之後加到 nodejs core 裡的新[API](http://nodejs.org/docs/v0.11.9/api/process.html#process_async_listeners)。讓開發者可以監聽非對稱事件。還搞不太清楚這東西的用途，不過 [domain 模組](https://github.com/joyent/node/commit/bc39bdd995d70238eea4a217386869d94c69f614)似乎已經有用上這個。

#### i18n

順帶一提，之前提過的 internationalization api 還沒被加進來，不過有看到 [issue](https://github.com/joyent/node/issues/6371) 上有被拿來討論，應該下一版就會現身了 ;p

繼續期待 v0.12 的到來吧!!  
人家 Golang 都已經開始定[1.3](https://docs.google.com/document/d/1s6MxBsLyBG45SRS60a-aM01DmZ4hD1nMzGAKdTopKGY/edit)的規格了耶，別輸了阿...（炸
