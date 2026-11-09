"use strict";
let myString = "Hello";
let myNumber = 23;
const addTotal = (a, b) => {
    return a + b;
};
console.log(addTotal(2, 3));
const arrayOfNumber = [2, 3, 5, 6, 8];
const arrayOfString = ["hello", "hi"];
const DhakaLatLong = [234, 9797];
console.log(DhakaLatLong);
//function
const fullName = (fistName, lastName) => {
    if (!lastName) {
        return console.log(fistName);
    }
    console.log(fistName + " " + lastName);
};
fullName("Abdullah");
const greeting = (greetingSub = "Welcome", name) => {
    console.log(greetingSub, name);
};
greeting(undefined, "Abdullah Gazi");
//* rest parameters
const summation = (...numbers) => {
    return numbers.reduce((total, sum) => total + sum, 0);
};
console.log(summation(1, 3, 4, 5, 6, 7, 8, 9));
//* reste parameteres two
const user = (...attributes) => {
    const [age, name, isactive] = attributes;
    console.log("Name is : " + name + " and age is : " + age + ". He is not active");
};
user(26, "abdullah", true);
//object type, type alias and interface
//*object type
const user2 = {
    name: "Abdullah Gazi",
    age: 26,
    isActive: true,
    action: () => console.log("Hello"),
    badges: ["Java", "Python", "Typescript"],
};
const user3 = {
    name: "Abdullah gazi",
    age: 26,
    badges: [1, 3, 5],
    action: () => console.log("typescript", "python"),
};
