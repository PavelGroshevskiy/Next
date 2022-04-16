export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}
[];

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IPost {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface IOptions {
  sort?: "ASC" | "DESC";
  filter: {
    name?: string;
    value: string;
  };
}
