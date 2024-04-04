const array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
let count = 0
function searchNumber(array, number){
    let start = array[0]
    let end = array.length
    let found = false
    let middle;
    let position = -1
    while(found === false && start <= end){
        count += 1
        middle = Math.floor((start + end) / 2)
        if(array[middle] === number){
            found = true
            position = middle
            return position
        }
        if(number < array[middle]){
            end = middle - 1
        }else{
            start = middle + 1
        }        
    }
    return position
}

// console.log(searchNumber(array, 11))//сложность O(log2n)
// console.log(count)

function binarySearchRecursive(array, item, start, end){
    count +=1 
    let middle = Math.floor((start + end) / 2 )
    if(array[middle] === item){
        return middle
    }
    if(item < array[middle]){
        return binarySearchRecursive(array, item, 0, middle-1)
    }
    else{
        return binarySearchRecursive(array, item, middle+1, end)
    }
}

console.log(binarySearchRecursive(array, 11, 0, array.length))
console.log(count)