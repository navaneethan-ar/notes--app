// src/components/CreateArea.jsx
import React, { useState } from 'react';

function CreateArea({ onAdd }) {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => ({
      ...prevNote,
      [name]: value,
    }));
  }

  function submitNote(event) {
    event.preventDefault(); // Prevents the page from reloading on form submission
    if (note.title.trim() === '' && note.content.trim() === '') {
        return; // Don't add empty notes
    }
    onAdd(note);
    setNote({ title: '', content: '' }); // Clear the form
  }

  return (
    <div>
      <form onSubmit={submitNote}>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;