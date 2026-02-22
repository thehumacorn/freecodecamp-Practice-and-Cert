
findLongestWordLength("The quick brown fox jumped over the lazy dog")

function findLongestWordLength(sentence){
  let wordsLength = [];
  const wordSplit = sentence.split(" ")
  for (const word of wordSplit){

      wordsLength.push(word.length)
  }
  const maxWordLength = Math.max(...wordsLength)
  return maxWordLength
}
