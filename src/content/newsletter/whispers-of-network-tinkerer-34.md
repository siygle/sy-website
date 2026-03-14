---
title: "網路黑手的呢喃 - #34"
date: "2023-08-05"
description: "Web Environment Integrity (WEI) is a new API proposal that introduces a website trust mechanism tha…"
tags:
  - Cloud
  - Google
  - Javascript
  - Newsletter
  - SQLite
  - WebAssembly
  - Winglang
---
Google 你能不能專心把自己本務做好不要亂搞阿！SQLite 在雲端服務漸露頭角、Winglang 拿到首輪投資、JS ecosystem 持續進化、近期無法忽略的 Machine Learning 以及終於反客為主的網路好東西🤣

---

# Google又想亂搞了😠

最近因為 AI 熱潮跟馬老闆三不五時的 Drama，大家的眼球都被吸引可能沒留意到一些奇怪的事默默進行中。沒錯自從大家再也不相信 Don’t be evil 的主人公之後，它也是不避諱開始運用它目前的優勢領域來作一些奇怪的事。

### [**Web Environment Integrity**](https://github.com/RupertBenWiser/Web-Environment-Integrity/blob/main/explainer.md)

最近 Google 打算在 Chrome 上支援上述這個名為「網路環境的完整性」的新功能，那到底這個功能是打算做甚麼呢？

> Web Environment Integrity (WEI) is a new API proposal that introduces a website trust mechanism that **allows websites to evaluate the authenticity of devices and network traffic on clients (browsers) and block fake or insecure interactions**.

