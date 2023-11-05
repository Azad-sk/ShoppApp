import { CATEGORIES_ACTION_TYPES } from "./category.type";

const CATEGORIES_INITIALSTATE = {
    categories: [],
    isLoading: false,
    error: null,
}


const categoriesReducer = (state = CATEGORIES_INITIALSTATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
            return { ...state, isLoading: true };
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: payload,
                isLoading: false,
            };
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
            return { ...state, error: payload, isLoading: false };
        default:
            return state;
    }
}

export default categoriesReducer;