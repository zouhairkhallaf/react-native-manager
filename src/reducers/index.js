import { combineReducers } from 'redux';
import someReducer from './someReducer';
import AuthReducer from './AuthReducer'

export default combineReducers({
    someReducer: someReducer,
    auth: AuthReducer
});
