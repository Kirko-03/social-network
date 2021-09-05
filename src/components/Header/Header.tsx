import { Button } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom';
import { RootReduxState } from '../../redux/redux-store';
import s from './Header.module.css';
import {HeaderContainerType} from "./HeaderContainer";

const Header = (props: HeaderContainerType) => {
    let darkBack = useSelector<RootReduxState>(state=>state.app.darkBack)
    return (
        <header className={darkBack?s.darkHeader:s.defaultHeader}>
            <img alt={'ava'} className={s.header}
            src={!darkBack?'https://static.mk.ru/upload/entities/2018/11/06/articles/detailPicture/88/e3/19/b1/a24bfa5a27d628949cfed7c792c7b99f.jpg':'https://cdn.mos.cms.futurecdn.net/v4CC7FKYdM6M6yLP3tUYpm-1200-80.jpg'} />
            <div className={s.login} style={{color:darkBack?'blanchedalmond':'black'}}  >
                {props.isAuth ? <p>Login:{props.login}
                    <NavLink to={'/dialogs'}><Button style={{color:darkBack?'blanchedalmond':'black'}}  onClick={props.logout}>Logout</Button></NavLink>
                </p> : <Button><NavLink to={'/login'}>Login</NavLink></Button>
                }
            </div>

        </header>
    )
}
export default Header;