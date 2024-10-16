import React from "react";
import FormBuatCatatan from "./FormBuatCatatan";

export default function NoteInput({ addNote }) {
  return (
    <div className="note-input">
      <h2>Buat Catatan</h2>
      <FormBuatCatatan addNote={addNote} />
    </div>
  );
}
