function pandigitalMultiples(k) {
    let result = 0, calc = ''

    function isPandigital(str){
        let apear = []

        for(let i in str){
            if(apear.indexOf(str[i]) != -1 || parseInt(str[i]) > k || parseInt(str[i]) < 1){
                return false
            }

            apear.push(str[i])
        }

        return true
    }

    for(let principal = 1; (principal * 1 + '').length <= k / 2; principal++){
        calc = ''

        for(let limit = 2; calc.length < k; limit++){
            calc = ''

            for(let mult = 1; mult <= limit; mult++){
                calc += principal * mult
            }
        }

        if(calc.length == k){
            if(parseInt(calc) > result){
                if(isPandigital(calc)){
                    result = parseInt(calc)
                }
            }
        }
    }

    return result
}
  
console.log(pandigitalMultiples(9))