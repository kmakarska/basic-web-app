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
    if (numbers.length === 2) {
      return (numbers[0] + numbers[1]).toString();
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


  return "";
}
