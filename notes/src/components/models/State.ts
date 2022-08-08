import { TodoI } from "./Todo";

export type Role = 'admin' | 'user'

export interface State {
    role: Role;
    todos: TodoI[];
    currentTodo: TodoI | null;
}