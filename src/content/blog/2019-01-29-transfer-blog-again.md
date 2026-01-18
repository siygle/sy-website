---
title: '再次轉移 & JAMstack'
date: '2019-01-29'
tags: ['JAMstack', 'chat', '2019']
draft: false
summary: '終於下定決定換掉 Ghost 了（到底是要搬幾次XDD'
---

**終於下定決定換掉 Ghost 了（到底是要搬幾次 XDD**

原因無它，原因有在[前文](/rebuild-dokku-ghost-gitalk)抱怨過，就是那無解的輸入法問題，然後根本[看不到什麼時候才能修復](https://github.com/TryGhost/Ghost/issues/9801)（對啦，我知道是編輯器套件的問題，但是你們是決定採用的人耶，沒能力 patch 為什麼要換，明明 1.x 的時候就用得好好的！ #偏激模式

然後最近有機會看到這篇文章 - [Ghost 2.0 试用](https://blog.windisco.com/try-the-ghost-2/)，真的是心有戚戚焉阿，轉用 2.x 一陣子之後的心得大概就跟該文作者一樣...

<blockquote class="twitter-tweet">
  <p lang="zh" dir="ltr">
    Ghost 2.0 最大的更新就是编辑器，然而这个新的编辑器感觉也是个半成品，很多的功能不齐全。
  </p>
  &mdash; ココロ (@shincurryy)
  <a href="https://twitter.com/shincurryy/status/1031929385371291648?ref_src=twsrc%5Etfw">
    August 21, 2018
  </a>
</blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### hexo/hugo/gatsby

本來是想說就換回曾經用過的 hexo/hugo 之流，不過後來轉念一想，之前曾經看過 [gatsby](https://www.gatsbyjs.org/) 似乎蠻有趣的（不是木村轉圈圈那個...#超級老梗），

隨手搜來[幾個](https://magicly.me/blog-change-to-gatsby/)[範例](https://github.com/alxshelepenok/gatsby-starter-lumen)，就決定來試試看了。

其實本質上 gatsby 是類似 hexo/hugo 這類 Static Site Generator（翻譯苦手，不知道怎麼翻比較好），但是它整合 react 的生態圈，又支援 graphql 可以介接不同的內容來源，還有許多優化，拿它來開發 blog 是有點大材小用啦（但是爽！）

### JAMstack

如果深入去看 gatsby 應該會看到這個關鍵字 - [JAMstack](https://jamstack.org)，這是一個由 netlify CEO 所提出的新的建構網路服務的架構，就是 **[Javascript/APIs/Muckup](https//imgur.com/SMms4ai)**。

> Modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup.

其實不算多特殊的新東西，不過拿來弄 blog 的確是蠻受用的很有彈性，你可以用自己偏愛的方式來撰寫，前端既然是 prebuild mockup 放上 CDN 就不用太擔心流量的問題了。是個蠻有趣的概念，它也已經有了自己的[研討會(JAMstack_conf)](https://jamstackconf.com/)，有興趣可以關注。

下面這個是 Matt Biilmann，也就是 netlify CEO 在 JAMstack_conf 上的分享，直接聽作者分享會更清楚 ;)

> <iframe
>   width="560"
>   height="315"
>   src="https://www.youtube.com/embed/VzQ0d8-nMhw"
>   frameborder="0"
>   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
>   allowfullscreen
> ></iframe>

### https://blog.sylee.dev

嗯，動手弄了一陣之後就把內容轉過來，花最多時間在搬資料，因為實在找不到好用的 importer，本來想寫個小工具來處理，但是實在太懶而且重用性不高，就算了 XD #藉口

有用到的項目如下：

- [gatsby](https://www.gatsbyjs.org/) - 本體，用了這個主題 - [gatsby-starter-lumen](https://github.com/alxshelepenok/gatsby-starter-lumen)。
- [netlify](https://www.netlify.com) - 放網站的地方，好物必須推!
- [netlify CMS](https://www.netlifycms.org/) - 這也是他們開源的軟體，一個簡單的 CMS，後端接 Git repo（主流三個都有支援，你要連到自家的也可以）。
- [gitalk](https://github.com/gitalk/gitalk) - 因為對 disqus 沒甚麼好感，所以加上了 gitalk 的支援，不過原本主題是沒有的，有送了個 [PR](https://github.com/alxshelepenok/gatsby-starter-lumen/pull/86) 就看作者要不要收了。
