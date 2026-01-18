---
title: 'val.town 實戰，快速實作一個 Bluesky 轉貼機器人'
date: '2023-05-28'
tags: ['valtown', 'deno', 'bluesky']
draft: false
summary: 'val.town 真的是的方便的好東西 😁'
authors: ['sy']
---

## 簡介
之前曾經在週報裡面有提過 [val.town](https://chat.sylee.dev/2023/03/16/%E7%B6%B2%E8%B7%AF%E9%BB%91%E6%89%8B%E7%9A%84%E5%91%A2%E5%96%83-27#41e64f14745e4d3bb5b3fc0c0dc0b92f) 這個好用的小工具，如果是第一次聽到這個服務的名稱的話，這是他的自我介紹 ⬇️

> [**Val Town**](val.town) is a social programming environment to write, run, deploy and share code.

你可以初看會以為就是一個線上可以直接跑程式的小服務，也沒有特別的，不過如果實際去玩它會發現作者的一些巧思在裡面😄。為什麼它會自稱為 **social programming** 的原因，就是它不單是能提供撰寫小型、模組化的程式，它還可以重用這些可能是別人已經寫好的功能，直接引入到你的程式裡面來使用。

此外，val.town 本身是用 Deno 當基礎開發的，所以想當然可以直接使用 Deno 生態圈裡面的[模組功能](https://docs.val.town/tips)來使用（`npm specifiers` & `direct HTTP import`）。把上述這兩個東西組合使用之後，你會發現原本可能需要花一段時間開發的功能，現在跟拼積木一樣組合一下可能就完工了！😆

如果你看到這邊對這小工具開始感興趣的話，歡迎花一點時間看一下它們的[介紹影片](https://docs.val.town/demo)，可以快速上手👍。

## 實戰
自從拿到 bluesky 邀請之後就很喜歡這個新興社群（這部分感興趣也可以參考我之前寫的[這篇文章](https://chat.sylee.dev/2023/04/30/another-callenger-bluesky)），不過畢竟還在封測所以使用者人數當然沒辦法跟 Twitter、Mastodon 這類服務相比，不過因為它們蠻看重開發者所以早早就提供不少開發資源，所以雖然還在封測期間，你如果有些基本開發能力的話，是可以開始兜弄一些好玩的東西😆。

因為測試中，所以很常需要在不同平台中切換，然後轉文章可能也得手動來處理，然後就突然想到🔽
**怎麼不試試用 val.town 來弄一個簡單的轉文功能！**

### 目標 & 需要的前置作業

* 希望能夠支援不同平台的訊息轉移（Twitter 是首要的需求，但如果能彈性支援其他平台的話更好）-> 透過 RSS 因為有 [**RSSHub**](https://docs.rsshub.app/)，往後即便需要接上其他的消息來源，就算沒有直接提供 RSS 支援，也可以透過 RSSHub 來處理。
* Val Town 作為處理邏輯的中樞，以這個目標的話，如果有直接處理 RSS 的相關功能的話就會很方便 -> 就發現了作者已經寫了[類似的模組](https://gallery.val.town/gallery/rss)啦🙌 - 我這邊直接拿作者的 **[newRSSItems](https://www.val.town/v/stevekrouse.newRSSItems)** 來使用，它可以直接抓出時間點之後更新的文章。
* 定期轉文 -> 本來是想說有沒有需要弄一個排程的東西，後來發現 val.town 本身就支援啦 - Scheduled Vals！
![scheduled vals](https://img-assets.sylee.dev/file/acaa510e3912a3d04e5f8.png)
* 發文到 bluesky -> 這個直接參考 bluesky [官方文件](https://atproto.com/docs)就可以找到很多有用的資源，bluesky 本身也有提供 Node.js SDK 可以使用 - **[@atproto/api](https://github.com/bluesky-social/atproto/blob/main/packages/api/README.md)**

等確認方向之後就衝刺啦！

### 踩雷之路
其實沒什麼雷啦，用 val.town 來開發真的有達到預期的效果，很快就把殼搭起來了，開發過程中有一些花了一點時間才處理的項目，這邊就特別註記一下：

**檢查排程週期以內的新貼文**

這點一開始想了一陣不知道要怎麼搭 val.town 來實作，原本想說一般的 rss reader 應該是有把 `last checking date` 的值記錄起來然後拿來跟 RSS feed 裡面比對，但覺得要弄到 DB 有點麻煩。

後來發現 val.town 上面排程的行為，會有一個 `Interval` 的參數傳遞進來，它大概像這樣：

```
{
  "id": "fb0302bb-e7ac-49a5-916f-c3a5d9e91f3a",
  "code": "",
  "delay": 3600000,
  "author": "eb90236d-72cf-4e4f-86d0-548f41a11285",
  "registeredAt": "2023-05-25T18:37:26.342Z",
  "clearedAt": null,
  "lastRunAt": null
}
```

因為有 `delay` 這個數值，就可以知道執行的排程的頻率，然後要做的就變成「檢查週期之內發佈的新貼文」，就可以啦！然後再接上作者寫好[檢查 RSS feed 的函式](https://www.val.town/v/stevekrouse.pollRSSFeeds)，就可以達到這個效果了🔽

```
const lastRunAt = new Date(new Date().getTime() - delay);

// 這就是 val.town 呼叫已實作函式的方法
// 很方便吧😃
const items = await @stevekrouse.newRSSItems({
	url,         // RSS feed link
	lastRunAt,   // 上面計算出來需要檢查的排程週期
});

```

**在 val.town 裡面處理各種引用模組**

能解析出需要轉發的新貼文之後，主要就是處理 bluesky 貼文的 API 行為了，這邊也參考了幾篇很有幫助的文章或範例，特別感謝一下😄🙇‍♂️

* [DenoでBlueskyに𝑹𝒊𝒄𝒉 𝒕𝒆𝒙𝒕を投稿する](https://zenn.dev/kawarimidoll/articles/42efe3f1e59c13)
* [Bluestream](https://github.com/kawarimidoll/bluestream)

原本想說應該是很簡單的流程
1. 引入官方 SDK -> [@atproto/api](https://www.npmjs.com/package/@atproto/api)。
2. 登入 bluesky -> [**BSkyAgent.login**](https://github.com/bluesky-social/atproto/blob/9eb817d488bbbf68bb5479a7e1324e2c32f781a7/packages/api/src/agent.ts#L116-L142)，也就是 [**com.atproto.server.createSession**](https://atproto.com/lexicons/com-atproto-server#comatprotoservercreatesession) 這部分。
3. 發文 -> *[app.bsky.feed.post](https://atproto.com/lexicons/app-bsky-feed#appbskyfeedpost)* 


```
TypeError: BskyAgent is not a constructor
```

不過後來卻一直收到如上的 `BSkyAgent` 的錯誤，想說怎麼可能有問題，反覆測試了好幾次，也把官方文件中關於[模組引用](https://docs.val.town/tips)的部分看了好幾回也找不到原因，後來在快要放棄的時候終於無意間在 discord 頁面找到這篇解答😅

![](https://img-assets.sylee.dev/file/2b5043ecc35d4759926d5.png)

真的是浪費了好多時間阿😢。因為 bluesky SDK 目前[匯出的形式](https://github.com/bluesky-social/atproto/issues/910#issuecomment-1525987970)，記得在引入 `@atproto/api` 模組的時候，用下面方法賦值，才能正確取用變數。

```
const { default: atProto } = await import("npm:@atproto/api");
const { BskyAgent } = atProto;
```

**意想外的卡關**😅

最後這部分其實是自己龜毛才浮現的問題。只要是弄轉貼格式的時候有留意到某個媒體網站在 bluesky 上面的貼文是用了類似超連結的形式：

![link example](https://img-assets.sylee.dev/file/38fe4648e2f27eabe4e59.png)

然後就是一連串的實驗😅。原本以為它是可以直接吃 markdown 的格式，但直接送進去發現並沒有，它還是被轉成 plain text 的形式了。後來又發現一些範例用了 [`RichText`](https://github.com/bluesky-social/atproto/blob/main/packages/api/README.md#rich-text) 這個物件來使用，然後一樣在卡關不知道它正確用法的時候，又在 Bluesky 的 discord 群組裡面翻到了下面這個說明才初略了解它的大概用法⬇️ 

![how to setup rich text](https://img-assets.sylee.dev/file/c02c7f48d65bce87adca6.png)

 原來它 RichText 的用法是由內容 `text` 以及 `facets` 兩個元件組成，`text` 自然就是你希望發送的貼文內容。`facets` 就是替文字附上其他屬性的方式，用法就是把希望標記部分的位置以及希望賦予的屬性通過 `facets` 來定義。
 
> Text Facets. Faceting is a good way to get an overview of a specific column of your data. Text faceting will organize unique items in the selected column by name and will give a count for how many rows or records possess that item name.\
> UNLV - https://guides.library.unlv.edu/open-refine/faceting

所以如果想做到上述像 Techmeme 的效果，就是用下面這種方式處理：

```
const rt = new RichText({
	text,  // 貼文內容
	facets: [{
		index: {
	    byteStart: text.indexOf("Main Link"),
	    byteEnd: (text.indexOf(" |") - 1),
	  },
	  features: [{
	    $type: "app.bsky.richtext.facet#link",
	    uri: MAIN_LINK_VALUE,
	  }],
	}]
});
```

這樣再透過 [`feeds.post`](https://atproto.com/lexicons/app-bsky-feed#appbskyfeedpost)送出去即可，文中的 **Main Link** 就會被轉換成超連結的樣式。目前看起來只有支援 links & mentions，不過往後透過這個方式，要加上其他樣式的支援應該也不是難事了。

### 收工
現在透過上述的方式，就簡單用 val.town 搭起一個可以自定義 RSS 來源的排程轉文小工具啦!

發文的部分我有[丟出來](https://www.val.town/v/siygle.sendPostToBsky)，有需要用來處理 bluesky 發文行為的話可以直接使用，其他部分因為客製行為比較多，就不放出來了，不過大家應該可以簡單處理自己需要的格式後接上 `sendPostToBsky`。

**排程轉文主程式**

```
async function pollRSSFeedsAndRepost(intervalParams: Interval) {
  const { delay } = intervalParams;
  const lastRunAt = new Date(new Date().getTime() - delay);
  
  // 從 val.town secrets 裡面拿 API呼叫需要的兩個參數 -> identifier/password
  const identifier = @me.secrets.BLUESKY_IDENTIFIER;
  const password = @me.secrets.BLUESKY_PASSWORD;
  
  const rssSources = await Promise.all(
		Object.entries(@me.rssFeeds).map(async ([name, url]) => {
      // 這是上述提及，作者用來判斷新來源文章的函式
      let items = await @stevekrouse.newRSSItems({
        url,
        lastRunAt,
      });
      return { name, items };
    }),
  );
  
  // 批次把新文章轉發到 bluesky 對應的帳號
  for await (const rss of rssSources) {
    if (rss && rss.name && rss.items && rss.items.length > 0) {
      for await (const item of rss.items) {
        // 這邊是我自己處理貼文格式的部分，這段就根據自己需求實作即可
        const { text, facets } = @me.createBskyPostContent(
          rss.name,
          item,
        );
        if (text && facets) {
          await @me.sendPostToBsky({
            identifier,
            password,
            text,
            facets,
          });
        }
      }
    }
  }
}
```

**自定義來源**

```
// 這是我的設定，想加上新的來源就直接加上存檔就好
// 這邊的變數，就是主程式中 @me.rssFeeds 的部分
const rssFeeds = {
  "Deno": "https://rsshub.app/twitter/user/deno_land/exclude_rts_replies",
  "Node.js": "https://rsshub.app/twitter/user/nodejs/exclude_rts_replies",
};
```

大概就是這樣，成果如下，是不是超方便的😆

[![my sample](https://img-assets.sylee.dev/file/2ba33354ca2ffcd5edcca.png)](https://bsky.app/profile/sylee.dev/post/3jwngwfx4kw2l)

## 結語
寫完文章之後發現 val.town 也推出[付費的服務 (Val Town Pro)](https://docs.val.town/pricing)了。如果覺得這個工具能夠幫上你不少的話，不妨支持一下作者，畢竟大家每個月都在付訂閱費了嘛 #誤🤣

