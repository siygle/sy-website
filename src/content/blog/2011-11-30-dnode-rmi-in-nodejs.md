---
title: 'Dnode - Remote Method Invocation for NodeJS'
date: '2011-11-30'
tags: ['Node.js', 'tools']
draft: false
summary: 'NodeJS社群的蓬勃發展真的是讓人又驚又喜，每天幾乎都可以看到新的應用出現，你想的到的東西幾乎都可以在NodeJS中找到相關的實作'
---

最近幾乎都把心思放在NodeJS上面（應該是SNSD吧...驚!!），雖然在前幾天也正式超過ROR在github上的關注數量了，其實這也不代表什麼，目前NodeJS應該也還不到可以拿來跟ROR相提並論的地步，但是至少說明有不少開發者對於NodeJS很感興趣 :p

其實會陷在其中還有一個很重要的原因，就是NodeJS社群的蓬勃發展真的是讓人又驚又喜，每天幾乎都可以看到新的應用出現，你想的到的東西幾乎都可以在NodeJS中找到相關的實作，這種每天都有新玩具的感覺，讓我這種喜新厭舊的人相當滿足阿（誤）

**不知不覺又扯了兩段廢言 XD**

[Dnode](http://substack.net/posts/85e1bd/DNode-Asynchronous-Remote-Method-Invocation-for-Node-js-and-the-Browser) 是最近注意到的一個有趣的應用，不過在進入之前可能要先稍微了解一下什麼是[RMI](http://en.wikipedia.org/wiki/Java_remote_method_invocation)（Remote Method Invocation），RMI並不是什麼新東西，其實在Java中出現已久，不過因為我對Java沒有熟到可以拿來說嘴的地步，所以就先跳過這個吧 XD。簡單的說，RMI就是可以提供呼叫遠端物件的方法，它比起我們"可能"比較熟悉的RPC（Remote Procedure Call）又更進一步，RPC就只能支援比較基本的資料型態，而dnode就是nodejs版本的RMI :p

不過跟一般的RMI相較起來，dnode有它更強悍的地方，就是支援 asynchronous & pass function as parameter 的功能，非對稱的部份有碰過 NodeJS 的應該 都很熟悉了，比較特別的是，dnode可以把函式當成當成參數傳遞，所以就可以寫類似這種行為：

<script src="https://gist.github.com/Ferrari/1408646.js"></script>

當遠端的**zing**執行結束之後，就會接續呼叫console印出算式結果

此外，除了server/clinet之間的溝通之外，dnode也支援browser/server的溝通，透過dnode也可以讓nodeJS與其他程式語言輕鬆互通（目前[perl](http://github.com/substack/dnode-perl), [ruby](http://github.com/substack/dnode-ruby), [php](https://github.com/bergie/dnode-php), [java](https://github.com/aslakhellesoy/dnode-java) 都已經有支援了）

詳細的文件＆範例，可以參考作者的[文章](http://substack.net/posts/85e1bd/DNode-Asynchronous-Remote-Method-Invocation-for-Node-js-and-the-Browser) & 原始碼的[說明](http://github.com/substack/dnode)



