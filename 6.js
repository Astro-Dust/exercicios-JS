const averageNumber = (array) => {

    if (typeof array === "object") {
        let sum = 0;

        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }

        console.log(sum);
    } else {
        throw new Error("It is expected an array/object");
    }
}

averageNumber([7,31]);