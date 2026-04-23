// function data(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("data loaded");
//         },2000)
//         // resolve("here is data");
//     })
// }
// async function getdata(){
//     const d = await data();
//     console.log(d);
// }
// getdata();

// ------------------------------------2
// function multiply(a) {
//   return function (b) {
//     return function (c){
//         return a * b * c;
//     }
//   };
// }
// console.log(multiply);
// const first = multiply(2);
// console.log(first);
// const second = first(5);
// console.log(second);
// console.log(second(10)); // 100

// ------------------------------------3
// function add(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }
// function add(a) {
//   return function (b) {
//     if (b !== undefined) {
//       return add(a + b);
//     }
//     return a;
//   };
// }
// console.log(add(2)(3)(4));

// ------------------------------------4 ({this} ko manually set krna kisi function m)
// function greet(age){
//     console.log(`hello ${this.name} age is ${age}`);
// }
// const user = {name:"himanshu"};
// const user2 = {name:"harry"};
// greet(12);
// greet.call(user,12);//hello himanshu
// greet.apply(user2,[12]);//hello harry
// const fn = greet.bind(user,12);//bind-> return the function
// fn();//hello himanshu

// ------------------------------------5 indexOf(item) = first time item konse index m mila tha

const arr = [1,2,3,4,5,4,6,5];
