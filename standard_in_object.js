console.log('표준 내장 객체 겅퍼 시작');
console.log('**문자**');

// String
const str = 'Hello World!' 
// 문자 길이를 반환
console.log(str.length); //12

// 대상문자에 주어진 문자가 포함되어 있는지 Boolean으로 반환 대소문자구별
// 두번째 인수에 디폴트값 0, 숫자를 넣으면 몇번째부터 찾는건지 지정
console.log(str.includes('Hello'),str.includes('Hello',1));

// 대상 문자에서 주어진 문자와 일치하는 첫 번째 인덱스(숫자)를 반환합니다.
// 일치하는 문자가 없으면 -1를 반환
console.log(str.indexOf('World')); //6
console.log(str.indexOf('lsk')); //-1

// 대상 문자에서 길이(length)가 지정된 길이보다 작으면,
// 주어진 문자를 지정된 길이까지 끝에 붙여 새로운 문자를 반환
console.log(str.padEnd(15,'ㅎ')) 
console.log(str.padEnd(10,'ㅎ')) // 길이 12보다 작기때문에 원본으로 출력
// 주어진 문자를 지정된 길이까지 앞에 붙여 새로운 문자를 반환
console.log(str.padStart(15,'ㅋ'));

// 대상문자에서 패턴(문자,정규식)과 일치하는 부분을 교체한 새로운 문자를 반환
console.log(str.replace('o','Hi')); //첫번째 문자만 변경
console.log(str.replace(/o/g,'Hi')); //모든문자 변경
console.log(str); //원본회손되지않음.

// 대상 문자의 일부를 추출해 새로운 문자를 반환합니다.
// 두 번째 인수 직전까지 추출하고, 두 번째 인수를 생략하면 대상 문자의 끝까지 추출합니다.
console.log(str.slice(0,5)); // 0 ~ 4 째까지 추출
console.log(str.slice(6,-1)); // -1은 마지막이기 때문에 마지막 직전까지이때문에 world 만 추출
console.log(str.slice(6)); //6부터 끝까지 추출
console.log(str); //원본회손되지않음.

// 대상 문자를 주어진 구분자로 나눠 배열로 반환
const fruits = 'Apple / Banana / Cherry';
console.log(fruits.split(' / '));

// 대상 문자를 영어 소문자로 변환해 새로운 문자로 반환
console.log(fruits.toLowerCase());
// 대상 문자를 영어 대문자로 변환해 새로운 문자로 반환
console.log(fruits.toUpperCase());
console.log(fruits); //원본회손되지않음.

// 대상 문자의 앞뒤 공백문자(space,tab 등)을 제거한 새로운 문자를 반환
const str2 = '      asdfasdf       ';
console.log(str2.trim()); //아이디나 비밀번호를 앞 뒤에 띄어쓰기를 하고 작성할때 미리 방지하기위해서 작성을 많이 함.


console.log('========================');
console.log('**숫자**');


// Number
const num = 3.1415926535

// 숫자를 지정된 고정 소수점 표기(자릿수)까지 표현하는 문자로 반환
console.log(num.toFixed(2)); // string
console.log(parseFloat(num.toFixed(2))); // number

// 숫자를 현지 언어 형식의 문자로 반환
const num2 = 1000000;
console.log(num2.toLocaleString());
console.log(`${num2.toLocaleString()} 원`);

// 숫자가 정수(integer)인지 확인. static 메소드
const num3 = 123;
const pi = 3.14;
console.log(Number.isInteger(num3)); //true
console.log(Number.isInteger(pi)); //false

// 주어진 값이 'NaN'인지 확인. static 메소드
const num4 = NaN;
const nul = null;
console.log(Number.isNaN(num) , Number.isNaN(num4), Number.isNaN(str),Number.isNaN(nul));

