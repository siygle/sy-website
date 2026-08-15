---
title: "網路黑手的呢喃 - #63"
date: "2025-03-24"
description: "主題：截稿前 Next.js 出大包、ByteDance 丟出自家的 react-native 競品、AI 崛起的另類創意、TypeScript 移植到 Golang，然後就炎上了 😅"
tags:
  - AI
  - Game
  - Javascript
  - Mobile
  - Newsletter
  - OSS
  - Security
  - Vercel
---
---

## 截稿前 Next.js 出大包

*流量密碼必須掌握* 🤣

推上看到有人貼出 Next.js 的重大安全性議題，只要 `x-middleware-subrequest` 這個 header 設為 false 就可以跳過後續的中間層的行為，導致後續的驗證行為等同無效。關於這個事件也有許多大大整理的[詳細的時間軸](https://bsky.app/profile/eduardoboucas.com/post/3lky5uuo5os2o)、[問題核心的程式碼](https://simonwillison.net/2025/Mar/23/nextjs-and-the-corrupt-middleware/)，以及[詳細的整理資料](https://projectdiscovery.io/blog/nextjs-middleware-authorization-bypass)可以參考。

[Authorization Bypass in Next.js Middleware](https://github.com/advisories/GHSA-f82v-jwr5-mffw)

也有其他開發者做了一些補充，譬如[只有完全依賴 middleware 來驗證](https://x.com/steventey/status/1903618143060386084)這種行為，才會被影響，此外 Vercel 官方也[說明](https://nextjs.org/blog/cve-2025-29927)代管的服務不會有這個問題，只有 self-hosted 的服務才會受到這個安全性問題的影響。被標上 Critical 當然就代表是非常嚴重的問題，畢竟這漏洞無疑代表所有驗證的行為都失效，可能造成後續私密資料外洩，不過除了不少開發者提到這個誇張的漏洞之外，沒想到還會出現許多意想之外的 drama 😅

首先是 Cloudflare 跟 Vercel 就「安全」這個議題就戰起來了 😅（直接看到兩個 CEO 在推上互酸）

這篇一定要來個截圖，怕之後高機率被刪 😅
![](https://x.com/rauchg/status/1903590962498326771)

然後換不甘寂寞的 Replit 接力上陣，開始砲 Next.js 長期以來給其他使用者帶來的痛苦，說了他們更願意採用（前陣子提過的）OpenNext 這類的開放替代。結果 Vercel CTO 回擊說你們擺明就是爽爽用。

![](https://x.com/amasad/status/1903640376629657832)

接著就是開發者們的互相表態忠誠度的時間啦～ 😆另外也開啟了 Next.js 許多針對自家平台的特性，以及針對侵蝕 React 開發者取得話語權的問題之類。

![](https://x.com/yacineMTB/status/1903558965012668778)

![](https://x.com/suwakopro/status/1903651660238627161)

![](https://x.com/deathlas3r/status/1903883363217535188)

<aside>

💡

不知道會不會延燒下去，不過看到不少開發者跳出來應該也是受了 Vercel 很多苦頭，雖然真的 Next.js + Vercel 是前端開發大利器，但是帶來的問題也是不少。

只能說開源真的是很多「眉角」，開源專案需要像 Vercel 這種營利公司背後撐跟贊助，但是企業入隊自然也會把專案捏成符合自家利益的形狀。不然為什麼 Meta 自己要放掉 React，跟他們之前棄守 web 不是也有關係嗎？

還是希望能走到像 open government 這種比較穩定的組織，然後透過各大廠贊助與共同的技術委員會來方式，看起來是比較成熟跟穩定的作法（不過也是有壞處，就是人多口雜，進化的速度又太慢了 😅）

</aside>

## ByteDance 丟出自家的 react-native 競品

前幾天就看到一些相關開發者已經[開始在鋪埂](https://x.com/zoolsher/status/1896906768942616681)，果然後來丟出這個酷酷的東西。

![](https://bsky.app/profile/sylee.dev/post/3ljm2aad6qq2x)

這個名為 Lynx 的專案，就是字節自家的 react-native 方案，一樣是針對跨平台的開發框架，不過雖然目的類似，不過實作跟架構都有相當的不同，然後根據他們自家人的說法，目前 ByteDance 旗下許多的 native app 都是透過 Lynx 開發的，這個火力展示就相當猛了。😃

```bash
Today, Lynx powers an extremely wide spectrum of surfaces—from the lightweight, high-frequency **Search** panel to full-fledged [**TikTok Studio**](https://support.tiktok.com/en/using-tiktok/creating-videos/tiktok-studio) app; from complex e-commerce storefronts like **Shop** that demand reliability and trust, to highly engaging experiences like **LIVE**, as well as powering high-profile events and cultural moments such as [**Disney100 on TikTok**](https://newsroom.tiktok.com/en-us/disney-100) and [**The Met Gala on TikTok**](https://newsroom.tiktok.com/en-us/tiktok-goes-to-the-met-gala).
```

對細節有興趣的話，可以直接去啃他們釋出的[專案內容跟規格書](https://lynxjs.org/guide/spec.html)，裡面有很詳細的資料。特別看到一個有趣的是他們採用了 multithreaded engine 的架構來處理不同的需求（所以如上文提到，他們自己還實作了另一個 js runtime - [primjs](https://github.com/lynx-family/primjs)（從 QuickJS 分支出來）。

雖然也是有看到一些[對架構上的疑慮](https://x.com/hirbod_dev/status/1897252043846463867)，不過感覺是個已經經過市場驗證的新框架，如果 ByteDance 真的持續開發、維護下去，說不定後續值得期待。👀

*[*不過後來看到一個更勁爆的回覆*](https://x.com/unixzii/status/1897458294568182037) 😅

## AI 崛起的另類創意

伴隨著 AI 崛起，目前除了五花八門的應用之外，Edge AI 這塊好像也漸漸成為各家廠商必爭之地，譬如像剛結束的 GTX，Nvidia 端出的 Spark & Station，考慮到後續 AI 應該會走向多模型混合的使用方式，這類的產品應該會相繼出爐才對。

![](https://www.youtube.com/watch?v=6p4U1kSiegg)

不過雖然是已經面向一般工作室或小型企業，$3,000 美元的售價有時候也不是每個企業主都能夠接受的價位，所以也會出現更多實惠或是自己動手的方案。譬如下面這個自己設計的四顯卡（他有開源出來有興趣的也可以自己弄一套出來），甚至是原本做模組化筆電的 Framework 都推出了桌上型的工具機。

![](https://x.com/karminski3/status/1896718986294800807)

![](https://www.youtube.com/watch?v=zI6ZQls54Ms)

<aside>

💡

不知道 Edge AI 到底要走多久才能真的普及，不過說不定真的會走向家家戶戶之後都會多一個 AI Hub 的存在，自己下載對應的模型然後對應不同的使用場景。 😆

</aside>

## TypeScript 移植到 Golang，然後就炎上了 😅

![](https://www.youtube.com/watch?v=pNlq-EVld70)

記得那天真的是第一時間看到這個影片被丟出來，本來以為是要推出什麼酷酷的新功能來達到增速，沒想到居然原本是自舉的 Typescript 編譯器 tsc 宣布移植到 Golang 了，因為太過震驚所以當下發了這篇廢文。🤣

![](https://bsky.app/profile/sylee.dev/post/3lk4dsrtvac2r)

不過後來的走向變成「為什麼不用 rust」vs「rust 都是一群自嗨的傢伙」這個方向，甚至還有上升到如下這類開始互相攻擊的言論，覺得真的是夠了…。

![](https://x.com/VicVijayakumar/status/1899634343791698397)

其實後續有許多說明，大大自己也在訪談中提到，其實重點是因為 RePorting 而不是重寫，所以為了維護兩個語言的工作，採用最貼近的語言（但又可以改善效能問題），綜合這些因為答案就呼之欲出了～（這篇 Github 上面的回覆應該是非常清楚，有興趣可以前去拜讀一下）。

[Why Go? · microsoft typescript-go · Discussion #411](https://github.com/microsoft/typescript-go/discussions/411)

另外也看到一位之前 npm 後來跳去 MS 寫 rust 的大大也出來稍微講了這件事，有來詢問以及綜合目標的確是 Golang 為目前最好的選擇。

![](https://bsky.app/profile/zkat.tech/post/3lk4u6lgcqs2z)

老實說這種神仙打架輪不到我這種 nobody 來品頭論足什麼，只要工具好用、跑起來更友善、更爽，誰還在乎到底是用什麼寫的，當基本教義派最無聊了（當然身為 rust 粉還是期盼有一條支線是真的打算用 Rust 重寫過，還是期待 [voidzero](https://voidzero.dev/) 有沒有機會 🤣

<aside>

💡

不過老實說，最近一直覺得如果 AI 跟 Wsam 真的能持續發展的話，要嘛是寫什麼大大多是AI 直接幫你處理了，要嘛是之後無論你用什麼語言最後都會編譯成 WASM 來跑，這樣的世界不知道有沒有機會來到。🤔

</aside>

## 最近是不是該開始試試 bun 了 😅

也是一個無意間看到這篇講述到 Bun 的自幹策略，跟自己一直的感覺蠻契合的，看起來應該是坐實了幾分自己的猜測。對 Bun 有興趣的開發者也可以看看，其實如果有關注應該知道他們推了許多只有自家有的 API，而且他們也沒打算要考慮相容的問題（除了 Node.js/npm 生態，畢竟他們的目標是  drop-in replacement）。

我自己最近的確是也想來試試看 Bun 的成熟度，效率的部分看起來倒是不需要太擔心，畢竟常常看到作者 benchmark 連發，他們應該是非常看重這部分。

![](https://bsky.app/profile/sylee.dev/post/3lk65kilath2n)

<aside>

💡

而且最近看到下面這些推又更心動了 😅（沒錯我就是一個牆頭草）

老實說自己一開始對 Bun 這個專案沒什麼好感，一來是初期的血汗爭議，另一方面就是本題的不太跟其他開放組織合作的態勢。不過後來年紀漸漸大，自己的心境也不太一樣了，有時候太理想反而做不了什麼事（嗯，我就是在說隔壁棚的幾位）。

說到底，雖然（各 JS runtime）相容這件事很理想也很棒，但是又有多少開發者真的關心這件事呢？多數的開發者可能只在乎易用性、效能，就算是平台專有的 API 又怎樣，會有多少專案真的會走到切換 tech stack 這條路（而且還僅限於 js runtime 的切換），殊不見多少還停在 10.x 以前版本的 Node.js 還不是跑爽爽。😅

</aside>

![](https://x.com/aidenybai/status/1902777155085537481)

<aside>

💡

另外，下面這推想特別拿出來說一下，延續上面提到的 Typescript rePort to Golang 的議題，Bun 的作者也出來寫了一些東西，不過不是在那邊吵要用什麼語言，而是提到 JS 的軟肋，就是沒有 Threads 才會導致這個決定性的差異，然後提到他其實對這個很有興趣。🤣

雖然 Bun 血汗，但是不能不佩服他們的戰力真的很強，而且眼光很精準。雖然我是 Deno 腦粉，但是最近也是覺得他們太形而上了，看看了新功能也不會有什麼驚喜的心情出現…

</aside>

![](https://x.com/jarredsumner/status/1899773563961577494)

## 這是什麼酷酷的東西 👀

雖然現在看到 AI 的應用已經開始產生反感 😅，不過因為是 Rust 議題追蹤已久的大大，加上看到關鍵字「和 Claude 合作」，所以還是點開來看了一下這個酷酷的東西到底是什麼。

根據作者的描述，他已經算是另一種語言了，應該說更貼近 DSL，自己看了範例稍微玩一下的感覺，有點「整合 AI 開發、目標是網路服務的腳本語言工具 」的形狀。

所以看起來目前有幾個特性：

1. 類腳本語言，所以不像爸媽 rust 一樣這麼麻煩，寫起來更像 JS/TS 的感覺，但[該有的也是都有](https://aiscript.dev/guide/language/basic)：型別、條件式判斷、[借鏡爸媽的好物](https://aiscript.dev/guide/language/enum-match)、模組，甚至還有[標準函式庫](https://aiscript.dev/std/overview)。
2. 目標開發網路服務：目前看範例一個簡單的後端應該沒問題了，該有的[路由](https://aiscript.dev/guide/web/route)、檢查、資料庫、驗證等功能都支援了。
3. 整合 AI 開發：這應該是它的特點之一了，可以直接在程式碼呼叫 AI Prompt、對應的錯誤處理、可以包裝成函式便於重用，以及甚至還支援到 [Agent](https://aiscript.dev/guide/ai/agent) 的功能。

![](https://x.com/_hisriver/status/1898948789249229082)

<aside>

💡

雖然目前專案才剛開跑，能提供的支援也還非常陽春，不過期待後續，我自己式很期待這個專案有機會變成簡化版的 Rust + AI 開發工具這個路線，說不定會長成很有趣的開發工具。 🤩

</aside>

## **網路是個好東西**

### 好想玩但是沒辦法

不解釋，因為到現在前作都還躺在收藏庫裡面 😭

![](https://bsky.app/profile/sylee.dev/post/3ljkwt7pz4k2x)

### 直接打臉 **LeetCode**

看到這件事只有覺得爽（不過我是酸葡萄啦，因為我絕對是考不過的 😅），但這種只為面試的畸形產物，消失可能比較好一點。

![](https://x.com/leafwind/status/1896710670579835241)

### 邦妮子每週都要更好一點 😆

![](https://x.com/shrimpbb88/status/1897263055354126768)

![](https://x.com/siygle/status/1899848562126750022)

### 也未免太有心了 😂

用 board game 收服不洗碗的室友，太強！

[https://www.instagram.com/reel/DGgHCsPuI7I/](https://www.instagram.com/reel/DGgHCsPuI7I/)

### 天海女王就是這麼帥

是說演藝界手腳不乾淨的人真的超級多，隨時隨地都在亂來 😡

![](https://x.com/ShadowC1001/status/1902584418797265255)

### 真的是猛，具象化的馬利歐賽車 🤩

![](https://x.com/AnsonChen/status/1903690778645344747)
