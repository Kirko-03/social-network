import React, {ChangeEvent, useState} from 'react';

import userPhoto from "../../nophoto.png";
import {saveProfile, UserProfileType} from '../../redux/profileReducer';
import Preloader from '../preloader/preloader';
import {DefaultProfile} from "./DefaultProfileMode";
import {Basic, FormDataType} from './ProfileData';


type ProfileType = {
    userProfile: UserProfileType | null
    isOwner: boolean
    savePhoto: (file: string) => void
    saveProfile :(profile:FormDataType)=>void
}
const ProfileItem = (props: ProfileType) => {
    let [editMode, setEditMode] = useState(false)

    let onPhotoSelected = (e: ChangeEvent<any>) => {

        if (e.target.files) {
            props.savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData: FormDataType) => {
        saveProfile(formData)
        setEditMode(false)
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
                {/*<div>*/}
                {/*    Contacts:*/}
                {/*    {props.userProfile?.contacts.facebook ?*/}
                {/*        <div>facebook: {props.userProfile?.contacts.facebook}</div> : null*/}
                {/*    }*/}
                {/*    {props.userProfile?.contacts.github ?*/}
                {/*        <div>github:{props.userProfile?.contacts.github}</div> : null*/}
                {/*    }*/}
                {/*    {props.userProfile?.contacts.instagram ?*/}
                {/*        <div>instagram:{props.userProfile?.contacts.instagram}</div> : null*/}
                {/*    }*/}
                {/*    {props.userProfile?.contacts.mainLink ?*/}
                {/*        <div>mainLink:{props.userProfile?.contacts.mainLink}</div> : null*/}
                {/*    }*/}
                {/*    {props.userProfile?.contacts.twitter ?*/}
                {/*        <div>twitter:{props.userProfile?.contacts.twitter}</div> : null*/}
                {/*    }*/}
                {/*    {props.userProfile?.contacts.vk ?*/}
                {/*        <div>vk:{props.userProfile?.contacts.vk}</div> : null*/}
                {/*    }*/}
                {/*    {props.userProfile?.contacts.youtube ?*/}
                {/*        <div>youtube:{props.userProfile?.contacts.youtube}</div> : null*/}
                {/*    }*/}

                {/*    {props.userProfile?.lookingForAJobDescription ?*/}
                {/*        <div>Looking for A job description:{props.userProfile?.lookingForAJobDescription}</div> : null*/}
                {/*    }*/}
                {/*</div>*/}
                {editMode ? <div><Basic userProfile={props.userProfile} onSubmit={onSubmit}/></div> :
                    <div><DefaultProfile goToEditMode={() => {
                        setEditMode(true)
                    }} isOwner={props.isOwner}   userProfile={props.userProfile}/></div>}


            </div>
        </div>
    )}
export default ProfileItem;