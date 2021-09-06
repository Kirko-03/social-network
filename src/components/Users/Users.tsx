import React, { useEffect, useState } from "react";
import {InitialStateType} from "../../redux/usersReducer";
import {Paginator} from "../../Paginator";
import {User} from "./User";
import { ButtonStyle } from "../../Forms/Button";
import { Button } from "@material-ui/core";

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
    friends:boolean
    friendsTab:(friends:boolean)=>void
    setTotalItemsCount: (totalItemsCount: number) => void
}

export let Users = React.memo((props: UsersFuncType) => {
    let friendsButton=()=>{
        return <Button onClick={()=>props.friendsTab(!props.friends)} style={ButtonStyle}>{props.friends?'users':'friends from this hundred'}</Button>
   
    }
    return( <>
    {friendsButton()}   

    {!props.friends?<Paginator totalItemsCount={props.totalItemsCount}
                       onPageChanged={props.onPageChanged}
                       currentPage={props.currentPage}
                       pageSize={props.pageSize} friends={props.friends}/>:''}
            <User friends={props.friends} followingInProgress={props.followingInProgress} setToggleFriends={props.setToggleFriends}
                  unfollow={props.unfollow} follow={props.follow} usersPage={props.usersPage} />
    </>
    )
})
