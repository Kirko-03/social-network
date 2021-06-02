import {ActionTypes} from "./store";
import {updateObjectArray} from "../Forms/FuncHelper";

export type UserPageType = {
    id: number
    name: string
    followed: boolean
    photos: PhotosType
}
type PhotosType = {
    small: string
    large: string
}

export type InitialStateType = {

    users: Array<UserPageType>
    pageSize: number
    totalItemsCount: number
    currentPage: number
    loadItem: boolean
    followingInProgress: any[]
}

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT"
const SET_LOAD_ITEM = "SET_LOAD_ITEM"
const SET_TOGGLE_FRIENDS = "SET_TOGGLE_FRIENDS"
const initialState: InitialStateType = {
    users: [],
    pageSize: 4,
    totalItemsCount: 0,
    currentPage: 1,
    loadItem: true,
    followingInProgress: []
}

const usersReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectArray(state.users, action.userId, 'id', {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectArray(state.users, action.userId, 'id', {followed: false})
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_TOTAL_USER_COUNT:
            return {
                ...state, totalItemsCount: action.totalCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_LOAD_ITEM:
            return {
                ...state, loadItem: action.loadItem
            }
        case SET_TOGGLE_FRIENDS:
            return {
                ...state,
                followingInProgress: action.loadItem ?
                    [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }

}

export const follow = (userId: number) => {
    return {
        type: FOLLOW,
        userId
    } as const
}
export const unfollow = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId

    } as const
}
export const setUsers = (users: Array<UserPageType>) => {
    return {
        type: SET_USERS,
        users
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const
}

export const setTotalItemsCount = (totalCount: number) => {
    return {
        type: SET_TOTAL_USER_COUNT,
        totalCount
    } as const
}
export const setLoadItem = (loadItem: boolean) => {
    return {
        type: SET_LOAD_ITEM,
        loadItem
    } as const
}
export const setToggleFriends = (loadItem: boolean, userId: number) => {
    return {
        type: SET_TOGGLE_FRIENDS,
        loadItem, userId
    } as const
}
export default usersReducer