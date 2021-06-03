import React, {Suspense} from "react"
import {Redirect} from "react-router-dom";
import {RootReduxState} from "./redux/redux-store";
import {connect} from "react-redux";
import Preloader from "./components/preloader/preloader";

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
            if (this.props.isAuth === false) return <Redirect to={'/login'}/>
            return <Component {...this.props}/>
        }
    }

    let ConnectedAuthRedirectComponent = connect<MapStateToPropsType, any, {}, RootReduxState>(mapStateToProps)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}
export const lazyComponent = (Component: any) => {
    return(<Suspense fallback={<Preloader/>}>
        <Component />
    </Suspense>)
}
