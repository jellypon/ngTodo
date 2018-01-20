"use strict";
// typescript를 install먼저 해야한다.
// npm install -g typescript 구문을 이용하여 typescript install 후
// 대상 폴더로 이동 후 해당 ts 파일을 "tsc 01_observable.ts" 구문을 이용하여 컴파일
exports.__esModule = true;
var rxjs_1 = require("rxjs");
// observable: stream of data
new rxjs_1.Observable(function (observer) {
    var count = 0;
    var timeout = setInterval(function () {
        ++count;
        observer.next(count);
    }, 1000);
}).subscribe(function (data) { return console.log(data); });
