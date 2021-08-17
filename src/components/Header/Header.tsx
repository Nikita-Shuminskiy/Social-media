import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'
import { DataTypeAuth } from '../../Redux/Auth_Reducer';

type HeaderType = {
    isAuth: boolean
    login: string | null
    logoutThunk:() => void
}

const Header: React.FC<HeaderType> = (props) => {
    return (
        <header className={s.header}>
            <img className={s.img}
                 src={'https://st4.depositphotos.com/9449108/25247/i/600/depositphotos_252470670-stock-photo-illustration-of-a-japanese-warrior.jpg'}/>
            <div>
                <div className={s.loginBlock}>
                    {props.isAuth ?
                        <div>{props.login}-- <button onClick={props.logoutThunk}>Logout</button></div> :
                        <NavLink to={'/login'}>login</NavLink>}

                </div>
                <input className={s.search} type="text"/>
                <button onClick={(s) => alert(s.pageX)} className={s.button_s}>Search</button>
            </div>
        </header>
    )
}

export default Header