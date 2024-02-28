function doubleBasePalindromes(n) {
    let sum = 0

    function isPalindromic(num, bi){
        let str = num.toString()
        let str_inverse = ''

        for(let i in str){
            str_inverse += str[str.length - i - 1]
        }

        if(str != str_inverse){
            return false
        }

        let bi_inverse = ''

        for(let i in bi){
            bi_inverse += bi[bi.length - i - 1]
        }

        if(bi == bi_inverse){
            return true
        } else {
            return false
        }
    }

    for(let num = 1; num < n; num++){
        if(isPalindromic(num, (num).toString(2))){
            sum += num
        }
    }

    return sum
}

console.log(doubleBasePalindromes(1000000))