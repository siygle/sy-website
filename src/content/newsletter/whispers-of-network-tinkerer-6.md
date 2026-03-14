---
title: "網路黑手的呢喃 - #6"
date: "2022-01-13"
description: "rust 持續發力！咖啡送查表、好文推薦（系統架構）、開源圈 drama 再起..."
tags:
  - Newsletter
  - Rust
  - npm
---
> rust 持續發力！咖啡送查表、好文推薦（系統架構）、開源圈 drama 再起...
> 

---

## Hello, youki!

[https://twitter.com/utam0k/status/1478947384298475522](https://twitter.com/utam0k/status/1478947384298475522)

> youki is an implementation of the OCI runtime-spec in Rust, similar to runc.
> 

rust 正在進行一個持續[重寫工具圈](https://github.com/TaKO8Ki/awesome-alternatives-in-rust)的動作，想當然爾 container 這麼熱門的圈子一定會出現的，果不其然最近就出現了 :)

## 工欲善其事，必先利咖啡 #誤

[https://twitter.com/manjingyu/status/1479360878038642695](https://twitter.com/manjingyu/status/1479360878038642695)

身為碼農應該很多都是[咖啡](https://codecoach.co.nz/coffee-mug-code/)[成癮者](https://www.buymeacoffee.com/)，但是你有認真了解自己喜歡到到底是哪種咖啡嗎？這邊有咖啡達人熱心幫各位碼農準備好了，下次點單品咖啡的時候記得查一下 😆

## 好文推：我做架构的一些原则

[https://twitter.com/haoel/status/1473202816114376710](https://twitter.com/haoel/status/1473202816114376710)

[酷壳](https://coolshell.cn/)一直是我很喜歡的部落格，常常可以拜讀到許多深具價值的好文章。最近該站的作者又寫了一篇他如何進行系統架構的準則，相當具有參考價值。🙌

## 開源圈 drama 再起

[https://twitter.com/Techmeme/status/1480327550069280770](https://twitter.com/Techmeme/status/1480327550069280770)

最近 npm 生態圈又上演新的 drama 了，就是知名套件 faker.js & color.js 的作者因為氣不過自己開發的套件被大企業長期性的「白嫖」，所以一氣之下就加了一些示威性的東西進去，然後就一堆依賴的套件爆炸了。

最近這幾天都可以看到不少針對這個事件提出看法的一些

[https://twitter.com/mitsuhiko/status/1480505691941093385](https://twitter.com/mitsuhiko/status/1480505691941093385)

[https://twitter.com/arunoda/status/1480480219072847873](https://twitter.com/arunoda/status/1480480219072847873)

除了針對開源維護的討論之外，居然看到 Golang 圈子的 Russ 也針對這個事件提出看法，不過他是針對套件依賴的問題來延伸討論。（簡單地歸納，大神建議套件依賴應該是 [*high-fidelity build*](https://research.swtch.com/vgo-mvs)，而非自動認定套件的最新版本，文中也聽到 npm 其實有現成的指令可以處理，也就是 [`npm shrinkwrap`](https://tech.meituan.com/2015/10/23/npm-shrinkwrap.html)）。

[https://twitter.com/_rsc/status/1480583224220864514](https://twitter.com/_rsc/status/1480583224220864514)

也可以看到一些中文推圈的大大對這件事的一些意見反饋

[https://twitter.com/gugod/status/1480552560046280706](https://twitter.com/gugod/status/1480552560046280706)

[https://twitter.com/ingramchen/status/1480713106640994304](https://twitter.com/ingramchen/status/1480713106640994304)

[https://twitter.com/viktor_lin/status/1480472924977266696](https://twitter.com/viktor_lin/status/1480472924977266696)

[https://twitter.com/bitinn/status/1480403434419286018](https://twitter.com/bitinn/status/1480403434419286018)

這是我自己的想法 😁

[https://twitter.com/siygle/status/1480443018822168583](https://twitter.com/siygle/status/1480443018822168583)

不過說真的這可能也不是短時間有辦法解決的問題，我也真心不覺得真的會有什麼大企業會認真看待這個問題，更別提規模更小的公司或新創了。

不過上述大大提及的基金會方式的確是值得思考的路線。身為從開源社群獲利的公司，能適當的回饋讓開源維護者能更餘裕的投入，這樣才能產生正向的循環。若能透過基金會這種較具規模的組織，來負責規劃、管理，與作為與大企業溝通的橋樑，感覺是比較可行（可能實現）的方案。

然後 Russ 提及的 npm 目前對套件依賴處理方式的缺點，或許也會是 npm 團隊近期會納入考量改善的一點（可以看到推文中 [npm cli 的人有提到](https://twitter.com/MylesBorins/status/1480902740767346698)）。

不過老實說，看到 Marak（faker.js 的作者）在 [Readme](https://github.com/Marak/faker.js/commit/2c4f82f0af819e2bdb2623f0e429754f38c2c2f2#diff-1550ec65ac92f65817fc28928dfef526912b5f52356ff43651369bae92f56031) 上留了這句話，心中也是百感交集😢😭，說真的，如果 Aaron 今天還活著看到現今的世界不知道作何感想。

> What really happened with Aaron Swartz?
>