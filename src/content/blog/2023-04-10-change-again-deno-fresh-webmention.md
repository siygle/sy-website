---
title: '又換啦，Deno、Fresh 以及 Webmention'
date: '2023-04-10'
tags: ['Deno', 'Personal']
draft: false
summary: '本站就在不斷更換技術桟之中成長 #誤'
authors: ['sy']
---

***本站就在不斷更換技術桟之中成長 #誤***

沒錯，這邊又改版了，身為喜新厭舊狂人的我，最近又在手癢之下更換了本站的架構，順便調整了一下目前寫文各自的方向與各自採用的方案。😅

## 目前區分策略
* [本站](https://sylee.dev)：個人頁面&技術相關的文章。
* [Chat](https://chat.sylee.dev)：主要是記錄「[網路黑手的呢喃](https://chat.sylee.dev/tag/Newsletter)」：以個人觀點記錄一些有趣網路相關新聞的個人 Newsletter，然後一些隨筆跟雜記也都會放在那邊。

## 技術桟
* [Chat](https://chat.sylee.dev) 那邊之前有寫過一篇，有興趣可以直接[跳轉這邊](https://chat.sylee.dev/2023/03/15/move-again-%E5%B7%A5%E6%AC%B2%E5%96%84%E5%85%B6%E4%BA%8B%E5%BF%85%E5%85%88%E5%88%A9%E5%85%B6%E5%99%A8)😄。主要就是靠 [**NotionNext**](https://github.com/tangly1024/NotionNext) 這個超方便的工具，直接整合Notion 當作發佈工具，然後放在 [Vercel](https://vercel.com) 上面。
* 這邊改動算是蠻大的，從原本也是 Next.js 方案的 [**tailwind-nextjs-starter-blog**](https://github.com/timlrx/tailwind-nextjs-starter-blog) 改成用 Deno 的 [Fresh](https://fresh.deno.dev) 來實作目前這個超輕量的站台。

## Why?
為什麼又想到要更換？弄成這樣對於發文有比較方便嗎？其實面對這個問題我的答案都只有一個：

都是愛玩造成的！~~爽就好！😆~~

認真想想這個問題後，覺得會做出這個決定的原因應該是下列兩點：

### 切分不同的網站內容，各取所需
之前常常因為調整技術桟，導致影響到產出，然後也可能因為後來後悔或沒達到評估的優點，所以後來又改成其他，轉換的成本其實也是不低。（這不是自找的嗎？🤣）

不過後來用 [WordPress.com](https://WordPress.com) 的那段時間還是體會到，有個容易撰寫的平台還是很重要的，可以把想玩的（不穩定）切開，這樣就比較不會影響到。所以後來看到 NotionNext 這個專案才會驚為天人立刻換過去，因為「能結合平常的記錄（Notion）然後直接當成後台編輯介面」這點，真的是讓寫雜記、Newsletter 方便很多。

### 身為黑手一定要把手弄髒😄
其實一些現成的方案，像 [Wordpress](https://wordpress.org/)、[Ghost](https://tryghost.org)，或是一些靜態頁面產生器如 [hexo](https://github.com/hexojs/hexo)、[Hugo](https://github.com/gohugoio/hugo) 等，都是很非常方便的工具，個人也都非常推薦。

重點是「**選個自己能動手修修改改的軟體**」，尤其如果你是網路服務從業人員的話，滿推薦（偶爾）還是要找些讓自己能燃燒熱情的東西🔥，順便也能對目前技術的變動多幾分敏感度，對自己也是件好事。

## 為什麼要選 Deno + Fresh
嗯，這個問題就沒什麼討論的價值了（因為爽！😆）

最近蠻常關注 Deno 的發展，雖然現在還沒看到什麼關鍵性的突破，或是非常讓人為之亮的功能，不過畢竟身為 [Ryan Dahl](https://en.wikipedia.org/wiki/Ryan_Dahl) 的第二個作品，受到一定關注度是當然的。不過除了天生光環之外，其實 Deno 引入蠻多有趣的改進，[不少甚至反饋回 Node.js 社群後也加入實作了](https://chat.sylee.dev/2023/02/02/%E7%B6%B2%E8%B7%AF%E9%BB%91%E6%89%8B%E7%9A%84%E5%91%A2%E5%96%83-25#964a115d934b4bcfb3fced29653937fa)。所以還是滿期待後續的發展。

就開發體驗而已，目前 Deno 其實也還存在不少問題，目前也欠缺大型專案的考驗，然後生態圈雖然在宣布支援 npm 之後多了一些，不過還有許多相容性的問題尚待解決，雖然目前拿來當小專案是還滿夠用的，長期其實也是有點擔心（我看 [Fresh 開發也不是很積極](https://github.com/denoland/fresh/issues)😅），所以我雖然做了這件事，不過現階段不會推坑別人作一樣的事，除非妳也是非常愛 Deno 啦😆

## WebMention是啥？
或許有注意到 footer 部分有個奇怪的「類」評論系統。為什麼說「類」，因為它看起來很像，但是跟你平常會見到的網站、部落格裡面的又不太一樣。😄

這東西的名稱叫做 - [Webmention](https://webmention.io)，關於相關的介紹，我非常推荐這篇文章的介紹，包含簡介、機制、如何使用，一應俱全：

> 透過 webmention 來搜集 blog 的社群迴響.
> https://jason-memo.dev/posts/webmention/

其實我滿喜歡 [IndieWeb](https://indieweb.org/) 的理念，被諸多 Social Network Service（SNS）綁架多年的我們，其實也嘗到不少苦頭，比起現在的網路生態，更懷念那個每人一個部落格，無名小站盛行的年代。Webmention 就是 "**You are connected**" 的實踐，不受到服務平台的限制，讓作者可以在不同平台中自由的互動（Webmention 其實有點像舊時代 blog 裡面的 pingback 這個功能，不過是透過 [brid.gy](https://brid.gy) 來幫你收集 Quota/Mention/Like 等資料，然後透過 API 提供這些資料）。

*雖然它的理想很好，但是遇到像被馬老闆惡搞之後的推特這種向下沈淪的平台生態就沒招了，因為 Twitter API Policy 的調整，[brid.gy](https://brid.gy)　已經[宣佈沒辦法繼續支援 Twitter](https://twitter.com/siygle/status/1644638454410809344)　了，我看推特還是早點收掉好了😠*

## 實作速記
大致上是這樣，這邊稍微記錄一些實作上遇到的問題，希望給有興趣用一樣的技術桟的開發者一點幫助：

### Fresh 框架特點
[Fresh](https://github.com/denoland/fresh) 是 Deno 官方開發支持的前端框架，底層是 [Preact](https://preactjs.com/) 但更加朝向 SSR，不過如果需要 browser-side 互動功能的話，要記得切換用 [**island**](https://fresh.deno.dev/docs/concepts/islands) 元件。(譬如底部 Webmention 取回資訊顯示的功能，就是用 island 元件實作的)。

因為目前相關資源不是很多，可以參考 [Deno官網](https://github.com/denoland/dotland)或是 [showcase](https://fresh.deno.dev/showcase) 裡面的範例。

因為 SSR 的架構，有很多 JS 框架可以輕鬆做到的事，Fresh 就得走別的實作方式，譬如  GA 的整合就沒辦法直接嵌入 JS 處理，這個可以參考 Deno 官網的[範例](https://github.com/denoland/dotland/blob/main/utils/ga_utils.ts)。

### Webmention 整合
整合 Webmention 的部分，可以參考這篇強者的實作 - [Refactor your blog comments system with Webmention.io](https://geekplux.com/posts/webmention)，連樣式都可以直接套用，非常方便。

不過我有遇到一個奇怪的問題，就是透過 API [取回 mention](https://github.com/aaronpk/webmention.io#find-links-to-a-specific-page) 的行為，有時候會遇到 500 error。

```
GET https://webmention.io/api/mentions.jf2?target=https://YOUR_REGISTER_DOMAIN&token=API_TOKEN
```

後來發現如果網址有非英文的字元的話，有一定機率會觸發（沒錯，還不是一定會😅，用 `encodeURIComponent()`也沒有幫助），所以建議**文章連結保持英文**會比較安全。

## 會不會明年回來又不一樣了？
不敢保證🤣