import postsGetAPI from "@/api/repositories/postsGetAPI";

// Added for mocking
import * as data from "@/__mocks__/data-posts-get-api.json";

describe("postsGetAPI.ts", () => {
  it("postsGetAPI", async () => {
    const actualData = await postsGetAPI();
    const expectedData = data;

    expect(actualData.data.value).toEqual(expectedData.data);
    expect(actualData.loading.value).toEqual(expectedData.loading);
    expect(actualData.error.value).toEqual(expectedData.error);
    expect(actualData.status.value).toEqual(expectedData.status);
  });
});
