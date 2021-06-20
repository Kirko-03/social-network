import {ContactsType, UserProfileType} from "../../redux/profileReducer";
type ContactType = {
    userProfile:UserProfileType
    isOwner:boolean
    goToEditMode:()=>void

}
type InfoType={
    contactTitle:string
    contactValue:string
}

export const DefaultProfile=(props:ContactType)=>{
    const userProfile=props.userProfile
    const Contacts = ({contactTitle,contactValue}:InfoType) =>{
return <div><b>{contactTitle}</b>:{contactValue}</div>
    }
    return(

        <div>
            {props.isOwner&&<button style={{background:'none'}} onClick={props.goToEditMode}>edit</button>}
        <div>Full name:{userProfile.fullName}</div>
    <div>About me:{userProfile.aboutMe}</div>
            <div>Looking for A job:{userProfile.lookingForAJob?'yes':'no'}</div>
            <div>My skills:{userProfile.lookingForAJobDescription}</div>

            <div><b>Contacts</b>:{Object.keys(userProfile.contacts).map(key=>{
                return <div style={{paddingLeft:'10px'}}><Contacts  key={key} contactTitle={key} contactValue={userProfile.contacts[key as keyof ContactsType]}/></div>
            })}</div>

        </div>)
            }