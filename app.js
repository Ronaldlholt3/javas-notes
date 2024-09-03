//Q1. Falsy or Truthy
//Given two values, return the first one if it is falsy, otherwise return the second one.

/**
 * filterOutFalsy(0, 500) ->
 *
 * filterOutFalsy(false, 100) -> false
 *
 * filterOutFalsy([true,'Dog']) -> 'Dog'
 */
//The easy way to know if any element is truthy or falsy.
//Just open the console. And put a ! mark in front of it and that will show us the opposite boolean value
//So putting !! by an element will be able to show me if an element is truthy or falsy

function falsyOrTruthy(elem1, elem2) {
  if (!elem1) {
    //return the element
    return elem1;
  } else {
    return elem2;
  }
}

falsyOrTruthy(0, 5);

//A shorter way to do this
function falsyOrTruthy(elem1, elem2) {
  return !elem1 ? elem1 : elem2;
}

console.log(falsyOrTruthy(10, 5));

//Return the length of any given array
//Given an array, return it's length
/**
 * arrLength([1, 2, 3]) ->
 * arrLength({5, 0, -4, 1}) -> 4
 * arrLength([]) -> 0
 */

function arrLength(arr) {
  return arr.length;
}

console.log(arrLength([1, 2, 3, 4]));

//Q4. Finding the Sum of an array

//  function arrSum(arr) {
//     for (let i = 0; i < 3; ++i) { //This is the for loop set up on this line. It'll run 3 times until for loops break
//         console.log('run this code')
//     }//Whatever number of elements is in the array we want to look that many times.
//     console.log('for loop broke')
//  }

//Wehnever I want to loop over every element in an array i'll need to use a for loop
//  console.log(arrSum([2, 2, 2]));

// function arrSum(arr) {
//     for (let i = 0; i < arr.length; ++i) { //Thats the less than sign being used. I less than the array.
//         console.log('run this code')
//     }//
//     console.log('for loop broke')
//  } //This is the dynamic way to get my for loop to loop

//console.log(arrSum([2, 2, 2]));

function arrSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; ++i) {
    //Thats the less than sign being used. I less than the array.
    sum = sum + arr[i]; // use array i this whole set up will loop around the whole array
  }
  return sum;
} //This is the dynamic way to get my for loop to loop

console.log(arrSum([1, 2, 3, 4, 5, 6]));

//All this together is how I find the sum of an array.

//Q5 Add up the numbers from a single number.

function progressiveSum(num) {
  let sum = 0;
  for (let i = 1; i <= num; ++i) {
    sum = sum + i; //This is how we calculate the sum
  }
  return sum;
}

console.log(progressiveSum(3));

//Q6. Calculate the time

function calcTime(seconds) {
  let timerMinutes = Math.floor(seconds / 60);
  let timerSeconds = seconds % 60;

  if (timerMinutes.toString().length === 1) {
    timerMinutes = "0" + timerMinutes;
  }

  return timerMinutes + ":" + timerSeconds;
}

console.log(calcTime(70));

//Q7. Find the largest numbber 
//Given an array of numbers, return the largest number of that array.
/**
 * getMax([5,100,0]) -> 100
 * 
 * getMax([12,10,-20]) -> 12
 * 
 * getMax([-300, -100, -200]) -> -100
 */

function getMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        return max;
    }
  }
  
  console.log(getMax([-100, -200, -300]));
