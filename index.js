// Arrays:

// add item to end of an array
function addToEnd(array, item) {
  return [...array, item];
}

// add to beginning of an array
function addToBeginning(array, item) {
 return [item, ...array];

}

// add to middle of array
function insertItem(array, item, index) {
return [...array.slice(0, index), item, ...array.slice(index)]
}

// replace item in array
function replaceItem(array, item, index) {
  return [...array.slice(0, index), item, ...array.slice(index+1)]
}

// remove item from array
function removeItem(array, index) {
  return [...array.slice(0, index), ...array.slice(index+1)]
}

//Objects:

// change value of key in an object to new value

function updateName(object, update) {
return {...object, name:update };                  //...update - spread update only if it's probably an object too?
}

// change value of key in an object to not what it is
function toggleTeaStatus(object) {
return {...object, needsACupOfTea:!object.needsACupOfTea}
}

// Combo Time!!

// toggle the list item's completed value while maintaining its other properties
function toggleListItemCompleted(array, index) {

return [...array.slice(0,index), {...array[index], completed:!array[index].completed}, ...array.slice(index+1)]


//alternative:
//  let newObject = {...array[index], completed:!array[index].completed}
//return [...array.slice(0,index), newObject, ...array.slice(index+1)]
}

module.exports = {
  addToEnd,
  addToBeginning,
  insertItem,
  replaceItem,
  removeItem,
  updateName,
  toggleTeaStatus,
  toggleListItemCompleted,
};
