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

// tuple

let user: [number, string] = [2, "sahil"];

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
let g: number[] = [1, 3, 4, 5, 6, 8, 7, 6];

// typescript types example

// any Type
// ex 1
let anyType: any = "number";
anyType = 9;
// ex 2
let anyArray: any[] = ["string", 0, false, 3];

// assign more types in one variable
// ex 1
let age: String | Number = 18;
age = "eighteen";
// ex 2
let isLoggedIn: Boolean | Number | undefined;

// functions
// functions type is void if it returns nothing
let hi = () => {
  console.log("hi");
};

let welcome = (): String => {
  console.log("sum done");
  return "welcome";
};

let sum = (sum1: number, sum2: number, sum3?: number): number => {
  let num3 = sum1 + sum2 + sum3;
  return num3;
};
let result = sum(1, 2);
console.log(result);

// Type Aliases

type userType = {
  name: string;
  phone: number;
  isLoggedIn: boolean;
};

type MyFunction = (num1: number, num2: number) => void;

let sumOfTwo: MyFunction = (n1, n2) => {
  let n3: number = n1 + n2;
};

// interface

interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  EmployeeID: number;
}

interface Client extends Person {
  ClientID: number;
}
