/* https://projecteuler.net/problem=4

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

const isPalindrome = (num: number) => {
  const numberAsString = num.toString();
  return (
    numberAsString ===
    numberAsString
      .split('')
      .reverse()
      .join('')
  );
};

export const problem4 = () => {
  let firstNumber = 100;
  let secondNumber = 100;
  let maxPalindrome = -1;
  while (firstNumber < 1000) {
    while (secondNumber < 1000) {
      const product = firstNumber * secondNumber;
      if (isPalindrome(product) && product > maxPalindrome) {
        maxPalindrome = product;
      }
      secondNumber++;
    }
    secondNumber = 99;
    firstNumber++;
  }
  return maxPalindrome;
};
