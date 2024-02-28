function digitnPowers(n) {
    let sum = 0
  
    for(let num = 10; num < 999999; num++){
      let split = (num + '').split('')
      split[0] = parseInt(split[0]**n)
      
      let sumMult = split.reduce((pre, val) => {
        return pre += parseInt(val)**n
      })
  
      if(num == sumMult){
        sum += num
      }
    }
  
    return sum
}
  
console.log(digitnPowers(5))