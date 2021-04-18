import React from "react"
import {Redirect} from "react-router-dom";
import {RootReduxState} from "./redux/redux-store";
import {connect} from "react-redux";

type MapStateToPropsType = {
    isAuth: boolean

}

let mapStateToProps = (state: RootReduxState) => {
    return {
        isAuth: state.auth.isAuth
    }
}
export const withAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<any> {
        render() {
            if (this.props.isAuth === true) return <Redirect to={'/login'}/>
            return <Component {...this.props}/>
        }
    }

    let ConnectedAuthRedirectComponent = connect<MapStateToPropsType, any, {}, RootReduxState>(mapStateToProps)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}