function lexicographicPermutations(n) {
    let notUsed = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let result = ''

    function factorial(num) {
        let result = 1

        for(let mult = num; mult >= 2; mult--){
            result *= mult
        }

        return result
    }

    for (let i = 9; i >= 0; i--) {
        let index = Math.floor(n / factorial(i))
        result += notUsed.splice(index, 1)[0]
        n %= factorial(i)
    }

    return parseInt(result)
}
  
console.log(lexicographicPermutations(999999))