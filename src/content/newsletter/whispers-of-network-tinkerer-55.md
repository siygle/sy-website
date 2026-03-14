---
title: "網路黑手的呢喃 - #55"
date: "2024-09-27"
description: "The passkey lives on the wrong device, if you''re away from the computer and want to login, and it'…"
tags:
---
當然少不了的網路好東西～
tags: AI, Cloudflare, Deno, Game, Newsletter, OSS, Performance, WordPress, bun
category: 不定期的呢喃

---

# **Web 生態圈例行更新**

### Bun 支援在 JS 直接呼叫 C，猛！

直接來一個預告之後就馬上實作了，大家好像逐漸習慣 bun 這麼激進的開發路線 😄

![](https://x.com/bunjavascript/status/1836431249176695130/photo/1)

Bun 在最新釋出的版本中，提供了這個酷酷的功能（不過其實也沒什麼，就是透過本來就存在的 ffi 來實作而已，不過這邊 Bun 更進一步，直接可以直接在 JS 程式裡面直接呼叫 C 函式，其他編譯等動作 Bun 都會幫你處理了，所以就可以無痛整合不需要其他的設定。官方還特別為了這個新功能寫了下面這篇文章來說明，也一併展示了幾個範例，[譬如這個直接呼叫 ffmpeg 來處理影片轉檔](https://bun.sh/blog/compile-and-run-c-in-js#what-can-you-build-with-this)，真的是超級舒服（前提是如果你也熟悉 C 的話 😅）

[Compile and run C in JavaScript](https://bun.sh/blog/compile-and-run-c-in-js)

Bun 常常會引入一些頗驚豔的新功能，也蠻希望 Deno 也能跟上，不然如果只是單純跟 Node.js（生態圈） 相容，其實直接用 Node.js 就夠了，不走一條區別的路的話，要吸引開發者跳船還是有些難度（*老人 & 愛好者的碎念*） 😢。

### 終於 Deno 2.0 快來了

*經過不斷跳票終於要兌現的 Deno 2* 🤣

終於看到官方發佈 2.0 RC 版本的消息了（不過其實前陣子就已經看到相關的消息）。經過這麼長時間的開發，Deno 終於要邁向第二個大版號了阿 🤘

其實在鄰近 2.0 的最近，Ryan 非常頻繁地出現在好幾個 Podcasts 節目中來談論即將到來的 Deno 2.0，有興趣也可以跳轉各家（[Syntax](https://www.youtube.com/watch?v=tZBCq8Ijkgw)、[JavaScript Jabber](https://topenddevs.com/podcasts/javascript-jabber/episodes/unpacking-deno-2-code-stability-free-speech-and-more-jsj-648#player1?catid=0&trackid=0)、[Stack Overflow](https://stackoverflow.blog/2024/08/20/ryan-dahl-deno-20-scale-improve-npm-nodejs/)、[PodRocket](https://podrocket.logrocket.com/deno-2-ryan-dahl)），其中有特別提到[即將伴隨 2.0 出現的長期支持版本](https://thenewstack.io/deno-2-arrives-with-long-term-support-node-js-compatibility/)，能夠更偏向企業需求、穩定的方向，還是滿值得期待的。

![](https://x.com/deno_land/status/1836785438280806492)

除了各項的 bugfix 跟優化之外，最近 Ry 也提到了伴隨者 Deno 的開發，結合 Deno & v8 的一個很重要的元件 - Rusty V8 也終於走到了穩定版本了，不過因為決定要跟著 V8 的版本，所以第一個穩定版本不是大家熟知的 1.0.0 而是 129.0.0 😄。看起來之後升級與跟 V8 的整合應該會更流暢了（就是跟著 V8 四週一個升級，然後要整合 V8 新功能也會方便許多。

[Announcing Stable V8 Bindings for Rust](https://deno.com/blog/rusty-v8-stabilized)

### #FreeJavaScript

***不解釋*** 😎

承上。Deno 除了最近緊鑼密鼓的準備迎接 2.0 釋出之外，最近 Ryan 也丟出了下面這個東西，看來是準備要跟 Oracle 針對 JavaScript 的商標權對簿公堂了。

關於這個爭議的細節，可以參考下面 skeet 附上的幾個連結，裡面有非常詳細的說明，如果你本身也是 JS 開發者或認同這件事的話，也可以透過 [javascript.tm](http://javascript.tm) 連結裡面的署名來支持這個活動。當然如果你是法律專才的話，更歡迎能直接聯絡他們，準備開戰！#誤 🤣

![](https://bsky.app/profile/sylee.dev/post/3l4d45xat5p2w)

# 開源世界真有趣

### 真的是看不懂 TS/JS 阿

無意間看到 Bloomberg 的開發者丟出來的這個 TS → JS 轉換器，只能說我真的越來越看不懂 JS 了啊…。這個 ts-blank-space 的概念也是非常奇葩，它在轉譯的過程中只是拿掉了型別的部分，然後加入了空白來取代原本型別的位置。如此一來就解決了位置不同的問題，從而也不需要 sourcemaps 來處理對映。

[ts-blank-space](https://bloomberg.github.io/ts-blank-space/)

雖然我可能不太會用到這樣的工具，不過能想出這樣的替代方案，只能佩服網路真的是處處強者的地方。😅

![](https://x.com/acutmore/status/1836762324452975021)

### 這世界又多了一個酷酷的 shell

最近不約而同看到幾位網友都推了這個名叫 nushell 的東西，激起了一點點好奇心就跑去翻了一下，沒想到真的挖到寶了 🤩

![](https://bsky.app/profile/sylee.dev/post/3l4o65yv7mkbj)

我覺得 nushell 的官網做得蠻好的，你一眼看過去就大概知道它是什麼東西了。它自稱 new type of shell 真的沒有過譽，以往我們使用 shell 大多數 DevOps 或管理一些系統、裝置的時候，老手會使用的東西，但畢竟年代久遠，它的語法跟現在比較新型的語言有不小的落差（而且很陽春），導致要上手也不是那麼方便，看起來 nushell 就是針對這些痛點而來的。

![src: Nushell - [https://www.nushell.sh/](https://www.nushell.sh/)](../assets/網路黑手的呢喃 #55 - image.png)

src: Nushell - [https://www.nushell.sh/](https://www.nushell.sh/)

自己稍微拿它處理一些平常的工作數據，真的是非常驚豔，很多原本複雜的行為（甚至可能需要用 script 來處理的），都可以透過內建的一些工具直接完成，而且直覺又簡單的語法，甚至都還沒機會玩到 [plugin](https://www.nushell.sh/book/plugins.html) 這塊。推薦有這類需求的開發者都可以來玩玩看喔～

### 開源世界就是要 Drama

這次輪到開源常青樹 WordPress 啦！

真的開源社群沒有 Drama 就不叫開源社群了耶。🤣

日前 WordPress 在 WordCamp US 上直接點名了 [WP Engine](https://wpengine.com/)，然後提到了它們刻意用了開源社群的成果，然後包裝成自己的營利產品（而且刻意閹割了部分功能，以從客戶得到更多的利潤），炮火之猛烈。當然這種開源專案的問題，之前也已經上演過好幾次了，譬如最近剛落幕的 AWS vs ElasticSearch，抑或是 terraform 與 Redis 都是類似這種問題到存在。

其實也不難理解，開源社群的大家（幾乎）無償的貢獻，才讓專案能增長、茁壯，然後有人來直接把成果收割，而且還拿著這個成果，包裝成自己的商品來賺自己的錢，如果你是貢獻者還過著苦哈哈的生活，你不會不爽嗎？ 😓

[WP Engine is not WordPress](https://wordpress.org/news/2024/09/wp-engine/)

*時間軸標好給大家了，有興趣可以直接聽這段 Matt 怎麼說的：*

![](https://youtu.be/fnI-QcVSwMU?t=1025)

不過這件事先不要太快站隊比較好，因為 WP Engine 也跳出來反擊了～

![](https://x.com/wpengine/status/1838350670564377051)

他們現在指控 Automattic & CEO Matt 是惡意攻擊他們（而且 Matt 以此為手段來威脅 WP Engine 必須支付費用給他們），這看起來好像會演變成法律攻防，有興趣也可以看一下 WP Engine 的論述文件。值得繼續關注這件事，也希望不要傷害到 WordPress 的開源發展才好（雖然現在的我已經沒在用 WP，不過一路走來還是有點感情的，而且 Automattic 一直以開源、遠端友善著名的企業，希望不要崩壞才好 🤞。

**Updated：**

這個 Drama 可能會燒一陣子，Automattic 也準備訴諸法律了。

![](https://x.com/siygle/status/1838740506735714476)

然後現在走到 WPEngine 出來指控 WordPress 阻擋了 WPEngine 升級 plugins & themes，希望不要演變到無法收拾的地步阿（會不會 WordPress folk 要準備上出現了吧）

![](https://x.com/bgardner/status/1839070322617643212)

# 愛讀冊啦～

### 積沙成塔的優化

<aside>
💡

Optimizing operations that are already measured in microseconds may seem a little silly, but these small improvements add up

</aside>

看到大大推了這個結語，覺得很有 RD 的帥勁（哪裡 🤣），所以決定好好來讀一下這篇優化的文章。

不能不承認我還是非常以人廢言的，所以反之有好感的也是會無腦先支持一下，所以看到是 Cloudflare 出品的就覺得應該是值得花這個時間來閱讀一下。

![](https://x.com/justjs14/status/1833887759519318101)

文中主角就是前陣子他們剛放出來的自幹版的 proxy service - [**Pingora](https://blog.cloudflare.com/pingora-open-source/)** 的改善經驗談。在這種世界級的服務下，任何一點小小的改善，累積起來都是想當龐大且影響甚鉅（看一些他們精美的流量 😅 → *the rate of requests leaving pingora-origin (globally) is 35 million requests per second*）

另外，看他們一路下來是怎麼進行優化這件事，也是很值得學習的經驗：

1. 找出可優化的地方（pingora-origin → clear_internal_headers → 1.7% CPU time)
2. Benchmark
3. 嘗試不同的改善方法，並再次收集數據佐證。
4. 重複 2~3 直接達成預計可接受的結果，當然，如果可以的話，釋出你的成果給其他人就更酷了 😄（就像 Cloudflare 完成後也一併開源了他們努力成果，一個新的 [Trie](https://en.wikipedia.org/wiki/Trie) 資料結構的實作 → https://github.com/cloudflare/trie-hard）。

系統優化真的就是積沙成塔這種工作，不過我覺得一間企業願意撥資源進行這種工作，更是讓人羨慕與敬佩（要不是因為太弱，真想立刻投履歷 #誤 🤣）。

### DHH 出來分享 Passkey 的經驗

最近訂閱了 DHH 的 RSS 發現其實他真的超級常發文的，任何心血來潮或是針對某個議題，都習慣寫成文章的方式來闡述他的想法（覺得很讚，希望也有辦法效法他這樣）。

最近他針對一項新的安全機制 passkey 提出了自己的觀點，文章不長有興趣可以看一下。

[Passwords have problems, but passkeys have more](https://world.hey.com/dhh/passwords-have-problems-but-passkeys-have-more-95285df9)

不知道有多少人使用、或者實際開發過 passkey 的功能，不過看起來主要的問題就在於裝置綁定的這部分 ⬇️

> The passkey lives on the wrong device, if you're away from the computer and want to login, and it's not at all obvious to most users how they might fix that.
> 

應該說如果你沒有多裝置或平台的問題，可能還不會意識這個問題，但如果有而且沒有搭配像 1password 這類的密碼管理器使用，就很可能會無法正常登入，當然還有整個流程上其他許多相對複雜的機制。

不好說這個觀點多少人認同，不過當初推 passkey 就是為了解決原本使用帳號密碼登入的問題（安全性、易用性等問題），如果沒有這類比較複雜的使用場景，目前用應該頂多是搭配手機就可以無痛登入，不過還是希望 passkey 能持續優化下去，尤其是 recovery 😅。

# 引領風潮的 ML

### 沒想得 AI 也可以運用到社交網路上

然後變成糟糕的東西 #誤 🤣

最近這陣子出現一個結合了 AI 跟 SNS 的新產品 - SocialAI。

[SocialAI - Your Personal AI-Powered Social Network | Be the Main Character](https://socialai.co/)

沒有錯！就是你想的那樣 🤘 就是一般網路上常見的機器人大軍。

那你可能接下來就會覺得，這東西有什麼存在的價值嘛 😅

其實進去玩一玩就知道了，就是一個網路鼓勵師的概念。除非你是 KOL 或是本來就頗具名聲的人，不然一般人玩 SNS 大概就是自言自語居多（沒錯，就算你去回覆別人的訊息，對方也不見得會理你的啦！），然後 SocialAI 應該就是看準這個角度來切入，透過機器人大軍，無論你貼了什麼訊息，他都會瞬間產生數組回覆訊息給你（當然這邊會根據一開始你設定不同人格的機器人，產生不同屬性的回覆訊息），可以看看下面這個範例應該就知道了 ⬇️

![image.png](../assets/網路黑手的呢喃 #55 - image 1.png)

雖然覺得蠻好笑的，但說不定深陷網路影響的現代人，真的有這類工具存在的空間，其實想想就是現在去參加心理諮商的行為也滿類似的，如果之後機器人有辦法調校出某些更具價值的回覆訊息（你怎麼知道會不會出現付費的「心理諮詢師」這類的機器人呢 😄）

***結果下一步變成 AI 取代心理諮商 #炸*** 

# **網路是個好東西**

### 玩遊戲也要這麼辛苦嗎 😆

嘿嘿，沒想到還有一邊玩遊戲，一邊學 python 吧！以後被抓到就可以名正言順的說：「我在學習啦！」

[The Farmer Was Replaced](https://store.steampowered.com/app/2060160/The_Farmer_Was_Replaced/)

### Starlink mini

之前好像有分享過，不過看起來體驗真的不錯，之後會不會人手一台阿 😍

![](https://x.com/DashHuang/status/1837645431226224937)

### 最近河馬迷因真的夯

[小侏儒河馬 Moo Deng 的風潮](https://www.adaymag.com/2024/09/19/moo-deng.html)，你跟上了嗎？

人家常說看可愛生物可以讓自己的心情變好，終於略略能體會到寵物黨的心理了 😄。

![](https://x.com/ShanksKek/status/1837724020822720831)

有位臺灣深處理泰國的推友會不定期翻譯，歡迎大家 follow 起來！

![](https://x.com/piepieyaaa/status/1837862365817458972)

### 還是很多為這塊土地努力的人

日前看到的訊息，沒想到亞蘭姊這麼有心，一定要推起來！

![](https://x.com/SCBakedpotato/status/1837173617412739490)

[朕經八掰](https://www.youtube.com/@chattingwiththeking)

### 強者的戰鬥力

強者之所以為強者，就是談笑間就把東西實作出來了（海總威武！）

是說除了許多方便的小工具之外，也可以訂閱海總的電子報喔，這週都可以從中看到不少有趣的東西，推薦！

[小海報 | 海總理 | Substack](https://tzangms.substack.com/)

![](https://x.com/tzangms/status/1836927535806071183)

### 這畫面太美

好期待明年的到來阿 🤩

![](https://x.com/DiscussingFilm/status/1838949045282197931)