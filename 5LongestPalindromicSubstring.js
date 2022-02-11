var longestPalindrome = function (s) {
  let sReverse = "";
  let startIndex = 0;
  for (let i = 1; i < s.length; i++) {
    sReverse = s[i] + sReverse;
    console.log(s.substr(0, i));
    if (sReverse === s.substr(0, i + 1)) {
      console.log("here");
    }
  }
  console.log(sReverse);
};

let s = "babad";

longestPalindrome(s);
