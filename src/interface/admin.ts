import { BoardDataType } from "./boardList";

export interface boardList {
  content: string;
  writer: string;
  title: string;
  id: number;
  comment?: string;
}

export interface readMoreType {
  state: boolean;
  id: number;
}
