import React, { useEffect, useState } from 'react';

function NoteEditor({ notes, selectedNoteId, addNote, updateNote }) {
  const [noteText, setNoteText] = useState('');

  useEffect(() => {
    const storedNoteText = localStorage.getItem('noteText');
    if (storedNoteText) {
      setNoteText(storedNoteText);
    }
  }, []);

  useEffect(() => {
    const selectedNote = notes.find(note => note.id === selectedNoteId);
    if (selectedNote) {
      setNoteText(selectedNote.text);
    } else {
      setNoteText('');
    }
  }, [selectedNoteId, notes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedNoteId) {
      updateNote(selectedNoteId, noteText);
    } else {
      addNote(noteText);
    }
    setNoteText('');
    localStorage.setItem('noteText', '');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  const handleTextChange = (e) => {
    setNoteText(e.target.value);
    localStorage.setItem('noteText', e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={noteText}
        onChange={handleTextChange}
        onKeyDown={handleKeyDown}
        className="input1"
      />
      <button type="submit" className="create">Сохранить</button>
    </form>
  );
}

export default NoteEditor;