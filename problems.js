'use strict';

/////////////////////////////////////////////////
let a = [5, 6, 7];
let b = [3, 6, 10];
function compare(a, b) {
  let scoreArr = [];
  let aliceScore = 0;
  let bobScore = 0;

  for (let i = 0; i < a.length; i++) {
    console.log('PRINTING A[I]', a[i]);
  }

  for (let j = 0; j < b.length; j++) {
    console.log('PRINTING B[J]', b[j]);
  }
}

//compare(a, b);



/////////////////////////////////////////////////
// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
function miniMaxSum(arr) {
  let maxTotal = 0;
  let minTotal;
  for (let i = 0; i < arr.length; i++) {
    let total = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        total+=arr[j];
      }
    }
    if (total > maxTotal) {
      maxTotal = total;
    }
    if (minTotal === undefined) {
      minTotal = total;
    }
    if (total < minTotal) {
      minTotal = total;
    }
  }
  return [minTotal, maxTotal];
}

// console.log(miniMaxSum([1, 2, 3, 4, 5]));
// console.log(miniMaxSum([3, 6, 8, 1, 3]));


/////////////////////////////////////////////////
function list1(names){
  names.forEach(name => {
    console.log(name.name + ',');
    return `${name.name}, `;
  });
}

// console.log(list1([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]));

function list(names){
  let str = '';
  
  if (names === undefined) {
    return str;
  } 
  for (let i = 0; i < names.length; i++) {
  // this loop runs through each index of the array. Each one is an Object
    if (i >= names.length-2) {
      str += names[i]['name'] + ' & ';
    } else {
      str += names[i]['name'] + ', ';
  
    }        
  }

  return str.slice(0, str.length-2);
}

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]);


function reverseStr(s) {
  try {
    console.log(s.split('').reverse().join(''));
  } catch(error) {
    console.log(error.message);
  }
}

// reverseStr('1234');
// reverseStr(Number(1234));

function isPositive(a) {
  if(a > 0) {
    return 'YES';
  } else if(a === 0) {
    throw new Error('Zero Error');
  } else if(a < 0) {
    throw new Error('Negative Error');
  }
}

// console.log(isPositive(0));


/////////////////////// REGEXP ///////////////////////
function regExp(s) {
  const re = /^([aeiou]).*\1$/;
  console.log(re.test(s));
}

// regExp('aRabcda');


/////////////////////// INHERITANCE ///////////////////////
class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
}

// let newRect = new Rectangle(43, 45);
// console.log(newRect);

// console.log(newRect.w);

Rectangle.prototype.area = function() {
  return (this.w * this.h);  
};

Rectangle.w = 3;
Rectangle.h = 4;

// console.log(Rectangle.w);
// console.log(Rectangle.h);
// console.log(Rectangle);

class Square extends Rectangle {
  constructor(s) {
    super(s, s);
  }
}

function getDayName(dateString) {
  let dayName;
  // Write your code here
  let weekArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let date = new Date(dateString);
  dayName = weekArr[date.getDay()];
  
  return dayName;
}

// getDayName('10/07/2017');

function Rectangle2(a, b) {
  let length = a;
  let width = b;
  return {
    length,
    width,
    perimeter: 2 * (length + width),
    area: length * width
  };
}

// Rectangle2(2, 4);
// console.log(Rectangle2.length);
// console.log(Rectangle2.perimeter);


/////////////////////// COUNT OBJECTS ///////////////////////
/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
  let counter = 0;
  for (let obj in objects) {
    // console.log(objects[obj].x);
    // console.log(objects[obj].y);

    if (objects[obj].x == objects[obj].y) {
      counter++;
    }
  }
  console.log(counter);
  return counter;
}

// getCount([{x: 1, y: 1}, {x: 2, y: 1}, {x: 3, y: 3}, {x: 0, y: 3}, {x: 5, y: 5}]);

/////////////////////// TWO SUM ///////////////////////
/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// https://coderbyte.com/algorithm/two-sum-problem
//O(N^2)
//USE HASH TABLE TO OPTIMIZE
var twoSum = function(nums, target) {
  let sum = 0;
  let arr =[];
  let compare;

  for(let i = 0; i < nums.length; i++) {
    // console.log(`This is i: ${nums[i]}`);
    if(nums[i] === target) {
      arr.push(nums[i]);
      console.log(arr);
      return arr;
    }
    for(let j = 0; j < nums.length; j++) {
      // console.log(`This is j: ${nums[j]}`);
      compare = nums[i] + nums[j];
      if(compare === target) {
        console.log(`Found it!!! ${nums[i]} & ${nums[j]}`);
        arr.push(nums[i], nums[j]);
        console.log(arr);
        return arr;
      }
    }
  }
  
};

let nums = [2, 7, 11, 15, 4, 7, 8, 67, 0];
let target = 15;

// twoSum(nums, target);


function regexVar(s) {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
   * followed by one or more letters.
   */
  
  
  /*
   * Do not remove the return statement
   */

  // const re = /^(Mr?s|[MDE]r)\.[A-Za-z]+$/;
  const re = /^[MDE][rs]s?\.[A-z]+$/;
  // let re=/([M|E|D][r|s]s?)\.[A-z]+$/;
   console.log(re.test(s));
  return re;
}

console.log(regexVar('Ms.A'));
console.log(regexVar('Ms. A'));
