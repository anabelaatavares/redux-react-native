import * as types from '../types/type';
const initialState = {
    isLoading: false,
    data: [],
    error: null
}
const list = (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_DATA_LIST:
            return {
                ...state,
                isLoading: true,
            };
        case types.SHOW_DATA_LIST_FULFILLED:
            return {
                ...state,
                isLoading: false,
                data: action.data
            };
        case types.SHOW_DATA_LIST_REJECTED:
            return {
                ...state,
                isLoading: false,
                error: action.data
            };
        case types.SEARCH_DATA_LIST:
            return {
                ...state,
                isLoading: false,
                data: action.data
            };
        default:
            return state
    }
}
export default list