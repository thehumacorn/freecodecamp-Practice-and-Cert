
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))

function findLongestWordLength(str){

  const words = str.trim().split(" ")
  let longestWordLength = Math.max(words.length);
  for(const word of words){
        const wordsLength = word.length
        return wordsLength
  }
  return longestWordLength
}
