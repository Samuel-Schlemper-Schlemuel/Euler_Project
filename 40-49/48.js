function selfPowers(power, lastDigits) {
    let sum = BigInt(1)

    for(let num = 2; num <= power; num++){
        sum += BigInt(num)**BigInt(num)
    }

    let str = sum + ''
    return str.slice(str.length - lastDigits)
}

console.log(selfPowers(1000, 10))