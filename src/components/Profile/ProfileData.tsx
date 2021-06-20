
import React from 'react';
import {ContactsType, UserProfileType} from "../../redux/profileReducer";
import {createField} from "../../Forms/FuncHelper";
import {Input, Textarea} from '../../Forms/FormComponents';
import {InjectedFormProps, reduxForm } from 'redux-form';
type ContactType={
    profile:UserProfileType
}
export type FormDataType ={
    fullName:string
    aboutMe:string
    lookingForAJob:boolean
    lookingForAJobDescription:string
    contacts:ContactsType
}

export const EditProfileModeForm:React.FC<InjectedFormProps<UserProfileType,ContactType>&ContactType> =({handleSubmit,profile,error})=>{
    return<form onSubmit={handleSubmit}>
        <button style={{background:'none'}}>save</button>
        {error && <div style={{color: 'red', border: '1px red solid', maxWidth: '200px'}}>
            {error}
        </div>}
        <div>
            {createField('fullName','Full name',Input,[],'',' Full name:')}
        </div>
        <div>
            {createField('aboutMe','About me',Input,[],'','About me:')}
        </div>
        <div>
            {createField('lookingForAJob','Looking for A job',Input,[],{type:'checkbox'},'looking for A job:')}
        </div>
        <div>
            {createField('lookingForAJobDescription','My skills',Textarea,[],'','My skills:')}
        </div>
        <div>
            Contacts:{Object.keys(profile.contacts).map(key=><div>{createField('contacts.'+key,key,Input,[],'','')}</div>)}
        </div>
    </form>
}
export const ProfileRedux=reduxForm<UserProfileType,ContactType>({form:'profile'})(EditProfileModeForm)

