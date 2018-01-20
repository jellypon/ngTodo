// 응용과제, 아래 배열 3개의 구성요소를 모두 더해서 55가 출력되게 하시오.
// 최대한 간단하게 하시오.
let array1 = [1,2,3];
let array2 = [4,5];
let array3 = [6,7,8,9,10];

let arr = [...array1, ...array2, ...array3];  // spread 연산자 이용

// 1. foreach 사용
var sum = 0;
arr.forEach(item => sum += item); // arrow function을 이용한 한줄코딩
console.log(sum);

//2. reduce 사용 (es6에 새로 추가된 prototype function)
sum = arr.reduce((prev, curr) => prev + curr);

console.log(sum);
