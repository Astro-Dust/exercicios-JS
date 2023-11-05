// 17. Escreva um programa que conte o número de palavras em uma string.

const countWords = (str) => {

    const treatedStr = str.split(" ");
    let wordQuantity = 0;


    for (let i = 0; i < treatedStr.length; i++) {
        wordQuantity++;
    }

    console.log(treatedStr);
    console.log("Word quantity: ",wordQuantity);

}

countWords("E o sol pediu a lua em casamento, e a lua disse não sei, não sei, não sei, me dá um tempo!");