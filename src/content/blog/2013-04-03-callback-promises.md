---
title: Callback or Promises
date: '2013-04-03'
tags: ['Node.js', '2013']
draft: false
summary: 'Callbacks are imperative, promises are functional: Node’s biggest missed opportunity'
---

最近[nodejs](http://nodejs.org)社群對於核心介面的寫法突然湧起一股討論，
應該是下面這篇文章起的頭 ;p

[Callbacks are imperative, promises are functional: Node’s biggest missed opportunity](http://blog.jcoglan.com/2013/03/30/callbacks-are-imperative-promises-are-functional-nodes-biggest-missed-opportunity/)

主要是提到[promises](http://wiki.commonjs.org/wiki/Promises)的規範能夠更好的來處理非對稱的程式，Promises 這東西之
前只稍微看過，一來是目前好像存在不只一種的規範，另外我一直到目前也實在不很瞭解它真正的用法，不過有興趣的 Google 一
下應該也可以找到不少說明。不過概念類似*根據執行的狀態（unfullfilled, resolved, rejected）然後執行對應的程式*

1. [JavaScript 异步编程的 Promise 模式](http://www.infoq.com/cn/news/2011/09/js-promise)
2. [Promises/A](http://wiki.commonjs.org/wiki/Promises/A)
3. [Asynchronous Control Flow with Promises](http://howtonode.org/promises)
4. [A tool for making and composing asynchronous promises in JavaScript](https://github.com/kriskowal/q)

_有興趣的話，可以看一下 spec 成員的講解_

<iframe
  src="//www.slideshare.net/slideshow/embed_code/key/xJafvffHKNW88h"
  width="595"
  height="485"
  frameborder="0"
  marginwidth="0"
  marginheight="0"
  scrolling="no"
  style={{ border: '1px solid #CCC', borderWidth: '1px', marginBottom: '5px', maxWidth: '100%' }}
  allowfullscreen
>
  {' '}
</iframe>

然後就出現幾篇不同觀點的文章

<blockquote class="twitter-tweet">
  <p>
    New post: Broken Promises{' '}
    <a
      href="http://t.co/boKTQqf0Ib"
      title="http://bit
.ly/Xzy72M"
    >
      bit.ly/Xzy72M
    </a>
  </p>
  &mdash; drewcrawford (@drewcrawford){' '}
  <a
    href="https://twitter.com/drewcrawford/s
tatus/318625524886933504"
  >
    April 1, 2013
  </a>
</blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

nodejs 社群成員有出來提一下不同的看法，也就是為什麼目前是採用 callback 的方式。蠻有趣的是，原來之前 nodejs core 是包含 promise 的，不過後來被拔掉了）

<blockquote class="twitter-tweet">
  <p lang="en" dir="ltr">
    Broken Promises <a href="http://t.co/Vdsk7XHeol">http://t.co/Vdsk7XHeol</a>
  </p>
  &mdash; Mikeal Rogers (@mikeal){' '}
  <a href="https://twitter.com/mikeal/status/318511552972066816?ref_src=twsrc%5Etfw">
    March 31, 2013
  </a>
</blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

然後原作者又發了一篇新文，回應前面幾位作者的論點，另外也特別舉例子說明其實 Promise 也是可以很簡潔的。

[Callbacks, promises and simplicity](http://blog.jcoglan.com/2013/04/01/callbacks-promises-and-simplicity/)

因為對 promise 不夠了解，所以也不好多說些什麼，不過目前我也認同@mikeal 所說的，callback 的簡單明瞭是 nodejs module 可以蓬勃的原因之一，概念上也比較容易了解（至少對我而已是這樣沒錯啦），不過如果 promise 真的對於開發能帶來更好的結果的話，相信開發者也會逐漸轉換的吧（這算是開源世界的好處嘛（炸
