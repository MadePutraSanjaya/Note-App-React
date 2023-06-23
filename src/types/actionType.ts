export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const UPDATE_NOTE = "UPDATE_NOTE";

export interface Note {
  id: number;
  content: string;
}

export interface AddNoteAction {
  type: typeof ADD_NOTE;
  todo: string;
}

export interface DeleteNoteAction {
  type: typeof DELETE_NOTE;
  todo: number;
}

export interface UpdateNoteAction {
  type: typeof UPDATE_NOTE;
  todo: {
    id: number;
    note: string;
  };
}


export type NoteActionTypes =
  | AddNoteAction
  | DeleteNoteAction
  | UpdateNoteAction;
