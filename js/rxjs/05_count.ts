import {Observable} from "rxjs";

// 최종처리 operator: 한개의 최종값을 Observable로 리턴
const source = Observable.of(3, 4, 5, 6);
const result = source.count();

const subscribe = result.subscribe(val => console.log('Sum:', val));
