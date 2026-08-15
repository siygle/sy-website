---
title: "網路黑手的呢喃 - #30"
date: "2023-05-09"
description: "*In order to publish a package with provenance, you must build your package with a supported cloud …"
tags:
  - AI
  - Deno
  - Newsletter
  - Node.js
  - Vercel
  - npm
---
npm 安全性⬆️，開始支援發佈出處的資訊、Deno 1.33 & KV 登場、重回實體聚會的 Node Congress 2023、Vercel Ship!（然後就炎上了🤣），以及最近多到想忽略都沒辦法的 AI。

---

# npm 可以簽署套件發佈出處了

自從 npm（或者說 Node.js 套件生態圈可能更貼切） 上發生了幾次安全性問題之後，Supply-Chain security 這件事就不斷被提及，畢竟 Node.js 是依賴大量的第三方套件為生的生態，但也正因為如此，[**Supply-Chain Attack](https://en.wikipedia.org/wiki/Supply_chain_attack)** 也變成攻擊者很容易下手的一個方式。

npm 也不斷針對安全性問題，推出許多新功能來改善，這篇提及的 [`provenance`](https://docs.npmjs.com/generating-provenance-statements) 就是最近的其一。顧名思義，它就是提供套件發佈的相關資訊。當然，這並非指有包含這個資料就代表套件是安全的，但有這些相關資料（它會直接顯示在 npm 的套件頁面上，如[範例](https://www.npmjs.com/package/sigstore#provenance)），你可以很清楚知道這個套件的發佈處，以及對應的 commit 是哪個等等的資訊，能夠提供你更方便去驗證所安裝套件的是否有問題。

使用上是滿方便的，就是 CLI 帶上對應的參數就好

```bash
npm publish --provenance
```

不過有個但書，這個發佈的行為必須是提供這項功能整合的雲端 CI/CD 服務商（目前看起來應該只有 Github 率先支持，畢竟是一家人😆）

> *In order to publish a package with provenance, you must build your package with a supported cloud CI/CD provider using a cloud-hosted runner.*
- [https://docs.npmjs.com/generating-provenance-statements](https://docs.npmjs.com/generating-provenance-statements)
> 

![](https://twitter.com/bitandbang/status/1648742620779118642)

# Deno 最近火力連發！

最近 Deno 這邊也是動作不斷阿，從 [Ryan 上 Node Congress 講了關於新功能 KV](https://chat.sylee.dev/2023/05/01/node-congress-2023-notes#782f84342547473584816c78058cb14c) 之外，新版本 1.33 也立刻接上了，看起來 2.0 好像真的在不遠處了？

![](https://twitter.com/deno_land/status/1652030907396530188)

除了上述的 1.33 這個大更新之外，從 1.32 開始新增的 KV 也正式公開啦🎉，有興趣的可以去登記測試（*我自己這麼邊緣都很快就通過了，應該不需要等太久*🤣）

官方這邊也放了[幾個](https://github.com/denoland/tic-tac-toe)[範例](https://github.com/denoland/pixelpage)，[想試玩](https://github.com/denoland/showcase_todo)但不知道怎麼下手的有很方便的參考資料。

稍微玩過的心得，覺得目前 KV 一個很聰明的設計是無縫的開發體驗。在本地端它是用 [sqlite](https://github.com/denoland/deno/blob/main/ext/kv/sqlite.rs) 來模擬一樣的行為，所以你推上 Deno Deploy 完全不需要特別改什麼或增加什麼參數就可以無縫上線，非常舒服😄。

![](https://twitter.com/deno_land/status/1651972190965837825)

[Deno KV 正式発表！cloudflare KVとcloudflare D1のいいとこ取り？ - Qiita](https://qiita.com/access3151fq/items/ee1cf3e5fc35150dd910)

# Node Congress 2023

恢復實體研討會的日子，追議程的時間又到囉👍

自推一下前陣子整理的 [Node Congress 2023](https://nodecongress.com/) 幾個自己聽了之後蠻感興趣的題目，對 JS 近期生態感興趣的可以參考看看。

![](https://twitter.com/siygle/status/1652957153270038535)

# Vercel Ship！

現在對 Vercel 的發表會好像注意的程度比起 IO 有過之而無不及了呢😆，從 2023/5/1 開始連續五天的 [**Vercel Ship**](https://vercel.com/ship) 這次又推出了不少新東西。

第一天就丟了大招，終於第一手支援儲存方案⬇️

![](https://twitter.com/vercel/status/1653066949335695360)

剛看到的時候，因為隔壁棚也剛推了KV，一樣的命名真的很針對阿，但除了 KV 之外，連 RMDB 跟 object storage 都一併推出很有碾壓感。不過後來發現原來都是[直接用其他第三方的服務](https://twitter.com/shisama_/status/1653077767997775872)（應該是再包成自家的 pkg，更深入跟 Nextjs 框架整合）。

然後就看到幾位網友大大發表了類似的意見😅

![](https://twitter.com/ingramchen/status/1653225736403312641)

![](https://twitter.com/mitsuhiko/status/1653395615160606721)

還有人更過分直接做了這個對照表😆

![](https://twitter.com/siygle/status/1653596652664651778)

雲端服務真的是多一層就要被多刮一層阿，如果沒有整合的難度的話，直接用第一手的服務商還是最省錢的。

當然除了第一天之外，每天都固定會放出一些新功能，不過大家最關注的大概是 Next.js 新版本吧，這也不意外果然是在 keynote 當天一起放出來了：

![](https://twitter.com/vercel/status/1654156302531063812)

其中應該是 [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching) 這個新功能最讓人驚豔吧，看起來 Next.js 一直走向把前後端打通的這條路上。簡單說，就是透過宣告 `use server` 這個關鍵字，Next.js 就會把它轉換成 server-side function，這樣原本需要前後端串接的行為，現在只要透過 server actions 就可以直接處理了（難怪會被大家笑說 PHP 又回來了😆）。

```jsx
// 官方列出的表單範例應該很展示的很清楚

import { cookies } from 'next/headers';
 
export default function AddToCart({ productId }) {
  async function addItem(data) {
    'use server'; // <- 就是這這個啦！
 
    const cartId = cookies().get('cartId')?.value;
    await saveToDb({ cartId, data });
  }
 
  return (
    <form action={addItem}>
      <button type="submit">Add to Cart</button>
    </form>
  );
}
```

關於 Server Actions 除了官方文件，也可以參考下面這個簡單的影片教學，說明的很詳細。

![](https://www.youtube.com/watch?v=O94ESaJtHtM)

# 開源社群就是要不斷的戰鬥！

*這次火燒到 [nostr](https://nostr.com/) 跟 [bluesky](https://bsky.app/) 上面啦（Twitter 笑而不語：兩個小東西在玩甚麼呢 #誤）*

兩個分散式的社交服務，結果還沒看到最終魔王的車尾燈就自己先戰起來了😅。起因是 nostr 的開發者最近發了這篇看起來充滿火藥味的文章（擺明來戰），然後社群裡面就炸裂啦！

有興趣站隊的話😆，可以稍微瀏覽下那篇文章。其實裡面不外乎是針對 bluesky 現有的宣稱、設計的一些質疑。

[Bluesky is a scam](https://fiatjaf.com/ab1127fb.html)

不過 bluesky 這邊的核心成員 [pfrazee.com](http://pfrazee.com) 倒是很冷靜出來[說明](https://staging.bsky.app/profile/pfrazee.com/post/3jv72j3fp6g2r)（其實我很喜歡 bluesky 有個原因是對他們目前的核心成員都蠻有好感的，對各種質疑跟建議，都看到他們很高EQ的回覆跟仔細的說明👍）。

老實說，我覺得大家的目標應該是蠻一致的，只是各有不同的實作，如果都能對改善現有的社交服務的環境有幫助，又有什麼關係呢？

*之前還看到那位成員寫了[這段](https://staging.bsky.app/profile/iefan.bsky.social/post/3jupudm6xb62v)，覺得還蠻感動的，怎麼後來變成這樣😅*

# AI的浪潮擋不住阿～

最近關鍵字「[AI孫燕姿](https://www.youtube.com/playlist?list=PLqil1-qewx9jmnoE_P_R39UIO325ZLS1j)」，話說以後這樣錄音還能相信嗎？😆

![](https://twitter.com/GPTDAOCN/status/1655443848179642368)

這個也是我覺得很方便的應用，真希望有客製版可以讓我們自製不同的來源🤞

![](https://twitter.com/novoreorx/status/1654682229707251712)

動畫跟直播感覺也要迎來變革了（顏值是什麼）

![](https://twitter.com/ji10me/status/1645796200078270470)

下面這個 NVIDIA & OpenAI 的對談也很不錯，技術人的對談總是有不少有料的東西在裡面😄

[***黄仁勋 CEO 与 OpenAI 联合创始人及首席科学家 Ilya Sutskever 关于 AI 及 ChatGPT 的对话***](https://www.youtube.com/watch?v=goOa0biX6Tc)

***黄仁勋 CEO 与 OpenAI 联合创始人及首席科学家 Ilya Sutskever 关于 AI 及 ChatGPT 的对话***

還有必推的哈佛開放課程！

[***GPT-4 - How does it work, and how do I build apps with it? - CS50 Tech Talk***](https://www.youtube.com/watch?v=vw-KWfKwvTQ)

***GPT-4 - How does it work, and how do I build apps with it? - CS50 Tech Talk***

---

# 網路是個好東西

### 原來 [gov.tw](http://gov.tw) 也有推這個，讚！

![](https://twitter.com/shouldwang/status/1654523154612752385)

### Respect!🫡

![](https://twitter.com/JohnZhangSV/status/1655211884797394945)

### 絕對不會承認我也是右邊

![](https://twitter.com/glenna9305/status/1655448473083469825)

### 需要立刻安裝這個酷酷的東西😆

![](https://twitter.com/vikingmute/status/1655022698505043969)

### UI苦手看到這種好物都要推一下

![](https://twitter.com/thecalicastle/status/1653972348335456256)

### TwitterDrama

鬧劇還在繼續中（可能短時間都不會結束😆）

![](https://twitter.com/kurtsunx/status/1650087906751713280)

### 看看人家是怎麼賺錢的🤩

*一個人的戰鬥力！*

![](https://twitter.com/ModestMitkus/status/1648669759452622849)