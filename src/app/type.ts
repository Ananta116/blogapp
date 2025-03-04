export interface IUser {
  username: string;
  email: string;
  password: string;
}

export interface BlogInput {
  title: string;
  category: string;
  content: string;
  thumbnail: string;
}
export interface IAuthor {
  objectId: string;
  name: string;
  email: string;
}

export interface IBlog {
    objectId:string;
    title: string;
    category: string;
    content:string;
    thumbnail:string;
    author:IAuthor;
}
