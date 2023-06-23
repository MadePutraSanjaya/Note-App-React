import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers/rootReducer";
import { deleteNote } from "../../actions/noteActions";
import { FaTrashAlt } from "react-icons/fa";
import "./NoteList.scss";

const NoteList: React.FC = () => {
  const notes = useSelector((state: RootState) => state.notes.notes);
  const dispatch = useDispatch();

  const handleDeleteNote = (id: number) => {
    dispatch(deleteNote(id));
  };

  return (
    <div className="note-list">
      <ul>
        {notes.map(
          (
            note: any // Replace 'any' with the actual type of 'note'
          ) => (
            <li key={note.id}>
              <span>{note.content}</span>
              <div
                className="card-header-delete"
                onClick={() => handleDeleteNote(note.id)}
              >
                <FaTrashAlt />
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default NoteList;
