/*
    심볼(Symbol)

    변경이 불가한 데이터로, 유일한 식별자를 만들어 데이터를 보호하는 용도로 사용할 수 있습니다.

    Symbol('설명')
    '설명'은 단순 디버깅을 위한 용도일 뿐, 심볼 값과는 관계가 없습니다.
*/

const sKey = Symbol('Hello');
const user = {
    key : '일반 정보',
    [sKey] : '민감한 정보'
};

console.log(user.key);
console.log(user['key']);
console.log(user[sKey]);
console.log(user[Symbol('Hello')]);
console.log(sKey);

/*
    BigInt

    BigInt는 길이 제한이 없는 정수(integer)입니다.
    숫자(number) 데이터가 안정적으로 표시할 수 있는,
    최대치(`2^53-1`)보다 큰 정수를 표현할 수 있습니다.
    정수 뒤에 `n`을 붙이거나 `BigInt()`를 호출해 생성합니다.
*/
// console.log(1234567890123456789012345678901234567890);
// console.log(1234567890123456789012345678901234567890n);
// console.log(BigInt('1234567890123456789012345678901234567890'));

// const a = 11n;
// const b = 22;

// // 숫자 => Bigint
// console.log(a+BigInt(b)); //33n
// console.log(typeof(a+BigInt(b))); //bigint
// // Bigint => 숫자
// console.log(Number(a) + b); //33
// console.log(typeof(Number(a) + b)); //number

/**
 * 불변성 & 가변성
 * 
 * 불변성(Immutability)은 생성된 데이터가 메모리에서 변경되지 않고,
 * 가변성(Mutability)은 생성된 데이터가 메모리에서 변경될 수 있음을 의미합니다.
 * 
 * 자바스크립트 원시형은 '불변성'을, 참조형은 '가변성'을 가지고 있습니다.
 * 
 * 객체,배열,함수 데이터가 참조형 데이터
 * 나머지는 원시형 데이터
 */

// ex) 메모리1, 메모리2, 메모리3, 메모리4, 메모리5, 메모리6
const a = { a : 1 }; // -> 메모리1에 {}객체에 키 벨류값을 할당.
const b = a; // -> 메모리1을 복사해서 가져옴. 

b.a = 2; // -> 메모리1을 바라보는 b변수가 -> 메모리2 에 값을 할당 -> 메모리1 객체 { a : 메모리2값 }
console.log(a); //2 -> 그래서 메모리 1객체안에 메모리2값을 가져오기때문에 숫자2를 불러옴
console.log(b); //2 -> 메모리1을 바라보기때문에 동일한 값

a.a = 7; // -> 메모리3에 값을 할당 -> 메모리1 객체 { a : 메모리3값 }
console.log(a); //7 -> 메모리1 객체 안에 메모리3값을 가져오기때문에 숫자7를 불러옴
console.log(b); //7 -> 메모리1을 바라보기때문에 동일한 값

b.a = 1; // -> 메모리1을 바라보는 b변수가 -> 메모리4에 값을 할당 메모리1 객체 { a : 메모리4값 }
console.log(a); //1 -> 메모리1 객체 안에 메모리4값을 가져오기 때문에 숫자 1을 불러옴.
console.log(b); //1 -> 메모리1을 바라보기때문에 동일한 값

console.log(a===b); //true 이것은 메모리에 저장된게 같다라는 의미도 됨

// array
const arr1 = [1,2,3]; // ->위에 객체와 개념은 비슷함. 응용해보셈.
const arr2 = arr1;

arr2[0] = 10;
console.log(arr1); //[10, 2, 3] 
console.log(arr2); //[10, 2, 3] 

arr1[1] = 20;
console.log(arr1); //[10, 20, 3]
console.log(arr2); //[10, 20, 3]

console.log(arr1 === arr2); //true