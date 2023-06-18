//* ##### INSTRUCTIONS #####

// Problem 3: Largest prime factor
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the given number?

//* ##### EXAMPLES #####

// largestPrimeFactor(2) should return a number.
// Waiting:largestPrimeFactor(2) should return 2.
// Waiting:largestPrimeFactor(3) should return 3.
// Waiting:largestPrimeFactor(5) should return 5.
// Waiting:largestPrimeFactor(7) should return 7.
// Waiting:largestPrimeFactor(8) should return 2.
// Waiting:largestPrimeFactor(13195) should return 29.
// Waiting:largestPrimeFactor(600851475143) should return 6857.

//* ##### SOLUTION #####

function largestPrimeFactor(number) {
  let firstPrimeNumbers = [];
  let primeFactors = [];
  for (let i = 2; i <= number; i++) {
    let arr = [];
    let j = 2;

    if (firstPrimeNumbers.length < 1000) {
      while (j < i) {
        if (!(i % j)) arr.push(1);
        j++;
      }

      if (!(arr.length > 0)) firstPrimeNumbers.push(i);
    }
  }

  firstPrimeNumbers.forEach(n => {
    if (number % n === 0) primeFactors.push(n);
  });
  return primeFactors[primeFactors.length - 1];
}

console.log(largestPrimeFactor(13195))
