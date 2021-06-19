import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';
import {HeaderContainerType} from "./HeaderContainer";

const Header = (props: HeaderContainerType) => {
    return (
        <header className={s.header}>
            <img className={s.header}
                 src='https://static.mk.ru/upload/entities/2018/11/06/articles/detailPicture/88/e3/19/b1/a24bfa5a27d628949cfed7c792c7b99f.jpg'></img>
            <div className={s.login}>
                {props.isAuth ? <p>Login:{props.login}
                    <NavLink to={'/dialogs'}><button onClick={props.logout}>Logout</button></NavLink>
                </p> : <div><NavLink to={'/login'}>Login</NavLink></div>
                }
            </div>

        </header>
    )
}
export default Header;