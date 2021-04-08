import { ActionTypes } from "../../redux/store"



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
export default authReducer