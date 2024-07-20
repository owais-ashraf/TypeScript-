"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOnSiteAllowed = exports.findStudents = exports.isOnSite = exports.isEntryTestPassed = exports.getAllStudents = void 0;
const data_1 = __importDefault(require("./data"));
const getAllStudents = () => {
    return data_1.default;
};
exports.getAllStudents = getAllStudents;
const isEntryTestPassed = () => {
    const passedStudents = data_1.default.filter((student) => student.entryTest.isPassed === true);
    return passedStudents;
};
exports.isEntryTestPassed = isEntryTestPassed;
const isOnSite = () => {
    const onSiteStudents = data_1.default.filter((student) => student.isOnSiteAllowed === true);
    return onSiteStudents;
};
exports.isOnSite = isOnSite;
const findStudents = (rollNum) => {
    const findStudentRoll = data_1.default.find((student) => student.rollNo === rollNum);
    return findStudentRoll;
};
exports.findStudents = findStudents;
const isOnSiteAllowed = (rollNum) => {
    const isAllowedinCamp = data_1.default.find((student) => student.rollNo === rollNum && student.isOnSiteAllowed === true);
    if (isAllowedinCamp) {
        return true;
    }
    else {
        return false;
    }
};
exports.isOnSiteAllowed = isOnSiteAllowed;
