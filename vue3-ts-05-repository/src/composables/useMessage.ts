import { computed, ref, ComputedRef, Ref } from "vue";

// function type signature
type ClickHandler = () => void;

// return type declaration
type UseMessageRet = {
  message: Ref<string>;
  reverseMessage: ComputedRef<string>;
  clickHandler: ClickHandler;
};

// function type signature
type UseMessage = () => UseMessageRet;

// function definition
export const useMessage: UseMessage = () => {
  const message = ref("Hello, World!");
  const reverseMessage = computed(() =>
    message.value.split("").reverse().join("")
  );
  const clickHandler = () => {
    console.log(message.value);
  };
  return {
    message,
    reverseMessage,
    clickHandler,
  };
};
