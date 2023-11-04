const reverseString = (str) => {
    if (typeof str === "string") {
        // M O O N L I T
        // A palavra tem 7 letras, mas como estou trabalhando com posições e strings são
        // arrays de caracteres, será um a menos, ou seja 6, porque começa com 0
        for (let i = str.length - 1; i >= 0; i--) {
            console.log(str[i]);
        }

    } else {
        throw new Error("Must be a string!");
    }
}

reverseString("oh you dont mean nothing at all to me");