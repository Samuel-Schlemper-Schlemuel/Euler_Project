function reciprocalCycles(n) {
    let max = [3, 1]

    for(let d = 6; d < n; d++){
        let periodic_decimal = true, returned = []

        while(true){
            let calc

            if(returned.length == 0){
                calc = 10*((d + '').length) % d
            } else {
                calc = returned[returned.length - 1]*10 % d
            }

            if(calc == 0){
                periodic_decimal = false
                break
            } else {
                if(returned.indexOf(calc) != -1){
                    returned = returned.slice(returned.indexOf(calc))
                    break
                } else {
                    returned.push(calc)
                }
            }
        }

        if(periodic_decimal){
            if(max[1] < returned.length){
                max = [d, returned.length]
            }
        }
    }

    return max[0]
}
  
console.log(reciprocalCycles(1000))