---
title: "網路黑手的呢喃 - #13"
date: "2022-05-08"
description: "Node.js 可能加入的新模組 parseArgs、又是 npm 延伸的安全性問題、Rust teminal multiplexer、GraphQL戰火，還有酷酷的打孔紙應用！"
tags:
  - CLI
  - GraphQL
  - Hardware
  - Newsletter
  - Node.js
  - Rust
  - npm
---
> Node.js 可能加入的新模組 parseArgs、又是 npm 延伸的安全性問題、Rust teminal multiplexer、GraphQL戰火，還有酷酷的打孔紙應用！
> 

---

## util: add parseArgs module

最近 Node.js 在討論加上一個專門處理 CLI 參數的內建模組，預期會放在 [`util`](https://github.com/nodejs/node/blob/2cea86bbb88ef205f24011176dd4ec127dc503af/doc/api/util.md#utilpromisifyoriginal) 裡面，可以參考下方的 PR 或實作的 [Polyfill](https://github.com/pkgjs/parseargs) 有更多的參考資訊，大致上就是提供一個簡單的 CLI argument parser ⬇️，當然目前還在討論階段還未確定。

```
import { parseArgs } from 'node:util';
const options = {
  foo: {
    short: 'f',
    type: 'boolean'
  },
};
const args = ['-f', 'b'];
const { values, positionals } = parseArgs({ args, options, allowPositionals: true });
// values = { foo: true }
// positionals = ['b']
```

[https://twitter.com/BenjaminCoe/status/1514236332205293575](https://twitter.com/BenjaminCoe/status/1514236332205293575)

## lockfiles 安全性問題

嘿嘿，沒錯又是 Node.js/npm 生態的安全性問題囉😅

> Why npm lockfiles can be a security blindspot for injecting malicious modules
> 
> 
> https://snyk.io/blog/why-npm-lockfiles-can-be-a-security-blindspot-for-injecting-malicious-modules/
> 

這是提到的是 Node.js 生態中常見的 lockfiles 伴隨的問題，無論是 npm or yarn 都會在安裝套件之後，另外產出一份記錄當下所有依賴套件版本檔案，因為它內容繁雜一般可能在合併的時候我們都不會很仔細去檢查 diff，這時候就很容易讓有心人置換成其他來源，造成安全性的問題。

snyk 也提到可以利用類似 [lockfile-lint](https://github.com/lirantal/lockfile-lint) 的工具來針對 lockfiles 內容與引用來源作檢查。

## 戰鬥吧！GraphQL（好像不太對😆）

我們都知道只要要讓開發者發火很簡單，只要發個文說 `xx is bad，立刻就會戰起來，然後這次戰火就燒到 GraphQL 了！

[https://twitter.com/jmhodges/status/1522282897905840128](https://twitter.com/jmhodges/status/1522282897905840128)

有人在細數 GraphQL 帶來的問題，然後有人~~（教義派）~~立刻就火了，立刻寫了篇文章來解釋~~（駁斥）~~推文中提到的問題 - [**GraphQL is a Trap?**](https://xuorig.medium.com/graphql-is-a-trap-e83ca380aa8f)。

雖然有不少知名企業都有啟用 GraphQL 當作他們新一代的 API 格式，不過老實說就我個人是蠻認同原推作者的，不過雙方都有闡述自身的論點，有嘗試要採用的開發者蠻值得先拜讀一下。

## Rust 驅動的視窗管理器

無意在 trend 看到這個有趣的東西，通常習慣終端介面工作的開發者，應該都會搭配使用視窗管理器之類的工具，一來可以提供方便的介面微調，一方面可以儲存下工作狀態，不用擔心意外關閉或是網路問題斷線。

一般常見的是 [tmux](https://github.com/tmux/tmux) 或 [screen](https://git.savannah.gnu.org/cgit/screen.git)，然後這篇的 [zellij](https://zellij.dev/) 則是用 rust 開發的新作，比起其他看起來特點是比較簡單的操作 & 控制方式，通常如果是第一次接觸用 tmux/screen 的人可能會不知道從何上手，但 zellij 則提供了一系列操作指令在下方。另一個特點是它的 plugin 是基於 WebAssembly 的，所以可以用任何支援的語言來開發，非常彈性 👍

希望這個專案能好好開發下去阿~~ 🤞

[https://twitter.com/RustTrending/status/1504828333565313026](https://twitter.com/RustTrending/status/1504828333565313026)

## 玩硬體感覺很有趣啊😄

有大大做出了用 Arduino 來讀取打孔紙，轉成 MIDI 音效的酷酷東西（是說不是有音樂盒這種東西嗎 😆），不過感覺有不少有趣的延伸運用，作者也寫了篇[文章](https://qiita.com/NaohiroIIDA/items/abf81750bd48b43a5386?utm_campaign=post_article&utm_medium=twitter&utm_source=twitter_share)記錄下相關的參考資料跟工具。

[https://twitter.com/dannymodules/status/1519743244627705856](https://twitter.com/dannymodules/status/1519743244627705856)