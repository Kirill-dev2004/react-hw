import { useContext } from "react";
import { MyContext } from "../context";
import CreateTodo from "./todos/create-todo";
import Todolist from "./todos/todo-list";
import '../style/input-btn.css'


export default function Layout(){
    const {state, dispatch} = useContext(MyContext)
    return <div>
        <div>
            <CreateTodo></CreateTodo>
            <button className="change-role" onClick={() => {dispatch({type: 'role', payload: state.role === 'admin' ? 'user' : 'admin'})}}>{state.role}</button>
        </div>
        <Todolist></Todolist>
    </div>
}