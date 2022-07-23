import Note from "../note/note";
import '../note/note-styles.css'

export default function NotesList({notes, edit, onDelete}){
    return <>
    <div className="note-container">
        {
            notes.map((n) => <Note key={n.id} note={n} edit={() => edit(n)} onDelete={() => onDelete(n.id)}></Note>)
        }
    </div>
    </>
}