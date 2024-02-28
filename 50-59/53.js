function combinatoricSelections(limit) {
    result = 0

    function factoralize(num){
        let fact = 1

        for(let mult = num; mult >= 2; mult--){
            fact *= mult
        }

        return fact
    }

    function test(n, r){
        return factoralize(n) / (factoralize(r) * factoralize(n - r))
    }

    for(let n = 1; n <= 100; n++){
        for(let r = 1; r <= n; r++){
            if(test(n, r) > limit){
                result++
            }
        }
    }

    return result
}
  
console.log(combinatoricSelections(1000000))