import usersGetAPI from "@/api/repositories/usersGetAPI";
import * as data from "@/__mocks__/data-users-get-api.json";

describe("usersGetAPI.ts", () => {
  it("usersGetAPI", () => {
    const actualData = usersGetAPI();
    const expectedData = data;
    expect(actualData).toEqual(expectedData);
  });
});
