import React, {ChangeEvent, useState} from 'react';

import userPhoto from "../../nophoto.png";
import {saveProfile, UserProfileType} from '../../redux/profileReducer';
import Preloader from '../preloader/preloader';
import {DefaultProfile} from "./DefaultProfileMode";
import {ProfileRedux, FormDataType} from './ProfileData';


type ProfileType = {
    userProfile: UserProfileType | null
    isOwner: boolean
    savePhoto: (file: string) => void
    saveProfile :(profile:FormDataType)=>any
}
const ProfileItem = (props: ProfileType) => {
    let [editMode, setEditMode] = useState(false)

    let onPhotoSelected = (e: ChangeEvent<any>) => {

        if (e.target.files) {
            props.savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData: FormDataType) => {
        props.saveProfile(formData).then(()=>
        setEditMode(false)
        )
    }
    if (props.userProfile === null) {
        return <Preloader/>
    }
    debugger
    return (
        <div>
            <div>
                <img alt={'img'}
                    src='https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg'
                />

            </div>
            <div>
                {
                    <img alt='ava' style={{width: "300px", height: "300px"}}
                         src={props.userProfile?.photos.large ? props.userProfile?.photos.large : userPhoto}/>
                }
                {props.isOwner && <input type={'file'} onChange={onPhotoSelected}/>}
                {editMode ? <div><ProfileRedux initialValues={props.userProfile} profile={props.userProfile} onSubmit={onSubmit}/></div> :
                    <div><DefaultProfile goToEditMode={() => {
                        setEditMode(true)
                    }} isOwner={props.isOwner}   userProfile={props.userProfile}/></div>}


            </div>
        </div>
    )}
export default ProfileItem;