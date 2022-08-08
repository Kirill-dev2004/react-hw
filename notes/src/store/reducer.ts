import { State, Role } from "../components/models/State";
import { TodoI } from "../components/models/Todo";

type CreateTodo = {type: 'create', payload: TodoI};
type EditTodo = {type: 'update', payload: TodoI};
type GetTodos = {type: 'get', payload: TodoI[]};
type DeleteTodo = {type: 'delete', payload: number};
type ChangeRole = {type: 'role', payload: Role};

export type Action = CreateTodo | EditTodo | GetTodos | DeleteTodo | ChangeRole;


export default function Reducer(state: State, action: Action):State {
    switch(action.type){
            case "create": 
        return {...state, todos:[...state.todos, action.payload]};
            case "update": 
        return {...state, todos: state.todos.map((e) => e.id === action.payload.id ? action.payload : e)};
            case "get": 
        return {...state, todos: action.payload};
            case "delete": 
        return {...state, todos: state.todos.filter((e) => e.id !== action.payload)};
            case "role": 
        return {...state, role: action.payload}
        default: 
        return state;
    }
}