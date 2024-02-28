function permutedMultiples(n) {
    let result

    function see(num){
        const str = num + ''

        if(str.length != (num * n + '').length){
            return true
        }

        let strReg = '^'
        let dicSum = {}

        for(let c = 0; c < str.length; c++){
            if(dicSum[str[c]] == undefined){
                dicSum[str[c]] = 1
            } else {
                dicSum[str[c]]++
            }
        }

        for(let key in dicSum){
            let inside = ''

            for(let count = 0; count < dicSum[key]; count++){
                inside += `.*${key}`
            }

            strReg += `(?=${inside})`
        }

        strReg += `[${str}]{${str.length}}$`
        const reg = new RegExp(strReg, 'i')
        let pass = true

        for(let mult = 2; mult <= n; mult++){
            if(!reg.test(num * mult + '')){
                pass = false
                break
            }
        }

        if(!pass){
           return true 
        } else {
            result = num
            return false
        }
    }

    for(let num = 2; see(num); num++){}

    return result
}
  
console.log(permutedMultiples(6))