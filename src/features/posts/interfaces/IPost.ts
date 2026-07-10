export interface IPost {
  id: number;
  title: string;
  tags: string[];
  views: number;
  body: string;
  author: string;
  userId?: number;
}