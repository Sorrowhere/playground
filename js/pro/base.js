/**
 * Created by liu-yao on 2016/9/22.
 */




console.log("=================变量========================");
/* 变量
 * =================================================*/


 function msg() {
    var txt =  "Hi";    //局部变量
    name = "Liu";       //全局变量
}
msg();

console.log(name);      // Liu
//console.log(txt);       // txt is not defined





console.log("=================数据类型========================");
/* 数据类型
 * =================================================*/


 var msg = "Hello world";
var f = false;
function send(){
    alert("Hi");
}
var person = new Object();

var u = undefined;


console.log( typeof msg);       // string
console.log( typeof f);         // boolean
console.log( typeof 95);        // number
console.log( typeof send);      // function
console.log( typeof person);    // object
console.log( typeof u);         // undefined




console.log("=================Undefined========================");
/* Undefined
 * =================================================*/

var undef;

console.log(undef);             // undefined
//console.log(age);               // error

//console.log( typeof undef);   // undefined
//console.log( typeof age);   // undefined






console.log("=================参数========================");
/* 参数
 * =================================================*/
function sayHi(){
    console.log("Hello " + arguments[0] + " " + arguments[1]);
    console.log(arguments.length);
}
sayHi("dear","sweet");
sayHi("LOL");

function doAdd(){
    if( arguments.length == 1 ){
        console.log( arguments[0] + 10);
    }else if( arguments.length == 2 ){
        console.log( arguments[0] + arguments[1]);
    }
}
doAdd(10);          // 20
doAdd(30, 20);      // 50




































