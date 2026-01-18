---
title: 'How fast is HTTP2?'
date: '2013-11-22'
tags: ['HTTP2', '2013']
draft: false
summary: '關於 HTTP/2 的細節就不在這邊講了（因為我也沒辦法...0rz），有興趣的直接參考制定成員的說明吧。'
---

[HTTP2](http://http2.github.io/) 也已經出現一陣子了，雖然還在制定草案的階段，不過這個新協定並不是要取代現有的 HTTP/1.1，而是類似打補丁的感覺（遊戲打太多了嗎 XD），所以其實不少線上服務或多或少都已經佈署了。

關於 HTTP/2 的細節就不在這邊講了（因為我也沒辦法...0rz），有興趣的直接參考制定成員的說明吧。

<iframe
  src="https://www.slideshare.net/slideshow/embed_code/14590411"
  width="427"
  height="356"
  frameborder="0"
  marginwidth="0"
  marginheight="0"
  scrolling="no"
  allowfullscreen
>
  {' '}
</iframe>

或許 HTTP/2 還不常見，不過 [SPDY](http://en.wikipedia.org/wiki/SPDY) 應該常聽到才是，這是 Google 為了改善網路速度而提出的新協定（其實也出來好幾年了），因為可以直接用自家的服務作火力展示，所以目前已經採用的服務也不少。正因為如此， HTTP/2 就是基於 SPDY 來制定的。

然後今天 Google 就丟出一篇[文章](http://blog.chromium.org/2013/11/making-web-faster-with-spdy-and-http2.html)，用自身服務的統計資料來告訴大家這東西到底有多威 ;p

**Making the web faster with SPDY and HTTP/2**
[![spdy](https://i.imgur.com/xcEl87O.png)](http://blog.chromium.org/2013/11/making-web-faster-with-spdy-and-http2.html)

或許有人覺得奇怪，為什麼只拿 https 來做比較，因為 HTTP/2 中，所有的連線都是要加密的，所以之後就只剩 https 了！
[Moving forward on improving HTTP's security](http://lists.w3.org/Archives/Public/ietf-http-wg/2013OctDec/0625.html)

---

#### DEMO

如果看文字敘述沒有實感的話，可以看下面這個展示，  
讓你親身感受一下到底快多少 ;p

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/4Ai_rrhM8gA"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>
