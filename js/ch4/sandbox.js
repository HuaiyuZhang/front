// function declare
function sayhi(){
    console.log('hi hi');
}

// function expression
// const sayhello=function(){
//     console.log('hello hello')
// };

sayhi();
sayhello();

// function computeArea(r){
//     return 3.14*r**2;
// }
// console.log(computeArea(2));

// arrow function
// const computeArea = (r)=>{
//     return 3.14*r**2;
// }
// const computeArea = (r)=> 3.14*r**2;

console.log(computeArea(2));

// forEach
people = ['a', 'b', 'c'];
people.forEach((element, index) => {
    console.log(element, index);
});