const isPrime = (num) => { 

    // 1 ou menores que ele não são considerados primos
    if (num <= 1) {
        console.log("It is NOT a prime number...");
        return;
    }
    
    // 4 % 2 = 0 -> não é primo
    // 5 % 2 = 1 -> é primo
    // basicamente qualquer numero que dê resto diferente de 0 vai ser primo
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            console.log("It is NOT a prime number...");
            return;
        } 
    }
        
    console.log("It IS a prime number!");
} 

isPrime(7); 