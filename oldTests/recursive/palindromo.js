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

const palindromo = (str) => {
  if (!str || str.length === 0)
    return true
  if (str.length === 1)
    return true
  if (str[0] === str[str.length - 1]) {
    return palindromo(str.slice(1, str.length - 1))
  }
  return false
}

function solution(str) {
  return Number(palindromo(str.toUpperCase()))
}

/*

*/
test(['renner'], 1)
test(['vazio'], 0)
test([''], 1)
test(['ovo'], 1)
test(['Rad515dAR'], 1)
test(['ovvo'], 1)
test(['ovvvo'], 1)
test(['Aovvvo'], 0)
test(['a'], 1)
test(['aa'], 1)
test(['aaa'], 1)
test(['ava'], 1)
test(['aavaa'], 1)
test(['aavaaa'], 0)
test(['aaavaa'], 0)
/*


*/
