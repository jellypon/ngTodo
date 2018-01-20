// promise 사용법

let async1 = function (param) {
  return new Promise((resolve, reject)=>{
     if(param && param > 0) {
         resolve('positive');
     } else if(param && param < 0) {
         reject('nagative');
     } else {
         throw 'error';
     }
  });
};

/*
async1(0)
    .then(value=> console.log('resolve1:', value), value=>console.log('error1:', value));
*/

/*
async1(-1)
  .then(value=> console.log('resolve2:', value))
  .catch(value=> console.log('error2:', value));
*/


// 결과가 성공하여 .then으로 콜백이 되어 JSON.parse 구문에서 다시 에러가 날 경우
// 밑에 있는 catch구문이 해당 에러를 잡아준다.
async1(1)
  .then(value=> {
    console.log('resolve3:' + value);
    JSON.parse(value);
  })
  .catch(value=>console.log('catch:' + value));
