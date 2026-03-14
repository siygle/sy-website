---
title: "網路黑手的呢喃 - #32"
date: "2023-06-16"
description: "This might trigger a sense of unease in some macOS developers who’re used to paying for polished na…"
tags:
  - AI
  - Deno
  - Newsletter
  - Raycast
  - Rust
  - WebAssembly
  - bluesky
  - bun
---
Raycast 原來這麼猛、WASIX 又是什麼啦！Deno KV 有可能加上 queue 了嗎？Bluesky 的特異功能 - custom feed、cargo <file>.rs & bun macros，以及好多有趣的 AI 跟好東西。

---

# Raycast原來這麼猛

這篇由 Raycast 出品的文章，非常仔細的講述了他們如何實作 plugin 架構的演進以及面臨的問題與抉擇，內容非常硬派，但是收穫也很多。（*人家是這樣作技術評估的，轉頭看自己*😅）

原本我也以為 Raycast 是套殼的 Electron 之類的實作，沒想到是我太失禮了。但是看他們對於選了 Node.js 生態作為開發 plugin 的基礎應該是覺得很勉為其難，真的是作了好艱難的決定阿🤣。（沒關係，大 JS 被黑也不是一兩天的事了👨‍🎤）

> This might trigger a sense of unease in some macOS developers who’re used to paying for polished native macOS apps and can spot an Electron app a hundred miles away.
> 

> Plus, wasn’t Node a runtime that forced developers to use a programming language that many see as flawed? With a package ecosystem riddled by security problems that caused half of the entire web not to work at times? Plus a bunch of other issues, so that its creator went ahead to fix all mistakes in a new shiny runtime?
> 

