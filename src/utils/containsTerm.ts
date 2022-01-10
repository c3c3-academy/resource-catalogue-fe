export function containsTerm(
  searchedTerm: string,
  resourceElement: string
): boolean {
  return resourceElement.toLowerCase().includes(searchedTerm.toLowerCase());
}
