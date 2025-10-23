// src/components/Note.jsx
import React from 'react';

function Note({ id, title, content, onDelete }) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => onDelete(id)}>X</button>
    </div>
  );
}

export default Note;