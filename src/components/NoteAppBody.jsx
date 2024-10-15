import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import NoteArsip from "./NoteArsip";

export default function NoteAppBody({ notes }) {
  return (
    <div className="note-app__body">
      <NoteInput />
      <NoteList notes={notes} />
      <NoteArsip />
    </div>
  );
}