// 주어진 값(숫자, 문자)을 파싱해 특정 진수(radix)의 정수로 반환
const num5 = '3.1415926535';
console.log(Number.parseInt(num5,10),parseInt(num5,10)); //10진수 정수로 반환
console.log(Number.parseInt(num,10),parseInt(num,10)); //숫자 10진수 정수로 반환

// 주어진 값(숫자,문자)을 팟깅해 부동소수점 실수로 반환(숫자) 함
console.log(Number.parseFloat(num5),parseFloat(num5)); //문자도 실수로 반환
console.log(Number.parseFloat(num),parseFloat(num)); //숫자 실수로 반환


console.log('========================');
console.log('**수학**');


// Math

// 주어진 숫자의 절대값을 반환
console.log(Math.abs(2)); //2
console.log(Math.abs(-2)); //2

// 주어진 숫자를 올림해 정수를 반환
console.log(Math.ceil('3.1415926535')); //4
console.log(Math.ceil(3.1415926535)); //4

// 주어진 숫자를 내림해 정수를 반환
console.log(Math.floor('3.1415926535')); //3
console.log(Math.floor(3.1415926535)); //3

// 주어진 숫자 중 가장 큰 숫자를 반환
console.log(Math.max(1,22,39,192)); //192 - 문자를 넣으면 NaN나옴

// 주어진 숫자 중 가장 작은 숫자를 반환
console.log(Math.min(1,22,-10,39,192)); //-10

// 주어진 숫자의 거듭제곱한 값을 반환
console.log(Math.pow(4,2)); //16
console.log(Math.pow(7,2)); //49
console.log(Math.pow(10,3)); //1000

// 숫자 0 이상, 1 미만의 난수를 반환
console.log(Math.random()); //랜덤

// 특정 범위의  랜덤 정수를 얻는 함수
function random(min = 0, max = 10){
    return Math.floor(Math.random() * (max-min))+min
}
console.log(random());
console.log(random(11,20));
console.log(random(101,999));

// 주어진 숫자를 반올림해 정수를 반환합니다.
const num6 = 3.141;
const num7 = 3.761;
console.log(Math.round(num6));
console.log(Math.round(num7));


console.log('========================');
console.log('**날짜**');


// Date
const date = new Date();
console.log(date); //타임스탬프
// // 날짜 인스턴스의 '연도'를 반환하거나 지정
// const date1 = new Date();
// date1.setFullYear(2024);
// console.log(date1.getFullYear());
// // 날짜 인스턴스의 '월'를 반환하거나 지정 - 오직 month만 제로베이스 넘버링
// console.log(date1.getMonth(), date1);
// date1.setMonth(0)
// console.log(date1);
// // 날짜 인스턴스의 '일'를 반환하거나 지정
// console.log(date1.getDate(), date1);
// date1.setDate(11)
// console.log(date1);
// // 날짜 인스턴스의 '시간'를 반환하거나 지정
// console.log(date1.getHours(),date);
// date1.setHours(7);
// console.log(date1);
// // 날짜 인스턴스의 '분'를 반환하거나 지정
// console.log(date1.getMinutes(),date);
// date1.setMinutes(10);
// console.log(date1);
// // 날짜 인스턴스의 '초'를 반환하거나 지정
// console.log(date1.getSeconds(),date);
// date1.setSeconds(57);
// console.log(date1);
const day = date.getDay();
console.log(getDayKo(day));
function getDayKo(day) {
    switch (day) {
        case 0: return '일요일';
        case 1: return '월요일';
        case 2: return '화요일';
        case 3: return '수요일';
        case 4: return '목요일';
        case 5: return '금요일';
        case 6: return '토요일';
        default: return 'error';
    }
}
// 1970-01-01 00:00:00 (유닉스타임)부터 경과한,
// 날짜 인스턴스의 밀리초(ms)로 반환하거나 지정
// console.log(date.getTime());
// console.log(date.setTime(1700000000000),date);

