export interface IPost {
  body: string;
  id: number;
  title: string;
  reactions: {
    likes: number;
    dislikes: number;
  };
  tags: string[];
  userId: number;
  views: number;
}
