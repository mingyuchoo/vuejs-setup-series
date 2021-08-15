import fetchUserRepositories from "@/api/repositories/fetchUserRepositories";
import { ref, onMounted, Ref } from "vue";

// function type signature
type GetUserRepositorie = () => void;

// return type
type UseUserRepositoriesRet = {
  repositories: Ref<never[]>;
  getUserRepositories: GetUserRepositorie;
};

// function type signature
type UseUserRepositories = () => UseUserRepositoriesRet;

// function definition
export const useUserRepositories: UseUserRepositories = () => {
  const repositories = ref([]);
  const getUserRepositories = () => {
    repositories.value = fetchUserRepositories() as never[];
  };
  onMounted(getUserRepositories);
  return {
    repositories,
    getUserRepositories,
  };
};
