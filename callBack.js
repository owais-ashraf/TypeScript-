"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ParentFunction(callbackFunc) {
    console.log("I am Parent Function");
    callbackFunc();
}
ParentFunction(ChildFunction);
function ChildFunction() {
    console.log("I am Child Function");
}
