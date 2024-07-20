//all functions are wrtitten or all task in note.txt are here which we are consoling in 4. index.ts 

import students from "./1. data";
export const getAllStudents = () => {

    return students;
} 

export const isEntryTestPassed = () => {
const passedStudents = students.filter((student) => student.entryTest.isPassed === true);
    return passedStudents;
}


export const isOnSite = () => {
    const onSiteStudents = students.filter((student) => student.isOnSiteAllowed === true);
    return onSiteStudents;
}

export const findStudents = (rollNum : number) => {
    const findStudentRoll = students.find((student)=> student.rollNo === rollNum)
    return findStudentRoll;
}

export const isOnSiteAllowed = (rollNum: number) => {
    const isAllowedinCamp = students.find((student)=> student.rollNo === rollNum && student.isOnSiteAllowed)
    if (isAllowedinCamp){
        console.log("This student is allowed on site");
    }else {
        console.log("This student is not allowed on site");
    }
}