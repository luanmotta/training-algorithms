const sumDigits = (str) =>
  str.split("").reduce((s, total) => (total += Number(s)), 0);

function orderWeight(string) {
  return string
    .split(" ")
    .sort((a, b) => {
      return sumDigits(a) - sumDigits(b);
    })
    .join(" ");
}
