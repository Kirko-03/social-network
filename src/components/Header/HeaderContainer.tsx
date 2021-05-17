import React from "react";
import Header from "./Header";
import {getAuthUserData, logout} from "./authReducer";
import {RootReduxState} from "../../redux/redux-store";
import {connect} from "react-redux";
import {compose} from "redux";


type MapStateToPropsType = {
    id?: number | null
    email?: string | null
    login: string | null
    isAuth: boolean
}
type MapDispatchToPropsType = {
    getAuthUserData: () => void
    logout:()=>void

}
export type HeaderContainerType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props} />
    }
}

const MapStateToProps = (state: RootReduxState) => ({isAuth: state.auth.isAuth, login: state.auth.login})

export default compose(connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootReduxState>(MapStateToProps, {getAuthUserData,logout}))(HeaderContainer)