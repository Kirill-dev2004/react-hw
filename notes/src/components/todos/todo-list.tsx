import { useContext, useEffect } from "react"
import { MyContext } from "../../context"
import api from "../shared/Api/API"
import TodoItem from "./todo"



export default function Todolist(){
    const {state, dispatch} = useContext(MyContext)
    useEffect(() => {
        api.get('').then((r) => {
            dispatch({type: "get", payload: r.data})
        })
    },[])
    return <div className="todo-container">
        {
            state.todos.length &&  state.todos.map((t) => <TodoItem key={t.id} todo={t}></TodoItem>)
        }
    </div>
}