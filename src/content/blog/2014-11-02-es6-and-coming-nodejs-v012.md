---
title: 'es6 與即將到來的 Node.js v0.12'
date: '2014-11-02'
tags: ['Node.js', '2014']
draft: false
summary: '因為已經失望太多次，基本上我是不期待今年內可以看到 v0.12 了，不過又因為這則 issue 又讓我燃起一線生機'
---

因為已經失望太多次，基本上我是不期待今年內可以看到 v0.12 了，不過又因為這則 issue 又讓我燃起一線生機（關你什麼事啊 XD

<blockquote class="twitter-tweet">
  <p lang="zh" dir="ltr">
    請不要再唬弄我們了啦，快上啊!! v0.12{' '}
    <a href="https://twitter.com/hashtag/nodejs?src=hash&amp;ref_src=twsrc%5Etfw">#nodejs</a>{' '}
    <a href="https://t.co/NnA93eKZTc">https://t.co/NnA93eKZTc</a>{' '}
    <a href="http://t.co/mirXok9vzC">pic.twitter.com/mirXok9vzC</a>
  </p>
  &mdash; sylee@g0v.social (@siygle){' '}
  <a href="https://twitter.com/siygle/status/528027862876422145?ref_src=twsrc%5Etfw">
    October 31, 2014
  </a>
</blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

如果 core member 沒有再度唬弄我們的話，**應該** v0.12 問世就是這一、兩個星期之內的事了，其實原本覺得應該就是目前的 v0.11.14 差不多了，不過因為又有[熱血貢獻者](https://github.com/joyent/node/pull/8476)，所以看起來 v8 會往前跨蠻大一步 ;p

如果上面提到的 issue 有進 v0.12 的話，那 v8 就會是 **3.28**，所以會不少新東西可以直接用了：[Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)、[Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)、[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)、[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) and [Object observe](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe)（這邊是列 MDN，說不定 v8 實作上有點有不一樣）

是說如果 Promise 已經原生支援的話，那其他 3rd module 也不需要了嘛..XD

下面這個 node jp meetup，有更詳細的說明及範例，有興趣的可以參考一下。然後我們大家就開始期待 v0.12 真的可以如期上吧 XDD

<script
  async
  class="speakerdeck-embed"
  data-slide="1"
  data-id="2cdd3aa0418e01324cb332f0c59d75ac"
  data-ratio="1.33333333333333"
  src="//speakerdeck.com/assets/embed.js"
></script>
