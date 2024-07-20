import { Students , Entrytest} from './interface';

const students: Students[] = [{
    id: 1,
    fName: "Ozil",
    lName: "Ahmed",
    rollNo: 2001,
    email: "ozil.asad@ku.edu.pk",
    isOnSiteAllowed: true,
    entryTest: {
        isPassed: true,
        obtainedMaks: 90,
        totalMarks: 100,
    }
},
{
    id: 2,
    fName: "saad",
    lName: "fahad",
    rollNo: 2002,
    email: "saad.fahad@ku.edu.pk",
    isOnSiteAllowed: true,
    entryTest: {
        isPassed: true,
        obtainedMaks: 88,
        totalMarks: 100,
    }
},
{
    id: 3,
    fName: "amjad",
    lName: "khan",
    rollNo: 2003,
    email: "amjad.khan@ku.edu.pk",
    isOnSiteAllowed: false,
    entryTest: {
        isPassed: false,
        obtainedMaks: 44,
        totalMarks: 100,
    }
},
{
    id: 4,
    fName: "asaad",
    lName: "amjad",
    rollNo: 2004,
    email: "assad.amjad@ku.edu.pk",
    isOnSiteAllowed: true,
    entryTest: {
        isPassed: true,
        obtainedMaks: 99,
        totalMarks: 100,
    }
},
{
    id: 5,
    fName: "Maaz",
    lName: "jabir",
    rollNo: 2005,
    email: "maaz.jabir@ku.edu.pk",
    isOnSiteAllowed: false,
    entryTest: {
        isPassed: false,
        obtainedMaks: 49,
        totalMarks: 100,
    }
},
{
    id: 6,
    fName: "Naeem",
    lName: "Nasir",
    rollNo: 2006,
    email: "naeem.nasir@ku.edu.pk",
    isOnSiteAllowed: false,
    entryTest: {
        isPassed: true,
        obtainedMaks: 55,
        totalMarks: 100,
    }
},
{
    id: 7,
    fName: "Muneeb",
    lName: "Khan",
    rollNo: 2007,
    email: "muneeb.khan@ku.edu.pk",
    isOnSiteAllowed: true,
    entryTest: {
        isPassed: true,
        obtainedMaks: 80,
        totalMarks: 100,
    }
},
{
    id: 8,
    fName: "Shahzaib",
    lName: "Javed",
    rollNo: 2008,
    email: "shahzaib.javed@ku.edu.pk",
    isOnSiteAllowed: true,
    entryTest: {
        isPassed: false,
        obtainedMaks: 30,
        totalMarks: 100,
    }
},
{
    id: 9,
    fName: "Gulzar",
    lName: "Bano",
    rollNo: 2009,
    email: "Gulzar.bano@ku.edu.pk",
    isOnSiteAllowed: false,
    entryTest: {
        isPassed: false,
        obtainedMaks: 49,
        totalMarks: 100,
    }
},
{
    id: 10,
    fName: "Naik",
    lName: "sheikh",
    rollNo: 2010,
    email: "naik.sheikh@ku.edu.pk",
    isOnSiteAllowed: true,
    entryTest: {
        isPassed: true,
        obtainedMaks: 70,
        totalMarks: 100,
    }
},
]

export default students;