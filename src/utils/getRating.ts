import { IInteraction } from "./Interfaces";

export function getRating(
  resourceId: number,
  userId: string | null,
  interactions: IInteraction[]
): number {
  const filtered = interactions.filter(
    (interaction) =>
      interaction.userid === parseInt(userId ? userId : "0") &&
      interaction.resourceid === resourceId
  );
  return filtered.length !== 0 ? filtered[0].rating : 0;
}
