// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

const fibonacci = (n) => {

    const sequence = [0, 1];

    for (let i = 2; i < n; i++) {
        const nextNumber = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextNumber);
    }

    console.log(sequence);

}

fibonacci(10);