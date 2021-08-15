import { useAxios } from "@vue-composable/axios";
import { AxiosRequestConfig } from "axios";
import { ComputedRef, Ref } from "vue";

// user type declaration
export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

// function return type declaration
export type PostsGetAPIRet = Promise<{
  data: ComputedRef<Post[]>;
  loading: Ref<boolean>;
  error: Ref<any>;
  status: Ref<number | null>;
}>;

// function type signature
export type PostsGetAPI = () => PostsGetAPIRet;

// function definition
const postsGetAPI: PostsGetAPI = async () => {
  const HTTP_METHOD = "GET";
  const SERVER_URL = "https://jsonplaceholder.typicode.com";
  const SERVICE_PATH = "/posts";

  const request: AxiosRequestConfig = {
    method: HTTP_METHOD,
    url: SERVER_URL + SERVICE_PATH,
  };
  const { exec, data, loading, error, status } = useAxios();

  await exec(request);

  return {
    data,
    loading,
    error,
    status,
  };
};

export default postsGetAPI;
