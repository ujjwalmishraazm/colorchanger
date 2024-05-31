const myarr = Array([ "y","t","r","f"]);
// console.log(myarr[1]);

//  we can also create object to intialiaze the array

let myArrr = new Array(1,2,3,4,5,6,7);
// here there no need make bracket because js will do for you 
// console.log(myArrr[3]);

let superHeros = [ "shaktiman ", "xyz", " zyx "];
superHeros.push("ff");
// console.log(superHeros);

// superHeros.join()  join are used to convert element into string 
//  includes method is used to find element in array

// console.log(superHeros.includes(6));
const marvel = [ "tthor ", 'ironman' ,"superman" ];
const dcHeros = [ "flash", "batman ","hh" ]
const All_Heros = marvel.concat(dcHeros)
// console.log(All_Heros);
//but here we can also use spread method 
 const ujj = [ ...marvel, ...dcHeros]
//  console.log(ujj);

 const arrY = [ 1,2,3,[3,4,[5,7,]] ,9,[0]]
  const maya = arrY.flat(Infinity)
//  console.log(maya);

//  console.log(Array.from('ujjwal'));

//  ################ object in javascript 
const mySym = Symbol('key1')
const jsUser = {
name: "ujjwal mishra ",
[mySym] : 'mykey1',
email: "mayank@123.gmail.com",
address : "haidarabad"
 }
// console.log( typeof jsUser[mySym])

jsUser.name = "ujjwal"
// console.log(jsUser.name);
// Object.freeze(jsUser)
// console.log(jsUser);

jsUser.greeting = function(){
//   console.log(`hello js user,${this.name}`);
 }
//  console.log(jsUser. greeting());   


// ################### creating an object
//  const tinderUser = new Object()
//  console.log(tinderUser);
  
  //  second type of creating object is
  
  const tinderUser = {}
   tinderUser.Id = '123'
   tinderUser.name = 'sammy'
  // console.log(tinderUser);
   
  // third type of object

  const regularUser = { 
     name :'ujjwal',
     userName :{
fullName:{
  naam: "mayank"
}
     }
  }
  // console.log(regularUser.name.userName);
  
  // to merge two object in single object
   const obj1   = { 1:"A",2:"b"}
   const obj2 = {3:"d",4:"h" }
   const obj4 = { ...obj1,...obj2}

  //  const obj3 = Object.assign( obj1,obj2)
  //  console.log(obj4);

   const course ={ 
    name: "javascript",
    price: 999,
    courseInstructor : "mayank"
   }
    let {courseInstructor} = course
  //  console.log(courseInstructor);

//  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& function in javascrit
function addtwo(num1,num2) {
  //  console.log( ( num1 + num2));
}
 (addtwo(10,20)); 


//  function  loginUser(username) {
//   console.log(`${username}, just logged in `); 
//  }

//  loginUser("ujjwal"); 



function UserCart(...num) {
  return num
}
// console.log(UserCart( 100,400,800,888));



const  user = { 
  username : "ujjwal ",
  price : 99
}

function handleobject (user) {
  console.log(`${user.username}`);
} 
handleobject(user)