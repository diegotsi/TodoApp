import {combineReducers} from 'redux';
import todoReducer from '../reducer/todo'

const rootReducer = combineReducers({
    todo: todoReducer
})

export default rootReducer;