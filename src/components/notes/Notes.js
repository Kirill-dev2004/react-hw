import React from "react";
import NoteCreate from "./note-create/note-create";
import NotesList from "./note-list/note-list";
import { useState, useEffect } from "react";
import api from "../../shared-components/api/api"

export default function NotesComponents(){
    const initialState = {
        notes: [],
        newNote: null,
        currentNote: null,

    }

const [state, setstate] = useState(initialState)

useEffect(() => {
    if(!state.newNote){
        api.get().then((r) => setstate({notes: r.data}))
    }else{
        api.post('', state.newNote).then((r) => setstate(...state,{notes: [...state.notes, r.data], newNote: null}))
    }
        
}, [state.notes])

    const onNoteCreate = (note) =>{
        setstate({ ...state, newNote: note}) 
    }

    const onNoteEdit =(note) => {
        setstate({notes: [...state.notes.map((n) => n.id === note.id ? note : n)]})         
    }

    return (
        <>
        <div>
            <NoteCreate cb={onNoteCreate}></NoteCreate>
        </div>
        <NotesList notes={state.notes} edit={onNoteEdit}></NotesList>
        </>   
    )
    }



















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