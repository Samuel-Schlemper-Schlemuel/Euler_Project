function circularPrimes(n) {
    let sum = 0
  
    function isPrime(num){
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
  
    function rotate(num){ 
      let string = num.toString()
  
      let rotations = []
  
      for (let i = 0; i < string.length; i++) {
        let char = string[i]
        let resto = string.slice(i + 1) + string.slice(0, i)
        rotations.push(char + resto)
      }
  
      return rotations
    }
  
    for(let num = 2; num < n; num++){
      let rotates = rotate(num), pass = true
  
      for(let rot of rotates){
        if(!isPrime(parseInt(rot))){
          pass = false
          break
        }
      }
  
      if(pass){
        sum++
      }
    }
  
    return sum
}
  
console.log(circularPrimes(1000000))