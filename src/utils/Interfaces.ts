export interface IResource {
  id: number;
  resourcename: string;
  authorname: string;
  url: string;
  description: string;
  contenttype: string;
  contentstage: string;
  postedbyuserid: number;
  isrecommended: string;
  reason: string;
  creationdate: string;
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
