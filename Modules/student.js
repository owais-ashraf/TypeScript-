"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getAllstudent = () => {
    return student;
};
const getOniteStudents = () => {
    const result = student.filter((student) => {
        return student.isOnSiteAllowed;
    });
    return result;
};
