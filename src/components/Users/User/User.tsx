import Button from '@material-ui/core/Button/Button';
import React from 'react'
import { NavLink } from 'react-router-dom';
import Photos from '../../../img/user.png';
import s from './User.module.css'

type UserType = {
    idUser:number
    smallImgUser:string
    disabledInProgressUser:Array<number>
    followed:Boolean
    unfollowThunk:(id:number) => void
    followThunk:(id:number) => void
    nameUser:string
    status:string | null
}
export const User = ({idUser,smallImgUser,disabledInProgressUser,followed,unfollowThunk,followThunk,nameUser,status}:UserType) => {
    return (
        <div className={s.userBody} >
            <div>
                <NavLink to={'/profile/' + idUser}>
                    <img className={s.smallImg} src={smallImgUser !== null ? smallImgUser : Photos}
                         alt="121"/>
                </NavLink>
                {followed ?
                    <Button variant="contained" color="secondary"  className={s.unFollow}
                            disabled={disabledInProgressUser.some(id => id === idUser)}
                            onClick={() => unfollowThunk(idUser)}>UnFollowed</Button>
                    :
                    <Button variant="contained" size={'large'} color="secondary" className={s.follow}
                            disabled={disabledInProgressUser.some(id => id === idUser)}
                            onClick={() => followThunk(idUser)}>Followed</Button>}
            </div>
            <div className={s.textUser}>
                <span><b>Name:</b>&nbsp;&nbsp;{nameUser}</span>
                <span><b>Status:</b>&nbsp;&nbsp;{status}</span>
            </div>
        </div>
    )
}