import React from "react";

export default function Contract({ contacts, to, onSelected }) {
  return (
    <div>
      <h1>This is an Simple Chat Programm.</h1>
      <ul className="p-10 bg-green-400">
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              className="border border-black rounded-sm m-2 p-2 bg-green-700 "
              onClick={() => onSelected(contact)}
            >
              {contact.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
