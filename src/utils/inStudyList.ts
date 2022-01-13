import { IToStudy } from "./Interfaces";

export function inStudyList(
  resourceId: number,
  userId: string | null,
  toStudyList: IToStudy[]
): boolean {
  let filtered: IToStudy[] = [];
  if (userId !== null) {
    filtered = toStudyList.filter(
      (toStudy) =>
        toStudy.userid === parseInt(userId) && toStudy.resourceid === resourceId
    );
  }
  return filtered.length === 0 ? false : true;
}
