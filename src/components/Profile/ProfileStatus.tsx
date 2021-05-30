import React, {ChangeEvent, useEffect, useState} from "react";

type PropsType = {
    status: string
    updateStatus: (newStatus: string) => void
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
            props.updateStatus(status)
        }
          const  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
setStatus(e.currentTarget.value)
        }
        return <div>
            <div>
                {editMode &&
                <input value={status} onChange={onStatusChange} onBlur={deactivateEditMode}
                       autoFocus/>}
            </div>
            <div>

                {!editMode && <span onClick={activeEditMode}>{status || "-"}</span>}
            </div>
        </div>
    }


export default ProfileStatus