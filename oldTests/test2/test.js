/*

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].

*/

function solution(array) {
  array = array.filter(item => item > 0)
  array = array.sort()

  let cont = 0
  let test = 1
  const length = array.length

  if (length === 0) {
    return array[0] === 1 ? 2 : 1
  }

  while (cont < length) {
    if (array[cont] === test) {
      test++
      cont++
    } else if (array[cont] <= test) {
      cont++
    } else {
      return test
    }
  }
  return test
}



// Tests
const test = (params, expected) => {
  const result = solution(...params), color = result === expected ? '\x1b[32m' : '\x1b[31m', reset = '\x1b[0m'
  console.log(`${params} | expected ${expected} get ${result}`, color, `${result === expected}\n`, reset)
}

test([[1, 3, 6, 4, 1, 2]], 5)
test([[1, 2, 3]], 4)
test([[-1, -3]], 1)
test([[1]], 2)