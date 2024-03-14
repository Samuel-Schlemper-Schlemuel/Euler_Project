function squareRootConvergents(iteracoes) {
    let numerador = BigInt(3)
    let denominador = BigInt(2)
    let contador = 0
    
    for (let i = 1; i < iteracoes; i++) {
        [numerador, denominador] = [numerador + BigInt(2) * denominador, numerador + denominador]
        if (String(numerador).length > String(denominador).length) {
            contador++
        }
    }
    
    return contador
}

console.log(squareRootConvergents(1000))