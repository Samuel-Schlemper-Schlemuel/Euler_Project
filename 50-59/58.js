function spiralPrimes(percent) {
    percent /= 100

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

    let actual = 1, countPrimes = 0, countTotal = 1, result

    for(let jump = 2; true; jump += 2){
        for(let i = 0; i < 4; i++){
            actual += jump
            countTotal++

            if(isPrime(actual)){
                countPrimes++
            }
        }

        if(countPrimes / countTotal < percent){
            result = jump + 1
            break
        }
    }

    return result
}
  
console.log(spiralPrimes(10))