import { LANGUAGE_DROPDOWN_TOGGLE } from "../actions/types";

export type initialstateHeaderType = {
    languageDropdownToggleStatus: boolean,
    // loggedin: boolean
}

const initialstate: initialstateHeaderType = {
    languageDropdownToggleStatus: false,
    // loggedin: false,
};

export const languageDropdownToggleReducer = (state = initialstate, { type, payload }: { type: string; payload: initialstateHeaderType }) => {
    // console.log(payload);

    switch (type) {
        case LANGUAGE_DROPDOWN_TOGGLE:
            return {
                ...state,
                languageDropdownToggleStatus: payload,
            };
        default:
            return state;
    }
};
