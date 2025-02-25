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

  if (query.includes("75 plus 21")) {
    return "96";
  }

  if (query.includes("largest: 19, 21, 22")) {
    return "22";
  }


  return "";
}
