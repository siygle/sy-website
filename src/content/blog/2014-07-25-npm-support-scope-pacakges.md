---
title: 'npm 將支援 "scoped packages"'
date: '2014-07-25'
tags: ['npm', '2014']
draft: false
summary: '其實本來是希望這篇是 v0.12 的釋出公告，不過最近的狀況實在是讓人摸不著頭緒'
---

其實本來是希望這篇是 v0.12 的釋出公告，不過最近的狀況實在是讓人摸不著頭緒，除了[活絡度](https://github.com/joyent/node/commits/master)明顯下降之外，釋出日期也遙遙無期，希望 core team 可以加加油啊...

btw, 最近剛好看到 [npm](http://www.npmjs.com/) 直接跳了大版號，所以稍微進去看了一下。

<blockquote class="twitter-tweet" lang="en">
  <p>
    npm 1.5.0-alpha has become npm 2.0.0-alpha because of these exciting changes:&#10;&#10;
    <a href="https://t.co/OyPZ6aOuGV">https://t.co/OyPZ6aOuGV</a>&#10;&#10;Try it out! File bugs!
    Enjoy!
  </p>
  &mdash; Forrest L Norvell (@othiym23){' '}
  <a href="https://twitter.com/othiym23/statuses/491764343206576128">July 23, 2014</a>
</blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
不過這也不是重點 #炸 昇大版號主要是 `npm run-script` 開始[支援參數](https://github.com/npm/npm/pull/5518)

---

不過在翻 changelog 的時候發現到另一個有趣的東西 - [scoped packages](https://github.com/npm/npm/issues/5239)，也可以參考 nodejitsu 整理的[文章](http://blog.nodejitsu.com/a-summary-of-scoped-modules-in-npm/)。

主要是針對許多企業 or 較大型的開發團隊，一直有 private registry 的需求，其實目前也有不少方式可以做到，不過不需要自己 hack 一層直接在 npm 中支援當然是最好不過的，看來 npm 團隊打算著手來處理這個需求了，然後就是上面提到的 **scoped** packages 這個東西。

`@registry/package` - 就是這樣而已 XD

- 用 `@` 來區分是 scope package，這樣很清楚可以知道到底引用的是 public or scope
- 每個 `@registry` 都會對應到一個 registry，所以如果你要用 private registry，就把 @org 對應的 registry 設定到 npm config 裡面
- 安裝的目錄也會區分，會放到 `node_modules/@registry/package` 下面
- public package **couldn't** depend on scoped package
- 簡單說，讀取順序會是：(@registry 有指定) private registry -> (@registry 沒指定) default registry
- scoped package != private package

目前在 npm 1.5.0-alpha0 之後的版本都已經支援，不過我猜之後應該會有個官方公告才對，看起來是個頗大的變化。至於目前只有 client 端支援，如果想在內部試用的話，可以考慮一下手腳很快的 [cnpm](https://github.com/cnpm/cnpmjs.org) ;p

---

### update

npmjs 有放一段展示影片，有興趣的可以看一下實際運作的情形：

<blockquote class="twitter-tweet">
  <p lang="en" dir="ltr">
    want to see scoped/private modules in action? Here&#39;s a sneak peek of npm Enterprise:{' '}
    <a href="https://t.co/KahPFBffL4">https://t.co/KahPFBffL4</a>
  </p>
  &mdash; Benjamin Coe (@BenjaminCoe){' '}
  <a href="https://twitter.com/BenjaminCoe/status/493861960870801408?ref_src=twsrc%5Etfw">
    July 28, 2014
  </a>
</blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
