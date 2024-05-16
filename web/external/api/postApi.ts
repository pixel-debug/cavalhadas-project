import { Post } from "@/types/types";
import { api } from ".";

export const getPost = async () => {
  try {
    const postData = await api<Post>("/posts");
    return postData;
  } catch (error) {
    throw error;
  }
};

export const createPost = async (data: Post) => {
  try {
    const responseData = await api<Post>("/posts", "POST", data);
    return responseData;
  } catch (error) {
    throw error;
  }
};
