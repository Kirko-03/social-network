import {ActionTypes, PostType, profilePageType} from "./store";
import {Dispatch} from "react";
import {usersAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {RootReduxState} from "./redux-store";

type SetUserProfileAC = {
    type:"SET-USER-PROFILE"
    userProfile:UserProfileType|null
}

export type UserProfileType={
    aboutMe: string,
    contacts:ContactsType,
    lookingForAJob:boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: string,
    photos: {
        small: string,
        large:string
}
}
  export type ContactsType = {
        facebook:string,
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
    NewTextPost: "it-camasutra",
    userProfile:null,
    isAuth: false


}

const ADDPOST = "ADD-POST";
const UPDATEADDPOST = "UPDATE-ADD-POST";
const SETUSERPROFILE = "SET-USER-PROFILE"
const profileReducer = (state: profilePageType = initialState, action: ActionTypes) => {

    switch (action.type) {
        case ADDPOST: {
            let newPost: PostType = {
                message: state.NewTextPost,
                like: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                NewTextPost: ""
            }
        }
        case   UPDATEADDPOST: {
            return {
                ...state,
                NewTextPost: action.newText
            }
        }
        case SETUSERPROFILE:{
            return {
                ...state,
                userProfile:action.userProfile
            }
        }

        default :
            return state
    }
}

export const addPostAC = () => {
    return {
        type: ADDPOST
    } as const
}
export const updateAddPostAC = (body: string) => {
    return {
        type: UPDATEADDPOST,
        newText: body
    } as const

}
 export const setUserProfile = (userProfile:UserProfileType|null):SetUserProfileAC =>{
    return{
        type:SETUSERPROFILE,
        userProfile: userProfile
    }as const
}
export const getUserProfile = (userId:number):ThunkAction<Promise<void>,RootReduxState, unknown, ActionTypes> => {
    return async (dispatch) =>
    {
        usersAPI.getProfile(userId).then
        (response => {
                dispatch(setUserProfile(response.data))
            }
        )
    }
}
export default profileReducer