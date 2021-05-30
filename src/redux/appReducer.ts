import {ActionTypes} from "./store";
import {ThunkAction} from "redux-thunk";
import {RootReduxState} from "./redux-store";
import {authAPI} from "../api/api";
import {getAuthUserData} from "./authReducer";

export type InitialStateType = {
    initialized: boolean
}

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"
const initialState: InitialStateType = {
    initialized: false
}

const appReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {

        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized:true
            }
        default:
            return state
    }

}


export const setInitialSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS,
    } as const
}

export const initializeApp = (): ThunkAction<Promise<void>, RootReduxState, unknown, ActionTypes> => {
    return async (dispatch) => {
        const promise = dispatch(getAuthUserData())
        await Promise.all([promise])
        dispatch(setInitialSuccess())
    }
}

export default appReducer