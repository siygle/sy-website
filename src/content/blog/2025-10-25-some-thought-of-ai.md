---
title: '最近湧出不少 AI 相關的想法'
date: '2024-10-25'
tags: ['chat', 'ai']
draft: false
summary: '天馬行空亂想最棒了 😁'
authors: ['sy']
---

在進入 AI 顯學的時代之後，每天在網路上都可以看到很多新出現的服務、模型，以及更多的 BREAKING、HUGE 等字眼，搞得不少人對 AI 越來越反感（包括我），只能說 buzzword 每次出現都會帶來一波這種風潮，直到下一個新議題出現。不過比起一些小變動、小更新就要大張旗鼓的宣傳，自己更想預測看看未來可能的走向，感覺更有意思一點 😁。

當然，這只是我個人的 murmur，不過如果有興趣一起來狂想的網路人，或許也可以一起來腦力激盪一下。

# 內容為主 vs 門戶為王

最近看到不少人針對這個議題回覆與評論：就是[這篇網上關於 AI 跟 Google 爬蟲的推文](https://x.com/NicooSvane/status/1974090092789588075)，稍微看了下內容也覺得很有意思，簡單說就是：

1. Google悄悄移除「num=100」搜尋參數的重大變化。該參數原本允許一次顯示100個搜尋結果，但現在最大值降至10個。
2. 這一改變影響了依賴Google索引結果的 LLM（如 OpenAI 和 Perplexity ），特別是對 Reddit 等平台的影響顯著。貼文提到，88%的網站露出數量下降。
3. Reddit 因其內容常出現在第 11-100 位而受到致命打擊，導致其股票在過去5天下跌約15%

![reddit stock](https://material.sylee.dev/obsidian/2026/01/reddit-stock.png)


本文的作者後面是針對「行銷」作為重點來論述，一個好的產品如果不能搭配一個好的行銷手法，也是只能默默無名躺在那邊，沒有人會用它。

不過老實說，我自己倒覺得這是個很有趣的思考方向，看起來好像內容商的命脈被搜尋引擎這類控制門戶的服務所掌握，不過好的內容也是促進搜尋引擎為使用者所信任的原因。如果 AI 持續發展下去，如果 AI 不需要透過搜尋引擎去找到合適的網路資源，而是有其他的直接跟內容提供者互動的方法（嘿嘿，有沒有想起了 Cloudflare 最近剛提出的 [AI Index](https://blog.cloudflare.com/an-ai-index-for-all-our-customers/) 😁），會不會網路生態又會變成跟現今完全不同的方式呢？

不過另一個角度，但這麼多廠商因為 Google 一個小小的調整就受到這麼大的影響，然後就看到 Brave 的創辦人出來回了下面這個推文，也是很值得玩味 😁

![](https://x.com/BrendanEich/status/1974353390038909004)

原來白嫖黨這麼多阿，我一直以為主力產品是搜尋相關的，起碼自己也應該會做類似的爬蟲跟檔案庫，而不是單純依賴別人提供的內容，核心資料握在別人的手裡，不覺得害怕嗎 😅。

# 當 Agent 成為核心

最近 AI 發展之快速，越來越多行業跟生態都已經開始發生變化，當然軟體工程師很慘也不是新聞了，不過軟體本身也可能會出現跟現在完全不同的使用方式。

Nothing 最近推出的 Essential 是個很有趣的嘗試（有興趣可以跳轉下方影片）

![](https://www.youtube.com/watch?v=uZRK60JNA54)

其實我剛開始試用 [comet](https://www.perplexity.ai/comet) 的時候無意間有嘗試過類似的概念—「透過 AI 做出我想達到的目的」，如果用大家較熟悉的 Chrome 來舉例，就是根據我的需求（Prompt）產生出 extension。但是目前 comet 還沒這麼威 😅。

ps: 截稿前 OpenAI 也推出了[自己的 AI browser](https://openai.com/index/introducing-chatgpt-atlas/)，結果還是不能做這件事，唉 😅

[Essential Apps - Nothing Playground](https://playground.nothing.tech/apps)

結果沒想到過沒幾天就看到 Nothing 推出的 [Essential](https://playground.nothing.tech/) 這個有趣的嘗試。簡單說，它就是透過 AI，根據用戶的描述產生出對應的 app。雖然目前看起來它能做的還相當有限，只能產生出相對簡單的應用程式。

[Vega | Amazon Appstore Developer Portal](https://developer.amazon.com/apps-and-games/vega)

然後又看到另一個有趣的新聞，就是 Amazon 自主開發了用在自家硬體的新 OS - [VegaOS](https://developer.amazon.com/apps-and-games/vega)，不同於目前許多智慧家電，它不再依賴 Android 而是基於 Linux 重頭建起，雖然目前只是用在 Smart TV 還不知道有沒有機會擴展到其他的硬體上。不過更特別的是，它是用 React Native 作為主力的開發語言（哈，我不是要推廣這個）。

這兩件看起來八竿子打不著的新聞，卻讓我想起 AI 可能帶來對軟體發展的巨大影響。原本建立一個新的作業系統可能對許多技術巨頭並不是什麼難事，但是建立起它的生態圈才是真正的難事，但現在會不會在 AI 崛起之後帶來全新的可能。

<aside> 💡

_當 AI 把生態圈這件事變成極端簡單之後，原來的「先行者優勢」會不會不復存在了呢？假設今天在 iOS、Android 之外又出現了一個全新的 OS，而且透過 AI 用戶可以針對自己的需要、產生出自製的 app，不再需要應用程式的開發者來撰寫，這樣能不能極大降低進入門檻呢？_

</aside>

雖然有點天馬行空，不過 Nothing 已經嘗試給大家看了，再加上演化速度驚人的 AI ，一些簡單基礎的 app 在不久的將來好像也不是不可能了。果真如此的話，說不定整個軟體生態又會截然不同了。

<aside> 💡

_如果上述的場景成真的話，中間層的應用程式可能再也不重要了，創造的權力跟發想都轉移到使用者身上。軟體會更專注底層的部分，如系統層級的 API、網路服務的 API 等，這些定義了對象服務可以提供哪些功能，其他就是 AI 來幫使用者堆積木了。_

</aside>

可以期待看看有沒有機會走到這一步 #立flag _**😁**_
