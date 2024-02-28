function main(factor1, factor2) {
  const memory = process.memoryUsage().heapUsed;
  let factorial = numFactorial(factor1);
  let power = 0;

  while (factorial > 0) {
    if (factorial % factor2 === 0) {
      let result = factorial / factor2;

      if (isPrime(result)) {
        return power;
      } else {
        power++;
      }
    }

    factorial = factorial / factor2;
  }

  const finalMemoryUsage = process.memoryUsage().heapUsed;
  const memoryUsed = finalMemoryUsage - memory;

  console.log(`Memory used: ${memoryUsed} bytes`);

  return power;
}

function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function numFactorial(num) {
  if (num < 0) {
    return -1;
  } else if (num === 0) {
    return 1;
  } else {
    return num * numFactorial(num - 1);
  }
}

console.log(main(17, 5));
console.log(main(15, 6));
console.log(main(20, 12));

// the task is to return the power of the factor2 after the factorial of the factor1 was divided to factor2 that many times until it becomes a prime number
