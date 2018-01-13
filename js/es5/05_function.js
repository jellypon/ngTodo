// 생성자 함수에서의 this의 의미
function person() {
    this.someValue = 2;
    var someValue2 = 3;
}

console.log(person()); //실행결과는? 그 이유는? : undefined, return문이 없어서

console.log(new person()); // 생성자 함수로 생성시 실행결과는?
// 내부적으로 this가 생성
// 만일 return문이 없으면 this 생성

console.log(someValue); // 실행결과와, 이유를 말하시오
