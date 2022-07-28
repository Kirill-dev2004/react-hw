import { useState } from "react"
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import { ContactI } from "./type-contact"
import '../styles/form.css'


export default function CreateContact() {
    const navigate = useNavigate()
    const initialState: ContactI = {name: '', lastName: '', phone: ''}
    const [contact, setContact] = useState(initialState);
    function onCreateContact():void {
        api.post("contacts/", contact).then((r) =>  navigate("/contacts/contact-list"))
    }
    
return (
    <div className="form">
        <input type="text" value={contact.name} placeholder={"Enter some name"} onChange={(e) => setContact({...contact, name:e.target.value})}></input>
        <input type="text" value={contact.lastName} placeholder={"Enter some surname"} onChange={(e) => setContact({...contact, lastName:e.target.value})}></input>
        <input type="text" value={contact.phone} placeholder={"Enter some phone"} onChange={(e) => setContact({...contact, phone:e.target.value})}></input>
        <button onClick={onCreateContact}>Create Contact</button>
    </div>
    )
}