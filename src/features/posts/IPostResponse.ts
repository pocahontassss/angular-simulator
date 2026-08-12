import { IPost } from './IPost';

export interface IPostsResponse {
  posts: IPost[];
  total: number;
  skip: number;
  limit: number;
}
