import React, {ChangeEvent} from "react";
import {AxiosResponse} from "axios";

type PropsType = {
    status:string
    updateStatus:(status:string)=>void
}

class ProfileStatus extends React.Component<PropsType>{

    state={
        editMode:false,
        status:this.props.status,
        updateStatus:this.props.updateStatus
    }

activateMode=()=>{
    console.log(this)
        this.setState({
            editMode:true,

        })
    }
    onStatusChange=(e:ChangeEvent<HTMLInputElement>)=>{
       this.setState({status:e.target.value})
}
        deactivateMode=()=>{
            this.setState({
                editMode:false
            })

            this.props.updateStatus(this.state.status)
        }
    render() {
     return<div>
         <div>
             {this.state.editMode && <input value={this.state.status} onChange={this.onStatusChange} onBlur={this.deactivateMode} autoFocus/>}
         </div>
         <div>

             {!this.state.editMode && <span  onClick={this.activateMode}>{this.state.status||"----"}</span>}
         </div>
     </div>
    }
}


export default ProfileStatus