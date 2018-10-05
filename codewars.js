'use strict';

/////////////////////////////////////////////////
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

function disemvowel1(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  const lowerCaseStr = str.toLowerCase();  
  const splitStr = lowerCaseStr.split('');
  const filterStr = splitStr.filter(element => {
    //console.log(vowels.indexOf(element))
    return vowels.indexOf(element.toLowerCase()) === -1;
  });
  console.log(filterStr.join(''));
  const noVowelsInStr = filterStr.join('');
  return noVowelsInStr;
}

// disemvowel1('This website is for losers LOL!');

function disemvowel(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  return str.split('').filter(element => {
    return vowels.indexOf(element.toLowerCase()) === -1;
  }).join('');
  
}

// console.log(disemvowel('This website is for losers LOL!'));



/////////////////////////////////////////////////
function matching(str) {
  const stack = new stack();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
      stack.push(str[i]);
    }

    if (str[i] === ')' && stack.top.data === '(') {
      stack.pop();
    }

    if (str[i] === '}' && stack.top.data === '{') {
      stack.pop();
    }

    if (str[i] === ']' && stack.top.data === '[') {
      stack.pop();
    }
  }

  if (stack.top) {
    return false;
  } else {
    return true;
  }
}


/////////////////////////////////////////////////
function birthdayCakeCandles(ar) {
  let counter = 0;
  const maxInArr = Math.max(...ar);

  for (let i = 0; i<ar.length; i++) {
    if (ar[i] === maxInArr) {
      counter++;
    }
  }

  return counter;
}

// birthdayCakeCandles([3, 2, 1, 3]);

/////////////////////////////////////////////////
function chase(x, y, z) {
  const catA = Math.abs((z-x));
  const catB = Math.abs((z-y));

  if(catA > catB) {
    console.log('cat B wins');
    return y;
  }
  if (catA < catB) {
    console.log('cat A wins');
    return x;
  } else if(catA === catB) {
    console.log('Mouse wins');
    return z;
  }
}

chase(10, -4, 3);