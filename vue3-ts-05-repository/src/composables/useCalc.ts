import { computed, ComputedRef, reactive } from "vue";
import { UnwrapNestedRefs } from "@vue/reactivity";

// type declaration
type State = UnwrapNestedRefs<{
  num1: string;
  num2: string;
  result: ComputedRef<number>;
}>;

// return type declaration
type StateRet = {
  state: State;
};

// function type signature
type UseCalc = () => StateRet;

// function definition
export const useCalc: UseCalc = () => {
  const state: State = reactive({
    num1: "0",
    num2: "0",
    result: computed(() => parseInt(state.num1) + parseInt(state.num2)),
  });
  return {
    state,
  };
};
