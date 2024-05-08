// javascript types
// Number
// String
// Boolean
// null
// undefined
// Object
// typescript types
// any - if you don't define type it will consider any type
// unknown
// never
// enum
// tuple
// javascript types example
var a = "abc";
var b = 1;
var c = true;
var d;
var e = null;
var f = {
    name: "Jhon",
    age: 20,
};
var g = [1, 3, 4, 5, 6, 8, 7, 6];
// typescript types example
// any Type
// ex 1
var anyType = "number";
anyType = 9;
// ex 2
var anyArray = ["string", 0, false, 3];
// assign more types in one variable
// ex 1
var age = 18;
age = "eighteen";
// ex 2
var isLoggedIn;
// functions
// functions type is void if it returns nothing
var hi = function () {
    console.log("hi");
};
var welcome = function () {
    console.log("sum done");
    return "welcome";
};
var sum = function (sum1, sum2) {
    var num3 = sum1 + sum2;
    return num3;
};
var result = sum(1, 2);
console.log(result);
