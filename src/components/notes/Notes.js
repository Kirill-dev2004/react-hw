import React from "react";
import NoteCreate from "./note-create/note-create";
import NotesList from "./note-list/note-list";

const notes=[
    {
        id:1,
        title: 'Some notes'
    },
    {
        id:2,
        title: 'Some notes'
    },
    {
        id:3,
        title: 'Some notes'
    }

]
export default class NotesComponents extends React.Component{
    constructor(props){
        super(props)
        this.state={
            currentNote: null,
            notes,
            isEdit: false,
            isCreate: false,
        }

        this.onNoteCreate = this.onNoteCreate.bind(this)
        this.onNoteEdit = this.onNoteEdit.bind(this)
    }

    render(){
        return (
            <>
            <div>
                <NoteCreate cb={this.onNoteCreate}></NoteCreate>
            </div>
            <NotesList notes={this.state.notes} edit={this.onNoteEdit}></NotesList>
            </>   
        )
    }

    onNoteCreate(note){
        this.setState({...this.state, notes:[...this.state.notes , {...note, id: Date.now()}], isCreate:false}) 
    }

    onNoteEdit(note){
         this.setState({...this.state, currentNote: note, isEdit:true})
    }
}