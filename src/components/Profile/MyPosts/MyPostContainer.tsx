
import React from 'react';

import { addPostAC, updateAddPostAC} from "../../../redux/profileReducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";
import {profilePageType} from "../../../redux/store";
import { RootReduxState } from '../../../redux/redux-store';

type mapStateToPropsType = {
    profilePage:profilePageType
}
type  mapDispatchToPropsType = {
    addPosts:()=>void
    newTextChangeHandler:(body: string) => void
}

let mapStateToProps=(state:RootReduxState):mapStateToPropsType=> {
    return {
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch:any ):mapDispatchToPropsType => {
    return {
        addPosts: () => {
            dispatch(addPostAC())
        },
        newTextChangeHandler:(body: string) => {
            dispatch(updateAddPostAC(body))
        }
    }
}
const MapPostContainer = connect<mapStateToPropsType,mapDispatchToPropsType,{},RootReduxState>(mapStateToProps, mapDispatchToProps)(MyPost)
export default MapPostContainer;