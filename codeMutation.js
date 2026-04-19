
mutation(["hello", "Hello"])

function mutation(array){

 for (let i = 0; i < array.length; i++) {
  array[i] = array[i].toLowerCase();
  }

  const checkOne = array[0].split("")
  const checkTwo = array[1]

  for (let i = 0; i < checkOne.length; i++){
    checkOne
    console.log(i)
    if(checkOne[i] === checkTwo[i]){
      return true
    }else if(checkOne[i] !== checkTwo[i])
      return false
    }
  }
