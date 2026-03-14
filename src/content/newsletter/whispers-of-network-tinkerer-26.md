---
title: "網路黑手的呢喃 - #26"
date: "2023-02-20"
description: "開源八卦多、開發者身兼行銷是很重要的、Make the Browser Great Again、你可以再試試 iPad 開發了，Node.js URL parse 改寫，靜態頁面也可以有加密保護囉，…"
tags:
  - Newsletter
---
> 開源八卦多、開發者身兼行銷是很重要的、Make the Browser Great Again、你可以再試試 iPad 開發了，Node.js URL parse 改寫，靜態頁面也可以有加密保護囉，以及黑化的網路好東西 😆
> 

---

## 開源界不意外就是八卦多 #誤

Node.js 生態中算滿知名的一個套件 - [core-js](https://github.com/zloirock/core-js)，最近發出一[長篇說明](https://github.com/zloirock/core-js/blob/master/README.md)，準備朝向專門的開源專案方式來繼續它的開發。（但因為身分 & 踩到最近的時事雷，也是馬上有開發者出來砲一波）

[https://twitter.com/RReverser/status/1625245550776930305](https://twitter.com/RReverser/status/1625245550776930305)

雖然有爭議，不過看起來 core-js 的作者近年也是蠻心酸的，要靠 OSS 養身真的還是有一定程度的困難，除非是已經發展出生態圈，有一定規模以上比較有可能吧，看到下面這位大大的留言也是覺得難過 😢

[https://twitter.com/AdamRackis/status/1625509492669485062](https://twitter.com/AdamRackis/status/1625509492669485062)

## 網路時代每位員工都要有隨時促銷自家產品的能力

如果看不出來是什麼意思的話，可以[跳轉這邊](https://twitter.com/steventey/status/1625249362178633731) 😆🤣

[https://twitter.com/whitep4nth3r/status/1625434172247404545](https://twitter.com/whitep4nth3r/status/1625434172247404545)

## Make the Browser Great Again!

*我承認是因為想不出好的標題 #誤*

印象中 StackBlitz [一直默默在耕耘這塊](https://blog.stackblitz.com/posts/introducing-webcontainers/)，現在有點開花結果的樣子啦 😄

WebContainer API 終於在最近推出啦！

> 這是啥？
> 
> 
> WebContainers are a micro-operating system based on WebAssembly designed to allow spinning up Node.js servers locally inside a browser tab.
> 

StackBlitz 的服務，就是以提供線上開發環境為主，目前看起來應該是已經運作相當成熟，所以透過[套件](https://www.npmjs.com/package/@webcontainer/api)釋出，提供其他開發者可以使用此功能。

[https://twitter.com/stackblitz/status/1625552724547993600](https://twitter.com/stackblitz/status/1625552724547993600)

無獨有偶，類似的競爭產品 - CodeSandbox 也推出了類似的功能 ⬇️

[https://twitter.com/codesandbox/status/1626304039251062785](https://twitter.com/codesandbox/status/1626304039251062785)

雖然類似不過還是跟 WebContainers 不完全相同，它們也很貼心替大家解釋了這個疑問 😄。

![Untitled](../assets/網路黑手的呢喃 #26 - Untitled.png)

## iOS 開發不是夢

順著上一個題目帶出這個小新聞。

雖然之前有出來[潑過冷水](https://blog.sylee.dev/blog/2019-07-14-ipad-workstation)，不過還是不少開發者對 iOS 上的開發期待，也蠻常可以看到有開發者出來展示他們怎麼在 iPad 上面作開發工作。（上一則無論是 StackBlitz 或是 CodeSandbox 其實某種程度都可以提供類似的實現）

雖然我自己是很不推薦啦（*等你們年紀大就知道，哼 😆*），不過如果有類似需求的開發者，應該也會注意到這款 app - [Blink](https://blink.sh/)。其實就是一般 iOS app 上通常開發的解法，就是透過 ssh client 連線到遠端的另一臺機器去實際處理，但 Blink 的特性是不同於 ssh 它走的是 mosh 這個特別為了行動裝置網路狀況不穩定而推出的協定（[它還是需要依賴 ssh，但只負責建立連線，後來就轉成自己走 UDP 協定](https://www.arthurtoday.com/2013/03/mosh-introduce-and-install-on-ubuntu.html) ）。

之前用 Blink 也是滿開心的，連線品質真的比起其他的軟體好上許多，所以如果喜歡用 iPad 從事開發的也可以試試看。不過因為後來我放棄所以很長一段時間沒有使用了，然後最近看到他們也走到這步了 -  Blink Build，就是直接整合 remote host 的功能（看起來應該是整合 docker compose 的功能，指令蠻相似的 😄），所以現在你不需要在自己開機器了，透過 Blink 可以完全搞定！

*不過需要升級到 Plus 版本才能用，訂閱制阿~~ 😅*

[https://www.youtube.com/watch?v=78XukJvz5vg](https://www.youtube.com/watch?v=78XukJvz5vg)

## 又有 Node.js 的 bulit-in module 用 C++ 改寫了

WHATWG URL parse 從 [Node.js 19.7.0 之後](https://github.com/nodejs/node/pull/46410)就會用新版本的 Ada 替換囉～

前陣子 fs 也是有部分改寫，看起來這會不會演變成效能優化的一種手段。

[https://twitter.com/nodejs/status/1622707746716917761](https://twitter.com/nodejs/status/1622707746716917761)

## 沒想到靜態頁面也可以有加密保護了！

網路上就是可以常常看到一些有趣又實用的發想，之前私有的頁面通常都是需要透過後端的功能，才能實作這類的功能，但現在靜態頁面也可以做到囉（透過 [AES-256](https://ithelp.ithome.com.tw/articles/10249488)）！

把線上履歷放著平常加密保護，需要的時候丟過去對方好像也是蠻方便的使用情境 😄

[https://twitter.com/thecat/status/1627086828485615617](https://twitter.com/thecat/status/1627086828485615617)

---

## 網路是個好東西

### **大大分享接外包的經驗 & 注意事項，非常有參考價值**

[https://twitter.com/haoel/status/1626050907610976259](https://twitter.com/haoel/status/1626050907610976259)

### 公司經營真的很困難阿～

[https://twitter.com/vikingmute/status/1625673343537156096](https://twitter.com/vikingmute/status/1625673343537156096)

### 真的，不要懷疑選後面那項就對了 😆

[https://twitter.com/TinyDenny/status/1625117692981133312](https://twitter.com/TinyDenny/status/1625117692981133312)

### 騙騙小孩可以，老人沒有熱情

[https://twitter.com/XinWen_Chang/status/1627460776796762112](https://twitter.com/XinWen_Chang/status/1627460776796762112)