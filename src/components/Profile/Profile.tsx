import React from 'react';
import b from './Profile.module.css';


import MyPostContainer from "./MyPosts/MyPostContainer";
import {UserProfileType} from "../../redux/profileReducer";
import ProfileItem from './ProfileItem';


type ProfileType = {
    userProfile: UserProfileType | null
}

const Profile = (props: ProfileType) => {

    return (
        <div className={b.body}>
            <ProfileItem userProfile={props.userProfile}/>
            <MyPostContainer/>
        </div>
    )
}
export default Profile;