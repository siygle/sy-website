---
title: "網路黑手的呢喃 - #17"
date: "2022-07-25"
description: "橫空出世的 Bun、Blog for hacker、持續進化的 Node.js/Deno/ECMAScript"
tags:
  - Deno
  - Javascript
  - Newsletter
  - Node.js
---
> 橫空出世的 Bun、Blog for hacker、持續進化的 Node.js/Deno/ECMAScript
> 

---

## 橫空出世的 Bun

最近 JS 圈的大熱門應該就是這個了吧 😎

繼 Node.js/Deno/Cloudflare Workers 之後又出現一個新的 JS runtime - [Bun](https://bun.sh/)。而且看目前放出的 benchmark 比起前輩又威猛了許多，一瞬間吸引了許多開發者的眼球。

![](https://twitter.com/jarredsumner/status/1544460933753229312)

很多人可能看到效能對比就嗨了，但事情可能沒這麼簡單。這邊也有其他開發者跑了更複雜一些的測試，效能結果就完全不一樣了（但後來 Bun 作者也有跑來回應這個問題，他說這個是 [Bug](https://twitter.com/jarredsumner/status/1546928793708740608) 造成的），評比這種東西真的參考用就好 😆

![](https://twitter.com/undefined_void/status/1546733785730846721)

當然同類型的東西一定會被拿來比較，然後下方這種引戰文（誤）一定會出現。不過也因為這個讓其中一位 Deno 開發者來回應關於效能評比的問題，簡單說用一個簡單的 HTTP  Request 這類過於簡單的行為，來說 A 比 B 好並沒有什麼太大的意義。

![](https://twitter.com/yusukebe/status/1545979843653025792)

不過對於 Bun 還是有很多期待的，走了一條跟一般 JS Runtime 不同的路：不是基於一般常見的 v8 反而是  [JavaScriptCore](https://github.com/WebKit/WebKit/tree/main/Source/JavaScriptCore)（就是 Webkit 用的），然後作者是用 [Zig](https://github.com/sponsors/ziglang) 這個也是非常有趣的語言開發的（有人形容它是 modern C 😄）。

然後也超級佩服作者一個人就可以弄出這麼大規模的專案，它不單是 JS runtime 而已，還包含了 bundler/transpiler/pacakge manager，除此之外，它還已經作到對 Node.js 相當程度的相容，包含 N-API 以及 core module，開發效率真的超強！

期待 Bun 後續的發展 😎

![](https://twitter.com/yihong0618/status/1546654973408464896)

*額外推一下 Zig，感覺是個有趣的東西，找時間玩玩看 ;p*

## Blog for hacker 😆

![](https://twitter.com/siygle/status/1548876048141795329)

無意間看到這個酷酷的東西上了 hacker news，雖然提供 Blog 相關功能的服務真的是一大票，不過它的特點是透過 SSH & file 的結構來部署 & 管理你的 Blog 內容，超級 terminal-friendly，不愧對它的 slogan：a blog platform for hackers！

## 持續進化中的 Deno

Deno 也是我最近很感興趣的專案，所以最近眼球都經常注意與它相關的東西，下面這個是 Deno 本家最近釋出的一個小工具 - [wasmbuild](https://github.com/denoland/wasmbuild)。它是一個陽春的小工具，能夠快速產出 rust -> wasm -> Deno 的開發所需的一些檔案文件，也順帶幫你作一些優化的動作。

![](https://twitter.com/DavidSherret/status/1542560870613635078)

還有新釋出的 [1.24](https://deno.com/blog/v1.24) 版本，可以看到近期官方把不少重心放在效能改善的事上。用 swc 取代 tsc 來提升編譯 TS 的速度，還有增加一些快取來省掉不必要的重編行為、FFI 明顯的效能改善。

不過看到隔壁家（Bun）也都做了 Node.js 相容，不知道 Deno 這邊有沒有機會也加速它的步伐，如果能整合龐大的 npm ecosystem 以及 Node.js core module 的話，Deno 的可用性應該可以大幅增加才是，切敗！🤞🤞

![](https://twitter.com/deno_land/status/1550149537481854976)

## Custom ESM loaders

最近釋出的 Node.js 18.6.0 版本裡面，新增加了 [ESM loader API](https://nodejs.org/api/esm.html#loaders)，一開始看也不知道這個是要幹嘛的，不過 Node.js 的文件裡面很貼心的放上了相關的說明文。🤣

[**Custom ESM loaders: Who, what, when, where, why, how**](https://dev.to/jakobjingleheimer/custom-esm-loaders-who-what-when-where-why-how-4i1o)

簡單的說就是可以讓你自定義 module loader 的行為，所以原本可能需要一些 *transpile*r 才能跑起的專案，現在透過這個新功能，就可以直接在 Node.js 原生處理，不用再多安裝其他的依賴。所以你可以[抽換 tsc 成 esbuild](https://github.com/nodejs/loaders-test/tree/HEAD/typescript-loader)、[讀取 css](https://github.com/JakobJingleheimer/demo-css-loader)，甚至是[像 Deno 一樣讀取遠端的模組](https://github.com/nodejs/loaders-test/tree/HEAD/https-loader)，可以透過這個新功能實作了。

![](https://twitter.com/nodejs/status/1547330856280285184)

## ECMAScript 更新

大家都知道 ECMAScript 的規範是不斷持續進化的。透過工作組定期的會議，在經過一連續的審核之後，最終就會納入 ECMAScript 的之中，所以透過注意開會結果，就大概可以知道哪些新功能可能在不久的將來就會在各家 JS runtime 裡面實作。

下面就是最近剛審核後有晉級的各個提案，也可以直接看[整理好的版本](https://dev.to/hemanth/updates-from-the-91th-tc39-meeting-779)。

![](https://twitter.com/robpalmer2/status/1550294474357628928)

## 網路是個好東西

單純開車兜風真的是滿紓壓的一件事，有錢開真車，沒錢開美卡、歐卡也是很不錯🤣

但是模擬版的就各顯神通了，像下方這個無意間看到的強者改裝版本，真的快跟真車差不多了吧，這世界上真的處處是強者。🙌

![](https://www.youtube.com/watch?v=fxrhAhl2zEc)