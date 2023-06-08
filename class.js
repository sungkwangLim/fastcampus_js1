console.log('Class 문법 시작');

// Prototype 

// const fruits = new Array('Apple','Banana','Cherry');

// console.log(fruits.length);
// console.log(fruits.includes('Bnana'));

// Array.prototype.lsk = function(){
//     console.log(this);
// }
// fruits.lsk();

// const lsk = {
//     firstName : 'sk',
//     lastName : 'lim',
//     getFullName(){
//         return `${this.lastName} ${this.firstName}`
//     }
// }
// const neo = {
//     firstName : 'Neo',
//     lastName : 'Anderson'
// }
// console.log(lsk.getFullName());
// console.log(lsk.getFullName.call(neo)); 

// function User(first,last){ //생성자 함수를 선언 할 때 - 파스칼케이스(앞에 대문자로)로 작성.
//     this.firstName = first;
//     this.lastName = last;
//     this.getFullName = function(){
//         return `${this.lastName} ${this.firstName}`
//     }
// }1
// User.prototype.getFullName2 = function(){
//     return this
// }

// const lsk = new User('sk','lim');
// const neo = new User('Neo','Anderson');
// console.log(lsk.getFullName());
// console.log(neo.getFullName2());

class User {
    constructor(first,last){
        this.firstName = first;
        this.lastName = last;
    }
    getFullName(){
        return `${this.lastName} ${this.firstName}`
    }    
    get fullNameGet(){ //getting 은 값들을 가져올때 사용. 그래서 return을 해줘서 값을 꼭 리턴해줘야함!
        return `${this.lastName} ${this.firstName}`
    }
    set fullNameSet(a){ //setting 은 값을 지정할 때 사용. 그래서 parameter를 꼭 지정해야함.        
        [this.lastName, this.firstName] = a.split(' ')
    }
    static isUser(u){
        if(typeof u === 'string'){
            return true;
        }
        return false;
    }
};
const lsk = new User('sk','lim');


// Getter, Setter
console.log(lsk.fullNameGet); //get 으로 지정한 함수는 속성으로 지정되기때문에 ()을 제외한 속성값을 불러옴.
lsk.firstName = 'jh';
console.log(lsk, lsk.fullNameGet);
lsk.fullNameSet = 'lim Gerrard'  //set 은 값을 이퀄로 지정해야함.
console.log(lsk, lsk.fullNameGet);


// 정적 메소드 (Static Method)
// 인스턴스값을 부르지않고 class 본연의 네이밍을 불러야한다
// ex Array.isArray(value) // 배열인지 확인하고 true false 반환하는 정적 메소드
console.log(User.isUser([]),User.isUser('string을넘겨요'));



// 상속과 instanceof
class People extends User { //상속할 클래스를 extends 뒤에 적는다.
    constructor(a,b,c,d = 'Kwang'){ // constructor 와 super 문법을 작성하고, 
        super(c,d) //super에 상속한 클래스 매개변수를 동일하게 넣는다.
        this.age = a;
        this.personailty = b;
    }
}
class Human1 extends People {
    constructor(a,b,c,d){
        super(a,b,c,d)
    }
}
class Human2 extends User {
    constructor(c,d){
        super(c,d)
    }
}

const people1 = new People(38,'infp','Gerrard') // 인스턴스에 상속해서 만든 클래스를 넣는다.
const people2 = new Human1(38,'infp','De Bruyne') // 인스턴스에 상속해서 만든 클래스를 넣는다.
const people3 = new Human2('De','Bruyne') // 인스턴스에 상속해서 만든 클래스를 넣는다.
// instanceof 인스턴스가 해당 클래스에 있는지 확인하는것 Boolean으로 반환 
// 하지만 상속한 클래스도 true 값을 반환 
console.log(people1 instanceof People);  //true
console.log(people2 instanceof User);  //true
console.log(people3 instanceof People); //false - People와는 상속을 받지도않아서 관련없기때문에 false
//정확하게 해당 클래스만 찾으려면,
console.log(people1.constructor === People) //true
console.log(people1.constructor === User) //false - 상속받은거이기때문에 false
console.log(people3.constructor === Human2) //true
//배열로 예를 들어보기
const fruits = ['Apple','Banana','Cherry'] // 간편하게 리터널로 작성
console.log(fruits.constructor === Array); //true