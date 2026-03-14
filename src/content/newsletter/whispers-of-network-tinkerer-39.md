---
title: "網路黑手的呢喃 - #39"
date: "2023-12-05"
description: "It''s already the leading mobile app development framework, and I think we''re close to having the …"
tags:
  - AI
  - Deno
  - Newsletter
  - Node.js
  - Rust
  - WebAssembly
---
Deno 最近丟出的幾個有趣的東西、大 JS 走向 native 是不可避免的趨勢了嗎？Flutter 頭頭離開 Google 除了感言，還提到一些有趣的東西，以及不能少的 AI 跟網路好東西。

---

# **Web 生態圈例行更新**

### Deno 的腳步也沒有停下來 - Subhosting/Cron & one more thing

最近 Deno 也是維持它的腳步（緩步?）向前，不過除了例行性的更新之外，還圍繞自己的雲平台推出了幾個有趣的新功能，也就是這邊提到的 Subhosting & Cron。

其實一開始看到 Subhosting 本來以為是針對 self-hosting 有什麼新功能，不過後來看了介紹才知道這更是針對類 SaaS 的用戶而推出的（譬如 [Netlify cloud functions](https://www.netlify.com/platform/core/functions/) 這類的功能『*這功能的確是基於 Deno 平台的喔*😄』），能夠讓這類的平台能夠更簡單、更安全執行 3rd 的程式，想更深入的了解，可以參考[這篇 Deno 的官方文](https://deno.com/blog/subhosting-security-run-untrusted-code)。

![src: [https://deno.com/blog/subhosting](https://deno.com/blog/subhosting)](../assets/網路黑手的呢喃 #39 - Untitled.png)

src: [https://deno.com/blog/subhosting](https://deno.com/blog/subhosting)

除了上述的 Subhosting 之外，另外一項就比較針對一般的開發者了，這也是很常見的一個功能 - cron，已經加入到 [1.38](https://deno.com/blog/cron#using-deno-cron) 版本裡了，用法跟一般大家熟知的 unix cron 也是很類似 🔽

```jsx
Deno.cron("My Cronjob", "*/10 * * * *", () => {
  console.log("every 10 min");
});
```

一般 cron 的排程行為大家應該都很熟悉，不過 Deno.cron 有個更酷的地方在於，它無縫整合了自家的雲平台 Deno Deploy，所以你可以很方便直接在原有的程式裡面加上你需要跑的排程行為，這可以參考 Deno 提供的範例（[排程更新天氣資料，存到 KV，然後提供一個簡單的 API 可以取得儲存的天氣資料](https://dash.deno.com/playground/deno-cron-weather)）👍。

![src: [https://deno.com/blog/cron](https://deno.com/blog/cron)](../assets/網路黑手的呢喃 #39 - Untitled 1.png)

src: [https://deno.com/blog/cron](https://deno.com/blog/cron)

然後還有個小彩蛋（自以為😆），就是從 Newsletter 無意見看到這個看起來是測試階段的東西，搭配之後會出現的一個新指令 `deno publish` 看起來好像是 Deno 打算弄一個自用的 registry，不過一切都還不明朗的情況下，不是很確定它們這樣規劃的目的是什麼（應該不會是打算做 registry 服務吧），觀望 👀

![ src: [https://bsky.app/profile/sylee.dev/post/3kf5dlkslq62d](https://bsky.app/profile/sylee.dev/post/3kf5dlkslq62d)](../assets/網路黑手的呢喃 #39 - Untitled 2.png)

 src: [https://bsky.app/profile/sylee.dev/post/3kf5dlkslq62d](https://bsky.app/profile/sylee.dev/post/3kf5dlkslq62d)

### Node.js 21.3.0 不遠矣

雖然有許多後起的競爭者，不過 Node.js 仍然維持自己的步伐繼續邁前，在 LTS [切換到 v20 版本](https://nodejs.org/en/blog/release/v20.9.0)之後，開發版本 v21 也開始展開新一輪的工作。

[https://github.com/nodejs/node/pull/50954](https://github.com/nodejs/node/pull/50954)

不過從最近的變更可以留意到一個現象，目前 Node.js 看起來打算更大步走向 native 來改善執行的效能，從最近的 [v21.3.0](https://github.com/nodejs/node/pull/49884) 以及最近不少[核心貢獻者的更新](https://x.com/yagiznizipli/status/1731137077352202511?s=61&t=-8QfXIkAo_EJ2rtVc89xcg)中，都可以看出這個趨勢，說不定哪天全 C++ 都不意外了😆。

### pnpm 以 rust 重寫？

無意間看到這個訊息，目前已經以「快」為口號的另一個 Node.js package manager - [pnpm](https://pnpm.io/)，看來也還是不滿足現況，看到他們打算以 rust 改寫的[討論串](https://github.com/orgs/pnpm/discussions/7296)，看起來可以用 rust 改寫的 JS tooling，終究會被改寫成 rust 🤣。

![src: [https://twitter.com/pnpmjs/status/1723024342580146558](https://twitter.com/pnpmjs/status/1723024342580146558)](../assets/網路黑手的呢喃 #39 - Untitled 3.png)

src: [https://twitter.com/pnpmjs/status/1723024342580146558](https://twitter.com/pnpmjs/status/1723024342580146558)

# 這明顯是篇討戰文 #誤 #Flutter

最近看到 Flutter 的作者之一（[**Ian Hickson**](https://github.com/Hixie)）離開 Google 的消息，也一併發布了下面這篇文章，提到了一些 Flutter 以及未來的可能性。

[Hixie's Natural Log: The Future is Flutter](https://ln.hixie.ch/?start=1700627532&count=1)

雖然文中有一些部分感覺有些爭議（譬如像下面這句😅）

> It's already the leading mobile app development framework, and I think we're close to having the table stakes required to make it the obvious default choice for desktop development as well
> 

不過裡面提到下一代的網路願景也是蠻有趣的，就是不同於目前以 HTML、CSS、JavaScript 為主體而是 WASM 為主的 [**Wasm-based model](https://docs.google.com/document/d/1peUSMsvFGvqD5yKh3GprskLC3KVdAlLGOsK6gFoEOD0/edit?resourcekey=0-bPajpoo9IBZpG__-uCBE6w)，**Ian 也提出了一份草案非常詳細的描述這個願景，有興趣的開發者不妨看看。

當然這篇文章也引來不少大老的[評論](https://twitter.com/ericsimons40/status/1729263124581384297)，看到不少也認同這個趨勢，不過可能不會那麼快發生啦😆

![](https://twitter.com/ericsimons40/status/1729263124581384297)

# 跟上 buzzword!! Bet on AI 🤣

### ModCon!!

之前提過的 Swift 爸爸出來開新創的消息，雖然是針對目前正夯的 AI，不過也是順帶發表了針對 AI 開發優化的類 python 新語言 - [Mojo](https://www.modular.com/max/mojo)。時隔沒多久，它們居然已經有自家的發表會了，只能說 AI 產業真的是一日千里。😅

剛結束的 ModCon 上也提到了不少新功能跟合作的消息，其中應該就屬這個 [**MAX**](https://www.modular.com/max) 的開發平台了，當然不意外就是針對 AI 開發提供更多、更強的開發工具，這從它的命名就可以看出來了。

> [**Modular Accelerated Xecution (MAX)**](https://www.modular.com/max): An integrated, composable suite of products that simplify your AI infrastructure and give you everything you need to deploy low-latency, high-throughput generative and traditional inference pipelines into production.
> 

詳情可以看[官方的公告](https://www.modular.com/blog/key-announcements-from-modcon-2023)，或是直接看[當天發表會錄影](https://www.youtube.com/watch?v=VKxNGFhpYQc)。現在各雲端大廠也都各自推出自己面向 AI 的開發工具，看來這場圍繞著 AI 的新戰場才剛開始而已。

![src: [https://twitter.com/Modular_AI/status/1731737711138967854](https://twitter.com/Modular_AI/status/1731737711138967854)](../assets/網路黑手的呢喃 #39 - Untitled 4.png)

src: [https://twitter.com/Modular_AI/status/1731737711138967854](https://twitter.com/Modular_AI/status/1731737711138967854)

### Portable LLM

前陣子由 Mozilla 丟出來的這個專案，立刻就吸引了不少人的目光，當然跟 buzzword 有關係是其一，不過第二是它能夠把 LLM 打包成一個可執行檔，所以你可以在下載之後方便在本地就跑起來，非常方便。

[一個檔案直接跑起大型語言模型的 llamafile](https://blog.gslin.org/archives/2023/12/01/11498/一個檔案直接跑起大型語言模型的-llamafile/)

### 類 HeyGen 開源版

有大大用了開源方案弄出下列這個類 #[HeyGen](https://www.heygen.com/) 的效果，覺得可怕，之後還能相信我們看到、聽到的東西嗎？😅

![](https://twitter.com/Gorden_Sun/status/1724697614560686463)

### LLM 入門指引

網路真的是充滿資源阿，這邊有網友整理，由 OpenAI 成員主講介紹何謂 LLM，能夠讓你對於目前火紅的 Machine Learning 的基礎與運作，有更深入的認識。

![](https://twitter.com/dotey/status/1728959646138880026)

# **網路是個好東西**

### 就為了這個 #GTA 🙌

看來這次也換成男女雙主角了，然後還要等到 2025 😢😅

![](https://youtu.be/QdBZY2fkU-0?si=oRzswsOlMGW0_03j)

### 隨時做好翻去日本的打算 #大誤

![](https://x.com/PevenC/status/1730810763189907865?s=20)

### 現在個人網站的門檻越來越高了😅

這位 [Raycast](https://www.raycast.com/) DX 最近改寫了他的個人網站，非常酷！他也寫了一篇[專文](https://ped.ro/writing/website-refresh-2023)來仔細描寫完整的過程以及細節（有設計天分的人真好啊🥹)。

![](https://twitter.com/peduarte/status/1729126249870586221)

### 原來我有無堅不摧的盔甲😅

![](https://twitter.com/Plant_poisoning/status/1727988329919221820)

### 龍族教義2!!

大家趕快把假請好 #誤 #20240322

![](https://www.youtube.com/watch?v=Uv5Rumu7GAk)

### 原來宅宅自帶防護罩😆

![](https://twitter.com/jun2ralife/status/1729678348551422366)