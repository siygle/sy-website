---
title: 'Future plan in NodeJS (0.12)'
date: '2013-08-14'
tags: ['Node.js', '2013']
draft: false
summary: 'Node.JS仍舊快步向前邁進中，根據目前的計畫接下來就是v0.12以及象徵步入穩定的v1.0這兩個版本'
---

[![NodeJS Group](https://i.imgur.com/nCrhkSd.png)](https://groups.google.com/forum/#!topic/nodejs/9afurRCTlOc)

Node.JS 仍舊快步向前邁進中，根據目前的計畫接下來就是 v0.12 以及象徵步入穩定的 v1.0 這兩個版本。今天 Isaac 在討論區發了一篇公告 - **[The Future of Programming in Node.JS](https://groups.google.com/forum/#!topic/nodejs/9afurRCTlOc)**，說明了未來版本的規劃，有不少重要的訊息，對於已經在使用的開發者應該留意一下。

- Coding Style 的問題，之前也有引起[一些討論](/2013/04/callback-or-promises/)，不過看來以回呼(Callback)為主，在短 時間應該不會改變，如果傾向 Promise or Generator 的開發者，還是以模組的方式來使用。
- Stream 在 v0.12 又會稍微做些[修改](/2013/08/nodejs-0115-release/)，不過會做到與 v0.10 相容。
- Domain 會進行重構，目前得到的訊息不多，等之後有更多訊息之後再看看。
- 模組系統不會改變(ES6 module 看來是不會納入!?)
- [TypeScript](http://www.typescriptlang.org/)跟[CoffeeScript](http://coffeescript.org/)不會納入核心之中。
- VM 也會[重構](https://github.com/joyent/node/pull/5918#commits-pushed-f05a9cf)。
- v0.12 中 v8 有相當大的變動，目前 addon 幾乎會爛光，所以核心成員會專注在這部份。
- Synchronous child process

v0.12 將是最後一個變動的版本，v1.0 只會專注在性能調校、除錯以及穩定性上。

Stream 跟 Domain 算是蠻頻繁在做修改，看起來還沒達到好用的地步、問題也不少，這些在討論區、Issue 上也常可以看到這方面的討論，希望在 1.0 之前可以把這些問題都解決掉(這部份也需要真正使用的開發者能多回饋、提供意見)，年底之前可以迎接 1.0 的 到來 ;p
