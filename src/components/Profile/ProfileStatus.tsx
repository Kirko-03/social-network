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
//
// class ProfileStatus extends React.Component<PropsType, StateType> {
//
//     state = {
//         editMode: false,
//         status: this.props.status
//     }
//
//     activateMode = () => {
//
//         console.log(this)
//         this.setState({
//             editMode: true,
//             status: this.state.status
//         })
//     }
//     onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
//         this.setState({status: e.currentTarget.value})
//     }
//     deactivateMode = () => {
//         this.setState({
//             editMode: false
//         })
//
//         this.props.updateStatus(this.state.status)
//     }
//     componentDidUpdate = (prevProps: Readonly<PropsType>) => {
//         if (prevProps.status !== this.props.status) {
//             this.setState({
//                 status: this.props.status
//             })
//         }
//     }
//
//     render() {
//         return <div>
//             <div>
//                 {this.state.editMode &&
//                 <input value={this.state.status} onChange={this.onStatusChange} onBlur={this.deactivateMode}
//                        autoFocus/>}
//             </div>
//             <div>
//
//                 {!this.state.editMode && <span onClick={this.activateMode}>{this.state.status || "-"}</span>}
//             </div>
//         </div>
//     }
// }


export default ProfileStatus