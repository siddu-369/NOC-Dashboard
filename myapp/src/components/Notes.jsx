import React, { useState } from "react";
import NoteForm from "./Notescomponents/NotesForm";
import NoteList from "./Notescomponents/NotesList";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [editableNote, setEditableNote] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const addNote = (note) => {
    setNotes([...notes, { ...note, id: Date.now() }]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const editNote = (note) => {
    setEditableNote(note);
  };

  const updateNote = (updatedNote) => {
    setNotes(
      notes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
    );
    setEditableNote(null);
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h2 className="">Notes</h2>
        <input
          type="text"
          className="form-control w-50 mx-auto mt-3"
          placeholder="Search notes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="row">
        <div className="col-md-5">
          <NoteForm
            addNote={addNote}
            editableNote={editableNote}
            updateNote={updateNote}
          />
        </div>
        <div className="col-md-7">
          <NoteList
            notes={filteredNotes}
            deleteNote={deleteNote}
            editNote={editNote}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
