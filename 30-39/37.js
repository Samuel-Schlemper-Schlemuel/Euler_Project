function truncatablePrimes(n) {
    let actual = 23, sum = 0

    function isPrime(num){
        if(num < 2){
            return false
        }

        if(num % 2 == 0 && num != 2){
          return false
        }
    
        for(let div = 3; div <= Math.sqrt(num); div += 2){
          if(num % div === 0){
            return false
          }
        }
    
        return true
    }

    function isTruncatable(num){
        let str = num.toString()

        for(let i in str){
            i = parseInt(i)
            let test = parseInt(str.slice(0, i + 1))

            if(!isPrime(test)){
                return false
            }

            test = parseInt(str.slice(str.length - i - 1))

            if(!isPrime(test)){
                return false
            }
        }

        return true
    }

    for(let quantity = 0; quantity < n; quantity++){
        while(true){
            if(isTruncatable(actual)){
                sum += actual
                actual++
                break
            }

            actual++
        }
    }

    return sum
}
  
console.log(truncatablePrimes(11)) 