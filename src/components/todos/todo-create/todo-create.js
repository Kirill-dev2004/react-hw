
import { useState } from "react";
import AppButton from "../../../shared-components/button";
import AppInput from "../../../shared-components/input-control";
import './todo-create.css'



export default  function TodoCreate({cb, todo = { title: '', body: '', isComplete: false}, nameButton ='Create Todo'}) {
    const [state, setstate] = useState(todo)
    // const [titleDirty, setTitleDirty] = useState(false)
    // const [bodyDirty, setBodyDirty] = useState(false)
    // const [titleError, setTitleError] = useState("Title не может быть пустым")
    // const [bodyError, setBodyError] = useState("Body не может быть")

   function setProperty(e){
    const newState = {...state}
    newState[e.target.name]= e.target.value 
        setstate(newState)
    }

    return( 
    <div className="create-container">
        {/* {(titleDirty && titleError && <div style={{color: 'red'}}>{titleError}</div>)} // хотел сделать валидацию, но что-то не вышло */}
        <AppInput  placeholder= 'Title' name={'title'} value={state.title} onChange={setProperty}></AppInput>
        {/* {(bodyDirty && bodyError && <div style={{color: 'red'}}>{bodyError}</div>)} */}
        <AppInput placeholder= 'Body' name={'body'} value={state.body} onChange={setProperty}></AppInput>
        <AppButton cb={() => cb(state)}>{nameButton}</AppButton>
    </div>)
}