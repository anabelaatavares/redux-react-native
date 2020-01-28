import axios from 'axios'
import * as types from '../types/type'
const url = 'https://api.github.com/';

export const search_data = (data) => {
    return {
        type: types.SEARCH_DATA_LIST,
        data
    };
};

export const searchData = (username) => {
 
    return dispatch => {
        axios
            .get(url + `users/${username}`)
            .then(response => {
                dispatch(search_data(response.data));
            })
            .catch(error => {
                console.log(error);

            });
    };
};