function cashFunction(fn) {
    const cash = {}
    return function(n){
        if(cash[n]){
            console.log("Получено из кеша", cash[n])
            return cash[n]
        }
        let result = fn(n)
        cash[n] = result 
        console.log("Посчитано впервые", result)
        return result
    }
}

function factorial(n) {
    let result = 1
    while( n !== 1){
        result *= n
        n -= 1
    }
    return result 
}

const cashFactorial = cashFunction(factorial)

cashFactorial(5)
cashFactorial(1)
cashFactorial(6)
cashFactorial(10)
cashFactorial(5)
cashFactorial(10)