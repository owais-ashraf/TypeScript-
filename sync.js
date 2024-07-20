"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Start ...");
let MyName = "Ozil";
console.log(MyName);
let age = 25;
if (age > 18) {
    console.log("You are an Adult");
}
else {
    console.log("You are Not  an Adult");
}
let BestFriend = ["Bilal", "Asad", "Ali", "Arham"];
for (let i = 0; i < BestFriend.length; i++) {
    console.log(`${BestFriend[i]} is my Best Friend`);
}
let NewCar = {
    brand: "Toyota",
    color: "Red",
    year: 2024
};
console.log(NewCar["brand"]);
console.log(NewCar.year);
console.log("The End ...");
