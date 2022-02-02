//1.ways to print in javascript
/* console.log("Hello World");
//alert("Alert Popup");
//document.write("this is doc write");
console.warn("this is a warning")
console.error("this is an error") */


/* //2. javascript console API
console.log("Hello World");
//alert("Alert popop");
//document.write("this is doc write");
console.warn("this is a warning")
console.error("this is an error") */

//3. Javascript Variables
//what are Variables? : containers to store data values

/* var number1 = 34;
var number2 = 56;
console.log(number1 + number2);

//4. data types in javascripts

//a. strings
var str1 = "this is a string";
var str2 = 'this is also a string';

//b. numbers

var num1 = 56.76;
var num2 = 488;

//c. objects (key value pair)

var marks = {
    anurag: 75,
    mert: 85,
    alexa: 99.96,
}

//d. Boolean

var t = true;
var f = false;

//e. Undefined
var und;
console.log(und);

//f. arrays

var arr1 = [1, 2, 3, 4, 5, 6.5, 'boop']; */

/* //At a very high level , 
there are 2 types of Data types in JavaScript
1.Primitive : undefined, null, number, string, boolean, symbol
2. Reference datatype : Arrays and Objects
*/

//Operators in JavaScript
//Arithmetic Operators 
/* var a = 100;
var b = 10;
console.log("a+b is ", a + b);
console.log("a-b is ", a - b);
console.log("a*b is ", a * b);
console.log("a/b is ", a / b);

//Assignment Operators
var c = b;
c *= 2;
console.log(c); */

//Comparison Operators

/* var x = 34;
var y = 56;
console.log(x == y);
console.log(x >= y);
console.log(x <= y);
console.log(x > y); */

//Logical Operators :  Boolean algebra (&&, || , !) (AND, OR, NOT)

//Functions in JavaScript
//DRY = Do not repeat yourself

/* function avg(a, b) {
    return (a + b) / 2;

}
c1 = avg(4, 6);
c2 = avg(25, 75); */

// console.log(c1,c2);

//Conditionals in JavaScripts
//if-else

//var age = 29;
/* if (age > 8){

    console.log('you are not a kid');
} */
/* else{

    console.log('you are a kid');
} */

//if - else ladder
//const input = prompt("Enter the age to get the right behavior ");

/* function ageBehavior(age) {

    //const age = prompt("Enter the age to get the right behavior ");

    if (age > 32) {

         console.log("get married");

    }
    else if (age > 26) {

         console.log("get a job")
    }
    else if (age > 22) {

         console.log("get a degree")
    }
    else if (age > 18) {

         console.log("get a girlfriend")
    }
    else {

         console.log("go to six flags")
    }
    console.log("end of function");

    return (age);
}
 age = ageBehavior(27)

/* const input = prompt("Enter the age to get the right behavior ");
 age = ageBehavior(input); */
//console.log(age); 

/* function agelimit(a){
    If(a >= 18){
   Console.log("you can drink");
   else{
   Console.log("you can't drink");
}
Return(a);
}
Age = agelimit(15);
CONSOLE.LOG(age); */

//looping in javaScript

//for loop

var arr = [2, 3, 4, 5, 6, 7, 'wow'];

// console.log(arr);
/*
for( var i=0; i < arr.length; i++){
    console.log(arr[i]);
}
 */
/* arr.forEach(function (element) {
    console.log(element)
}) */

//while loop
/* let j=0
while(j<arr.length){

    console.log(arr[j]);
    j++;
} */

// Array Methods

let myArr = ["Fan","Camera","Mobile",55, null, true]

//myArr.lenght --> method to fetch length of array

console.log(myArr.length);

//myArr.pop ---> remove last element of the array
//myArr.push ===> Add element to the array myArr.push("Extra")

/* myArr.push("Extra")
console.log(myArr) */

//myArr.shift ---> Remove first element of the array

//myArr.unshift("Extra")  --- the element extra will appear as the fisrt element , lenght of array will increase by 1
const newLen = myArr.unshift("Extra")
console.log(newLen)
console.log(myArr)

//Conver array to string --> myArr.toString
console.log(myArr.toString())
// sort array method -->converts array to string and then sorts , its not a normal ascending order sort, its as per string dictionary
d = [23,21,4,5,66,79,88,22,11,21,1331]

console.log(d.sort())

//More methods can be found on the following link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

//String method in javaScript

let myExampleString = "Pets are awesome are Pets awesome"
 console.log(myExampleString.length) //--> Length of the string
 console.log(myExampleString.indexOf("are")) //---> Index of element within the string]] by default returns the index of first occurence

//if you want index last occurence of the string element us .lastindexof
console.log(myExampleString.lastIndexOf("are"))

//Slice the elements of the string

console.log(myExampleString.slice(0,3)) //--> will slice the string and return first 4 indices

//replace element in the string

/* console.log(myExampleString.replace("Pets","Cats"))
 */

// Dealing with dates in JavaScript

let myDate = new Date()
console.log(myDate)
console.log(myDate.getTime())

//DOM (Document object manipulation) in javaScript

console.log(document)
console.log(document.location)

document.getElementById('click')

//QuerySelector


//Arrow Functions
/* function summ(a,b){

    return a+b;
} */
//We can write the above function in a similar way as below:

summ = (a,b)=>{
    return a+b;
}

//SetTimeout and Set Interval, first parameter is the function you wanna run, second parameter is the interval

/* printt=()=>{

    console.log("Printt runs after every 2000 ms")
}


setTimeout(printt,2000) */

//use clearInterval/clearTimeout to cancel setInterval/setTimeout

//javaScript localStorage

//localStorage.setItem(name,"anurag") , localstorage.removeitem(name) , to wipeout entire local storage --> localstorage.clear();

//JSON , convert json to string(obj) , parse json etc
/* 
obj = {name: "anurag", lenght: 1}
jso = JSON.stringify(obj);
console.log(jso) */

//Template literals ` backticks

aa=2
bb=3
console.log(`this is my ${aa + bb}`)