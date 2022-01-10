export interface IResource {
  resourceName: string;
  authorName: string;
  url: string;
  description: string;
  contentType: string;
  contentStage: string;
  postedByUserId: number;
  isRecommend: string;
  reason: string;
}

export interface ITag {
  id: number;
  category: string;
}

export interface IUser {
  id: number;
  name: string;
  isFaculty: boolean;
}
