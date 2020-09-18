function solution(input, price) {
  input = input * 100
  price = price * 100
  let coins = [1, 5, 10, 25, 50, 100]
  let result = [0, 0, 0, 0, 0, 0]
  let difference = input - price
  while (difference) {
    for (let i = coins.length;; i--) {
      if (coins[i] <= difference) {
        result[i]++
        difference = difference - coins[i]
        break
      }
    }
  }
  return result
}

console.log(solution(3.14, 1.99)) // should return [0,1,1,0,0,1]
console.log(solution(4, 3.14) )// should return [1,0,1,1,1,0]
console.log(solution(0.45, 0.34)) // should return [1,0,1,0,0,0]
console.log(solution(5, 0.99)) // should return [1,0,0,0,0,4]
console.log(solution(1, 1)) // should return [0,0,0,0,0,0]

/*

// 1c, 5c, 10c, 25c, 50c, 1

console.log(solution(5, 0.99))
*/
// test([[5, 0.99]], [1,0,0,0,0,4])
// test([1, 1], [0,0,0,0,0,0])
