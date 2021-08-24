import React from 'react'
import { NavLink } from 'react-router-dom';
import Photos
    from '../../../img/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png';
import s from './User.module.css'

type UserType = {
    idUser:number
    smallImg:string
    disabledInProgressUser:Array<number>
    followed:Boolean
    unfollowThunk:(id:number) => void
    followThunk:(id:number) => void
    nameUser:string
    status:string | null


}


export const User = ({idUser,smallImg,disabledInProgressUser,followed,unfollowThunk,followThunk,nameUser,status}:UserType) => {

    return (
        <div className={s.userBody} >
            <div>
                <NavLink to={'/profile/' + idUser}>
                    <img className={s.SmallImg} src={smallImg !== null ? smallImg : Photos}
                         alt="121"/>
                </NavLink>
                {followed ?
                    <button className={s.unFollow} disabled={disabledInProgressUser.some(id => id === idUser)}
                            onClick={() => unfollowThunk(idUser)} >UnFollowed</button>
                    :
                    <button className={s.follow}  disabled={disabledInProgressUser.some(id => id === idUser)}
                            onClick={() => followThunk(idUser)} >Followed</button>}
            </div>
            <div className={s.textUser}>
                <span>{nameUser}</span>
                <span>{status}</span>
            </div>
        </div>
    )
}