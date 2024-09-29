const studentInfo1 = {
    name: "ram",
    physics: 45,
    math: 67,
    chem: 78,

}
const studentInfo2 = {

    name: "shyam",
    physics: 46,
    math: 67,
    chem: 78,


}
const studentInfo3 = {
    name: "neha",
    physics: 34,
    math: 67,
    chem: 45,
}
const studentInfo4 = {
    name: "sheela",
    physics: 34,
    math: 67,
    chem: 45,
}
const studentInfo5 = {
    name: "an",
    physics: 34,
    math: 67,
    chem: 45,
}
const studentInfo6 = {
    name: "am",
    physics: 34,
    math: 67,
    chem: 45,
}

const studentInfo7 = {
    name: "sam",
    physics: 89,
    math: 45,
    chem: 50,
}
const studentInfo8 = {
    name: "sandesh",
    physics: 15,
    math: 67,
    chem: 87,
}
const studentInfo9 = {
    name: "amit",
    physics: 45,
    math: 7,
    chem: 78,
}
const studentInfo10 = {
    name: "pradeep",
    physics: 45,
    math: 37,
    chem: 78,
}
const student = [studentInfo1, studentInfo2, studentInfo3, studentInfo4, studentInfo5, studentInfo6, studentInfo7, studentInfo8, studentInfo9, studentInfo10];
console.log(student);
function mapperFunction(student) {
    student["total number"] = student.physics + student.math + student.chem;
    return student;



}
const result = student.map(mapperFunction);
console.log(result)
console.log(student.sort());
const topStudent = student.slice(1, 6);
console.log(topStudent);
