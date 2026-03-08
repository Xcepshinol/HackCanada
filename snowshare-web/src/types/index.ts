export type User = {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
};

export type Post = {
  id: string;
  title: string;
  content: string;
  author: User;
  createdAt: string;
};

export type Comment = {
  id: string;
  postId: string;
  author: User;
  content: string;
  createdAt: string;
};

export type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};