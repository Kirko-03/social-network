import us from "./users.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../nophoto.png";
import {usersAPI} from "../../api/api";
import React from "react";
import {InitialStateType} from "../../redux/usersReducer";
import { Button } from "@material-ui/core";

type UserPageType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    usersPage: InitialStateType
    followingInProgress: any[]
    setToggleFriends: (loadItem: boolean, userId: number) => void
}

export const User = (props: UserPageType) => {
    let unFollowBack='';
    let followBack='';
    function followedFunc(){
// if(props.defaultBack){
//     unFollowBack='blueviolet';
//     followBack='greenyellow';
// }
// else{
//     unFollowBack='orange';
//     followBack='blue';
// }
    }
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
                    {u.followed ? <Button style={{background:followBack}} className={us.darkFollowButton}  disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.setToggleFriends(true, u.id)
                            usersAPI.deleteUser(u.id).then
                            ((response: any) => {
                                    if (response.data.resultCode === 0)
                                        props.setToggleFriends(false, u.id)
                                    props.unfollow(u.id)

                                }
                            )
                        }}>Удалить из друзей</Button> :
                        <Button style={{background:unFollowBack}} className={us.darkUnfollowButton}  disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.setToggleFriends(true, u.id)
                            usersAPI.postUser(u.id).then
                            ((response: any) => {
                                if (response.data.resultCode === 0)
                                    props.setToggleFriends(false, u.id)
                                props.follow(u.id)
                            })

                        }}>Добавить в друзья</Button>}
                    </div>
                    </span>
                    </div>
                </div>)
            }</div>
    )
}
