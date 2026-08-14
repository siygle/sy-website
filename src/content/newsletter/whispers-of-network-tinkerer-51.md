---
title: "網路黑手的呢喃 - #51"
date: "2024-07-30"
description: "雖然號稱多模態支援，但目前GPT-4o mini僅在API支援文字和視覺，未來才會加入多模態能力，支援文字、圖片、影音輸入／輸出功能。GPT-4o mini現在可透過Assistants API、C…"
tags:
  - AI
  - Maker
  - Newsletter
  - Node.js
  - TypeScript
---
Local-first 這又是甚麼啦、Node.js 最近又奮起啦！你也被 CrowdStrike 了嗎？永遠都在加速的 JS 宇宙、OpenAI 推出 GPT-4o mini，自組鍵盤的 Maker 實在很酷，還有因為最近太無力所以增量的好東西 😅

---

# **Web 生態圈例行更新**

## Node.js 重新振作！

*請原諒我的標題黨* 😅

Node.js 一直活得好好的，再加入許多競品之後，Node.js 的社群顯得更活潑了，最近又出現了許多有意思的提案以及實作 🔽

### Node.js 直接執行 TS !?

看 State of JS 的結果不令人意外，型別的問題已經成為 JS 生態裡面很常被提出來討論的一項議題，不過我們不是要再這邊討論它，除了 Node.js 之外，Deno/Bun 這類後起之秀都有支援直接執行 TypeScript 的功能，對於越來越多使用 TS 的專案來說，Node.js 相對更麻煩一點，所以終於有開發者提出了這項新功能： `—experimental-strip-types` 。

