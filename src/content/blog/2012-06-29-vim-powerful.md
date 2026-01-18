---
title: VI(M) - a really powerful editor
date: '2012-06-29'
tags: ['VIM', '2012']
draft: false
summary: '拿vi跟IDE比是不公平的，但是如果vi+plugin之後，拿IDE跟vi比是不公平的 ;p'
---

這幾天有機會跑去參加一場讀書會（應該也算是生平第一次參加吧...^^"
因為本人生性害羞（誤），而且通常下班之後要提起勁去參加這種讀書會實在需要莫大的勇氣（疑!)，不過，看到有興趣的議題在時間允許的情況之下，親身參與真的是可以收穫不少

昨天的後半場是請到龍哥幫大家介紹[vi](http://www.vim.org/)的使用＆開發技巧

<script
  async
  class="speakerdeck-embed"
  data-id="816a783042200131d1771a179ce768f2"
  data-ratio="1.33333333333333"
  src="//speakerdeck.com/assets/embed.js"
></script>

雖然平常一直是用 vi 當作是主力開發編輯器，不過老實說應該還有很大的成長空間（汗顏），聽到龍哥分享自己是怎麼（強迫!?）去適應一些 vi 的特殊用法來達到更快速的開發效率，真的是很佩服，分享中也提到不少有助於開發的 plugin（回家之後立馬更新 vimrc :p)

不過我很喜歡龍哥在分享中提到的一點，就是 VIM 是一種很**客製化**的工具，我們常常會參考一些強者調出來的 vimrc，但是其實唯有透過自己親自使用，才能夠慢慢調整成最適合自己的開發習慣，這個真的是 VI 很有魅力的地方（阿宅奇怪的浪漫 :p

雖然 VIM 可能不像一般 IDE 那樣方便，上手也需要一點時間，但是配合一堆強者幫它開發的[plugin](http://www.vim.org/scripts/index.php)，真的...幾 乎可以大部分替代開發需要的功能了，而且光是等 IDE 開起來的時間，用 VI 大概已經寫完了（超級大誤 XDD

---

這邊順便補幾個偷學到的好物 ;p

[ctrlp](https://github.com/kien/ctrlp.vim/)

> _Fuzzy file, buffer, mru, tag, etc finder_
> 最方便是可以利用 ctrl-p 這個熱鍵，快速搜尋目錄下的檔案，開發利器!!

[snipmate](https://github.com/Ferrari/snipmate.vim)

> 這應該大家幾乎都有用了吧，不過這次才驚覺其實可以自己去加 snippet...orz
> 所以你可以自定一些自己常用的 template 到你常用的開發語言中，相當方便~

plugin 真的是 vi 最讓人讚賞的地方，正如龍大說的一樣，拿 vi 跟 IDE 比是不公平的，但是如果 vi+plugin 之後，拿 IDE 跟 vi 比是不公平的 ;p
