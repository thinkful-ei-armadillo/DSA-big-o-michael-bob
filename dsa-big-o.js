'use strict';

/*
1) 
  a) this algorithm is O(1) because regardless of input size, you'll be able 
  to get the same results in the same amount of time.


  b) this algorithm is O(n) because the output is directly proportionate to the input size. 


2) the big O of the below function is O(1) because the output complexity is the same every time.

  function isEven(value) {
    if (value % 2 == 0) {
        return true;
    }
    else
        return false;
    }
}


3) the big o is O(n^2) becuase the output complexity will increase exponentially as the size of the arrays do.

  function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}

4) the big o is O(n) becuase it just preforms 1 operation per iteration

  function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

5) the big o is O(n) becuase if the array gets bigger it takes proportionally longer to find the item

  function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

6) the big o is O(n^2) because there are nested loops

  function createPairs(arr) {
      for (let i = 0; i < arr.length; i++) {
          for(let j = i + 1; j < arr.length; j++) {
              console.log(arr[i] + ", " +  arr[j] );
          }
      }
  }

7) the runtime complexity is O(n) because the for loop is running a number of times equal to the input.
this function will take a number(num) and run through a loop starting at 1, and ending 1 before our value. 
the output of the function will be an array, that simulates the fibonacci sequence up to (num)

compute(6) ----> [0,1,1,2,3] 

  function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {
        if (i === 1) {
            result.push(0);
    
        }
        else if (i == 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
  }


8) O(log n) because the function actively reduces the input size.

function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
  }

9) O(1) because regardless of the input size, there is only 1 operation.
  
  function findRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
  }


10) checking if a number is prime (if it has any divisors)
    the big o is O(n), because the for loop has a number of iterations equal to 10

  function isWhat(n) {
    if (n < 2 || n % 1 != 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i == 0) return false;  
    }
    return true;
  }

11) 

rod a = [7,5,3]
rod b = []
rob c = []
*/
//compare last element in a then push element to b or c


const rod_a = [7, 5, 3];
//disk, starting, dest, midpoint


function tower(arr) {
  const rod_b = []; 
  const rod_c = []; 
  const rods = [arr, rod_b, rod_c];
  //base case
  if(rod_c[0] > rod_c[1] && rod_c[1] > rod_c[2]) {
    return rods;
  }

  if(rod_a[0][0] > rod_a[0][1] > rod_a[0][2] > rod_a[0][3])


}




/*
tower(rod_a)

rod a = []
rod b = []
rob c = [7,5,3]

*/

