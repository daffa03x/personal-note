import React from "react";

export default function ButtonDelete({ id, onDelete }) {
  return (
    <button type="submit" className="note-item__delete-button" onClick={() => onDelete(id)}>
      Delete
    </button>
  );
}
