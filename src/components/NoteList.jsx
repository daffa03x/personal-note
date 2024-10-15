import React from "react";
import ButtonArsip from "./ButtonArsip";
import ButtonDelete from "./ButtonDelete";

export default function NoteList({ notes }) {
  return (
    <>
      <h2>Catatan Aktif</h2>
      <div className="notes-list">
        {notes.map((note) => (
          <div key={note.id} className="note-item">
            <div className="note-item__content">
              <h3 className="note-item__title">{note.title}</h3>
              <p className="note-item__date">{note.createdAt}</p>
              <p className="note-item__body">{note.body}</p>
            </div>
            <div className="note-item__action">
              <ButtonDelete />
              <ButtonArsip />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}