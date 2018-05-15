import { combineReducers } from 'redux';
import tokenReducer from './tokenReducer';
import userReducer from './userReducer';
import playlistReducer from './playlistReducer';
import uiReducer from './uiReducer';
import songsReducer from './songsReducer'
export default combineReducers({
    tokenReducer,
    userReducer,
    playlistReducer,
    uiReducer,
    songsReducer,
})