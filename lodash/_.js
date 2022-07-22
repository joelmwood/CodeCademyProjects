const _ = {
  clamp(number, lower, upper){
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  inRange(number, start, end){
    if (!end){
      end = start;
      start = 0;
    }
    if(start > end) {
      [start, end] = [end, start];
    }
    if(number < start) return false;
    if(number >= end) return false;
    if (number === '') return false;
    return true;
  },
  words(string){
    let words = string.split(' ');
    return words;
  },
  pad(string, length){
    if(string.length >= length){return string};
    let startPaddingLength = Math.floor((length - string.length) / 2);
    let endPaddingLength = length - string.length - startPaddingLength;
    let space = ' ';
    let paddedWord = space.repeat(startPaddingLength) + string + space.repeat(endPaddingLength);
    return paddedWord;    
  },
  has(object, key){
    return object[key] !== undefined;
  },
  invert(object){
     const invertedObject = {};
     for(let key in object){
       originalValue = object[key];
       invertedObject[originalValue] = key;
     }
     return invertedObject;
  },
  findKey (object, predicate) {
    // Check each key of object
    for(let key in object) {
      // Find the value of the object key
      let value = object[key];
      // Call the predicate function on the value of the object key
      let predicateReturnValue = predicate(value);
      // Check if the functions gives a truthy
      if (predicateReturnValue) {
        return key;
      };
    };
    // if the for...in loop gives no truthy values return undefined
    return undefined;
  },
  drop(array, number){
    let tempArray = array;
    if (number === '' || number === undefined) {
      tempArray.shift();
      return tempArray;
    }
    for (let x = number; x > 0; x--){
      tempArray.shift();
    }
    return tempArray;
  },
  dropWhile(array, predicate){
    const dropNumber = array.findIndex((element, index) => {
      return !predicate(element, index, array)
    })
    const droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },
  chunk(array, size){
    if(size === undefined) size = 1;
    const arrayChunks = [];
    for (let i = 0; i < array.length; i+=size){
      let arrayChunk = array.slice(i, i + size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  }
};




// Do not write or modify code below this line.
module.exports = _;
