---
title: "網路黑手的呢喃 - #43"
date: "2024-02-16"
description: "有些 Deno2 的消息以及開始封測的 JSR、又多了一個 JS runtime、Meta、AWS 丟出的幾個有趣開源專案、WASI Preview 2、實力碾壓的 Sora 以及追不完的 ML 新…"
tags:
  - AI
  - AWS
  - Deno
  - Javascript
  - Meta
  - Newsletter
  - OpenAI
  - Web
  - WebAssembly
---
有些 Deno2 的消息以及開始封測的 JSR、又多了一個 JS runtime、Meta、AWS 丟出的幾個有趣開源專案、WASI Preview 2、實力碾壓的 Sora 以及追不完的 ML 新聞。

---

# **Web 生態圈例行更新**

### Deno sessions: Deno 2

前幾天 Deno 自己頻道上辦了一個線上 session，裡面針對剛釋出的 1.40 以及即將出現的 2 都有些略的介紹，有興趣的開發者可以收聽看看。其實前陣子才剛挖到官方文件已經放上了 [1 → 2 的升級文件](https://docs.deno.com/runtime/manual/advanced/migrate_deprecations)，不過現在看起來好像大多都是提到穩定 API 跟繼續強化 Node.js 生態的相容性，還有也是前陣子放出來的 [**jsr**](https://jsr.io)（看起來是自家的 registry，但會相容 Node.js 使用）。

![](https://www.youtube.com/watch?v=yndyelbC_QA)

***截稿前更新*** 😅

前陣子 jsr 已經開始封測，有一些開發者已經收到邀請，下面這篇就是一位前 Deno 員工在事先就先加入測試之後的心得文，對這個服務有興趣的可以參考看看。簡單節錄幾點有趣的點：

- jsr 並不是針對 npm/yarn/pnpm，而是針對 npm registry 的改進。
- 它有許多針對 TypeScript 的優化，譬如原生支援 TS（所以你可以直接發布 ts 的程式，不需要任何編譯或設定，這些 jsr 都會自動幫你處理）、自動化文件、FastCheck等方便的功能。

[JSR first impressions](https://www.kitsonkelly.com/posts/jsr-first-impressions)

看起來雖然不錯，不過目前開發期應該還會有不少調整，企業面向的功能好像也還沒看到（如私有模組或其他更細分的權限等功能），另也有一些先行測試者回報一些安全性的問題（譬如它無視 gitignore 會把目錄裡面的檔案都傳上去😅） ，有興趣可以看看下面這篇。

[jsr.md](https://gist.github.com/oscarotero/523b3be0acd34b69aa9b136c98398018)

看起來 Deno 的確一直朝向簡化開發的方向走去，至於開發者買不買單就要再觀察看看了（不過還是覺得它需要一個趁勢而起的 buzzword，看有沒有機會跨入 ML 或是 WebAssembly）。

### 又多了一個 JS runtime 😅

雖然說又多一個 JS runtime 似乎已經不是什麼新聞了，不過大廠丟出來的東西還是會收到比較多目注，這次是 AWS 的版本 - [llrt](https://github.com/awslabs/llrt)，看 repo 的簡介似乎是從 QuickJS 分支出去的，不過雖然號稱比 Node.js 的啟用速度快上不少，但[它的目標並不是追求與 Node.js 相容或是取代，而是特別針對自家的 Lamdba 平台](https://x.com/pinskinator/status/1755668031169245633?s=61&t=-8QfXIkAo_EJ2rtVc89xcg)的產品，不過或許有可能期待它也會加入 WinterCG (?)。

![src: [https://twitter.com/ascorbic/status/1755635251357839574](https://twitter.com/ascorbic/status/1755635251357839574)](../assets/網路黑手的呢喃 #43 - Untitled.png)

src: [https://twitter.com/ascorbic/status/1755635251357839574](https://twitter.com/ascorbic/status/1755635251357839574)

*看看這琳琅滿目的 JS runtime* 😂

![src: [https://twitter.com/wesbos/status/1756029879487791239](https://twitter.com/wesbos/status/1756029879487791239)](../assets/網路黑手的呢喃 #43 - Untitled 1.png)

src: [https://twitter.com/wesbos/status/1756029879487791239](https://twitter.com/wesbos/status/1756029879487791239)

# 開源世界真有趣

### DotSlash?

就在 BlueSky 公開的同一天，看到有天友 😄 轉了這篇新聞，看起來 Meta 又丟出一個[有趣的東西](https://github.com/facebook/dotslash)。有點像 Corepack 之於 Node.js 的功能（自動根據設定下載對應的 package manager 來安裝並執行該專案），而 Meta 這個 DotSlash 則是對各種不同專案寫好設定檔，它就會自動去下載符合執行環境需要的 runtime，所以就不需要把 runtime 放到 repo 裡面，減少 repo 的體積。

![src: [https://bsky.app/profile/steveklabnik.com/post/3kkrdnqw4ek2m](https://bsky.app/profile/steveklabnik.com/post/3kkrdnqw4ek2m)](../assets/網路黑手的呢喃 #43 - Untitled 2.png)

src: [https://bsky.app/profile/steveklabnik.com/post/3kkrdnqw4ek2m](https://bsky.app/profile/steveklabnik.com/post/3kkrdnqw4ek2m)

### Finch for Windows

什麼是 [Finch](https://runfinch.com/)，應該可是把它視為 AWS 開源版本的 Docker Desktop（但沒有圖形化的介面，主要是透過 command line 的介面來操作、管理的，之前推出時只有 Mac 的版本，目前是正式支援 Windows 上的使用（但 Linux 到現在居然還沒有，果然使用者數量決定一切，不愧是商業公司 😅）

![src: [https://twitter.com/AWSOpen/status/1753192980452614197](https://twitter.com/AWSOpen/status/1753192980452614197)](../assets/網路黑手的呢喃 #43 - Untitled 3.png)

src: [https://twitter.com/AWSOpen/status/1753192980452614197](https://twitter.com/AWSOpen/status/1753192980452614197)

# WebAssembly 近況 - WASI Preview 2

雖然比起 ML 百花齊放，WebAssembly 好像沒收到多少的注意，不過其還是默默在進化中，而且它也是悄悄的[搭上了 ML 的車](https://github.com/WebAssembly/wasi-nn)。

![](https://www.youtube.com/watch?v=sxz-MxMNmRY)

其他的相關提案也一步步到位，譬如這邊提到的 [WASI](https://github.com/WebAssembly/WASI)，一旦 WASI 到位，WebAssembly 就更能夠跨出瀏覽器的限制，延伸到更多的應用之上。目前 Preview 1（POXIS、CloudABI）已經完成而 [Preview 2](https://github.com/WebAssembly/WASI/blob/main/Proposals.md)（I/O、File、HTTP） 進行中，然後是 Preview 3（Async），還沒定稿之前也可能會視狀況加上其他重要的功能，到此應該就可以涵蓋大多數的應用，或許 2024 年底就會出現不少有趣的東西啦 😄！

[WASI Preview 2: What WebAssembly Can and Can't Do Yet](https://thenewstack.io/wasi-preview-2-what-webassembly-can-and-cant-do-yet/)

# 引領風潮的 ML

### OpenAI 又出手了😅

ChatGPT 的熱潮漸漸下降之際，OpenAI 也沒閒著又丟出了一個新東西立刻就吸引眾人的目光，這次是 text-to-video 的模型 - [Sora](https://t.co/YYpOAcrXQ3)。雖然 text-to-video 並不是首創，不過 OpenAI 丟出來的成果相當驚豔 ⬇️

![src: [https://twitter.com/yujimur/status/1758344846048456739](https://twitter.com/yujimur/status/1758344846048456739)](../assets/網路黑手的呢喃 #43 - Untitled 4.png)

src: [https://twitter.com/yujimur/status/1758344846048456739](https://twitter.com/yujimur/status/1758344846048456739)

甚至它們的 CEO 還在 X 上面接受網友點播，即時產生出對應的影片來，真的是太強大的火力展示🙌

![](https://twitter.com/sama/status/1758206825756000613)

看來 OpenAI 的技術優勢還是相當巨大，今天下來之前拿到投資的幾個新創不知道現在是怎麼想的，~~之前似乎很強勢的 [Pika](https://pika.art/home) 不知道會不會來一個兩者對比之類的~~（[才剛準備寫就發現有人發了測試](https://twitter.com/0xAmberBella/status/1758379538692899052)，看來目前是 OpenAI 實力碾壓），不過今天最傷心的我看還是莫過於 Google 了，重磅推出 [Gemini Pro 1.5](https://twitter.com/Google/status/1758209601109987641) 結果一下子就被 OpenAI 的 Sora [搶走大部分的眼球了](https://twitter.com/ai_for_success/status/1758229146927550659)。😅

### 本地為王!?

最近 ML 領域還是一樣每天幾乎都有新東西出現（類似的重做之品就更不用算上了），不過最近幾個有趣的東西有個相似的趨勢，就是都主打本地就可以運行的 AI 模型，看來是隨著 AI 服務的興盛，安全性的問題也逐漸被重視，畢竟把自己的資料都當成被訓練的素材，應該不是大家都很開心。😅

一個是霸主 NVIDIA 自家推出的 [**Chat with RTX**](https://www.nvidia.com/en-us/ai-on-rtx/chat-with-rtx-generative-ai/)，主打就是可以本地跑起類 ChatGPT 的服務，也支援多個 AI 模型，不過當然前提是你要有 RTX 30 or 40 的顯示卡才行（目前只支援 Windows 版本，不過應該之後有機會可以看到其他平台）。

![src: [https://twitter.com/rowancheung/status/1757429733837418610](https://twitter.com/rowancheung/status/1757429733837418610)](../assets/網路黑手的呢喃 #43 - Untitled 5.png)

src: [https://twitter.com/rowancheung/status/1757429733837418610](https://twitter.com/rowancheung/status/1757429733837418610)

另一個是 OpenAI 的 Whisper 的 Swift 實作版本 - [WhisperKit](https://github.com/argmaxinc/WhisperKit)，不同於 OpenAI 開源的版本，除了它是 Swift 實作所以很方便可以整合到 Apple 裝置之上，此外，它也特別針對優化過，可以從它的範例可以看到（剛放出的 [0.2](https://twitter.com/argmaxinc/status/1757803686124990770) 甚至還可以直接在 Apple Watch 上執行，真的猛！）有特別針對 Apple 平台來優化，所以可以在 iPhone 上達到很流暢的翻譯效果。

[WhisperKit — Argmax](https://www.takeargmax.com/blog/whisperkit)

### Apple 也是不斷追趕

雖然 Apple 在 ML 領域應該不算是第一列隊，不過身為平台提供者，也有自製晶片的能力，老實說已經是非常有優勢了，最近也看到不少 Apple 丟出來得的東西，譬如像下面這個針對圖片修改的功能的模型 - [MGIE](https://github.com/apple/ml-mgie)。

感覺針對設計、圖形的 ML 應用算是非常常見，說不定在不久的將來，這個領域的產出可以透過 ML 極大幅度降低一般使用者的使用門檻，透過語意就能產生出使用者需要的素材。

![src: [https://twitter.com/xiaohuggg/status/1754351039741104198](https://twitter.com/xiaohuggg/status/1754351039741104198)](../assets/網路黑手的呢喃 #43 - Untitled 6.png)

src: [https://twitter.com/xiaohuggg/status/1754351039741104198](https://twitter.com/xiaohuggg/status/1754351039741104198)

# **這次心累沒有網路好東西** 😅