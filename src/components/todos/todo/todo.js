import AppButton from "../../../shared-components/button";
import AppDelete from "../../../shared-components/delete-cross";
import './todo-style.css'

export default function Todo({todo, onEdit, onDelete, onComplete}){
    return <>
        <div className={todo.isComplete ? 'todo' : ' todo complete'}>
            <div>{todo.title}</div>
            <div>{todo.body}</div>
            <div className="buttons-container">
                <AppButton cb={onEdit}>Edit</AppButton>
                <AppButton cb={onComplete}>Complete</AppButton>
            </div>
        <AppDelete cb={onDelete}>X</AppDelete>
        </div>
    </>
}