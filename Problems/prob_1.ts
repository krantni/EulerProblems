/* https://projecteuler.net/problem=1

Desc:
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

const problem1 = () => {
  let sum = 0;
  let i = 0;
  while (i < 1000) {
    if (i % 5 === 0 || i % 3 === 0) {
      sum += i;
    }
    i++;
  }
  return sum;
};

export default problem1;