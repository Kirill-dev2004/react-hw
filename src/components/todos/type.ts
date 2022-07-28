import { BaseEntity } from "../../utils/types";

export interface TodoI extends BaseEntity {
  title: string;
  body: string;
  isComplete: boolean;
}

export interface TodoItemPropsI {
  todo: TodoI;
  cb: (id: string, type: TodoActionType) => void;
}

export type TodoActionType = "complete" | "delete";
