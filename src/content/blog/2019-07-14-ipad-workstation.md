---
title: 'iPad 工作機  - 2019 ver.'
date: '2019-07-14'
tags: ['Geek', 'chat', '2019']
draft: false
summary: '因為工作性質的關係，蠻常有機會會帶著工作機出門，幾年前拿著 Air 的時候沒什麼特別的感覺，但是因為近年換了工作機變成 MBP（舊版），出門跟帶一顆大石頭差不多，所以才開始找看看有沒有什麼替代方案'
---

### **人為什麼要想不開...XD**

因為工作性質的關係，蠻常有機會會帶著工作機出門，幾年前拿著 Air 的時候沒什麼特別的感覺，但是因為近年換了工作機變成 MBP（舊版），出門跟帶一顆大石頭差不多，所以才開始找看看有沒有什麼替代方案。

**為什麼不直接買 Air or MB?**

的確，如果是純工作需求的話，可能還是弄一台輕薄型的來用可能更實際一點，但是因為個人的用途不只是「輕薄的工作機」而已，筆記、偶一為之的簡報，所以我一開始就希望找 iPad 的解決方案。所以，這篇不是要推坑你非得弄一台 iPad 來折磨你的工作效率（真的，現階段要拿 iPad 來取代寫程式，太痛苦了...0rz），主要還是看你的需求為何。

### 我的清單（參考用）

開始搜尋相關資料的時候才發覺，自從新版 iPad Pro 上市之後，又出現了一波希望用 iPad 來取代 MBP 的文章，所以其實可以找到不少有用的資訊，也得感謝許多 iOS 開發者，前仆後繼地開發許多開發工具的 App，真的在 2019 是可以「部分」完成這個心願了 ;p

**硬體周邊**

推薦 iPad Pro，雖然輕薄好攜帶是首選，但是如果要長時間工作，還是買個大一點的螢幕會好一點。

鍵盤就很主觀了，不過一樣考慮到工作舒適度，[Apple keyboard](https://www.apple.com/tw/smart-keyboard/) 我就不考慮了，那手感完全不行...，因為我不想要另外多帶一個鍵盤到處跑，所以我在評估的時候就只找一體成型的鍵盤+外殼，當初在看有注意到兩款：[Brydge Pro](https://youtu.be/DRU9eoW22AU) & [Logitech Slim Folio Pro](https://youtu.be/kd3ebCyiO14)，前者看起來很貼近 MBP 的鍵盤，但是因為國內沒有代理，想到要從國外買就累了，後來就決定用後者，按鍵排列幾乎跟 Mac 一致不需要重新適應對我就很足夠了，手感見仁見智但我覺得比 Apple 本家的好打太多。

**筆記**

除了替代工作機的需求之外，筆記也是我很常的使用的情境，如果跟我一樣喜歡手寫的人，新款的 [Apple Pencil](https://www.apple.com/tw/apple-pencil/) 雖然頗貴但是比起前款，充電問題跟寫作體驗真的提升許多，再搭配上好用的軟體，諸如 [Notability](https://www.gingerlabs.com) 或 [GoodNotes](https://www.goodnotes.com) 就足矣（個人的首選是前者，因為它有提供錄音功能）。
另外 iPad 在支援分割視窗之後讓作筆記這個行為又更輕鬆了。不知道大家還記不記得軟體曾經曇花一現的
[Courier](https://www.theverge.com/2019/6/3/18648919/microsoft-surface-dual-screen-centaurus-device-teaser) 這個產品（近期好像 MS 打算把它翻出來了），當然就覺得有這種分割模式來寫筆記一定很方便！結果是 Apple 先實現了 XD

中文輸入還是有不少改善空間，因為 iPad 上切換輸入法有非常明顯的延遲，熟悉 desktop 的會有點不習慣，期待未來版本能持續改進了。

**寫程式**

這部分算是當初評估的重點，如果不能一定程度替代工作的需要的話就無解。但正如開場提到的，在 iPad 支援本地開發的需求之前（File & Terminal），目前所有的解法都不算友善，所以妳真的不需要用 iPad 當作工作機，不要自虐啊 XD

我的工作項目大部分是 server & web，所以一陣兜弄之後，的確是可以涵蓋大約 70~80% 的開發行為了。因為不支援本地開發，目前所有的解法幾乎都得透過遠端機器（是也可以期待文末的 RPi 方案啦 XD）。

我的解法是 VPS+[blink](https://www.blink.sh)+vim

VPS 就選近一點端點，速度夠快就好，重點是 [blink](https://github.com/blinksh/blink) 這個神物，簡單說它就是一個支援 ssh 的 iPad terminal，也支援一些基本的指令。但重要的是除了 ssh 之外，它主要是支援 [mosh](https://mosh.org)，[它能讓在不穩定網路之下仍舊保有順暢的使用體驗](<(https://zh.wikipedia.org/wiki/Mosh)>)。

vim 應該就不用多介紹了，伺服器上的編輯器首選，平常用慣的話基本上是無痛切換。當然你也可以拿像 [Coda](https://panic.com/coda-ios/) 這類的軟體來使用。

基本上只要牽涉到 GUI 基本上是無解，應該都沒辦法能在 iPad 上進行開發，網頁開發必須的 devTools 也是目前開發上的痛處，不知道是不是 iOS 作業系統的限制，本家的 safari 跟第三方的 Chrome/Firefox 都沒有提供，所以只能透過像 [inspect](https://apps.pdyn.net/inspect/) 這類的工具（但是我自己用起來，覺得跟桌面版的開發工具還是差太多了）。

**其他作法**
不知道是不是因為 iPadOS 推出讓大家又看到一線生機，可以看到不少相關的文章，有興趣的也可以參考看看其他人是怎麼弄的。

- [Using the iPad Pro as my development machine](https://arslan.io/2019/01/07/using-the-ipad-pro-as-my-development-machine/)
- [Coding on and iPad Pro in 2019](https://andrewbrookins.com/technology/coding-on-ipad-pro-2019/)
- [How to code with iPad(Pro)](https://medium.com/@igorandreev/how-to-code-with-ipad-pro-make-your-2019-year-of-mobile-development-e4e678daab77)

### More Reference

<blockquote class="twitter-tweet" data-lang="zh-tw">
  <p lang="en" dir="ltr">
    Full dev environment on iPad VS Code running on{' '}
    <a href="https://twitter.com/GCPcloud?ref_src=twsrc%5Etfw">@GCPcloud</a>{' '}
    <a href="https://twitter.com/zeithq?ref_src=twsrc%5Etfw">@Zeithq</a> Now `dev` + deploys iPad OS
    13 multitasking preview <a href="https://t.co/nHKQGTlMAh">pic.twitter.com/nHKQGTlMAh</a>
  </p>
  &mdash; ▸fouad (@fouadmatin){' '}
  <a href="https://twitter.com/fouadmatin/status/1147984362173976576?ref_src=twsrc%5Etfw">
    2019年7月7日
  </a>
</blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
*突然間，大家都開始兜弄 iPad 工作機了XD*

<blockquote class="twitter-tweet" data-lang="zh-tw">
  <p lang="en" dir="ltr">
    Basic setup:- iPad Pro 11&quot; (with USB-C)- Raspberry Pi 4 (ssh + power via USB-C)- Blink
    Shell for SSH- Raspian with Node.js, Git, Vim, etc.
  </p>
  &mdash; Brent Jackson (@jxnblk){' '}
  <a href="https://twitter.com/jxnblk/status/1147558290676703238?ref_src=twsrc%5Etfw">
    2019年7月6日
  </a>
</blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
*後來看到這種解決方案也是有心動XDD*
