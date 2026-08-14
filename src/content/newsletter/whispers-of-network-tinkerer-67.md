---
title: "這世界怎麼了 - #67"
date: "2025-09-19"
description: "曾經對 Deno 這個雄心壯志的 JS runtime 寄予厚望，不過近期有點退燒"
tags:
  - Newsletter
---

## **希望 Deno 能奮起**

曾經對 Deno 這個雄心壯志的 JS runtime 寄予厚望，不過近期有點退燒，也許 Deno 還是那個 Deno，不過在邁入 AI 熱潮之後，可能我們每個人都更貪婪，也更沒耐心了。

![](https://x.com/siygle/status/1904873643428946013)

⬆️ 像等了一輩子那麼久的 Fresh 2.0（對不起我講話比較浮誇），跟隔壁棚的 Bun 相比，雖然它們[在標準的路上一意孤行](https://x.com/siygle/status/1958560822923497818)，不過人家起碼對未來的發展很明確，然後開發路線非常明確，就是為了讓 JS runtime 運行起來更有效率、更快。

自從年紀越來越大失去熱誠之後 😅，開始體認到太過理想的東西真的只能說說而已，你可以為了倡導自己的理想，但你如果把發展目標壓在上面，可能是太天真了...但回頭看一下 Deno 目前在忙的東西：

- [WinterTC](https://deno.com/blog/wintertc)、[JavaScript Trademark](https://deno.com/blog/deno-v-oracle4) -> 理想很棒但有多少開發者在意🤔
- JSR 亮眼但太快走到 [Open Gov](https://deno.com/blog/jsr-open-governance-board)，[也沒看到非常投入在開發新功能](https://deno.com/blog?tag=jsr) -> 原本概念很不錯，但開發速度實在太慢了，如果可以快一點，是不是本來有可能在 Github 最近組織調整之後收割到一波開發者？
- 青黃不接的 Deno Deploy -> 我知道最新推了新版，但其實跟之前的版本相比也沒到什麼革命性的不同 ，最慘的是跟別的 PaaS 服務商比起來，只有 Deploy 跟 KV 之外沒有其他特點，那我直接把 Deno app 包成 Docker 佈署到其他家去其實也沒什麼差。

多久沒看到讓開發者眼睛一亮的功能了呢？

最近剛好看到 Bun 放出來針對「為什麼 `bun install` 可以這麼快的原因」寫了一篇技術文章，看完之後也是佩服，這也是我覺得為什麼 bun 可以彎道超車的原因。（有興趣可以先跳轉看一下那篇文章）

[Behind The Scenes of Bun Install](https://bun.com/blog/behind-the-scenes-of-bun-install)

其實如果有關注 bun 或是 bun 作者的社交帳號，應該可以感覺到它們真的是針對改善 JS 開發體驗而來，雖然也有很多激進的作法[造成的問題](https://x.com/hulitw/status/1958518614061158440)，不過經常都可以看到它們為了改善執行效率做了非常多的 benchmark、微小之處的調校，真的身為程序員實在不能不佩服它們的用心。

雖然沒有愛了，但還是希望 Deno 能帶著它們的理想重回競爭跑道 🤞

---

### **AI 狂想**

最近對 AI 產生的延伸應用，常常有不少自己的想法。既然本站要轉型成垃圾話中心的目標 #誤，想說之後也把自己的一些「狂想」記錄下來，看看之後能不能驗證準確性有多高 😂

### **多裝置協作的佩戴裝置**

一開始因為 meta 的原型機測試才留意到這個有趣的設計 ⬇️

![](https://www.youtube.com/watch?v=mpKKcqWnTus&t=69s)

不同於一般的 AR 眼鏡， Meta 走了對個裝置協作的方式，想當然爾的**眼鏡**、運算跟電池（應該是，猜測）的**類似小電腦的裝置**（不過大小更像是一個外接電池），然後還有偵測動作的**手環**。

[](https://note.sylee.dev/api/atproto_images?did=did:plc:z57tkg4b3hw7fsn47lud3kf5&cid=bafkreifyq7rka56ltp3mfhg4pcamd5znisoijx2djypsjjx3bdzfxz5iuq)

現在看起來可能因為集中在一個眼鏡上要做到完美可能有困難，所以把不同的需要拆分到不同的裝置上。不過想了想這種方向說不定反而是更好到方式，各裝置把自己適合的作到最好然後協作（像手環的偵測用戶動作，一定把放在眼鏡更好）。

另外，多裝置還有個好處，如果能作到像 Framework 的設計概念—模組化的話，用戶可以自由選配自己需要的裝置，譬如如果你不需要長時間 & 強力的運算能力，那主機不買（或不用帶著），裝置就變成眼鏡+手環的模式。如果真的能作到這麼理想的話，想像這樣搭配下來，會有多少種可能性。 🤩

![](https://x.com/RihardJarc/status/1968651313366917456)

*剛發佈的雷朋眼鏡，剛好瞄到有人提到了那個手環*

越多 sensor 代表越多資料，也代表 AI Model 可以提供更精準的結果，不知有沒有機會真的走向這個方向呢？（不過說真的如果真的要作到模組化，相關的協定標準等，還多著事再後面等著呢😁）

### **內容為王，但誰能取得呢？**

最近也留意到一連串相關的新聞出現，都跟目前 aI 模型訓練的資料有關：

[Meta Invests $14 Billion In Scale AI To Strengthen Model Training](https://www.forbes.com/sites/janakirammsv/2025/06/23/meta-invests-14-billion-in-scale-ai-to-strengthen-model-training/)

[SBIR-智財新知：AI 時代的版權之爭：《紐約時報》對抗 OpenAI 和微軟](https://www.sbir.org.tw/ipcc/news_content?id=11481&page=1)

[Cloudflare指控Perplexity偷耙人家網站](https://www.ithome.com.tw/news/170412)

要讓 AI 可以持續進化，訓練的資料是不可或缺的，所以無論是資料的來源、資料的過濾與優化等，圍繞在「資料」周邊本身就已經有很多相關的組織與服務。不過也逐漸可以發覺到彼此之間越來越多摩擦出現。

**珍貴的內容被白白拿去當作訓練資料的內容提供者 vs 需要更多更多資料的 AI 模型與服務的提供者。**

不過也看到像 Cloudflare 這種反應很快的廠商，立刻就推出了防止 AI 爬蟲的服務 ，甚至更進一步還可以[針對爬蟲抓取資料來定義付費的機制](https://www.cloudflare.com/zh-tw/paypercrawl-signup/)，比起一昧的阻擋，能雙方雙贏想必是更好的結果（不過這個作法也是有人反對，憑什麼要讓 Cloudflare 成為資料的守門者呢？）。

如果上述這個合作的模式成真或走向成熟，會不會現在我們「瀏覽網頁」的習慣就會完全被顛覆成新的行為模式呢？因為多數的使用者不再「自己去找」而是透過 AI 來代理，那其實內容商只要透過 MCP、甚至搭配上 Google 目前開始推動的 A2P 的付費這類協定，直接提供自己的內容服務即可？

想想目前還只是 AI 發展剛初步而已，想必之後一定會更多這類需要討論、處理的議題，真是有趣啊～ 😎

---

### **Charlie Kirk、BlueSky、美國、混亂的未來**

上週美國發生了一件令人震驚的事件，就是共和黨的政治運動人士 - [Charlie Kirk](https://en.wikipedia.org/wiki/Charlie_Kirk) 在校園活動中被射殺身亡。當時我看到新聞快報的時候還不敢相信怎麼可能會發生這種事。

雖然我不是美國人，不過也因為美國跟臺灣之間高度的相依性，自然而然也是會留意美國大選，也正在那時候才知道了這位利用到各校園擺起對話擂台的形式（Prove Me Wrong Table）來針對進步派與保守派之間對政治議題的不同進行辯論。當然我們不知道影片有沒有特別剪輯過、或是有其他爭議存在。但這種「我不認同你，但我還是願意跟你對談」，在目前臺灣混亂的政局之下，一下子就吸引了我的眼球，也非常佩服他有這樣的勇氣。

結果沒想到居然發生這樣的事。但更令人感慨的事在 X 與 BlueSky 上出現截然不同的兩種激化的言論。以前這類的槍擊事件大多都是悼念與難過，但是這次居然因為政治立場的不同，不少人說出一些戲謔、慶祝的言論。甚至[連 DHH 也特別寫了一篇文章](https://world.hey.com/dhh/words-are-not-violence-c751f14f)來闡述他自己的想法：

[](https://note.sylee.dev/api/atproto_images?did=did:plc:z57tkg4b3hw7fsn47lud3kf5&cid=bafkreigljejdlx5344l2j7rrtp6qoutrk6c3pnnt4xqeq7knkg2ylnoley)

覺得很難過也很無奈的寫下了這段話

src: [https://bsky.app/profile/sylee.dev/post/3lykni2364c2f](https://bsky.app/profile/sylee.dev/post/3lykni2364c2f)

可能因為這種激化的對立讓我不由得想起目前臺灣的社會氛圍，也逐漸被推到這種現象，大家對不同意的言論，簡單地塑造成對立面然後往死裡打，這種情況繼續下去不同立場彼此之間不僅失去了對談的可能，也失去了理性共存的機會，剩下就是無止盡的攻擊而已。

不知道這個事件會不會成為一個重要的轉捩點，希望這世界還能好好的過下去 🤞

其實還有一個額外的議題，在這波分裂中 BlueSky 也被推上浪潮上，很多 X 的用戶轉貼了 BlueSky 裡面許多偏激的言論（是真的非常不堪入目那種） ⬇️

![](https://x.com/toadmeister/status/1966110172058890681)

當然反之亦然，X 上面也是不乏很多另一個維度的偏激言論，但覺得感慨的事，原本希望成為更好存在的 BlueSky 卻也變成了自己最討厭的模樣，覺得人真的沒什麼特別的，當你不願意理性好好說話的時候，其實不管你是左派還是右派其實都差不多。

身為 BlueSky 一開始就登入的使用者，也一直找機會推廣它（雖然沒什麼成效 😅），雖然我自己透過 follow 跟現有的功能，其實不太會看到那麼多這種偏激帳號跟言論，不過被其他平台的用戶蓋上這個標籤之後，不知道還有沒有起飛的可能。

唉，希望起碼 [**AtProto**](https://atproto.com/) 這個協定不要跟著沉淪才好，起碼好的協定還是有機會把生態作起來。🙏
