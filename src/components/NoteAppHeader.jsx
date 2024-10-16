import React from "react";
import NoteHeader from "./NoteHeader";

export default function NoteAppHeader({ onSearch }) {
  return (
    <div className="note-app__header">
      <NoteHeader onSearch={onSearch} />
    </div>
  );
}
