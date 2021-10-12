import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import s from './Navbar.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../Redux/Redux_Store';
import { initialStateType, logoutThunk } from '../../Redux/Auth_Reducer';
import Button from '@material-ui/core/Button/Button';
import Loader from '../Common/Loader/Loader';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';

export type  NavBarType = {

}

const NavBar = (props:NavBarType) => {
    const authMe = useSelector<AppStateType, initialStateType>(state => state.authMe)
    const img = useSelector<AppStateType, any>(state => state?.profile?.profileUsers?.photos?.small)

    const dispatch = useDispatch()
    const logoutUser = () => {
        dispatch(logoutThunk())
    }
    const loginUser = () => {
        return <Redirect to={'login'}/>
    }
    return (
        <div className={s.container}>
            <div >
                { authMe.isAuth ?
                    <div  className={s.loginBlock}>
                          <span>{authMe.login}</span>
                        { img ? <img src={img} alt="121"/>: <CircularProgress/> }
                    <div><Button variant="contained" size={'small'} color="secondary"  onClick={logoutUser}>Logout</Button></div>
                    </div>
                    :
                    <div>
                        <Button variant="contained" size={'small'} color="secondary"  onClick={loginUser}>Login</Button>
                    </div>
                }
            </div>
                <div className={`${s.item}`}><NavLink activeClassName={s.active} to={'/profile'}>Profile</NavLink></div>
                <div className={`${s.item}`}><NavLink  activeClassName={s.active} to={'/dialogs'}>Messege</NavLink></div>
                <div className={s.item + ' ' + s.setting}><NavLink  activeClassName={s.active} to={'/users'}>Users</NavLink></div>
                <div className={s.item}><NavLink  activeClassName={s.active} to={'/news'}>News</NavLink></div>
                <div className={s.item}><NavLink  activeClassName={s.active} to={'/musick'}>Musick</NavLink></div>
                <div className={s.item + ' ' + s.setting}><NavLink  activeClassName={s.active} to={'/setting'}>Setting</NavLink></div>
        </div>
    )
}
export default NavBar


