
import React from 'react';

import { addPostAC} from "../../../redux/profileReducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";
import {PostType, profilePageType} from "../../../redux/store";
import { RootReduxState } from '../../../redux/redux-store';

type mapStateToPropsType = {
posts:Array<PostType>
}
type  mapDispatchToPropsType = {
    addPosts:(NewTextPost:string)=>void
    // newTextChangeHandler:(body: string) => void
}

let mapStateToProps=(state:RootReduxState):mapStateToPropsType=> {
    return {
        posts: state.profilePage.posts
    }
}
// let mapDispatchToProps = (dispatch:any ):mapDispatchToPropsType => {
//     return {
//         addPosts: (NewTextPost:string) => {
//             dispatch(addPostAC(NewTextPost))
//         }
        // newTextChangeHandler:(body: string) => {
        //     dispatch(updateAddPostAC(body))
        // }}}
const MapPostContainer = connect<mapStateToPropsType,mapDispatchToPropsType,{},RootReduxState>(mapStateToProps, {addPosts:addPostAC})(MyPost)
export default MapPostContainer;