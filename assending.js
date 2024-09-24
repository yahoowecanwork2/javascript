let x = Number.parseInt(prompt("enter the number"));
let y = Number.parseInt(prompt("enter the number"));
let z = Number.parseInt(prompt("Enter the number"));
if (x < y && y < z) {
    console.log(y < z);
    if (y < z) {
        console.log(x, y, z);

    } else {
        console.log(x, y, z);

    }
} else if (y < z && y < x) {
    console.log(z < x);
    if (z < x) {
        console.log(y, z, x);
    } else {
        console.log(y, x, z);

    }


} else {
    if (z < x && z < y) {
        console.log(x < y);
        if (x < y) {
            console.log(z, x, y);

        } else {
            console.log(z, y, x);

        }

    }
}