[https://github.com/nodejs/node/pull/53725](https://github.com/nodejs/node/pull/53725)

不過比起一般常見的 swc、esbuild 或是 tsc 的方案，它選擇了用 wasm 版本來處理轉譯，想了解更詳細的內容跟原因，都可以直接到上方的 PR 去看。

只能說，型別真吸引人 😂

### node:sqlite on the road!!

上次提到的 [Web Storage API](https://chat.sylee.dev/2024/06/18/%E7%B6%B2%E8%B7%AF%E9%BB%91%E6%89%8B%E7%9A%84%E5%91%A2%E5%96%83-49#4cfea9e0fb724921a13d831c23179da1) 的提案，背後是用了 SQlite 來實作，然後最近就看到有開發者提出是不是可以把 SQLite 以提供獨立的 API 提供開發者，然後就接著是這篇提到的 PR 了。

[https://github.com/nodejs/node/pull/53752](https://github.com/nodejs/node/pull/53752)

看起來 SQlite 真的是 JS runtime 的首選，如果這個提案也通過的話，之後一些小專案的資料存取，說不定直接用 `node:sqlite` 處理就足夠了，超讚！🎉

## 你被 CrowdStrike 了嗎？ 😅

7/19 應該有不少同業都經歷了一次震撼教育（不過說不定能提早放假也是一件好事），就是雲端安全方案的服務商 - CrowdStrike 因為更新出現的問題而造成許多 Windows 機器出現藍白畫面的錯誤。

[Latest Crowdstrike Update Causes Blue Screen Of Death On Microsoft Windows, Multiple Users Affected](https://www.timesnownews.com/technology-science/crowdstrike-issue-windows-crowdstrike-windows-microsoft-crowdstrike-microsoft-latest-crowdstrike-update-causes-blue-screen-of-death-on-microsoft-windows-multiple-users-affected-article-111854018)

[微軟系統全球大當機重點一次看 出包公司CrowdStrike是什麼？ | 國際 | 中央社 CNA](https://www.cna.com.tw/news/aopl/202407190402.aspx)

因為離開 Win 陣營已久，老實說對它的生態已經很陌生，不過之前在前 *N 公司上班的時候還有接觸過 ，比起一般個人用戶跟小公司，中、大型的企業為了保護自家的資訊系統安全，也已經進化成使用雲端方案，不過這類平常大家沒留意的小東西(?)，也可能一些問題而造成這麼大的影響，不能不說現在軟體的架構真的已經演變的非常複雜了。😅

### 另開戰場，網路事件假訊息實測

另外因為這次的事件，不知道有沒有人也留意到這則推文，看著這種戲謔的文字當初一看到的時候就覺得怪怪的，不過也看到了不少人轉推並調侃了幾句。其實他不是真正的主事者啦，而是趁著這個事件也實際展示下 fake news 的影響層面，真的是又快又猛。

![](https://x.com/vinceflibustier/status/1814233715641389456)

### 原來敵人就在身邊

因為炎上所以不少節目都有提到這件事，剛好[股癌](https://open.spotify.com/episode/0xmFQbpQsvoZUWxZDU2pJH?si=hb-UYamyTlWDigSOsrUMOQ)也提到了資安市場的局勢就提到，結果就剛好看到有人放出了目前資安的市占，原來 MS 爸爸就在旁邊虎視眈眈 😅。

![](https://x.com/IEObserve/status/1814879949079388418)

# Local-First Conf 2024

前陣子剛好有機會得知 Local-first 這個東西，就利用一些時間抓了幾個有興趣的議程來聽聽，在收穫不少之餘，也順手寫下了這篇心得記錄文，到底這個名為 Local-first 的軟體架構又是什麼東西呢？有興趣的話可以跳轉下文 😎

![](https://bsky.app/profile/sylee.dev/post/3ky6iuoqmwf2j)

# 開源世界真有趣

### 加速 JS 是社群不斷努力的目標

因為 JS 很慢是不少開發者的共識（不過我猜應該所有 script language 都逃不過這個問題 😅），所以效能調校跟改善，一直可以看到相關的研究跟分享，之前有留意到 preactjs 的其中一位核心成員有撰寫一系列文章來講述這個議題，最近再看沒想到已經跑到[第十集](https://marvinh.dev/blog/speeding-up-javascript-ecosystem-part-10/)了，好快啊

[Speeding up the JavaScript ecosystem - Isolated Declarations](https://marvinh.dev/blog/speeding-up-javascript-ecosystem-part-10/)

作者透過這個系列文，針對 JS 生態裡的一些常見的元件，逐一提出它們的可能存在效能問題，以及如何改善的方法（當然他都會特別提一下 Deno 的角度，因為他是 Deno 的員工之一 ），非常值得一讀。

說到效能，最近也有個有趣的東西出現，就是由幾位 vue 的核心成員提出的 [e18e](https://e18e.dev/)（我其實不知道這個簡稱是怎麼對應到 Ecosystem Performance 的說 😅），看起來像是一個為了改善 JS 生態效能的一個開源社群，除了 Github 之外它們也成立了 [Discord](https://discord.com/invite/ThTP5QWCCQ) 的群組供開發者可以在上面討論相關的議題。

src: [https://x.com/e18e_dev/status/1806684617740587331](https://x.com/e18e_dev/status/1806684617740587331)

# 引領風潮的 ML

### OpenAI new stuff

不知道是不是有點疲乏了，最近對 AI 相關新聞好像都沒什麼興趣，不過這世界還是在各個不同的模型彼此的軍備競賽中前行。可能因為許多對手逐漸追了上來，OpenAI 也沒有停下它的腳步（雖然最近真的沒太多讓人驚豔的東西推出 😅）

![](https://bsky.app/profile/verge-poster.bsky.social/post/3kxkwlj73vj2r)

既然沒有新東西，就是針對不同需求的情境推出適合的產生，以擴大佔有率。所以這次 OpenAI 是放出了 GPT-40 mini 的針對小模型。

> 雖然號稱多模態支援，但目前GPT-4o mini僅在API支援文字和視覺，未來才會加入多模態能力，支援文字、圖片、影音輸入／輸出功能。GPT-4o mini現在可透過Assistants API、Chat Completions API及Batch API提供文字和視覺模型。收費方面，每100萬（大約是一本2,500頁的書）輸入字符費用為15美分，每100萬輸出字符為60美分。

- [**OpenAI公布小語言模型GPT-4o mini，理解能力超越Claude Haiku、Gemini Flash](https://www.ithome.com.tw/news/164018) by iThome**
> 

不過可能大家比較感興趣的是價格的部分，這次非常有競爭力，可以預期有許多 AI 服務會用的很開心，看起來 AI 服務也逐漸邁向 IT 基礎建設的方向走去了。😄

src: [https://x.com/OpenAIDevs/status/1813990748406317221](https://x.com/OpenAIDevs/status/1813990748406317221)

不過老實說，目前看到不少開發者更看好 Claude 的效果，雖然知道 OpenAI 應該手上還是有什麼大招，不過在這個競爭激烈的戰場，真的不往前衝很快就會被追上了（更別說還有一個開源大玩家 Meta 在等著 😎）

![](https://x.com/oran_ge/status/1815576654301086055)

### Edge AI & Apple，不遠矣？

看到有人利用 Apple 的 ML 框架 [MLX](https://github.com/ml-explore/mlx) 把 Llama 3.1 搬到 iPhone 上面跑，而且看起來反應時間還是在可以接受的程度？雖然 Apple Intelligence 或許就有某種程度的 Edge AI model 在裡面（？），不過看到可以透過 MLX 支援更多種模型，或許之後相關的運用也蠻讓人期待的 😁

[https://github.com/ml-explore/mlx-swift-examples/pull/98](https://github.com/ml-explore/mlx-swift-examples/pull/98)

**不過 Apple 會不會開放這條路，又是另一個問題了* 😂

![](https://x.com/mo_baioumy/status/1816261362311385320)

# 自幹版鍵盤真的威！

看到海總分享的那個手把手自幹鍵盤的教學覺得好熱血阿！能自組硬體的技能真好，至今還沒辦法跨界到那邊去，好生羨慕。結果才沒看完多久，又看到另一篇自組行動打字機的分享，是大家都開始走這個路線了是嗎 😅。

![](https://x.com/tzangms/status/1817737041003827253)

src: [https://cassidoo.co/post/micro-journal/](https://cassidoo.co/post/micro-journal/)

不過原本以為只是個玩具，不過後來看到原作者的分享，真的是非常用心，現在看到的版本居然已經是好幾次迭代的成果，他還把硬體的細節跟迭代的記錄都放在 Github 上面，下面也附上作者展示的影片，也可以看一下機器實際運作的樣子，真的超酷的啦～

**看完實機展示之後我也好心動，但是高機率應該是只能支援英打（可以透過 SD 或是網路直接同步文字檔案到 Google Drive 上面），可能等哪天這裡改用英文撰寫，這個工具才比較適合我（強力說服自己，不然就要剁手了 😅）*

[https://github.com/unkyulee/micro-journal](https://github.com/unkyulee/micro-journal)

![](https://www.youtube.com/watch?v=1ZP9wwYMaMY)

# **網路是個好東西**

### iPad 工作機的希望再起！

*我只是說說* 😆

![](https://x.com/Tegutech/status/1814202924844900774)

看到這個還是有心動一下，說不定終於可以把 iPad 當作工作機的願望達成了！看作者提到這是透過一個最近剛在 App store 上架的一個虛擬機的軟體 ⬇️

[iPadにUbuntu 22.04をインストールする - Qiita](https://qiita.com/Teggu/items/5951dc91a98644467846)

雖然目前效能不太好，不過如果後續還會持續調校，然後有足夠的權限（檔案系統之類的）的話，再配上一個簡單的外接螢幕，說不定真的可以拿來當作行動版的工作機了，好期待阿 🤞

### 其實邊緣人也是這樣想

我常說下次再見也是類似的概念 #不合群 😅

![](https://x.com/Bya_kuei/status/1811369934242689362)

### 星鏈越來越猛啦！

馬老闆雖然把 X 搞得烏煙瘴氣，但其他本業還是值得期待，剛推出的迷你版星鏈，真的以後不管到哪都可以開心用網路了耶 #違

![](https://x.com/Starlink/status/1811443366711754942)

### 有沒有這麼酷的校歌

日本高校的故事怎麼都這麼熱血阿，連校歌都可以這麼酷！（我跑去搜尋了一波，[它們的校歌真的是這首](https://www.youtube.com/watch?v=f0u1C4Fpu5o)，不要懷疑 😆）

![](https://x.com/futurenote2040/status/1813717644597747992)

### 我決定開闢一個 NewJeans 專區 #誤

最近中毒已深，希望多多分享給大家 😆

鈕郡司戰隊，參上！

![](https://x.com/newjeans_loop/status/1815031939075813566)

火力展示

![](https://x.com/newjeans_loop/status/1814329164591444458)

![](https://x.com/nano__jeans_/status/1813098132580016581)

![](https://x.com/onlyhanni2k4/status/1815048540902850589)