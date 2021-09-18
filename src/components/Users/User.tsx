import us from "./users.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../nophoto.png";
import {usersAPI} from "../../api/api";
import React from "react";
import {InitialStateType} from "../../redux/usersReducer";
import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { RootReduxState } from "../../redux/redux-store";

type UserPageType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    usersPage: InitialStateType
    followingInProgress: any[]
    setToggleFriends: (loadItem: boolean, userId: number) => void
    friends:boolean
}

export const User = (props: UserPageType) => {
    let isAuth=useSelector<RootReduxState>(state=>state.auth.isAuth)
    let users = ()=>{
        if(props.friends)
     return props.usersPage.users.filter(u=>u.followed===true)
     else{
         return props.usersPage.users
     }
    }
    return (<div>
            {
                users()?.map((u) => <div>

                    <div className={us.page}>
<span>
    <NavLink to={`/profile/${u.id}`}>
                    <img alt={'avatar'} src={u.photos.small != null ? u.photos.small : userPhoto}/>
             </NavLink>
                    <div className={us.inform}>
                        <div>Имя:{u.name}</div>
                        <div>Id:{u.id}</div>
                    </div>
                    <br/>
                    {isAuth?<div className={us.button}>
                    {u.followed ? <Button  className={us.darkFollowButton}  disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.setToggleFriends(true, u.id)
                            usersAPI.deleteUser(u.id).then
                            ((response: any) => {
                                    if (response.data.resultCode === 0)
                                        props.setToggleFriends(false, u.id)
                                    props.unfollow(u.id)

                                }
                            )
                        }}>Delete from friends</Button> :
                        <Button  className={us.darkUnfollowButton}  disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.setToggleFriends(true, u.id)
                            usersAPI.postUser(u.id).then
                            ((response: any) => {
                                if (response.data.resultCode === 0)
                                    props.setToggleFriends(false, u.id)
                                props.follow(u.id)
                            })

                        }}>Add as friends</Button>}
                    </div>:''}
                    </span>
                    </div>
                </div>)
            }</div>
    )
}
