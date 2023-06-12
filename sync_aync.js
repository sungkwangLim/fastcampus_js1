/*
    동기(Synchronous) 와 비동기(Asynchronous)
    - 동기 : 순차적으로 코드 실행 O
    - 비동기 : 순차적으로 코드 실행 X
*/

// fetch 비동기 코드 , ajax함수도 비동기
// 요청 request
// fetch('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
//     .then((res)=> res.json())
//     .then((res)=> console.log(res)) //응답(response)


// console.log(1);
// setTimeout(()=>{
//     console.log(2);
// },1000); // 대표적인 비동기 함수
// console.log(3);

// const btnEl = document.querySelector('h1');
// btnEl.addEventListener('click',function(){
//     console.log(this)
// }); // addEventListener 비동기 



/*
    콜백(Callback) 패턴
*/

// const getMovies = (a,b)=>{
//     fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${a}`)
//     .then((res)=> res.json())
//     .then((res)=> {
//         console.log(res);
//         b(); // 콜백함수를 실행
//     })
// }
/*
    비동기에서 api 요청하면 응답하는 순서가 다를수있으니 콜백을 통해서 강제로 원하는 순서대로 부를 수있다.
    하지만 아래패턴처럼 콜백안에 콜백안에 콜백을 넣다보면 관리적인측면에서도 보기도 어렵고, 헷갈리는 상황이 올 수 있다.
    이게 콜백지옥
*/
// getMovies('frozen',()=>{
//     console.log('겨울왕국 불러오기!');
//     getMovies('avengers',()=>{
//         console.log('어벤져스 불러오기!');
//         getMovies('avatar',()=>{
//             console.log('아바타 불러오기!');
//         });
//     });
// });




/*
    Promise
*/

// const getMoviesPromise = (movieName)=>{
//     return new Promise((resolve)=>{
//         fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
//         .then((res)=> res.json())
//         .then((res)=> {
//             console.log(res);
//             resolve(movieName);
//         });
//     });
// }
// getMoviesPromise('frozen')
//     .then((a)=>{
//         console.log(`${a} 프로미스 순서1`,);
//         return getMoviesPromise('avengers')
//     })
//     .then((a)=>{
//         console.log(`${a} 프로미스 순서2`);
//         return getMoviesPromise('avatar')
//     })
//     .then((a)=>{
//         console.log(`${a} 프로미스 순서3`);
//     });

/*
    async await 패턴
    await 패턴을 사용하려면 함수로 묶어서 async를 선언해야됨.
    await는 프로미스를 반환하는 값에 써야됨.
*/

// const wrap = async () => {
//     await getMoviesPromise('frozen');
//     console.log(`frozen 프로미스 순서1`,);
//     await getMoviesPromise('avengers');
//     console.log(`avengers 프로미스 순서2`,);
//     await getMoviesPromise('avatar');
//     console.log(`avatar 프로미스 순서3`,);
// }
// wrap();

/*
    Resolve, Reject 그리고 에러 핸들링
    Resolve는 성공했을때,
    Reject은 실패 했을때,
    둘중에 하나만 함수 선언됨. 

    함수를 불러올때 then은 Resolve를 콜백해서 받아오고
    catch는 Reject를 콜백해서 받아온다.

    finally는 성공,실패든 항상 실행됨.
*/
const delayAdd = (index) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(index > 10) {
                reject(`${index}는 10보다 클 수 없습니다.`);
                return
            }
            console.log(index);
            resolve(index+1)
        },1000);
    })
}

delayAdd(4)
    .then(res => console.log(res))
    .catch(err => console.error(err))
    .finally(()=>{ console.log('Finally!') })
// async await 패턴으로 
const wrap2 = async () =>{
    try {
        const res = await delayAdd(14);
        console.log(res);
    } catch(err) {
        console.error(err);
    } finally {
        console.log('Finally!');
    }
}
wrap2();

/*
    Resolve, Reject 그리고 에러 핸들링2
*/
const getMovies = movieName => {
    return new Promise((resolve,reject)=>{
        fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
            .then(res => res.json())
            .then(json => {
                // console.log(json);
                if(json.Response === 'False') {                    
                    reject(json.Error)
                }
                resolve(json);
            })
            .catch(error=>{
                reject(error);
            });
    });
}
let loading = true;
// getMovies('avengers')
//     .then(movies => console.log('영화목록:',movies))
//     .catch(error => console.log('에러발생:',error))
//     .finally(()=> loading = false)
const wrap = async (title) => {
    try {
        const movies = await getMovies(title);
        console.log('영화목록:',movies,title);
    } catch(err) {
        console.log('에러발생:',err)
    } finally {
        loading = false;
    }
}
// wrap('avengers')
/*
    반복문에서 비동기 처리
    array 에서 forEach 메소드에서는 비동기처리를 기다렸다가 다음으로 콜백하는것은 불가능. 그래서 반복될때 바로바로 실행.
    array 순서대로 불러오려면 for or for of문으로 
*/
const titles = ['frozen','avengers','avatar'];
// titles.forEach(async title=>{
//     const movies = await getMovies(title);
//     console.log(title,movies);
// })
const wrap3 = async () => {
    for (const title of titles) {
        try {
            const movies = await getMovies(title);
            console.log(title,movies);
        }
        catch(err) {
            console.log('에러발생:',err)
        } finally {
            loading = false;
        }
    }
}
// wrap3();

/*
    fetch(주소,옵션)
    네트워크를 통해 리소스를 요청(Request) 및 응답(Response)을 처리 할 수 있다.
    Promise 인스턴스를 반환.

    fetch 옵션에 객체를 인수로 넣을수 있다.
    method : GET, POST, PUT, DELETE
    headers : {} - 서버에 전송하는 요청에 대한 정보들
    body : {} - 요청에 대한 데이터들 
    body 에 사용되는 데이터는 json형태로 해야하기때문에 
    JSON.stringify 매소드를 사용하게 될것.
*/
fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=frozen`,{
    // method : 'GET',
    // headers : {
    //     'Content-Type':'application/json'
    // },
    // body : JSON.stringify({ 
    //     name : 'lsk',
    //     age : 11,
    //     email : 'thesecon@gmail.com'
    // }) 
})
    .then(res=> {
        // console.log(res.json())
        return res.json()
    })
    .then(json=> console.log(json))
// async await 패턴으로
const getFetch = () =>{
    const resopnse = fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=frozen`);
    return resopnse.then(res=>res.json())
}
const wrap4 = async () => {
    try {
        const json = await getFetch();
        console.log(json);
    } catch(err) {
        console.log(err);
    }
}
wrap4();



