import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, onDelete }) => {
  return (
    <>
      <h2>Catatan Aktif</h2>
      {notes.length === 0 ? (
        <div className="notes-list__empty-message">Tidak Ada Catatan</div>
      ) : (
        <div className="notes-list">
          {notes.map((note) => (
            <NoteItem key={note.id} id={note.id} onDelete={onDelete} {...note} />
          ))}
        </div>
      )}
    </>
  );
};

export default NoteList;
