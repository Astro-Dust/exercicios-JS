const removeDuplicated = (arr) => {

    const noDuplicatedArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (!noDuplicatedArray.includes(arr[i])) {
            noDuplicatedArray.push(arr[i]);
        }
    }
    
    console.log(noDuplicatedArray);
}

removeDuplicated([1,4,21,4,42,44,12,2,2,2]);