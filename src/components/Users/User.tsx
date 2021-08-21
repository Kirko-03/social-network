import us from "./users.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../nophoto.png";
import {usersAPI} from "../../api/api";
import React from "react";
import {InitialStateType} from "../../redux/usersReducer";

type UserPageType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    usersPage: InitialStateType
    followingInProgress: any[]
    setToggleFriends: (loadItem: boolean, userId: number) => void
}

export const User = (props: UserPageType) => {
    return (<div>
            {
                props.usersPage.users.map((u) => <div>

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
                    <div className={us.button}>
                    {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.setToggleFriends(true, u.id)
                            usersAPI.deleteUser(u.id).then
                            ((response: any) => {
                                    if (response.data.resultCode === 0)
                                        props.setToggleFriends(false, u.id)
                                    props.unfollow(u.id)

                                }
                            )
                        }}>Удалить из друзей</button> :
                        <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.setToggleFriends(true, u.id)
                            usersAPI.postUser(u.id).then
                            ((response: any) => {
                                if (response.data.resultCode === 0)
                                    props.setToggleFriends(false, u.id)
                                props.follow(u.id)
                            })

                        }}>Добавить в друзья</button>}
                    </div>
                    </span>
                    </div>
                </div>)
            }</div>
    )
}
