function digitFibonacci(n) {
  let n1 = BigInt(1), n2 = BigInt(1), i = 2

while((n2 + '').length < n){
    n2 += n1
    n1 = n2 - n1
    i++
}

  return i
}

console.log(digitFibonacci(1000))