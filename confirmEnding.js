function confirmEnding(string,stringCheck){

  //gives the start index number of the last occurence of stringCheck's
  //word, letter, or phrase in string 
  const stringLastOccurenceStartsWith = string.lastIndexOf(stringCheck)
  
  console.log("Start's at Index number: " + stringLastOccurenceStartsWith)


  //gives the end index number of the last occurence of stringCheck's
  //word, letter, or phrase in string
  const stringLastOccurenceEndsWith = stringLastOccurenceStartsWith+stringCheck.length

  console.log("End's at Index number: " + stringLastOccurenceEndsWith)

  //grabs the stringCheck letter, word, or phrase from the within the string
  const stringCheckWithInString = string.substring(stringLastOccurenceStartsWith, stringLastOccurenceEndsWith)

  console.log("stringCheck: " + "-" + stringCheckWithInString + "-" + " Was found within: " + string)

  //Index length of string
  


  //gives the letter, word, or phrase in the string
  const stringEndsWith = string.slice(string.length-stringCheck.length)
  console.log("Last letter, word, or phrase in String(should be same as below): " +stringEndsWith)

  //gives outputs the letter, word, or phrase in stringCheck
  const stringCheckIs = stringCheck
  console.log("stringCheck is: " + stringCheckIs)


  if(stringEndsWith === stringCheckIs){
    console.log("true\nthey do match")
    return true;
  }else {
    console.log("false\nthey don't match")
    return false
  }
}

confirmEnding("Open sesame", "game")

confirmEnding("Connor", "n")

confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")
