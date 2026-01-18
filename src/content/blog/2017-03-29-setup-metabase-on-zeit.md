---
title: 'Setup metabase easily with zeit/now'
date: '2017-03-29'
tags: ['zeit', 'metabase', '2017']
draft: false
summary: 'Running @metabase on Dokku (open-source Heroku clone) is easy, it turns out :)'
---

<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet" data-cards="hidden" data-lang="en">
  <p lang="en" dir="ltr">
    Running <a href="https://twitter.com/metabase">@metabase</a> on Dokku (open-source Heroku clone)
    is easy, it turns out :) <a href="https://t.co/6YqBqcWLwn">https://t.co/6YqBqcWLwn</a>
  </p>
  &mdash; Sandy Rogers (@sndyrgrs){' '}
  <a href="https://twitter.com/sndyrgrs/status/676688355883622400">December 15, 2015</a>
</blockquote>

其實我原本是想用 [dokku](http://dokku.viewdocs.io/dokku/) 的，雖然跟著範例跑，直接用 `web: java -jar` 的方式，dokku 似乎都無法辨識出 java app，然後 `pom.xml` 我也不熟，花了一些時間試不出來就放棄了。然後突然想到最近的新起之秀 [zeit/now](https://zeit.co/now) 有支援 Dockerfile 的方式，應該可以試試看，然後就...

```
echo 'FROM metabase/metabase' > Dockerfile && now deploy -n NAME
```

_NAME 可換成你想要的 App name_

等他跑完之後（註 1）進 https://YOUR-APP.now.sh/setup 就可以開始玩了（那我之前試這麼久是...0rz

#### database

基本上你不需要特別建一個新的 DB 就可以開始使用 metabase，因為他本身有內建一個叫 H2 的簡易型資料庫，不過如果你想到資料保存、備份的問題，使用獨立的資料庫還是比較好一點。

可以參考[文件](http://www.metabase.com/docs/v0.23.0/operations-guide/start.html#configuring-the-metabase-application-database)，metabase 預設是建議 postgresql，但是 mysql 也在支援範圍之內。

now 有支援環境變數和一些敏感資訊的處理，可以參考[這篇](https://zeit.co/blog/environment-variables-secrets)

```
// 先用 now secrets
now secrets add dbname=""
...

// 然後可以透過 now -e @dbname 這種方始指定環境變數
now \
-e MB_DB_TYPE=postgres \
-e MB_DB_DBNAME=@dbname \
-e MB_DB_PORT=5432 \
-e MB_DB_USER=@dbuser \
-e MB_DB_PASS=@dbpass \
-e MB_DB_HOST=@dbhost
```

**註一**  
這是目前覺得 zeit/now 很缺乏的一點，就是沒有好的介面能夠除錯或是看到 console 執行的狀態，完全瞎子摸象 XD（[官方是說 coming soon](https://github.com/zeit/now-cli/issues/32)，但是也不知道啥時才會出來）。目前的暫解，你可以用這種格式看到簡易的部署進度 `https://zeit.co/{USER}/{APP}/{HASH}`

部署完，如果打開網址看到 Error 502 or 500 的話就是還沒跑完安裝 (jar)，等一會再試試。
