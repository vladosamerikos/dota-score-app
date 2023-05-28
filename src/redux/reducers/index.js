import { combineReducers } from 'redux';
import blog from './blog';
import categories from './categories';
import authReducer from './authReducer';

export default combineReducers({
    blog: blog,
    categories: categories,
    auth: authReducer
})