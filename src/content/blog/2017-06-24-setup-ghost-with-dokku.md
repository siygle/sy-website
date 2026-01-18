---
title: '用 dokku 來架設 Ghost'
date: '2017-06-24'
tags: ['dokku', 'DevOps', '2017']
draft: false
summary: '所以如果想用 dokku 來架設 Ghost blogging system 也是簡單幾個步驟就可以弄起來了...'
---

### 變成前言的後記

其實這篇的內容是一開始動筆時的紀錄，最近整理發現這篇弄完之後就忘在這邊了，後來也在公司小推了 dokku 一把，順便做了個[簡單的分享](https://hackmd.io/p/BkSQJnvXb#/) ;)  
_不能不推一下 [hackmd](https://hackmd.io)，連簡報模式都支援_  
_完全沒聽過 dokku 的可以先參閱一下_

如果要用一句直白的話形容 dokku，**就是開源~~窮人~~版的 heroku**

使用方式基本上跟 heroku 很類似，但是要特別提一下他的 [plugin ](http://dokku.viewdocs.io/dokku/community/plugins/)功能，dokku 能夠透過偵測各語言特有的檔案或設定來辨識，不過一般開發者還需要一些「其他」的功能，如資料庫、MQ、Cache 等之類的其他系統，這些都有其他的軟體可以提供，在 dokku 就是透過他的 plugin 就可以把這些系統安裝起來。

所以如果[想用 dokku 來架設 Ghost blogging system](https://blog.alexking.io/installing-ghost-on-dokku/) 也是簡單幾個步驟就可以弄起來了。不過要架設 Ghost 你就可能需要 [mysql](https://github.com/dokku/dokku-mysql)，更進一步還能透過 [Let's Encrypt](https://github.com/dokku/dokku-letsencrypt) 把 HTTPS 也架設起來。透過 `dokku plugin:install` 就可以簡單安裝囉。

ps: 如果你安裝 Ghost/Mysql 可能會遇到文字編碼的問題，可以參考一下這些：

- [Emoji (or Unicode in general) doesn't get imported #5519](https://github.com/TryGhost/Ghost/issues/5519)
- [How to support full Unicode in MySQL databases](https://mathiasbynens.be/notes/mysql-utf8mb4)

### Node.js app on dokku

Node.js 要在 dokku 上面跑起來也不是什麼難事，記得放上 `package.json` 和設定好 `scripts: { start: "..." }`，dokku 就會幫你設定好

**_如果需要 private npm modules!?_**  
基本就照這篇做就可以 - [Deploying with npm private modules](http://blog.npmjs.org/post/118393368555/deploying-with-npm-private-modules)，記得用 `dokku config:set NPM_TOKEN=...` 設定上你的 auth token，然後把 `.npmrc` 加到你的 Node.js App repo 裡面

```
// .npmrc
// registry.npmjs.org/:_authToken=${NPM_TOKEN}
```

### other languages?

如果你不寫 Node.js 而是使用其他的語言，基本上只要 heroku 有支援的應該都可以直接跑起來，大不了就是直接寫 Dockerfile 當成部署的方式而已 ;)

我自己本身是還有玩過 Golang app，如果你有放「處理 dependency」的套件設定（e.g., govendor, Godep or Glide），dokku 就能夠分辨出來。但是我還是建議如果是 Golang app 最好還是用 Dockerfile 的方式來部署。一來是安裝時間相差懸殊，另一則是 Golang 混亂的 dependency 處理問題。

**等!!**
可能會有人說有 Godep，不是已經是正式成為處理依賴問題的工具，這可以參考大大的解說 - [Go 語言官方推出的 dep 使用心得](https://blog.wu-boy.com/2017/03/golang-dependency-management-tool-dep/)。若你太躁進，跑去用 [golang/dep](https://github.com/golang/dep) 的版本，dokku 就會無法辨識，他只看得懂 [tools/godep](https://github.com/tools/godep)

_看到這種現象我想想還是等等好了 XD_
