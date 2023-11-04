const result = (number) => {

    if (Number.isInteger(number)) {
        if (number % 2 == 0) {
            console.log("EVEN");
        } else {
            console.log("ODD");
        }
    } else {
        throw new Error("The input must be a number!");
    }
}

result(2);