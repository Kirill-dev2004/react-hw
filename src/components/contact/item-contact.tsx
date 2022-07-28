import { ContactItemPropsI } from "./type-contact";
import "../styles/item-contact.css"
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";


export default function ContactItem({ contact, cb }: ContactItemPropsI): JSX.Element {
    const navigate = useNavigate()
    function onEdit() {
        navigate("/contacts/" + contact.id)
    }


    function onDeleteContact():void {
        api.delete("contacts/" + contact.id).then((r) => ( r.data))
    }

    

    return (
    <div className="item-contact">
        <p>{contact.name}</p>
        <p>{contact.lastName}</p>
        <p>{contact.phone}</p>
        <div className="btn-container">
            <button onClick={onDeleteContact}>Delete</button>
            <button onClick={onEdit}>Edit</button>
        </div>
    </div>
    )
}