import fetchUserRepositories from "@/api/repositories/fetchUserRepositories";
import { ref, onMounted } from "vue";

export const useUserRepositories = () => {
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
