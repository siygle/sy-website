---
title: 'Rebuild Dokku/Ghost/Gitalk'
date: '2019-01-12'
tags: ['Node.js', 'Ghost', 'dokku', 'DevOps', '2019']
draft: false
summary: '因為覺得 Ghost 實在太龜速，之前有考慮過各種替代方案'
---

因為覺得 Ghost 實在太龜速，之前有考慮過各種替代方案，包含現在很夯的 [medium](https://medium.com)，但是諸多考量之後還是決定留在這個自己能弄東翻西的地方。但是每次重建的時候都會遇到一些問題，乾脆留一個手記幫助那些剛好踩到一樣雷的人（不過應該會是我自己來看的機率最大吧 XD）

## Dokku/Ghost 的儲存問題

如何佈署到 dokku 就不在此贅述，可以參考[之前的文章](/use-dokku-setup-ghost/)或是這篇有更詳細的敘述：

> [Running Ghost on Dokku PaaS](https://medium.com/koaandco/running-ghost-on-dokku-paas-3ee95dcf3559)

裡面也提到用 dokku 的問題之一就是它並不是永久性的儲存空間，所以每次新的佈署就會讓所有曾經上傳的檔案消失。這會帶來的最麻煩的問題就是，如果你用了別的主題，下次更新之後就會死去...XD

> MESSAGE: The currently active theme "YOUR*THEME*" is missing.

這解法就得用到上文中提到的 [dokku persistent storage](https://github.com/dokku/dokku/blob/master/docs/advanced-usage/persistent-storage.md) 的功能，掛載一個外部的儲存空間進 docker 裡。不過文中有個錯誤的地方：

> $ dokku storage:mount blog /var/lib/dokku/data/storage/blog:/app/content/images
> // 正確的應該要改成絕對路徑
>
> > dokku storage:mount blog /var/lib/dokku/data/storage/blog:/var/lib/ghost/content/images

應該是新版裡改了使用方式，文件裡有特別提到不要再用 `/app` 的方式而是要改用絕對路徑來指定。

## gitalk ID 過長

另外一個問題，因為我是用 [gitalk](https://github.com/gitalk/gitalk) 替換常見的 [Disqus](https://disqus.com/)，如果你照著 readme 的設定，放上了

```
	const gitalk = new Gitalk({
	  clientID: 'GitHub Application Client ID',
	  clientSecret: 'GitHub Application Client Secret',
	  repo: 'GitHub repo',
	  owner: 'GitHub repo owner',
	  admin: ['GitHub repo owner and collaborators, only these guys can initialize github issues'],
	  id: location.pathname,      // Ensure uniqueness and length less than 50
	  distractionFreeMode: false  // Facebook-like distraction free mode
	})
```

有一定機率會炸掉，因為如果你某篇文章的標題長度過長的話，ID 會踩到 Github issue labels 的長度限制[這個問題](https://github.com/gitalk/gitalk/issues/115#issuecomment-375954482)，請記得過一下 md5，就可以避免踩到這個雷 XD。

```
	// 記得拉個 md5 的函式庫進來
	<script src="https://cdnjs.cloudflare.com/ajax/libs/blueimp-md5/2.10.0/js/md5.min.js"></script>

	// 然後改用這樣
	id: md5(location.pathname),
```
