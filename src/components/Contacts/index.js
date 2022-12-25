import { useState, useEffect } from "react";
import "./style.css";
import List from "./List";
import Form from "./Form";

function Contacts() {
    const [contacts, setContacts] = useState ([
        {
            fullname: 'Mehmet',
            phone_number: "0500 000 00 00"
        },{
            fullname: 'Ahmet',
            phone_number: "0212 000 00 00"
        },{
            fullname: 'Ayşe',
            phone_number: "0530 000 00 00"
        }
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts])

    return (
        <div id="content">
            <h1>Contacts</h1>
            <List  contacts={contacts}/>
            <Form  addContact={setContacts} contacts={contacts}/>
        </div>
    )
}

export default Contacts;