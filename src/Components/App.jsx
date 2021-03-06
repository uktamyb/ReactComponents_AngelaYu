import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";
import "../../public/styles.css";

function createCard(contact) {
  return (
    <Card
      name={contact.name}
      img={contact.imgURL}
      tel={contact.tel}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My contacts</h1>
      <Avatar img="data:image/jpeg;base64,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" />
      {contacts.map(createCard)}

      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].tel}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].tel}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].tel}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
