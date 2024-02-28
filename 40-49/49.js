function primePermutations() {
    function isPrime(n){
        if(n % 2 == 0 && n != 2 || n < 2){
            return false
        }

        for(let num = 3; num <= Math.sqrt(n); num++){
            if(n % num == 0){
                return false
            }
        }

        return true
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

    function result(num){
        let concat = num + '', sum = num

        for(let i = 1; i < 3; i++){
            concat += 3330 + sum
            sum += 3330
        }

        return concat
    }

    for(let num = 1488; num <= 9999; num++){
        if(isPrime(num)){
            let NumPermutation = anagrams(num + '')
            let sum = num + 3330

            for(let i = 0; i < 2; i++){
                if(!isPrime(sum) || NumPermutation.indexOf(sum + '') == -1){
                    break
                } else if(NumPermutation.indexOf(sum + '') != -1 && i == 1){
                    return result(num)
                }
    
                sum += 3330
            }
        }
    }

    return true
}
 
console.log(primePermutations())