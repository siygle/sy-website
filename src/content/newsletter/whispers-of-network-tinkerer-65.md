---
title: "網路黑手的呢喃 - #65"
date: "2025-04-27"
description: "主題：開源的傳承 & Node.js 改善發佈的架構、Cloudflare Developer Week、Google 推出 A2A，劍指 MCP？、最近 OpenAI 動作頻頻"
tags:
  - AI
  - Cloudflare
  - Newsletter
  - Node.js
  - OSS
---
## 開源的傳承 & Node.js 改善發佈的架構

看到這個很有意思的傳承，James 相信 Node.js 開發者應該都不陌生了，他深耕 Node.js 開發已久，也經常可以看到他在各個 Node.js 研討會出現，身為核心開發者之一的他，有許多 Node.js 的功能都是出自他手。

Like father like son，想當然爾他的小孩也走上了開源貢獻者的路，而且最近還看到他分享了如何優化 Node.js 發佈流程基礎架構的分享，真的超酷的啦！

![](https://bsky.app/profile/jasnell.me/post/3lm4lu5osnk2k)

除了開源傳承的部分之外，在架構改善的部分，主要是從 Self-hosting 改成依賴 Cloudflare 架構，主要的專案也一併開源出來了 🔽，本篇就是提及它們如何進行轉移的工作。

[https://github.com/nodejs/release-cloudflare-worker](https://github.com/nodejs/release-cloudflare-worker)

<aside>

💡

看到能夠出現跨代傳承的開源開發者，真的很感動（雖然自己應該是非常困難），不過還是很期待有更多人能投入到開源專案的工作中。

看到改用 Cloudflare 雖不意外（它們本身就已經養了好幾位 Node.js 的核心開發者），不過還是有點擔心這種重度依賴特定廠商的作法，到底是好還是不好。 🤔

</aside>

## Cloudflare Developer Week

![](https://bsky.app/profile/cloudflare.social/post/3lmrp455vxs2u)

每年 Cloudflare 都會舉辦一個 Developer Week 的活動，當然就是自家新產品的火力展示，因為自身業務的關心，過去幾年幾乎都是雲端平台的各種新功能，不過在 AI 崛起之後，Cloudflare 也是很聚焦在這塊市場的開拓。快速列幾個自己比較感興趣的東西，不過如果想知道完整到底 Cloudflare 推出了哪些東西，可以跳轉上方的連結。

### All-in-AI！

不囉嗦應該是直接先把 npm 上面的 `agents` 套件名稱[拿到手](https://www.npmjs.com/package/agents?activeTab=versions)之後，就是重磅相關功能連發，現在大家都在 AI，當然 Cloudflare 也不會錯過，不過並不是模型開發的它（之後會不會倒是不好說，畢竟很多服務商走著走著就開始提供自己特規模型的也是不少 😅）。

[Cloudflare Agents](https://agents.cloudflare.com/)

最近 MCP 崛起也是很快就補上[對應的功能](https://developers.cloudflare.com/agents/guides/remote-mcp-server/?_gl=1*1qquwo*_gcl_au*ODI4MDIxNTQ2LjE3NDEwMjgwOTc.*_ga*MTcwNDI3OTU3Ni4xNzQxMDI4MDk3*_ga_SQCRB0TXZW*MTc0NTcyMTYxMi4xMi4xLjE3NDU3MjE2MTguNTQuMC4w)，現在用它們的平台搭建自己的 MCP 應該是非常方便的方案，這次也是補齊了其他的拼圖，譬如 [RAG](https://blog.cloudflare.com/introducing-autorag-on-cloudflare)、還有可以定義與執行更複雜流程的 [Workflows](https://blog.cloudflare.com/workflows-ga-production-ready-durable-execution/)（這很有 n8n 跟 Slack Workflow 的既視感 😅）。

應該不難想像短時間應該還是可以看到 Cloudflare 用力耕耘 AI 市場的～

### All about Cloud

除了 AI 之外，Cloudflare 也沒忘記它們的雲端服務的本業，這次也是推出了不少看齊御三家的功能，譬如終於等到的 [Secret](https://blog.cloudflare.com/secrets-store-beta/) 儲存服務、[VPC](https://blog.cloudflare.com/workers-virtual-private-cloud/)，以及[持續擴大對前端各框架的支援](https://blog.cloudflare.com/full-stack-development-on-cloudflare-workers/)。

![](https://x.com/yusukebe/status/1909602290358796580)

另外最讓人期待的莫過於終於支援的 [Container](https://blog.cloudflare.com/cloudflare-containers-coming-2025/) 啦！（不過老實說跟我原本想像類似 ECS 的用法不太一樣，看起來它們好像都是深度綁定 Workers 來使用的，前面的各種新功能都可以看到類似的用法 🤔）。

<aside>

💡

雖然自己沒有大量使用 Cloudflare 的服務，頂多跑跑一些小工具跟 side project，不過一直對這家有好感，還有它神秘（？）的經營策略，經常能讓開發者用相對低廉的價格來使用。不過還是期待它能快速補上 Cloud vendor 的方方面面之外，系統本身的穩定好像也經常被拿出來消遣 [[1](https://x.com/rxliuli/status/1907748835348328733)][[2](https://x.com/tualatrix/status/1903377710048842094)]。

要走的路也是還很長 😅

</aside>

## Google 推出 A2A，劍指 MCP？

可能是最近都是滿滿的 MCP 新聞，G 社也不甘寂寞推出了自己的協定 A2A ⬇️

[Google for Developers Blog - News about Web, Mobile, AI and Cloud](https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/)

原本以為它是劍指 MCP 而來，不過後來看到有說明跟 MCP 的定位不太一樣，A2A 是為了 Agent 之間的互動而定義的協定（如下）

![](https://x.com/omarsar0/status/1909980581510754431)

不過嘛，後來又看到有大大出來說了幾句，看來我還是太嫩了 😅。是說都能處理 Agent 的互動這種更複雜的行為，偏向單向拉資料的 MCP 又怎麼會沒辦法處理呢。

![](https://x.com/solomonstre/status/1909971067113742732)

<aside>

💡

BTW，雖然 G 社在基礎協定這塊看起來還是比起 AI 公司的 Anthropic 更老練一些，當然後發者優勢也讓他可以把協定考慮地更周詳之後再推出來。不過對 G 社本身就不太有信心啊，而且其實直接對 MCP 去提改善的提案不就好了 🤔

雖然自己是覺得 A2A 可能起不來，不過還是觀望看看吧，畢竟 Gemini 2.5 最近風評不錯，不知道是不是 G 社有中興的現象ww #沒有期待

</aside>

## 最近 OpenAI 動作頻頻

[Introducing GPT-4.1 in the API](https://openai.com/index/gpt-4-1/)

除了最近丟出來的幾個新模型之外，最近反而是其他一些周邊新聞吸引了我的注意。

### 開發自己的社群網路服務？

據稱 OpenAI 內部正在開發一個類似 X 的社交平台，個人對這個新聞最感興趣。雖然不知道會不會只是評估或實驗性質，不過如果真的推出，我想應該有機會能吸引很多人去試玩吧 😆

雖然不意外裡面的內容高機率就是成為 OpenAI 訓練模型的養分，不過反正我都只發垃圾話。不過如果真的考慮要作社交平台，不知道 OpenAI 會不會考慮直接用開放平台像 BlueSky 的 AT Protocol 或是 Mastodon 的 ActivityPub，萬分期待！ 🤩

[OpenAI is building a social network](https://www.theverge.com/openai/648130/openai-social-network-x-competitor)

### 自己做編輯器？

另外這個就覺得很無厘頭了，OpenAI 有可能要收購目前知名的 AI Editor 的其一：[Windsurf](https://windsurf.com/editor)。

雖然程式開發者算是使用 AI 服務最積極的一群，不過也是最不忠心的一群，Editor 就經常切來切去試用，更別提 AI 模型根本每個月都在替換，這種強綁定難想像這種收購會替 OpenAI 帶來多少益處 🤔（除非它們的收購另有目的）。

[Why OpenAI wanted to buy Cursor but opted for the fast-growing Windsurf](https://techcrunch.com/2025/04/22/why-openai-wanted-to-buy-cursor-but-opted-for-the-fast-growing-windsurf/)

### 收購 Chrome？

這個就又更誇張了，因為 [G 社目前面臨反壟斷裁判](https://www.theverge.com/23869483/us-v-google-search-antitrust-case-updates)，有可能要面臨拆分旗下業務的結果，其中引起許多討論的就是 Chrome，當然直接可以拿到市占近七成的瀏覽器市場，一定會吸引眾多買家的（連 Yahoo 都出現了，真的是有點好笑，拜託你先顧好自己的本業好嗎？）

這個 OpenAI 表達有收購意願不讓人意外，不過這不太可能發生，所以大家說說笑笑就好。

[](https://www.reuters.com/sustainability/boards-policy-regulation/google-contemplated-exclusive-gemini-ai-deals-with-android-makers-2025-04-22/?taid=68081297d33d7100019ef53b&utm_campaign=trueAnthem:+Trending+Content&utm_medium=trueAnthem&utm_source=twitter)

<aside>

💡

看起來 OpenAI 除了 AI 模型之外也是積極再嘗試其他的應用層面的可能性，雖然目前都只是傳聞的階段，不過裡面有幾項能成真的話，這個世界應該會變得更有趣一些。 🤣

</aside>

## AI 真的是彙整的王者！

說真的除了寫程式之外，個人最常使用 AI 的功能就是拿它來快速彙整了，特別是文章或新聞（下面兩個就是我最常用的工具），快速上手的功能真的越來越離不開 AI 的原因了。

[Elmo Chat - Your AI Web Copilot - Chrome Web Store](https://chromewebstore.google.com/detail/elmo-chat-your-ai-web-cop/ipnlcfhfdicbfbchfoihipknbaeenenm)

[BrainyAI - Browser AI Sidekick for Chat, Search, Read and Summarize - Chrome Web Store](https://chromewebstore.google.com/detail/brainyai-browser-ai-sidek/jmcllpdchgacpnpgechgncndkfdogdah)

不過現在除了文章之外，連程式碼都出現類似的功能了，就是 [Devin.AI](http://Devin.AI) 最近推出的 DeepWiki 這個服務，能夠幫你快速整理好程式專案的內容、文件、甚至來架構圖都產生給你，此外也可以透過對話更深入去針對內容提問。

![](https://x.com/cognition_labs/status/1915816544480989288)

使用方法就是把原本 [`github.com`](http://github.com) 換成 [`deepwiki.com`](http://deepwiki.com) 就可以了，譬如用 deno 當成範例 🔽

```
[https://deepwiki.com/denoland/deno](https://deepwiki.com/denoland/deno)
```

<aside>

💡

如果之後這個服務能持續改善的話，之後讀原始碼真的越來越方便了。 😍

雖然目前 AI 的出現讓很多人都很擔心，特別是把自己革命掉的程式開發者，不過 AI 的出現也真的是帶來很多更強大的工具，或許我們都在下一個典範轉移的路口了，不跟上不行阿 😅

</aside>

## **網路是個好東西**

### [超多好東西](https://index.html.zone/) 😄

#不解釋

真的感謝網路上諸位大大，創造了這麼多方便的工具！

![](https://x.com/miantiao_me/status/1915382825840263175)

### 最近好愛看 Maker 的作品 😍

這種手作的影片真的是我的最愛，看著看著總會有股紓壓感，好期待有天也可以加入 maker 的行列。

![](https://www.youtube.com/watch?v=Z2ucOgtgJas)

![](https://www.youtube.com/watch?v=L5PvQj1vfC4)

這個是用 E-Ink 加上 RPi 就可以簡單實作的桌上數位相框（當然它不只能當相框而已啦 😄），然後作者也連完整的控制應用程式都開源出來給大家可以輕鬆架設了，超棒！

[https://github.com/fatihak/InkyPi](https://github.com/fatihak/InkyPi)

### 星期三又來啦！

真的當初不懂事，不知道星期三的好，直到不經意追了一集就停不下來直接追完第一季。現在，終於等到第二季重磅回歸啦！ 💐

![](https://www.youtube.com/watch?v=uQx8jKiIDTI)

這次還特別拆成兩段上線（有推友[提及](https://x.com/wtcdm/status/1915039409000579396)最近 Netflix 好像經常這樣搞）。

![](https://x.com/WednesdaysDaily/status/1915029988023079157)