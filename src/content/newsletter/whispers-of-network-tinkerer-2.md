---
title: "網路黑手的呢喃 - #2"
date: "2021-11-28"
description: "主題：Remix、JAMStack 正夯、Deno & Slack、再用 Rust 重造一次輪子！"
tags:
  - Newsletter
---
## Remix

[https://twitter.com/remix_run/status/1462900248016130051](https://twitter.com/remix_run/status/1462900248016130051)

常常聽到別人嘲諷 JS 生態圈，就是不斷地重寫輪子，有時候看到這種消息總是會不自主又想起這句話😅，嗯，又來一個新 SSR Framework 了 - [Remix](https://remix.run/)。這也是知名套件 [react-router](https://reactrouter.com/) 背後的[團隊](https://github.com/orgs/remix-run/people)主力開發的。

前陣子也看到 [svelte 的作者加入 vercel](https://twitter.com/Rich_Harris/status/1458822051263823875) （Next.js 背後的新創）的消息，看來新一輪的 js 開發工具大亂鬥又要開始了 🍿

## JAMStack 正夯

[https://twitter.com/vercel/status/1463134883539156995](https://twitter.com/vercel/status/1463134883539156995)

最近為 JAMStack 發力的幾個知名服務，都陸續拿到新一輪的新創融資，看來 JAMStack最近也滿夯的，想要拿投資的應該知道該往什麼地方了😎 #誤

- 轉頭看最近 [Cloudflare 的股價](https://finance.yahoo.com/quote/NET/)也是非常嗨呢

## Deno & Slack

[https://twitter.com/deno_land/status/1460681995231576068](https://twitter.com/deno_land/status/1460681995231576068)

老實說看到這個新聞有點訝異，怎麼 Slack 又要改版了（違），不過看到它們居然選了 deno 當成下一代的開發平台還是有點期待，不知道有沒有機會推出一些有趣的東西。（因為目前是封測，或許有些大公司有機會試玩了，希望能分享一下心得😁）。

- 雖然玩不到倒是可以偷看一下新平台的[文件](https://api.slack.com/future/get-started)，也可以看部分試玩的 [repo](https://github.com/lyohe/swords)，或許可以猜出一些端倪。譬如用 deno 重寫過的 [sdk](https://github.com/lyohe/swords/blob/main/import_map.json)、似乎有內建提供[簡單](https://github.com/lyohe/swords/blob/main/tables/glossary.ts)的[儲存](https://api.slack.com/future/tables)、[hosting](https://api.slack.com/future/development/deploy)，感覺之後開發 app 應該會更方便。

## 再用 Rust 重造一次輪子！

![](https://i.imgur.com/iZNkdge.jpeg)

*就是要 rust!*

現在真的就是要用 rust 才夠潮呢😎，不過也不奇怪嘛，畢竟已經有大大出來開始說這件事了 - [Rust Is The Future of JavaScript Infrastructure](https://leerob.io/blog/rust)。

可以數一下目前有多少 JS 生態圈的工具，已經出現 rust 改寫的版本了：

- 本篇作者 [swc](https://swc.rs/) - 這應該是對應到 tsc/Babel/webpack 之流，不過看起來它還不止這些而已
- [dum](https://github.com/egoist/dum) - 對應到 npm 下面的指令 `npm run`。
- [dprint](https://github.com/devongovett/dprint-node) - prettier 這麼熱門的專案當然也要有！
- [napi-rs](https://napi.rs/) - Node.js addon 用 rust 也是很正常的事。

可以期待過一兩年，說不定全工具鏈都變成 rust 驅動了呢（那我們到底是寫 js 還是 rust，頭好暈啊😅）