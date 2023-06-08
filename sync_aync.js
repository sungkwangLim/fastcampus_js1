/*
    동기(Synchronous) 와 비동기(Asynchronous)
    - 동기 : 순차적으로 코드 실행 O
    - 비동기 : 순차적으로 코드 실행 X
*/

// fetch 비동기 코드
// 요청 request
fetch('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
    .then((res)=> res.json())
    .then((res)=> console.log(res)) //응답(response)


console.log(1);
setTimeout(()=>{
    console.log(2);
},1000); // 대표적인 비동기 함수
console.log(3);

const btnEl = document.querySelector('h1');
btnEl.addEventListener('click',function(){
    console.log(this)
}); // addEventListener 비동기 

