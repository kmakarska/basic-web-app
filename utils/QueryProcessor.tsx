export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrewid")) {
    return (
      "kmakarsk"
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "katie";
  }

  if (query.toLowerCase().includes("plus")) {
    const numbers = query.match(/\d+/g)?.map(Number) || [];
    if (numbers.length > 0) {
      return numbers.reduce((sum, num) => sum + num, 0).toString();
    }
  }

  if (query.toLowerCase().includes("largest")) {
    const numbers = query.match(/\d+/g)?.map(Number) || [];
    if (numbers.length > 0) {
      return Math.max(...numbers).toString();
    }
  }

  if (query.toLowerCase().includes("both a square and a cube")) {
    const numbers = query.match(/\d+/g)?.map(Number) || [];
    const perfectSixthPowers = numbers.filter(num => {
      const root = Math.round(num ** (1 / 6)); // Check sixth root
      return root ** 6 === num;
    });

    return perfectSixthPowers.join(", ") || "None";
  }

  if (query.toLowerCase().includes("multiplied by")) {
    const numbers = query.match(/\d+/g)?.map(Number) || [];
    if (numbers.length === 2) {
      return (numbers[0] * numbers[1]).toString();
    }
  }

  if (query.toLowerCase().includes("minus")) {
    const numbers = query.match(/\d+/g)?.map(Number) || [];
    if (numbers.length === 2) {
      return (numbers[0] - numbers[1]).toString();
    }
  }

  // primes
  if (query.toLowerCase().includes("primes")) {
    const numbers = query.match(/\d+/g)?.map(Number) || [];

    const isPrime = (num: number): boolean => {
      if (num < 2) return false;
      for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
      }
      return true;
    };

    const primeNumbers = numbers.filter(isPrime);
    return primeNumbers.join(", ") || "None";
  }

  // power
  function bigIntPower(base: bigint, exponent: bigint): bigint {
    let result = BigInt(1);
    while (exponent > 0) {
      if (exponent % BigInt(2) === BigInt(1)) {
        result *= base;
      }
      base *= base;
      exponent /= BigInt(2);
    }
    return result;
  }

  // Handle exponentiation (power) queries dynamically using BigInt
  if (query.toLowerCase().includes("to the power of")) {
    const numbers = query.match(/\d+/g)?.map(BigInt) || [];
    if (numbers.length === 2) {
      return bigIntPower(numbers[0], numbers[1]).toString(); // Convert BigInt result to string
    }
  }



  return "";
}
