---
title: "網路黑手的呢喃 - #16"
date: "2022-06-30"
description: "Node.js support Web Workers？新鮮出爐的 Deno 框架、Kagi & Brave search 有機會改善現有的搜尋行為嗎？ OpenJS World 2022 的議程錄…"
tags:
  - Deno
  - Javascript
  - LEGO
  - Newsletter
  - Node.js
  - Search
  - Web
---
> Node.js support Web Workers？新鮮出爐的 Deno 框架、Kagi & Brave search 有機會改善現有的搜尋行為嗎？ OpenJS World 2022 的議程錄影釋出囉，宅宅也能玩樂高！
> 

---

## Support Web Workers

![](https://twitter.com/sindresorhus/status/1541547077599109120)

最近看到 Sindre Sorhus（他是 Node.js 的知名套件開發者，產量非常驚人😆） 在 Node.js repo 上面發起的一個討論，主要是希望 Node.js 能實作符合 Web standard 的 Web Workers（Node.js 其實已經有 [worker](https://nodejs.org/api/worker_threads.html) 的實作，但跟標準的不一樣）。

討論串上面也是非常激烈的討論中，有興趣的可以從上面的連結去看看~~（熱鬧）~~

目前看起來核心團隊也不排斥這樣的調整，不過需要有熱血人士獻頭😆（看起來現階段不會列為重點工作）（謎之音：可以跳過來用 Deno 阿）

## Fresh - full stack web framework for Deno

![](https://twitter.com/deno_land/status/1541790500985905159?s=21&t=KTCjWcpLnj8dlHc5s7o3OA)

Deno 最近的發展也是越來越快速，不過在有明確的 Node.js 相容方案出現前（應該會有吧 😅），目前在生態圈的缺乏也是個讓開發者有疑慮的地方，不過目前核心團隊也是有朝這方向努力，如這篇提到的 [Fresh](https://fresh.deno.dev/) 就是由自家開發提供的框架。

***Based on Preset :)*** （這個框架是基於類 React 框架 [Preset](https://preactjs.com/) 的喔）

![](https://www.youtube.com/watch?v=4boXExbbGCk)

## Kagi search & Brave search

前陣子無意間看到網友提到 [Kagi](https://kagi.com/) 這個新的搜尋服務。老實說我真的是第一次聽到這個服務，詢問之後才知道這個產品的特色。

![](https://twitter.com/wancw/status/1540008405045153793?s=21&t=KTCjWcpLnj8dlHc5s7o3OA)

前幾天剛好瞄到 Brave 的這則新聞，提到自家提供的搜尋服務突破的 2.5 billions 搜尋次數的里程碑。之前有看過發布的新聞，但沒有沒仔細去看，也沒實際去玩過它的功能，其實類似服務也不少，可以想見它會以自家產品特色—隱私當主打軸，但如果結果不精準其實也不是那麼好用，而且隱私這種大帽大家都會說說，但[被抓到的](https://3c.ltn.com.tw/news/49367)也不是沒有😅

![](https://twitter.com/brave/status/1539639739493453824)

不過 Brave search 再宣佈脫離 beta 正式開放使用的這個時刻，也一併推出了 [Goggles](https://github.com/brave/goggles-quickstart) 的新功能，看起來就是跟 Kagi 的「自訂搜尋結果」類似，它們定義了一套規範，讓用戶可以自由拉高、降低或排除特定網域結果的方法。例如[常利用修改變更時間造成搜尋引擎誤判的某站](https://twitter.com/sntc06/status/1533276008832708610)，就可以用這種方式過濾掉 ⬇️

```
! name: No Pixnet
! description: Remove all result on Pixnet
! public: true
! author: AUTHOR

$discard,site=pixnet.net
```

## OpenJS World 2022

前陣子舉開的 [OpenJS World 2022](https://events.linuxfoundation.org/openjs-world/) 的議程錄影終於放出來了，想了解目前 Node.js 現況、未來、問題的開發者不要錯過囉！這次真的提了不少安全性相關的議程，像下方的也是原 TSC 成員，目前在 Github 裡面的 Myles 的分享，提到 npm 針對目前一連串的安全性問題有什麼對應的措施跟改善。其他還有很多可以[移動至清單](https://www.youtube.com/playlist?list=PLyspMSh4XhLMSpb4yqi0aPxSioNaP1Wkn)觀看 😎

![](https://www.youtube.com/watch?v=eDZHrNbyK3c&list=PLyspMSh4XhLMSpb4yqi0aPxSioNaP1Wkn&index=52)

## 網路是個好東西

最近入了樂高之後發現真是一個不輸果粉的深坑，非常可怕，但是趣味性還是很值得玩味，尤其是讓玩家自行投票決定是否量產的 [Ideas](https://ideas.lego.com/) 系列 😎，最近翻到這個很有感，身為宅宅們不 支持嗎？（灌起來!!）

![](https://twitter.com/siygle/status/1539550771964149761)