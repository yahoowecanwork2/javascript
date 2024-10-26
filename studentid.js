const studentInfo1 = {
    name: "ram",
    id: 1,
    physics: 45,
    math: 67,
    chem: 78,

}
const studentInfo2 = {

    name: "shyam",
    id: 2,
    physics: 46,
    math: 67,
    chem: 78,


}
const studentInfo3 = {
    name: "neha",
    id: 3,
    physics: 34,
    math: 67,
    chem: 45,
}
const studentInfo4 = {
    name: "sheela",
    id: 4,
    physics: 34,
    math: 67,
    chem: 45,
}
const studentInfo5 = {
    name: "an",
    id: 5,
    physics: 34,
    math: 67,
    chem: 45,
}
const studentInfo6 = {
    name: "am",
    id: 6,
    physics: 34,
    math: 67,
    chem: 45,
}

const studentInfo7 = {
    name: "sam",
    id: 7,
    physics: 89,
    math: 45,
    chem: 50,
}
const studentInfo8 = {
    name: "sandesh",
    id: 8,
    physics: 15,
    math: 67,
    chem: 87,
}
const studentInfo9 = {
    name: "amit",
    id: 9,
    physics: 45,
    math: 7,
    chem: 78,
}
const studentInfo10 = {
    name: "pradeep",
    id: 10,
    physics: 45,
    math: 37,
    chem: 78,
}
function id(student) {
    return student.id === studentId;

}
const student = [studentInfo1, studentInfo2, studentInfo3, studentInfo4, studentInfo5, studentInfo6, studentInfo7, studentInfo8, studentInfo9, studentInfo10];
console.log(student);
let studentId = Number.parseInt(prompt("enetr student id"));
const filterResult = student.filter(id);
console.log(filterResult);



