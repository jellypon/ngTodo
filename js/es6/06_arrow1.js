/*
let circleArea = function(pi, r) {
    let area = pi * r * r;
    return area;
};
*/

// 위의 문장을 한줄로 작성하시오.

// 매개변수가 한개면 () 생략 가능
// 매개변수가 없는 경우는 () 생략 불가능
// 본문이 한줄일 경우 {} 생략 가능
// 본문이 한줄이면서 expression일 경우 return문 생략 가능
let circleArea = (pi, r) => pi * r * r; // pi * r * r 부분이 할당이 아닌 expression일 경우 return 문 생략 가능.

let result = circleArea(3.14, 3);

console.log(result); //실행 결과 "28.26"
