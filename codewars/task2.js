function pigIt(str) {
  return str
    .split(" ")
    .map((word) => {
      const firstLetter = word[0];
      if (firstLetter.match(/[a-zA-Z]/g)) {
        return word.slice(1) + firstLetter + "ay";
      }
      return word;
    })
    .join(" ");
}
