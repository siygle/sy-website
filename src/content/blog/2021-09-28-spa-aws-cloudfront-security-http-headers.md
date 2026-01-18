---
title: 'SPA 放 AWS Cloudfront 上時，遇到需修正安全性 HTTP Header 怎解？'
date: '2021-09-28'
tags: [AWS', 'Security', '2021']
draft: false
summary: '會有這篇探索之旅，主要是因為公司的客服收到白帽的提醒說網站有安全性問題。之前記得看過處理 SPA 的方法，所以先跳進來看一下，結果是滿滿的坑 😆'
---

### 可能的解法：

1. **Next.js (React)**
   如果是 Next.js 的話，那恭喜你可以直接[在 config 控制 header](https://nextjs.org/docs/advanced-features/security-headers)，這個方法可能是最簡單的，react 如果能在 response 補上 security header 也是可解，其他的框架應該都有[類似](https://www.npmjs.com/package/nuxt-helmet)的解法，相較下面要提的方法，這類解法比較簡單扼要，也不需要額外的花費。
2. **Cloudfront**
   如果不想兜弄 client 只想找可以直接從 AWS 架構上處理掉的話，本來想說就照它的範例，[在 viewer reponse 那段](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/example-function-add-security-headers.html)補上 [security header](https://devco.re/blog/2014/03/10/security-issues-of-http-headers-1/) 就可以收工了，結果[踩到這個坑](https://blackbing.medium.com/add-security-header-to-your-spa-hosted-from-s3-ecac9283c404)...

> CloudFront does not invoke edge functions for viewer response events when the origin returns HTTP status code 400 or higher.

透過 Cloudfront custom error 的行為是[不會觸發](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/edge-functions-restrictions.html) Cloudfront functions & Lambda@Edge 的，但是 SPA 放在 AWS 上面得處理 404 的問題，要導回 index 才能正常運作。

[上述的文章](https://blackbing.medium.com/add-security-header-to-your-spa-hosted-from-s3-ecac9283c404)的解法就是去攔住是自己實作 404 error，但是這樣得擺在 Origin response 去處理，要用貴貴的 Edge，想說能不能用相對便宜的 Cloudfront functions 處理（如果要處理 Origin request/response 就得用 Edge，這是 Cloudfront functions 跟 Lambda@Edge 最大差別）。

找了一波，[發現這個解法](https://stackoverflow.com/a/68639121)，可以用兩個 Cloudfront functions 處理掉。

1. 如前述，在 viewer response 補上處理需要的 security header 的 Cloudfront functions（下圖的 security-header）。

```
function handler(event) {
    var response = event.response;
    var headers = response.headers;

    headers['strict-transport-security'] = { value: 'max-age=63072000; includeSubdomains; preload'};
    headers['x-content-type-options'] = { value: 'nosniff'};
    headers['x-frame-options'] = {value: 'DENY'};
    headers['x-xss-protection'] = {value: '1; mode=block'};

    return response;
}
```

2. 另一個 Cloudfront functions 放在 viewer request，然後判斷非檔案的請求改導往 index.html（下圖的 spa-request）。

```
function handler(event) {
    var request = event.request;
    var uri = request.uri;

    if (!uri.includes('.')) {
        request.uri = '/index.html';
    }

    return request;
}
```

\*Cloudfront functions 還有另一個不知道算不算坑的東西，就是它其實[不是 Node.js runtime 所以它不能用 Node.js 的內建函式](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/functions-javascript-runtime-features.html)，如果需要撰寫複雜的判斷，可能不是非常順手 🤣

直接在 Cloudfront 下的 behavior 裡面設定即可

![cloudfront setting](https://i.imgur.com/ZEjkbCT.png)

### Reference

- [https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/example-function-add-security-headers.html](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/example-function-add-security-headers.html)
- [https://nextjs.org/docs/advanced-features/security-headers](https://nextjs.org/docs/advanced-features/security-headers)
- [https://blackbing.medium.com/add-security-header-to-your-spa-hosted-from-s3-ecac9283c404](https://blackbing.medium.com/add-security-header-to-your-spa-hosted-from-s3-ecac9283c404)
