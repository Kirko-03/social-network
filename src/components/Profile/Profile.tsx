import React from 'react';
import b from './Profile.module.css';


import MyPostContainer from "./MyPosts/MyPostContainer";
import {UserProfileType} from "../../redux/profileReducer";
import ProfileItem from './ProfileItem';
import ProfileStatus from './ProfileStatus';
import { FC } from 'react';


type ProfileType = {
    userProfile: UserProfileType | null
    status:string
    updateStatus:(newStatus:string)=>void
    isOwner:boolean
    savePhoto:(file:string)=>void
}

const Profile = (props: ProfileType) => {

    return (
        <div className={b.body}>
            <ProfileItem userProfile={props.userProfile} isOwner={props.isOwner} savePhoto={props.savePhoto}/>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <MyPostContainer />
        </div>
    )
}
export default Profile;