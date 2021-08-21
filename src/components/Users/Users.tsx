import React from "react";
import {InitialStateType} from "../../redux/usersReducer";
import {Paginator} from "../../Paginator";
import {User} from "./User";

export type UsersFuncType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    pageSize: number
    totalItemsCount: number
    currentPage: number
    usersPage: InitialStateType
    onPageChanged: (currentPage: number) => void
    followingInProgress: any[]
    setToggleFriends: (loadItem: boolean, userId: number) => void
}

export let Users = React.memo((props: UsersFuncType) => {
    return( <>
            <Paginator totalItemsCount={props.totalItemsCount}
                       onPageChanged={props.onPageChanged}
                       currentPage={props.currentPage}
                       pageSize={props.pageSize}/>
            <User followingInProgress={props.followingInProgress} setToggleFriends={props.setToggleFriends}
                  unfollow={props.unfollow} follow={props.follow} usersPage={props.usersPage} />
    </>
    )
})
