import React, { useState } from 'react';
import NoteList from './NoteList';
import NoteEditor from './NoteEditor';
import NoteDisplay from './NoteDisplay';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNoteId, setSelectedNoteId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const addNote = (note) => {
    setNotes([...notes, { id: Date.now(), text: note }]);
  };

  const updateNote = (id, updatedText) => {
    setNotes(notes.map(note => (note.id === id ? { ...note, text: updatedText } : note)));
    setSelectedNoteId(null);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
    if (selectedNoteId === id) setSelectedNoteId(null);
  };

  const filteredNotes = notes.filter(note =>
    note.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='container'>
      <h1>NoteBook</h1>
      <input
        type="text"
        className="input2"
        placeholder="Записи"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <NoteList
        notes={filteredNotes}
        setSelectedNoteId={setSelectedNoteId}
        deleteNote={deleteNote}
      />
      <NoteEditor
        notes={notes}
        selectedNoteId={selectedNoteId}
        addNote={addNote}
        updateNote={updateNote}
      />
      <NoteDisplay
        notes={notes}
        selectedNoteId={selectedNoteId}
      />
    </div>
  );
}

export default App;