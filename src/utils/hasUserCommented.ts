import { IInteraction } from "./Interfaces";

export function hasUserCommented(resourceId: number, userId: string | null, interactions: IInteraction[]):boolean {
    return interactions.filter((interaction) => interaction.userid===parseInt(userId ? userId : "0") && interaction.resourceid===resourceId).length!==0
}