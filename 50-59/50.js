function consecutivePrimeSum(limit) {
    function isPrime(n){
        if(n % 2 == 0 && n != 2 || n < 2){
            return false
        }
    
        for(let num = 3; num <= Math.sqrt(n); num++){
            if(n % num == 0){
                return false
            }
        }
    
        return true
    }

    let primeSequence = [2]

    for(let num = 3; num < limit; num += 2){
        if(isPrime(num)){
            primeSequence.push(num)
        }
    }

    let result = [0, 0]

    for(let actual = limit - 1; actual >= 2; actual -= 2){
        if(isPrime(actual)){
            let init = 2

            function found(){
                let sum = init, i = primeSequence.indexOf(init) + 1

                while(sum < actual){
                    sum += primeSequence[i]
                    i++
                }
    
                if(sum == actual){
                    if(i - primeSequence.indexOf(init) > result[1]){
                        result = [actual, i - primeSequence.indexOf(init)]
                    }
                    return
                } else if (i - primeSequence.indexOf(init) < result[1]){
                    return
                } else {
                    init = primeSequence[primeSequence.indexOf(init) + 1]
                    found()
                }
            }

            found()
        }
    }

    return result[0]
}
  
console.log(consecutivePrimeSum(1000000))