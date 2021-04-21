import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootReduxState} from "../../redux/redux-store";

import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {getUserProfile, UserProfileType} from '../../redux/profileReducer';
import {withAuthRedirect} from "../../RedirectHOC";
import {compose} from "redux";

type ParamProps = {
    userId: any
}

type MapStateToPropsType = {
    userProfile: UserProfileType | null
    isAuth:boolean
}
type MapDispatchToPropsType = {
    getUserProfile:(userId:number) =>void

}

export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
export type PropsType = RouteComponentProps<ParamProps> & ProfilePropsType
let mapStateToProps = (state: RootReduxState) => {
    return {
        isAuth:state.auth.isAuth,
        userProfile: state.profilePage.userProfile,

    }
}

class ProfileContainer extends React.Component<PropsType> {


    componentDidMount() {


        let userId = this.props.match.params.userId

        if (!userId) {
            userId = 15920
        }

        this.props.getUserProfile(userId)
    }


    render() {
        //if(this.props.isAuth===false)return <Redirect to={'/login'}/>
        return <Profile {...this.props} userProfile={this.props.userProfile}/>
    }

}


let WithRouterContainer = withRouter(ProfileContainer)

export default compose(withAuthRedirect,connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootReduxState>(mapStateToProps, {getUserProfile}))(WithRouterContainer)