[Browser developers push back on Google's “web DRM” WEI API](https://www.bleepingcomputer.com/news/google/browser-developers-push-back-on-googles-web-drm-wei-api/?__cf_chl_tk=L0S_61wQabEWDbT8_w1k9exqLRrhZtuUfY8ELHdwsjw-1691085068-0-gaNycGzNDLs)
> 

它提供網站擁有者，能透過這個 API 了解網站的使用者的真實性，並且能主動拒絕潛在不安全的對象的連線。這看起來想是要針對爬蟲或 bot 的一些不正常行為的安全反制，目前在 Android 平台上也有類似的 [Play Integrity API](https://developer.android.com/google/play/integrity) 的實作，可以讓開發者透過這個功能，檢查用戶設備是不是已取得 root 的權限，若是則阻擋正常執行。

看起來很像不錯的功能，是吧！能夠讓開發者、web app 擁有者能排除不正常的用戶，譬如遊戲常見的 bot，或是網頁爬蟲之類的行為。

但是諸多瀏覽器開發者就跳出來質疑這項提案背後可能帶來更多的問題。諸如 [Brave](https://twitter.com/BrendanEich/status/1684561924191842304)、[Mozilla](https://github.com/mozilla/standards-positions/issues/852#issuecomment-1648820747)，以及 [Vivaldi](https://vivaldi.com/blog/googles-new-dangerous-web-environment-integrity-spec/) 都發出了反對的聲音。原因不在乎就是這種限制的手段，與網路呈現的開放性背道而馳。而且，它的[實作機制有一部分是要向第三方換取 token 的行為](https://github.com/RupertBenWiser/Web-Environment-Integrity/blob/main/explainer.md#how-it-works)，也就是圖中的 `Attestation API` ，但是有趣的是「誰」可以當這個第三方，那它又是基於什麼規則來判定？用戶有權力可以拒絕嗎？還是所有不願意介接這個 API 的都會被視為「不正常的使用者」呢？這種大黑箱的作法，雖然提案中宣稱不會有惡意的用途，但企業的說法還是聽聽就好。

（*其實還有另一個好處是，越能確保用戶端是「正常的使用者」，對於廣告營收為主的 Google 當然更好。）*

覺得網路環境還是不要讓企業佔據太大的聲量比較好，之前的 MS 之於 IE，到目前的 Google 之於 Chrome，在 firefox 影響力衰退的現在，又走回了企業主導的環境。正如 Vivalid 的開發者在文章開頭寫的那段話一樣讓人覺得無奈又悲哀：

> Google seems to love creating specifications that are terrible for the open web and it feels like they find a way to create a new one every few months.
> 

**延伸：**

- [Unpacking Google’s new “dangerous” Web-Environment-Integrity specification](https://vivaldi.com/blog/googles-new-dangerous-web-environment-integrity-spec/)
- [Google’s nightmare “Web Integrity API” wants a DRM gatekeeper for the web](https://arstechnica.com/gadgets/2023/07/googles-web-integrity-api-sounds-like-drm-for-the-web/)
- [Google 公佈 Web Integrity API 草案，Mozilla 反對](https://blog.desdelinux.net/zh-TW/%E8%B0%B7%E6%AD%8C%E7%99%BC%E5%B8%83%E4%BA%86-Mozilla-%E5%8F%8D%E5%B0%8D%E7%9A%84-Web-%E5%AE%8C%E6%95%B4%E6%80%A7-API-%E8%8D%89%E6%A1%88/)

# Make SQLite great again!

*又是這個芭樂標題* 😅🙇‍♂️

又看到一個拿 SQLite 作為儲存方案的雲端服務商了，就是之前也曾經提過的 [Fermyon](https://www.fermyon.com/) 這間專注於提供 WebAssembly 遠端服務方案的新創公司。如果大家還有印象的話，它們有自主開發一套 Serverless with WebAssembly 的框架 - **Spin**。

[https://github.com/fermyon/spin](https://github.com/fermyon/spin)

最近它們又釋出了一個新功能，就是本篇提到的基於 SQLite 的後端儲存方案。如果稍微看過它的[文件](https://developer.fermyon.com/spin/sqlite-api-guide)，不知道大家會不會有種既視感 😎。沒錯！就是之前介紹過的 Deno KV 啦，不過它直接選擇走 RMDB 這步也是很聰明，比起 KV 的資料格式可以做到更多的事。另外，它也跟 Deno KV 一樣預設提供本地端的整合（當然是用 SQLite），然後開發之後直接無痛部署到雲端上。

其實看到它採用 SQLite 又想起另一個最近注意到，也是把 SQLite 搬到 Edge Computing 上的一家新創公司 - [Turso](https://turso.tech)，結果看到後來發現原來 Fermyon 就是跟 Turso 合作（所以部署上雲端後就是走 Turso 的服務） #沒想到尷尬的竟然是我 🤣。

![Untitled](../assets/網路黑手的呢喃 #34 - Untitled.png)

**Turso** 其實也是一間很酷的新創，正如前面提到的它提供就是適用於 Edge Computing 場景的 SQLite 服務。不過它有兩個很特別的地方，第一個是它並不是直接用 SQLite 而且 folk 自家版本 - [libSQL](https://github.com/libsql/libsql)，更易於改造成適合更多場景，也利於開源生態的回饋。

[https://github.com/libsql/libsql](https://github.com/libsql/libsql)

另一個它提供了一個非常強大的 [CLI](https://docs.turso.tech/reference/turso-cli) 工具，幾乎所有的設定都可以透過它來執行，非常方便！

這樣算上原本已經拿 SQLite 來改造的 [Cloudflare D1](https://blog.cloudflare.com/zh-tw/introducing-d1-zh-tw/)，又多了幾個 SQLite 的服務，會不會之後 RMDB 的版圖會不會改變了呢 😄

# Winglang真的長翅膀啦🤣

上一篇才剛提過的一個有趣的服務 - [Winglang](https://www.winglang.io/)（還沒聽過的話可以跳轉[前篇](https://chat.sylee.dev/2023/07/05/%E7%B6%B2%E8%B7%AF%E9%BB%91%E6%89%8B%E7%9A%84%E5%91%A2%E5%96%83-33#c346f4992ff24831994ca4c28061aa8d)😄）。最近看到它們已經[拿到投資的消息](https://techcrunch.com/2023/07/18/wing-cloud-is-building-an-open-source-unified-cloud-programming-language/)，另外一併它們也公布了（應該是）未來的方向與計畫 - Wing Cloud。

![Untitled](../assets/網路黑手的呢喃 #34 - Untitled 1.png)

> **So what is Wing Cloud?** It is a new kind of *abstract cloud*. It doesn’t involve data centers, machines, or provisioning engines. Instead, it’s a layer that enables builders to harness this general-purpose computing platform through a programming and operational model that unifies both infrastructure and application, and works across all cloud providers and services.

[https://www.winglang.io/blog/2023/07/18/wing-cloud-launch](https://www.winglang.io/blog/2023/07/18/wing-cloud-launch)
> 

![Untitled](../assets/網路黑手的呢喃 #34 - Untitled 2.png)

原本可能會以為它們又是推一個自家的雲端服務，不過並不是這樣（其實只有我這樣想而已🤣），它們的目前非常明確，就是要提供一個抽象層的雲端開發工具，讓開發者可以跨平台、簡單上手，以及方便進行開發與除錯的一系列相關的開發者工具。更詳細的內容不妨可以瀏覽一下[官方說明文章](https://www.winglang.io/blog/2023/07/18/wing-cloud-launch)。

如果有看過前文的應該已經稍微了解它的功能，目前還在開發初期，所以雖然展示的成果蠻讓人驚豔的，不過距離能符合稍具規模的網路服務，可能還需要實際案例的檢驗以及相關工具的補齊。有興趣的可以保持著樂觀，期待它們後續的發展。😎

# 持續進化的泛JS生態

### Node.js 也終於要內建讀取 .env 的功能了🎉

細節可以看[這邊](https://github.com/orgs/nodejs/discussions/44975)，這應該是本地開發幾乎一定會用到的功能 - 讀取環境變數的檔案，現在終於要加到 Node.js 原生支援了（之前大家應該都是用 [dotenv](https://github.com/motdotla/dotenv) 來支援這個需求的吧），不知道是不是因為看到隔壁棚 Bun 一開始就[支援這個功能](https://bun.sh/guides/runtime/set-env)。🤣

![src: [https://github.com/nodejs/node/pull/48890](https://github.com/nodejs/node/pull/48890)](../assets/網路黑手的呢喃 #34 - Untitled 3.png)

src: [https://github.com/nodejs/node/pull/48890](https://github.com/nodejs/node/pull/48890)

### Bun 也默默要走到 1.0 了

另一邊的 Bun 也是維持它非常高效的開發效率，目前也已經宣布即將於九月釋出它的 [1.0](https://bun.sh/1.0) 版本。除了[某些觀點不太一樣](https://chat.sylee.dev/2023/07/05/%E7%B6%B2%E8%B7%AF%E9%BB%91%E6%89%8B%E7%9A%84%E5%91%A2%E5%96%83-33#db6e2a0fcc5a4b1a9b8d32456e787fb1)之外，Bun 跟 Deno 的走向也是非常類似，不知道會不會也會推自家的服務？

![src: [https://bun.sh/1.0](https://bun.sh/1.0)](../assets/網路黑手的呢喃 #34 - Untitled 4.png)

src: [https://bun.sh/1.0](https://bun.sh/1.0)

### Deno 1.36，2.0 還在等 😅

遲遲等不到 2.0 的 Deno，也還是持續進行它優化以及 Node.js 生態相容的工作。有留意到 ry 會在十月到[日本參加一場研討會](https://yumenosora.connpass.com/event/290309/)，不知道有沒有機會在這之前看到 2.0 面世。😄

![ref: [https://twitter.com/deno_land/status/1687166295723163667](https://twitter.com/deno_land/status/1687166295723163667)](../assets/網路黑手的呢喃 #34 - Untitled 5.png)

ref: [https://twitter.com/deno_land/status/1687166295723163667](https://twitter.com/deno_land/status/1687166295723163667)

# Buzzword: AI

### 實用小工具 - IELTS作文評分

感覺好像又有一塊市場又要被挑戰了😅

![src: [https://twitter.com/ProgramerJohann/status/1686352341279408129](https://twitter.com/ProgramerJohann/status/1686352341279408129)](../assets/網路黑手的呢喃 #34 - Untitled 6.png)

src: [https://twitter.com/ProgramerJohann/status/1686352341279408129](https://twitter.com/ProgramerJohann/status/1686352341279408129)

### 越來越多針對 AI 的服務出現了

最近剛拿到[投資](https://twitter.com/nikitabase/status/1686770622372941824)的 NEON，也推出跟 [AI](https://neon.tech/ai) 相關的功能了，這主要是基於之前它們釋出的 [pg_embedding](https://neon.tech/blog/pg_embedding-on-disk-hnsw-index) 的 Postgres 擴充。為什麼說越來越多，前篇也提過的 Vercel 也有一個相同名稱的[服務](https://sdk.vercel.ai/docs)😄（不過當然功能是完全不一樣的）。

![src: [https://twitter.com/nikitabase/status/1687168705032245250](https://twitter.com/nikitabase/status/1687168705032245250)](../assets/網路黑手的呢喃 #34 - Untitled 7.png)

src: [https://twitter.com/nikitabase/status/1687168705032245250](https://twitter.com/nikitabase/status/1687168705032245250)

### 又一個因為 AI 崛起的受害者 - Stack Overflow

雖然還沒到雪崩式下滑，但是也是蠻慘的😓

![[https://observablehq.com/@ayhanfuat/the-fall-of-stack-overflow](https://observablehq.com/@ayhanfuat/the-fall-of-stack-overflow)](../assets/網路黑手的呢喃 #34 - Untitled 8.png)

[https://observablehq.com/@ayhanfuat/the-fall-of-stack-overflow](https://observablehq.com/@ayhanfuat/the-fall-of-stack-overflow)

### OpanAI 終於準備推出 Android app 了，次等公民真的不是叫假的 😢

![ref: [https://twitter.com/OpenAI/status/1682480558545461249](https://twitter.com/OpenAI/status/1682480558545461249)](../assets/網路黑手的呢喃 #34 - Untitled 9.png)

ref: [https://twitter.com/OpenAI/status/1682480558545461249](https://twitter.com/OpenAI/status/1682480558545461249)

# 網路是個好東西

### 真的是好辦法🤣

身為老人的建言，真的不要仗著年輕過度消耗身體，它有一天會狠狠地討回來。學會在有限的時間內把事做好才是真的有效率。

![src: [https://twitter.com/cloudwu/status/1687374069270994944](https://twitter.com/cloudwu/status/1687374069270994944)](../assets/網路黑手的呢喃 #34 - Untitled 10.png)

src: [https://twitter.com/cloudwu/status/1687374069270994944](https://twitter.com/cloudwu/status/1687374069270994944)

### 好酷的時鐘

這個製作成本應該不低😅

![](https://twitter.com/tyomateee/status/1687101581471412224)

### 哪裡可以買到這個

我真的需要這個酷酷的東西😆

![](https://twitter.com/SawyerMerritt/status/1684747747868467201)

### 我也好想有這筆錢😢

**#有錢就好了**

![](https://twitter.com/ssrna/status/1678416017662328839)

想看本人說這段話可以跳轉[這裡](https://www.youtube.com/watch?v=e1updjrH7iU)！😆

### 這樣開會壓力好大

Shopify有個內部工具，會把每個會議標上對應的價格，如此它們就可以知道透過有需要的開會，或取消不必要的會議，可以替公司省下多少錢。

不過轉個角度想，這樣開會壓力好大阿🤣

```jsx
*A：…………*

*B：你已經浪費大家 $50 元了。*🔥
```

![](https://twitter.com/petergyang/status/1679130177819881475)

### 我絕對不知道這是什麼意思😅

![](https://twitter.com/iammemeloper/status/1683562191566536708)

### 這真的太猛了，樂高時鐘！

[ref: [https://twitter.com/ProductHunt/status/1678830317283704832](https://twitter.com/ProductHunt/status/1678830317283704832)](https://www.youtube.com/watch?v=GUdlSYC1cCE)

ref: [https://twitter.com/ProductHunt/status/1678830317283704832](https://twitter.com/ProductHunt/status/1678830317283704832)