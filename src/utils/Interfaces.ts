export interface IResource {
  id: number;
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

export interface IToStudy {
  id: number;
  userid: number;
  resourceid: number;
}
