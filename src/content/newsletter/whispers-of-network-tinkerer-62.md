---
title: "網路黑手的呢喃 - #62"
date: "2025-03-03"
description: "主題：JSR 走向 Open Governance、Oracle 果然還是那個 Oracle、Deno 2.2、All in ESM！、現在也要針對 AI 爬蟲給描述檔了嗎？ 😅"
tags:
  - AI
  - Deno
  - Javascript
  - Mozilla
  - Newsletter
---
---

## JSR 走向 Open Governance

之前有提過這個 Deno 推出的 package registry 服務 [JSR](https://jsr.io/)，不同於 npm 有特別針對 TypeScript 也引入了不少更符合開發的好功能（不特別再贅述的，可以跳轉官網或之前[曾經簡單介紹](https://chat.sylee.dev/2024/03/09/%E7%B6%B2%E8%B7%AF%E9%BB%91%E6%89%8B%E7%9A%84%E5%91%A2%E5%96%83-44)的部份）。

最近看到它們更往前走了一步，宣布將以 Open Governance 接續後續的開發與維護，從公告中可以看到成員除了 Deno 之外，還包含了 Evan、Isaac、James 這些同為 JS 生態知名的開發者參與其中，這些很能代表前端開發、註冊表服務，以及其他 JS runtime 這些領域，如果真的良好運作對 JSR 的未來感覺是非常值得期待阿～ 🤩

![](https://bsky.app/profile/did:plc:dijfw5anky2izdhc2y6hi73g/post/3lhc5oxhsts2i)

*雖然後勢看好，不過個人還是有顧慮的的地方，就是後續的營運成本該怎麼處理（總不可能一直靠 Deno 自家跟贊助吧，有良好的錢錢來源也是很重要的）以及 Deno 自己開太多戰場導致自顧不暇（轉頭看 Deploy & Fresh* 😓*），希望是我自己杞人憂天就好…*

## Oracle 果然還是那個 Oracle

之前提過的 Deno 針對 JavaScript 商標提出對 Oracle 的訴訟，Oracle 日前終於針對這件事做了回覆，不過看起來也只是要繼續拖延時間而已（可以參考 Deno 官方發佈的文章）。

[Oracle justified its JavaScript trademark with Node.js—now it wants that ignored](https://deno.com/blog/deno-v-oracle2)

Oracle 方當然也提出了自己的主張，這部分感謝 AI 工具我們可以不用花時間看廢文 #誤 ⬇️

[Oracle對Deno Land的商標欺詐主張駁回動議 | Shared Grok Conversation](https://grok.com/share/bGVnYWN5_f4baf3ab-457c-48fc-aaa1-ef653e0b2fd1)

簡單說就是它之前誤放了 Node.js 也不重要啦，反正我們自家的 Oracle JET 就有涵蓋到 Class 9 & 42 了啦，然後繼續打迷糊仗。但凡對這個生態稍微了解的都知道，Oracle 跟 JavaScript 的生態根本就相差不只十萬八千里，然後現在提一個幾乎大多數人都沒聽過的 JET 就宣稱自己有 JavaScript 的商標合法權，真的是有夠爛。

不過幸好 Deno 也沒打算這樣就停下來，後續的法律戰攻防應該還是會持續，希望能有好的結果阿 🤞

## Deno 2.2

![](https://bsky.app/profile/did:plc:dijfw5anky2izdhc2y6hi73g/post/3lik4t5pcys2i)

Deno 也是默默走到 2.2 的版本了，雖然目前還是不慍不火的樣子，不過看起來他們還是維持自己的步伐，持續改善 Deno 以及增加各種新功能，關於 2.2 版本的詳細功能，大家可以直接跳轉 Deno 的公告。

比較留意到的是增加了 [OpenTelemetry](https://docs.deno.com/runtime/fundamentals/open_telemetry/) 的支援（所以之後要接上 monitor、log 等就更加方便了）、還有針對 lint 增加的 [plugin API](https://docs.deno.com/runtime/reference/lint_plugins/)，可以自定義自己需要的檢查規則，另外看到也從這個版本正式支援了 `node:sqlite` 的功能（我原本看到是有點納悶，一直以為 kv 的功能就應該有支援了 😅）

![](https://www.youtube.com/watch?v=RM1j52eF2og)

*其實現在每次講到 Deno 就想說些甚麼（不過上面 JSR 那邊已經碎念過就算了），總歸一句就是雞肋，唉。*

## All in ESM！

*不能不說 vue 生態的開發者，感覺還是比較激進一些 #稱讚貌*

前陣子看到 vue 的開發者寫下來這篇提倡使用 ESM 模組的文章，最近終於找時間把它啃完了（不過當初看到的時候就猜測應該跟 [Node.js 最近加上支援在 CJS 裡面引入 ESM 模組的功能](https://github.com/nodejs/node/pull/51977) 有關 😄）。

簡單說，作者建議在目前開發工具都已經到位的情況之下，建議開發者可以轉向使用 ESM 作為模組的輸出預設格式，甚至你也不需要再用之前兼容 CJS、ESM 的格式。至於為什麼，可以跳轉文章去看看，作者都有很詳細的說明。

[Move on to ESM-only](https://antfu.me/posts/move-on-to-esm-only)

## 現在也要針對 AI 爬蟲給描述檔了嗎？ 😅

原本是先不經意瞄到[有專案裡提到了這個](https://github.com/vitejs/vite/issues/19400)，才接著去翻了一下這個 `llms.txt` 到底是什麼東西，才發現原來它已經有了專門的網站在介紹這是什麼東西。簡單說，其實就跟之前我們提供 `robots.txt` || `sitemap.xml` 這類的檔案，讓爬蟲可以快速了解網站提供提供的內容， `llms.txt` 就是給 AI 看的描述檔。

[The /llms.txt file – llms-txt](https://llmstxt.org/)

目前看起來沒有非常嚴格的規範，下面這樣就是基本可運作的文件格式了 ⬇️

```markdown
# Title

> Optional description goes here

Optional details go here

## Section name

- [Link title](https://link_url): Optional link details

## Optional

- [Link title](https://link_url)
```

最主要的就是 H1 定義的網站名稱，其他的 H2 部分就是增加各項，想提供 AI 快速檢索的內容或文章連結。目前看起來有不少開源專案已經放上自己的網站了（[這邊也可以看到](https://directory.llmstxt.cloud/)有那些服務或專案）。

[https://github.com/AnswerDotAI/llms-txt](https://github.com/AnswerDotAI/llms-txt)

## Mozilla 也崩壞了

前幾天看到有人貼出這些資訊（是說我也不太意外了），Mozilla 變更了他們的使用授權的內容，最誇張的就是如下推文裡面列出的那句 ⬇️

基本上就是只要透過 Firefox 輸入的資料，Mozilla 就有權力可以使用喔 👍

雖然我現在幾乎沒在用 Firefox 了，不過看到它們崩壞到這種地步，也是覺得感傷…

![](https://x.com/LundukeJournal/status/1895198058289471966)

## CDK 終於支援 GC 了

雖然不是什麼重要的功能，不過看到 CDK 也終於支援 GC 了功能，這樣 CDK assets 無限膨脹的情況也終於可以改善了（才那麼點空間算甚麼 😅）。

不過看文件提到是從 2.165.0 就加上了這個功能了，然後就下列這個簡單指令跑下去就可以了。

```bash

cdk gc \
  --unstable=gc \
  --bootstrap-stack-name=YourCDKStackName \
  --rollback-buffer-days=0 \
  --created-buffer-days=0
  
# rollback-buffer-days: this is the amount of days an asset has to be marked as isolated before it is eligible for deletion.

# created-buffer-days: this is the amount of days an asset must live before it is eligible for deletion.
```

[Announcing CDK Garbage Collection | Amazon Web Services](https://aws.amazon.com/blogs/devops/announcing-cdk-garbage-collection/)

## 世界局勢實在不容樂觀 😢

雖然跟技術沒什麼關係，不過看到最近美國跟烏克蘭談崩的事情，總還是想說個幾句。只能說現在局勢讓人悲觀，一直在前線死撐的烏克蘭，又遇到美國改朝換代變成保守主義的時刻，他們可能壓力也是很大才會失控。雖然我這種 nobody 在這邊說什麼都不會影響到實際的局勢，不過還是希望善的一方能夠有好的結果，不然這世界真的是太令人絕望了… 🙏🤞

![](https://x.com/visegrad24/status/1895533418752196862)

## **網路是個好東西**

### 最近平衡感不太好的 Moodeng 😂

![](https://x.com/and_khamoo/status/1892174742070894723)

![](https://x.com/gurugarzah/status/1891886818846552137)

![](https://x.com/KhaokheowZoo/status/1891816876973396265)

### 高級黑 🤣

![](https://x.com/code/status/1895145393513525743)

如果沒追到相關訊息，你可能不知道為什麼 vscode 要發這個推文，背景資訊可以參考下推 🤣

![](https://x.com/CatChen/status/1894811407851704501)

### 真的會哭，製作組太有心了吧 😭

![](https://x.com/ilt0125_YN/status/1895065946555064700)

### 我是 #誤

能夠隨心所欲的生活真的是很令人羨慕的一件事 😍。

![](https://x.com/kurtsunx/status/1894596941524472002)

不過除了魔物獵人之外，我也要大推一下 Kingdom Come: Deliverance 2，真的是今年截至目前為止最愛的遊戲了。

[Kingdom Come: Deliverance II](https://store.steampowered.com/app/1771300/Kingdom_Come_Deliverance_II/?l=tchinese)