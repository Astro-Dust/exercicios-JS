const countVowels = (str) => {

    const vowels = ['a','e','i','o','u'];
    let vowelsFound = [];
    let vowelsQuantity = 0;

    if (typeof str === 'string') {
        
        for (let i = 0; i < str.length; i++) {
            if (vowels.includes(str[i])) {
                if (!vowelsFound.includes(str[i])) {
                    vowelsFound.push(str[i]);
                    vowelsQuantity += 1;
                }
            }
        }

        console.log("Vowels quantity: ", vowelsQuantity);
    } else {
        throw new Error("Must be a string!");
    }
}

countVowels("jaiden");