// Date.prototype.isAfter = function(date){ //시간정보를 비교
//     const a = this.getTime();
//     const b = date.getTime();
//     return a > b
// }
// const d1 = new Date('Mon Jun 01 2023 17:06:40 GMT+0900 (한국 표준시)');
// const d2 = new Date('Mon Jun 01 2024 17:06:40 GMT+0900 (한국 표준시)');
// console.log(d1.isAfter(d2)); //false
// console.log(d2.isAfter(d1)); //true

// Date.now();
// 1970-01-01 00:00:00 (유닉스타임)부터 경과한,
// 메소드가 호출 될 때의 밀리초(ms)로 반환
// const time = new Date().getTime();
// console.log(Date.now(),time,Date.now() === time);
// setTimeout(()=>{
//     console.log(Date.now(),time);
// },1000);


console.log('========================');
console.log('**배열**');


/* 배열의 길이(숫자)를 반환 */
// const arr = ['A','B','C'];
// console.log(arr.length);
// // 대상배열을 인덱싱
// // 음수 값을 사용하면 뒤에서부터 인덱싱
// console.log(arr[0],arr.at(0));
// console.log(arr[arr.length - 1],arr.at(-1)); // 마지막아이템 구할때 at을 활용하면좋다.

/* 대상 배열과 주어진 배열을 병합해 새로운 배열을 반환 */
// const arr1 = ['A','B','C'];
// const arr2 = ['D','E','F'];
// const arr3 = arr1.concat(arr2);
// const arr4 = [...arr1,...arr2]; // 전개 연산자 spread operator 전개연산자가 직관적.
// console.log(arr1,arr2,arr3,arr4); 

/* 대상 배열의 '모든' 요소가 콜백 테스트에서 참(Truthy)을 반환하는지 확인 */
// const arr = [1,2,3,4];
// const isValid = arr.every(item => item < 5); // 매개변수 () 생략 박스 생략{}
// console.log(isValid); // true

/* 
    주어진 콜백 테스트를 통과(참(Truthy)을 반환)하는 모든 요소를 새로운 배열로 반환.
    모든 요소가 테스트를 통과하지 못 하면 빈 배열을 반환.
*/
// const numbers = [1,20,7,9,104,0,58];
// const filteredNumbers = numbers.filter(number => number < 30);
// console.log(filteredNumbers); //[1, 20, 7, 9, 0]
// const users = [
//     {name : 'Neo', age : 85},
//     {name : 'Amy', age : 22},
//     {name : 'Lewis', age : 11}
// ];
// const adults = users.filter(user => user.age >= 20);
// console.log(adults);

/* 대상 배열에서 콜백 테스트를 통과하는 첫 번째 요소를 반환. */
// const arr = [5,8,130,12,44];
// const foundItem = arr.find(item => item > 10);
// console.log(foundItem); // 130
// const users = [
//     {name : 'Neo', age : 85},
//     {name : 'Amy', age : 22},
//     {name : 'Lewis', age : 11}
// ];
// const foundUser = users.find(user => user.name ==='Amy');
// console.log(foundUser); // {name: 'Amy', age: 22}

/* 대상 배열에서 콜백 테스트를 통과하는 첫 번째 요소의 인덱스를 반환 */
// const arr = [5,8,130,12,44];
// const index = arr.findIndex(item => item >10);
// console.log(index); // 2

/* 대상 배열의 모든 하위 배열을 지정한 깊이(Depth)까지 이어붙인 새로운 배열을 생성 */
// 깊이의 기본값은 1 입니다.
// const arr = [1,2,[3,4,[5,6,[7,8]]]];
// console.log(arr.flat()); // [1, 2, 3, 4,[5,6,[7,8]]]
// console.log(arr.flat(2)); // [1, 2, 3, 4, 5, 6, [7,8]]
// console.log(arr.flat(Infinity)); // [1, 2, 3, 4, 5, 6, 7, 8]

