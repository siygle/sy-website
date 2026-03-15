---
title: "重回、呢喃 - #69"
date: "2025-10-07"
description: "雖然供應鏈攻擊在 npm 生態中已經司空見慣了，不過最近這個連環爆真的是讓人覺得害怕"
tags:
  - Cloudflare
  - Newsletter
  - Security
  - npm
---

# 最近炸到不像話的 npm supply chain attacks

雖然供應鏈攻擊在 npm 生態中已經司空見慣了，不過最近這個連環爆真的是讓人覺得害怕 😅

[Popular Tinycolor npm Package Compromised in Supply Chain At...](https://socket.dev/blog/tinycolor-supply-chain-attack-affects-40-packages)

[Updated and Ongoing Supply Chain Attack Targets CrowdStrike ...](https://socket.dev/blog/ongoing-supply-chain-attack-targets-crowdstrike-npm-packages)

只能說生態的特性（小而多的模組）剛好成為現今駭客容易攻擊的目標。老實說這個不好的狀況大概還會持續下去，畢竟在 Github 收了 npm 之後幾乎等於是 mantance mode 了，但這個鍋現在應該要算在 MS 身上了（唉，實在不容樂觀...）

不過還是要平反一下，最近官方還是針對最近嚴重的攻擊事件發了一篇專文來說明，不意外就是要逐步汰換一些相對不安全的方法，還有前陣子才宣布支援的 [OIDC](https://github.blog/changelog/2025-07-31-npm-trusted-publishing-with-oidc-is-generally-available/) 的發佈方式。

[Our plan for a more secure npm supply chain](https://github.blog/security/supply-chain-security/our-plan-for-a-more-secure-npm-supply-chain/)

除了 npm 之外，其他諸如 yarn、[pnpm](https://pnpm.io/supply-chain-security) 也都有了相對的改善。一開始最近一連串的爆炸的時候，其實有不經意想起了 Deno，依稀記得它們也是以安全作為特點，想說怎麼不趁這個機會好好宣傳一波，終於後來有[看到它們發出來的公告](https://deno.com/blog/deno-protects-npm-exploits)。（每次提到 Deno 都會恨鐵不成鋼的多說幾句，除了還需要加油的效能之外，實在應該好好學習下 bun 的宣傳方式，相較之下真的差太多了...）。

其實我自己覺得這波 npm 的問題其實反而是 Deno 自推的 JSR 崛起的好機會，另外，它們一開始就把一些常見常用的功能集合在自家的 @std 也是個很好的特點，我個人其實也覺得 Node.js 真的應該好好思考維護一個 core standard library 的作法了。

在這波的消息之下，很特別看到 Obsidian 出來說了自己是怎麼避免這個 npm 生態常見的攻擊，還特別寫了一篇文章來說明，值得一讀也很有趣的切入角度：

> 雖然沒有單一措施能完全消除供應鏈風險，但 Obsidian 通過。
>
>
> ***選擇較少依賴項、淺層依賴圖、精確版本鎖定、禁用 postinstall 腳本，以及緩慢且重視審查的升級節奏***
>
> *，大大降低了受到影響的可能性，並為在代碼到達用戶之前檢測問題提供了充足的時間窗口。*
>

[Less is safer: how Obsidian reduces the risk of supply chain attacks](https://obsidian.md/blog/less-is-safer/)

在這波風潮中，真的不能不能提一下 Socket 這間資安服務的公司（它的創辦人也是之前 Node.js 有名的模組作者 - [Feross](https://github.com/feross)），除了鉅細靡遺的說明公告之外，它們也很快推出了一個小工具 - sfw。就是能無痛整合多數的 package manager，在安裝的時候來幫你掃描安裝套件有沒有什麼安全性的問題 ⬇️

![](https://bsky.app/profile/feross.bsky.social/post/3m234hi4pos2o)

此外，他也有接受不少 Podcasts 訪談來說明這些資安的議題，推薦有興趣的開發者可以收聽 👍

![](https://www.youtube.com/watch?v=Fi5d83gi9cM)

希望這波的問題，可能促使 Node.js 的生態圈能反思並朝向一個更健康的方向來發展。🤞

---

# Cloudflare birthday week 又來了...😅

別誤會，這是稱讚的意思

![](https://x.com/CloudflareDev/status/1969826162840080391)

不知不覺又到了 Cloudflare birthday week 的時候（其實我都記不起到底是什麼時候，大概永遠都記不住吧，都是看到公告才知道）- 原來是 [9/27](https://x.com/Cloudflare/status/1971620257610842523) 😅。

雖然有些紛紛擾擾，不過最近最 Cloudflare 這間公司也是好感度越來越高了，一方面是身為網路從業人員，經常會使用到他們的「免費」服務，另外，最近開始追他們的產品發表之類的新聞之後，真的覺得它們的戰力越來越強大了，比起失落的 Google IO 跟本來就沒什麼期待的 WWDC，Cloudflare 的發表會經常會出現眼睛一亮的東西，希望它們能繼續維持下去，然後有機會變成雲端第四大勢力！😎

稍微簡列一下今年看到幾個有趣的東西：

## AI & Payment

AI 議題其實貫串幾乎是整個新發表的功能，不過還是有不同面向的有趣東西，其中有不少是跟金融、支付相關的有趣東西：

[Launching the x402 Foundation with Coinbase, and support for x402 transactions](https://blog.cloudflare.com/x402/)

其一是弄了一個 [**x402.org**](https://www.x402.org/) 的基金會來推廣這個他們跟 Coinbase 合力推廣這個支援網路上金流互動的協定，想當然爾這就是為了 AI Agent 推出的嘛，這樣之後 Agent 協助購物就不是難事了。

它們也弄了一個展示 x402 運作的測試站，想對這個協定如何運作的會可以跳轉

[x402 Playground](https://playground.x402.cloudflare.com/?id=9696e4bb-1fd5-44a0-944b-2093c84d4e58)

雖然我可能也不敢立刻嘗鮮，不過感覺是值得關注的東西，等到這個協定更加的成熟，相信之後整合 AI Agent 的金流流程一定會更加方便（不過會不會錢錢也在不知不覺中流失的更快了😅）

另一個就更酷了，Cloudflare 也打算推出自家的穩定幣 - NET Dollar。前陣子美國通過的天才法案之後，穩定幣這東西突然之間好像闯進了許多人的視窗裡面（沒錯就是像我這種孤陋寡聞的人 😂)，解釋這東西就不在這邊贅述了，前陣子剛好聽到 [IEO 介紹了穩定幣](https://open.spotify.com/episode/6kgOTVLDrIhSWPhCuwiN3P?si=cvWZZ1haRYGW5NWTwo_SLg)，解釋的非常清楚。

[NET Dollar™ — Cloudflare](https://netdollar.cloudflare.com/)

通過上述這兩項，如果 Cloudflare 真的能搶進接下來一定會崛起的 AI Agent 跨進電子商務、購買所帶來的自動化財務行為，感覺大有可為阿～

## 開源贊助者

雖然這些跟技術沒什麼直接的關係，不過 cf 也宣佈了幾個讓我很雀躍的消息：

[Supporting the future of the open web: Cloudflare is sponsoring Ladybird and Omarchy](https://blog.cloudflare.com/supporting-the-future-of-the-open-web/)

[Why Cloudflare, Netlify, and Webflow are collaborating to support Open Source tools like Astro and TanStack](https://blog.cloudflare.com/cloudflare-astro-tanstack/)

雖然可能知道劍指一些 JS framework 的用意，不過對這些開源專案有實際的財務贊助，比起說一堆白話還是有用許多。除了前端框架之外，還有 dhh 最近力推的友善的 Linux 桌面使用環境 - [Omarchy](https://omarchy.org/)，以及 [Ladybird](https://ladybird.org/) 這個重開發的新瀏覽器專案。

贊助開源專案就是 👍

## 內容提供者 vs AI

這塊感覺也是目前 Cloudflare 發力的其中一點（延續[之前跟 Perplexity 的 drama](https://www.ithome.com.tw/news/170412)，應該內容商跟 AI 模型商還有的戰），它們也繼續針對這個方向，提供了更多的工具。

譬如下面這篇提到的 [Project Galileo](https://www.cloudflare.com/zh-tw/galileo/)，增加了針對 AI 爬蟲的控制權，讓內容提供者可以自由控制「他的內容是否要提供給特定的 AI 爬蟲」。

[Helping protect journalists and local news from AI crawlers with Project Galileo](https://blog.cloudflare.com/ai-crawl-control-for-project-galileo/)

另外還有更進一步的 AI Index。提供所有的內容生產者 AI 所需的資料格式（譬如 MCP、llms.txt、API 等），並給作者有管理的權力（就類似上述的 Project Galileo，這應該都是屬於它們推出的 [AI Crawl Control](https://www.cloudflare.com/zh-tw/ai-crawl-control/) 的功能。除了消極的防護之外，甚至也可以接上 x402 這類的功能，達到按抓取量收費的功效。

[An AI Index for all our customers](https://blog.cloudflare.com/an-ai-index-for-all-our-customers/)

想必這場內容 vs AI 的戰爭才剛開始而已，我自己是希望有機會走向雙贏的局面Cloudflare 在今年推出的許多功能，都感覺希望能重塑雙方的互動，不過不知道有沒有機會吸引雙方有更多服務商願意跳下來試試看？

## 開發者工具持續升級

這部分就相對沒什麼特別的了，畢竟每年都有很多圍繞 cf 的雲端開發平台的新功能與更新（大家胃口都被養大了😅）。

[Cloudflare's developer platform keeps getting better, faster, and more powerful. Here's everything that's new.](https://blog.cloudflare.com/cloudflare-developer-platform-keeps-getting-better-faster-and-more-powerful/)

下面這篇則提到它們針對核心路由的重寫，看起來它們也確是 all-in Rust 了，越來越多核心組件都用 Rust 來改寫了。當然它們並不是為改而改，而是實在地利用了 Rust 的特性為它們的開發流程帶來更多好處，而且它們有一個嚴謹的測試流程以及系統分析的資料，可以讓它們確認改寫後的相容以及效能。

[Cloudflare just got faster and more secure, powered by Rust](https://blog.cloudflare.com/20-percent-internet-upgrade/)

- 直接用 JS/TS 定義、呼叫，免 schema，輕量又型別安全
- 支援 promise pipelining，多步驟一次完成，極低延遲
- Magic array.map，複雜查詢可「一次丟給 server」處理

[Cap'n Web: A new RPC system for browsers and web servers](https://blog.cloudflare.com/capnweb-javascript-rpc-library/)

在 AI Agent 上它們也提出一個新的開發方式，特別針對目前 MCP 的使用，經常出現不是那麼有效率的現象，而是把 MCP 的功能轉換成 TypeScript API 這種 AI 更加熟悉的方式，這就是下篇文章提及的 Code Mode。

[Code Mode: the better way to use MCP](https://blog.cloudflare.com/code-mode/)

### 結尾

每年都丟這麼多東西出來，越來越追不完 Cloudflare birthday week 的所有內容了，期待 cf 能提供越來越多有趣也實用的好工具。😎

---

# 網路好東西

## First-In-Never-Output 的 Github Stars 終於多了些功用了 😅

![](https://x.com/honglong0420/status/1969602181050565000)

一看到大大分享這個專案就立刻裝起來試玩了，原本加到 Stars 之後就再也找不到自己曾經看過的某專案，現在終於可以透過這個第三方來更有效的管理啦～（Github 遲遲不改善這個功能，真的是沒有資訊焦慮的一群人，哼！）

## [財富自由的開源人就是這麼樸實無華](https://x.com/mitchellh/status/1964785527741427940) 😂

好羨慕這種已經財富自由，可以自由自在做自己有興趣東西的人生阿 🥹

[](https://bdefzwcumgzjwllsnaej.supabase.co/storage/v1/object/public/minilink-user-assets/0199bb21-624c-733a-b6eb-069dbf61dd25)

## [馬老闆就是任性](https://x.com/elonmusk/status/1974698202625679361) 😂

其實一開始微左的我對馬老闆買下 Twitter 之後一連串行為也是很不諒解，不過後來想法轉變之後也比較能用「無所謂」到心情去看待某些事，排除一些過激的行為之外，其實 Elon 為了某些理念真的跳出來做一些事也是蠻酷的。

[](https://bdefzwcumgzjwllsnaej.supabase.co/storage/v1/object/public/minilink-user-assets/0199bb25-037a-733a-b6ee-0c0369bbbd4a)
