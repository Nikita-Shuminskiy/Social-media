import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import s from './Navbar.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../Redux/Redux_Store';
import { initialStateType, logoutThunk } from '../../Redux/Auth_Reducer';

export type  NavBarType = {

}

const NavBar = (props:NavBarType) => {
    const authMe = useSelector<AppStateType, initialStateType>(state => state.authMe)
    const dispatch = useDispatch()
    let history = useHistory();
    const logoutUser = () => {
        dispatch(logoutThunk())
    }
    const loginUser = () => {
        history.push('/login')
    }
    return (
        <div className={s.container}>
            <div className={s.loginBlock}>
                { authMe.isAuth ?
                    <div>{authMe.login}
                    <button onClick={logoutUser}>Logout</button>
                    </div>
                    :
                    <div>
                        <button onClick={loginUser}>Login</button>
                    </div>
                }
            </div>
                <div className={`${s.item}`}><NavLink activeClassName={s.active} to={'/profile'}>Profile</NavLink></div>
                <div className={`${s.item}`}><NavLink  activeClassName={s.active} to={'/dialogs'}>Messege</NavLink></div>
                <div className={s.item + ' ' + s.setting}><NavLink  activeClassName={s.active} to={'/users'}>Users</NavLink></div>
                <div className={s.item}><NavLink  activeClassName={s.active} to={'/news'}>News</NavLink></div>
                <div className={s.item}><NavLink  activeClassName={s.active} to={'/musick'}>Musick</NavLink></div>
                <div className={s.item + ' ' + s.setting}><NavLink  activeClassName={s.active} to={'/setting'}>Setting</NavLink></div>
                <div className={s.item + ' ' + s.setting}><NavLink  activeClassName={s.active} to={'/login'}>Login</NavLink></div>
        </div>
    )
}
export default NavBar


