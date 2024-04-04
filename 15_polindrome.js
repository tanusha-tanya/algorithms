const string1 = "Казак"
const string2 = "А роза упала на лапу Азора"
const string3 = "Do gees see God?"
const string4 = "Madam, I`m Adam"

function isPolindrome(str){
    let start = 0;
    let end = str.length - 1

    isEqual = function(str1, str2){
        return str1.toLowerCase() === str2.toLowerCase()
    }
    isLetter = function(char){
        return char.toLowerCase() !== char.toUpperCase()
    }

    while(start < end){
        const startChar = str[start]
        const endChar = str[end]
        
        if(!isLetter(startChar)){
            start += 1
            continue
        }
        if(!isLetter(endChar)){
            end -= 1
            continue
        }
        if(isEqual(startChar, endChar) && start === end){    
            start += 1
            end -= 1 
            continue
        } 
        else{
            return false
        }   
           
    }
    return true
}

console.log(isPolindrome(string1))
console.log(isPolindrome(string2))
console.log(isPolindrome(string3))
console.log(isPolindrome(string4))