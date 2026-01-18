---
title: 'ES Modules on Node.js? 可能沒那麼快...'
date: '2019-01-02'
tags: ['Node.js', 'esm', '2019']
draft: false
summary: '如果有注意 Node.js 生態的應該會聽過關於 ES Modules 的議題，因為從 ES6 之後 JS 對於模組有了明確的定義，但是在 Node.js 的生態...'
---

看一下之前 [提到 Modules](/es2015-modules-nodejs-might-soon-support/) 已經是 2015 年的事了...0rz

如果有注意 Node.js 生態的應該會聽過關於 [ES Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) 的議題，因為從 ES6 之後 JS 對於模組有了明確的定義，但是在 Node.js 的生態，早在起步的時候就已經引入了 [CommonJS](https://nodejs.org/docs/latest/api/modules.html) 的規範。所以如果處理相容的問題就是現在最頭痛而且很積極在討論的一個議題。

### [ ECMAScript modules in Node.js: the new plan ](http://2ality.com/2018/12/nodejs-esm-phases.html)

前幾天剛好又瞄到這篇文章，稍微簡述了目前 ES Modules in Node.js 的進度跟未來規劃（詳情可以直接看文比較清楚）。

基本上 ES Modules in Node.js 個人覺得在一切底定之前還是少碰（除非你用了像 TS/Babel 之類的工具，但後端真的沒必要），目前在 LTS 10.x 是可以直接用（需要加上 flag `--experimental-modules`)，但是只支援 mjs 真的不覺得有多少開發者會為了這個多去維護，真的堪用可能要等到 [Phrase 2](https://github.com/nodejs/modules/blob/master/doc/plan-for-new-modules-implementation.md#phase-2) 之後了，但根據時程這會是 2020 之後的事了...0rz

而且現在看起來並不是所有人都贊同現行的 mjs 的方案，所以這火可能還有的燒 XDDD

<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet">
  <p lang="en" dir="ltr">
    esm without mjs is possible and has already been written but they just didn&#39;t want it.
    I&#39;m very annoyed that node made this choice.{' '}
    <a href="https://t.co/x2huuxmDwM">https://t.co/x2huuxmDwM</a>
  </p>
  &mdash; Kat Marchán (@maybekatz){' '}
  <a href="https://twitter.com/maybekatz/status/1079270452759908352?ref_src=twsrc%5Etfw">
    December 30, 2018
  </a>
</blockquote>
