import postsGetAPI, { PostsGetAPIRet } from "@/api/repositories/postsGetAPI";
import { onMounted } from "vue";

// function type signature
type GetPosts = () => void;

// return type
type UsePostsRet = PostsGetAPIRet;

// function type signature
type UsePosts = () => UsePostsRet;

// function definition
export const usePosts = () => {
  let repositories = {} as UsePostsRet;

  const getPosts = async () => {
    repositories = postsGetAPI();
  };
  onMounted(getPosts);
  return {
    // repositories,
    getPosts,
  };
};
