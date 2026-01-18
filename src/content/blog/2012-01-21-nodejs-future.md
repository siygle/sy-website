---
title: "NodeJS - What's Next and Future?"
date: '2012-01-21'
tags: ['Node.js', '2012']
draft: false
summary: 'The Node.js Philosophy'
---

一直就想動手寫這篇文章，無奈實在太懶（毆飛）

自從[nodejs](http://nodejs.org/)出現之後，基於自己喜新厭舊的糟糕個性（無誤），所以一直有花些時間在這上面，對於nodejs目前的發展也感到蠻高興的，即便沒有太大機會可以實際拿到工作中來運用（說不定快有了 :p），不過光是私下自己惡搞，就可以感受到nodejs的方便＆強大。

在正式進入0.7.x分支的現在，也可以看到不少知名企業已經開始運用nodejs在自家的產品上

也看到為數不少的開發者投入到nodejs相關module的開發中，讓nodejs變得更方便、更易於開發。在這種時候就會開始亂想（誤），應該說好奇到底nodejs的未來會走向何處，再過一兩年之後會變成什麼樣子呢？

然後就看到nodejs其中一個core developer寫的這篇文章－[The Node.js Philosophy](http://blog.nodejitsu.com/the-nodejs-philosophy)

**超 級 興 奮!!**

其實也不是有提到什麼神奇的好東西之類的 :p
不過作者在這篇文章中提到了nodejs的核心精神－

> **core should be kept as small as possible**

> **experimentation with small kernels of functionality which rely on loosely coupled components**

這就是nodejs核心團隊對於開發所秉持的理念，我想也是因為如此造就目前nodejs還算令眾多開發者滿意的原因（要謙虛一點 XDD）。在語言進步的同時不斷把一些好用的功能「疊」上去幾乎是一般程式語言開發的慣例，雖然會帶來開發上的許多好處，不過相對也可能分散掉開發資源（因為核心本身就已經包含太多功能在裡面了，當然會提高維護/開發的成本）。

不過nodejs看來並不打算這麼做，對於「核心」，只會專注於精簡、高效、跨平台的網路問題，其餘的部分就交給其他開發者所貢獻的modules來解決，而這就依賴**npm**來達成。如此一來，每位開發者可以針對自己所面對/想解決的問題，開發出對應的module，透過npm，開發
者可以拿取需要的部份然後「組成」並解決自己的問題。這樣就演變出一個相當不錯的正循環：

> 你用別人設計好的功能，組合並解決自己的問題，其他開發者也可以取你的成果來拼湊並解決自己的問題，整個社群可以運用的資源就會越來越多，開發者就可以站在巨人的肩膀上繼續向前邁進

*這樣很不錯吧* :p

看起來未來nodejs的開發仍然會秉持這個原則來進行，而npm被正式納進nodejs core之中，算是為上述所提的開發模式注入了一股強心劑，希望nodejs可以繼續蓬勃發展阿 :p


