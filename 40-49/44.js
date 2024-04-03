function pentagonNumbers() {
    var j = 2, k = 1
    var pj = j * (3 * j - 1) / 2
    var pk = k * (3 * k - 1) / 2

    function validN(c) {
        let a = 3
        let b = -1
        c = -c
        var delta = b**2 - 4 * a * c

        if (delta < 0) {
            return false
        }
    
        var x1 = (-b + Math.sqrt(delta)) / (2 * a)
        var x2 = (-b - Math.sqrt(delta)) / (2 * a)
    
        if(x1 % 1 == 0 && x1 > 0 || x2 % 1 == 0 && x2 > 0){
            return true
        }

        return false
    }
    

    function finish(){
        let sum = pj + pk

        if(validN(sum*2)){
            let sub = pj - pk

            if(validN(sub*2)){
                return true
            }
        }

        return false
    }

    while(!finish()){
        j++
        k = 1

        while(k < j){
            pj = j * (3 * j - 1) / 2
            pk = k * (3 * k - 1) / 2

            if(finish()) break

            k++
        }
    }

    return pj - pk
}
  
console.log(pentagonNumbers())