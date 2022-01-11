export interface IResource {
  id: string;
  authorname: string;
  resourcename: string;
  url: string;
  description: string;
  tags: string[];
  contenttype: string;
  contentstage: string;
  postedbyuserid: string;
  isrecommended: string;
  creationdate: string;
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
