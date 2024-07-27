import { combineReducers } from "redux";
import { languageDropdownToggleReducer } from "./headerReducer";

const reducer = combineReducers({languageDropdownToggleReducer:languageDropdownToggleReducer});

export default reducer;

export type RootState = ReturnType<typeof reducer>;