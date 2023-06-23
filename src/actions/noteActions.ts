import {
  ADD_NOTE,
  DELETE_NOTE,
  UPDATE_NOTE,
  NoteActionTypes,
} from "../types/actionType";

export const addNote = (note: string): NoteActionTypes => ({
  type: ADD_NOTE,
  todo: note,
});

export const deleteNote = (id: number): NoteActionTypes => ({
  type: DELETE_NOTE,
  todo: id,
});

export const updateNote = (id: number, note: string): NoteActionTypes => ({
  type: UPDATE_NOTE,
  todo: {
    id,
    note,
  },
});
