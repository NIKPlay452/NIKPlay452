import React from 'react';

function NoteList({ notes, setSelectedNoteId, deleteNote }) {
  return (
    <ul>
      {notes.map(note => (
        <li key={note.id}>
          <span onClick={() => setSelectedNoteId(note.id)}>{note.text}</span>
          <button onClick={() => deleteNote(note.id)}>Удалить</button>
        </li>
      ))}
    </ul>
  );
}

export default NoteList;
