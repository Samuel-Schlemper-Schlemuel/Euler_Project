function substringDivisibility(n) {
    let first = '', sum = 0

    for(let num = 0; num <= n; num++){
        first += num
    }

    function anagrams(str){
        let anagram = []

        if(str.length == 1){
            return [str]
        }

        for(let i = 0; i < str.length; i++){
            let letter = str[i]
            let rest = str.substring(0, i) + str.substring(i + 1)
            rest = anagrams(rest)

            for(let possibilite of rest){
                anagram.push(letter + possibilite)
            }
        }

        return anagram
    }

    let allPossibilites = anagrams(first)
    const list = [2, 3, 5, 7, 11, 13, 17]

    function divisible(num){
        for(let i = n - 2; i >= 1; i--){
            if(parseInt(num[i] + num[i + 1] + num[i + 2]) % list[i - 1] != 0){
                return false
            }
        }

        return true
    }

    for(let pos of allPossibilites){
        if(divisible(pos)){
            sum += parseInt(pos)
        }
    }

    return sum
}
  
console.log(substringDivisibility(9))