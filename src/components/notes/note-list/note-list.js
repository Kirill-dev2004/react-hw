import Note from "../note/note";
import '../note/note-styles.css'

export default function NotesList({notes, edit}){
    return <>
    <div className="note-container">
        {
            notes.map((n,i) => <Note key={i} note={n} edit={edit} ></Note>)
        }
    </div>
    </>
}