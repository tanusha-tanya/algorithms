const arr = [2,0,88,50,4,5,-11,10,6,43,8,1,9,3,7,-10,100,35,17,25,95,-67,59]
let count = 0
function selectionSort(array){
    for(let i = 0; i < array.length; i++){
        let indexMin = i
        for(let j = i + 1; j < array.length; j++){ 
            if (array[j] < array[indexMin]){
                indexMin = j
            }
            count += 1
        }
        let tmp = array[i]
        array[i] = array[indexMin]
        array[indexMin] = tmp
    }
    return array
}

console.log(selectionSort(arr))
console.log(arr.length)
console.log(count)