import { IUser } from "./Interfaces";

export default function getusername(
  userList: IUser[],
  idToCheck: number
): string {
  console.log(`user list: ${userList[0]}, idTocheck: ${idToCheck}`);
  const filteredList = userList.filter((user) => user.id === idToCheck);

  return filteredList[0].name;
}
