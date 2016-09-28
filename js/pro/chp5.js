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




console.log("=================重新排序方法========================");
/* 重新排序方法
 * =================================================*/
var val = [0,2,6,3,9,10];
val.sort();
console.log(val);



function compare(num1,num2){
    if(num1 < num2){
        return -1;
    }else if( num1 > num2){
        return 1;
    }else{
        return0;
    }
}

var values = [0,1,5,10,15];
values.sort(compare);
console.log(values);



console.log("=================操作方法========================");
/* 操作方法
 * =================================================*/
var animals = ["bear","lion","monkey","elephant","zebra"];

// concat
var animals2 = animals.concat("mouse",["cat","dog"]);
console.log(animals);
console.log(animals2);

// slice
var animals3 = animals.slice(1);
var animals4 = animals.slice(1,4);
console.log(animals);
console.log(animals3);
console.log(animals4);



// splice
var removed = animals.splice(0,1);
console.log(animals);
console.log(removed);

removed = animals.splice(1,0,"dog","cat");
console.log(animals);
console.log(removed);

removed = animals.splice(2,1,"mouse","giraffe");
console.log(animals);
console.log(removed);



console.log("=================位置方法========================");
/* 位置方法
 * =================================================*/
var numbers = [1,2,3,4,5,6,4,3,2,1];
console.log(numbers.indexOf(4));
console.log(numbers.lastIndexOf(4));

console.log(numbers.indexOf(4,4));
console.log(numbers.lastIndexOf(4,4));



console.log("=================迭代方法========================");
/* 迭代方法
 * =================================================*/













