function triPentaHexa(n) {
    n = 166
    var Pn = n * (3 * n - 1) / 2

    function isHexagonal(Hn){
        let a = 2, b = -1, c = -Hn
        let delta = b**2 - 4 * a * c

        if (delta < 0) {
            return false
        }
    
        let x1 = (-b + Math.sqrt(delta)) / (2 * a)
        let x2 = (-b - Math.sqrt(delta)) / (2 * a)
    
        if(x1 % 1 == 0 && x1 > 0 || x2 % 1 == 0 && x2 > 0){
            return true
        }

        return false
    }

    function isTriangle(Tn){
        let a = 1, b = 1, c = -2*Tn
        let delta = b**2 - 4 * a * c

        if (delta < 0) {
            return false
        }
    
        let x1 = (-b + Math.sqrt(delta)) / (2 * a)
        let x2 = (-b - Math.sqrt(delta)) / (2 * a)
    
        if(x1 % 1 == 0 && x1 > 0 || x2 % 1 == 0 && x2 > 0){
            return true
        }

        return false
    }

    while(true){
        if(isHexagonal(Pn)){
            if(isTriangle(Pn)){
                return Pn
            }
        }

        n++
        Pn = n * (3 * n - 1) / 2
    }
}
console.log(triPentaHexa(40756))