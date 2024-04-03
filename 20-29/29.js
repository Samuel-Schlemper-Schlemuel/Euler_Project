function distinctPowers(n) {
    let all = new Set()

    for(let num = 2; num <= n; num++){
        for(let exp = 2; exp <= n; exp++){
        all.add(num**exp)
        }
    }

    return all.size
}
  
console.log(distinctPowers(100))