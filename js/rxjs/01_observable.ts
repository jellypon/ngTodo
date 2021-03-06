// typescript를 install먼저 해야한다.
// npm install -g typescript 구문을 이용하여 typescript install 후
// 대상 폴더로 이동 후 해당 ts 파일을 "tsc 01_observable.ts" 구문을 이용하여 컴파일


import {Observable} from "rxjs";

// observable: stream of data
new Observable(observer => {
    let count = 0;
    let timeout = setInterval(() => {
        ++count;
        observer.next(count);
    }, 1000);
}).subscribe(data => console.log(data));
