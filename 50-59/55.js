function countLychrelNumbers(limit) {
    let result = 0

    function invert(num){
        const str = num + ''
        let res = ''
    
        for(let i = str.length - 1; i >= 0; i--){
            res += str[i]
        }
    
        return parseInt(res)
    }
    
    function isPalindromic(num){
        if(num == invert(num)){
            return true
        }
    
        return false
    }

    for(let num = 1; num <= limit; num++){
        let sum = num

        for(let i = 0; i < 50; i++){
            sum += invert(sum)

            if(isPalindromic(sum)){
                result++
                break
            }
        }
    }

    return limit - result
}
  
console.log(countLychrelNumbers(10000))