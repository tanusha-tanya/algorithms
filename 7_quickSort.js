const array = [2,0,88,50,4,5,-11,10,6,43,8,1,9,3,7,-10,100,35,17,25,95,-67,59]
let count = 0

function quickSort(arr){    
    if(arr.length <= 1){
        return arr
    }
    let pivotIndex = Math.floor(arr.length / 2)
    let pivot = arr[pivotIndex]
    let less = []
    let greater = []
    for(let i = 0; i < arr.length; i++){
        count += 1
        if(i === pivotIndex){
            continue
        }
        if(arr[i] < pivot){
            less.push(arr[i])
        }
        else{
            greater.push(arr[i])
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.log(quickSort(array))
console.log(count)