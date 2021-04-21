import React from "react";

type PropsType = {
    status:string
}

class ProfileStatus extends React.Component<PropsType>{

    state={
        editMode:false}

activateMode=()=>{
    console.log(this)
        this.setState({
            editMode:true
        })
        }
        deactivateMode=()=>{
            this.setState({
                editMode:false
            })
        }
    render() {
     return<div>
         <div>
             {this.state.editMode && <input value={this.props.status} onBlur={this.deactivateMode} autoFocus/>}
         </div>
         <div>

             {!this.state.editMode && <span  onClick={this.activateMode}>{this.props.status}</span>}
         </div>
     </div>
    }
}


export default ProfileStatus