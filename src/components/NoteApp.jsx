import React from "react";
import NoteAppHeader from "./NoteAppHeader";
import NoteAppBody from "./NoteAppBody";
import { getInitialData } from "../utils";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      search: "",
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      // Buat salinan notes sebelum diurutkan
      const sortedNotes = [...prevState.notes].sort((a, b) => b.id - a.id);
      const latestId = sortedNotes.length > 0 ? sortedNotes[0].id : 0;

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

  onSearchHandler(keyword) {
    this.setState({ search: keyword });
  }

  render() {
    // Filter notes berdasarkan kata kunci pencarian
    const filteredNotes = this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.search.toLowerCase()));
    return (
      <>
        <NoteAppHeader onSearch={this.onSearchHandler} />
        <NoteAppBody notes={filteredNotes} addNote={this.onAddNoteHandler} onDelete={this.onDeleteHandler} />
      </>
    );
  }
}

export default NoteApp;
