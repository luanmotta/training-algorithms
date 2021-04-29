// Verify if it's a algebric number or a roman number, then convert it to the other format.

const dictionary = {
  1000: "M",
  500: "D",
  100: "C",
  50: "L",
  10: "X",
  5: "V",
  1: "I",
};

const divisionList = [1000, 500, 100, 50, 10, 5, 1];
const decList = [1, 10, 100];

const biggestRepresentation = (list) =>
  list
    .map((value) => {
      return Number(String(value)[0]) === 1 ? value * 3 : value;
    })
    .reduce((prev, total) => (total += prev), 0);

const biggestRomanNumber = biggestRepresentation(divisionList);

const convertToRoman = (number) => {
  if (number > biggestRomanNumber || number < 1) {
    return null;
  }

  let romanNumber = "";
  let rest = number;
  let divisorInfo = { uses: 0, divisor: null };

  for (let i = 0, j = 0; rest > 0; i++, j++) {
    const divisor = divisionList[i];
    const length = String(rest).length;
    const restN = Number(String(rest)[0]);
    if (restN === 9 || restN === 4) {
      const n = decList[length - 1];
      romanNumber += dictionary[n];
      rest += n;
      i = -2;
    } else if (rest >= divisor) {
      romanNumber += dictionary[String(divisor)];
      rest -= divisor;

      if (divisor !== divisorInfo.divisor) {
        divisorInfo.divisor = divisor;
        divisorInfo.uses = 0;
      }

      divisorInfo.divisor = divisor;
      divisorInfo.uses++;

      if (divisorInfo.uses <= 3) {
        i--;
      }
    }
  }

  return romanNumber;
};

const convertToAlgebric = (number) => {
  // Verify all letters
  // Verify Order
  // Verify if any occurs more than 3 times
};

const solution = (input) => {
  const isRoman = Number.isNaN(Number(input));
  return isRoman ? convertToAlgebric(input) : convertToRoman(input);
};

const test = (input, expected) => {
  console.log(input, " | ", solution(input), " | ", expected);
};

test(0, null);
test(9999999999, null);
test(10, "X");
test(30, "XXX");
test(5, "V");
test(6, "VI");
test(8, "VIII");

test(899, "DCCCXCIX");
test(40, "XL");
test(900, "CM");
test(895, "DCCCXCV");
test(995, "CMXCV");
test(996, "CMXCVI");
test(997, "CMXCVII");
test(998, "CMXCVIII");
test(39, "XXXIX");
test(49, "XLIX");
// test(X, 10);
