import React from "react";
import us from "./users.module.css"
import userPhoto from "./../../nophoto.png"
import {InitialStateType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";
import { deleteUser, postUser} from "../../api/api";
type UsersFuncType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    pageSize: number
    totalUserCount: number
    currentPage: number
    usersPage: InitialStateType
    onPageChanged: (currentPage: number) => void
    followingInProgress:any[]
    setToggleFriends:(loadItem: boolean,userId:number) => void
}

let Users = (props: UsersFuncType) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (<div>
        {

            pages.map(p => {
                return <span className={props.currentPage === p ? us.bold : ""}
                             onClick={e => props.onPageChanged(p)}>{p}</span>
            })
        }
        {

            props.usersPage.users.map((u) => <div>

                <div className={us.page}>
<span>
    <NavLink to={`/profile/`+u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
             </NavLink>
                    <div className={us.inform}>
                        <div>Имя:{u.name}</div>
                        <div>Город:{"u.location.cityName"}</div>
                        <div>Страна:{"u.location.countryName"}</div>
                    </div>
                    <br/>
                    <div className={us.button}>
                    {u.followed ? <button disabled={props.followingInProgress.some(id=> id === u.id)}  onClick={() => {
                        debugger
                     props.setToggleFriends(true,u.id)
                        deleteUser(u.id).then
                        ((data:any) => {
                            if (data.resultCode == 0 && props.unfollow)
                                props.unfollow(u.id)
                                props.setToggleFriends(false,u.id)
                        }
                        )
                    }}>Удалить из друзей</button> : <button  disabled={props.followingInProgress.some(id=> id === u.id)}  onClick={() => {
                        props.setToggleFriends(true,u.id)
                        postUser(u.id).then
                        ((data:any) => {
                            if (data.resultCode == 0 && props.follow)
                                props.follow(u.id)
                            props.setToggleFriends(false,u.id)
                        })

                    }}>Добавить в друзья</button>}
                    </div>
                    </span>
                </div>
            </div>)}
    </div>)
}


export default Users