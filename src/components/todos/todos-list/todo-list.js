import Todo from "../todo/todo";


export default function TodosList({todos, edit, onDelete, onComplete}){
    return <>
        {
            todos.map(t => <Todo key={t.id} todo={t} onDelete={() => onDelete(t.id)} onEdit={() => edit(t)} onComplete={() => onComplete(t.id)}></Todo>)
        }
    </>
}