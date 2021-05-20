import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News"
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './redux/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from "./Login";


const App = () => {

    return (
        <BrowserRouter>
            <div className="app-writter">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-writter-body">
                 <Redirect to={'/profile'}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/friends' render={() => <Friends/>}/>
                    <Route path='/login' render={() => <Login/>}/>

                </div>


            </div>
        </BrowserRouter>
    );
}
export default App;
