import React from 'react';
import b from './Profile.module.css';


import MyPostContainer from "./MyPosts/MyPostContainer";
import {UserProfileType} from "../../redux/profileReducer";
import ProfileItem from './ProfileItem';
import ProfileStatus from './ProfileStatus';


type ProfileType = {
    userProfile: UserProfileType | null
    status:string
    updateStatus:(newStatus:string)=>void

}

const Profile = (props: ProfileType) => {

    return (
        <div className={b.body}>
            <ProfileItem userProfile={props.userProfile}/>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <MyPostContainer />
        </div>
    )
}
export default Profile;