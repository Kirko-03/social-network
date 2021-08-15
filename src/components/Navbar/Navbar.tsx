import React from 'react';
import c from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import { Button } from '@material-ui/core';
const Navbar = () =>{
    return(
        <nav className={c.nav}>
        <div className={c.item}>
            <Button><NavLink to="/profile" activeClassName={c.activeLink}>Profile</NavLink></Button>
        </div>
        <div className={c.item}>
            <Button><NavLink  to="/dialogs" activeClassName={c.activeLink}>Messages</NavLink></Button>
        </div>
        <div className={c.item} >
            <Button><a href="https://news.ru/" >News</a></Button>
        </div>
        <div className={c.item}>
            <Button><a href={'https://zaycev.net'}>Music</a></Button>
        </div>
        <div className={c.item}>
     <Button><NavLink to="/settings" activeClassName={c.activeLink}>Settings</NavLink></Button>
        </div>
          
            <div className={c.item}>
                <Button><NavLink to="/users?" activeClassName={c.activeLink} className={c.friends}>Users</NavLink></Button>
            </div>
        </nav>
    )
}
export default Navbar;