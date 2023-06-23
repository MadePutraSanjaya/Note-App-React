import {
  ADD_NOTE,
  DELETE_NOTE,
  UPDATE_NOTE,
} from "../types/actionType";
import { Note, NoteActionTypes,  } from '../types/actionType';

export interface NoteState {
  notes: Note[];
}

const initialState: NoteState = {
  notes: [],
};

const noteReducer = (
  state: NoteState = initialState,
  action: NoteActionTypes
): NoteState => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, { id: Date.now(), content: action.todo }],
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.todo),
      };
    case UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.todo.id
            ? { ...note, content: action.todo.note }
            : note
        ),
      };

    default:
      return state;
  }
};

export default noteReducer;
