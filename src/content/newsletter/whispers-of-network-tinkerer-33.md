---
title: "網路黑手的呢喃 - #33"
date: "2023-07-05"
description: "The npm Public Registry does not validate manifest information with the contents of the package tar…"
tags:
  - AI
  - Cloud
  - Deno
  - ECMAScript
  - Newsletter
  - Security
  - bun
  - npm
---
JS 又要出現新的 keyword 了、酷酷的雲端開發語言 Winglang、一些 Deno & Node.js 的更新、npm 又被爆安全性問題😅、JS陣營又上演 drama 啦，當然還有 AI 跟網路好東西👍。

*因為最近 Twitter 越來越不穩定，可能從這篇開始，推文的部分都會改成直接截圖附上連結的方式，防止哪天馬老闆心血來潮就把 embedded tweet 這個功能給砍了😅*

---

# New keyword `using`

![ref: [https://twitter.com/mattpocockuk/status/1669630994280849408](https://twitter.com/mattpocockuk/status/1669630994280849408)](../assets/網路黑手的呢喃 #33 - Untitled.png)

ref: [https://twitter.com/mattpocockuk/status/1669630994280849408](https://twitter.com/mattpocockuk/status/1669630994280849408)

最近放出的 [TypeScript 5.2 beta](https://devblogs.microsoft.com/typescript/announcing-typescript-5-2-beta/) 裡面看到一個有趣的東西，新出現一個語言變數 `using`，發現也不少相關網站也介紹過這個了，它源自於其中一個 ECMAScript 提案 - [**ECMAScript Explicit Resource Management](https://github.com/tc39/proposal-explicit-resource-management)，**目前已經進到 stage3 所以距離面世也應該不遠了。

其實看過說明跟範例之後，覺得很像 Golang 裡面的 defer 😝

用途就是針對外部資源的管理（應該常見的就是 file/DB 的開啟、關閉這類的行為），Golang 的 defer 就是可以連線的時候直接先宣告好使用後的關閉

```jsx
func main() {
    f := createFile("/tmp/defer.txt")
    defer closeFile(f)
    writeFile(f)
}
func createFile(p string) *os.File {
    fmt.Println("creating")
    f, err := os.Create(p)
    if err != nil {
        panic(err)
    }
    return f
}
func writeFile(f *os.File) {
 ...do the write file stuff
}
```

然後對比下 JS 的這個 using 功能：

```jsx
import { open } from "node:fs/promises";

const getFileHandle = async (path: string) => {
	const fileHandler = await open(path, "r");

	return {
		fileHandler,
		[**Symbol.asyncDispose**]: async () => {
			await fileHandler.close();
		},
	}
};

// main
{
	await **using** file = getFileHandle("test_file.txt");
}
// That's it! I/O will disposed automatically!
```

主要就是宣告為 `Symbol.dispose` & `Symbol.asyncDispose` 就會視為外部資源，然後就可以搭配 `using` & `await using` 來使用，更多範例跟說明也可以參考[相關說明](https://www.totaltypescript.com/typescript-5-2-new-keyword-using)。

# This’s how the Cloud works!

![ref: [https://twitter.com/rybickic/status/1673453422417268737](https://twitter.com/rybickic/status/1673453422417268737)](../assets/網路黑手的呢喃 #33 - Untitled 1.png)

ref: [https://twitter.com/rybickic/status/1673453422417268737](https://twitter.com/rybickic/status/1673453422417268737)

最近無意間發現這個酷酷的東西 - [**winglang**](https://www.winglang.io/) ⬇️

[https://github.com/winglang/wing](https://github.com/winglang/wing)

可能瞄一眼會以為就是什麼新面世的 IaC(Infrastructure as Code) 工具，我自己一開始也是這麼認為，不過後來翻了下文件跟他們的範例後，應該還是有些微的不同。（與各 IaC 工具的對比，這個官方已經有準備好[相關解答](https://www.winglang.io/docs/category/diff-from-other-solutions)了😄）

*上圖那個就是一個簡單的範例，相信大家一看就知道，就是起一個 http server，然後把 POST 給定的 url 把內容抓回來存到 S3 文件裡面。除了上述之外，也可以參考官方的 [hello world](https://www.winglang.io/docs/start-here/hello) 範例。*

大家應該可以發現到幾個特點：

- 它名稱就叫「lang」，所以是自定義的語法（這點跟 Terraform 的 HCL 應該類似？），然後再根據你要產出的對應目標（目前支援："tf-aws", "tf-azure", "tf-gcp", "sim", "awscdk”）。
- 跟一般 IaC 只定義系統架構不同，它還包含了實際執行的 codebase。

![Untitled](../assets/網路黑手的呢喃 #33 - Untitled 2.png)

- 非常方便的本地測試模式，會起一個 web console 的介面可以看到你的實際程式架構（而且還可以實際執行）。

目前看起來專案還在草創期，也不太確定如果遇到複雜的架構或規模比較大型的服務，能不能一樣跟 hello world 一樣讓人驚豔，不過非常認同這種簡化雲端開發的走向，最終讓開發者能快速上手，專注在「開發」而不是兜弄那堆複雜的設定，期待它能持續成長（過一陣子再回來看看😄🤞）！

**此專案作者是原本 AWS-CDK 的主開發者之一 - [Elad Ben-Israel](https://github.com/eladb)。*

# Deno & Node.js 近期更新

最近沒有什麼太引人注目的新東西，不過 Node.js 跟 Deno 也還是不斷進化中，持續引入不少有趣的新東西。

Node.js 目前的版本已經默默來到 20.4.0 啦，當然大家都已經很清楚 Node.js 版本發佈的規則，所以目前 v20 就是開發版本，還沒正式轉成 LTS，所以目前還有會有不少變動。日前剛釋出的 20.4.0，除了[加上了上述提及的 `using` & `dispose` 功能](https://github.com/nodejs/node/pull/48518)之外，還有一個針對日前推出的 test runner 的功能 → [`MockTimer` API](https://github.com/ErickWendel/node/blob/0424bf5ebaa809a98a2bcf4833dae66e5be7f43f/doc/api/test.md)，也就是在測試中模擬 timer 的行為而不需要真的等待。順道也一併發現 test runner 也已經涵蓋許多測試的情境了，說不定以往諸多的 test framework 也可以漸漸淘汰了（感覺 Node.js 默默整合越來越多必要的功能進核心了，難道是受到 Deno 這類後起之秀的影響 😄）。

[https://github.com/nodejs/node/pull/48643](https://github.com/nodejs/node/pull/48643)

然後另一廂的 Deno，從之前的消息看來應該是夏天會釋出 2.0，所以目前開發團隊應該是緊鑼密鼓在趕工中，如果想了解 Deno 的開發進度與變更的話，可以考慮訂閱下方這位日本開發者，很有心在週報中會[整理 Deno 生態的每週更新](https://uki00a.github.io/deno-weekly/)。

最近他也整理了一些近期的變更與消息，非常值得一看。⬇️

![ref: [https://zenn.dev/uki00a/articles/frontend-development-in-deno-2023-summer](https://zenn.dev/uki00a/articles/frontend-development-in-deno-2023-summer)](../assets/網路黑手的呢喃 #33 - Untitled 3.png)

ref: [https://zenn.dev/uki00a/articles/frontend-development-in-deno-2023-summer](https://zenn.dev/uki00a/articles/frontend-development-in-deno-2023-summer)

其中有不少也曾經在這邊提及過，不過有一件之前猜測，目前已經證實的，就是 Deno 自家的前端框架 - Fresh，先前說過感覺很像是邊緣專案，因為都沒有開發團隊的人在回覆，然後 issue 也是累積了一大堆，原本以為要被放生了，幸好[目前終於有正式的維護者了](https://deno.com/blog/fresh-1.2)，就是新加入 Deno 也是 [Preactjs](https://preactjs.com/) 的核心開發者之一的 - [**Marvin Hagemeister](https://github.com/marvinhagemeister)（**應該大家都知道，Fresh 是基於 Preactjs 而不是 React**）。**看來能開始期待 Fresh 後續的發展了！🎉

# 又出現安全性問題了😅

沒錯，又是 npm 啦🤣

> The npm Public Registry does not validate manifest information with the contents of the package tarball, relying instead on npm-compatible clients to interpret & enforce validation/consistency.
> 

這位前 npm CLI 的員工說明了這個叫做「Manifest Confusion」的安全性問題到底是什麼。簡單說就是目前 npm 運作的機制，並不會真的把套件本體的那個壓縮檔 `.tar` 拿來跟上傳到 [`https://registry.npmjs.org`](https://registry.npmjs.org) 的 manifest 作比對驗證，所以可以利用兩者不同來進行攻擊。

目前唯一能偵測並擋下這種潛在危險的，只有先前提過的資安公司 - Socket（就是 Node.js 知名套件 standard 的作者出來創業的），它們也寫了[一篇相關的文章](https://socket.dev/blog/manifest-confusion)。

![ref: [https://twitter.com/darcy/status/1673749748338008083](https://twitter.com/darcy/status/1673749748338008083)](../assets/網路黑手的呢喃 #33 - Untitled 4.png)

ref: [https://twitter.com/darcy/status/1673749748338008083](https://twitter.com/darcy/status/1673749748338008083)

不過有另一個吸引到我注意的，是作者內文中「**What is GitHub doing about this?**」這段提及的，貌似 Github 的沒有作為。

> To my knowledge, they have not made any significant headway, nor have they made this issue public - instead, they've actually [**divested**](https://techcrunch.com/2023/03/27/github-slashes-engineering-team-in-india/) their position in npm as a product the last 6 months & refused to follow-up or provide insight into any remediation work.
> 

npm 不會被放生了吧…😢😰

# 又是這對哥倆好的Drama

真的覺得[這兩間公司是生來互槓](https://chat.sylee.dev/2023/02/02/%E7%B6%B2%E8%B7%AF%E9%BB%91%E6%89%8B%E7%9A%84%E5%91%A2%E5%96%83-25)的😆

JS 生態界的兩個歡喜冤家，最近又開戰了。

![ref: [https://twitter.com/localhost_5173/status/1675142562473185281](https://twitter.com/localhost_5173/status/1675142562473185281)](../assets/網路黑手的呢喃 #33 - Untitled 5.png)

ref: [https://twitter.com/localhost_5173/status/1675142562473185281](https://twitter.com/localhost_5173/status/1675142562473185281)

Deno 先發了篇文章，講了模組系統分歧的問題，提到原本跟 Node.js 一起成長的 CJS 應該要成為歷史了，大家應該開始擁抱目前的標準 ESM，當然裡面不免俗也說了為什麼哦應該這麼做的原因（這可以直接去看文章，非本文重點🤣）。

[CommonJS is hurting JavaScript](https://deno.com/blog/commonjs-is-hurting-javascript)

其實我當下看到這篇的時候就想說應該會[炎上](https://twitter.com/deno_land/status/1674810733740294144/retweets/with_comments)了，畢竟並不是所有 Node.js 生態的開發者都這麼認為，不過沒想到 bun 這時候跳出來發了下面這篇文章：

> **CommonJS is not going away**
[https://bun.sh/blog/commonjs-is-not-going-away](https://bun.sh/blog/commonjs-is-not-going-away)
> 

這擺明就是衝著 Deno 而寫的嘛😅

*（我只想看血流成河，什麼 CJS 跟 ESM 根本就不重要！ #大誤）*

不過老實説其實也沒甚麼好爭的，就是觀點不同而已，兩邊各有各自的優缺點存在，不過要把現有的東西丟掉畢竟還是比較困難一點，轉移成本是很高的，你不可能把舊有累積的生態就這樣丟掉，你也不太可能強迫所有開發者去作轉移，所以 bun 的說法應該會比較多開發者支持，畢竟 Breaking change 最麻煩了啦！（當然我自己更希望能無痛升級，就是 ESM 可以直接全相容過去用 CJS 撰寫的套件，不過看起來目前還沒辦法 😢）

不過我覺得這兩家的戰爭還會繼續下去，JS 社群真的不缺 Drama。🤣

# 2023流量密碼 - AI

### 又是 Vercel！推出便於開發 Machine learning 的套件

不能不說 Vercel 在前端開發這個領域，幾乎已經是沒什麼對手了阿，針對各種開發場景提供非常方便的開發流程與相關工具。這波 AI 浪潮，只要是網頁服務幾乎都是佈署在 Vercel 平台上。

最近它們又有新動作了 → `npm install ai` 一個他們打包好針對 AI 服務開發的 SDK，透過這個工具（當然也要搭配他們的平台🤣），就可以快速開發 Machine Learning 的網路服務。

[https://twitter.com/steventey/status/1669407912400388096](https://twitter.com/steventey/status/1669407912400388096)

除此之外，Vercel 還成立了 AI Accelerator 的計畫，跟創業加速器類似不過特別針對 AI 的應用就是了。

> Participants in our AI Accelerator program will gain access to a range of resources and benefits valued at over $850k:
[https://vercel.com/blog/vercel-ai-accelerator](https://vercel.com/blog/vercel-ai-accelerator)
> 

一口氣提供你 $850K 的資源可以運用在 AI 產品的開發，包含諸多 AI 服務平台的使用額度，以及諮詢的服務。

姑且不論貴鬆鬆的費用，在網路服務這塊（特別是前端的部分）Vercel 還是一如往常地動作非常快速。

[https://twitter.com/AIWhispers4U/status/1669895301237456897](https://twitter.com/AIWhispers4U/status/1669895301237456897)

### 要賺錢果然還是要 buzzword

很猛的獨立開發者，順便跟大家上了一課，爭什麼語言、架構、技術桟都是多餘的，趁著風頭先把錢掙了才是重點 #好像無誤 😆

[https://twitter.com/ingramchen/status/1676071998429220865](https://twitter.com/ingramchen/status/1676071998429220865)

# 網路是個好東西

### 看到機器人就好興奮啊!!~~

[https://twitter.com/xiaohuggg/status/1676233229907673088?s=20](https://twitter.com/xiaohuggg/status/1676233229907673088?s=20)

### 覺得這根本是Mastodon的最佳應用

![ref: [https://g0v.social/@walkingice/110644585368958809](https://g0v.social/@walkingice/110644585368958809)](../assets/網路黑手的呢喃 #33 - Untitled 6.png)

ref: [https://g0v.social/@walkingice/110644585368958809](https://g0v.social/@walkingice/110644585368958809)

### 我最近每天都是這個狀態😆

[https://twitter.com/shouldhaveanima/status/1673002035816595456](https://twitter.com/shouldhaveanima/status/1673002035816595456)

### Burnout 真的很可怕，大家身心都要照顧好～

[https://twitter.com/haoqunjiang/status/1673691794650054656](https://twitter.com/haoqunjiang/status/1673691794650054656)

### Respect!

![ref: [https://twitter.com/weihanglo/status/1675088724953030687](https://twitter.com/weihanglo/status/1675088724953030687)](../assets/網路黑手的呢喃 #33 - Untitled 7.png)

ref: [https://twitter.com/weihanglo/status/1675088724953030687](https://twitter.com/weihanglo/status/1675088724953030687)

### 臺灣超棒的啦！（代言人也很棒😍）

[https://twitter.com/Taiwan_in_Japan/status/1672192775792754689](https://twitter.com/Taiwan_in_Japan/status/1672192775792754689)