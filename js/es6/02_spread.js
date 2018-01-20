// spread 연산자 ...
/*
... 연산자 : 나머지 연산자, spread연산자로 사용됨.
spread 연산자 : 펼쳐준다.
즉 array2 = [1, 2, 3, 4]가 된다.
 */
let array1 = [1, 2];
let array2 = [...array1, ...[3, 4]]; //여러 배열로 펼친다
let array3 = [5];

function myFunction(a, b, c, d, e) {
    return a+b+c+d+e;
}

// call : 함수 호출 시 parameter로 호출할 경우 사용
// apply : 함수 호출 시 array로 호출할 경우 사용
let result = myFunction.apply(null, [...array2, ...array3]);
console.log(result);
