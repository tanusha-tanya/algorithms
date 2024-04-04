function sumToCycle(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i
    }
    return sum
}// O(n)

function sumToRecursive(n){
   return n === 1 ? n : n += sumToRecursive(n - 1) 
}// O(n)

function sumToProgressive(n){
    return n * (1 + n) / 2
} //O (1) 

console.log(sumToCycle(100000))
console.log(sumToRecursive(100))
console.log(sumToProgressive(1000000))
