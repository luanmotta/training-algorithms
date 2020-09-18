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

"Domino": We are given an S string, representing a domino tile chain. Each tile has an L-R format, where L and R are numbers from the 1..6 range. The tiles are separated by a comma. Some examples of a valid S chain are:
1. "6-3"
2. "4-3,5-1,2-2,1-3,4-4"
3. "1-1,3-5,5-2,2-3,2-4"
Devise a function that given an S string, returns the number of tiles in the longest matching group within S. A matching group is a set of tiles that match and that are subsequent in S. Domino tiles match, if the right side of a tile is the same as the left side of the following tile. "2-4,4-1" are matching tiles, but "5-2,1-6" are not.

*/

function solution(S) {
  if (S.length === 0) {
    return 0
  }
  if (S.length === 1) {
    return 1
  }
  let counter = 1
  let subCounter = 1
  let D = S.split(',')
  for (let i = 0; i < D.length - 1; i++) {
    if (D[i][2] === D[i+1][0]) {
      subCounter++
      if (i === D.length - 2) {
        if (subCounter > counter) {
          counter = subCounter
        }
        subCounter = 1
      }
    } else {
      if (subCounter > counter) {
        counter = subCounter
      }
      subCounter = 1
    }
  }
  return counter
}
/*



*/
test(['1-2,2-3,5-6'], 2)
test(['1-2,1-1,1-3'], 2)
test(['1-2,3-4,4-5,1-1'], 2)
test(['3-4,4-2,2-6,6-6'], 4)
test(['2-4,4-1'], 2)
test(['6-3'], 1)
test(['6-1,2-6'], 1)
test(['2-5,3-6'], 1)
test(["1-1,3-5,5-2,2-3,2-4"], 3)
test(["1-1,3-5,5-2,2-3,2-4,4-3,3-4,4-3,3-4"], 5)
test(["1-1"], 1)
test(["1-2,1-2"], 1)
test(["3-2,2-1,1-4,4-4,5-4,4-2,2-1"], 4)
test(["5-5,5-5,4-4,5-5,5-5,5-5,5-5,5-5,5-5,5-5"], 7)
test(["1-1,3-5,5-5,5-4,4-2,1-3"], 4)

test(["1-2,2-2,3-3,3-4,4-5,1-1,1-2"], 3)
/*

*/

