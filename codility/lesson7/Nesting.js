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

A string S consisting of N characters is called properly nested if:

S is empty;
S has the form "(U)" where U is a properly nested string;
S has the form "VW" where V and W are properly nested strings.
For example, string "(()(())())" is properly nested but string "())" isn't.

Write a function:

function solution(S);

that, given a string S consisting of N characters, returns 1 if string S is properly nested and 0 otherwise.

For example, given S = "(()(())())", the function should return 1 and given S = "())", the function should return 0, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..1,000,000];
string S consists only of the characters "(" and/or ")".

*/

function solution(str) {
  const stack = []
  for (let i = 0; i < str.length; i++) {
    const current = str[i]
    if (current === '(') {
      stack.push(current)
    } else {
      if (stack[0] !== '(') {
        return 0
      } else {
        stack.shift()
      }
    }
  }
  return Number(!stack.length)
  /*
  // solution withou using stacks

  let array = str.split('')
  while (array.length > 0) {
    let counter = 1
    if (array[0] === ')') {
      return 0
    }
    for (let i = 1; i < array.length; i++) {
      if (array[i] === '(') {
        counter ++
      } else {
        counter --
      }
      if (counter === 0) {
        array.shift()
        array.splice(i - 1, 1)
      }
    }
  }
  return 1

  */
}

/*

*/
test([''], 1)
test([')'], 0)
test(['()'], 1)
test(['(())'], 1)
test(['(()))'], 0)
test(['(()(())())'], 1)
test(['()('], 0)
test(['())'], 0)
test(['((()))(())()()'], 1)
/*

*/