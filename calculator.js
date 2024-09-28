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
if (operation === "sum") {
    console.log(sum(number1, number2));

} else if (operation === "sub") {
    console.log(sub(number1, number2));

}
const result = operation(number1, number2);
console.log(result);


