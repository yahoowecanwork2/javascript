let number1 = Number.parseInt(prompt("enter the number1"));
let number2 = Number.parseInt(prompt("enter the number2"));
let operation = prompt("enter operation name..");
function sum(number1, number2) {
    return number1 + number2;
}
function sub(number1, number2) {
    return number1 - number2;
}
function multiply(number1, number2) {
    return number1 * number2;
}
function div(number1, number2) {
    return number1 % number2;
}


if (operation === "sum" || operation === "+" || operation === "add") {
    console.log(sum(number1, number2));

} else if (operation === "sub" || operation === "-" || operation === "mins") {
    console.log(sub(number1, number2));

} else if (operation === "multiply" || operation === "*") {
    console.log(multiply(number1, number2));

} else if (operation === "div" || operation === "/") {
    console.log(div(number1, number2));

} else {
    console.log("operation not supporting!");


}




