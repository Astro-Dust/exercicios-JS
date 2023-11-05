
const findGreaterElement = (matrix) => {

    const allElements = [];

    // organizando os elementos em um único array, tendo cada um sua devida posição
    for (let i = 0; i < matrix.length; i++) {

        for (let j = 0; j < matrix[i].length; j++) {
            allElements.push(matrix[i][j]);
        }

    }

    let greaterElement = allElements[0];

    // verificando qual o maior número do array organizado
    for (let k = 1; k < allElements.length; k++) {
        if (allElements[k] > greaterElement) {
            greaterElement = allElements[k];
        }
    }

    console.log("The greatest number in the matrix given is: ", greaterElement);
    // console.log(allElements);
}

const matrix2D = [
    [102,22,325],
    [433,551,632],
    [711,89,90]
];

findGreaterElement(matrix2D);