/* 대상 배열의 길이만큼 주어진 콜백을 실행. */
// const arr = ['A','B','C'];
// arr.forEach(item=>console.log(item)); //중간에 반복을 종료할수없음.

// for (let i =0; i < arr.length; i++) {
//     if(i>1){
//         break //중간에 반복을 종료가능. 상황에따라 for문사용
//     }
//     console.log(arr[i]);
// }

/* 대상 배열이 특정 요소를 포함하고 있는지 확인 */
// const arr = [1,2,3];
// const fruits1 = fruits.split(' / ');
// console.log(arr,arr.includes(7)); //false
// console.log(fruits1,fruits1.includes('Apple')); //true
// console.log(fruits1,fruits1.includes('banana')); //false - 대소문자 구분
// const users = [
//     {name : 'Neo', age : 85},
//     {name : 'Amy', age : 22},
//     {name : 'Lewis', age : 11}
// ];
// console.log(users.includes({name : 'Neo', age : 85})); // false - 객체,배열,함수는 참조형 데이터이기때문에
// const neo = users[0];
// console.log(users.includes(neo)) // true

/* 대상 배열의 모든 요소를 구분자로 연결한 '문자'를 반환 */
// const fruits1 = fruits.split(' / ');
// console.log(fruits1.join()); //Apple,Banana,Cherry
// console.log(fruits1.join(', ')); //Apple, Banana, Cherry
// console.log(fruits1.join(' / ')); //Apple / Banana / Cherry

/* 대상 배열의 길이만큼 주어진 콜백을 실행하고, 콜백의 반환 값을 모아 새로운 배열을 반환. */
// const numbers = [1,2,3,4];
// const newNumbers = numbers.map(item=>item*2);
// console.log(newNumbers); //[2, 4, 6, 8]
// const users = [
//     {name : 'Neo', age : 85},
//     {name : 'Amy', age : 22},
//     {name : 'Lewis', age : 11}
// ];
// const newUsers = users.map(user=>{
//     return {
//         ...user,
//         isValid :true,
//         email: null
//     }
// })
// console.log(newUsers);

/* 
    .pop()
    대상 배열에서 마지막 요소를 제거하고 그 요소를 반환
    대상 배열 '원본'이 변경됨.
*/
// const fruits1 = fruits.split(' / ');
// fruits1.pop();
// console.log(fruits1);

/*
    .push()
    대상 배열의 마지막에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환
    대상 배열 원본이 변경 
*/
// const fruits1 = fruits.split(' / ');
// const newLength = fruits1.push('Orange');
// console.log(fruits1,newLength);
// fruits1.push('Mango','Strawberry');
// console.log(fruits1);

/* 
    .reduce()
    대상 배열의 길이만큼 주어진 콜백을 실행하고, 마지막에 호출되는 콜백의 반환 값을 반환
    각 콜백의 반환 값은 다음 콜백으로 전달 
*/
// const numbers = [1,2,3];
// const sum = numbers.reduce((accumulator,currentValue)=>{ //accumulator 누적된값
//     return accumulator + currentValue;
// },0) //초기값(accumulator)은 0
// console.log(sum); //6

// const users = [
//     {name : 'Neo', age : 85},
//     {name : 'Amy', age : 22},
//     {name : 'Lewis', age : 11}
// ];

// // 총 나이 계산
// const totalAge = users.reduce((acc,cur)=>acc + cur.age,0);
// console.log(totalAge);
// console.log(`평균나이 ${(totalAge/users.length).toFixed(1)}세`); // 활용예제

// // 모든 이름 추출
// const names = users
//     .reduce((acc,cur)=>{
//         acc.push(cur.name)
//         return acc
//     }, []) //초기값 (acc)은 [] 배열 리터널
//     .join(', ') 
// console.log(names);

/* 
    .reverse()
    대상 배열의 순서를 반전합니다.
    대상 배열 원본이 변경됩니다. 
*/
// const arr = ['A','B','C'];
// const reversed = arr.reverse();
// console.log(arr); // ['C','B','A'] - 원본도 변경

