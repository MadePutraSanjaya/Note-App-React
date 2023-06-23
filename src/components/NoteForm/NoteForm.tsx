import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNote, updateNote } from '../../actions/noteActions';
import Input from '../InputSection/InputSection';
import './NoteForm.scss'

interface NoteFormProps {
  id?: number;
  initialNote?: string;
}

const NoteForm: React.FC<NoteFormProps> = ({ id, initialNote = "" }) => {
  const [note, setNote] = useState(initialNote);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (id !== undefined) {
      dispatch(updateNote(id, note));
    } else {
      dispatch(addNote(note));
    }
    setNote("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <Input
            type="text"
            placeholder="Input Note"
            onChange={handleChange}
            value={note}
          />
        </div>
        <button type="submit" className="submit-button">
          {id !== undefined ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default NoteForm;
