// No caso do exemplo, a = 7 e b = 3

const orderArray = (arr) => {
    return arr.sort((a, b) => a - b);
}

const orderedArray = orderArray([7,3,2]);

console.log(orderedArray);