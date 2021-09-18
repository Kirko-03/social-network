import { Input } from '@material-ui/core';
import React, {ChangeEvent, useState} from 'react';
import userPhoto from "../../nophoto.png";
import {UserProfileType} from '../../redux/profileReducer';
import Preloader from '../preloader/preloader';
import {DefaultProfile} from "./DefaultProfileMode";
import {ProfileRedux, FormDataType} from './ProfileData';
import style from './Profile.module.scss'

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
    
    return (
        <div>
            <div>
                {
                    <img alt='ava' className={style.image}
                         src={props.userProfile?.photos.large ? props.userProfile?.photos.large : userPhoto}/>
                }
                {props.isOwner&&editMode?<div><Input type={'file'} onChange={onPhotoSelected}/></div>:''}
                {editMode ? <div><ProfileRedux  initialValues={props.userProfile} profile={props.userProfile} onSubmit={onSubmit}/></div> :
                    <div><DefaultProfile  goToEditMode={() => {
                        setEditMode(true)
                    }} isOwner={props.isOwner}   userProfile={props.userProfile}/></div>}


            </div>
        </div>
    )}
export default ProfileItem;