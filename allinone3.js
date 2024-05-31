// @@@@@@@@@@@@@@@@@@@@@@@@@@@@ scope injavascript

// ther is scope called as block scope and globa scope  if intialize any variable inside scope /curly braces known as block scope 
// and outside scope known as global scope 

var c = 300;
if (true) {
    const a = 100;
    let b= 200;
    var c  = 39;
}
// console.log(a);
// console.log(b);
//  console.log(c); 


// @@@@@@@@@@@@@@@@@@@@@ hoisting in javascript
//   function one() {
//     const userName = "ujjwal"

//     function two() {
//       const website = " youtube" 
//       console.log(userName);
//    two()
//     }
//   } one() 

//    scope level is basically when child access all the properties of parent but can not access the the properties

// if (true) {
//     const username =  ("ujjwal")
//     if (username=== "ujjwal") {
//         const website = ("youtube") 
//         console.log(username+website);
//     }
// }
// @@@@@@@@@@ arrow and this function in javascript

// const userName = { 
//     user : "ujjwal",
//     price: 999,

//     welcomeMessage:function() {
//         console.log(`${this.user},welcome`);
//         console.log(this);
//     } 
   
// } 
// userName.welcomeMessage()

// userName.user = "mayank"
// userName.welcomeMessage(

// ) 

 
//  const addNum= (num1, num2  ) => { 
//     console.log(num1 + num2);
// }
// addNum(8,4); 


// ###############################3 iife immediately invoked function expression

// for avoiding global execution pollution we used Iffe
 (function chai() {
    // console.log("db connected")
 })()


//  ################## contol flow########

if (2 ==3) {
    console.log("yes");
}

// const temperature = 40 
// if (temperature <35) {
    // console.log("less thsn 50");}
    // else { console.log("not less than 50");}

const userlogin = true
const creditcard= true
if (userlogin && creditcard) { 
    console.log("allowed to shopping ")
}
else if (userlogin && 2==2) {
    console.log("cross check")

}
else {
    console.log("ram ram");
}

const month = 3

switch (month) {
    case 1:
        console.log("jan");
        break;
case 2: 
console.log("feb");
break;
case 3 : 
console.log("march"); 
break;
    default: 
    console.log("defoult values");
        break;
}