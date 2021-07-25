import React, {ChangeEvent, useEffect, useState} from "react";

type PropsType = {
    status: string
    updateStatus: (newStatus: string) => void
    isOwner:boolean
}
// type StateType = {
//     editMode: boolean,
//     status: string
// }

    let ProfileStatus = (props:PropsType) =>{
    let [editMode,setEditMode]=useState(false)
        let[status,setStatus] = useState(props.status)
useEffect(()=>{
    setStatus(props.status)
},[props.status])

        const activeEditMode=()=> {

    setEditMode(true)
    }
        const deactivateEditMode=()=> {
            setEditMode(false)
            if(props.isOwner) //чтобы не обновлялся статус при нажатии на чужой статус
            props.updateStatus(status)
        }
          const  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
setStatus(e.currentTarget.value)
        }
        return <span>Status:
            <span>
                {editMode &&
                <input value={status} onChange={onStatusChange} onBlur={deactivateEditMode}
                       autoFocus/>}
            </span>
            <span>
                {!editMode && <span onClick={props.isOwner?activeEditMode:deactivateEditMode}>{props.status || "-"}</span>}
            </span>
        </span>
    }


export default ProfileStatus