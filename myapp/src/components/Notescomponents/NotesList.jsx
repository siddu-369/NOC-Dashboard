import React from "react";
import { PencilSquare, Trash } from "react-bootstrap-icons";

const NoteList = ({ notes, deleteNote, editNote }) => {
  return (
    <div className="row">
      {notes.length === 0 ? (
        <p className="text-muted text-center">No notes found.</p>
      ) : (
        notes.map((note) => (
          <div key={note.id} className="col-12 mb-3">
            <div className="card border-primary shadow-sm">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <h5 className="card-title fw-bold">{note.title}</h5>
                    <p className="card-text">{note.content}</p>
                  </div>
                  <div>
                    <button
                      className="btn btn-outline-primary me-2"
                      onClick={() => editNote(note)}
                    >
                      <PencilSquare />
                    </button>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => deleteNote(note.id)}
                    >
                      <Trash />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default NoteList;
