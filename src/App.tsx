import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from "./components/News/News"
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./redux/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";




const App = () => {

    return (
        <BrowserRouter>
            <div className="app-writter">
                <Header/>
                <Navbar/>
                <div className="app-writter-body">
                    <Route path='/dialogs' render={() => <DialogsContainer />}/>
                    <Route path='/profile'
                           render={() => <ProfileContainer />}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/friends' render={() => <Friends/>}/>

                </div>


            </div>
        </BrowserRouter>
    );
}
export default App;
