const array = [5,8,4,1,7,9,3,6,2]

function findIndexInArray(array, number){
    for(let i = 0; i < array.length; i++){
        if(number === array[i]){
            return i
        }
        return null
    }
}

console.log(findIndexInArray(array, 111)) // сложность алгоритма 0(n)
console.log(array.findIndex(arr => arr === 5))// функция - это синтаксический сахар в ее основе лежит такой же цикл