import {createStore , combineReducers , applyMiddleware} from "redux"
import thunk from "redux-thunk"
import  { composeWithDevTools } from 'redux-devtools-extension'

import product from "./products"

const reducers =  combineReducers({
    product
}) 

const initialState = []
const middlewares = [thunk]

const store = createStore(reducers , initialState , composeWithDevTools(applyMiddleware(...middlewares)) )


export default store 
