import React, { useState } from "react";
import Chat from "./Chat";
import Contract from "./Contract";

const contacts = [
  { id: 1, name: "FARIHA SIDDIQE", email: "farihasiddique67@gmail.com" },
  { id: 2, name: "SHOVON HOQ", email: "shovonhoq21@gmail.com" },
  { id: 3, name: "SAIDUL HOUQE", email: "saidul8595@gmail.com" },
  { id: 4, name: "IQRAMUL KABIR", email: "iqramulkabir@gmail.com" },
  { id: 5, name: "SANJANA ALAM", email: "sanjanaalam09@gmail.com" },
];
export default function MainProggram() {
  const [to, setTo] = useState(contacts[0]);
  const handleSelect = (contact) => {
    console.log(contact.name);
    setTo(contact);
  };
  return (
    <div className="flex bg-gray-600 p-20 m-10">
      <Contract
        contacts={contacts}
        selectedContacts={to}
        onSelected={handleSelect}
      />
      <Chat key={to.id} contact={to} />
    </div>
  );
}
