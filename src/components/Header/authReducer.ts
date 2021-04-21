import { ActionTypes } from "../../redux/store"
import {authAPI} from "../../api/api";
import {ThunkAction} from "redux-thunk";
import {RootReduxState} from "../../redux/redux-store";



export type InitialStateType = {
    id: number | null;
    email: string | null;
    login: string | null;
    isAuth:boolean
}

const SET_USER_DATA = "SET_USER_DATA"
const initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth:false
}

const authReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state, ...action.data,isAuth:true
            }
        default:
            return state
    }

}


export const setAuthUserData = (id: number | null,
                            email: string | null,
                            login: string | null,) => {
    return {
        type: SET_USER_DATA,
        data:{id,email,login}
    } as const
}
export const getAuthUserData = ():ThunkAction<Promise<void>, RootReduxState, unknown, ActionTypes> =>{
    return async (dispatch)=>{
    authAPI.getAuth().then(response => {
        if (response.data.resultCode === 0) {
            let {userId, login, email} = response.data.data
            dispatch(setAuthUserData(userId, login, email))
        }
    })
    }}

export default authReducer