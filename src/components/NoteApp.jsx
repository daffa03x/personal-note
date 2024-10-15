import React from "react";
import NoteAppHeader from "./NoteAppHeader";
import NoteAppBody from "./NoteAppBody";
import { getInitialData } from "../utils";

export default function NoteApp() {
  return (
    <>
      <NoteAppHeader />
      <NoteAppBody notes={getInitialData()} />
    </>
  );
}
