// const a = 1;
// const b = 3;

// // 동등(형 변환)
// console.log(a == b); //false

// // 부등(형 변환)
// console.log(a != b); //true

// // 일치 (이 방법을 추천)
// console.log(a === b); //false

// // 불일치 (이 방법을 추천)
// console.log(a !== b); //true



// 논리 (logical)
// const a = true;
// const b = false;

// // and(그리고) 연산자
// if(a&&b){
//     console.log('모두가 참');
// }

// // or(또는) 연산자
// if(a||b){
//     console.log('하나 이상 참');
// }

// // and(그리고) 연산자
// console.log(true && false); //false
// console.log(1 && 0); //0
// console.log(1 && 2 && 0); //0
// console.log(1 && 0 && 2); //0
// console.log('a' && 'b' && ''); //''
// console.log('a' && 'b' && 'c'); //c

// // or(또는) 연산자
// console.log(false || true); //true
// console.log(0 || 1); //1
// console.log(false || 0 || {}); //{}
// console.log(false || [] || null); //[]
// console.log(function(){} || undefined || ''); //function(){}
// console.log(false || 0 || NaN); // NaN - 모든게 거짓이라 마지막거를 반환




// Nullish 병합(Nullish Coalescing)
// const n = 0;

// // or 연산자를 사용한 경우
// const num1 = 1 || n || 7; // false 기준
// console.log(num1); // 7

// // Nullish 병합 연산자를 사용한 경우
// const num2 = null ?? undefined ?? n ?? 7; //null or undefined 기준
// console.log(num2); // 0
// console.log(null ?? 1); // 1
// console.log(undefined ?? 2); //2
// console.log(null ?? undefined); //undefined
// console.log(null ?? 1 ?? 2); //1
// console.log(false ?? 1 ?? 2); //false
// console.log(0 ?? 1 ?? 2); //0




// 삼항(Ternary)
// const a = 1;
// if (a<2) {
//     console.log('참');
// } else {
//     console.log('거짓');
// }
// // 삼항 연산자
// // 조건 ? 참 : 거짓
// console.log(a<2 ? '참' : '거짓'); // 코드를 간소화 하기때문에 사용

// function getAlert(message) {
//     return message 
//     ? message 
//     : '메시지가 존재하지 않습니다!'
//     //줄바꿈도 가능 한줄로 하든 줄바꿈을 하든 편한대로 사용
// }
// console.log(getAlert(undefined));
// console.log(getAlert('안녕하세요'));




// 전개 연산자(Spread Operator)
// const a = [1,2,3];
// const b = [4,5,6];
// console.log(...a); // 1,2,3 [] 대괄호 기호만 증발시킴.
// const c = a.concat(b);
// console.log(c); // [1,2,3,4,5,6]
// console.log([...a,...b]); // [1,2,3,4,5,6]

// const a = {x:1,y:2};
// const b = {y:3,z:4};
// const c = Object.assign({},a,b);
// console.log(c); // {x: 1, y: 3, z: 4}
// const d = {...a,...b}; //유용하게 사용됨. 
// console.log(d); // {x: 1, y: 3, z: 4}

// function fn(x,y,z,...c){
//     console.log(x,y,z,c);
// }
// fn(1,2,3);
// const a = [1,2,3,4,5,5,6,6,3,7,7];
// // fn(a[0],a[1],a[2])
// fn(...a)



// 구조 분해 할당(Destructuring assignment);
// let a = 0;
// let b = 0;
// let c = 0;
// const arr = [1,2,3]; //배열데이터 아이템 순서가 중요
// // const a = arr[0]
// // const b = arr[1]
// // const c = arr[2]
// [,b,c] =  arr;
// console.log(b,c);
// const arr = [1,2,3];
// const [a,...rest] = arr;
// console.log(a,rest);
// 객체 구조 분해 할당
// const obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
//     x: 7,
//     y: 100
// }
// // const a = obj.a;
// // const b = obj.b;
// // const c = obj.c;
// const {a,b,...rest} = obj;
// const {d = 2} = obj; // 값이 없을때 기본값을 지정할수있고, obj에 값이 있으면 obj에값을 출력
// console.log(a,b,rest);
// console.log(d);
// const {x= 1, a:lsk ,y:ten = 10} = obj // 변수네이밍을 변경할때 : 를 써서 변수를 변경
// console.log(x,lsk,ten);



// 선택적 체이닝(Optional Chaining);
// const userA = {
//     name : 'lsk',
//     age : 11,
//     address : {
//         country : 'Korea',
//         city : 'Seoul'
//     }
// };
// const userB = {
//     name : 'Neo',
//     age : 22
// };

// function getCity(user){
//     return user.address?.city || '주소없음'
// }
// console.log(getCity(userA));
// console.log(getCity(userB));



// switch 조건문
// function price(fruit){
//     switch(fruit){
//         case 'Apple':
//             return 1000; //return 키워드를 사용하면 break를 사용할 필요는 없음.
//         case 'Banana':
//             return 1500;
//         case 'Cherry':
//             return 2000;
//         default:
//             return 0;            
//     }
// }
// console.log(price('Apple'));
// console.log(price('Banana'));
// console.log(price('Cherry'));
// console.log(price('Hello'));



// 반복문
// for(let i = 9; i > -1; i -= 1) {
//     if(i%2 === 0) {
//         continue // 짝수 조건에 들어오면 현재 반복을 종료하고 다음 반복을 실행.
        
//     } else if (i === 3) {
//         break // 조건에 맞으면 반복문을 종료.
//     }
//     console.log(i)
// }
// for of 반복문 - 배열 데이터를 반복할때 쓰는 반복문
// const uesrs = [
//     {
//         name : 'lsk',
//         age : 11
//     },
//     {
//         name : 'pkk',
//         age : 22
//     },
//     {
//         name : 'ccc',
//         age : 33
//     }
// ]
// for (const user of uesrs) {
//     console.log(user);
// }
// // for in 반복문 객체 데이터를 반복할때 쓰는 반복문
// const user = {
//     name : 'lsk',
//     age : 11,
//     isValid : true,
//     email: 'lsk@email.com'
// };
// for(const key in user){
//     console.log(user[key]);
// }