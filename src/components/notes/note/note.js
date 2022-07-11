
import './note-styles.css'

export default function Note({note, onEdit}){
    return <>
            <div onClick={onEdit} className='note-item'>
                <div>Title: {note.title ? note.title: "There is no note"}</div>
            </div>
    </>
}