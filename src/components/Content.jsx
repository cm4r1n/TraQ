import React from "react";
import Card from "./Card";
import Login from "./Login";
import notes from "../notes"

function Content() {
  let isLogged = true;

  if (isLogged) { 
    return (
    <div className="content">
      {notes.map(notes => (
        <Card
          key={notes.id}
          title={notes.title}
          note={notes.note}
          book={notes.book}
          prior={notes.prior}
          date={notes.date}
        />
      ))}  
    </div>
    )} else { 
    return (
    <div className="content">
      <Login/>
    </div>
    )}
}

export default Content;
