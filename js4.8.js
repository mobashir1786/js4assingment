const factorial= (n)=>{
    let factorialOfN=1;
    while (n>=1) {
        factorialOfN=factorialOfN*n;
        n=n-1;
    }
    return factorialOfN;
}
console.log(factorial(4));