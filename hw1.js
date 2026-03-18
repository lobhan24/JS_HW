//q1
const student = {
    name: "Arjun",
    grade: "A",
    subject: "Computer Science"
};

console.log(student.grade);

//q2
const calculateGrade = (score) => {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    return "D";
};

console.log(calculateGrade(85));

const increaseMarks = function(marks) {
    return marks.map(mark => mark + 10);
};

//q3
const myMarks = [60, 75, 80];
console.log(increaseMarks(myMarks));

//q4
const studentDetails = {
    name: "Sara",
    age: 20,
    grade: "A",
    display: function() {
        console.log(`Student Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
};

studentDetails.display();

//q5
const marks = [85, 92, 60, 45, 78];
const results = marks.map(m => m >= 50 ? "Pass" : "Fail")
const highScores = marks.filter(m => m > 80);
const total = marks.reduce((sum, m) => sum + m, 0);
console.log(results, highScores, total);

//q6
const classList = [
    { name: "John", marks: 75 },
    { name: "Jane", marks: 92 },
    { name: "Mike", marks: 85 }
];

function getTopStudents(students) {
    return students.filter(s => s.marks > 80);
}

console.log(getTopStudents(classList));

//q7
const studentsInClass = [
    { name: "A", marks: 80 },
    { name: "B", marks: 70 },
    { name: "C", marks: 90 }
];

let classTotal = 0;
studentsInClass.forEach(s => {
    classTotal += s.marks;
});

console.log("Total Class Marks:", classTotal);


