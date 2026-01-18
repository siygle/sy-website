---
title: 'Use NodeJS on CLI'
date: '2012-02-19'
tags: ['Node.js', '2012']
draft: false
summary: '把 nodejs 運用到 shell script'
---

最近在看文章中，看到有人提到[把 nodejs 運用到 shell script](http://www.infoq.com/cn/articles/yph-shell-meet-nodejs)的文章，裡面有提到不少有用的工具，如果你真的有這種打算的話，不妨花點時間看一下，應該蠻受用的 :p

不過也許會有人覺得，\*nux 上面明明就已經有非常方便的 CLI 在配合上 Shell Script，幾乎你想做什麼都可以達到，何必要特別用 nodejs 來寫，這樣不是有 點搞錯重點嘛...的確，特別用 nodejs 也沒用什麼多大的好處，效能＆方便上可能 Shell 都大勝...不過就我來說的確會想試一下 ~

**太弱不會寫 shell script + 想練一下 javascript**（不覺得這兩點有衝突嗎...XDD）

不過對於不常寫 Shell 的開發者來說，如果遇到一些比較複雜的情況，可能會不知所措，所以很多人也轉用 Scripting Language 來做這件事了，至少方便很 多（請忽略效能這件事...不過一般來說這點"應該"不是很重要..._不負責任發言_）

在該篇文章中有提到幾個不錯的 nodejs module 可以協助你更快、更方便地實作

- **[optimate](https://github.com/substack/node-optimist)** - 之前有提過這個東西，可以快速做出命令參數的部分
- **[nopt](https://github.com/isaacs/nopt)** - 類似 optimate 的功能
- **[commander.js](https://github.com/visionmedia/commander.js)** - 也是一樣類似的東西 :p
- **[procstreams](https://github.com/polotek/procstreams)** - 實作 shell script 的功能(pipe[|], then[;], and(&&), or[||]...等)

nodejs 本身有支援[Child Processes](http://nodejs.org/docs/latest/api/child_process.html#child_process_child_process_spawn_command_args_options)，也就是 C 的*popen*，上述的函式庫中有不少就是利用 child_process 中的 spawn 來實作的，也是就產生 child process 來執行你給定的命令，透過運 用這些函式庫，讓你可以很方便＆快速的開發出自己需要的工具 :p
