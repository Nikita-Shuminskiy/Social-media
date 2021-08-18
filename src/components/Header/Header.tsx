import React from 'react'
import s from './Header.module.css'

type HeaderType = {
    login: string | null
    logoutThunk:() => void
    isAuth:boolean
}

const Header: React.FC<HeaderType> = (props) => {
    return (
        <header className={s.header}>
            <img className={s.img}
                 src={'https://st4.depositphotos.com/9449108/25247/i/600/depositphotos_252470670-stock-photo-illustration-of-a-japanese-warrior.jpg'}/>
            <div>
                <div className={s.loginBlock}>
                    { props.isAuth ? <div>{props.login} <button onClick={props.logoutThunk}>Logout</button></div> : <div><button onClick={props.logoutThunk}>Logout</button> </div>}
                </div>
                <input className={s.search} type="text"/>
                <button onClick={(s) => alert(s.pageX)} className={s.button_s}>Search</button>
            </div>
        </header>
    )
}

export default Header