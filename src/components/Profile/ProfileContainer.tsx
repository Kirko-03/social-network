import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootReduxState} from "../../redux/redux-store";

import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {getStatus, getUserProfile, updateStatus, UserProfileType} from '../../redux/profileReducer';
import {withAuthRedirect} from "../../RedirectHOC";
import {compose} from "redux";

type ParamProps = {
    userId: any
}

type MapStateToPropsType = {
    userProfile: UserProfileType | null
    isAuth: boolean
    status:string
    authorizedId: number | null
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
    getStatus:(userId: number) => void
    updateStatus:(status:string)=>void


}

export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
export type PropsType = RouteComponentProps<ParamProps> & ProfilePropsType
let mapStateToProps = (state: RootReduxState) => {
    return {
        isAuth: state.auth.isAuth,
        userProfile: state.profilePage.userProfile,
        status: state.profilePage.status,
        authorizedId:state.auth.id
    }
}

class ProfileContainer extends React.Component<PropsType> {


    componentDidMount() {


        let userId = this.props.match.params.userId
        if (!userId) {
            userId =16706
        }

        this.props.getUserProfile(userId)
        this.props.getStatus(userId)


    }


    render() {
        if(!this.props.isAuth)return <Redirect to={'/login'}/>
        return <Profile  userProfile={this.props.userProfile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}
        />
    }

}


let WithRouterContainer = withRouter(ProfileContainer)

export default compose(withAuthRedirect, connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootReduxState>(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus
}))(WithRouterContainer)
