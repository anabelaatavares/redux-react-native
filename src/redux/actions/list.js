import axios from 'axios'
import * as types from '../types/type'
const url = 'https://api.github.com/';


export const get_data = () => {
    return {
        type: types.SHOW_DATA_LIST,
    };
};

export const get_data_error = error => {
    return {
        type: types.SHOW_DATA_LIST_REJECTED,
        error: error,
    };
};

export const get_data_sucess = data => {
    return {
        type: types.SHOW_DATA_LIST_FULFILLED,
        data,
    };
};

export const getData = () => {
    return dispatch => {
        dispatch(get_data());
        axios
            .get(url + 'users')
            .then(response => {
                console.log(response);

                dispatch(get_data_sucess(response.data));
            })
            .catch(error => {
                dispatch(get_data_error(error));
            });
    };
};

