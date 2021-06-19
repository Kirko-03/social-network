import {ActionTypes} from "./store"
import {authAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {RootReduxState} from "./redux-store";
import {stopSubmit} from "redux-form";


export type InitialStateType = {
    id: number | null;
    email: string | null;
    login: string | null;
    password:string|null,
    isAuth: boolean
    captcha:string|null
}

const SET_USER_DATA = "SET_USER_DATA"
const GET_CAPTCHA_URL='GET_CAPTCHA_URL'
const initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    password:null,
    isAuth: false,
    captcha:null
}

const authReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {

        case SET_USER_DATA:
        case GET_CAPTCHA_URL:
            return {
                ...state, ...action.data
            }
        default:
            return state
    }

}


export const setAuthUserData = (id: number | null,
                                email: string | null,
                                login: string | null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        data: {id, email, login, isAuth}
    } as const
}
export const getCaptchaUrlSuccess = (captcha:string|null) => {
    return {
        type: GET_CAPTCHA_URL,
        data: {captcha}
    } as const
}

export const getAuthUserData = (): ThunkAction<Promise<void>, RootReduxState, unknown, ActionTypes> => async (dispatch) => {
    let response = await authAPI.getAuth()
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data

        dispatch(setAuthUserData(id, login, email, true))
    }
}
export const login = (email: string, password: string, rememberMe: boolean,captcha:string): ThunkAction<Promise<void>, RootReduxState, unknown, ActionTypes> =>
    async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe,captcha)
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else  {
            if(response.data.resultCode === 10){
                dispatch(getCaptchaUrl())
            }
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "wrong email or password"
            dispatch(stopSubmit('login', {_error: message}))
        }
    }
export const logout = (): ThunkAction<Promise<void>, RootReduxState, unknown, ActionTypes> =>
    async (dispatch) => {
        let response = await authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }
export const getCaptchaUrl = (): ThunkAction<Promise<void>, RootReduxState, unknown, ActionTypes> =>
    async (dispatch) => {
        const response = await authAPI.getCaptcha()
        const captchaUrl= response.data.url
         dispatch(getCaptchaUrlSuccess(captchaUrl))
        }
export default authReducer