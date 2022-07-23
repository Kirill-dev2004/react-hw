

import { useState } from 'react'
import AppDelete from '../../../shared-components/delete-cross'
import AppInput from '../../../shared-components/input-header'
import './note-styles.css'

export default function Note({note, edit, onDelete}){
    const [isEdit, setEditMode] = useState(false)
    const [editedNote, setNote] = useState(note)

    function setProperty(e){
        setNote({...editedNote,title: e.target.value}) 
     }

    return <>   
            <div className="note-item">
                {
                    isEdit ? <AppInput onBlur={() => {setEditMode(false); edit(editedNote)}}  value={editedNote.title} onChange={setProperty}></AppInput> : <div onClick={() => setEditMode(true)}>Title: {note.title ? note.title: "There is no note"}</div>
                }
                <AppDelete cb={onDelete}></AppDelete>
            </div>
    </>
}
