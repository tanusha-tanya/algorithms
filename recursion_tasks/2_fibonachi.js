function fibonachi(n){
    let a = 1
    let b = 1
    for(let i = 3; i <= n; i++){
        let c = a + b;
        a = b;
        b = c;
    }
    return b
}

console.log(fibonachi(3))
console.log(fibonachi(5))
console.log(fibonachi(77))