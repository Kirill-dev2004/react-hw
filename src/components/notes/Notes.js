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
        api.put(`http://localhost:3000/notes/${editNote.id}`, editNote).then((r) => setEditNote(notes.map((n) => n.id === editNote.id ? {...r.data} : n)), getNotes())
    }
}, [editNote])

const onNoteCreate = (note) =>{
    setNewNote(note) 
}

const onNoteDelete = (id) => {
    setDeleteNote(id)

}

const onNoteEdit = (note) => {
    setEditNote(note)  
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