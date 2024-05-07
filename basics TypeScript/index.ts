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

let a: String = "abc";
let b: Number = 1;
let c: Boolean = true;
let d: undefined;
let e: null = null;
let f: {
  name: String;
  age: Number;
} = {
  name: "Jhon",
  age: 20,
};

// typescript types example

// assign more types in one variable
// ex 1
let age: String | Number = 18;
age = "eighteen";
// ex 2
let isLoggedIn: Boolean | Number | undefined

