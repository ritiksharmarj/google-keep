import React, { useState } from "react";
import "./styles.css";

import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import Count from "./components/Count";
import Footer from "./components/Footer";

function App(props) {
  const [notes, setNotes] = useState([])

  function addNote(newNote) {
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  }

  function deleteNotes(id) {
    setNotes(prevValue => {
      return [...prevValue.filter((note, index) => index !== id)];
    });
  }

  return (
    <div className="app">
      <Header />
      <div className="container">
        <Count count={notes.length === 0 ? "Empty" : `Showing ${notes.length} Notes in Database`} />
        <CreateArea onAdd={addNote} />
        {notes.map((note, index) => (
          <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNotes} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
