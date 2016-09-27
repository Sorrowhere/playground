/**
 * Created by liu-yao on 2016/9/22.
 */




console.log("=================传递参数========================");
/* 传递参数
 * =================================================*/
function addTen(num){
    num += 10;
    return num;
}
var count = 20;
var result = addTen(count);
console.log(count);             // 20
console.log(result);            // 30



function setName(obj){
    obj.name = "TR.3";
}
var person = new Object();
setName(person);
console.log(person.name);       // "TR.3"



function setName2(obj){
    obj.name = "TR.3";
    obj = new Object();
    obj.name = "sorrowhere";
}
var person = new Object();
setName2(person);
console.log(person.name);       // "TR.3"




console.log("=================执行环境及作用域========================");
/* 执行环境及作用域
 * =================================================*/





































