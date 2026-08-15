---
title: "網路黑手的呢喃 - #48"
date: "2024-06-04"
description: "開源專案最重要的還是開發者有沒有意願繼續維護，有時候表面上的穩定可用，實際上有許多不便的地方。"
tags:
  - AI
  - Deno
  - Device
  - KPOP
  - NVIDIA
  - Newsletter
  - Rust
  - Security
  - Shell
  - Taiwan
  - WebAssembly
---
Deno 1.44 還是繼續在倒數、平常都沒仔細想過的驗證郵件問題、最近非常多的 Conf（React Conf、Vercel Ship、Google I/O & MS Build）、開源專案依然活力十足、AI, Computex, and Taiwan、大家都要照顧好自己！

---

# 五花八門的 Web 生態圈消息

## Deno FUTURE

上個版本提到 Deno 已經開啟了測試模式，為了即將到來的 2.0 開始作準備了，不過測試的期間，針對新版本的開發也還是不斷進行中，最近看到 Ryan 貼出終於 Deno 也支援私有註冊表的功能，真的是等好久了啊~

src: [https://x.com/rough__sea/status/1794430918267916342](https://x.com/rough__sea/status/1794430918267916342)

結果看到這個過沒多久，官方就釋出包含這項功能的 1.44 版本啦，雖然我們仍舊不知道 2.0 什麼時候才會出現 😅，看可以看到最近幾個 minor version 更多的都是 Node.js 生態的相容、穩定、效能等的更新，看起來應該是在作最後收尾的動作了。

[Deno 1.44: Private npm registries, improved Node.js compat, and performance boosts](https://deno.com/blog/v1.44)

## No more 32-bit

最近 Node.js 都沒看到什麼有趣的提案，不知道是不是因為 runtime 太多有點社群力量被分散的關係 😅（希望不要阿），只留意到準備要移除對 32-bit Win 作業系統的支援，可能很多人都沒經歷過那個 32 → 64 的時期吧，感覺又是一個時代落幕了。 #老人只能講古

[https://github.com/nodejs/node/commit/7ad0cc3e5715bff8f4def9b199952c5db25737d8](https://github.com/nodejs/node/commit/7ad0cc3e5715bff8f4def9b199952c5db25737d8)

## 安全性的眉角(**mê-kak)**

無意間掃到這篇大大們討論電子郵件驗證方法的安全性問題， 之前都沒有仔細思考過這個問題，原來還有這個沒想過的面向（不過我猜垃圾帳號專門戶也可能會用類似的手法，來批次處理驗證的行為 🤔）。

只能說網路安全真的是博大精深的議題，每個露出點都可能是個潛在的攻擊目標，各種手法也是不斷推陳出新。

src: [https://x.com/hulitw/status/1795305413220635068](https://x.com/hulitw/status/1795305413220635068)

## 最近好多 conf 也丟出好多新東西

不知道是不是大家都喜歡跟著五、六月的熱潮（因為三大家都是這個時段 😆），最近這一陣子也是好幾場開發相關的研討會進行 & 落幕，也丟出了不少有趣的東西：

### React Conf 2024

雖然對於近年 React 的一些發展不是很了解（譬如那精妙的 Server Component），但身為 JS 框架的領頭羊，發展多年帶來龐大影響的生態園，雖然這車不好開但還是得關注一下它的狀況。

喜歡 Web 的一個好處是，許多相關的研討會幾乎都公開它的議程錄影，當然剛結束的 [React Conf 2024](https://react.dev/blog/2024/05/22/react-conf-2024-recap) 也不例外，可以快速看一下官方整理好的 recap。

[React Conf 2024 Recap – React](https://react.dev/blog/2024/05/22/react-conf-2024-recap)

其中比較引人注意的，應該就是 [React 19](https://react.dev/blog/2024/04/25/react-19) 以及 [React Compile](https://www.youtube.com/watch?v=0ckOUBiuxVY&t=9313s) 這兩項了吧？身為兩年前登場的 18 這次新版也真的是讓人等了好久，難怪都有人覺得[最近 React 的狀態令人擔憂](https://cassidoo.co/post/annoyed-at-react/)，希望發布 19 之後能重新走回正軌才好。😅

關於 19 的功能跟 Compile，可以直接找 Recap 的文章內容，官方很體貼幫大家標好時間點了，當然也有相關整理的文章了 🔽

[React Compiler & React 19 - forget about memoization soon?](https://www.developerway.com/posts/react-compiler-soon)

### Vercel Ship 2024

身為跟 React 幾乎已經是連體嬰存在的 Next.js，雖然一開始只是 React SSR 方案的起身，後來逐漸長成一個更加龐大的框架以及許多圍繞著它的生態，背後的親爸爸 Vercel 當然就是其中的主角，伴隨著新版的 React，[Next.js 也走到了 15 的版本號](https://nextjs.org/blog/next-15-rc)。雖然規模不像 Meta 那麼驚人，不過身為開發工具的 Vercel，每年的一日 conf 也是相當引人注意，當然也貼心幫各位開發者整理好當天的 recap 了：

[Vercel Ship 2024 recap – Vercel](https://vercel.com/blog/vercel-ship-2024)

# 開源世界真有趣

## 新酷音也走上 rust 之路

留意到讀源碼頻道的這篇文章（~~絕對不是因為看到 rust 就會停下來的怪怪習慣~~），沒想到這篇記錄文相當有料阿，從頭到尾敘述了把新酷音原本的 C 改寫成 Rust 的超詳細過程，想感受一下開源人熱情的話，這篇不要錯過！

src: [https://x.com/daininduyuanma/status/1797117900677157161](https://x.com/daininduyuanma/status/1797117900677157161)

後續也有看到有其他網友提問了，做這種吃力不討好的改寫的原因是什麼，使用者也感受不到，沒想到釣到[作者親自出來回覆](https://x.com/kanru/status/1797392925137207788)。😎

[回顧用 Rust 重寫新酷音的經驗](https://kanru.info/libchewing-rust-rewrite-in-review/)

> 開源專案最重要的還是開發者有沒有意願繼續維護，有時候表面上的穩定可用，實際上有許多不便的地方。

— [by 本文作者 Kan-Ru](https://x.com/kanru/status/1797392925137207788)
> 

看到這段也是相當有感，有時候改寫是一種必要之惡（不是指真有什麼壞處，而是「為什麼要改原本穩定的版本」那種），要持續有開發者願意出來維護專案是一件相當困難的事，尤其當這個專案有一些難度（入門檻高）、使用者少的情況下，又是更加的困難，所以有時候改寫成（當下）比較熱門的語言或架構，吸引一些開發者願意進來幫忙，能達到這樣的目的就足夠了，大家都是辛苦人。😓

不過能過更多使用的企業或用戶願意實際的支持專案，可能會更好吧，唉～

## 又來一個類 Postman 的小工具

有從事後端的開發者，就算沒用過 Postman 應該也聽過這類的工具，就是能夠讓你方便測試 API 並容易除錯的小工具，其實這類的工具相當多也五花八門，幾乎你想到的平台都會類似的軟體，像是 desktop、IDE plugin，或是 CLI。

下面這個 atac 就是面向終端機介面的工具，雖然有圖形化的工具相對更方便操作一些，不過如果不排斥 terminal 介面的操作模式，不需特別裝一些肥到不行的軟體，若不是什麼特別複雜的測試行為，其實這個簡單的的工具也就夠了，推薦！

* *其實我平常用的更頻繁的是 [httpie](https://httpie.io/)，直接 CLI 決勝負，也是推薦* 😛

[atac - A simple API client (postman like) in your terminal.](https://terminaltrove.com/atac/)

## Amber for bash shell

又來了一個新語言？不過說是新語言更像是語法糖的東西，這次的目標是常見但可能不是人人都熟練的 shell script（Bash）。一般可能比較偏後端開發才會需要接觸或撰寫 shell script，不然就是一些build or deploy script 才會用到（當然你也可以用它寫很複雜的東西，但應該不會很多人會想這麼做），也因為年代久遠，它的語法跟現在眾人熟悉的 modern language 有不小的差異，Amber 就是為了改善這些問題才出現的吧～

不過老實說，如果是我，比起再學一門新語法，我可能更傾向找像 [**zx**](https://github.com/google/zx) 或是 [**bun shell**](https://bun.sh/docs/runtime/shell) 這類的工具，直接用 JS 來寫可能更方便一點 😅。

[Amber The Programming Language](https://amber-lang.com/)

## LO，又一個針對 WebAssembly 而來的語言

又是一位強大的烏克蘭開發者，威！

又是一個跟 WebAssembly 有關的工具，威！

~~寫到精神不濟了，請不要理我~~

[https://github.com/glebbash/LO](https://github.com/glebbash/LO)

看起來是個有趣的專案，目標也很明確，就是針對 WebAssembly 的一個新語言，因為目前還在開發中，看起來[隨時有可能會調整](https://carrot-blog.deno.dev/lo/devlog-6) 😅，語法目前看起來有點拼裝車的感覺，可以看到 C/Rust/Go 的影子在裡面，目前瞄一眼是還覺得蠻友善的。

雖然看起來也像是語法糖的目的（跟上面的 Amber 類似，只是這次是面向其他 wasm 的語言），不過因為小而精巧，直接看原始碼當作學習的素材也是蠻不錯的，作者目前也有在 YT 上一邊開發一邊錄一些開發記錄，有興趣的可以[跳轉去看看](https://www.youtube.com/playlist?list=PL6qyEx0ybzWqkc0zG6jVgRx63nZkdu3DP)。

# 引領風潮的 ML

## AI, Computex, and Taiwan

伴隨著 NVidia 的黃仁勳為了來臺灣參加 Computex 的一連串的新聞，就算原本沒注意到 AI 的人，應該都已經被滿滿的版面洗到不知道也很難了吧（不過我想應該也沒這種人吧 🤣）

![](https://www.youtube.com/watch?v=pKXDVsWZmUU)

第一時間就有直播，相信應該不少人都已經看過了，AI 真的發展迅速，不過我們一般使用者或許比較熟悉的還是以 OpenAI 為首的生成式 AI，不過這只是冰山一角而已，真的很推薦像我這種一般用戶來聽聽這個議程，NVidia 已經面向非常多 AI 應用的領域，也已經開始佈局許多我們可能壓根沒想到的領域，真的是收穫滿滿，感覺像是上了一堂 AI 的通識課一樣。😎

這邊列出幾個自己印象深刻的東西：

- [CUDA 的火力展示](https://youtu.be/pKXDVsWZmUU?t=2444)：前段幾乎都在講現有透過 AI 達到的成效，結尾以一個 Earth-2 作為實際的展示，透過 AI 來模擬地球氣候的變化，這邊提到 Digital twins 的概念也很有趣。
- [新的產業革命 - AI factory](https://youtu.be/pKXDVsWZmUU?t=3189)：以前的工廠是產生出產品，現在 AI 也有，但他產出的是 token，也正是對應到 AI 為我們處理的各項事物，可能是一個回答、一個圖片，一段影片等。
- [NVIDIA Inference Microservice (NIM)](https://youtu.be/pKXDVsWZmUU?t=3456)：不確定目前的理解有沒有問題，不過聽起來很像是 Docker for AI service 那種感覺，每一個 NIM 可能代表一種 pre-trained 的模型專精於某一項任務，所以之後說不定就跟現在的 service orchestration 一樣來組合出各企業（或各人）需要的服務即可（這邊突然想起之前有人提過的「[一人獨角獸](https://fortune.com/2024/02/04/sam-altman-one-person-unicorn-silicon-valley-founder-myth/)」的概念，說不定快可以看到了）。
- [Blackwell 跟一堆 AI 特製的硬體跟技術](https://youtu.be/pKXDVsWZmUU?t=4427)：聽這段跟著覺得是完全另一個世界（也深深感覺到 AI 真的發展太快速了，老人跟不上了 😢）。
    - 除了講 Blackwell 火力展示之外，還有大家都知道的 NVLink（又想到八卦，其他廠看不下去要準備推 UALink 來打它，但如果自製晶片沒辦法跟 NVIDIA 比的話可能也是功效不大）。
    - 然後下一代架構會是 Rubin，不過這應該是後年的事了（明年會是 Blackwell Ultra）。
    - [真性情台語時間](https://youtu.be/pKXDVsWZmUU?t=5357) 😄
    - 特別為 AI 資料中心的網路層推出的 Spectrum Ethernet Switch（其實就是它們之前推出的 [InfiniBand](https://www.nvidia.com/zh-tw/networking/products/infiniband/) ，這邊是直接把這個技術實作到硬體層)，因為 AI 跟以往的 Ethernet 的互動不一樣，它是在資料中心內部的高流量。
- [Physical AI](https://youtu.be/pKXDVsWZmUU?t=6139)：就是機器人啦！因為這領域真的非常不熟悉，不知道目前是怎麼進行的，不過看起來 NVidia 是針對機器人的訓練提出了完整的解決方案，訓練模型的機器（就是前面提到的架構）、機器人本身使用的晶片（也就是他們說的「Edge」，這個產品線就是 [Jetson](https://www.nvidia.com/zh-tw/autonomous-machines/embedded-systems/jetson-orin/)），以及訓練的虛擬環境 [Ominverse](https://www.nvidia.com/zh-tw/omniverse/)。

當然還有其他很多東西，只能說 AI 正在以我這種一般人難以理解的速度進化中，然而要驅動這個火車往前衝的動力，就是這些看似基礎的設備跟更新，所以在結尾的部分，黃特別以一段影片來感謝台灣的供應鏈在這波 AI 浪潮中所提供的能量，以及扮演非常重要的角色。

![](https://www.youtube.com/watch?v=80ttCfQCc_c)

看到網路上許多網友也因為這段而發表了許多不同的想法，自己也心有所感的寫下了這則短語：

![](https://bsky.app/profile/did:plc:z57tkg4b3hw7fsn47lud3kf5/post/3ktwkpi4zrsqq)

雖然有點戲謔的成分在裡面，不過我們真的是好不容易才走到這一步，台灣在這麼艱困的環境下能走到這一步，真的是大家合作努力的結果，但是最近看到國內的種種，很氣、也很無奈，其他國家都知道我們的好，為什麼我們自己不能對自己好一點呢？😢

或許這也是身為台灣人的原罪，我們就是得不斷跟這個大環境戰鬥，得不斷跌倒但是又不斷爬起來，就跟那影片一樣，如果我們能學習越來越團結，越來越懂得彼此合作，我們一定可以再繼續創造更多的可能…，**加油，台灣！**

## 在網站設計上的持續進化

ML 在自動化產生網站設計的概念，之前在 Vercel 推出 [v0.dev](http://v0.dev) 的時候就相當令人驚豔了，但是 Vercel 並不只是把它視為一個展示性的產品而已，上面提到的剛結束的 Vercel Ship 2024 裡面，也特別又提到了 v0.dev 的現況及它們對這個產品的持續改善，但除了網站之外，最近也看到一些針對行動裝置的設計，也已經看到 ML 的影子了，譬如 Expo 的即時產生手機端的元件，以及針對 Figma 的設計等，真的是沒有要停下來的意思捏！

![](https://x.com/yancymin/status/1795308932216525229)

## 這次有點落漆的 1+1 家

剛結束的 Google I/O 以及 Microsoft Build，完全不意外也是滿滿的 AI，出現的次數已經多到讓人有點厭煩了，然後很失望的也都沒什麼特別讓人驚豔的東西出現（至於為什麼說 1+1，因為有一家本來就沒抱什麼希望了 😅）

- [**Google I/O 2024 recap**](https://developers.googleblog.com/en/google-io-2024-recap-making-ai-accessible-and-helpful-for-every-developer/)
- [**Inside Microsoft Build 2024**](https://www.spiceworks.com/tech/tech-general/articles/microsoft-build-2024-highlights/)

**希望未來一年，可以直接問類 ChatGPT 的服務就可以直接幫我整理好 recap 而不再需要去找其他媒體提供的文章了*。🙏

MS 宣布的 [**Copilot+ PC](https://www.youtube.com/watch?v=5JmkWJNng2I)** 稍微有些亮點，除了內建一個專門處理 AI 的 [NPU](https://www.youtube.com/watch?v=SYpA7JpoLQM&t=1s) 晶片之外，宣布 ARM 版本的 Surface 也是有些許的驚喜（不過轉移跟後續的影響還不好說，應該短期是不會像當初 Apple 從 Intel 轉到自家 M 晶片那麼巨大吧，畢竟生態特性不太一樣）。

除了上述之外，其他就幾乎沒什麼讓我很感興趣的議題出現，不過倒是留意到一個特點，因為兩家都針對 edge 的場景，各自推出了不同的模型，[MS 的 Phi-3](https://www.ithome.com.tw/news/162479) 以及 [Google 的 Gemini Nano](https://io.google/2024/explore/c8b911cd-6c30-434f-a76e-6099f6a312d9/)，加上上述 NVIDIA 本來就有類似的產品線，看起來大廠們也都打算打 hybrid 的路線，透過 AI data center 加上用戶端，來搭配運用 AI 提供更好的體驗。

其實這現象或許也說明下一個世代可能不遠了，因 AI 而崛起的新一代巨頭會是誰呢？現有的巨頭，又有誰可能會跟不上而走上 Y! 的老路呢？這感覺比 AI 議題本身更有趣呢（惡趣味 🤣）

# **網路是個好東西**

### 下一代筆記型電腦？

看到網友轉了這個產品照之後有種豁然開朗的感覺，或許這個形式就是現階段最好的筆記型電腦的樣貌了？少了螢幕的重量，也不再被各種尺寸勒索，換上一個簡單的 AR 眼鏡，搭配現階段還是最好的鍵盤部分作為輸入裝置。

不知道大家怎麼想，不過我自己是很心動啦（前提是眼鏡的效果很好，不會有過度使用眼鏡疲憊以及重量導致穿戴不舒服的問題）

**想敗！🤩**

![](https://www.youtube.com/watch?v=eEkhCdkgeyM)

### 這是什麼神奇的 Apple Watch 外殼

永遠不要小看日本人的創造力！😆

本來以為是它們推出的小型手機，沒想到是魔改 Apple Watch，太強了啦！

![](https://www.youtube.com/watch?v=Fo0XpTj062I)

### 不能不佩服熱愛者的實作能力

想看一下儀錶板 😄

![](https://x.com/Mr_Toshi104/status/1796729956992794883)

### 希望這篇成為大家的心靈雞湯 🤘

自從年初大選落幕，新任陸續上場之後，臺灣政局就變得非常糟糕，**當然大家都知道原因，我話不想講得太重，點到這裡就好了。*（**這暗喻一出應該大家都懂* 🤣***）***

[https://www.threads.net/@chongxinrdsec1/post/C7Wjjwdv57T?xmt=AQGzWVAt33jS6GO7OBrkvtnI1Gy2nhCG2e8E1ZRga8gfH1I](https://www.threads.net/@chongxinrdsec1/post/C7Wjjwdv57T?xmt=AQGzWVAt33jS6GO7OBrkvtnI1Gy2nhCG2e8E1ZRga8gfH1I)

雖然大家都很熱情的回應了，不過看起來有些人打算硬幹到底，也完全沒要回應這麼多人民出來吶喊的聲音，或許大家也會覺得心累、無力，不過還是希望大家首要一定要先照顧好自己，如果累了、倦了，就先抽離讓自己休息一下也是沒問題的，在民主的路上大家輪流上陣！

**身為追星大叔粉，就是只有滿滿的 KPOP** 🎉

隨時補充能量是非常重要的事，希望可以帶給同為追星民主台灣人（好長）一點力量，大家加油！！

**友善提醒：這個版本的 Panorama 非常危險，觀賞前需要審慎評估，不然可能會跟世界脫離連結數分鐘至數小時不等* 😂。

![](https://www.youtube.com/watch?v=euN1m2wYCaw)

最近終於有一些好事的 [NewJeans](https://www.instagram.com/newjeans_official/)，大家也可以刷一下她們新歌的 MV，這次非常難得居然是在臺灣取景，整部 MV 誠意滿滿，刷起來讓大家看到台灣的美！（如果能等到她們來臺灣辦演唱會就更讚了 😆）

![](https://www.youtube.com/watch?v=Q3K0TOvTOno)

**但我不是追星人怎麼辦？**

沒問題，最近國內知名的遊戲開發商 - [赤燭](https://redcandlegames.com/)，最近也推出新作啦！

[Nine Sols](https://store.steampowered.com/app/1809540/_/)

不同於以往的驚悚、恐怖類型的遊戲，這次變成類魂的橫向卷軸類型（但如果你以為沒有 _ 的話就太天真了 🤣），才剛出沒多久 Steam 上面就已經是「極度好評」啦，好遊戲不玩一下嗎？把所有的憤怒都發洩到裡面的 BOSS 身上吧！（但苦手黨如我最好不要在心情不好的情況下去玩，不然會得到反效果，不但沒能紓壓反而更暴躁 😅）

而且這次它們找了[柯拉琪](https://www.youtube.com/@collage7275/videos)來合作遊戲的主題曲，超讚阿！

![](https://www.youtube.com/watch?v=4-T_O_3q5Ug)