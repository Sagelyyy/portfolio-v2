export interface postInterface {
  id: number;
  created_at: string;
  content: string;
  title: string;
  user: string;
  isPublished: boolean;
}

export interface commentInterface {
  id: number;
  created_at: string;
  content: string;
  post: number;
  username: string;
}
