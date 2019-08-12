/* https://projecteuler.net/problem=3

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

const findSmallestPrime = (num: number) => {
  let i = 2;
  while (i < Math.sqrt(num)) {
    if (num % i === 0) {
      return i;
    }
    i++;
  }
  return num;
};

// First attempt before I knew what Prime Factorization was...very slow
// export const problem3 = () => {
//   const targetNumber = 600851475143;
//   let increment = 3;
//   let largestPrimeFactor = -1;
//   do {
//     if (isPrime(increment) && targetNumber % increment === 0) {
//       largestPrimeFactor = increment;
//     }
//     increment++;
//   } while (increment < targetNumber);
//   return largestPrimeFactor;
// };

// 8462696833 > 10086647 > 6857
export const problem3 = () => {
  let greatestPrimeFactor = 600851475143;
  while (true) {
    const smallestPrimeFactor = findSmallestPrime(greatestPrimeFactor);
    if (smallestPrimeFactor < greatestPrimeFactor) {
      greatestPrimeFactor = greatestPrimeFactor / smallestPrimeFactor;
    } else {
      return greatestPrimeFactor;
    }
  }
};
