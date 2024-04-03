function coinSums(n = 200) {
    let coins = [1, 2, 5, 10, 20, 50, 100, 200]
    let ways = new Array(n + 1).fill(0)
    ways[0] = 1
  
    for (let coin of coins) {
      for (let i = coin; i <= n; i++) {
        ways[i] += ways[i - coin]
      }
    }
  
    return ways[n]
}
  
console.log(coinSums())