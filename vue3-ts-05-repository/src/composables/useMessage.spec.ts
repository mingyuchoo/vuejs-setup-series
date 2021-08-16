import { useMessage } from "@/composables/useMessage";

describe("useMessage.ts", () => {
  it("should return initial state", () => {
    const { message, reverseMessage, clickHandler } = useMessage();
    expect(message.value).toBe("Hello, World!");
    expect(reverseMessage.value).toBe("!dlroW ,olleH");
    expect(clickHandler()).toBeCalled;
  });
});
