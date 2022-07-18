

import { useState } from 'react'
import AppInput from '../../../shared-components/input-header'
import './note-styles.css'


export default function Note({note, edit}){
    const [isEdit, setEditMode] = useState(false)
    const [editetNote, setNote] = useState(note)

    function setProperty(e){
        setNote({title: e.target.value}) 
     }

    return <>   
            <div onClick={() => setEditMode(true)} className="note-item">
                {
                    isEdit ? <AppInput onBlur={() => setEditMode(false)}  value={editetNote.title} onChange={setProperty}></AppInput> : <div>Title: {note.title ? note.title: "There is no note"}</div>
                }
            </div>
    </>
}