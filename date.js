
let date = new Date(prompt("enter your date"));
console.log("Day is :" + date.getDay());
if (date.getDay() === 0) {
    document.write("sunday");
} else if (date.getDay() === 1) {
    document.write("monday");
} else if (date.getDay() === 2) {
    document.write("tuesday");
} else if (date.getDay() === 3) {
    document.write("wednesday");
} else if (date.getDay() === 4) {
    document.write("thursday");
} else if (date.getDay() === 5) {
    document.write("friday");
} else if (date.getDay() === 6) {
    document.write("saturday");
} else {
    alert("wrong")
}