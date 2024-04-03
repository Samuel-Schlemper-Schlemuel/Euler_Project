function pandigitalPrime(n) {
    let result = 0

    function isPandigital(str){
        let apear = []
    
        for(let i in str){
            if(apear.indexOf(str[i]) != -1 || parseInt(str[i]) > n){
                return false
            }
    
            apear.push(str[i])
        }
    
        return true
    }

    function isPrime(num){
        if(num < 2 || num % 2 == 0 && num != 2){
            return false
        }
    
        for(let div = 3; div <= Math.sqrt(num); div += 2){
          if(num % div === 0){
            return false
          }
        }
    
        return true
    }

    function init(){
        let num = ''

        for(let i = 1; i <= n; i++){
            num += i
        }

        return parseInt(num)
    }

    function finish(){
        let num = ''

        for(let i = n; i >= 1; i--){
            num += i
        }

        return parseInt(num)  
    }

    for(let num = finish(); num >= init(); num--){
        if(isPandigital(num + '') && isPrime(num)){
            result = num
            break
        }
    }

    return result
}
  
console.log(pandigitalPrime(7))