function quadraticPrimes(range) {
    let result = [0, 0]
  
    for(let a = -range + 1; a < range - 1; a++){
      for(let b = -range; b < range; b++){
        let finish = false
        for(let n = 0; !finish; n++){
          let calc = n**2 + a*n + b
          for(let div = 2; calc != div && calc != -div; div++){
  
            if(calc % div == 0 || calc == 0 || calc == 1 || calc == -1){
              finish = true
              break
            }
  
          }
  
          if(result[1] < n){
            result[0] = a*b
            result[1] = n
          }
        }
      }
    }
  
    return result[0]
  }
  
console.log(quadraticPrimes(1000))