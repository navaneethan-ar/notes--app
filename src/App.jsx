// src/App.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CreateArea from './components/CreateArea';
import Note from './components/Note';

function App() {
  // State to hold the array of notes
  const [notes, setNotes] = useState([]);
  // State to hold the search text
  const [searchText, setSearchText] = useState('');

  // Function to add a new note
  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, { ...newNote, id: new Date().getTime() }];
    });
  }

  // Function to delete a note by its ID
  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter(noteItem => noteItem.id !== id);
    });
  }

  // Filter notes based on the search text
  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchText.toLowerCase()) ||
    note.content.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      
      {/* Search Input */}
      <input
        type="text"
        className="search-bar"
        placeholder="Search notes by keyword..."
        onChange={(event) => setSearchText(event.target.value)}
      />

      {/* Render the filtered notes */}
      {filteredNotes.map(noteItem => (
        <Note
          key={noteItem.id}
          id={noteItem.id}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      ))}
    </div>
  );
}

export default App;