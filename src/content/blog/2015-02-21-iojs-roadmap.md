---
title: 'io.js roadmap'
date: '2015-02-21'
tags: ['io.js', '2015']
draft: false
summary: '幾天看到 TC 成員的 Mikeal 發的這則推，裡面提到了 io.js 未來的規劃'
---

雖然先前提到的 [node.js foundation](/io-js-node-js-status) 搞得有點火（自作孽），不過好在 io.js core team 似乎依然高速運轉中，目前幾乎兩週就會出一個 minor version，實在讓人心情大好啊！

<blockquote class="twitter-tweet">
  <p lang="ja" dir="ltr">
    io.js v1.3.0 釋出!! <a href="https://t.co/0DpTs9jLD0">https://t.co/0DpTs9jLD0</a>
  </p>
  &mdash; iojs_tw (@iojs_tw){' '}
  <a href="https://twitter.com/iojs_tw/status/568729732109316096?ref_src=twsrc%5Etfw">
    February 20, 2015
  </a>
</blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

_已經衝到 v1.3.0 了 ;p_

不過更高興的事，這幾天看到 TC 成員的 [Mikeal](https://twitter.com/mikeal) 發的這則推，裡面提到了 io.js 未來的規劃（而且[網站](http://roadmap.iojs.org/)也很高效地一起放出來 ;p）

除了提到對於相容性、版本支援以及近期重點之外，其中讓人最興奮的在於 [NG](http://roadmap.iojs.org/?full#9) (Next Generation) 的計畫。知道 JS 就應該知道它一直是處於不斷演進的情況中，在眾人期盼 ES6 即將到來的同時，其實 ES7 也早就開始規劃了，因為 node.js 創立的時候，許多 ES6 的規範也都還沒出現（或是之後有做調整），以模組這塊來舉例，當時 node.js 採用的是 CommonJS 的規範，但是 ES6 中有重新定義模組化的部分，如果要向標準靠攏，勢必會影響到現有的生態圈。

根據文件中提到，NG Channel 就是要測試對於這種大幅度的功能引進（或修改），譬如說上述提到的模組化的問題，[NG 就將採用標準的 ES6 Modules](https://github.com/iojs/io.js/blob/2f715ee8459ef7a28b902c64738e165088147eef/ROADMAP.md#ng-next-generation)

期待未來可以在 NG 看到許多令人驚奇的新東西 ;p

---

轉眼再看看 node.js，跟去年的慘況  
你還會想要回去嗎 ^^"

快來這邊連署吧 ;p

<blockquote class="twitter-tweet" lang="en">
  <p>
    让 node 基金会采取 iojs 的管理模型 <a href="http://t.co/pmHDyPiKE8">http://t.co/pmHDyPiKE8</a>{' '}
    <a href="https://twitter.com/iojs_tw">@iojs_tw</a>{' '}
    <a href="https://twitter.com/hashtag/iojs?src=hash">#iojs</a>
  </p>
  &mdash; iojs cn (@iojs_cn){' '}
  <a href="https://twitter.com/iojs_cn/status/568608629122682880">February 20, 2015</a>
</blockquote>

ps: 其實我個人是更激進一點，我覺得如果 joyent 強硬要推基金會，不願讓社群主導的話，其實也沒必要一直要維持跟 node.js 的相容也沒關係，就讓開發者來選嘛 #偏激
