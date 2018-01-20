"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
// 최종처리 operator: 한개의 최종값을 Observable로 리턴
var source = rxjs_1.Observable.of(3, 4, 5, 6);
var result = source.count();
var subscribe = result.subscribe(function (val) { return console.log('Sum:', val); });


/*
// 알고리즘 6대 사이트
1. eular
2. 백준의 알고리즘

*/
