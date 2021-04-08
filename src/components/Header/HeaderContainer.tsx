import axios from "axios";
import React from "react";
import Header from "./Header";
import {setAuthUserData} from "./authReducer";
import {RootReduxState} from "../../redux/redux-store";
import {connect} from "react-redux";


type MapStateToPropsType = {
    id?: number | null
    email?: string | null
    login: string | null
    isAuth:boolean
}
type MapDispatchToPropsType = {
    setAuthUserData: (id: number | null,
                      email: string | null,
                      login: string | null) => void
}
export type HeaderContainerType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
            debugger
            if (response.data.resultCode === 0) {
                let {userId, login, email} = response.data.data
                this.props.setAuthUserData(userId, login, email)
            }
        })
    }

    render() {
        return <Header {...this.props} />
    }
}

const MapStateToProps = (state: RootReduxState) => ({isAuth:state.auth.isAuth,login:state.auth.login})

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootReduxState>(MapStateToProps, {setAuthUserData})(HeaderContainer)