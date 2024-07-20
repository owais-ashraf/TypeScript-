import students from "./data";
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
    const isAllowedinCamp = students.find((student)=> student.rollNo === rollNum && student.isOnSiteAllowed === true)
    if (isAllowedinCamp){
        return true;
    }else {
        return false; 

    }
}