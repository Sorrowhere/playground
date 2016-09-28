/**
 * Created by liu-yao on 2016/9/27.
 */

console.log("=================object类型========================");
/* object类型
 * =================================================*/
var o = new Object();
o.name = "tr.3";
o.age = 23;

var p = {
    name: "tr.3",
    age: 23
}



console.log("=================Array类型========================");
/* Array类型
 * =================================================*/
var colors = new Array("red","blue","yellow");
var colors2 = ["red","blue","yellow","black"];
colors2[4] = "pink";
console.log(colors.length);
console.log(colors2.length);
console.log(colors2[4]);



console.log("=================转换方法========================");
/* 转换方法
 * =================================================*/
var person1 = {
    toLocaleString : function(){
        return "ABC";
    },
    toString : function(){
        return "XYZ";
    }
}

var person2 = {
    toLocaleString : function(){
        return "DEF";
    },
    toString : function(){
        return "HIJ";
    }
}

var people = [person1, person2];
console.log(people);
console.log(people.toString());
console.log(people.toLocaleString());



console.log("=================栈方法========================");
/* 栈方法
 * =================================================*/
var color = [];
var count = color.push("red","blue");
console.log(count);

count =  color.push("yellow");
console.log(count);

var item = color.pop();
console.log(item);
console.log(color.length);



console.log("=================队列方法========================");
/* 队列方法
 * =================================================*/
var group = new Array();
var count1 = group.push("1","2");
console.log(count1);

count1 = group.push("3");
console.log(count1);

var item1 = group.shift();
console.log(item1);
console.log(group.length);





























