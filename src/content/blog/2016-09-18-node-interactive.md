---
title: 'Node Interactive 2016'
date: '2016-09-18'
tags: ['Node.js', '2016']
draft: false
summary: '今年度的 Node Interactive 歐洲場剛在這個週末舉辦'
---

今年度的 [Node Interactive 歐洲場](http://events.linuxfoundation.org/events/node-interactive-europe) 剛在這個週末舉辦，它是一個由 Node.js 基金會所舉辦的大型研討會（其實我一直不確定 Conference 翻成研討會適不適合，反正就類似 COSCUP 這種網友聚吧 #樓偏）

因為是官方承辦，自然會有不少有趣的 Topic 跟講員，晚一點應該會放出正式的議程錄影，這邊稍微列一下有看到的有趣東西，有興趣的開發者也可以追一下 [#NodeInteractive](https://twitter.com/search?q=%23NodeInteractive&ref_src=twsrc%5Etfw)

### http2

<blockquote class="twitter-tweet" data-lang="en">
  <p lang="en" dir="ltr">
    The <a href="https://twitter.com/jasnell">@jasnell</a> and the
    <a href="https://twitter.com/nodejs">@nodejs</a> team are looking for feedback on http/2.
    <a href="https://twitter.com/hashtag/NodeInteractive?src=hash">#NodeInteractive</a>
    <a href="https://t.co/FMyT1NCyPI">pic.twitter.com/FMyT1NCyPI</a>
  </p>
  &mdash; Ross Kukulinski (@rosskukulinski)
  <a href="https://twitter.com/rosskukulinski/status/777149003662327808">September 17, 2016</a>
</blockquote>

Node.js 原生支援 http2 的議題已經開始在[討論](<(https://github.com/nodejs/node-eps/pull/38)>)，也順便公開了 [Repo](https://github.com/nodejs/http2)，歡迎有興趣的開發者也可以一起加入反饋。

### expressjs

今年對 expressjs 來說也是[風風雨雨的一年](http://blog.caesarchi.com/2016/04/04/express-js--e7-9a-84-e9-bb-91-e6-ad-b7-e5-8f-b2-e5-8f-8a-express--e6-9c-aa-e4-be-86/)，不過目前已經[劃歸 Node.js 基金會之下](https://medium.com/@nodejs/node-js-foundation-to-add-express-as-an-incubator-project-225fa3008f70#.y888usede)，往後的發展應該不需要再擔心了。然後這次 Node Interactive 也破天荒請到了目前 expressjs 的維護者 - [Douglas Wilson](https://github.com/dougwilson) 來分享 expressjs 狀況，這應該是他第一次在研討會上露面吧 ;p（大大都習慣低調，不知 TJ 有沒有回歸的可能 XD）

<blockquote class="twitter-tweet" data-lang="en">
  <p lang="en" dir="ltr">
    A look at what might be in Express 5.0. 👁
    <a href="https://twitter.com/hashtag/NodeInteractive?src=hash">#NodeInteractive</a>
    <a href="https://t.co/6LWPWGQ5bE">pic.twitter.com/6LWPWGQ5bE</a>
  </p>
  &mdash; Node.js (@nodejs)
  <a href="https://twitter.com/nodejs/status/776788099191955456">September 16, 2016</a>
</blockquote>

_express 5 on the road :)_

### libuv

[libuv](https://github.com/libuv/libuv) 提供跨平台 Async I/O 的函式庫，它也是各平台上實作 Node.js 非同步特性的重要元件。這次[幾位核心維護者](https://twitter.com/saghul/status/777129084430213120)都有與會，也宣布了 [v2](http://www.slideshare.net/saghul/planning-libuv-v2) 的計畫。

<blockquote class="twitter-tweet">
  <p lang="en" dir="ltr">
    <a href="https://twitter.com/hashtag/NodeInteractive?src=hash&amp;ref_src=twsrc%5Etfw">
      #NodeInteractive
    </a>
    <a href="https://twitter.com/hashtag/CollaboratorsSummit?src=hash&amp;ref_src=twsrc%5Etfw">
      #CollaboratorsSummit
    </a>
    libuv v2 - cleanup code - new API - not too many breakin changes - more docs
    <a href="https://t.co/XIq1PhrCLu">pic.twitter.com/XIq1PhrCLu</a>
  </p>
  &mdash; Yosuke Furukawa (@yosuke_furukawa)
  <a href="https://twitter.com/yosuke_furukawa/status/777117983579729924?ref_src=twsrc%5Etfw">
    September 17, 2016
  </a>
</blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### npm

[npm](https://www.npmjs.com/) 是什麼應該不用多做解釋了吧 XD

大概講到幾個重點

- v2 即將不再維護，隨著年底 Node.js LTS 切換到 v6，npm@3 也將成為 LTS
- v4 首個測試版本將於十月釋出，不會像 v2 -> v3 變動這麼大，將專注於 npm search 改善
- v5 預計在 2017Q1 釋出，npm shrinkwrap 將會是改善重點

<blockquote class="twitter-tweet" data-lang="en">
  <p lang="en" dir="ltr">
    <a href="https://twitter.com/maybekatz">@maybekatz</a> talks about npm 3,4,5
    <a href="https://twitter.com/hashtag/NodeInteractive?src=hash">#NodeInteractive</a>
    <a href="https://t.co/Ln4UAN16Oc">pic.twitter.com/Ln4UAN16Oc</a>
  </p>
  &mdash; Yevgen Safronov (@sejoker)
  <a href="https://twitter.com/sejoker/status/776782697133924353">September 16, 2016</a>
</blockquote>

### Others

- [Electron](https://speakerdeck.com/felixrieseberg/node-interactive-16-ambitious-desktop-apps-with-javascript-and-electron)
- [PM2 作者的新作品 - gridcontrol](https://github.com/gridcontrol/gridcontrol)
- [深入解析 Event Loop](https://drive.google.com/file/d/0B1ENiZwmJ_J2a09DUmZROV9oSGc/view)
- [每天都可以看到新的 benchmarks](https://benchmarking.nodejs.org/)
- [netflix 的除錯經驗談](http://www.slideshare.net/yunongx/node-interactive-debugging-nodejs-in-production)
- [用 JS 硬幹 NES 模擬器](http://fritzvd.com/talks/node-ie-nes/#1)
  ![](https://lh3.googleusercontent.com/5vCNhczh_Awr-iDfVx7mYI4jIdbO7ARzdhxnCqGCgr3iE_njHywJLCJQJLGo3hPrC4qeX2uo3MDrRZK3mF2fMO7bq-GtYw01aVsz6_-wA4NP1tzYCQDS7BPKo8BAQFV7IYhSf4w1uf90g-iNNZcFssXA6ZB6RW_F4G0MhlfSaJ3Su61OHX2R5oRaGCalyCc7PN_NgCudJnVJWsOisy4ubnM86918h2NrZIKHS_Eo0mQK-ryHVTaaC2tu3rruRt9e7pHJcQbNl-nfb50oel1EB0fvg0dT07heWpxDB7ZYVHyc-cGWd_Yn_w-jieO1nCcqhET5vszh6OsMEeypZ7tm_49wx4lwZRCBHZUi1Oeo1F6nz89CoSLWzLDTB9_exSXRCPZ1lGbP1d00zbOBCuYfLT3r4-HSKOGZq-o4dV88y0bGXfrQVVdsaQlXeT8QKCbWoPD9EkEbW2_YPZ5vG0PHeCCRsdeolsqQLfO1vdESEsBiaWq5anuuv6L5IqbodUWGJaMK0STsrfXs6fsPzjb-Z6Hr6cpwojaZtn4WikjOXPFhZ4kW0DhcJJrwVDjPOudyI7WrQLJzLrv-g1E--4Sl78ErHjmIC05DTtxq_JVlUrN0mSxngg=w1099-h629-no)
  _有提到 NES 的配備蠻有趣的，之前的工程師真是太厲害了 ww_

其他細節就靜待影片釋出吧 :)
