// JavaScript mein Function code ka ek block hota hai jo kisi kaam ko perform karta hai aur jab zarurat ho tab call kiya ja sakta hai.

// 1.Function Declaration

// function greet() {
//   console.log("Hello Virat!");
// }

// greet();



// 2.Parameters & Arguments  & regular funcations 

// function add(a, b) {   // a aur b parameters hain
//   console.log(a + b);
// }

// add(10, 20); // 10 aur 20 arguments hain


// function greet  (a, b) {
//   console.log(a + b);
// }

// greet(12,12);


// 3.Return Statement
// function multiply(a, b) {
//   return a * b;
// }

// let result = multiply(5, 4);

// console.log(result);


// 4.Arrow Functions.
// 1.
// const greet = () => {
//   console.log("Hello!");
// };

// greet();


// // 2.
// let a=(x,y) => {
//     return x+y


// }

// console.log(a( 1,2));



// 5.Callback Functions

// let a=(x,y) => {
//     return x+y

// }

// let b=(x,y) => {
//     return x-y
    
// }

// let c=(num1,num2) =>{
//     return num1(2,3)+num2(3,4)
// }
// console.log(c(a,b));


// 2.
// let a = (x) => {
//     return x
// }

// let b =(y) => {
//     return y
// }

// let c=(num1,num2) =>{
//     return num1("hello viraat") + num2("good bye...!")
    
// }

// console.log(c(a,b));



//  '''''''''''''''''''''''''''''''''''''''''''''''''''''''''



// 1.
// function myfunction (params){
//     return 10

// }

// console.log(myfunction()+myfunction()+myfunction());




// 2. 
// function myfunction (params){
//     return console.log("hii");

// }

// console.log(myfunction()+myfunction()+myfunction());













// console.log("Hello, World!");


// console.log("a"==="a");  

// console.log("a"=="A");

// console.log("1" == 1);

// console.log(1 == "1");


// console.log(1 === "1");

// console.log("1" === 1);


// console.log(1 === 1);

// console.log([] === []);


// let a = 10;
// b = 10;

// console.log( a === b ); 


// yhaa pr a aur b dono alag alag memory location pe store honge to wo equal nhi honge 
// let a = {};
// b = {};

// console.log( a === b );   


// let sum = (a,b) => {
//   return a+b;
// }

// let sub = (a,b) => {
//   return a-b;
// }

// let mul = (a,b) => {
//   return a*b;
// }


// let div = (a,b) => {
//   return a/b;
// }

// let rem = (a,b) => {
//   return a%b;
// }


// let all =(u,v,w,x,y) => {
//     return u(10,5) + v(10,5) + w(10,5) + x(10,5) + y(10,5)
// }

// console.log(all(sum,sub,mul,div,rem));








// sssssssssssssssssssssssssssssssssssssssssssssssssssss   04-06-2026        sssssssssssssssssssssssssssssssssssssssssssssss

// ifelse
// elseif

// let age = 15
// if (age >= 18) {
//     console.log("you can vote");

// } else {
//     console.log("you can't vote");

// }

// let time = 21
// if (time >= 1 && time < 12) {
//     console.log("Good morning");
// } else if (time >= 12 && time < 17) {
//     console.log("Good Afternoon");
// } else if (time >= 17 && time < 22) {
//     console.log("good Evening");
// } else {
//     console.log("good Night");
// }

// let value =21


// 1.check the division. => marks like 60%

// let a = 12;

// if (a >= 90) {
//     console.log("topper");
//     console.log("congratulations");
// }
// else if (a >= 80) {
//     console.log("first division");
// }
// else if (a >= 70) {
//     console.log("second division");
// }
// else if (a >= 60) {
//     console.log("third division");
// }
// else if (a >= 30) {
//     console.log("pass");
// }
// else {
//     console.log("fail");
// }



// 2. check the digit, special char, alphabet
// let a= "13" 
// if (a >= "0" && a <= "9") {
//     console.log("digit");

// }

// else if (a >= "a" && a <= "z"){
//     console.log("alaphabate");
// }


// else if (a >= "A" && a <= "Z"){
//     console.log("alaphabate");
// }


// else if (a >= "!" && a <= "/"){
//     console.log("special character");
// }



// let a= "1" 
// if (a >= 0 && a <= 9) {
//     console.log("digit");

// }

// else if (a >= 'a' && a <= 'z'){
//     console.log("alaphabate");
// }


// else if (a >= 'A' && a <= 'Z'){
//     console.log("alaphabate");
// }


// else if (a >= '!' && a <= '/'){
//     console.log("special character");
// }



// 3.check the vowel a , e , i ,o,u or consonant

// let a = "s"
// if ( a =="a" || a =="e" || a =="i" || a =="o" || a =="u" ) {
//     console.log("vowel");
// } else {
//     console.log("consonant");
// }


//4. let data  ='a'.   check lower or uppercase  
// let data = "A"
// if (data >= "a" && data <= "z"){
//     console.log("Lowercase");
// }

// else if (data >= "A"  && data <= "Z"){
//     console.log("Uppercase");
// }

// else {
// console.log("......................??");
// }


// 5.alphabate or non-alphabate
// let a= "1" 
// if (a >= 0 && a <= 9) {
//     console.log("Non-alphabate");

// }

// else if (a >= 'a' && a <= 'z'){
//     console.log("alaphabate");
// }


// else if (a >= 'A' && a <= 'Z'){
//     console.log("alaphabate");
// }


// else if (a >= '!' && a <= '/'){
//     console.log("Non-alphabate");
// }


// 6. even number or odd number
// let a = 10;
// if (a % 2 === 0) {
//     console.log("even number");
// } else {
//     console.log("odd number");
// }
