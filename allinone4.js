// for (let i = 0; i <10 ; i++) {
//     const element = (i);
//     if (element ==5){
//         console.log('best number ');
//     }
//     // console.log(element);
// }
// for (let i = 0; i < 10; i++) {
//     const element = (i);
//     console.log(element);
//     for (let j = 0; j < 10; j++) {
//         const elemen = j;
//         console.log(elemen);
//     }
// }

// let myarr = [ "flash", "batman","superman"];
// for (let index = 0; index < myarr.length; index++) {
//     const element = myarr[index];
//     console.log(element);
// }
//  for (let i = 0; i < 10; i++) {

//     if( i == 5 ){
//         console.log("number detected");
//     break;}
//    console.log(i);
//  }

//  let index = 0 
// while (index <= 10) {
//   console.log(`value of index is ${index}`);
//      index+2
// }

// let myarr = ["flash ","batmam","spiderman"]
// // let arr = 0
// // while (arr <myarr.length) {
// //   console.log(myarr[arr]);
// //   arr++
// // }
//  let arr = 0
//  do {
//   console.log(myarr[arr])
//   arr++
//  }
// while (arr < myarr.length) 
   
  // ########################  for of loop
 

  const arr = [ 1,2,3,4,5]
for (const iterator of arr) {
  // console.log(iterator);
}


const greeting  = "hello world"

for (const greet of greeting) {
  if ( greet == "e"){
    continue;
  }
    // console.log(greet);
  
}


const maps = new Map()
maps.set('in',"india")
maps.set('usa',"united state of america")
maps.set('fr',"france")

  for (const [ key, value] of maps) {
    // console.log(key, " " ,value);
  }
//  for of did't work at object
const myobject = {
py : 'python',
cpp : "c++",
js :"javascript"
}

for (const key in myobject) {
//  console.log(key,"          "  ,myobject[key]);
}
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ for each in array

// const coding = [ "js ", "ppython" , "ruby"]
// // coding.forEach(  function (item,index){
// // console.log(item , index);
// // }
// // )
// coding.forEach(
// //   (itm) => { console.log(itm);}
// )
// const myCoding = [ 
//   { language : "javascript " ,
//   languageFile : " js "

//   },
//   {
//     language : "ython",
//     languageFile : "py"
//   },
// ]
// myCoding.forEach(  (items) => {
//   console.log(items.language);
// } )

// ################################ filter in array
// const nums = [ 1,2,3,4,5,6,7,8,9]


//    const mynum =  nums.filter((item) => {
//         return item > 5 
//       })
//       console.log(mynum);


const mynum  = [ 1,2,3,4,]
//  const newnum = []
 
//  mynum.forEach ( 
//   (item) => {
//     if (item > 4){
//       newnum.push(item)
//     }
//   }
//  )
//  console.log(newnum);

// &&&&&&&&&&&&&&&&&&&&& map in arra

//  const numb = mynum.map ( 
//   (item) => {
//     return  item + 10
//   }

// )
// console.log(numb);
const mytotal = mynum.reduce(
  (acc,currval) => {
    return acc +  currval
  },0
) 
console.log(mytotal);