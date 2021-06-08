import {UserProfileType} from "../../redux/profileReducer";
type ContactType = {
    userProfile:UserProfileType | null
}

export const DefaultProfile=(props:ContactType)=>{
    return(
        <div>
        <div>Full name:{props.userProfile?.fullName}</div>
    <div>About me:{props.userProfile?.aboutMe}</div>
            <div>Looking for A job:{props.userProfile?.lookingForAJob}</div>
            <div>Looking for A job description:{props.userProfile?.lookingForAJobDescription}</div>

        </div>)
            }