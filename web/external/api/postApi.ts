import { Post } from "@/types/types";
import { api } from ".";

export const getPosts = async (): Promise<Post[]> => {
  try {
    const postData = await api<Post[]>("/posts");
    return postData;
  } catch (error) {
    throw error;
  }
};

export const getPaginatedPosts = async (
  pageNumber: number
): Promise<Post[]> => {
  try {
    const postData = await api<Post[]>(
      `/posts/paginated?_limit=6&_page=${pageNumber}`
    );
    return postData;
  } catch (error) {
    throw error;
  }
};

export const getPost = async (id: number): Promise<Post> => {
  try {
    const postData = await api<Post>(`/posts/${id}`);
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

export const updatePost = async (id: number, data: Post): Promise<Post> => {
  try {
    const responseData = await api<Post>(`/posts/${id}`, "PUT", data);
    return responseData;
  } catch (error) {
    throw error;
  }
};

export const removePost = async (id: number) => {
  try {
    const responseData = await api<Post>(`/posts/${id}`, "DELETE");
    return responseData;
  } catch (error) {
    throw error;
  }
};