/* 
    .shift()
    대상 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환
    대상 배열 원본이 변경됩니다. 
*/
// const arr = ['A','B','C']; 
// console.log(arr.shift());
// console.log(arr); //['B', 'C'] - 원본도 변경

/* 
    .slice(첫번째인수,두번째인수)
    대상 배열의 일부를 추출해 '새로운 배열을 반환'
    두 번째 인수 직전까지 추출하고, 두 번째 인수를 생략하면 대상 배열의 끝까지 추출함. 
*/
// const arr = ['A','B','C','D','E','F','G'];
// console.log(arr.slice(0,3)); //['A', 'B', 'C']
// console.log(arr.slice(4,-1)); //['E', 'F']
// console.log(arr.slice(4)); //['E', 'F', 'G']
// console.log(arr); //['A', 'B', 'C', 'D', 'E', 'F', 'G'] 

/* 대상 배열의 어떤 요소라도 콜백 테스트를 통과하는지 확인. 한개 이상 통과하면 true */
// const arr = [1,2,3,4];
// const isValid = arr.some(item => item > 3);
// console.log(isValid); //true

/*  
    .sort();
    대상의배열을 콜백의 반환 값(음수,양수,0)에 따라 정렬합니다.
    콜백을 제공하지 않으면, 요소를 문자열로 변환하고 유니코드 코드 포인트 순서로 정렬
    대상 배열이 원본이 변경
 */
// const numbers = [4,17,2,103,3,1,0];
// numbers.sort();
// console.log(numbers); //[0, 1, 103, 17, 2, 3, 4]
// numbers.sort((a,b)=> a - b);
// console.log(numbers); //[0, 1, 2, 3, 4, 17, 103]
// numbers.sort((a,b)=> b - a);
// console.log(numbers); //[103, 17, 4, 3, 2, 1, 0]
// const users = [
//     {name : 'Neo', age : 85},
//     {name : 'Amy', age : 22},
//     {name : 'Lewis', age : 11}
// ];
// users.sort((a,b)=>a.age - b.age)
// console.log(users);

/*
    .splice(첫번째인수,두번째인수.세번째인수)
    대상 배열에 요소를 추가하거나 삭제하거나 교체합니다.
    대상 배열 원본이 변경됩니다.
*/
// const arr = ['A','B','C']; 
// arr.splice(2,0,'X'); //['A', 'B', 'X', 'C']
// // 첫번째 인수 인덱스번호, 두번째 인수 아이템을 삭제하고자하는 갯수, 세번째인수 추가할아이템 
// console.log(arr);

/*
    .unshift(첫번째인수)
    새로운 요소를 대상 배열의 맨 앞에 추가하고 새로운 배열의 길이를 반환합니다.
    대상 배열 원본이 변경됩니다.
*/
// const arr = ['A','B','C']; 
// arr.unshift('X');
// console.log(arr); //['X', 'A', 'B', 'C'] - 원본이 변경

/*
    Array.from(유사배열데이터)
    유사 배열(Array-like)을 실제 배열로 반환합니다.
*/
// const arraylike = {
//     0: 'A',
//     1: 'B',
//     2: 'C',
//     length: 3
// } //array like 오브젝트는 length를 꼭 넣어야함.
// console.log(arraylike.constructor === Object); //true
// console.log(arraylike.constructor === Array); //false
// Array.from(arraylike).forEach((item)=> console.log(item)); 

/*
    Array.isArray() - 인수로 들어오는 데이터
    배열 데이터인지 확인하고 Boolean 으로 반환
*/
// const arr = [1,2,3];
// const arraylike = {
//     0: 'A',
//     1: 'B',
//     2: 'C',
//     length: 3
// }
// console.log(Array.isArray(arr)); //true
// console.log(Array.isArray(arraylike)); //false