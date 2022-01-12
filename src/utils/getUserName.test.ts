import getusername from "./getusername";
import { IUser } from "./Interfaces";

const mockUserList: IUser[] = [
  {
    id: 1,
    name: "Emma",
    isFaculty: false,
  },
  {
    id: 2,
    name: "Toye",
    isFaculty: false,
  },
  {
    id: 3,
    name: "Raj",
    isFaculty: false,
  },
  {
    id: 4,
    name: "Alisa",
    isFaculty: false,
  },
  {
    id: 5,
    name: "Beri",
    isFaculty: false,
  },
  {
    id: 6,
    name: "Chris",
    isFaculty: false,
  },
  {
    id: 7,
    name: "Veta",
    isFaculty: false,
  },
  {
    id: 8,
    name: "David",
    isFaculty: false,
  },
];

test("Check datatype is a string", () => {
  expect(typeof getusername(mockUserList, 6)).toBe("string");
  expect(typeof getusername(mockUserList, 2)).toBe("string");
  expect(typeof getusername(mockUserList, 17)).toBe("string");
});

test("Check correct username is returned", () => {
  expect(getusername(mockUserList, 5)).toBe("Beri");
  expect(getusername(mockUserList, 1)).toBe("Emma");
  expect(getusername(mockUserList, 8)).toBe("David");
});

test("Check if username for id doesn't exist returns unknown", () => {
  expect(getusername(mockUserList, 67)).toBe("unknown");
  expect(getusername(mockUserList, -25)).toBe("unknown");
  expect(getusername(mockUserList, 0)).toBe("unknown");
});

test("Check if the id is a string, username is returned", () => {
  expect(getusername(mockUserList, "1")).toBe("Emma");
  expect(getusername(mockUserList, "2")).toBe("Toye");
  expect(getusername(mockUserList, "7")).toBe("Veta");
});
