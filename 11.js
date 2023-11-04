// Usando recursividade

const calculateFactorial = (num) => {

    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * calculateFactorial(num - 1);
    }

}

const factorial = calculateFactorial(7);
console.log(factorial);