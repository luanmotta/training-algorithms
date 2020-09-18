const equals = (result, expected) => {
  if (typeof expected === 'object') {
    for (let i = 0; i < result.length || i < expected.length; i++) {
      if (result[i] !== expected[i]) {
        return false
      }
    }
    return true
  } else {
    return result === expected
  }
}

// Tests
const test = (params, expected) => {
  const result = solution(...params), color = equals(result, expected) ? '\x1b[32m' : '\x1b[31m', reset = '\x1b[0m'
  console.log(`${params} | expected ${expected} get ${result}`, color, `${equals(result, expected)}\n`, reset)
}


/*



*/

function solution(money, price) {
  money = money*100
  price = price*100
  let change = money - price
  let coins = [100, 50, 25, 10, 5, 1]
  let changeCoins = [0, 0, 0, 0, 0, 0]
  for (let i = 0; change > 0; i++) {
    if (change >= coins[i]) {
      let coinsQuantity = Math.trunc(change / coins[i])
      changeCoins[i] = coinsQuantity
      change = change - (coins[i] * coinsQuantity)
    }
  }
  return changeCoins.reverse()
}

/*

// 1c, 5c, 10c, 25c, 50c, 1

console.log(solution(5, 0.99))
*/
// test([[5, 0.99]], [1,0,0,0,0,4])
// test([1, 1], [0,0,0,0,0,0])

// console.log(solution(3.14, 1.99)) // should return [0,1,1,0,0,1]
// console.log(solution(4, 3.14) )// should return [1,0,1,1,1,0]
console.log(solution(0.45, 0.34)) // should return [1,0,1,0,0,0]

/*

*/