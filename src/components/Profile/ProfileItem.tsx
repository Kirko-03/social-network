import React from 'react';
import { FC } from 'react';
import { ChangeEvent } from 'react';
import {Link} from 'react-router-dom';

import userPhoto from "../../nophoto.png";
import { UserProfileType } from '../../redux/profileReducer';
import Preloader from '../preloader/preloader';
import {DefaultProfile} from "./DefaultProfileMode";


type ProfileType = {
    userProfile: UserProfileType | null
    isOwner:boolean
    savePhoto:(file:string)=>void
}
const ProfileItem = (props: ProfileType) => {
    let onPhotoSelected = (e:ChangeEvent<any>)=>{

       if(e.target.files)
{
    props.savePhoto(e.target.files[0])
}
    }

    if (props.userProfile === null) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    src='https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg'
                />

            </div>
            <div >
                {
                    <img style={{width:"300px",height:"300px"}} src={props.userProfile?.photos.large ? props.userProfile?.photos.large : userPhoto}/>
                }
                {props.isOwner&& <input type={'file'} onChange={onPhotoSelected}/>}

                <div>Full name:{props.userProfile?.fullName}</div>
                <div>About me:{props.userProfile?.aboutMe}</div>
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
                <DefaultProfile userProfile={props.userProfile}/>
            </div>
        </div>
    )
}
export default ProfileItem;