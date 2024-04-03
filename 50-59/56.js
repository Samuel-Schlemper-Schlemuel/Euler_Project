function powerfulDigitSum(n) {
    let max = 0

    function sumDigital(num){
        let str = num.toString()
        let result = 0

        for(let i = 0; i < str.length; i++){
            result += parseInt(str[i])
        }

        return result
    }

    for(let a = 2; a < n; a++){
        for(let b = 2; b < n; b++){
            let calc = BigInt(a)**BigInt(b)
            let sd = sumDigital(calc)

            if(max < sd){
                max = sd
            }
        }
    }

    return max
}
  
console.log(powerfulDigitSum(100))