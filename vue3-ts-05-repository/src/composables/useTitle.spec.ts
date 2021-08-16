import { useTitle } from "@/composables/useTitle";

describe("useTitle.ts", () => {
  it("should return initial state", () => {
    const { title, onClick } = useTitle();
    expect(title.value).toBe("World");
    expect(onClick()).toBeCalled;
  });
});
