// 함수 (Function)
// 함수 선언문 (Declaration)
// function hello(){};

// // 함수 표현식 (Expresstion)
// const hello = function(){};

// 호이스팅(Hoisting) 
/* 함수 선언을 나중에하고 호출을 이전에 해도 정상적인 작동을 하게 해준다.
그 이유는 호이스팅(끌어올리는) 현상때문인데 함수 선언문들은 브라우저에서 먼저 읽게 하기때문에 
함수 표현식은 안된다.
*/
// ex
// hello();
// function hello(){
//     console.log('hello~');
// }



// 매개변수 패턴(Parameter pattern)
// //// 기본값 (Default value)
// function sum(a,b = 1) {
//     return a + b
// };
// console.log(sum(1,2));
// console.log(sum(7));
// //// 구조 분해 할당(Destructuring assignment)
// const user = {
//     name : 'lsk',
//     age : 11
// };
// function getName({name}){
//     return name
// };
// function getEmail({email = '이메일이 없습니다.'}){
//     return email
// };
// console.log(getName(user)); // lsk
// console.log(getEmail(user)); // 이메일이 없습니다.
// //// 나머지 매개변수(Rest parameter)
// function sum(...rest){
//     console.log(rest); // 나머지 매개변수를 사용하는게 낫다.
//     console.log(arguments); //유사 배열 객체이기때문에 배열 내장함수를 사용할수없음.
//     return rest.reduce(function(acc,cur){
//         return acc + cur
//     },0);
// }
// console.log(sum(1,2)); //3
// console.log(sum(1,2,3,4)); //10
// console.log(sum(1,2,3,4,5,6,7,8,9,10)); //55



// 화살표 함수(Arrow Function)
// const a = () => {};
// const b = x => {}; //매개변수가 1개이면 () 생략가능
// const c = (x,y) => {};
// const d = x => {
//     return x * x
// };
// const e = x => x * x; // 리턴키워드를 바로 사용하면 리턴키워드와 {}를 생략가능
// const f = x => {
//     console.log(x * x);
//     return x * x 
// }; // 리턴키워드를 바로 사용하지않을때는 {}를 넣어야한다.
// const g = () => { return {a : 1} };
// const h = () => ({a : 1}); //객체 데이터를 반환하면 생략된 {} 블럭 기호와 객체 기호가 같기때문에 ()를 감싼다.
// const i = () => { return [1,2,3] };
// const j = () => [1,2,3]; // 배열은 ()를 묶을필요없다.



// 즉시실행함수(IIFE, Immediately-Invoked Function Expression)
// const a = 7;

// const double = () =>{
//     console.log(a*2);
// }
// double() // 함수를 호출 - 일반적인방식

// ;(()=>{
//     console.log(a*2);
// })() // 함수를 만들고 즉시 실행


// ;( () => {} )() // (F)()
// ;( function() {} )() // (F)()
// ;( function() {} () ) // (F()) 일반적으로 사용하지않음.
// ;!function(){}() // !F() 일반적으로 사용하지않음.
// ;+function(){}() // +F() 일반적으로 사용하지않음.

// ;((a,b)=>{
//     console.log(a.innerWidth);
//     console.log(b.body);
// })(window,document) // 즉시실행 함수로 매개변수로 전달해서 코드의 난독화를 만들수있다.



// 콜백(Callback)
// const sum = (a,b,c) =>{
//     setTimeout(()=>{
//         c(a+b) //매개변수로 받아온 함수를 실행
//     },1000)
// };
// sum(1,2,(value)=>{ //인자로 함수를 선언 (콜백함수)
//     console.log(value);
// })
// // 콜백예제
// const loadImage = (url,cbimg) => {
//     const imgEl = document.createElement('img');
//     imgEl.src = url;
//     imgEl.addEventListener('load',()=>{        
//         cbimg(imgEl)//로드 후에 이미지엘리먼트를 인수로넣고 콜백호출
//     });
// }
// const bodyEl = document.body;
// loadImage('https://tourmaline-kulfi-84ddcb.netlify.app/images/reserve_store_bg.jpg',(imgEl)=>{ //콜백실행
//     bodyEl.append(imgEl)
// })


// 재귀(Recursive)
// // 재귀 예제 무한으로 자기 함수를 호출할수 있어서 특정한거를 찾을때 유용.
// const userA = { name : 'A', parent : null }
// const userB = { name : 'B', parent : userA }
// const userC = { name : 'C', parent : userB }
// const userD = { name : 'D', parent : userC }

// const getRootUser = (user) => { 
//     if(user.parent) {
//         return getRootUser(user.parent)
//     }
//     return user
// }
// console.log(getRootUser(userA));



// this
//// 일반 함수의 this는 호출 위치에서 정의
//// 화살표 함수의 this는 자신이 선언된 함수(렉시컬) 범위에서 정의

function user(){
    this.firstName = '화살표 함수';
    this.lastName = '범위'
    return {
        firstName : 'Gerrard',
        lastName : 'Kwang',
        fullName(){ // 1.일반함수는 축약(function생략)이됨. 2.객체 안에 함수선언은 메소드라고 함.
            return `${this.firstName} ${this.lastName}`
        },
        fullName2 : ()=>{ //화살표함수는 축약형이 안됨.
            return `${this.firstName} ${this.lastName}`
        }
    }
}
const u = user();
console.log(u.fullName(),u.fullName2());

const timer = {
    title : 'Timer',
    timeout(){
        setTimeout(function(){ //일반함수에서this는 그 위치에서 정의하기때문에, setTimeout 내장함수에서 호출되어서 this값이 window이다.
            console.log(this.title); //undefined
        },1000);
        setTimeout(()=>{ //화살표함에서this는 자신이 선언된 함수의 위치에서 정의하기때문에, setTimeout에서 선언한 바로 위에 함수 this값을 가져온다.
            console.log(this)
        },1500)
    }
}
timer.timeout();