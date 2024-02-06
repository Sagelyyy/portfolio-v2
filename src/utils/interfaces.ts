import { Dispatch, SetStateAction } from "react";

export interface postInterface {
  id: number;
  created_at: string;
  content: string;
  title: string;
  user: string;
  isPublished: boolean;
}

export interface commentInterface {
  id?: number;
  created_at: string;
  content: string;
  post?: number;
  username: string;
}

export interface UserInterface {
  email: string | undefined;
  username: string | undefined;
}

export type UserContextType = [
  UserInterface,
  Dispatch<SetStateAction<UserInterface>>
];
