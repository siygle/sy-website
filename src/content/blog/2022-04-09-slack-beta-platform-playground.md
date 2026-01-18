---
title: 'Slack beta platform - 試玩篇'
date: '2022-04-09'
tags: ['Slack', 'Deno']
draft: false
summary: '測試 Slack 下一代的 app platform，裡面有不少值得期待的好東西 ;p'
authors: ['default']
---

## Overview

<TOCInline toc={props.toc} exclude="Overview" toHeading={2} />

## 前言

因為公司一開始就是遠端起身，溝通工具一直是蠻看重的一環（畢竟跟日常工作息息相關），所以也算蠻早就開始使用 Slack 作為主力的溝通工具，正因如此一些內部小工具都直接採用 Slack 平台上提供的許多功能，譬如 Bot、Slash command 之類的，然後看到它們[提到](https://slack.com/blog/transformation/new-slack-platform-digital-hq)已經開始[下一代的開發者平台](https://positivegrid.slack.com/platform-beta)的消息（不過現在是內部測試，要申請通過才能使用），很好奇想玩玩看就申請看看了（然後就通過啦 🎉😄）

## Slide

[![tech-share](https://siygle.github.io/slack-future-platform-demo/assets/slack-beta-platform.png)](https://siygle.github.io/slack-future-platform-demo/)
因為玩完之後需要作個簡單的內部分享，所以就有上面這份了，如果只想簡單了解一下這是什麼東西的話，可以參考看看，不過因為很多東西還沒開放出來，所以也沒辦法寫太多細節。😆

## 天外飛來一恐龍（冷）

<blockquote class="twitter-tweet">
  <p lang="en" dir="ltr">
    Slack chooses Deno for new development platform
    <a href="https://t.co/l1GbWXsJwv">https://t.co/l1GbWXsJwv</a>
  </p>
  &mdash; Deno (@deno_land){' '}
  <a href="https://twitter.com/deno_land/status/1460681995231576068?ref_src=twsrc%5Etfw">
    November 16, 2021
  </a>
</blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

_順帶一提一個有趣的事，Slack 決定用 Deno 來打造它們的下一代平台喔 😙_

如果還不知道 Deno 是什麼的話，可以看一下這場分享 - [**Deno is a New Way to JavaScript - Ryan Dahl & Kitson Kelly**](https://www.youtube.com/watch?v=1gIiZfSbEAE)

Deno 跟 Node.js 應該算兄弟姊妹 😄，它們都是出自同一位作者 - Ryan Dahl，在他創造出 Node.js，以及後來看到它爆紅之後反思當初的一些設計並不是非常好（這場也是經典 - [Design Mistakes in Node](https://www.youtube.com/watch?v=M3BM9TB-8yA)），所以他又做出了 Deno 這個新工具。

這邊就不再多介紹下去了，有興趣的話應該很容易可以找到 Deno 的簡介或相關學習資源，當然[官方文件](https://deno.land/manual)永遠是你最好上手的首選！

雖然 Deno 有種 Node.js 後繼者的姿態，不過它們雙方的架構相差頗大，生態圈也沒辦法完全相容（不過 Deno 團隊有在進行這塊的改善，像 [Node compatibility mode](https://deno.land/manual@v1.20.5/node/compatibility_mode) 或是像 [dnt](https://deno.land/manual@v1.20.5/node/dnt) 這類處理套件互通的工具），所以 Slack 下一代平台直接 all-in 在 Deno 也是頗大膽的行為。

## [Quick start](https://api.slack.com/future/quickstart)

如果想玩玩這個新平台的話，首先你得先去[申請加入](https://slack.com/platform-beta)，當然我猜個人開發者可能等好一陣子才有機會，但如果透過公司（使用者）的身分去申請，可能就會快得多，不過一些相關的專案倒也是可以在 Slack Github 裡面找到，用關鍵字 `deno` 就可以刮出不少了。😎

- [安裝 Deno](https://deno.land/#installation)
- [安裝 Slack CLI](https://api.slack.com/future/tools/cli/download) - 這個是新平台專用的，用起來的感覺很像 heroku CLI，整合多數的開發 & 管理的行為，都可以簡單透過 CLI 完成。
- 了解一下 [TypeScript](https://www.typescriptlang.org/)，對你會有幫助的 - 因為 Deno 是原生支援 TS，當然你還是可以寫 JS（相容），但是生態圈大多數不會這樣搞。😅

目前可以參考官方提供的範例 - [reverse string](https://github.com/slackapi/deno-reverse-string)（[這邊](https://api.slack.com/future/integrations)也還有其他更多範例可以參考），就可以稍微了解它的架構跟開發流程。

[![slack-beta-arch](https://a.slack-edge.com/bf8dff7/img/api/future/slack-apps-high-level@2x.png)](https://api.slack.com/future/overview)
目前的（beta platform）架構，很清楚是由三層元件組合而成的，就是 App **觸發（[trigger](https://api.slack.com/future/workflows/triggers)）**的條件，以及觸發後所要執行的**流程（[workflow](https://api.slack.com/future/workflows)）**，與最後包含在流程中的每個**行為（[function](https://api.slack.com/future/workflows/functions)）**。透過這樣的結構，可以很清楚的定義 App 的行為及功能。

![beta-slack-arch](https://siygle.github.io/slack-future-platform-demo/assets/beta-platform-arch.png?test=12233)
除了上面提及的 trigger/workflow/function 架構之外，還有幾個特別的小東西，構成 app 專案的基本結構：

- `project.ts` - 定義所有專案相關資訊的，包含基本資料、權限等。
- `import_map.json` - 這個是 [WICG 提出的一個標準](https://github.com/WICG/import-maps)，能夠定義套件依賴，如果有參考其他 Deno 專案，有些是用 `deps.ts`，不過 Deno 是原生支援 [Import Maps](https://deno.land/manual/linking_to_external_code/import_maps)，所以用這種方法來管理專案內的依賴更方便。 (_Deno 的套件使用跟 Node.js 生態有很大的不同，它沒有像 npm 這種工具，也沒有 Centralized registry，可以先啃一下文件熟悉一下才不會一直撞牆 😅_)

## 踩雷之路

雖然看起來描繪的願景很美好，不過先來講些不好聽的話。😆

#### 少到可憐的文件

目前雖然可以開發一些簡單的行為，不過還處於開發期的新平台，缺少大量文件是目前很大的痛點，很多只能透過現有的範例去兜弄。

#### 比 beta 還不穩定的現狀

這部分跟它們採用截然不同的 Deno 來作為新平台的基石或許也有一些關係，畢竟跟 Node.js（或其他更成熟的技術）比較起來，Deno 就跟小嬰兒一樣，所以在開發上或許造成問題的可能性也更大。

我自己在試錯的過程中就遇到一個問題：**「怎麼用 Private modules？」**我想這應該也會是很多開發者會遇到的情境吧，但根據 Deno 的文件有提到 - [Private modules](https://deno.land/manual@v1.20.5/linking_to_external_code/private) 該怎麼處理，官方解法是透過一個環境變數 `DENO_AUTH_TOKENS`，把權限定義好，它就會自動處理。

`DENO_AUTH_TOKENS=a1b2c3d4e5f6@raw.githubusercontent.com`

這是它舉的例子，如果你的程式是擺在 Github 上面的話，就是定義好這樣（_注意是 raw.githubusercontent.com 而不是 github.com，因為 deno 會需要直接取程式的原始內容（RAW）_）

但是上面這個做法在 beta platform 是沒用的，目前一定要把認證放到 `import_map.json` 裡面才會生效（但把 secret 放進 VCS 不太好吧），這還只是諸多問題中其一而已，就是處處可能踩到雷。😅

## 驚豔

抱怨完之後再是得說說好話，畢竟目前看它描繪的未來真的很美！

#### 超級方便的開發流程

之前的痛點有一部分在於麻煩的開發流程，測試、佈署都只能自己弄，如果希望有安全的測試環境，可能還得設定不同的 app 來測試。現在一切透過 beta platform 提供的 CLI 都變得超級簡單！

你想測試就 `slack run` 它就會很快起一個本地的測試，測試完沒問題要上線，就跑一下 `slack deploy`（對！你沒看錯，beta platform 連佈署都幫你處理好了），還有以往麻煩的 app 設定跟權限，一樣直接目錄下的 `project.ts` 裡面定義好就好，有種石器時代一口氣跳進工業時代的感覺。

#### 講古一下

其實上述的開發工具，如果年紀夠大的開發者說不定有玩過類似的服務，之前有個叫 [Beep Boop HQ](https://medium.com/beep-boop-hq/slapp-a-new-library-for-slack-apps-13a6e91b6bf) 的新創就作了類似的東西，不過後來它改名叫 [Missions](https://twitter.com/missions_ai)之後，弄了一個設計流程的工具（沒錯你又猜對了，它就是現在 Slack 上面 Workflows builder 的前身，因為後來這間公司被 Slack [收購](https://techcrunch.com/2018/07/17/slack-acquires-missions-to-help-users-automate-work-tasks-inside-chat/)了，所以 beta platform 可以看到不少似曾相似的影子 😆

#### 內建資料儲存

沒錯，現在存放資料不再需要另開資料庫了，beta platform 原生就可以直接有[內建的資料庫](https://api.slack.com/future/tables)可以使用（看起來後面是接 AWS DynamoDB，[查詢直接支援相同的語法](https://api.slack.com/future/tables#query)😄）。

## 結語

目前實測之後，比照目前的版本，在開發上真的有很大的改善，不過用 Deno 算是在技術鏈的選擇上蠻大膽的做法，再加上目前缺乏開發相關文件、資源，也不能保證它們會堅持到底。如前文提到，如果是一些簡單的小工具沒問題，然後就抱持著期待，希望 Slack 到時候能真的端出一個讓開發者驚豔的新一代開發平台。
