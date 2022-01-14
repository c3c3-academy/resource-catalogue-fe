import { IInteraction } from "./Interfaces";

export function hasUserCommented(resourceId: number, userId: string, interactions: IInteraction[]):boolean {
    //loop through interactions and check if interaction.userid is equal to userId
    //and the same for resourceId
    return interactions.filter((interaction) => interaction.userid===parseInt(userId) && interaction.resourceid===resourceId).length!==0
}