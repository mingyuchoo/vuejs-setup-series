import usersGetAPI from "@/api/repositories/usersGetAPI";
import { ref, onMounted, Ref } from "vue";

// function type signature
type GetUsers = () => void;

// return type
type UseUsersRet = {
  repositories: Ref<never[]>;
  getUsers: GetUsers;
};

// function type signature
type UseUsers = () => UseUsersRet;

// function definition
export const useUsers: UseUsers = () => {
  const repositories = ref([]);
  const getUsers = () => {
    repositories.value = usersGetAPI() as never[];
  };
  onMounted(getUsers);
  return {
    repositories,
    getUsers,
  };
};
