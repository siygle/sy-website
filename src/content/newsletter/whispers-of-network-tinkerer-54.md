---
title: "網路黑手的呢喃 - #54"
date: "2024-09-08"
description: "What happens when someone takes open source code, adds a few features, closes it off, and starts ch…"
tags:
  - AI
  - Deno
  - Javascript
  - Newsletter
  - OSS
  - bluesky
---
# **Web 生態圈例行更新**

### Deno 新的測試方式 & 新功能

又是一個無意間看到 Deno 成員發了的這篇推文，好酷阿。直接在程式碼註釋的部分來撰寫該函式的測試程式，然後就可以透過 `deno test --doc` 來跑起來。

這感覺有點 Rust 的風格阿 😄

不過這種實作與測試放在一起的作法感覺很不錯，一來程式碼的理解性又提升不少，而且應該可以直接把 test 當成 example 帶到文件裡面（應該可行吧？），對於文件內容也更充實。

**我先用 1.46.1 跑過好像還沒支援，不知道有沒有機會包含在 Deno 2 裡面。*

![](https://x.com/yusuktan/status/1828072317324562717)

除了上述這個蠻有趣的新功能之外，他們的 hosting 服務也是持續不斷有再提供更多更方便的好東西，其中這個 Web Cache 也是最近宣布支援的東西。也是因為這個新功能的發佈才知道原來有個定義為 [Cache](https://developer.mozilla.org/en-US/docs/Web/API/Cache) 的標準 API。

看起來 Deno 是直接跟標準看齊，但不同原本的 Cache 是針對瀏覽器快取靜態資源的處理，這邊針對 Deno Deploy 上面的 response 來處理快取行為的控制（可以透過 `Expires` 或是 `Cache-Control` 來設定快取的時間）。

```jsx
const cache = await caches.open("my-cache");

Deno.serve(async (req) => {
  const cached = await cache.match(req);
  if (cached) {
    return cached;
  }

  const res = new Response("cached at " + new Date().toISOString(), {
	  headers: {
		  "Expires": new Date(Date.now() + 3600 * 10000).toUTCString(),
	  },
  });
  await cache.put(req, res.clone());
  return res;
});
```

[Introducing Web Cache API support on Deno Deploy](https://deno.com/blog/deploy-cache-api)

### 嘿嘿，又來一個 bundler 啦

*驚不驚喜，意不意外，反正 JS ecosystem 就是每個週期就會全部推倒再來一次，所以一點都不奇怪啦。*~~（我是在黑，應該看得出來吧）~~

一個名為 [Rspack](https://rspack.dev/blog/announcing-1-0) 的 JS bundler 宣布它們終於達到了 1.0 的穩定版本了！

<aside>

💡 Rspack is a next-generation JavaScript bundler written in Rust, compatible with the webpack API and ecosystem, and is 10 times faster than webpack.

</aside>

其實再多一個新的 bundler 也沒什麼新奇的，它是用 Rust 開發的也不是什麼新奇的事，畢竟現在 JS 工具用 Rust 也不是什麼新聞了 😅。不過它有特別針對已經受大量專案使用的 Webpack 作相容，這點就很讓人開心了，JS 真的不需要老是這樣推倒重來，希望未來的發展都可以有這個現象。 🙏

[webpack互換のRust製高速バンドラ「Rspack」が正式版となるバージョン1.0に到達。webpackより10倍高速と](https://www.publickey1.jp/blog/24/webpackrustrspack10.html)

不過看到文中的簡介才留意到，原來 Rspack 是由 TikTok（請容許我不放上連結了，畢竟抖音一響 😅）主力開發的，其實 Rspack 只是其中一個專案而已，有興趣可以去看看它們成立的 web-infra-dev 這個群組，裡面有不少有趣的東西 ⬇️（撇開其他的東西，單就軟體工程師的戰鬥力，我們真的需要很多努力才能迎頭趕上阿）

[Web Infra](https://github.com/web-infra-dev)

### Laravel Cloud

雖然近年來已經幾乎不碰 PHP 了，不過身為曾經的使用者還是對它有一份感情在的（少來），在諸多挑戰者之下，PHP 還是仍舊保有一方的勢力存在，其實比較常跟著一起出現的，除了 WordPress 之外大概就是 [Laravel](https://laravel.com/) 這個 PHP 的知名框架了。

最近瞄到他們宣佈了一個自家的新服務，就是他們也準備推出自家的雲端平台服務了（嘿嘿，沒錯，立刻就有人拉了隔壁棚的 [Vercel](https://vercel.com/) 上戰場了🤣）。

![](https://www.youtube.com/watch?v=olaSFcQZQWQ)

看一下上面的官方 Demo 應該就大概知道這是什麼了吧（其實名稱已經很明顯了😅），就是更深度整合自家框架的代管服務，而且這也沒什麼新奇，基本上幾乎所有從事語言層級的開發服務商都有類似的服務。（Vercel 雖然不算，不過 Next.js 也算是前端開發的扛壩子了吧，亦或像本站經常出現的 Deno 也是有類似的 Deno Deploy。）

不過提到 PHP 也剛好留意到最近出現的新聞，不知道如果想到比較具規模的企業用 PHP 的大家會想到誰？之前有 Meta、另一個大概就是 Blog 老牌的 [Automattic](https://automattic.com/) 了吧（WordPress），最近看到他們準備把 Tumblr 整合回 WordPress 的架構上，以改善兩邊維護的問題。

[Shipping Tumblr and WordPress](https://automattic.com/2024/08/27/shipping-tumblr-and-wordpress/)

不知道 Automattic 有沒有用類似 Laravel 這類的框架？🤔

# 開源世界真有趣

### 猛猛的 PGlite 釋出啦

之前在 local-first 那篇有提到這個有趣的東西，它是 [elestic](https://electric-sql.com/) 這間新創主力開發的，透過 WASM 把 PostgreSQL 搬到網頁裡面來，最近他們已經[正式公開這個專案](https://pglite.dev/)囉，而且還持續開發很多很有意思的應用。 😍

[https://github.com/electric-sql/pglite](https://github.com/electric-sql/pglite)

[WebAssemblyとしてPostgreSQLをビルドした「PGlite」公開。Node.jsやブラウザ上でPostgreSQLを実行、DBの永続化も可能](https://www.publickey1.jp/blog/24/webassembypostgresqlpglitenodejspostgresqldb.html)

不能不佩服這間公司對於產品的態度，真的不是玩玩而已，它除了公布這個專案之外還特別開發了一個網頁展示跟試玩的地方（看起來這個專案是 elestic 跟 Supabase 一起合作開發的） - [https://postgres.new/](https://postgres.new/)，馬上讓開發者可以試玩以及感受到 PGlite 強大跟方便。

然後不意外這個好用的東西一出現，就開始各種應用跟 side project 也跟著出現了 😝，譬如像下篇提到知名 ORM 的 Drizzle 也已經整合 PGlite，所以現在可以無痛切換本地跟遠端的開發。

![](https://x.com/sitnikcode/status/1826646718777016772)

當然還有更猛一點，直接拿來作更進一步的產品了 ⬇️

[https://github.com/chroxify/haptic](https://github.com/chroxify/haptic)

一個 Local-first 的 Markdown Editor 就這樣出現啦！

好期待後續還會出現多少有趣的東西 😏

### 雖然艱辛還是繼續向前的聯邦宇宙

在 Twitter 變成 X ~~（並且崩壞）~~的過程中，不知道大多數的用戶是選擇掙扎還是妥協。雖然數據跟新聞都提到 X 的糟糕導致很多廣告主不願意再繼續投資在這個平台上（對喔，然後馬老闆還覺得是大家的錯，提起了告訴要告那些不買廣告的人，超棒滴）。

很難得看到居然有[主流媒體](https://www.youtube.com/channel/UCEcrRXW3oEYfUctetZTAWLw)願意來深入討論目前小步崛起的分散式社交網路，主要當然是針對 ActivityPub（Mastodon）、ATProto（BlueSky），以及走半套的 Threads（但是有大量的用戶）來討論，而且節目裡面還針對不同協定的服務，也都各自邀請了相關的人員來親身說明與介紹，非常專業阿！

![](https://www.youtube.com/watch?v=-R9CWq5CBlk)

雖然我自己對藍天陣營很有好感，不過一段時間以來沒什麼太大的起色也是有點失望，也很擔心會不會這種理想派的東西，其實根本就離現實很遙遠，罵歸罵大部分的流量也都還是在那些大平台上面。不過最近因為 X 跟巴西政府槓上，因為平台被封導致來了一波巴西用戶，以及一批戰力很強的開發者 😆。這週狂噴一堆 side project 出來，真的是太棒啦！

![](https://bsky.app/profile/bsky.app/post/3l3277gkjjc2y)

**這波成長一直到現在都還沒停喔，已經突破九百萬啦* 🎉

![](https://bsky.app/profile/did:plc:q6gjnaw2blty4crticxkmujt/post/3l3g7lrs3te2i)

然後最新消息是，連巴西總統也登入啦

src: [https://bsky.app/profile/did:plc:a5o5pa6imrd52s627zq63zgz](https://bsky.app/profile/did:plc:a5o5pa6imrd52s627zq63zgz)

不過有點可惜， custom hundle 沒有對應到真正的自己個人網頁之類的地方。想想如果這步直接聯動到自己的個人頁面或是政府網站的頁面，何必還需要什麼驗證勾勾 😂

這個功能真的是 BlueSky 很強大的一個特點，衝吧！

### 開源世界就是需要 Drama

太棒啦，這次終於擴展到非 JS 的社群，換 Linux & Rust 啦 😆

結論是一位 Rust for Linux 這個子專案的其中一位重要的維護者公開說他要退出了，然後起因應該是因為他在回覆中一併提及的 `nontechnical nonsense` 心累了 😅，為防止大家可能沒抓到他的論述，他直接附上了最近[在 BPF Summit 上的一場議程的非常精準的時間點](https://www.youtube.com/watch?v=WiPp9YEBV0Q&t=1529s)。

TL;DR 版本可以參考下方推友的速記 ⬇️（還有[幾篇](https://x.com/blackanger/status/1829506615957168201)延伸的[都很值得](https://x.com/blackanger/status/1829513545647853586)看一下）

![](https://x.com/blackanger/status/1829346029113930227)

雖然這是大神之前的戰鬥，無名小卒如我沒什麼資格發言，但不知怎的總覺得技術圈真的很容易因為這種芝麻蒜皮的小事而爭起來，多一些包容吧，如果你不習慣變革，就待在自己的舒適圈也不會怎樣，讓衝組去處理就好（當然我指的衝組也不是那種激進過頭，但是要一堆人幫忙收尾那種 😓）

### 開發者、開源專案與錢錢

無意間看到有推友轉了這篇 builder 的文章，提到開源專案，以及拿開源專案包裝之後拿來作為商品販售的創業團隊的現象。

> What happens when someone takes open source code, adds a few features, closes it off, and starts charging for it?
> 
> 
> There is nothing illegal about this at all, and it happens all the time. But, does that make it right?
> 

覺得上面這句話，像是個無聲的抗議…😞

<aside>

💡

On the flip side, others argue that just because something's legal, doesn't make it ethical. This view emphasizes the spirit of open source, not just the letter of the license.

</aside>

雖然許可允許，但不代表你就應該這樣做（所以說這個世界真的容不下太理想的東西 😭），因為這種行為會破壞原本的開源反饋的正回饋。但或許也會有另一派的人出來說，如果不走回營利的路線，又要怎樣維持軟體的發展？理想跟吃飽飯這種問題本來就沒有一定的結論。

![](https://bsky.app/profile/sylee.dev/post/3l3dnxja6bl2o)

我在這邊也沒有要下什麼結論，不過很推薦大家可以去看看這篇文章的論述，或許你也會自己的想法跟看法。不過我只是想藉這個開頭導到下面這個服務。其實除了那種伸手牌的之外，還是有些人願意努力試著摸索出一條可能更好的路線。

其實一開始是看到 [Terraform 的作者轉推](https://x.com/mitchellh/status/1831733328279695637)了才留意到，原來他擔任了這個服務的顧問。這個名為 Polar 的服務，看起來就是針對開源開發者而來的，提供了一系列經營自己專案的工具跟收費的方式，他們自己的服務本身也是個開源專案，而且也很狗食的用了自己的服務來呈現，可以跳轉這邊 → [https://polar.sh/polarsource/](https://polar.sh/polarsource/)。

![](https://x.com/polar_sh/status/1831588973749149763)

除了這種針對開發者而來的服務之外，最近也有留意到幾個團隊加入了這個 [**Open Source Pledge**](https://osspledge.com/) 的組織（看起來應該是自發的），它希望有使用開源軟體的企業或服務，可以透過贊助的方式反饋回開源社群，有兩個要求：

1. 每年要支付起碼 $2,000 的金額。
2. 每年撰寫一篇文章來描述你的費用是怎麼分配支付的。

目前雖然為數不多，但可以[參考這邊已經加入的公司跟他們撰寫的資料](https://osspledge.com/members/)（裡面除了有大家熟知的 [Sentry](https://sentry.io/welcome/) 之外，還有之前介紹過的 [Val Town](https://www.val.town/) 這個很讚的開發工具，沒想到他們這麼快就加入了，真是更愛它們了啦！）

# 本週不讀冊

### 只撐了一週之自以為的笑點 😂

# 引領風潮的 ML

### 大佬之所以為大佬

前陣子蔚為風潮的 [Cursor](https://www.cursor.com/)，因為強大的 AI 功能跟 UX，看到很多開發者都從 vscode 跳船過去了（開發者果然就是最沒忠誠度的一群人），雖然試用了一陣子不過我是還沒完全轉換過去，畢竟工夫不到家，其實用那個編輯器差別不大 😅。

結果看到某個中國強者開發者走了另一條路，他也不是轉移到 Cursor，而是把 Cursor 的 AI 功能跟操作方式，想辦法移植到 neovim 上面，真的是太威了！

![](https://x.com/yetone/status/1827651133457699022)

[https://github.com/yetone/avante.nvim](https://github.com/yetone/avante.nvim)

老實說我還停留在 vim 但看到這個好心動，是不是又該花時間去玩一下 neovim 了啊，但是越老越學不動了怎麼辦 😭（還是先用 Zed 撐一下好了）。

### 廢推即週報 - 自動化產生週報

*無意間看到這個，真的眼睛都亮起來了！沒想到我的廢推也有變黃金的時候 #並沒有* 😅

因為其實不少這邊記錄的東西，很多都是從 X 上面看到，也通常會直接轉貼，或者是評論個幾句，如果能把這個行為跟後續的產生結合，想必更可以節省下很多時間。結果沒想到居然有人實作出這個工具了。這個 AI 工具會根據你的 X 推文，自動幫你彙整成一篇週報，而且它還會自動引入來源、影片等資料，真的幾乎可以無痛發佈了，超讚！

![](https://x.com/seldo/status/1827815648828985601)

這位是之前 npm 的共同創辦人之一，最近看他又換到新公司去了（[LlamaIndex](https://github.com/run-llama/llama_index)），結果追一下有發現這原來是個用來開發 LLM 應用程式的開發框架，真的是追不完的東西，苦啊～

[https://github.com/run-llama/LlamaIndexTS](https://github.com/run-llama/LlamaIndexTS)

### Mozilla 也不落人後？

雖然在 Firefox 式微之後，我也不太確定 Mozilla 要走到哪邊去，然後再加上可能金主 Google 也要不見了，沒辦法走出自己路線的 Mozilla 似乎也開始各領域的嘗試，然後就看到這個消息～

[Introducing Solo, an AI website builder for solopreneurs | The Mozilla Blog](https://blog.mozilla.org/en/mozilla/introducing-solo-ai-website-builder/)

是說不意外嗎？他們也打算進來玩玩 AI，然後目標是生成式的網站服務 - [Solo](https://soloist.ai/)。看起來是可以根據用戶提供的基本資料，就可以產生出一個豐富的靜態式網站。不過老實說這感覺測試性質再高一些，畢竟同質的產品太多了，除非有什麼獨特的功能，不然一般人想到這類的功能，可能也不太會特別找到 Mozilla 家這邊來吧。😓

*唉，我還是覺得當初沒有堅持把 FireFox OS 走下去真的是可惜阿…*

### 是不是所有程式服務最後都會提供 AI 之 Replit 篇

**好長的子標題* 😅

[Replit](https://replit.com/) 應該也是大家頗熟悉的一個服務，就是讓大家可以直接用他們的網頁介面來寫程式，然後當然可以無痛直接佈署到他們自家的平台上。然後也不意外的是，他們最近也推出了自家的 AI 協助寫程式的服務 - [Replit Agent](https://docs.replit.com/replitai/agent)。

不過我看了之後到是寫下了這段：

![](https://bsky.app/profile/sylee.dev/post/3l3kexr5kv2dd)

雖然這類比有些偏頗，畢竟 Replit 提供的功能比 Val Town 還是多了不少，它也支援了除了 JS/TS 之外的其他不同語言的開發，Val Town 大致上還是依賴 JS-eco 來運作的，不過如果單論 AI 協作的這部分的話，我是覺得大家可以來試試 Val Town 的效果看看，應該是不會讓你失望的。

# **網路是個好東西**

### 子渝終於也出單曲啦，大家刷起來！！

- 不解釋，不刷起來支持這樣對嗎？
- 幸好曲風不是 JYP 意識流，超愛～

![](https://www.youtube.com/watch?v=IIrCrGAX03Y&feature=youtu.be)

***還沒刷起來的給我過來坐下 #誤***

![](https://x.com/tzuwieee25/status/1831633856409301371)

### 我也想每週末這麼廢

在這年代，當狗都比當社畜還好命 😅

![](https://x.com/Yoda4ever/status/1827770423293116829)

### 真。狼性

*在厲害國面前，大家都是小綿羊* 🤣

話說，雖然大家都有自己的選擇權益，但還是希望更多的人會願意選擇善良的一邊，這種自己理虧還大剌剌，感覺越來越常出現了，覺得也是滿悲哀的一件事…

*苦主是 OffScreen 的作者，[他們團隊製作的 app 真的都很不錯](https://bento.me/mdstudio)，大家可以支持一下～

![](https://x.com/liuyi0922/status/1832482565082771843)

### 社畜都是一樣的

透過影片也可以感受到滿滿的倦勤感 🤣

![](https://x.com/piepieyaaa/status/1827656393018819017)

### 設鬧鐘之所以無用

這，實在太有既視感了  😅

![](https://x.com/kirawontmiss/status/1829212051203600837)

### 臺灣人有時候也是蠻可愛的

但如果是我的話應該會被嚇死 😄

![](https://x.com/TaiwanSpecial/status/1828995886891872369)

### 最近越來越多針對小孩學校程式的產品了～

好有趣阿，真的是越來越多可以玩的東西，看什麼抖音嘛～ 😜

[Micro:bit Educational Foundation](https://microbit.org/)

![](https://x.com/hemashushu/status/1831958145931080072)