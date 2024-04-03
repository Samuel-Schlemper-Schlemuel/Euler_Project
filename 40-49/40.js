function champernownesConstant(n) {
    let count = 2, num = ['2'], i = 0, mult = 1

    while(count <= n){
        if(1 * 10**((count + '').length - 1) == count){
            mult *= parseInt(num[i])
        }

        if(i == num.length - 1){
            num =  ((parseInt(num.join('')) + 1) + '').split('')
            i = 0
        } else {
            i++
        }

        count++
    }

    return mult
}
  
console.log(champernownesConstant(1000000))