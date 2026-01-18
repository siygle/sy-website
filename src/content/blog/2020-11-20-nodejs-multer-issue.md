---
title: 'Node.js, multer and Heroku H18'
date: '2020-11-20'
tags: ['Node.js', '2020']
draft: false
summary: '最近收到同事回報的一個奇怪的問題，一個包含上傳檔案的 API 在認證失敗的時候不是回傳 401 反而是直接噴了 503 錯誤回來，但是如果檔案欄位帶空值的話，就會正常看到 400 的錯誤訊息'
---

### 只能說踩雷之路艱辛

最近收到同事回報的一個奇怪的問題，一個包含上傳檔案的 API 在認證失敗的時候不是回傳 401 反而是直接噴了 503 錯誤回來，但是如果檔案欄位帶空值的話，就會正常看到 400 的錯誤訊息。原本不以為意，想說可能是某個檢查或資料的錯誤，結果沒想到事情不是\_\_想的這麼簡單。 😆

後來看 heroku log 才發現是 [H18](https://devcenter.heroku.com/changelog-items/30) 錯誤，然後本地跑居然沒有問題！

在 heroku 的文件中，對 H18 錯誤的說明是：

> This new HTTP error code will appear in your app’s logs if an HTTP request is interrupted by a closed socket before the router receives an HTTP response from your app’s web process.

然後一開始就一直往 express 中常用來處理檔案上傳的 [multer](https://github.com/expressjs/multer) 那邊去看是不是有什麼修正版或臭蟲（然後又找了一堆不相關的方向，第三方依賴、認證、機器不夠力），後來終於在無意間翻到這個 Issue - [Missing response for certain POST requests #12339](https://github.com/nodejs/node/issues/12339)

> When a server responds with a short payload to a POST http.request() with a large payload that has not finished uploading, a node client throws an EPIPE error on the request object...This destroys the node socket

雖然不全然相關，但是給了我一個方向。有沒有可能是因為 form-data 還在處理，但是 express 驗證錯誤就回傳錯誤訊息才造成的。也就是 express 的 route 順序要調整，確保 multi-form 一定要處理完再開始邏輯、資料檢查等，如下：

```
router.post('/path_with_error', authorization-middleware, body-parser-middleware, multer-middleware, handler-middleware)

應該改成

router.post('/path_with_error', body-parser-middleware, multer-middleware, authorization-middleware, handler-middleware)
```

果然就解了 XD #還我青春啊
