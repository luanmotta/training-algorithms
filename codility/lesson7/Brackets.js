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

A string S consisting of N characters is considered to be properly nested if any of the following conditions is true:

S is empty;
S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
S has the form "VW" where V and W are properly nested strings.
For example, the string "{[()()]}" is properly nested but "([)()]" is not.

Write a function:

function solution(S);

that, given a string S consisting of N characters, returns 1 if S is properly nested and 0 otherwise.

For example, given S = "{[()()]}", the function should return 1 and given S = "([)()]", the function should return 0, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..200,000];
string S consists only of the following characters: "(", "{", "[", "]", "}" and/or ")".

*/

const correspondent = {
  ')' : '(',
  '(' : ')',
  ']' : '[',
  '[' : ']',
  '}' : '{',
  '{' : '}'
}

const isOpening = (s) => {
  return s === '(' || s === '[' || s === '{'
}

function solution(S) {
  if (S.length === 1) {
    return 0
  }
  let array = S.split('')
  let stack = []
  for ( let i = 0; i < array.length; i++) {
    if (isOpening(array[i])) {
      stack.push(array[i])
    } else {
      if (stack[stack.length - 1] === correspondent[array[i]]) {
        stack.pop()
      } else {
        return 0
      }
    }
  }
  return stack.length > 0 ? 0 : 1
}

test([''], 1)
test(['}'], 0)
test(['(}'], 0)
test(['}}'], 0)
test(['{{'], 0)
test(['{{}}'], 1)
test(['{()()()()}'], 1)
test(['{[()()]}'], 1)
test(['([)()]'], 0)
