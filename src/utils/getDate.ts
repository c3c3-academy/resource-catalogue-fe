export function getDate(timestamp: string): string {
  const day = timestamp.slice(8, 10);
  const month = timestamp.slice(5, 7);
  const year = timestamp.slice(0, 4);
  return day + "/" + month + "/" + year;
}
