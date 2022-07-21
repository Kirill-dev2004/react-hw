import React from "react";
import NoteCreate from "./note-create/note-create";
import NotesList from "./note-list/note-list";
import { useState, useEffect } from "react";
import api from "../../shared-components/api/api"

export default function NotesComponents(){
    
const [notes, setNotes] = useState([])
const [newNote, setNewNote] = useState(null)
const [deleteNote, setDeleteNote] = useState(null)

useEffect(() => {
        api.get().then((r) => setNotes(r.data))
}, [])

useEffect(() => {
    if(newNote){
        api.post('', newNote).then((r) => {setNewNote(null); setNotes([...notes, r.data])})
    }  
}, [newNote])

// useEffect(() => {
//     if(deleteNote){
//         api.delete('', deleteNote).then((r) => console.log(r.data))
//     }
// }, [deleteNote])

    const onNoteCreate = (note) =>{
        setNewNote(note) 
    }

    const onNoteDelete = (id) => {
        // this.setState({...this.state, todos: this.state.todos.filter(t => t.id !== id)})
        console.log('delete')
        // setDeleteNote(id)
    }

    const onNoteEdit = (note) => {
        // setNotes({notes: [...notes.notes.map((n) => n.id === note.id ? note : n)]})     
        console.log(notes)    
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

    // edit={onNoteEdit}



















    // const notes=[
//     // {
//     //     id:1,
//     //     title: 'Some notes'
//     // },
//     // {
//     //     id:2,
//     //     title: 'Some notes'
//     // },
//     // {
//     //     id:3,
//     //     title: 'Some notes'
//     // }

// ]


// export default class NotesComponents extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             currentNote: null,
//             notes,
//             isEdit: false,
//             isCreate: false,
//         }

//         this.onNoteCreate = this.onNoteCreate.bind(this)
//         this.onNoteEdit = this.onNoteEdit.bind(this)
//     }

//     render(){
//         return (
//             <>
//             <div>
//                 <NoteCreate cb={this.onNoteCreate}></NoteCreate>
//             </div>
//             <NotesList notes={this.state.notes} edit={this.onNoteEdit}></NotesList>
//             </>   
//         )
//     }

//     onNoteCreate(note){
//         this.setState({...this.state, notes:[...this.state.notes , {...note, id: Date.now()}], isCreate:false}) 
//     }

//     onNoteEdit(note){
//          this.setState({...this.state, isEdit:true, notes: [...this.state.notes.map((n) => n.id === note.id ? note : n)]})
         
//     }
// }