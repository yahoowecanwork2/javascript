function lotteryGenrator() {

    lotteryNumber = Math.floor(Math.random() * 100);
    return lotteryNumber;


}
function playerInfo() {
    let name = prompt("enter your name");
    let number = Number.parseInt(prompt("enter your number"));
    console.log("please enter you name=" + name, "enetr your number=" + number);

}
console.log(playerInfo());

function playGame(lotteryGenrator, playerInfo) {
    alert("you have only 5 chances!");
    alert("lotteryNumber between 1 to 100");
    for (count = 5; count >= 0; count--) {
        if (count === lotteryNumber) {
            console.log("congratulations! u win ");

        } else {
            console.log("bad luck try again ");

        }
    }
}
console.log(playGame);







