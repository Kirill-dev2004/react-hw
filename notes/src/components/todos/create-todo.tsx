import { useContext, useState } from "react"
import { MyContext } from "../../context"
import API from "../shared/Api/API"
import '../../style/input-btn.css'



export default function CreateTodo(){
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const {dispatch} = useContext(MyContext)
    return <div>
            <div className="input-container">
                <input type="text" value={title} placeholder="Enter some Title" onChange={(e) => setTitle(e.target.value)} />
                <input type="text" value={body} placeholder="Enter some Body" onChange={(e) => setBody(e.target.value)} />
            </div>
            <button className="create-btn" onClick={() => API.post("", {title, body}).then((r) => {dispatch({type:"create", payload: r.data}); setTitle(''); setBody('')})}>Create</button>
    </div>
}