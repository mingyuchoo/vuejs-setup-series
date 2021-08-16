import { useUsers } from "@/composables/useUsers";

// Added for mocking
import * as data from "./__mocks__/data-users-get-api.json";
import usersGetAPI, { UsersGetAPIRet } from "@/api/repositories/usersGetAPI";
jest.mock("@/api/repositories/usersGetAPI");

describe("useUsers.ts", () => {
  // Implemented mock function
  beforeAll(() => {
    const mockFn = usersGetAPI as jest.Mock<UsersGetAPIRet>;
    mockFn.mockImplementation(() => data);
  });

  it("should return initial state", () => {
    const { repositories, getUsers } = useUsers();
    expect(repositories.value).toEqual([]);
    expect(getUsers()).toBeCalled;
  });

  it("should return state", () => {
    const { repositories, getUsers } = useUsers();
    const expectedData = data;

    expect(getUsers()).toBeCalled;
    expect(repositories.value).toEqual(expectedData);
  });
});
