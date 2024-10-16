import React from "react";
import NoteItem from "./NoteItem";

export default function NoteList({ notes, onDelete }) {
  return (
    <>
      <h2>Catatan Aktif</h2>
      <div className="notes-list">
        {notes.map((note) => (
          <NoteItem key={note.id} id={note.id} onDelete={onDelete} {...note} />
        ))}
      </div>
    </>
  );
}
