import { Ref, ref } from "vue";

// function type signature
type OnClick = () => void;

// return type
type UseTitleRet = {
  title: Ref<string>;
  onClick: OnClick;
};

// function type signature
type UseTitle = () => UseTitleRet;

// function definition
export const useTitle: UseTitle = () => {
  const title = ref("World");
  const onClick = () => {
    console.log(title.value);
  };
  return {
    title,
    onClick,
  };
};
