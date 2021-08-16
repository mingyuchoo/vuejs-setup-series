import { useCalc } from "@/composables/useCalc";

describe("useCalc.ts", () => {
  it("should return initial state", () => {
    const { state } = useCalc();
    expect(state.num1).toBe("0");
    expect(state.num2).toBe("0");
    expect(state.result).toBe(0);
  });
  it("should return num1 as 1, num2 as 2", () => {
    const { state } = useCalc();
    state.num1 = "1";
    state.num2 = "2";
    expect(state.num1).toBe("1");
    expect(state.num2).toBe("2");
    expect(state.result).toBe(3);
  });
});
