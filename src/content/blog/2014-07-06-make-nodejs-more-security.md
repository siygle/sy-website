---
title: 'Make your Node.js app more security'
date: '2014-07-06'
tags: ['Security', 'Node.js', '2014']
draft: false
summary: '不經意看到有人丟出這個關於 nodejs app 安全性的分享，順手把內容和一些相關的東西做個整理，也當作自己的筆記，之後如果有需要的話可以方便拿出來參考'
---

<script
  async
  class="speakerdeck-embed"
  data-id="c5d895008c77013162b85e7a2e8ee0d7"
  data-ratio="1.33333333333333"
  src="//speakerdeck.com/assets/embed.js"
></script>

不經意看到有人丟出這個關於 nodejs app 安全性的分享，順手把內容和一些相關的東西做個整理，也當作自己的筆記，之後如果有需要的話可以方便拿出來參考。

直接列結論：

- Ensure HTTP GET requests are idempotent - GET 不應有更改的行為，有更動行為的則要記得上 [CSRF](https://github.com/expressjs/csurf) 保護
- Remove X-Powered-By header and do not use generic session cookie name - 不要讓 hacker 輕易知道他要打的目標是什麼
- Encode for all contexts on both server and client to protect XSS attack - 嗯，就是 XSS（爆），該做的編碼不要少，可以考慮搭配 [CSP](http://www.html5rocks.com/en/tutorials/security/content-security-policy/) 列出白名單。
- Use HTTPOnly and Secure attributes on session cookie, include CSP headers -
- verify input types as part of the validation - 這可以參考一下 p.31 開始的例子，如果沒有檢查形態的話，可以利用重複 key 的方式來攻擊。
- Review regex for evil pattern to mitigate ReDoS attack - 避免直接使用輸入值當作 reg pattern

其實關於安全性的問題還很多，可以參考 [OWASP TOP 10](http://mmdays.com/2013/12/11/owasp_top_10/)，OWASP 列出常見的攻擊方式，也提出一些防治的方法。nodejs 的開發者可以特別參考一下 [NodeGoat](https://www.owasp.org/index.php/OWASP_Node_js_Goat_Project) 這個專案。

---

順便提一下這個組織

<blockquote class="twitter-tweet" lang="en">
  <p>
    Know of any other good <a href="https://twitter.com/search?q=%23nodejs&amp;src=hash">#nodejs</a>{' '}
    security references, talks, or posts we could list? Please let us know!&#10;&#10;
    <a href="https://t.co/mGhr2kP4aU">https://t.co/mGhr2kP4aU</a>
  </p>
  &mdash; Node.js Security (@nodesecurity){' '}
  <a href="https://twitter.com/nodesecurity/statuses/444518204623175680">March 14, 2014</a>
</blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

因為 nodejs 近來火熱的關係，安全性的問題也被人開始拿出來放大檢視，雖然 JS 方面的安全早也有開發者做過不少相關的議程分享，不過加入後端開發的 nodejs 與海量的 npm modules，也成為另一種新的安全隱憂。

正因為這樣，在 nodejs 社群之中發起了這個特別針對安全問題的團體，他們會針對潛在的安全問題，發佈公告來提醒開發者，也會審核 npm 上的模組是否有安全上的問題。

## <iframe src="//www.slideshare.net/slideshow/embed_code/key/TifnLPCc6fffg" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" allowfullscreen> </iframe>

### helmet

[![NPM](https://nodei.co/npm/helmet.png)](https://nodei.co/npm/helmet/)

在整理這篇的時候，無意間有注意到這個好用的 module，它內建支援多項與網安相關的協定，各別都可以透過簡單的參數來設定，因為是 express middleware，所以直接嵌進來就可以用了，相當方便 ;p
