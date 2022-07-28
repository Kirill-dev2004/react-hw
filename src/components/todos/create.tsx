import { useState } from "react";
import api from "../../utils/api";
import { TodoI } from "./type";
import { useNavigate } from "react-router-dom";
import "../styles/form.css"
export default function CreateTodo() {
  const navigate = useNavigate();
  const initialState: TodoI = { title: "", body: "", isComplete: false };
  const [todo, setTodo] = useState(initialState);
  function onCreateTodo(): void {
    api.post("todos/", todo).then((r) => navigate("/todos/list"));
  }
  return (
    <div className="form">
      <input
        type="text"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <input
        type="text"
        value={todo.body}
        onChange={(e) => setTodo({ ...todo, body: e.target.value })}
      />
      <button onClick={onCreateTodo}>Create Todo</button>
    </div>
  );
}
