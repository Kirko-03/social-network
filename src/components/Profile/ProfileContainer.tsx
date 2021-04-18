import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootReduxState} from "../../redux/redux-store";

import {RouteComponentProps, withRouter} from 'react-router-dom';
import {setUserProfile, UserProfileType} from '../../redux/profileReducer';
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../RedirectHOC";

type ParamProps={
    userId:any
}

type MapStateToPropsType = {
    userProfile: UserProfileType | null
}
type MapDispatchToPropsType = {
    setUserProfile: (userProfile: UserProfileType | null) => void

}

export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
export type PropsType = RouteComponentProps<ParamProps> & ProfilePropsType
let mapStateToProps = (state: RootReduxState) => {
    return {
        userProfile: state.profilePage.userProfile,

    }
}
 class ProfileContainer extends React.Component<PropsType> {


    componentDidMount() {




        let userId = this.props.match.params.userId

        if(!userId){
            userId = 15920
        }

       usersAPI.getProfile(userId).then
        (response => {
            this.props.setUserProfile(response.data)
        })

    }


    render() {
        return <Profile {...this.props} userProfile={this.props.userProfile}/>
    }
}


let WithRouterContainer=withRouter(ProfileContainer)

export default withAuthRedirect(connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootReduxState>(mapStateToProps, {setUserProfile})(WithRouterContainer))
