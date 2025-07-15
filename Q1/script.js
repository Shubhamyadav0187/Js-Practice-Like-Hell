// *****************************************************Project1

// let h1 = document.querySelector("h1")

// window.addEventListener("keydown", function(dets){
//   console.log(dets)
//   if(dets.key === " "){
//     h1.textContent = "Space"
//   }else  h1.textContent = dets.key
 
// })

// *****************************************************


// *****************************************************
//        CallBack Function AND Higher Order Function

// function mainFunction(callback){
//   console.log("Inside main functio");
//   callback()
  
// }

// mainFunction(()=>{
//   console.log("callback executed")
// })

// function greatCreator(greet){
//   return function(name){

//   console.log(`${greet}, ${name}`)
//   }
// }

// const greetin = greatCreator("hiii")
// greetin("shubham")

// function callFnNtimes(fn,n){
//   console.log("Going for calling fn for three times");
  
//   for(let i = 1; i<=n; i++){
//      fn()
//   }
   
// }
// callFnNtimes(function(){console.log("run!")} ,4)

// function myForEach(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i]);
//   }
// }

// myForEach([1, 2, 3], (el) => {
//   console.log(el * 2);
// });
// Output: 2, 4, 6


// function once(fn){
//   let called = false;
//   return function(){
//      if(!called){
//     called = true;
//     fn()
//   }


//   }
 
// }

// let onecall = once(function(){console.log("called once");
// })

// onecall()
// onecall()


// function delayMessage(time){

//   setTimeout(()=>{
//     console.log("Message delayes for:", time, "mili Second")

//   }, time)
// }

// delayMessage(5000)







// let sel = document.querySelector("select");
// let device = document.querySelector("#device");

// sel.addEventListener("change", function(dets) {
//     console.log(dets.target.value);
    
   
//     device.textContent = `You have selected ${dets.target.value }`;      
 
// })



// console.log("10" + 5);    // ?
// console.log("10" - 5);    // ?
// console.log("10" * "2");  // ?
// console.log("abc" - 1);   // ?
// console.log(true + false); // ?

// function add(a,b){
//     return a+b;
// }
// let ans = add(5,6)
// console.log(ans);


// const user = {
//     name: "shubham",
//     age : 23,
//     branch: "cse"
// }
// console.log({...user})


// function chacha(){
//     var a = 33;
//     console.log(a);
    
// }
// chacha()



// (()=>{
//     var a = 9;
//     console.log(a);
    
// })()


// const arr = [1,2,3,4,5]

// let res = arr.map((val)=> val*val)
// console.log(res, arr);

// . Use reduce() to calculate total price from this array:


// const cart = [{ price: 100 }, { price: 200 }, { price: 300 }];
// let total = cart.reduce((acc, val)=> acc+val.price,0)
// console.log(total);

// let arr = [1,2,3,-4]

// let res = arr.some(val => val<0)
// console.log(res);
// Use map() to print only names.

// Use filter() to get students with marks >= 80.

// Use reduce() to find average marks.

// Use some() to check if any student scored less than 35.

// Use every() to check if all scored more than 50.


// const student = [
//     {name: 'shubham', marks: 99},
//     {name: 'nitin' , marks: 55},
//     {name: 'sahil', marks: 88}
// ];

// let result = student.map((val)=>val.name)

// console.log(result);

// let res2 = student.filter(val=> val.marks>80)
// console.log(res2);

// let res3 = student.reduce( (crr,val)  => crr + val.marks, 0)
// console.log(res3);

// let name = "shubham"
// let name2 = name;

// name2  = "yadav";
// console.log(name, name2);

// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.slice(1,6));
// console.log(name.split());
// console.log(name.split("").reverse().join());

// for(let a = 1 ; a<=100; a++){
//     let sum = 0;
//     sum = sum +a
// }
// let sum = () =>{
//     let sum = 0;
//     for(let a = 1; a<=100; a++){
//         sum =sum+a
//     }
//     console.log(sum)
// }
// sum()

// let a = 1;
// let sum = 0;
// while(a<=100){
//     sum = sum+a;
//     a++
     
// }
// console.log(sum);













//  JavaScript Basic Interactions


//         *******     FIRST CLASS FUNCTIONS    **********
/* 


*/
// const greet = function(name) {
//     console.log(`hello ${name}`);
// }   
// greet("shubham");

// function sayHi(){
//     console.log("hi")

// }

// function callFunction(fn){
//     fn();
// }
// callFunction(sayHi)

// returning function from another function
// function outer(){
//     return function(){
//         console.log("I am inner function");
//     }
// }
// outer()()


// HIGHER ORDER FUNCTIONS
//  function greet(name){
//     console.log(`Hello ${name}`)
//  }

