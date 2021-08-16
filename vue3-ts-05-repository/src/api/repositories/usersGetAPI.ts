import * as data from "@/__mocks__/data-users-get-api.json";

// user type declaration
export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

// function return type declaration
export type UsersGetAPIRet = Array<User>;

// function type signature
export type UsersGetAPI = () => UsersGetAPIRet;

// function definition
const usersGetAPI: UsersGetAPI = () => {
  return data;
};

export default usersGetAPI;
