export function isRecommended(recommendation: string): string {
  if (recommendation === "good") {
    return "👍";
  } else if (recommendation === "bad") {
    return "👎";
  } else {
    return "🤷";
  }
}
