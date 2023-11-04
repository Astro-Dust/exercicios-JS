const isPalindrome = (str) => {

    if (typeof str === "object") {
        let word = [];
        let reversedString;
    
        for (let i = str.length - 1; i >= 0; i--) {
            word.push(str[i]);
        }
    
        reversedString = word.join("");
    
        if (str === reversedString) {
            console.log("It IS a palindrome!");
        } else {
            console.log("It is NOT a palindrome...");
        }
    } else {
        throw new Error("Must be a word!");
    }
}

isPalindrome("ana");