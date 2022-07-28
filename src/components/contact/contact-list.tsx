
import React, { useState, useEffect } from "react"
import api from "../../utils/api"
import ContactItem from "./item-contact"
import { ContactActionTypeI, ContactI } from "./type-contact"
import "../styles/container-list.css"

export default function ContactList() {
        const [contacts, setContacts] = useState()
    useEffect(() => {
        api.get("contacts").then((r) => setContacts(r.data.reverse()))
    },[])

    function onContactAction(id:string, type: ContactActionTypeI): void {
        
    }

return (
<div className="container-list">
    {
        contacts && (contacts as ContactI[]).map<JSX.Element>((e) => (
            <ContactItem key={e.id} cb={onContactAction} contact={e}></ContactItem>))
    }
</div>
)
}