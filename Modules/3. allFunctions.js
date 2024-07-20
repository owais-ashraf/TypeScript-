"use strict";
//all functions are wrtitten or all task in note.txt are here which we are consoling in 4. index.ts 
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOnSiteAllowed = exports.findStudents = exports.isOnSite = exports.isEntryTestPassed = exports.getAllStudents = void 0;
const _1__data_1 = __importDefault(require("./1. data"));
const getAllStudents = () => {
    return _1__data_1.default;
};
exports.getAllStudents = getAllStudents;
const isEntryTestPassed = () => {
    const passedStudents = _1__data_1.default.filter((student) => student.entryTest.isPassed === true);
    return passedStudents;
};
exports.isEntryTestPassed = isEntryTestPassed;
const isOnSite = () => {
    const onSiteStudents = _1__data_1.default.filter((student) => student.isOnSiteAllowed === true);
    return onSiteStudents;
};
exports.isOnSite = isOnSite;
const findStudents = (rollNum) => {
    const findStudentRoll = _1__data_1.default.find((student) => student.rollNo === rollNum);
    return findStudentRoll;
};
exports.findStudents = findStudents;
const isOnSiteAllowed = (rollNum) => {
    const isAllowedinCamp = _1__data_1.default.find((student) => student.rollNo === rollNum && student.isOnSiteAllowed);
    if (isAllowedinCamp) {
        console.log("This student is allowed on site");
    }
    else {
        console.log("This student is not allowed on site");
    }
};
exports.isOnSiteAllowed = isOnSiteAllowed;
