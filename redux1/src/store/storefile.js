import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer/mainReducer';

// we are connecting store to reducer;
let store = createStore(reducer, applyMiddleware());

export default store;