import React from "react";

type PropsType = {
    status:string
}
class ProfileStatus extends React.Component<PropsType>{
    state={
        editMode:false
    }
activateMode(){
        this.setState({
            editMode:true
        })
        }
        deactivateMode(){
            this.setState({
                editMode:false
            })
        }
    render() {
     return<div>
         <div>
             {this.state.editMode && <input value={this.props.status} onBlur={this.deactivateMode.bind(this)} autoFocus/>}
         </div>
         <div>
             {!this.state.editMode && <span onClick={this.activateMode.bind(this)}>{this.props.status}</span>}
         </div>
     </div>
    }
}


export default ProfileStatus