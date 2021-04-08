import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import usersReducer from "./usersReducer";
import authReducer from "../components/Header/authReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage:usersReducer,
    auth:authReducer
})

export type RootReduxState = ReturnType<typeof reducers>

let store = createStore(reducers)

export type  ReduxStoreType = typeof store

export default store