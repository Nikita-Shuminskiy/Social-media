import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'
import FriendsContainer from './FriendsBlock/FriendsBlockContainer';


const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item}`}><NavLink activeClassName={s.active} to={'/profile'}>Profile</NavLink></div>
            <div className={`${s.item}`}><NavLink  activeClassName={s.active} to={'/dialogs'}>Messege</NavLink></div>
            <div className={s.item}><NavLink  activeClassName={s.active} to={'/news'}>News</NavLink></div>
            <div className={s.item}><NavLink  activeClassName={s.active} to={'/musick'}>Musick</NavLink></div>
            <div className={s.item + ' ' + s.setting}><NavLink  activeClassName={s.active} to={'/setting'}>Setting</NavLink></div>
            <div className={s.item + ' ' + s.setting}><NavLink  activeClassName={s.active} to={'/users'}>Users</NavLink></div>
            <div className={s.item + ' ' + s.setting}><NavLink  activeClassName={s.active} to={'/login'}>Login</NavLink></div>
            <FriendsContainer />
        </nav>
    )
}
export default NavBar

