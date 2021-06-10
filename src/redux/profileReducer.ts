import {ActionTypes, PostType, profilePageType} from "./store";
import {profileAPI, usersAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {RootReduxState} from "./redux-store";
import {FormDataType} from "../components/Profile/ProfileData";

type SetUserProfileAC = {
    type: "SET-USER-PROFILE"
    userProfile: UserProfileType | null
}

export type UserProfileType = {
    aboutMe: string,
    contacts: ContactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: string,
    photos: {
        small: string,
        large: string
    }
}
export type ContactsType = {
    facebook: string,
    website: string,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: string,
    github: string,
    mainLink: string
}

let initialState = {
    posts: [{message: "Hi", like: 1},
        {message: "Whats up?", like: 1},
        {message: "Learn Pituhon(((", like: -13},
        {message: "LOSEEER", like: 187},
        {message: "Соси пинчер", like: 100}],
    // NewTextPost: "it-camasutra",
    userProfile: null,
    isAuth: false,
    status: ""

}

const ADDPOST = "ADD-POST";
// const UPDATEADDPOST = "UPDATE-ADD-POST";
const SETUSERPROFILE = "SET-USER-PROFILE"
const SETSTATUS = "SET-STATUS"
const SETPHOTO = "SET-PHOTO"
const profileReducer = (state: profilePageType = initialState, action: ActionTypes) => {

    switch (action.type) {
        case ADDPOST: {
            let newPost: PostType = {
                message: action.NewTextPost,
                like: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                // NewTextPost: ""
            }
        }
        // case   UPDATEADDPOST: {
        //     return {
        //         ...state,
        //         NewTextPost: action.newText
        //     }
        // }
        case SETUSERPROFILE: {
            return {
                ...state,
                userProfile: action.userProfile
            }
        }
        case SETPHOTO:{
            return{...state,profile:{...state.userProfile,photos:action.photos}}
        }
        case SETSTATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        default :
            return state
    }
}
export const setStatus = (status: string) => {
    return {
        type: SETSTATUS,
        status: status
    } as const
}
export const setPhoto = (photos:any)=>{
    return{
    type:SETPHOTO,
        photos:photos
    } as const
}
export const addPostAC = (NewTextPost: string) => {
    return {
        type: ADDPOST,
        NewTextPost
    } as const
}
/*export const updateAddPostAC = (body: string) => {
    return {
        type: UPDATEADDPOST,
        newText: body
    } as const
}*/
export const setUserProfile = (userProfile: UserProfileType | null): SetUserProfileAC => {
    return {
        type: SETUSERPROFILE,
        userProfile: userProfile
    } as const
}
export const getUserProfile = (userId: number): ThunkAction<Promise<void>, RootReduxState, unknown, ActionTypes> =>
    async (dispatch) => {
        let response = await usersAPI.getProfile(userId)
        dispatch(setUserProfile(response.data))
    }
export const getStatus = (userId: number): ThunkAction<Promise<void>, RootReduxState, unknown, ActionTypes> =>
    async (dispatch) => {
        let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data))
    }
export const updateStatus = (status: string): ThunkAction<Promise<void>, RootReduxState, unknown, ActionTypes> =>
    async (dispatch) => {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0)
            dispatch(setStatus(status))
    }
export const savePhoto = (file: string): ThunkAction<Promise<void>, RootReduxState, unknown, ActionTypes> =>
    async (dispatch) => {
        let response = await profileAPI.newPhoto(file)
        if (response.data.resultCode === 0)
            dispatch(setPhoto(response.data.data.photos))
    }
export const saveProfile = (profile:FormDataType): ThunkAction<Promise<void>, RootReduxState, unknown, ActionTypes> =>
    async (dispatch,getState) => {
    const userId = getState().auth.id
        let response = await profileAPI.newProfile(profile)
        if (response.data.resultCode === 0)
            debugger
            if(userId)
                dispatch(getUserProfile(userId))

}
export default profileReducer