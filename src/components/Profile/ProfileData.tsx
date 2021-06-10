import React from 'react';
import {UserProfileType} from "../../redux/profileReducer";
import {createField} from "../../Forms/FuncHelper";
import {Input, Textarea} from '../../Forms/FormComponents';
import {InjectedFormProps, reduxForm } from 'redux-form';
import {LoginRedux} from "../../Login";
type ContactType={
    userProfile:UserProfileType
    isOwner:boolean
    goToEditMode:()=>void
}
type FormDataType ={
    fullName:string
    aboutMe:string
lookingForAJob:boolean
    lookingForAJobDescription:string
    // Contacts:Object
}

 export const EditProfileModeForm:React.FC<InjectedFormProps<FormDataType>> =(props)=>{
return<form onSubmit={props.handleSubmit}>
    <button>save</button>
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
        {/*<div>*/}
        {/*   Contacts:{createField('fullName','Full name',Input,[],'','')}*/}
        {/*</div>*/}
</form>
}
const ProfileRedux=reduxForm<FormDataType>({form:'profile'})(EditProfileModeForm)
export const EditModeProfile:React.FC<ContactType>=()=> {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (<div>
        <ProfileRedux onSubmit={onSubmit}/>
    </div>)
}
