'use strict';

// Linear time 2n

function isPal(str) {
  let charMap = {};

  for(let char of str) {
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char] = charMap[char] + 1;
    }
  }

  console.log(charMap);
    
  let oddCount = 0;

  for(let key in charMap) {
    const val = charMap[key];

    if (val % 2 !== 0) {
      oddCount++;
    }
  }

  console.log(`This is oddCount: ${oddCount}`);

  if (oddCount > 1) {
    return false;
  } else {
    return true;
  }
}


console.log(isPal('racecar'));
console.log(isPal('racecars'));