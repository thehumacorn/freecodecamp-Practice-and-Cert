const lunches = [];

function addLunchToEnd(arr,str){
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`)
  return arr
}

function addLunchToStart(arr,str){
arr.unshift(str)
console.log(`${str} added to the start of the lunch menu.`)
return arr
}

function removeLastLunch(arr){
if(arr.length > 0){
  console.log(`${arr[arr.length-1]} removed from the end of the lunch menu.`)
  arr.pop()
}else if(arr.length === 0){
console.log("No lunches to remove.")
}
return arr
}
function removeFirstLunch(arr){
  if(arr.length > 0){
    console.log(`${arr[0]} removed from the start of the lunch menu.`)
    arr.shift()
  }else if (arr.length === 0){
    console.log("No lunches to remove.")
  }
  return arr
}

function getRandomLunch(arr){
  const max = arr.length
  const randomArrInt = Math.floor(Math.random() * max);

  if(arr.length > 0){
    console.log(`Randomly selected lunch: ${arr[randomArrInt]}`)
  }else if(arr.length === 0){
    console.log("No lunches available.")
  }
}

function showLunchMenu(arr){
  if(arr.length > 0){

    const menuItems = [...arr].join(", ");

    console.log(`Menu items: ${menuItems}`)
  }else if(arr.length === 0){
    console.log("The menu is empty.")
  }
}
