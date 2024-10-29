import React from 'react';

function NoteDisplay({ notes, selectedNoteId }) {
  const selectedNote = notes.find(note => note.id === selectedNoteId);

  if (!selectedNote) {
    return 
  }

  return (
    <div>
     
      <p>{selectedNote.text}</p>
    </div>
  );
}

export default NoteDisplay;