var lengthOfLastWord = function (s) {
  let wordLengthCount = 0;
  let startCount = false;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      startCount = true;
    }

    if (startCount) {
      if (s[i] === " ") break;
      wordLengthCount++;
    }
  }

  return wordLengthCount;
};

let word = "luffy is still joyboy";

console.log(lengthOfLastWord(word));
