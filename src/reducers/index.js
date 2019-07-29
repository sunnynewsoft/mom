import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import {reducer as FormReducer } from 'redux-form'

export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    form: FormReducer
});