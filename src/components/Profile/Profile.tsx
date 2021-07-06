import React from 'react';
import b from './Profile.module.css';
import MyPostContainer from "./MyPosts/MyPostContainer";
import {UserProfileType} from "../../redux/profileReducer";
import ProfileItem from './ProfileItem';
import ProfileStatus from './ProfileStatus';
import {FormDataType} from "./ProfileData";


type ProfileType = {
    userProfile: UserProfileType | null
    status: string
    updateStatus: (newStatus: string) => void
    isOwner: boolean
    savePhoto: (file: string) => void
    saveProfile: (profile: FormDataType) => void
}

const Profile = (props: ProfileType) => {
    return (
        <div className={b.body} style={props.isOwner?{background:''}:{background:' linear-gradient(270deg, rgba(0, 97, 211, 1) 10%, rgba(0, 255, 239, 1) 100%)'}}>
            <ProfileItem userProfile={props.userProfile} isOwner={props.isOwner} savePhoto={props.savePhoto}
                         saveProfile={props.saveProfile}/>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <MyPostContainer/>
        </div>
    )
}
export default Profile;