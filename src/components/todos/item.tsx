import { TodoItemPropsI } from "./type";
import "../styles/item-todo.css"
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";

export default function TodoItem({ todo, cb }: TodoItemPropsI): JSX.Element {
  const navigate = useNavigate();
  function onEdit() {
    navigate("/todos/" + todo.id);
  }

  function onDeleteTodo():void {
    api.delete("todos/" + todo.id).then((r) => ( r.data))
  }

  // function onComplete(todo){
  //    todo.isComplete = true;
  //    api.put('',todo.id).then((r) => {
  //       if(r.userId === userId){

  //       }
  //    })
     
  // }
  return (
    <div className={todo.isComplete ? "item complete" : "item"}>
      <div>{todo.title}</div>
      <div>{todo.body}</div>
      <div className="btn-container">
        <button onClick={onDeleteTodo}>Delete</button>
        <button>Complete</button>
        <button onClick={onEdit}>Edit</button>
      </div>
    </div>
  );
}
