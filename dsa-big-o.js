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


// function tower(disk, source, temp, desc) {
//   // const rod_b = []; 
//   // const rod_c = []; 
//   // const rods = [arr, rod_b, rod_c];


//   //base case
//   if(disk === 1) {
//     return console.log(`${source} to ${desc}`);
//   }
  
//   tower(disk -1, source, desc, temp);
//   console.log(`${source} to ${desc}`);
//   tower(disk - 1, temp, source, desc);
//   // console.log(`${temp} to ${desc}`);
//   //tower(disk, desc, source, temp);


  

// }

// tower(3, 'a', 'b', 'c');


//1. Counting Sheep(iterative)


function countingSheep(num){

  for(let i=0; i < num; i++){
    console.log(`${num -i}, Another sheep jumped over the fence`); 
  }
  console.log('All sheep jumped over the fence');

}

// Big O = Linear

// countingSheep(5);


function powerCalculator(base, exponent) {
  if (exponent < 0){
    return 'Exponent should be greater than or equal to 0';
  }

  
  let result = base;

  for (let i=1; i < exponent; i++){
    result = result * base;
  }

  return result;
}

// Big O = linear


function reverseString(str){
  return str.split('').reverse().join('');

  

}

// Big 0 = Constant or O(1)

// console.log(reverseString('Hello'));


function nthTriangle(num){
  let sum = num;
  for(let i= 1; i < num; i++){
    sum+=i;
  }

  return sum;

}

// Big O = Linear

// console.log(nthTriangle(5));

function fibonacci(num){
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i === 1) {
      result.push(1);
    
    }
    else if (i === 2) {
      result.push(1);
    }
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  return result.join(',');

}

//Big O is Linear;

// console.log(fibonacci(7));

function factorial(num){
  let result = num;
  for (let i = 1; i < num; i++){
    result = result * i;
  }

  return result;
}

//Big O is Linear

// console.log(factorial(5));



//1. Sheep Recursive -- Linear

//2 PowerCalculator -- Linear

//3. ReverseString -- Linear

//4. nthTriangle(Recursive) -- Linear

//5. stringSplitter(Recursive) -- Linear

//6.  Fibonacci(recursive) -- Linear

//7.  Factorial(recursive) -- Linear

//8.  Maze(recursive) --- Linear

//9. Maze(recursive) -- Polynomial

//10. Anagrams(recursive) -- Polynomial

//11.  Organization Chart -- Logarithmic

//12. BinaryRep -- Logarithmic



