function pandigitalProducts(n = 9) {
    let numbers = new Set(), result = 0
  
    for(let num = 1; num <= n; num++){
      numbers.add(num)
    }
  
    let min = 0.1*10**Math.floor(n/2)
    let max = parseInt(new Array(Math.floor(n/2)).fill(9).join(''))
  
    function diferent(val){
      let arr = (val + '').split(''), pass = true
  
      for(let i in arr){
        if(arr.indexOf(arr[i]) != i){
          pass = false
          break
        }
      }
  
      return pass
    }
  
    function testAll(num, div){
      let str = (num + '') + (div + '') + (num/div + '')
  
      if(!diferent(str)){
        return false
      }
  
      let arr = str.split('')
      
      if(arr.length != n){
        return false
      }
  
      for(let val of arr){
        if(!numbers.has(parseInt(val))){
          return false
        }
      }
  
      result += num
      return true
    }
  
    for(let num = min; num < max; num++){
      if(diferent(num)){
        for(let div = 1; div < Math.sqrt(num); div++){
          if(num % div == 0){
            if(testAll(num, div)){
              break
            }
          }
        }
      }
    }
  
    return result
}
  
console.log(pandigitalProducts())