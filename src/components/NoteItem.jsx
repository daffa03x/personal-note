import React from "react";
import ButtonArsip from "./ButtonArsip";
import ButtonDelete from "./ButtonDelete";
export default function NoteItem({ id, title, body, createdAt, onDelete }) {
  const formatDateToIndonesian = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString("id-ID", options);
  };
  return (
    <div key={id} className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{formatDateToIndonesian(createdAt)}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <div className="note-item__action">
        <ButtonDelete id={id} onDelete={onDelete} />
        <ButtonArsip />
      </div>
    </div>
  );
}
