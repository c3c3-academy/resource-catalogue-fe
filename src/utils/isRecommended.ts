export function isRecommended(recommendation: string): string {
  if (recommendation === "good") {
    return "I recommend this resource after having used it";
  } else if (recommendation === "bad") {
    return "I do not recommend this resource, having used it";
  } else {
    return "I haven't used this resource but it looks promising";
  }
}
