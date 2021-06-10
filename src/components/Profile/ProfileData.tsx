import React from 'react';
import {UserProfileType} from "../../redux/profileReducer";
import {createField} from "../../Forms/FuncHelper";
import {Input, Textarea} from '../../Forms/FormComponents';
import {InjectedFormProps, reduxForm} from 'redux-form';

type ContactType = {
    initialValues: UserProfileType
    userProfile: UserProfileType
    onSubmit: (profile: FormDataType) => void
}


export type FormDataType = {
    aboutMe: string
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string

    // Contacts:Object
}

export const EditProfileModeForm: React.FC<InjectedFormProps<FormDataType>> = (props, userProfile: UserProfileType) => {

    return <form onSubmit={props.handleSubmit}>
        <button>save</button>
        <div>
            {createField('fullName', 'Full name', Input, [], [], ' Full name:')}
        </div>
        <div>
            {createField('aboutMe', 'About me', Textarea, [], '', 'About me:')}
        </div>
        <div>
            {createField('lookingForAJob', 'Looking for A job', Input, [], {type: 'checkbox'}, 'looking for A job:')}
        </div>
        <div>
            {createField('lookingForAJobDescription', 'My skills', Textarea, [], '', 'My skills:')}
        </div>
        <div>
            <b>Contacts</b>:{Object.keys(userProfile).map(key => {
            return <div>
                <b>{key}:{createField('contacts.' + key, key, Input, [], [], '')}</b>
            </div>
        })}
        </div>
    </form>
}
const ProfileRedux = reduxForm<FormDataType>({form: 'profile'})(EditProfileModeForm)
export const EditModeProfile: React.FC<ContactType> = (props) => {
    debugger
    return (<div>
        <ProfileRedux onSubmit={props.onSubmit}/>
    </div>)
}
