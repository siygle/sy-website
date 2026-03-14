---
title: "網路黑手的呢喃 - #35"
date: "2023-09-05"
description: "**Astro Studio is a globally-distributed edge data platform, built for Astro.** Connect any new or …"
tags:
  - Deno
  - Google
  - Javascript
  - Newsletter
  - Rust
  - bun
---
各 JS 生態還是不斷推進中、愛惜生命真的要遠離 G 家產品、Astro 3.0 - 前端框架新競爭者？1Password 開源了自家的 Passkey 實作，以及源源不絕的網路好東西👍。

---

# 大 JS 時代還是要繼續

### Deno 跟上腳步支援 .env 讀取

不知道是不是因為 Node.js 跟 Bun 都已經有類似的功能了，之前雖然透過 [std](https://deno.land/std@0.201.0/dotenv/mod.ts) 也是很容易做到，不過目前看起來可以直接透過 `--env-file` 做到原生支援啦！

[https://github.com/denoland/deno/pull/20300](https://github.com/denoland/deno/pull/20300)

不過之前說年中要上 2.0，現在第三季都快要過了耶，不知道是怎樣了😅（隔壁棚的 Bun 都要 1.0 了）

### Deno 考慮加上對 wasm 模組的支援

加上原生支援讀取 wasm 的功能，看到 Deno 好像也開始注意到 webassembly 的崛起，本來有點（莫名的）興奮，結果看到後面這張票被關掉了😓

[https://github.com/denoland/deno/pull/14485](https://github.com/denoland/deno/pull/14485)

![Untitled](../assets/網路黑手的呢喃 #35 - Untitled.png)

不過看起來好像是有可能會直接在 v8 那邊調整，看起來可以期待一下。

### Node.js 又出現 websocket 的提案了

說又是我記得這個之前也被提出過，不過之前[沒有通過](https://github.com/nodejs/node/issues/19308)，這次又被提出連帶實作跟[完整的陳述](https://github.com/nodejs/node/issues/19308#issuecomment-1697018777)，看起來應該有機會？是說 Node.js core 也逐漸增加中，莫非也是受到競品的影響。😆

[https://github.com/nodejs/node/pull/49478](https://github.com/nodejs/node/pull/49478)

### “ESM by default” mode

ESM 之於 JS，大概跟 python2 問題差不多吧 😅

雖然不少開發者都鼓吹 [ESM first](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)，不過還是有很多 [CommonJS](https://bun.sh/blog/commonjs-is-not-going-away) 的堅定忠實的支持者，這個問題看起來短時間也沒有解決的可能，更多的都只能在工具、runtime 層級來處理。

最近看到 Node.js 這邊也有類似的討論出現，希望切換預設使用 ESM 模式的可能方式 以方便使用在更多場景而不受至於 `package.json` 的參數。

[https://github.com/nodejs/node/issues/49432](https://github.com/nodejs/node/issues/49432)

### TypeScript 又準備進版了 - 5.3

伴隨著不斷進化的 ESMCScript，TypeScript 也是不斷更新加上漸趨成熟的功能跟語法糖，當然也包含了不少的修正與優化，有興趣的開發者可以看這篇整理好的文章 - [**TypeScript 5.3 First Look](https://www.totaltypescript.com/typescript-5-3)。**

![src: [https://twitter.com/mattpocockuk/status/1694680319532609935](https://twitter.com/mattpocockuk/status/1694680319532609935)](../assets/網路黑手的呢喃 #35 - Untitled 1.png)

src: [https://twitter.com/mattpocockuk/status/1694680319532609935](https://twitter.com/mattpocockuk/status/1694680319532609935)

裡面自己覺得比較有趣的是 `throw expressions` 跟 `isolated Declarations` ，[throw expression](https://github.com/tc39/proposal-throw-expressions) 顧名思義就是提供更彈性的 throw 使用方式。

```jsx
// 譬如像
const id = searchParams.id || throw new Error("id is required");

// 或是
function save(filename = throw new TypeError("Argument required")) {
}

// 更多可以參考 Proposal repo
// https://github.com/tc39/proposal-throw-expressions#proposal
```

然後 isolated Declarations 則是針對優化而提出的方案，這並不是 ESMAScript 的提案，而是[針對 TS 優化而提出的](https://github.com/microsoft/TypeScript/pull/53463)，有點像是為了達到更快的型別檢查及編譯的速度，定義了更嚴格的規定（但目前看 [PR](https://github.com/microsoft/TypeScript/pull/53463) 內容，這增加的規則也是非常多，不知道最終通過的話會不會對現有開發習慣有很大的影響😅）

**優化後的結果比較如下，頗威！*

![Untitled](../assets/網路黑手的呢喃 #35 - Untitled 2.png)

### Bun 里程碑 - 1.0!

終於也要達標的 Bun，即將在 9/7 推出 1.0 版本啦！不知道他們會不會也走上跟對手一樣，推出自家開發平台這類更多搭配的服務，或許可以期待下他們的下一步🫣。

![src: [https://bun.sh/1.0](https://bun.sh/1.0)](../assets/網路黑手的呢喃 #35 - Untitled 3.png)

src: [https://bun.sh/1.0](https://bun.sh/1.0)

# 玩火自焚的 G 社

![src: [https://twitter.com/tzangms/status/1697050631033557463](https://twitter.com/tzangms/status/1697050631033557463)](../assets/網路黑手的呢喃 #35 - Untitled 4.png)

src: [https://twitter.com/tzangms/status/1697050631033557463](https://twitter.com/tzangms/status/1697050631033557463)

Google 關掉服務已經是一點都不意外的事了，但是對於他們不斷挑戰消費者的心，還是覺得非常敬佩（反串要註明🔥），自從上次無預警把使用者眾的 Domains 關掉之後，這次出現一個更誇張的作法（如上🔼）

近年來根本推不出一個受大眾市場接受的服務，身為老大哥的 G 社應該顏面盡失，不過除了消費者市場之外，他們的雲端服務（GCP）品質也不怎麼樣🤷。

![src: [https://twitter.com/zuhayeer/status/1696409759627551025](https://twitter.com/zuhayeer/status/1696409759627551025)](../assets/網路黑手的呢喃 #35 - Untitled 5.png)

src: [https://twitter.com/zuhayeer/status/1696409759627551025](https://twitter.com/zuhayeer/status/1696409759627551025)

在宣布 Domains 即將關閉的時候，就寫過一篇抒發心情的抱怨文😅 - [**令人錯愕的Google Domains消息**](https://chat.sylee.dev/2023/06/22/google-you-better-not-penny-wise-and-pound-foolish)，不過以一位消費者角度來看，我真的覺得 Google 是在玩火，等到沒人把你們的產品當一回事的時候，就恭喜你們成為下一個 Y! 啦。👏

# 前端框架又來新競爭者？Astro

雖然前端框架出現新東西一點都不算新奇的事了😅，不過最近 Astro 默默也是爬到 3.0 的版本，也一併丟出了不少東西。

我自己是沒實際玩過，不過看起來更貼近靜態內容產出的框架（跟 Gatsby 類似?），所以如果你目標是大型的網路服務的話，可能不太適合用 Astro 來開發，不過如果是內容呈現的目的，看起來 Astro 提供一個很舒服的開發環境可以讓你快速搭建起來。（這邊有強者大火力展示的幾個範例：[Shopofy playlist](https://github.com/igorm84/spotify-astro-transitions)、[Soundboard](https://github.com/bholmesdev/astro-soundboard)）

![src: [https://twitter.com/astrodotbuild/status/1696900204853698767](https://twitter.com/astrodotbuild/status/1696900204853698767)](../assets/網路黑手的呢喃 #35 - Untitled 6.png)

src: [https://twitter.com/astrodotbuild/status/1696900204853698767](https://twitter.com/astrodotbuild/status/1696900204853698767)

不過有看到一個更有趣的東西，Astro 團隊其實背後有一併成立一間[新創公司](https://astro.build/blog/the-astro-technology-company/)（也已經取得投資，這部分有興趣可以參考這篇詳細的介紹 - [**Astro 的正式發佈給前端界帶來了什麼？**](https://www.readfog.com/a/1677476109768298496)）

在宣布 3.0 釋出的同時，他們也放出了另一項服務 - [Astro Studio](https://studio.astro.build/)，預計是 2024 會推出，所以目前也還不確定提供什麼，不過根據他們的描述：

> **Astro Studio is a globally-distributed edge data platform, built for Astro.** Connect any new or existing Astro project to a dedicated hosted database in seconds. It's fast everywhere, secure, and unbelievably easy-to-use.
> 

應該也是提供針對 edge-computing 的資料庫服務，可以無縫接上自己的 Astro 專案來使用（當然你應該還是可以選擇使用自己的資料庫服務，這個不會是強制的）。

![src: [https://twitter.com/astrodotbuild/status/1697649020326617436](https://twitter.com/astrodotbuild/status/1697649020326617436)](../assets/網路黑手的呢喃 #35 - Untitled 7.png)

src: [https://twitter.com/astrodotbuild/status/1697649020326617436](https://twitter.com/astrodotbuild/status/1697649020326617436)

# 1Password 支援 Passkey，還給你整套實作的開源

*這的確很像 1Password 的風格，真不愧是 security 服務商的扛靶子。*🙌

[https://github.com/1Password/passkey-rs](https://github.com/1Password/passkey-rs)

[Passkey](https://www.ithome.com.tw/news/156706) 是最近幾個大廠積極推動的下一代的密碼解決方案，在 Google 帶頭之下，也開始有許多[其他](https://help.shopify.com/en/manual/your-account/logging-in/passkeys)的[服務](https://docs.github.com/en/authentication/authenticating-with-a-passkey/about-passkeys)也[開始支援](https://newsroom.paypal-corp.com/2023-03-23-Secure-Payments-with-Passkeys-Is-Now-Available-on-PayPal-for-Google-Android-Devices) Passkey 登入。身為密碼管理器的 1Password 當然也在近期[正式支援 Passkey](https://1password.com/zh-tw/product/passkeys) 了。不過除了支援 Passkey 的使用之外，它們在最近也放出了這篇技術文章，說明他們的實作方式以及為什麼不使用現成的一些函式庫，而要改自主開發的原因，值得一看！

![src: [https://twitter.com/1Password/status/1696596584559956004](https://twitter.com/1Password/status/1696596584559956004)](../assets/網路黑手的呢喃 #35 - Untitled 8.png)

src: [https://twitter.com/1Password/status/1696596584559956004](https://twitter.com/1Password/status/1696596584559956004)

# 網路是個好東西

### 這太真實我不敢看😅

![](https://twitter.com/vikingmute/status/1698305267858031037)

### 這世界需要多一些這種大大

![](https://twitter.com/al6wul4wul4/status/1687825049792008193)

### 幸好我隨身攜帶行動電源 #誤

![](https://twitter.com/cornguo/status/1688403849470758912)

### 平常練習歐卡是不是終於可以派上用場了！

![](https://twitter.com/htchien/status/1690301437669167105)

### 非常適合我這個窮人😅

![](https://twitter.com/lvwzhen/status/1697436312125747297)

### 原來蠟筆小新也是勵志類😄

![](https://twitter.com/youhaveagift/status/1697873938737689062)