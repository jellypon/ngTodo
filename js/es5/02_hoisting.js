//함수 호이스팅:
hoisting1 = "hoisting1";
console.log(hoisting1);
var hoisting1;

console.log(hoisting2);
var hoisting2="hoisting2";

//함수 선언문은 호이스팅 된다.
myName("Yan", "Fan");

function myName(first, last) {
    console.log(first + last);
}

// 함수 표현식을 작성하고 테스트 하시오. 호이스팅 되는가? 안된다
var myName = function(first, last) {
  console.log(first + last);
}

/*
// 익명함수는 애로우 펑션으로 표현가능. 차이점은 Lexical this
var myName = (first, last) => {
  console.log(first, last);
}
*/

// 표현식이 한줄이면 중괄호 생략가능, expression 일 경우 return 문도 생략 가능
var myName2 = (first, last) => console.log(first+last)

myName2('aaa', 'bbb');
