import React from "react";
import NoteCreate from "./note-create/note-create";
import NotesList from "./note-list/note-list";
import { useState, useEffect } from "react";
import api from "../../shared-components/api/api"

export default function NotesComponents(){

const [notes, setNotes] = useState([])
const [newNote, setNewNote] = useState(null)
const [deleteNote, setDeleteNote] = useState(null)
const [editNote, setEditNote] = useState(null)

const getNotes = () => {
    api.get().then((r) => setNotes(r.data))
}

useEffect(() => {
    // api.get().then((r) => setNotes(r.data))
    getNotes()
}, [])

useEffect(() => {
    if(newNote){
        api.post('', newNote).then((r) => setNotes([...notes, r.data]))
    }  
}, [newNote])

useEffect(() => {
    if(deleteNote){
        api.delete(`http://localhost:3000/notes/${deleteNote}`).then((r) => (r.data), getNotes())

    }
}, [deleteNote])

useEffect(() => {
    if(editNote){
        console.log(editNote.id)
        api.put(`http://localhost:3000/notes/${editNote.id}`, editNote).then((r) => console.log(r.data))
    }
}, [editNote])

// setEditNote(notes.map((n) => n.id === editNote.id ? {...r.data} : n))

const onNoteCreate = (note) =>{
    setNewNote(note) 
}

const onNoteDelete = (id) => {
    setDeleteNote(id)

}

const onNoteEdit = (note) => {
        // setNotes({notes: [...notes.notes.map((n) => n.id === note.id ? note : n)]})   
        setEditNote(note)  
        console.log(note) 
}

return (
    <>
        <div>
            <NoteCreate cb={onNoteCreate}></NoteCreate>
        </div>
            <NotesList notes={notes} edit={onNoteEdit} onDelete={onNoteDelete}></NotesList>
    </>   
)
}