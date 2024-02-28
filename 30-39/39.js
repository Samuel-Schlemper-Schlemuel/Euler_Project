function intRightTriangles(n) {
    let largest = [0, 0]

    for(let p = 12; p <= n; p++){
        sum = 0

        for(let h = 2; h < p/2; h++){
            for(let c = 1; c <= p/2; c++){
                if(h**2 == c**2 + (p - h - c)**2){
                    sum++
                }
            }
        }

        if(largest[1] < sum){
            largest = [p, sum]
        }
    }

    return largest[0]
}
  
console.log(intRightTriangles(1000))