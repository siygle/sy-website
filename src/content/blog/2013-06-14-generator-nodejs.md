---
title: Generators land on NodeJS
date: '2013-06-14'
tags: ['Node.js', '2013']
draft: false
summary: '最近看到推上有不少人提到隨著v8登陸nodejs上的新功能 - Generators'
---

最近看到推上有不少人提到隨著 v8 登陸 nodejs 上的新功能 - [Generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)。據說在 python、ruby 上早已經有相似的功能，不過因為我都不熟所以還是不清楚（炸

根據規範上給的定義：

> First-class coroutines, represented as objects encapsulating suspended execution contexts (i.e., function activ
> ations).

```
function* loop(x) {
    for(var i = 0; i < 100; i++) {
        x = x * 2;
        yield x;
    }
}
var b = loop(2);
b.next();   // 4
b.next();   // 8
```

這是一個極簡單的範例，大概就可以看出它的基本特性 - 利用`function*`的方式宣告 Generators，然後新定義的`yield`則類似中斷點一樣，配合[next()](http://wiki.ecmascript.org/doku.php?id=harmony:generators#methodnext)、[send()](http://wiki.ecmascript.org/doku.php?id=harmony:generators#methodsend)，可以取出/回傳數值。

另外也可以搭配[`for of`](http://wiki.ecmascript.org/doku.php?id=harmony:generators#examples)的方式來做到類似`for in`迭代器的效果。

本來想說只是 es6 裡面新的功能而已，不過後來發現有些強者開始動手寫了一些模組出來，才發現原來事情不像我想的這麼簡單。Generators 的特性可以用來解決長久以來的 JS 問題 - **callback hell**。其實說這是問題有點太過了，不過主要是程式的結構會變得很雜亂：

```
func1(err, function(data)) {
    func2(err, data, function(data1)) {
        func3(err, data1, function(data2)) {
            // do your staff
        });
    });
});
```

就可以改成同步的方式來撰寫

```
function* newStyle() {
    var data1 = yield func1();
    var data2 = yield func2(data1);
    var data3 = yield func3(data2);
}
```

也可以參考這篇文章，裡面有對於 Generators 之於 Javascript 的影響有更深入的介紹：
[Javascript's Future: Generators](https://archive.jlongster.com/Javascript-s-Future--Generators)

目前 nodejs 穩定版也還沒辦法使用這個方式，必須切換到 0.11.x 的版號，然後記得帶上`--harmony`的參數就可以使用，已經有[不少](https://github.com/tj/co)[專案](https://github.com/jmar777/suspend)開始出現了，有興趣的也可以去玩玩看。還沒有很能掌握其特性，不過可能拿來搭配**Promise**來使用，因為都是偏向使用同步的撰寫來取代一堆回呼，等玩熟之後再補一篇心得吧（希望（炸
