import React from "react";
import { MdDelete } from "react-icons/md";

function Note({ title, content, onDelete, id }) {
  return (
    <div className="note">
      <h3>{title}</h3>
      <p>{content}</p>
      <button onClick={() => onDelete(id)}>
        <MdDelete size={20} />
      </button>
    </div>
  );
}

export default Note;
