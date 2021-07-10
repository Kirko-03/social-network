import React, {lazy, Suspense} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News"
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, HashRouter, Redirect, Route} from "react-router-dom";
import Friends from "./components/Friends/Friends";
import HeaderContainer from './components/Header/HeaderContainer';
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import store, {RootReduxState} from "./redux/redux-store";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/preloader/preloader";
import {lazyComponent} from "./RedirectHOC";
import Login from './Login';

let ProfileContainer = lazy(()=>import('./components/Profile/ProfileContainer'))
let DialogsContainer = lazy(()=>import('./components/Dialogs/DialogsContainer'))
let UsersContainer = lazy(()=>import('./components/Users/UsersContainer'))

type MapDispatchToPropsType = {
    initializeApp: () => void
}
type MapStateToPropsType = {
    initialized: boolean
}
type AppPropsType = MapDispatchToPropsType & MapStateToPropsType

class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.initializeApp()

    }

    render() {
        if (!this.props.initialized)
            return <Preloader/>
        return (
            <BrowserRouter>
                <div className="app-writer">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="app-writer-body">
                        <Redirect to={'/profile'}/>
                        <Route path='/dialogs' render={() => {
                            return(<Suspense fallback={<Preloader/>}>
                                {lazyComponent(DialogsContainer)}
                            </Suspense>)
                        }
                        }/>
                        <Route path='/profile/:userId?' render={() => {
                            return(<Suspense fallback={<Preloader/>}>
                                {lazyComponent(ProfileContainer)}
                            </Suspense>)
                        }}/>
                        <Route path='/users' render={() =>{
                            return(<Suspense fallback={<Preloader/>}>
                                {lazyComponent(UsersContainer)}
                            </Suspense>)
                        } }/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/friends' render={() => <Friends/>}/>
                <Route path='/login' render={() => <Login />}/>
                    </div>


                </div>
            </BrowserRouter>
        );
    }
}


let mapStateToProps = (state: RootReduxState) => {
    return {
        initialized: state.app.initialized
    }
}
let SocialNetApp = () =>
    <HashRouter>
    <Provider store={store}>
        <AppContainer/>
    </Provider>
</HashRouter>
let AppContainer =  compose<React.ComponentType>(connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootReduxState>(mapStateToProps, {initializeApp}))(App)
export default SocialNetApp