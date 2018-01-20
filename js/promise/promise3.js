// promise를 만드는 또다른 방법 resolve 함수
// 차이점은 Promise.resolve 는 비동기처리가 순차적으로 일어나지 않는다.
// 즉 2번과 다르게 3번은 'ok'먼저 찍힌 후 'async setTimeout'이 찍힌다.
Promise.resolve(
    setTimeout(()=>{
        console.log('async setTimeout');
    }, 1000)
).then(()=>{
    console.log('ok');
});

/*
new Promise(resolve=> {
    setTimeout(() => {
        console.log('async setTimeout');
        resolve('ok')
    }, 1000)
}).then((value)=>{
    console.log(value);
});*/
