function goldbachsOtherConjecture() {
    var actual = 9

    function isPrime(n){
        for(let num = 3; num <= Math.sqrt(n); num++){
            if(n % num == 0){
                return false
            }
        }

        return true
    }

    function GoldbachConjecture(n){
        if((Math.sqrt((n - 2) / 2)) % 1 == 0){
            return true
        }

        for(let num = 3; num < n; num += 2){
            if(isPrime(num)){
                if((Math.sqrt((n - num) / 2)) % 1 == 0){
                    return true
                }
            }
        }

        return false
    }

    while(true){
        if(!isPrime(actual)){
            if(!GoldbachConjecture(actual)){
                return actual
            }
        }

        actual += 2
    }
}
  
console.log(goldbachsOtherConjecture())