import { combineReducers } from 'redux';
import list from './list'

const appReducer = combineReducers({
    list,
})

export default appReducer