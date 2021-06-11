import React from 'react';
import {ContactsType, UserProfileType} from "../../redux/profileReducer";
import {createField, createFormikField} from "../../Forms/FuncHelper";
// import {Input, Textarea} from '../../Forms/FormComponents';
import {Form, Formik} from 'formik';
export type FormDataType = {
    userProfile: UserProfileType
    onSubmit: (profile: FormDataType) => void
}
export const Basic = (props:FormDataType) => (
    <div>
        <h1>Any place in your app!</h1>
        <Formik
            initialValues={{
                fullName:props.userProfile.fullName,
                aboutMe: props.userProfile.aboutMe,
                lookingForAJob:props.userProfile.lookingForAJob,
                lookingForAJobDescription:props.userProfile.lookingForAJobDescription,
                contacts:props.userProfile.contacts,
                userProfile:props.userProfile,
                onSubmit:props.onSubmit }}
            onSubmit={props.onSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <button type='submit' >save</button>
                    <div>
                        {createFormikField('fullName', 'Full name', 'input', [], '', 'Full name:')}
                    </div>
                    <div>
                        {createFormikField('aboutMe', 'About me', 'textarea', [], '', 'About me:')}
                    </div>
                    <div>
                        {createFormikField('lookingForAJob', 'Looking for A job','input', [], {type: 'checkbox'}, 'looking for A job:')}
                    </div>
                    <div>
                        {createFormikField('lookingForAJobDescription', 'My skills', 'textarea', [], '', 'My skills:')}
                    </div>
                    <div>
                        <b>Contacts</b>:{Object.keys(props.userProfile).map(key => {
                            return <div>
                                <b>{key}:{createFormikField('contacts.' + key, key, 'input', [], [], '')}</b>
                            </div>
                        }
                    )
                    }
                    </div>
                </Form>
            )}
        </Formik>
    </div>
);
// const ProfileRedux = reduxForm<FormDataType>({form: 'profile'})(EditProfileModeForm)
// export const EditModeProfile: React.FC<ContactType> = (props) => {
//     debugger
//     return (<div>
//         <ProfileRedux onSubmit={props.onSubmit}/>
//     </div>)
// }
