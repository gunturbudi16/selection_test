function checkVowelAndConsonant(word) {
  let vowels = "aiueo";
  var huruf = word.toLowerCase();
  for (let i = 0; i < huruf.length; i++) {
    if (vowels.includes(huruf[i])) {
      console.log(huruf[i].toUpperCase());
    }
  }
  for (let j = 0; j < huruf.length; j++) {
    if (vowels.indexOf(huruf[j]) === -1) {
      console.log(huruf[j].toUpperCase());
    }
  }
}
console.log(checkVowelAndConsonant("ARKADEMY"));
