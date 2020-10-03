import axios from 'axios';
import IPost from "../models/IPost";

const jsonInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

export const jsonClient = {
  getPosts: async () => await jsonInstance.get<IPost[]>('/posts')
}
