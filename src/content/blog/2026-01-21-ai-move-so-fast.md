---
title: '自從有了 AI，世界變得太快了'
date: '2026-01-21'
tags: ['Chat', 'AI']
draft: false
summary: '快到老人已經跟不上的這個世界...'
authors: ['sy']
---

## 前言

AI 崛起也在不知不覺中已經過了兩三年的時間，它也逐漸在方方面面都開始對我們產生了很大的影響，不過我沒有要展開討論這點，我只想針對自己的老本行來抒發下最近的想法。

老實說，AI 對於軟體開發人員來說，應該是又愛又恨的存在吧

- [AI was behind over 50,000 layoffs in 2025 — here are the top firms to cite it for job cuts](https://www.cnbc.com/2025/12/21/ai-job-cuts-amazon-microsoft-and-more-cite-ai-for-2025-layoffs.html)

像上述這類因為導入 AI 而裁員的新聞，這一兩年來相信都已經見怪不怪了吧（今年還是繼續砍...），但習慣跟能不能接受還是兩回事，前幾年不斷被傳講的「Software is eating the World」現在看起來更顯諷刺（結果自己先被吃掉了 😢），雖然有千言萬語不過這個時間點，大概都是抱怨的話，所以就不展開了～

既然世界已經演變成這樣，也只能強迫自己去接受它，不過值得慶幸的是鄙司也是大力推動（但還沒裁員）的那一派。能夠遊刃有餘的使用各家 AI 其實也是一種奢侈的事，也在逐漸摸索中有了自己的一些體會跟感想。

## 玩具變工具

記得 GPT 剛火熱起來的時候，雖然當時有不少軟體開發者悲觀論出現，不過大多數的開發人員我猜應該都沒有很認真的看待它，畢竟做做玩具或 one time only 的小東西或許沒什麼問題，但真的拿去能無痛接入到平常的開發工作中應該不多。

不過隨著不斷飛速的成長，最近也開始看到一些很不一樣的言論：

*Google 的資深工程師透過 AI 在短時間完成以往一年的工作。*
![](https://x.com/rakyll/status/2007239758158975130)

*DHH 也提到最近他對 AI 徹底改觀，在開發中開始大量使用*
![](https://x.com/dhh/status/2008827848216461401)

甚至[連 torvalds 也跳進來玩了](https://github.com/torvalds/AudioNoise/commit/93a72563cba609a414297b558cb46ddd3ce9d6b5)（對，我知道只是玩玩而已），也還有很多很多第一線的資深開發者都開始對 AI 有更積極的觀點。Redis 的作者也在日前寫下了他近期對 AI 的看法 - [Don't fall into the anti-AI hype](https://antirez.com/news/158)，雖然有部分不樂觀、不確定的成分，不過還是說到了：


> Whatever you believe about what the Right Thing should be, you can't control it by refusing what is happening right now. Skipping AI is not going to help you or your career. Think about it. Test these new tools, with care, with weeks of work, not in a five minutes test where you can just reinforce your own beliefs. Find a way to multiply yourself, and if it does not work for you, try again every few months.

> Yes, maybe you think that you worked so hard to learn coding, and now machines are doing it for you. But what was the fire inside you, when you coded till night to see your project working? It was building. And now you can build more and better, if you find your way to use AI effectively. The fun is still there, untouched.

這已經是不可逆的趨勢了，要嘛就跳進來好好的感受，然後再思考要怎麼跟它共存，走出一條全新的道路來。

## AI 帶來的那團火

**[要爆了](https://www.youtube.com/watch?v=epNAZ0HHcz8&t=42s)**
*我想現在可能很多小朋友已經不知道這是什麼埂了* 😅

正如 [antirez](https://github.com/antirez) 在結尾說到的那句話 - The fun is still there, untouched，以往軟體開發最有成就感的地方，就在於自己實作出預期的目標之後，看著那個原本自己想像之物轉成成實體的那一瞬間，親自用了、玩了。當 AI 來了之後，它把原本這種反饋的流程加快又增大。

### 重寫輪子，又怎樣 😂

前篇文章已經是  2024 的事，[那邊](blog/2024-05-08-rewrite-chat)提到用 fresh 重寫過，沒想到下一篇又是重寫吧。最近因為對 Deno 發展有點失落（Fresh 就算了吧，等 2.0 問世等到不想用了），剛好最近對 [TanStack](https://tanstack.com/) 這個生態很有興趣，就想說來重寫試試。

結果大概半天就成形了：
 - 沿用 layout 並優化
 - 逐步補上缺少的 RSS、favicon、分頁、標籤等
 - 增加針對 X、bluesky、YouTube 的 markdown link -> embedded 的轉換
 - 增加對應的 cloudflare 佈署設定

真的是秒完成，以前都只敢想，但真的要動手改寫就猶豫然後放在 todo 永遠不再去碰它，但現在就是 1~2 小時的時間而已。

結果在推上線之前剛好又看到 [Cloudflare 收購了 Astro](https://blog.cloudflare.com/astro-joins-cloudflare/) 的消息，想說來改成用親兒子的框架說不定對未來維護更方便，結果 AI 就劈哩啪啦就轉移好了，實在是...😅

我知道可能會有人持反對觀點，覺得 AI 的東西根本沒辦法維護。就我個人的想法，沒錯，但依照目前的進步速度，AI 進步到可以拿捏大型架構軟體應該也不是不可能的事。其次，會不會軟體就是變成一次性產品或是不需要維護的使用情境呢？

### AI 帶來的新場景

寫到這邊又想起之前 [local-first](https://chat.sylee.dev/2024/07/26/local-first-conf-2024#6fd0290e4d934deda54ced091444e6b6) 裡面聽到的關於 Barefoot Developer 的觀點（這邊就不展開了，有興趣可以跳轉過去，或者直接去聽講者的分享，非常推薦！），簡單說就是比起以往大企業提供的大型軟體的模式，AI 的出現帶來了更貼近用戶、更客製的需求（說到這裡看到最近有人提到[美股 SaaS 的慘況 ](https://x.com/kubotamas/status/2012820237456990242)😅）。

就順著上題提到的「重寫本站」的經驗談。

裡面除了單純用 Astro 改寫之外，裡面有一個比較特別的需求，就是「針對 X、bluesky、YouTube 的 markdown link -> embedded 的轉換」這件事，看起來就是支援能嵌入社交平台的文章，但我因為把寫作的流程改到 Obsidian 上面（嘿，沒錯，但這個之後有機會再展開吧），然後為了介面友善的目的，搭配下列這個 plugin，他可以讓貼上的 sns 連結展開成 embedded post 的形式。

[GitHub - GnoxNahte/obsidian-auto-embed: Obsidian plugin to embed websites using simple markdown instead of iframe](https://github.com/GnoxNahte/obsidian-auto-embed)

但它是實際上是利用插入圖片的格式，所以假設是[這篇推文](https://x.com/jack/status/20)，就會是：
```
![](https://x.com/jack/status/20)
```

但因為這個方式當你佈署上線之後，它是不會轉譯成你預覽看到的 embedded post 的格式，正確的應該會是：
```
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">just setting up my twttr</p>&mdash; jack (@jack) <a href="https://twitter.com/jack/status/20?ref_src=twsrc%5Etfw">March 21, 2006</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
```

原本可能身為前端苦手大概就是放棄，或是找其他現成的工具，但因為有 AI 我就試著把需求描述給它，它分析了之後就用 [rehype plugin 的方式來實作](https://github.com/siygle/sy-website/blob/master/src/lib/rehype-social-embed.ts)，就這樣原本可能會是「找第三方」->「測試」這個流程的反覆幾次，現在一個 AI 來回就實作完成了。

的確，它可能不會是一個多少人會用的模組，但這種極小的需求，正是上述 Barefoot Developet 所描述的場景，跟之前有人形容未來的 AI 算力就會變成像現今的水、電一樣基本生存必要的元件，這樣看起來軟體人可能就是未來的水電師傅吧～😂

### 開發行為的根本改變

![](https://x.com/addyosmani/status/2013343185758490741)

最近推上不少人轉了 Ryan 的推文，也看到蠻兩極的意見，或許大家都有各自不同的看法，不過我自己也是比較偏向「或許在不久的將來，軟體工作不再需要長時間著鍵盤輸入各種語法、指令，而是站在更高緯度來「管理」這些 agent 來處理這種不同的需求」，正如前面提到水、電的例子，在現今這個到處都有水管可以方便配送之外，當然你也是可以提著水桶到河邊把水裝回來，但多數人可能不會再作這樣的事了。

當然未來到底會演變成什麼樣子，現在的我們也沒辦法知道。像 [Musk 描繪那麼美好的未來](https://www.cna.com.tw/news/ait/202405240360.aspx#:~:text=%E7%BE%8E%E5%9C%8B%E6%9C%89%E7%B7%9A%E9%9B%BB%E8%A6%96%E6%96%B0%E8%81%9E%E7%B6%B2%EF%BC%88CNN%EF%BC%89%E5%A0%B1%E5%B0%8E%EF%BC%8C%E9%A6%AC%E6%96%AF%E5%85%8B%E5%9C%A8%E6%B3%95%E5%9C%8B%E9%A6%96%E9%83%BD%E5%B7%B4%E9%BB%8E%E8%88%89%E8%A1%8C%E7%9A%84%E5%B9%B4%E5%BA%A6%E3%80%8C%E7%A7%91%E6%8A%80%E8%90%AC%E6%AD%B2%E3%80%8D%EF%BC%88VivaTech%EF%BC%89%E6%96%B0%E5%89%B5%E5%B1%95%E4%B8%AD%E4%B8%80%E5%A0%B4%E6%9C%83%E8%AD%B0%E4%B8%8A%E9%80%8F%E9%81%8E%E8%A6%96%E8%A8%8A%E8%A1%A8%E7%A4%BA%EF%BC%9A%E3%80%8C%EF%BC%88%E6%9C%AA%E4%BE%86%EF%BC%89%E5%BE%88%E5%8F%AF%E8%83%BD%E6%88%91%E5%80%91%E6%B2%92%E6%9C%89%E4%BA%BA%E6%9C%83%E6%9C%89%E5%B7%A5%E4%BD%9C%E3%80%82%E3%80%8D%20%E5%9C%A8%E4%BB%96%E6%8F%8F%E7%B9%AA%E7%9A%84%E6%9C%AA%E4%BE%86%EF%BC%8C%E5%B7%A5%E4%BD%9C%E5%B0%87%E6%98%AF%E3%80%8C%E9%9D%9E%E5%BF%85%E8%A6%81%E7%9A%84%E3%80%8D%E3%80%82%20%E9%A6%AC%E6%96%AF%E5%85%8B%E8%AA%AA%EF%BC%9A%E3%80%8C%E5%A6%82%E6%9E%9C%E4%BD%A0%E6%83%B3%E5%81%9A%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%9C%89%E9%BB%9E%E5%83%8F%E6%98%AF%E4%BC%91%E9%96%92%E5%97%9C%E5%A5%BD%EF%BC%8C%E4%BD%A0%E5%B0%B1%E8%83%BD%E5%BE%9E%E4%BA%8B%E4%B8%80%E4%BB%BD%E5%B7%A5%E4%BD%9C%E3%80%82%20%E4%B8%8D%E7%84%B6%E7%9A%84%E8%A9%B1%EF%BC%8C%E4%BB%BB%E4%BD%95%E4%BD%A0%E6%83%B3%E8%A6%81%E7%9A%84%E5%95%86%E5%93%81%E5%92%8C%E6%9C%8D%E5%8B%99%EF%BC%8CAI%E5%92%8C%E6%A9%9F%E5%99%A8%E4%BA%BA%E9%83%BD%E5%B0%87%E6%9C%83%E6%8F%90%E4%BE%9B%E3%80%82%E3%80%8D%20%E9%A6%AC%E6%96%AF%E5%85%8B%E9%80%B2%E4%B8%80%E6%AD%A5%E8%A1%A8%E7%A4%BA%EF%BC%8C%E9%80%99%E7%A8%AE%E5%81%87%E8%A8%AD%E6%83%85%E6%B3%81%E8%A6%81%E8%83%BD%E6%88%90%E7%9C%9F%EF%BC%8C%E6%9C%89%E5%BF%85%E8%A6%81%E6%9C%89%E3%80%8C%E5%85%A8%E6%B0%91%E9%AB%98%E6%94%B6%E5%85%A5%E3%80%8D%EF%BC%88universal%20high%20income%EF%BC%89%E3%80%82,income%EF%BC%89%EF%BC%8C%E4%BD%86%E4%BB%96%E6%B2%92%E6%9C%89%E9%80%8F%E9%9C%B2%E9%82%A3%E6%9C%83%E6%98%AF%E4%BB%80%E9%BA%BC%E6%83%85%E6%B3%81%E3%80%82%20%E9%A6%AC%E6%96%AF%E5%85%8B%E9%82%84%E8%AA%AA%EF%BC%9A%E3%80%8C%EF%BC%88%E5%B1%86%E6%99%82%EF%BC%89%E5%95%86%E5%93%81%E5%92%8C%E6%9C%8D%E5%8B%99%E9%83%BD%E4%B8%8D%E6%9C%83%E5%87%BA%E7%8F%BE%E7%9F%AD%E7%BC%BA%E3%80%82%E3%80%8D%20%E5%A0%B1%E5%B0%8E%E6%8C%87%E5%87%BA%EF%BC%8C%E9%81%8E%E5%8E%BB%E5%B9%BE%E5%B9%B4AI%E8%83%BD%E5%8A%9B%E7%AA%81%E9%A3%9B%E7%8C%9B%E9%80%B2%EF%BC%8C%E5%BF%AB%E5%88%B0%E8%AE%93%E7%9B%A3%E7%AE%A1%E6%A9%9F%E9%97%9C%E3%80%81%E4%BC%81%E6%A5%AD%E5%92%8C%E6%B6%88%E8%B2%BB%E8%80%85%E8%B7%9F%E4%B8%8D%E4%B8%8A%EF%BC%8C%E9%83%BD%E9%82%84%E5%9C%A8%E8%A8%AD%E6%B3%95%E6%90%9E%E6%B8%85%E6%A5%9A%E8%A9%B2%E5%A6%82%E4%BD%95%E8%B2%A0%E8%B2%AC%E4%BB%BB%E5%9C%B0%E9%81%8B%E7%94%A8%E9%80%99%E9%A0%85%E7%A7%91%E6%8A%80%E3%80%82%20%E9%9A%A8%E8%91%97AI%E6%87%89%E7%94%A8%E5%9C%A8%E5%B8%82%E5%A0%B4%E4%B8%8A%E6%93%B4%E6%95%A3%EF%BC%8C%E5%90%84%E8%A1%8C%E5%90%84%E6%A5%AD%E5%8F%8A%E5%90%84%E9%A1%9E%E8%81%B7%E7%BC%BA%E5%B0%87%E5%A6%82%E4%BD%95%E8%AE%8A%E5%8C%96%EF%BC%8C%E7%9B%B8%E9%97%9C%E7%96%91%E6%85%AE%E4%B9%9F%E6%8C%81%E7%BA%8C%E5%A2%9E%E5%8A%A0%E3%80%82%20%E4%B8%8D%E9%81%8E%EF%BC%8C%E9%BA%BB%E7%9C%81%E7%90%86%E5%B7%A5%E5%AD%B8%E9%99%A2%EF%BC%88MIT%EF%BC%89%E8%A8%88%E7%AE%97%E6%A9%9F%E7%A7%91%E5%AD%B8%E6%9A%A8%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E5%AF%A6%E9%A9%97%E5%AE%A4%E7%9A%84%E7%A0%94%E7%A9%B6%E4%BA%BA%E5%93%A1%E4%BB%8A%E5%B9%B41%E6%9C%88%E7%99%BC%E7%8F%BE%EF%BC%8C%E8%81%B7%E5%A0%B4%E4%B8%8A%E6%8E%A1%E7%94%A8AI%E7%9A%84%E9%80%9F%E5%BA%A6%EF%BC%8C%E6%AF%94%E4%B8%80%E4%BA%9B%E4%BA%BA%E5%8E%9F%E6%9C%AC%E9%A0%90%E6%9C%9F%E5%92%8C%E6%86%82%E5%BF%83%E7%9A%84%E6%83%85%E6%B3%81%E6%85%A2%E5%BE%88%E5%A4%9A%E3%80%82%20%E4%BB%96%E5%80%91%E7%9A%84%E5%A0%B1%E5%91%8A%E8%A1%A8%E7%A4%BA%EF%BC%8C%E5%85%88%E5%89%8D%E8%A2%AB%E8%AA%8D%E5%AE%9A%E6%81%90%E6%80%95%E6%9C%83%E5%8F%97%E5%88%B0AI%E5%A8%81%E8%84%85%E7%9A%84%E5%B7%A5%E4%BD%9C%EF%BC%8C%E7%9B%AE%E5%89%8D%E5%B0%8D%E9%9B%87%E4%B8%BB%E8%80%8C%E8%A8%80%E5%A4%A7%E5%A4%9A%E9%82%84%E4%B8%8D%E5%85%B7%E8%87%AA%E5%8B%95%E5%8C%96%E7%9A%84%E7%B6%93%E6%BF%9F%E6%95%88%E7%9B%8A%E3%80%82%20%E9%A6%AC%E6%96%AF%E5%85%8B%E5%9C%A8%E6%9C%83%E8%AD%B0%E4%B8%8A%E5%8F%88%E8%AA%AA%EF%BC%9A%E3%80%8C%E7%9C%9F%E6%AD%A3%E6%9C%89%E6%84%8F%E7%BE%A9%E7%9A%84%E5%95%8F%E9%A1%8C%E5%B0%87%E6%9C%83%E6%98%AF%EF%BC%9A%E7%95%B6%E9%9B%BB%E8%85%A6%E5%92%8C%E6%A9%9F%E5%99%A8%E4%BA%BA%E5%81%9A%E4%BB%BB%E4%BD%95%E4%BA%8B%E9%83%BD%E8%83%BD%E5%81%9A%E5%BE%97%E6%AF%94%E4%BD%A0%E5%A5%BD%EF%BC%8C%E4%BD%A0%E7%9A%84%E7%94%9F%E5%91%BD%E9%82%84%E6%9C%89%E6%84%8F%E7%BE%A9%E5%97%8E%EF%BC%9F%E3%80%8D)，身為悲觀論者以及 nobody 集合體的我目前是沒辦法體會 😅，不過看著身邊的東西一點一點的變化也是蠻有意思的，譬如：

**應用程式的定位**

幾年前，甚至說以往，開發者對於各式各樣的開發工具經常趨之若鶩，這也是一塊許多人投入的市場，收費產品、開源專案等多不勝數。光看開發者熟知的 VSCode，圍繞在它身旁的就有多少 plugins，但最近 agent 興起之後，不少都轉移以 agent 為主、編輯器為輔的工作模式，當這個趨勢持續下去之後，原本的那些開發工具是不是會越來越不重要，反而是檢視、管理等工具會興起呢？

**程式語言之亂**

身為軟體開發者，以往最常看到的問題之一應該是：

- 為什麼不用 __ 開發？
- A vs B 那個語言比較好？

大家好像樂此不疲對於這類程式語言比較的問題，常常帶出許多討論的流量。但最近一直在思考，如果未來 AI 真的接手開發者大部分手動輸入程式的工作，那爭論什麼語言還有很大的意義嗎？想想現在很多語言的區分，不外乎就是 syntax、效能、學習曲線等問題各有優劣，但對 AI 來說多數這類可能都不再是問題，有沒有可能之後 AI 都直接針對底層結構直接處理，我們只需要針對「輸出的結果」來驗證並調校，再也不需要程式語言轉譯這一層了？

**應用程式的定位**

在[前文有提到的](https://chat.sylee.dev/2025/10/25/%E6%9C%80%E8%BF%91%E6%B9%A7%E5%87%BA%E4%B8%8D%E5%B0%91AI%E7%9B%B8%E9%97%9C%E7%9A%84%E6%83%B3%E6%B3%95-70#29dc5b2455ea802a8cf6d375e3475528) Nothing 針對手機軟體有一個大膽也很有趣的嘗試，就是讓 AI 來開發手機的應用程式，最近也越發覺得這個概念一定會在未來的某個時間點成真。

想像目前 iOS、Android 之所以沒有太多競爭者，一個很大的原因是它們背後那龐大的生態圈，想要替代並不是那麼簡單的一件事。但如果今天有人推出了一個「完全透過 AI 來開發應用程式」的平台會發生什麼事呢？今天應用程式之所以會存在，一來並不是所有人都有思考、設計的能力，再者就算有也不是每個人都有辦法將想法實作出來。

但今天有 AI 作為開發主體，每個人都可以天馬行空來設計不同風格專屬於每個人的軟體，像針對 Youtube 這個影片平台來舉例，有沒有可能：

1. 只顯示影片，每部只播放彙整的部分，除非使用者點選，才展開成原本的完整影片。
2. 可以把回覆改為彈幕的形式顯示。

在以往要加入這個功能，要嘛期待官方自己開發、要嘛就是找有支援類似功能的第三方來使用，但假使之後你可以直接描述自己的需求，系統就自動產生出一款專屬於你需求的軟體。如果真能這樣，「軟體開發」這件事會不會又是以完全不一樣形式的存在呢？

---
***實在有太多太多的可能性，隨著 AI 那驚人進化的速度，可以無限展開。它以我們無法想像的速度在進化中，也逐漸改變我們熟知的一切。如今我們或許正處於一個最壞、也是最好的時刻，我們可以無力、沮喪、悲觀看待這一切，也可以試著理解、思考下一步該怎麼走。Never stop thinking***