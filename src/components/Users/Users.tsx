import React from "react";
import {InitialStateType} from "../../redux/usersReducer";
import {Paginator} from "../../Paginator";
import {User} from "./User";

export type UsersFuncType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    pageSize: number
    totalUserCount: number
    currentPage: number
    usersPage: InitialStateType
    onPageChanged: (currentPage: number) => void
    followingInProgress: any[]
    setToggleFriends: (loadItem: boolean, userId: number) => void
}

export let Users = (props: UsersFuncType) => {
    return( <>
            <Paginator totalUserCount={props.totalUserCount}
                       onPageChanged={props.onPageChanged}
                       currentPage={props.currentPage}
                       pageSize={props.pageSize}/>
            <User followingInProgress={props.followingInProgress} setToggleFriends={props.setToggleFriends}
                  unfollow={props.unfollow} follow={props.follow} usersPage={props.usersPage} />
    </>
    )
}
