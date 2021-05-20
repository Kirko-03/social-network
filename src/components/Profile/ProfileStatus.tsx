import React, {ChangeEvent} from "react";

type PropsType = {
    status: string
    updateStatus: (newStatus: string) => void
}
type StateType = {
    editMode: boolean,
    status: string
}

class ProfileStatus extends React.Component<PropsType, StateType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateMode = () => {

        console.log(this)
        this.setState({
            editMode: true,
            status: this.state.status
        })
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }
    deactivateMode = () => {
        this.setState({
            editMode: false
        })

        this.props.updateStatus(this.state.status)
    }
    componentDidUpdate = (prevProps: Readonly<PropsType>) => {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return <div>
            <div>
                {this.state.editMode &&
                <input value={this.state.status} onChange={this.onStatusChange} onBlur={this.deactivateMode}
                       autoFocus/>}
            </div>
            <div>

                {!this.state.editMode && <span onClick={this.activateMode}>{this.state.status || "-"}</span>}
            </div>
        </div>
    }
}


export default ProfileStatus