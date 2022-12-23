import { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";

function Contacts() {
    const [contacts, setContacts] = useState ([
        {
            fullname: 'Mehmet',
            phone_number: "123123"
        },{
            fullname: 'Ahmet',
            phone_number: "465465"
        },{
            fullname: 'Ayşe',
            phone_number: "789789"
        }
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts])

    return (
        <div>
            <h1>Contacts</h1>
            <List  contacts={contacts}/>
            <Form  addContact={setContacts} contacts={contacts}/>
        </div>
    )
}

export default Contacts;