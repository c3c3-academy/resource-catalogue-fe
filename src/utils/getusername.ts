import { IUser } from "./Interfaces";

export default function getusername(
  userList: IUser[],
  idToCheck: number
): string {
  const filteredList = userList.filter((user) => user.id === idToCheck);

  return filteredList[0].name;
}
