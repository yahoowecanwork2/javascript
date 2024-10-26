const arr = [17, 35, 12, 89, 16, 100, 500];
function betweenNumber(element) {
    return element > 50 && element < 100;

}
const filterResult = arr.filter(betweenNumber);
console.log(filterResult); 