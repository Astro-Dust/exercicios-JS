function sumNumbers(a,b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        return a + b;
    } else {
        throw new Error("Both numbers must be integers!");
    }
}

const result = sumNumbers("", 3);
console.log(result);