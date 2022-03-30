const input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];


for (i = 0; i<input.length; i++) {
  const letter = input[i].toLowerCase();
  //  console.log(letter);
    if (input[i] === 'e'|| input[i] === 'u') {
      resultArray.push(input[i]);
    }
  for (j = 0; j < vowels.length; j++) {
    const vowel = vowels[j];

    if (letter === vowel) {
      //  console.log(letter);
      resultArray.push(letter);
  }
  let resultString = resultArray.join('');
  resultString = resultString.toUpperCase();
  console.log(resultString);
  }
}
//  console.log(resultArray);
