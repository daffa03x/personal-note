import React from "react";

export default function NoteHeader() {
  return (
    <>
      <h1>Notes</h1>
      <div className="note-search">
        <input type="text" placeholder="Cari Catatan ..." />
      </div>
    </>
  );
}