//   function callFunction(fn){
//     fn("shubham")
//   }
//   callFunction(greet);

// popular higher order function is forEach(), map(), filter(), reduce(), setTimeout(), setInterval(), setImmediate()
// const num = [1,2,3,4,4]

// let newNum = num.map((val)=>{
//     return val*val;

// })
// console.log(newNum);


/* 
alert("HII Shubham")
let ans = prompt("Type Your Name")
let sure = confirm("Are you sure you want to proceed")


*/

// const name = "shubham"
// let age = 20 
// console.log(name, age)


// let can not redeclare
// let x = 5
// let x = 9


// output undefined
// console.log(count)
// var count = 6


// Cannot access 'count' before initialization
// console.log(count)
// let count = 6


// const student = {
//     name: "shubham",
// }

// student.age = 23
// console.log(student)



// if(false){ 
//     console.log("runs");
    
// } else console.log(false);


// console.log(typeof 123n)

// let score = 90
// let result = score >=100 ? "pass" : score < 50 ? "fail" : "average" 

// console.log(!!"dfas");

// let marks = 9;

// if(marks>90){
//     console.log("A+");
    
// }else if(marks>80){
//     console.log("A");
// } else console.log("B");



// let fruit = "mang";

// switch(fruit){
//     case "apple":
//     console.log("apple");
//     break;

//     case "mango":
//     console.log("mango");
//     break;

//     default:
//         console.log("nothing match");
//     }



// EARLY RETURN

// function checkAge(age) {
//     if(age < 18) return "denied";
//     return "allowed";
// }
// console.log(checkAge(1))


// let i = 0;

// while(i<=8){
//     console.log(i);
//     i++;
// }

// let j = 0

// do{
//     console.log(j);
//     j++;
    
// }while(j<8)

//Break exit loop completely and Continue skip the current iteration and move tothe next
// for(let i = 1; i<=55; i++){
//     if(i===3) continue;
//     if(i===5) break;
//     console.log(i);
// }


// fro-of => Array and Strings

// for(let char of "shubham"){
//     console.log(char);
// }

// let arr = [1,2,3,3,4,5];
// for(let num of arr){
//     console.log(num)
// }


// let nums = [1,2,3,4,5];

// nums.forEach(function(num){
//     console.log(num);
// })

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((num, index)=>{
//     console.log(`index of  ${num} is ${index}`)
// })

// const obj = {
//     name: "shubham",
//     age: 20,
//     city: "delhi"
// }

// console.log(Object.entries(obj).forEach(([key, value]) => {
//     console.log(`${key} : ${value}`);
// }));

// for(let key in obj){
//     console.log(key, obj[key])
// }


// let str = "shubham";
// let reversedstr =  "";
// for(let i = str.length - 1; i>=0; i--){
//     reversedstr += str[i];
// }
// console.log(reversedstr);   


// let user = {
//     name: "shubham ",
//     age: 20,
//     city:"bhopal"
// }

// for(let key in user){
//     console.log(`${key} : ${user[key]}`);
// }   

// let arr = [1,2,3,4,5];

// var sum = 0;
// arr.forEach(function(num){
//    sum += num;
// })
// console.log(sum);  


// let str = "shubham";

// for(char of str){
//     console.log(char);
// }


//   const num = [1,2,3,4,5]
// let sum = num.reduce((acc,curr )=>{
//     return acc + curr  }, 0)   
// console.log(sum); // 15 


// closer example

// function createAdder(x){
//     return function(y){
//         return x + y
//     }
// }

// const add = createAdder(5)
// const ans = add(2)
// console.log(ans);


// for(let i = 0; i<5; i++){
//     setTimeout(()=>{
//         console.log(i);
        
//     }, 1000)
// }

// let marks = [1,2,3,4,4,5]
// marks.pop()
// marks.push(4)
// marks.shift()
// marks.unshift(4)
// console.log(marks);
// marks.splice(3,1);
// let newmarks = marks.slice(3,4)
// let filteredarr = marks.filter((n)=> n%2===0)
// console.log(filteredarr);


// let user = {
//     name: "shubham",
//     address: {
//         city: "bhopal",
//         pincode: 2030
//     }
// }
// let {name , address: {city}} = user;

// console.log(name  , city )


// console.log(book["auther"]);
// for(let key in book){
//     console.log(key, book[key]);
    
// }

// let {title, auther, price} = book
// let shallowcopy = {...book}
// console.log(shallowcopy);

// let obj2 = book
// obj2.title = "python"   
// console.log(obj2);
// console.log(book);
// console.log(book);   


// let deepcopy = JSON.parse(JSON.stringify(book))
// console.log(deepcopy);

