const array = [2,0,88,50,4,5,-11,10,6,43,8,1,9,3,7,-10,100,35,17,25,95,-67,59]
let count = 0

function bubbleSort(arr){
    for(let i=0; i < arr.length; i++){
        for(let j = i+ 1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
            count += 1
        }
    }
    return array
}

console.log(bubbleSort(array))//O(n2)
console.log(count)