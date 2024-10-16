import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import NoteArsip from "./NoteArsip";

export default function NoteAppBody({ notes, addNote, onDelete }) {
  return (
    <div className="note-app__body">
      <NoteInput addNote={addNote} />
      <NoteList notes={notes} onDelete={onDelete} />
      <NoteArsip />
    </div>
  );
}
