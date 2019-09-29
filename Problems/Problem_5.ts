/* https://projecteuler.net/problem=5

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

/*
Notes:
Since the result has to be divisible by 20, we can only consider multiples of 20.
The numbers that multiply into 20 can be removed (1, 2, 4, 5, 10).
Same for 18 - (1, 2, 3, 6, 9)
Same for 16 - (1, 2, 8)
Same for 14 - (1, 2, 7)
*/

export const problem5 = () => {
  let isDivisibleByAll = false;
  let i = 20;
  while (!isDivisibleByAll) {
    if (
      i % 20 === 0 &&
      i % 19 === 0 &&
      i % 18 === 0 &&
      i % 17 === 0 &&
      i % 16 === 0 &&
      i % 15 === 0 &&
      i % 14 === 0 &&
      i % 13 === 0 &&
      i % 12 === 0 &&
      i % 11 === 0
    ) {
      isDivisibleByAll = true;
    } else {
      i = i + 20;
    }
  }
  return i;
};
