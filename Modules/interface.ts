export interface Students {
    fName: string,
    lName: string,
    rollNo: number,
    id: number,
    email: string,
    isOnSiteAllowed: boolean,
    entryTest: Entrytest
}

export interface Entrytest {
        isPassed: boolean,
        obtainedMaks: number,
        totalMarks: number,
}
