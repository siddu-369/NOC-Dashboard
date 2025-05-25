import React, { useState, useEffect } from "react";

const NoteForm = ({ addNote, editableNote, updateNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editableNote) {
      setTitle(editableNote.title);
      setContent(editableNote.content);
    }
  }, [editableNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;
    if (editableNote) {
      updateNote({ ...editableNote, title, content });
    } else {
      addNote({ title, content });
    }
    setTitle("");
    setContent("");
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows="15"
            />
          </div>
          <button type="submit" className="btn btn-success w-100">
            {editableNote ? "Update Note" : "Add Note"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NoteForm;
