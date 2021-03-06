/**
 * Created by eastflag on 2016-10-14.
 */
// 1. 아래의 내용을 리터럴 객체로 담는 array list를 생성하시오.
//title	          price	  author	order
//--------------------------------------
//콩쥐팥쥐	      20000	  미상	  1
//흥부놀부	      25000	  미상	  2
//자바의정석	    35000	  정석	  3
//안드로이드정복	15000	  김상형	4
var books = [
  {title: "콩쥐팥쥐", price: 20000, author: "미상", order: 1},
  {title: "흥부놀부", price: 25000, author: "미상", order: 2},
  {title: "자바의정석", price: 35000, author: "정석", order: 3},
  {title: "안드로이드정복", price: 15000, author: "김상형", order: 4},
];

// 2. books의 type은 무엇인가? (object)
// 자바스크립트의 타입은 몇가지가 있는가? (primitive(boolean, number, symbol, null, undefined, string), object)
console.log(typeof books);

//3. 맨 앞쪽에 이것이자바다, 40000, 김상형, 5를 추가하시오 (힌트: unshift)
books.unshift({title:"이것이자바다", price:40000, author:"김상형", order:5});
console.log('No. 3');
console.log(books);
console.log('==================================');
//4. 맨 앞쪽에 추가한것을 지우시오,
books.shift();
console.log('No. 4');
console.log(books);
console.log('==================================');


// 5. 맨 뒷쪽에 추가하시오. (힌트: push)
books.push({title:"이것이자바다", price:40000, author:"김상형", order:5});
console.log('No. 5');
console.log(books);
console.log('==================================');

// 6. 맨 뒤쪽에 추가한것을 지우시오,
console.log('No. 6');
books.pop();
console.log(books);
console.log('==================================');



// 7. 흥부놀부와 자바의정석 사이에 삽입하시오. (힌트: splice)
console.log('No. 7');
books.splice(2, 0, {title:"이것이자바다", price:40000, author:"김상형", order:5});
console.log(books);
console.log('==================================');

// 8. 방금 삽입한거를 삭제하시오.
console.log('No. 8');
books.splice(0, 1);
console.log(books);
console.log('==================================');



// 9. 원본 배열에서 자바의 정석을 찾아서 저자를 남궁성으로 바꾸시오(힌트: forEach)
console.log('No. 9');
books.forEach(function(item, index) {
  if (item.title == '자바의정석') {
    item.author = '남궁석';
  }
});

console.log(books);
console.log('==================================');


// 10. 책의 총 비용을 출력하시오
console.log('No. 10');
var priceSum = 0;

books.forEach(function(item, index) {
  priceSum += item.price;
});
console.log(priceSum);
console.log('==================================');


// 11. 제목앞에 판매순위를 등수를 붙인 새로운 배열을 생성하시오.(힌트: map)
console.log('No. 11');
/*
// 내가한거
var newbooks = [];
var setGrade = function(item, index, array) {
  item.grade = index + 1;
  return item;
}

newbooks = books.map(setGrade);
console.log(books);
console.log(newbooks);
console.log('==================================');
*/

// 강사님
var newMap = books.map(function (item) {
  item.title = item.order + " 등 " + item.title;
  return item;
});

console.log(newMap);
console.log(books);

// 12. 새로운 배열을 만들되 3등안에 있는것만 따로 만든다. (힌트: filter)
console.log('No. 12');
/*
// 내가한 것
var newbooks = [];
var filterGrade = function(item, index) {
  return item.order <= 3;
}

newbooks = books.filter(filterGrade);
console.log(newbooks);
console.log('==================================');
*/

// 강사님
var newFilter = books.filter(item => {
  if (item.order <= 3) {
    return true;
  }
});

console.log(newFilter);
console.log(books);
