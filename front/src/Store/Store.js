import {createStore, combineReducers } from 'redux'
// import { ShoppingReducer } from '../Reducers/ShoppingReducer';

const reducers = combineReducers({
    // Shopping : ShoppingReducer
})

export const store = createStore(reducers);