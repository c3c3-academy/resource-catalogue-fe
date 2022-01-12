import { IUser } from "./Interfaces";

export default function getusername(
  userList: IUser[],
  idToCheck: number | string
): string {
  if (typeof idToCheck === "string") {
    idToCheck = parseInt(idToCheck);
  }
  const filteredList = userList.filter((user) => user.id === idToCheck);

  return filteredList.length === 0 ? "unknown" : filteredList[0].name;
}
