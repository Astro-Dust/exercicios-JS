const findBiggestNumber = (array) => {

    if (typeof array === "object" && array.length > 0) {

        let greaterNumber = array[0];

        for (let n = 1; n < array.length; n++) {
            if (array[n] > greaterNumber) {
                greaterNumber = array[n];
            }
        }
        
        console.log("The greater number is: ", greaterNumber);
    } else {
        throw new Error("Must be a array/object!");
    }

}

findBiggestNumber([6,7,77]);