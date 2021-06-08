import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'


type NavbarType = {
    Pro: string
    Mess: string
    News: string
    Music: string
    Set: string
}
const NavBar: React.FC<NavbarType> = (props) => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item}`}><NavLink activeClassName={s.active} to={'/profile'}>Profile</NavLink></div>
            <div className={`${s.item}`}><NavLink  activeClassName={s.active} to={'/dialogs'}>Messege</NavLink></div>
            <div className={s.item}><NavLink  activeClassName={s.active} to={'/news'}>News</NavLink></div>
            <div className={s.item}><NavLink  activeClassName={s.active} to={'/musick'}>Musick</NavLink></div>
            <div className={s.item}><NavLink  activeClassName={s.active} to={'/setting'}>Setting</NavLink></div>
        </nav>
    )
}
export default NavBar

