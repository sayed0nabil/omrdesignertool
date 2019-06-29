
import { combineReducers } from 'redux';


import authReducer from './authReducer';
import errReducer  from './errReducer';
import allPapersReducer from './allPapersReducer';
export default combineReducers({
    auth: authReducer,
    errors: errReducer,
    papers: allPapersReducer
});