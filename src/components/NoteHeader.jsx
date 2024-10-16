import React from "react";

export default function NoteHeader({ onSearch }) {
  return (
    <>
      <h1>Notes</h1>
      <div className="note-search">
        <input type="text" placeholder="Cari Catatan ..." onChange={(event) => onSearch(event.target.value)} />
      </div>
    </>
  );
}
