import { useContext, useState, useEffect } from "react";
import { MyContext } from "../../context";
import { TodoI } from "../models/Todo";
import API from "../shared/Api/API";
import '../../style/todo.css'


export default function TodoItem({todo} : {todo : TodoI}){
    const {state, dispatch} = useContext(MyContext)
    const [editMode, setMode] = useState(false);
    const [title, setTitle] = useState(todo.title)
    const [body, setBody] = useState(todo.body)

    const getTodos = () => {
        API.get('').then((r) => {
            dispatch({type: "get", payload: r.data})
        })
    }

    useEffect(() => {
        getTodos()
    },[])


    return <>
    <div className="todo-item">
        <div>
        <div>Title:{editMode ? <input type="text" value={title} onChange={(e) =>  setTitle(e.target.value)}/> : todo.title}</div>
            <div>Body:{editMode ? <input type="text" value={body} onChange={(e) => setBody(e.target.value)}/> : todo.body}</div>
            {
                editMode  ? <button onClick={() => API.put(`http://localhost:3000/todos/${todo.id}`, todo).then((r) => {dispatch({type:"update", payload: {id: todo.id, title,body} }); setMode(false)})}>save</button> : ''
            }
        </div>
        
        <div className="btn-container">
        <button className="edit-btn" onClick={() => setMode(!editMode)}>Edit</button>
        {
            state.role === 'admin' ? <button className="delete-btn" onClick={() => API.delete(`http://localhost:3000/todos/${todo.id}`).then((r) => {dispatch({type:"delete", payload: r.data}); getTodos()})}>Delete</button> : ''
        }
        </div>
    </div>
    </>
    
    
}