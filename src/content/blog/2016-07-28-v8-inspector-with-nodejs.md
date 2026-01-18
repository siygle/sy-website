---
title: 'v8_inspector landed on Node.js v6.3.0'
date: '2016-07-28'
tags: ['Node.js', 'v8', '2016']
draft: false
summary: '看到 Google v8 & Node.js core 有越來越多合作，真是不錯啊 ;p'
---

<blockquote class="twitter-tweet" data-cards="hidden" data-lang="en">
  <p lang="en" dir="ltr">
    Node.js v6.3.0 is out. Read the release brief by{' '}
    <a href="https://twitter.com/Fishrock123">@Fishrock123</a>.
    <a href="https://t.co/Oxc0LLSAW3">https://t.co/Oxc0LLSAW3</a>
    <a href="https://twitter.com/hashtag/nodejs?src=hash">#nodejs</a> <a href="https://twitter.com/hashtag/current?src=hash">#current</a>
  </p>
  &mdash; NodeSource (@NodeSource){' '}
  <a href="https://twitter.com/NodeSource/status/750774706416988160">July 6, 2016</a>
</blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Node.js 已經默默爬到 v6，不過這也不是新聞了，根據 [Roadmap](https://github.com/nodejs/LTS#lts_schedule)，v6 也將於今年底接替 v4 成為正式的 LTS，隨著 v6 的到來，[ES2015 的支援幾乎全部達陣了](https://kangax.github.io/compat-table/es6/#node6)！

不過本篇不是要提這件事，關於 ES2015 的資訊，相信大家搜尋一下都可以找到一大堆，在幾天前推出的 v6.3.0 中有包含個相當有趣的 PR - [Add v8_inspector support](https://github.com/nodejs/node/pull/6792)

一旦 Node.js 接受這個 PR，就代表將原生支援 [Chrome Debugging Protocol](https://developer.chrome.com/devtools/docs/debugger-protocol)，所以現在不需要再透過第三方的模組，原生就可以直接透用 Chrome DevTools 來 Profile/Debug

```
node --inspect index.js
// 就這樣ww
// 然後它就會噴一段 chrome-devtools:// 開頭的位址
// 貼到 chrome 裡打開就可以囉
```

也可以參考 [@paul_irish](https://twitter.com/paul_irish) 的介紹文 - [Debugging Node.js Nightlies with Chrome DevTools](https://medium.com/@paul_irish/debugging-node-js-nightlies-with-chrome-devtools-7c4a1b95ae27#.hee158w0m)，也可以看看下面這個在今年 IO 上提到 DevTools 的場子。

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/x8u0n4dT-WI"
  frameborder="0"
  allowfullscreen
></iframe>

看到 Google v8 & Node.js core 有越來越多合作，真是不錯啊 ;p
