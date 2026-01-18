---
title: GoogleIO 2013 - Mobile Web
date: '2013-06-03'
tags: ['GoogleIO', '2013']
draft: false
summary: '接續上篇的主題，繼續來寫一些 #io13 裡面有趣的議程。這篇想來談談 Mobile Web 的相關議程。'
---

接續上篇的主題，繼續來寫一些 [#io13](https://twitter.com/search?q=%23io13) 裡面有趣的議程。這篇想來談談**Mobile Web**的相關議程。

先說一下自己對這部份的想法好了（怕文章太短，串場一下 XD），其實我覺得目前 Mobile Web 有點處在類似[雞肋](http://baike.baidu.com/view/633574.htm)的感覺，大家都知道移動端很重要，所以一定要有 Mobile Web，但是卻又不如直接刻一個 App 來的實用（應該不只是我這麼想而已吧，[36:01](http://youtu.be/EPYnGFEcis4?t=36m1s)應該可以稍微支持一下我的論點 ;p）

說不定有些人會覺得，Mobile Web 的目標是給那些不是拿 SmartPhone 的用戶，不過如果真的如此，那些用戶也應該沒法用諸如 Chrome，Firefox 之類的吧...0rz。這樣看來，這篇還需要寫嗎（炸）

BTW，雖然悲觀，而且目前用處不大，不過既然移動裝置是目前的趨勢，Mobile Web 也還是有存在的必要，然後就等看像[FirefoxOS](http://mozilla.com.tw/firefoxos/)這種的平台有沒有機會崛起吧 ;p（說不定 Google 也有類似的打算!?）

廢言結束，進主題 XD
這邊有 G 社強者幫忙準備好的相關議程，對 Mobile Web 有興趣的可以參考一下。

<blockquote class="twitter-tweet">
  <p>
    All the mobile web talks at{' '}
    <a href="https://twitter.com/search?q=%23io13&amp;src=hash">#io13</a>{' '}
    <a href="http://t.co/gJQcys7rSB">http://t.co/gJQcys7rSB</a>
  </p>
  &mdash; Paul Kinlan (@Paul_Kinlan){' '}
  <a href="https://twitter.com/Paul_Kinlan/statuses/337203560313942016">May 22, 2013</a>
</blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

我這邊只列幾個自己比較有興趣的題目~

### [**Mobile HTML**](http://youtu.be/EPYnGFEcis4) [[Slide]](http://mobile-html.appspot.com)

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/EPYnGFEcis4"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

一如往常的火力展示議程，介紹新/進行中/未來會出現的 Web Standard，當然這篇主要是針對移動端開發為主的，不過其實所有的網頁介面也都適用。因為行動裝置不同於一般桌面端有一些特有的問題需要解決（如下）
![mobile-html](https://i.imgur.com/uxYD2v3.jpg)
所以講者就是針對這幾個部分，介紹相對應的規範。

- Viewport, Media Query, [Viewport units](http://www.w3.org/TR/css3-values/#viewport-relative-lengths)
- Geolocation, Orientation, Offline(AppCache, event, Storage)
- [Semantic Input](http://www.w3.org/html/wg/drafts/html/master/forms.html#states-of-the-type-attribute), Touch/P
  ointer Event
- Camera, getUserMedia, [Android App Intent](https://developers.google.com/chrome/mobile/docs/intents)
- [Navigation Timing API](http://www.html5rocks.com/en/tutorials/webperformance/basics/)

大略提一下，詳細內容還是請大家直接收看這個議程吧 ;p

---

### [**The Modern Workflow for Developing the Mobile Web**](http://youtu.be/dkOmuyL7ffM) [[Slide]](http://io13mobileworkflow.appspot.com)

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/dkOmuyL7ffM"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

這個議程算是給打算/或正在進行 Mobile Web 開發的開發者提供一些很方便的工作。從建立開發環境、進行開發、測試，一直到上線後的狀況等，都包含在這個議程之中。

其實 IO 裡面常常會談到類似的議題，早前剛接觸前端開發的時候也對這方面的分享很感興趣，主要也是因為前端的開發環境真的
太複雜了，不像後端開個 Terminal，配合對應的測試就可以。能找到一套適合自己的開發環境/流程，對於往後的工作都會順手許多。

---

### [**Point, Click, Tap, Touch - Building Multi-Device Web Interfaces**](http://youtu.be/DujfpXOKUp8) [[Slide]](https://docs.google.com/presentation/d/1-n1qyzewpagREbzW2zm0wOalq33UhbtbSkWf9mEdly8)

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/DujfpXOKUp8"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

這個議程則是針對移動裝置上面特別的行為 - Point, Click, Tap, Touch，介紹處理這些事件的方法以及一些容易犯的錯誤、效能問題等。另外也提到微軟提出的[Pointer Events](http://blogs.msdn.com/b/ie/archive/2011/09/20/touch-input-for-ie10-and-metro-style-apps.aspx)，可望未來大一統。會有其出現主要也是因為 Mobile Web 的盛行，開發者必須同時處理 Mouse/Touc
h Events（但其實是類似的行為），Pointer Events 就是提供一個統一的介面。

![Pointer](https://i.imgur.com/v6TTfWG.png)

對於 Pointer Events 更詳細的介紹，可以參考這些文章：

- _[Generalized input on the cross-device web](http://smus.com/mouse-touch-pointer/)_
- _[Pointer and gesture events](http://msdn.microsoft.com/en-US/library/ie/hh673557.aspx)_

我現在還說不出 **Mobile Web is AWESOME!** 這樣的話 XDD，不過應該值得觀望一下 ;p
