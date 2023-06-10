/*
    동기(Synchronous) 와 비동기(Asynchronous)
    - 동기 : 순차적으로 코드 실행 O
    - 비동기 : 순차적으로 코드 실행 X
*/

// fetch 비동기 코드 , ajax함수도 비동기
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



/*
    콜백(Callback) 패턴
*/

const getMovies = (a,b)=>{
    fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${a}`)
    .then((res)=> res.json())
    .then((res)=> {
        console.log(res);
        b(); // 콜백함수를 실행
    })
}
/*
    비동기에서 api 요청하면 응답하는 순서가 다를수있으니 콜백을 통해서 강제로 원하는 순서대로 부를 수있다.
    하지만 아래패턴처럼 콜백안에 콜백안에 콜백을 넣다보면 관리적인측면에서도 보기도 어렵고, 헷갈리는 상황이 올 수 있다.
    이게 콜백지옥
*/
getMovies('frozen',()=>{
    console.log('겨울왕국 불러오기!');
    getMovies('avengers',()=>{
        console.log('어벤져스 불러오기!');
        getMovies('avatar',()=>{
            console.log('아바타 불러오기!');
        });
    });
});


