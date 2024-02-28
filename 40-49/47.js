function distinctPrimeFactors(targetNumPrimes, targetConsecutive) {
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

    function primeDivisor(n){
        let divisors = new Set()

        for(let num = 2; num <= Math.sqrt(n); num++){
            if(n % num == 0){
                if(isPrime(num)){
                    divisors.add(num)
                }
                if(isPrime(n / num)){
                    divisors.add(n / num)
                }

                if(divisors.size > targetNumPrimes){
                    return false
                }
            }
        }

        if(divisors.size < targetNumPrimes){
            return false
        }

        return divisors
    }

    function repeat(arr){
        let set = new Set(arr[0])

        for(let i = 1; i < arr.length; i++){
            let actualCount = set.size

            set.add(arr[i])

            if(set.size == actualCount){
                return true
            }
        }

        return false
    }

    let moment = 4

    while(true){
        if(!isPrime(moment)){
            let divisors = []

            for(let count = moment; count <= targetConsecutive + moment; count++){
                if(isPrime(count)){
                    break
                } else {
                    let result = primeDivisor(count)

                    if(result === false){
                        break
                    } else {
                        divisors.push(result)
                    }
                }

                if(repeat(divisors)){
                    break
                }
            }

            if(divisors.length == targetConsecutive){
                return moment
            }
        }

        moment++
    }
}
  
console.log(distinctPrimeFactors(4, 4))