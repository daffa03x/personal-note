import React from "react";
import ButtonSubmit from "./ButtonSubmit";

export default function FormBuatCatatan() {
  return (
    <form action="">
      <p className="note-input__title__char-limit">Sisa karakter: 50</p>
      <input type="text" className="note-input__title" placeholder="Ini adalah judul ..." required />
      <textarea className="note-input__body" placeholder="Tuliskan catatanmu di sini ..." required />
      <ButtonSubmit />
    </form>
  );
}
