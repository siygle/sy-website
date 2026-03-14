---
title: "網路黑手的呢喃 - #52"
date: "2024-08-13"
description: "本白皮書提出了 tea - 一個分散式系統,以下是主要內容:"
tags:
---
當然還有少不了的網路好東西（希望大家都可以找到讓自己開心的好東西）
tags: AI, Deno, Javascript, Newsletter, Node.js, OSS, Web, npm
category: 不定期的呢喃

# **Web 生態圈例行更新**

### Node.js 22.6.0

新版 Node.js 已經不是什麼特別的事了，不過因為這次的 22.6.0 加上了 `--experiemental-strip-type` 就不一樣，從這個版本開始，Node.js 可以直接執行 `.ts` 檔案啦！

![src: [https://x.com/_rafaelgss/status/1820874220525465654](https://x.com/_rafaelgss/status/1820874220525465654)](../assets/網路黑手的呢喃 #52 - Untitled.png)

src: [https://x.com/_rafaelgss/status/1820874220525465654](https://x.com/_rafaelgss/status/1820874220525465654)

而且它的腳步還不止於此喔，下一步已經開出 PR 了，接下來像 `enum` 以及 `namespace` 這些專屬於 TypeScript 的語意也即將支援了 🔽

[https://github.com/nodejs/node/pull/54283](https://github.com/nodejs/node/pull/54283)

然後也發現了官方 repo 裡面默默出現了這個工作組，看起來接下來針對這題還會有不少後續的工作會進行（完整支援 TS 在不遠處？😎）。

[https://github.com/nodejs/typescript](https://github.com/nodejs/typescript)

### Deno `@std/http/route` & Parallel mode

每週透過 uki00a 大所分享的 Deno 週報，是我用來了解 Deno 這個專案近況的好工具之一，它針對 Deno、Standard library，以及相關的生態，都會有詳細的記錄及簡要說明。

[2024/08/05〜2024/08/11の最新情報](https://uki00a.github.io/deno-weekly/articles/2024/08/11)

最近這期留意到裡面提及了[標準函式庫裡面關於 http 加入了路由的功能](https://jsr.io/@std/http#routing)，就稍微看了一下。目前 Deno 因為相容性逐步優化，基本上 Node.js 陣營重要的幾個框架應該都沒什麼使用的問題，不過如果是更偏向 Deno 生態的話，大概就是 [Oak](https://jsr.io/@oak/oak) 跟 [Hono](https://jsr.io/@hono/hono) 了吧？不過如果這個實驗性的功能有機會持續開發下去的話，說不定能變成 Deno 開箱即用的好工具，可以觀察一下看看。 👀

*不過還有個值得注意的地方，不知道是不是為了維持以 web standard 為標準，它的 syntax 看起來跟其他 route 非常不一樣 😅

```jsx
import { route, type Route } from "@std/http/route";
import { serveDir } from "@std/http/file-server";

const routes: Route[] = [
  {
    pattern: new URLPattern({ pathname: "/about" }),
    handler: () => new Response("About page"),
  },
  {
    pattern: new URLPattern({ pathname: "/users/:id" }),
    handler: (_req, _info, params) => new Response(params?.pathname.groups.id),
  },
  {
    pattern: new URLPattern({ pathname: "/static/*" }),
    handler: (req: Request) => serveDir(req)
  }
];

function defaultHandler(_req: Request) {
  return new Response("Not found", { status: 404 });
}

Deno.serve(route(routes, defaultHandler));
```

此外 Deno 也針對平行處理有了一些改善，也留意到最近要出現的 [1.46 預告](https://x.com/rough__sea/status/1823039962209476613)裡面好像也有包含這部分，所以應該是有比較穩定的實作了。最近它們放出了一場關於這個議題的內部分享，有興趣的開發者可以收聽看看：

![](https://www.youtube.com/watch?v=T_2Ls07A83o)

### 日漸增加的垃圾套件問題 😓

一開始是先看到有開發者轉了這篇文章，它是由 [Phylum](https://www.phylum.io/)，這一間專門研究軟體供應鏈安全的公司發現到的問題，最近因為某個東西的推波助瀾之下，垃圾套件的問題已入侵 npm 了，而且情況還相當嚴重。

[The Great npm Garbage Patch](https://blog.phylum.io/the-great-npm-garbage-patch/)

其實我也是因為讀了這篇文章才知道原來有這個叫做 [Tea Protocol](https://tea.xyz/) 的東西存在（有興趣可以去看他們詳細的白皮書說明），我就用 AI 彙整取代了（最近真的越來越沒辦法離開 AI summary 的功能了  😅）

> 本白皮書提出了 tea - 一個分散式系統,以下是主要內容:
> 
> 1. 計算和分配每個開源項目相對於整個生態系統的「貢獻證明」。
> 2. 確保開源軟件專案得到良好維護。
> 3. 通過在 tea 註冊表中實施 tea 激勵算法,賦予開源開發人員與其生態系統範圍內貢獻成正比的公平報酬。
> 4. 激勵網絡參與者遵循負責任的披露實踐來解決漏洞和錯誤。
> 
> tea 旨在增強軟件供應鏈的可持續性和完整性,使開源開發人員能夠獲得他們創造的價值。
> 
> — [tea protocol white paper](https://docs.tea.xyz/tea-white-paper/white-paper)
> 

簡單說就是對開源軟體後續維護的一個嘗試，或許它的用意是好的，但是卻因為如此帶來更嚴重的問題，在文章中帶出了另一個有趣的詞彙 - [Cobra effect](https://en.wikipedia.org/wiki/Perverse_incentive) ⬇️

> *「Cobra effect」（眼鏡蛇效應）是一種經濟學和社會學現象，用來描述當人們試圖解決某個問題時，所採取的措施不僅無效，反而讓問題變得更糟的情況。*
> 
> 
> *這個名詞源自印度殖民時期的一個故事。當時，英國殖民政府想要減少德里市區的眼鏡蛇數量，於是提供獎金給捕捉並交出眼鏡蛇屍體的人。最初，這個計劃看似有效，許多眼鏡蛇被捕捉並交出。但隨著時間的推移，一些人發現捕蛇可以賺錢，於是開始專門飼養眼鏡蛇，然後將牠們殺死以獲取獎金。當政府發現這一情況後，立即取消了獎勵政策。結果，這些飼養的眼鏡蛇被放生，導致眼鏡蛇的數量比原來更多。*
> 
> *這個效應表明，為了解決某個問題所制定的措施，若沒有考慮周全，可能會導致更嚴重的問題。眼鏡蛇效應經常被用來提醒人們在政策制定或問題解決時，要小心避免「治標不治本」，甚至適得其反的情況。*
> 

也就是因為這個激勵的因子，變相讓一堆「只是為了拿到獎勵而做的套件」出現在 npm 上面，甚至還發現到其中甚至是計畫性的行為（有興趣可以參考 phylum 所撰寫的另一篇研究報告 - [**Digital Detritus: Unintended Consequences of Open Source Sustainability Platforms**](https://blog.phylum.io/digital-detritus-unintended-consequences-of-open-source-sustainability-platforms/)）。

看來 tea 有針對這類的問題要[進行改善](https://tea.xyz/blog/proof-of-contribution)，npm 那邊好像也有清除的動作，不過目前似乎也沒什麼一勞永逸的好解法，這類的問題也一定會越來越嚴重，也越來越頻繁，值得關注後續會怎麼進行（果然是人的問題最麻煩了 😓）。

# 開源世界真有趣

### 又來一個方便的架站工具 - BroadcastChannel

應該不少人知道本站其實資料是放在 Notion 上面，作為一個文章內容撰寫跟存放資料的地方，透過它的 API 也可以做到更彈性的目標，然後前端自己抽換成自架網站，這樣兼具方便跟彈性的好工具，起碼目前我是用的很開心。

沒想到又看[另一位大大](https://x.com/ccbikai/status/1819995149016985621)開發了更方便的小工具，基於 telelgram channel，然後透過 Vercel/Cloudflare 這類佈署平台，能快速搭建起一個 micro-blogging 的網站，真的太方便啦！🙌

[https://github.com/ccbikai/BroadcastChannel](https://github.com/ccbikai/BroadcastChannel)

![src: [https://x.com/ccbikai/status/1819995149016985621](https://x.com/ccbikai/status/1819995149016985621)](../assets/網路黑手的呢喃 #52 - Untitled 1.png)

src: [https://x.com/ccbikai/status/1819995149016985621](https://x.com/ccbikai/status/1819995149016985621)

目前我也弄了一個 [memo](https://memo.sylee.dev/)，不過目前還在摸索要怎麼使用，現階段比較像備份資訊、想法，還有講垃圾話的地方，反正就當成是一個公開版本的兔洞 😅

*是說大家都免費黨，那這些營收公司怎麼辦嘛* #誤 

### 瀏覽器市場怎麼突然又熱鬧起來了😝

前陣子才剛提到準備加入瀏覽器戰場的新人 - LadyBird，結果沒想到這麼快又出現更新的挑戰者啦，會不會太嗨了！一開始是因為看到日本開發者寫了這篇文章（雖然我看不懂日文，但是瞄到好幾個關鍵字就點進去翻譯，才發現這件事 🤭）

[Rust製ブラウザエンジン「Servo」搭載、新たなWebブラウザ「Verso」の開発プロジェクトが立ち上がる](https://www.publickey1.jp/blog/24/rustservowebverso.html)

這次加入戰場的就是下面這個名為 verso 的新專案，而且有個比較特別的地方，不同於 LadyBird 幾乎是重頭開始，verso 則是繼承自一個大家可能也還蠻有印象的 [Servo](https://zh.wikipedia.org/zh-tw/Servo) 而來（Firefox 哭哭）。

[https://github.com/versotile-org/verso](https://github.com/versotile-org/verso)

還有還有，除了 Servo 之外，這個專案將由 [Tauri](https://tauri.app/) 這個 Electron 競品領銜開發（不過常常在推上看到有開發者抱怨 Tauri 各種精采，也是五味雜陳 😅）。不過看到無聊的瀏覽器市場突然之間變得如此精采，這麼幸福是可以的嗎？

# 愛讀冊啦～

這是什麼新單元，因為最近記錄到幾篇都是偏向技術分享的文章跟分享，才猛然想起自己沉溺在新奇世界太久了，應該也要多花點精神記錄一些有深度~~（看不懂）~~的東西，故此！

### 閉包與記憶體洩漏

前 Google 知名的開發者 Jake 跟他的快樂小夥伴（誤，他們最近都一起過去 Shopify 啦）針對閉包這個 JS 開發常見用法的一些研究，沒想到居然可能成為記憶體洩漏的潛在風險。

[Garbage collection and closures](https://jakearchibald.com/2024/garbage-collection-and-closures/)

這是它們發現會產生 memory leak 的案例，大家可以先猜一下原因，如果想瞭解的話歡迎前往拜讀，文章沒有很長，花一點時間就可以看完了。😄

```jsx
function demo() {
  const bigArrayBuffer = new ArrayBuffer(100_000_000);

  const id = setTimeout(() => {
    console.log(bigArrayBuffer.byteLength);
  }, 1000);

  return () => clearTimeout(id);
}

globalThis.cancelDemo = demo();
```

### Google 如何解析 JS app

這個 web 開發界的謎團，現在 Vercel 終於透過這篇文章來告訴大家 😄。

[How Google handles JavaScript throughout the indexing process – Vercel](https://vercel.com/blog/how-google-handles-javascript-throughout-the-indexing-process)

主要針對 Google 的爬蟲到底能不能正確的解析 JS app，一直以來有幾個迷失：

- Google can’t render JavaScript content.
- Google treats JavaScript pages differently.
- Rendering queue and timing significantly impart SEO.
- JavaScript-heavy sites have slower page discovery.

**以上幾乎都被證明是錯誤的，詳細參見內文說明 ，***所以結論就是 JS 用起來，不要害怕！**😁。

除了結論之外，整篇文章裡面有非常多它們研究的方法跟收集的數據，也有針對開發者的建議，非常值得 web 開發者一看。

# 引領風潮的 ML

### 狗食（dogfood）最高！

無意間看到這間 AI 團隊分享，可能因為使用情境的關係，他們並不多需要太大量的 UI 設計，所以就看到他們怎麼在完全沒有設計師的情況之下進行，蠻有意思的，這也算是另類的狗食吧 😆

![](https://x.com/forrestzh_/status/1820714878505779446)

### Github 也瞄向 Hugging Face 了

前陣子 Github 丟出了自家的 AI 開發方案，看起來跟隔壁棚的 [Hugging Face](https://huggingface.co/) 非常相似阿，除了提供為數眾多的 AI 模型可以試用之外，測試之後還可以直接整合到專案裡面，或直接透過 CodeSpaces 產生新專案，當然全部都要的資料它都一併先幫你建立好了。

**展示影片裡面偷渡一堆 MS 家的服務，真的看出併購的綜效越來越明顯了（Google 別哭，你還有一個機會，可以看看隔壁家的 Gitlab #誤）*

真的是無痛上手，立刻開始 AI 🤣

![](https://www.youtube.com/watch?v=WiBB8Lsgl7I)

[Introducing GitHub Models: A new generation of AI engineers building on GitHub](https://github.blog/news-insights/product-news/introducing-github-models/)

# **網路是個好東西**

### 大家都超棒的～

雖然我只是等四年的年跟仔，不過看到台灣選手表現越來越好真的是與有榮焉，大家都超棒的啦！

![](https://x.com/ChingteLai/status/1822880364244685049)

如果更有能力或手頭也更餘裕的人，可以考慮從這運動贊助平台這邊來長期支持體育選手喔！雖然我們看四年好像一下子而已，不過其中訓練的艱苦，只有選手們才知道，他們也的確需要民眾更多的支持～ 💪

[體育運動贊助媒合平臺](https://sponsor.sa.gov.tw/)

### 這太酷了！

看到大大有整理了之前聽過的愛沙尼亞數位居民的申請流程與方法，看完之後覺得好有趣阿，希望有機會邁向 Indie developer 之路的話，有用上的機會（敲碗續集阿～～ 😆）

![](https://x.com/hulitw/status/1822944624882720961)

### 以後玩遊戲好累 😅

但是又多了一個玩遊戲的藉口—**我在運動！**

![](https://x.com/AnsonChen/status/1818528133554782491)

### 冠冕堂皇說著荒謬話

感謝網路人士翻譯，相信大家都可以無痛收聽。

#不可質疑你的厲害國！

*這可以當成脫口秀收聽，應該算是好東西吧 😅

![](https://x.com/wastemobile/status/1822628931633074595)

## NewJeans 專區 #誤

還是要繼續洗，歡迎大家入坑

### 最近是足球世代！

![](https://x.com/newjeans_loop/status/1819707736277594460)

![](https://x.com/newjeans_loop/status/1819699230791090266)