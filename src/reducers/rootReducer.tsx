import { combineReducers } from "redux";
import noteReducer from "./noteReducer";

const rootReducer = combineReducers({
  notes: noteReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
