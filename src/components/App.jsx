import React from "react";
import Card from "./Card";
import "./app.css";
import contacts from "../contacts";

function App() {
  return (
    <React.Fragment>
      <h1 className="heading">My Contacts</h1>
      {contacts.map((contact, index) => {
        return (
          <Card
            key={contact.name}
            name={contact.name}
            imgURL={contact.imgURL}
            phone={contact.phone}
            email={contact.email}
          />
        );
      })}
    </React.Fragment>
  );
}

export default App;
