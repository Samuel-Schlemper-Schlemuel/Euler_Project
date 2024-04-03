function digitCancellingFractions() {
    let vals = []
  
    function curious(frac){
      let calFrac = eval(frac)
  
      if(frac[1] == 0 && frac[4] == 0){
        return false
      }
  
      if(frac[0] == frac[3]){
        if(calFrac == frac[1]/frac[4]){
          return true
        }
      }
      if (frac[1] == frac[3]){
        if(calFrac == frac[0]/frac[4]){
          return true
        }
      }
      if (frac[0] == frac[4]){
        if(calFrac == frac[1]/frac[3]){
          return true
        }
      }
      if (frac[1] == frac[4]){
        if(calFrac == frac[0]/frac[3]){
          return true
        }
      }
  
      return false
    }
  
    for(let num = 10; num < 99; num++){
      for(let den = num + 1; den < 100; den++){
        if(curious(`${num}/${den}`)){
          vals.push(`${num}/${den}`)
        }
      }
    }
  
    let mult = 1, result = 1
  
    for(let num of vals){
      mult *= eval(num)
    }
  
    mult = mult.toString().split('').slice(2)
    let sequence = 0
  
    for(let num of mult){
      if(num == 0){
        sequence++
        if(sequence == 2){
          break
        }
      } else {
        if(sequence == 1){
          result *= 100
        } else {
          result *= 10
        }
  
        sequence = 0
      }
    } 
  
    return result
}
  
console.log(digitCancellingFractions())