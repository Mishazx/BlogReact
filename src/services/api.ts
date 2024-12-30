import axios from 'axios';
import { Post, Comment } from '../types';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get(`${BASE_URL}/posts`);
  return response.data;
};

export const fetchPostById = async (id: number): Promise<Post> => {
  const response = await axios.get(`${BASE_URL}/posts/${id}`);
  return response.data;
};

export const fetchCommentsByPostId = async (postId: number): Promise<Comment[]> => {
  const response = await axios.get(`${BASE_URL}/posts/${postId}/comments`);
  return response.data;
};
