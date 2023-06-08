// Number
const a = 0.1;
const b = 0.2;

//console.log(Number((a+b).toFixed(1)));


// Boolean(불린)
const a1 = true;
const b1 = false;

if (b1) {
    //console.log('Hello');
}

// null undefined
let age;
//console.log(age);

setTimeout(function(){
    age = 85;
    // console.log(age);
},1000);


// const user = {
//     name : 'lsk',
//     age : 11,
//     email: null
// };
// console.log(user.name);
// console.log(user.age);
// console.log(user.email);
// console.log(user.abc);

// Array (배열)

// const fruits = new Array('Apple','Banana','Cherry');
const fruits = ['Apple','Banana','Cherry']; // 배열 리터널
// console.log(fruits);

// Object (객체)

// const user = new Object(); // 생성자 함수 생성
// user.name = 'lsk';
// user.age = 11;

// console.log(user);

// function User(){
//     this.name = 'lsk'
//     this.age = 11
// }
// const user = new User();

const user = {
    name : 'lsk',
    age : 11
}; // 객체 리터널 방식


// console.log(user.name,user['name']);
// console.log(user);

// function hello(){
//     console.log('hello!');
// }
// hello() // call

// console.log(hello); ()호출하지않고 네이밍만 사용하면 함수 자체 데이터

// function getNumber(){
//     return 123
// }
// console.log(typeof getNumber(),typeof getNumber);

const getNumber = function (){
    return 123
}
// console.log(typeof getNumber, typeof getNumber());

const a2 = function(){
    // console.log('A');
}
const b2 = function(c){
    // console.log(c,typeof c);
    // console.log(typeof c == 'function');
}
// b2(a2)


// 형 변환(Type Conversion)
const a3 = 1;
const b3 = '1';

// console.log(a3 == b3, a3 === b3);
// === 일치 연산자를 사용해야 안전하게 사용이 가능하다.
// == 동등 연산자

// 참과 거짓(Truthy & Falsy)

// Falsy list
// 1) false
// 2) 0
// 3) null
// 4) undefined
// 5) NaN
// 6) ''
// 7) 0n

// if('a'){
//     console.log('참');
// } else {
//     console.log('거짓');
// }

// if (fruits.length) {
//     console.log('아이템이 들어있음');
// }

// 데이터 타입 확인

console.log(typeof(typeof undefined));
console.log(typeof 'hello'==='string');
console.log(typeof 123 === 'number');
console.log(typeof true === 'boolean');
console.log(typeof undefined === 'undefined');
console.log(typeof null === 'object');
console.log(typeof [] === 'object');
console.log(typeof {} === 'object');
console.log(typeof function(){} === 'function');

console.log([].constructor === Array); //true
console.log({}.constructor === Object); //true

console.log(Object.prototype.toString.call(null).slice(8,-1) === 'Null'); //true

function checkType(data){ //체크 타입을 명확하게 구분하기 위해 함수로 만들어서 사용가능
    return Object.prototype.toString.call(data).slice(8,-1)
}

console.log(checkType('hello'));
console.log(checkType(123));
console.log(checkType(true));
console.log(checkType(undefined));
console.log(checkType(null));
console.log(checkType([]));
console.log(checkType({}));
console.log(checkType(function(){}));
