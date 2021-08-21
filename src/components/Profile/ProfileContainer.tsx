import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootReduxState} from "../../redux/redux-store";

import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {
    getStatus,
    getUserProfile,
    savePhoto,
    saveProfile,
    updateStatus,
    UserProfileType
} from '../../redux/profileReducer';
import {compose} from "redux";
import {FormDataType} from "./ProfileData";

type ParamProps = {
    userId: any
}

type MapStateToPropsType = {
    userProfile: UserProfileType | null
    isAuth: boolean
    status: string
    authorizedId: number | null
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    savePhoto: (file: string) => void
    updateStatus: (status: string) => void
    saveProfile: (profile: FormDataType) => void
}

export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
export type PropsType = RouteComponentProps<ParamProps> & ProfilePropsType
let mapStateToProps = (state: RootReduxState) => {
    return {
        isAuth: state.auth.isAuth,
        userProfile: state.profilePage.userProfile,
        status: state.profilePage.status,
        authorizedId: state.auth.id
    }
}


class ProfileContainer extends React.Component<PropsType> {
    componentLifeCycle() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedId
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.componentLifeCycle()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.componentLifeCycle()
        }
    }


    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return <Profile userProfile={this.props.userProfile}
                        isOwner={!this.props.match.params.userId}
                        status={this.props.status}
                        savePhoto={this.props.savePhoto}
                        saveProfile={this.props.saveProfile}
                        updateStatus={this.props.updateStatus}
        />
    }

}


export default compose<React.ComponentType>(withRouter, connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootReduxState>(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus, savePhoto, saveProfile
}))(ProfileContainer)
