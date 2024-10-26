const arr = [1, -3, 5, 2]
function isPositive(element) {
    return element > 0;

}
const filterResult = arr.filter(isPositive);
console.log(filterResult);

