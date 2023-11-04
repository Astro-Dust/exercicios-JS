const rectangleArea = (a,b) => {
    if (typeof a === "number" && typeof b === "number") {
        return a * b;
    } else {
        throw new Error("Must be a number!");
    }
}

console.log(rectangleArea(2, 12));