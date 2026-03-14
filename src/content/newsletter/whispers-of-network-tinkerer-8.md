---
title: "網路黑手的呢喃 - #8"
date: "2022-02-23"
description: "靜態語言持續走入 JS 工具鏈、終於有原生 fetch 了！npm/deno/express 都有新東西持續出現呢😎"
tags:
  - Golang
  - Newsletter
  - Node.js
  - Rust
---
> 靜態語言持續走入 JS 工具鏈、終於有原生 fetch 了！npm/deno/express 都有新東西持續出現呢😎
> 

---

## Rewrite tsc with Go!

[https://twitter.com/robpalmer2/status/1486023748708966411](https://twitter.com/robpalmer2/status/1486023748708966411)

***沒有要戰語言 😆***

swc 的作者最近打算開始優化 typescript 中型別檢查的工具（tsc），然後目前決定用 Go 來實作（他也因此寫下這篇文章，解釋他為什麼做出這個選擇），看來用靜態語言重寫 JS 工具鏈的趨勢還會持續下去呢 😄

## Fetch 終於加入 Node.js 原生支援囉！

[https://twitter.com/newsycombinator/status/1488512759025315841?t=zh_G4UoaW-o4bWhl4w2i3g&s=19](https://twitter.com/newsycombinator/status/1488512759025315841?t=zh_G4UoaW-o4bWhl4w2i3g&s=19)

就說有競爭就是好事，自從 deno 崛起之後，感覺 Node.js 這邊也是變得積極許多。終於也跟著腳步，納入了 [fetch](https://github.com/nodejs/node/pull/41749) 的支持，這樣對第三方的依賴應該更少了。

目前是 17.5.0 的版本可以加上 `--experimental-fetch` 使用，希望有機會可以 [backport](https://github.com/nodejs/node/pull/41749#issuecomment-1024959486) 到 v16 的版本阿🤞

## package distribution

[https://twitter.com/rauchg/status/1491433289298903043](https://twitter.com/rauchg/status/1491433289298903043)

不經意瞄到大大提到這個針對 npm 的提案—[distributions](https://github.com/npm/rfcs/blob/528fa298a3529dcae3f58cbf2f9a577ba16b479f/accepted/0000-package-distributions.md)。看起來是可以針對安裝的平台去指定對應的套件。在靜態語言逐漸走入 JS 生態圈的趨勢之下，這個設定的確是方便許多。

## expressjs final release 5.0 (beta)!!

[https://twitter.com/siygle/status/1493596178235150338](https://twitter.com/siygle/status/1493596178235150338)

看到推文實在是百感焦急（無誤），expressjs 應該是多數 Node.js 開發者都接觸過的框架，其大量生態圈到現在都還是很好用的開發工具，本來以為 4.x 就是它的終點了，沒想到居然還有機會看到 5.0 出現。😂

## Deno 1.9

[https://twitter.com/deno_land/status/1494285356623147012](https://twitter.com/deno_land/status/1494285356623147012)

Deno 最近比起 Node.js 陣營更有活力呢，每次升版都可以看到不少有趣的東西出現。除了每次下一堆 flag 要開各種權限，現在有了自動針對權限會跳出提示這個方便的功能之外，`deno vendor` 也是這版新加入的命令。

[`deno vendor`](https://deno.com/blog/v1.19#deno-vendor) 有點類似 go mod vendor 的行為，可以透過分析把依賴的套件，緩存到本地端，如此就可以納入版本控制中，也確保程式不會因為所依賴的第三方套件變動而受到影響。