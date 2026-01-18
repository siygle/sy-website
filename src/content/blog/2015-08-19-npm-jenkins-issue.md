---
title: 'npm install failed on jenkins'
date: '2015-08-19'
tags: ['npm,', 'dogfood', '2015']
draft: false
summary: '最近在弄公司用的 jenkins 的時候遇到的一個問題，順手把它記下來。'
---

最近在弄公司用的 jenkins 的時候遇到的一個問題，順手把它記下來。

因為原本 CI 機器空間被佔滿了，所以就把新的 task 設定跑在另一台新開的機器上，結果不知道為什麼原本沒問題的東西，設定跑在新機器上就沒辦法成功。下完 `npm install` 之後，跑一陣子之後就跑出 `killed` 的訊息。

找了好久終於看到有人提到這個問題  
[**NPM gets killed no matter what**](https://www.digitalocean.com/community/questions/npm-gets-killed-no-matter-what)  
然後討論串中，有人提到可能是 swap 不夠大的問題  
[**upgrade swapfile to 1GB**](https://www.digitalocean.com/community/tutorials/how-to-add-swap-on-ubuntu-12-04?comment=551)

Problem Solved! #npm #有點肥 XD
