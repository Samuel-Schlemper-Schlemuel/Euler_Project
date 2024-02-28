function sumOfNonAbundantNumbers(n) {
    let abundantNums = new Set(), result = 0
  
    for(let num = 12; num < n; num++){
      let sum = 1
  
      for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i == 0){
          sum += i

          if(i != num/i){
            sum += num/i
          }
        }
      }
  
      if(sum > num){
        abundantNums.add(num)
      }
    }

    for(let num = 1; num <= n; num++){
        let pass = true

        for(let aN of abundantNums){
            if(abundantNums.has(num - aN)){
                pass = false
                break
            }
        }

        if(pass){
            result += num
        }
    }
  
    return result
}
  
console.log(sumOfNonAbundantNumbers(28123))