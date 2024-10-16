import React from "react";
import NoteAppHeader from "./NoteAppHeader";
import NoteAppBody from "./NoteAppBody";
import { getInitialData } from "../utils";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }
  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    const sortedData = getInitialData().sort((a, b) => b.id - a.id);
    const latestId = sortedData[0].id;
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: latestId + 1,
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  render() {
    return (
      <>
        <NoteAppHeader />
        <NoteAppBody notes={this.state.notes} addNote={this.onAddNoteHandler} onDelete={this.onDeleteHandler} />
      </>
    );
  }
}

export default NoteApp;