[https://twitter.com/randyloop/status/1663948866117578752](https://twitter.com/randyloop/status/1663948866117578752)

# WASIX = WASI + **POSIX**

> WASIX is ready today for the community to build *awesome* apps and complete their runtimes: supporting threads, Berkeley *sockets*, *forking* and many more things that have been available for almost all the life of POSIX.
> 

雖然最近大家的目光都被 Machine learning 吸引去了，不過我覺得 WebAssembly 的發展也是默默的開始凸顯出它的影響力，不斷有一些有趣的東西推出來，再過幾年看看會不會開花結果😄。

最近 WebAssembly 其中一個知名的開發商 Wasmer 公開了一個新東西 - [**WASIX](https://wasix.org/)。**WebAssembly 在近期加上了 [WASI](https://wasmbyexample.dev/examples/wasi-introduction/wasi-introduction.all.en-us.html) 之後，已經不單純是編輯器的領域而已了，帶來更多的可能性，不過畢竟是 W3C 協定，增加新功能的速度一定是沒辦法達到創業公司的期待，所以 Wasmer 才會自己出來弄一個這個東西。

就跟標題一樣，WASIX 就是 WASI 加上 POSIX 的一個超集合，因為直接走到 POSIX 這步，所以從 [Wasmer 放出的範例](https://wasmer.io/posts/announcing-wasix)可以看出，它的目標就是期望可以直接相容 POSIX，如此一來那些眾多 *nix 的程式就可以直接在 Wasmer 上面運行了。

```jsx
$ wasmer run --net curl/curl -- https://www.google.com
```

[https://twitter.com/wasmerio/status/1663568328084934658](https://twitter.com/wasmerio/status/1663568328084934658)

看起來 WebAssembly 好似前途光明👀

不過老實說，對 Wasmer 這間公司的感覺也是很微妙，畢竟之前[傳出過不太好的消息](https://mnt.io/2021/10/04/i-leave-wasmer/)😓，而且光就 WASI 目前的運作上，也是有[不認同的聲音](https://www.ithome.com.tw/news/153022)出現。所以，再觀察一段時間看看吧，畢竟除了相對單純的技術問題之外，組織跟人才是更麻煩的😓。

# Deno KV 有望升級！？

最近瞄到有網友發了下面這則推文，一瞬間太興奮結果後來點進去 PR 看才發現原來是開發者提出的，不是 Deno 自家新加上的功能。KV 雖然是很陽春的結構，但是 Deno 提供的方案很到位（這部分之前都有提過了），原本也是想說大概就差一個 message queue 就差不多可以涵蓋許多開發的場景了，結果居然夢想成真！🤩

```jsx
// 目前的設計是多兩個 enqueue & queueListen

const db = await Deno.openKv();

await db.enqueue("foo", { delay?: number, keysIfUndelivered?: Deno.KvKey[] })

db.queueListen(async (msg: unknown) => {
```

目前還在討論中所以可能介面還會調整，不過有點疑問能不能做到跨專案的轉接，畢竟 queue 應該滿常用在非同步處理的 producer/consumer 上面，但印象中 Kv 是專案綁定的，所以…？（再觀察看看之後的進度，不過看到這個出現還是很開心啦😄）

[https://twitter.com/_ayame113_/status/1667744664974397440](https://twitter.com/_ayame113_/status/1667744664974397440)

# Bluesky custom feed

自從看到 [Bluesky](https://bsky.app/) 放出這個功能之後，就一直想找時間來玩玩看，最近終於達成這個心願啦😄，這邊自推一下心得文，如果也已經有 Bluesky 帳號的開發者也想玩玩這個趣的新功能的話，希望這個踩雷文可以幫上一些忙。

[https://twitter.com/siygle/status/1668304440577912834](https://twitter.com/siygle/status/1668304440577912834)

# cargo <file>.rs

最近開始默默啃起 rust 來，工作領域對於靜態語言實在接觸不多，不過最近對於 rust/zig 之流的新起之秀，比起去兜弄 C++/C　比起提得起學習的動力，所以希望之後呢喃也能默默增加這塊的分享。🤞

[https://twitter.com/weihanglo/status/1667096491695931392](https://twitter.com/weihanglo/status/1667096491695931392)

這個是無意間看到 cargo 核心維護者的轉推，看起來之後拿 rust 來寫 script 之類的應用也會變得很簡單了。不過這個 RP 看起來是另一個更大計劃的第一步而已，有興趣的可以直接參考 RFC 🔽

[https://github.com/rust-lang/rfcs/pull/3424](https://github.com/rust-lang/rfcs/pull/3424)

# Bun Macros

最近 Bun 放出一個有趣的功能 - [Macros](https://bun.sh/docs/bundler/macros)，簡單說它是一個特別的行為只會發生在執行打包的時候，要把引入的模組或函式宣告成 `macros` 的形態才行，因為這個特別的行為規則，有一些不錯的運用，譬如官方舉的其中一個例子 → 取得最新打包的 git commit hash ⬇️

```bash
// 宣告方式就如下方的 with { type: 'macro' }
import { getGitCommitHash } from './getGitCommitHash.ts' **with { type: 'macro' }**;
console.log(`The current Git commit hash is ${getGitCommitHash()}`);
```

如此一來，就可以在 `bun build` 的時候看到。

老實說，雖然之前一些事對 Bun 不太有好感，不過不能不佩服它的超強開發效率（我都懷疑作者是不是都不休息的😅），以及它很願意嘗試一些特別的功能，我覺得這也是 JS 生態迷人的地方（不過有時候也是很惱人，每個實作都不一樣，每個人都要重造輪子，到處都是相容的問題等😓）。

[https://twitter.com/jarredsumner/status/1664034648639549442](https://twitter.com/jarredsumner/status/1664034648639549442)

# 排山倒海的AI潮

### 這樣叫模特兒情何以堪😆

> **Photoshop 推出新功能，未來只需向 AI 下達指令即可快速修圖**
[https://hypebeast.com/zh/2023/5/adobe-photoshop-ai-photo-editing-tool-generative-fill-digital-art](https://hypebeast.com/zh/2023/5/adobe-photoshop-ai-photo-editing-tool-generative-fill-digital-art)
> 

最近 Photoshop 也引入了 Machine learning 來做到更方便的修圖功能（以後難道真的只要學會詠唱就夠了嗎？😆 ）。下圖是個火力展示，以後模特兒也只需要買一張就夠了。#大誤

[https://twitter.com/iritec_jp/status/1663637160996790272](https://twitter.com/iritec_jp/status/1663637160996790272)

### raycast 真的動好快

才剛提到之後詠唱多麼重要，raycast 立刻就想到相關的應用了，那之後這個要叫「詠唱詩譜」？大家之後可能都要人手一本了🤣

***白話翻譯：一個能管理、收藏，還有提供 prompt 範例的好工具！***

[https://twitter.com/raycastapp/status/1667157106192183298](https://twitter.com/raycastapp/status/1667157106192183298)

### Facebook 出品 text-to-music 的模型

> **Metaが音楽生成AIモデルをオープンソースで公開、テキスト＆音声入力で誰でも高品質な音楽を作成できるように**
[https://gigazine.net/news/20230612-audiocraft-music-gen/](https://gigazine.net/news/20230612-audiocraft-music-gen/)
> 

> **Simple and Controllable Music Generation**
[https://arxiv.org/abs/2306.05284](https://arxiv.org/abs/2306.05284)
> 

自從 ChatGPT 發佈以來，各家模型就不斷推陳出新，各自也有不同擅長的優勢。最近 Facebook 也不落人後又開發了它們自家出品的 text-to-music 模型 - [**MusicGen**](https://github.com/facebookresearch/audiocraft)。（有興趣可以透過 [Hugging Face](https://huggingface.co/spaces/facebook/MusicGen) 來試玩看看，可以產生一段 12s 的音樂，像下面這個是我弄的範例，應該是還不錯？😅）

[tmps0yxy0t6.mp4](%E7%B6%B2%E8%B7%AF%E9%BB%91%E6%89%8B%E7%9A%84%E5%91%A2%E5%96%83%20#32/tmps0yxy0t6.mp4)

### UI苦手的救贖🤣

Framer 這家以網站設計製作工具著名的線上服務，最近不免俗也搭上了 AI 的風潮，推出了 AI 的功能，能夠根據使用者所下的 prompt 可以快速產生一個網頁設計出來，真的是太威啦！

> 這邊也有網路大大的試玩 & 心得可以參考：
**Framer AI 產出網頁，實用性高**
[https://blog.akanelee.me/2023/06/14/framer-ai-try-out/](https://blog.akanelee.me/2023/06/14/framer-ai-try-out/)
> 

**以後是不是不會設計也可以接案了*😆

[https://twitter.com/indigo11/status/1669101396338278401](https://twitter.com/indigo11/status/1669101396338278401)

# 網路是個好東西

### 經常要看一下每年好物推薦😄

> **分享 2023 我開始使用的一些酷工具**
[https://yuanlin.dev/posts/my-cool-tools-2023](https://yuanlin.dev/posts/my-cool-tools-2023)
> 

這類型的工具推薦文應該是大家都蠻常見的文章類型，不過每年看看這類文章還是蠻需要的，尤其年紀大了之後，對於新東西都沒什麼太大興趣，還是要靠這類文章更新一下（常常也可以挖到寶🤩）

### 新世代的絕技

這身絕技我真是自嘆不如，長江後浪推前浪🤣

[https://twitter.com/punk2898/status/1668838776653910016](https://twitter.com/punk2898/status/1668838776653910016)

### 最近才發現 UpNote 這個好物！

感謝海總的推薦，真的是第一次知道這個（當初如果早一點知道，說不定就不會換到 Notion 上面了啦），還有…新海誠新作預定！？😆

[https://twitter.com/tzangms/status/1667066650506706947](https://twitter.com/tzangms/status/1667066650506706947)

### 我猜到開頭，卻猜不到這結局

不解釋，可以嘗試看到最後

*順便推薦下這位開發者的[自創影片](https://twitter.com/rita_codes)，應該身為同行都很有感🤣

[https://twitter.com/rita_codes/status/1668227080046223365](https://twitter.com/rita_codes/status/1668227080046223365)

### 應該是要🤞?

[https://twitter.com/kevinzhow/status/1664582285730123779](https://twitter.com/kevinzhow/status/1664582285730123779)

### 有經歷過的都知道

我以身為 0.5x 工程師為傲 #大誤 🤣

[https://twitter.com/chris__sev/status/1666525500116967424](https://twitter.com/chris__sev/status/1666525500116967424)

### 我也是今天才知道😅

誤會微軟了，原來這麼 hardcore！

[https://twitter.com/terrynini38514/status/1664912265164759042](https://twitter.com/terrynini38514/status/1664912265164759042)