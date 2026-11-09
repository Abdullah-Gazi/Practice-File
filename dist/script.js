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
