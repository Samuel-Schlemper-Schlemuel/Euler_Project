function primeDigitReplacements(n) {
    let primeSequence = [2]

    for(let num = 3; num < 1000000; num += 2){
        let test = true

        for(let i = 0; primeSequence[i] <= Math.sqrt(num); i++){
            if(num % primeSequence[i] == 0){
                test = false
                break
            }
        }

        if(test){
            primeSequence.push(num)
        }
    }

    function compare(i){
        const str = primeSequence[i] + ''

        for(let c = 0; c < str.length - 1; c++){
            let sum = 0
            const strReg = str.split('').map((e, iMap) => {return iMap == c ? '\\d' : str[iMap]}).join('')
            const reg = new RegExp(strReg, 'i')

            if(c == 0){
                for(let d = 1; d < 10; d++){
                    const strTest = strReg.replace('\\d', d + '')
    
                    if(primeSequence.indexOf(parseInt(strTest)) > -1){
                        if(reg.test(strTest)){
                            sum++
                        }
                    }
                }
            } else {
                for(let d = 0; d < 10; d++){
                    const strTest = strReg.replace('\\d', d + '')
    
                    if(primeSequence.indexOf(parseInt(strTest)) > -1){
                        if(reg.test(strTest)){
                            sum++
                        }
                    }
                }
            }
            
            if(sum >= n){
                return true
            }
        }

        let dicSum = {}

        for(let c = 0; c < str.length; c++){
            if(dicSum[str[c]] == undefined){
                dicSum[str[c]] = 1
            } else {
                dicSum[str[c]]++
            }
        }

        for(let key in dicSum){
            let sum = 0

            if(dicSum[key] > 1){
                const strReg = str.split('').map((e, iMap) => {return str[iMap] == key ? '\\d' : str[iMap]}).join('')
                const reg = new RegExp(strReg, 'i')

                if(strReg[0] == '\\'){       
                    for(let d = 1; d < 10; d++){
                        const strTest = strReg.replace(/\\d/g, d + '')

                        if(primeSequence.indexOf(parseInt(strTest)) > -1){
                            if(reg.test(strTest)){
                                sum++
                            }
                        }
                    }
                } else {
                    for(let d = 0; d < 10; d++){
                        const strTest = strReg.replace(/\\d/g, d + '')
        
                        if(primeSequence.indexOf(parseInt(strTest)) > -1){
                            if(reg.test(strTest)){
                                sum++
                            }
                        }
                    }
                }
            }

            if(sum >= n){
                return true
            }
        }
        
        return false
    }

    for(let i = 4; i < primeSequence.length; i++){
        if(compare(i)){
            return primeSequence[i]
        }
    }
}

console.log(primeDigitReplacements(8))