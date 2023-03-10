import { useState } from "react";

function List ({contacts}) {
    const [filterText, setFilterText] = useState("");
    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) => 
            item[key].toString().toLowerCase().includes(filterText.toLowerCase())
        );
    });
    return (
        <div id="list">
            <div className="filter">
                <input placeholder="Filter Contact" value={filterText} onChange={(e) => setFilterText(e.target.value)}/>
            </div>
            <ul>
             {
                filtered.map((contact, i) => (
                    <li key={i}>{contact.fullname} - {contact.phone_number}</li>
                ))
             }
            </ul>

            <p className="total">
                Total Contacts: ({filtered.length})
            </p>
        </div>
    )
}

export default List;