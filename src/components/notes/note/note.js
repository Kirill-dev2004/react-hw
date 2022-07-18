

import { useState } from 'react'
import AppInput from '../../../shared-components/input-header'
import './note-styles.css'

export default function Note({note, edit}){
    const [isEdit, setEditMode] = useState(false)
    const [editedNote, setNote] = useState(note)

    function setProperty(e){
        setNote({...editedNote,title: e.target.value}) 
     }

    return <>   
            <div onClick={() => setEditMode(true)} className="note-item">
                {
                    isEdit ? <AppInput onBlur={() => {setEditMode(false); edit(editedNote)}}  value={editedNote.title} onChange={setProperty}></AppInput> : <div>Title: {note.title ? note.title: "There is no note"}</div>
                }
            </div>
    </>
}