import { initialstateHeaderType } from "../reducers/headerReducer";
import { LANGUAGE_DROPDOWN_TOGGLE } from "./types";

export const toggleDropDownStatus = (payload: boolean) => {
    return {
        type: LANGUAGE_DROPDOWN_TOGGLE,
        payload,
    };
}
