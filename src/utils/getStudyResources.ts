import { IResource, IToStudy } from "./Interfaces";

export function getStudyResources(
  studyIds: IToStudy[],
  resources: IResource[]
): IResource[] {
  const toStudyResources = [];
  for (const studyId of studyIds) {
    const studyResource = resources.filter(
      (resource) => resource.id === studyId.resourceid
    );
    if (studyResource.length !== 0) {
      toStudyResources.push(studyResource[0]);
    }
  }
  return toStudyResources;
}
