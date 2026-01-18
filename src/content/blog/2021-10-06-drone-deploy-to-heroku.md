---
title: '透過 drone.io 佈署到 heroku（git deploy）'
date: '2021-10-06'
tags: ['Node.js', 'DevOps', 'drone', '2021']
draft: false
summary: '又是一個慘痛的踩雷之旅... 😭😭'
---

## Overview

<TOCInline toc={props.toc} exclude="Overview" toHeading={3} />

### 前言

又是一個慘痛的踩雷之旅... 😭😭

因為內部逐漸轉移用 [drone.io](http://drone.io) 作為內部的主力 CI，之前一直處理聽過、稍微看過，但是沒很深入去玩的狀態，所以想說趁這個機會試試看。目前除了雲提供商之外，heroku 也算用的多的服務之一，開發佈署方便一直是它的特色，也的確可以無腦用，不過這次想把它接上 drone 卻是困難異常 😓

### 踩雷之旅 1 - 找 plugin？

嗯，想說像 drone.io 生態圈這麼完整的平台（反串要註明），應該有可以無痛支援的 plugin 可以直接拿來用吧？下了關鍵字之後找到[這些](https://github.com/drone/docs.drone.io/blob/master/heroku.markdown)（[沒用](https://0-8-0.docs.drone.io/deploy-to-heroku/)）[的東西](https://hub.docker.com/r/plugins/heroku/)。真的，繞了一圈沒一個可以用，甚至官方自己的文件都不清不楚，文件看得到，但是 repo 裡面找不到 😖，所以只好放棄。

### 踩雷之旅 2 - 自己來？

寫 plugin 自己弄？有閃過一下這個想法，但是一來沒有這麼熟，二來也還沒這麼熱血想洗頭下去，所以還是希望能透過 `drone.yml` 處理掉，參考了[一些](https://www.notion.so/91ae28bfc293a204919d6f5d4c2a96af)[範例](https://github.com/zuzak/drone-heroku)跟強者同事的設定檔，有個方向之後想說先從 heroku 最簡單的方式 - git push 開始。

原本想說 `git push heroku master` 就準備收工了，結果才發現一個巨雷......

### 踩雷之旅 3 - heroku authentication

如果有用過 heroku 應該都知道，它有一個方便的 [CLI](https://devcenter.heroku.com/articles/heroku-cli) 工具，幾乎所有的行為都可以透過工具完成，不過當然要使用它需要先「登入」，真的是花了超多時間才找到解法...😢

1. 直接在 drone.yml 跑 `heroku login` （想當然爾，死路一條，沒有辦法輸入認證資訊，就算用 `heroku login -i` 用 interactive 也沒用。
2. 用 `HEROKU_API_KEY` 似乎是個解法，本來看到[這篇討論](https://stackoverflow.com/questions/61038002/heroku-cli-auth-by-token)以為可以用環境變數直接帶上認證，測試後還是會噴錯，而且後來看到有人回應 `git push` 是不會走 API 的，所以根本沒用 😭
3. 最後找到文件才發現它的認證資訊，其實是放在家目錄下的一個 `.netrc` 的檔案裡面，格式如下（其實前述的某個範例有列到），也就是說，當跑 heroku login 後會產生此檔案，當其他需認證的行為，就會去拿這個檔案裡面的認證資訊。

```
machine api.heroku.com
  login YOUR_ACCOUNT
  password YOUR_TOKEN
machine git.heroku.com
  login YOUR_ACCOUNT
  password YOUR_TOKEN
```

### 解法

找到以上的關鍵資訊之後，終於可以處理了，範例可以參考下方：

- docker image 當然可以選自己熟悉的，我就直接用自己比較熟的 ubuntu。
- 安裝一些必要的套件（如 `curl` `git`），後面的行為會用到。
- 準備一份 script 專門產出需要的 `netrc` 檔案（**重要!!** 原本試了直接擺在 commands 下面處理，或擺在 repo 裡面，都無法正常作用，這個方法真的簡單輕省 😆）
- 後面就跟一般 heroku 用法一樣了 - **git push 收工**

<script src="https://gist.github.com/Ferrari/1246e40a80eadc3d36f3a4761ace7682.js"></script>

另外，heroku 的 token 是[有期限的](https://help.heroku.com/PBGP6IDE/how-should-i-generate-an-api-key-that-allows-me-to-use-the-heroku-platform-api)，所以可以透過 `heroku authorizations:create` 拿不會過期的 token 來使用。heroku 其實也支援 container 方式部署了，之後有試到的時候再來寫 part 2（會有嗎？ 🤣

### Reference

- [https://www.tpisoftware.com/tpu/articleDetails/1884](https://www.tpisoftware.com/tpu/articleDetails/1884)
- [https://devcenter.heroku.com/articles/git#http-git-authentication](https://devcenter.heroku.com/articles/git#http-git-authentication)
- [https://devcenter.heroku.com/articles/authentication](https://devcenter.heroku.com/articles/authentication)
