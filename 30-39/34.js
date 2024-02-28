function digitFactorial() {
    var sum = 0
    var numbers = []
    const factorial = (n) => !(n > 1) ? 1 : factorial(n - 1) * n
  
    for(let num = 10; num <= 999999; num++){
      let isolate = (num + '').split('')
      let isoSum = 0
  
      for(let iso of isolate){
        isoSum += factorial(parseInt(iso))
      }
  
      if(isoSum == num){
        sum += num
        numbers.push(num)
      }
    }
  
    return { sum, numbers }
}
  
console.log(digitFactorial())