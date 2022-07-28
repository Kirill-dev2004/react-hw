import React, {  useEffect, useState } from "react";
import api from "../../utils/api";
import TodoItem from "./item";
import { TodoActionType, TodoI } from "./type";
import "../styles/container-list.css"


export default function TodoList() {
  const [todos, setTodos] = useState();
  useEffect(() => {
    api.get("todos").then((r) => setTodos(r.data.reverse()));
  }, []);
  function onTodoAction(id: string, type: TodoActionType): void {}
  return (
    <div className="container-list">
      {todos &&
        (todos as TodoI[]).map<JSX.Element>((e) => (
          <TodoItem key={e.id} cb={onTodoAction} todo={e}></TodoItem>
        ))}
    </div>
  );
}

// Dispatch, SetStateAction,
