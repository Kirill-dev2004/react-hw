import { useState } from "react";
import AppButton from "../../../shared-components/button";
import AppInput from "../../../shared-components/input-header";

import './input-header.css'


export default function NoteCreate({cb}){
    const [state, setstate] = useState({
        title: "",
    })

   function setProperty(e){
       setstate({title: e.target.value}) 
    }

    return <>
    <div className="form-container">
    <AppInput placeholder="Enter some Note" title={'title'} value={state.title} onChange={setProperty}></AppInput>
     <AppButton cb={() => {
        cb(state)
        setstate({title:""})
     }}>Create Note</AppButton>
    </div>
    </>
}