//hosting--> java script code run krne se phle variable or function ko top pr lejata h 
    // -> let/const hoist hota h but temporal zone m chle jate h

// console.log(a);
// const a;


// great();
// function great(){
//     console.log("hiii");
// }


//temporal dead zone--> variable ko declare krne se phle ka area sb temporal deadzone hota h
    // -> line 1 se 16 tkk TDZ h or 17 ke badd wala safe area h

// const a = 10;
// console.log(a);


// scopee --> let,var,const scope
    // -> var:function scope

// function test(){
//     var a = 10;
//     console.log(a); //10
//     if(a===10){
//         console.log(a); //10
//         var a = 20;
//     }
//     console.log(a); //20
// }

// test();
// console.log(a); //error is not diffined

// function test(){
//     let a = 10;
//     console.log(a); //10
//     if(a===10){
//         console.log(a); //10
//         a = 20;
//         let b = 30;
//     }
//     console.log(a); //20
//     console.log(b); //error is not diffined
// }

// test();
// console.log(a); //error is not diffined

// const a = 10;
// {
//     const b = 20;
//     console.log(a);//10
// }
// console.log(b);//error is not diffined

// var + var = ✅ allowed
var a = 10
var a = 20  // ok

// let + let = ❌ error
let b = 10
let b = 20  // SyntaxError

// let + var = ❌ error
let c = 10
var c = 20  // SyntaxError

// var + let = ❌ error
var d = 10
let d = 20  // SyntaxError