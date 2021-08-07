import React from 'react';
import s from './users.module.css';
import Photos
    from '../../img/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png';
import { UserType } from '../../Redux/UsersReducer';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { usersAPI } from '../../Api/Api';


export type UserComponentType = {
    pageClickChange: (page: number) => void
    users: UserType[]
    pageSize: number
    currentPage: number
    totalCount: number
    dissabledInProgressUser: Array<number>
    followThunk: (id: number) => any
    unfollowThunk: (id: number) => any
}


export const User = (props: UserComponentType) => {
    let pageCount = Math.ceil(props.totalCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }


    return (<div className={s.userDiv}>
            <div style={{margin: '100px'}}>
                {
                    pages.map((p: number, index) => {
                        const click = props.currentPage === p ? s.totalCount : ''
                        return <span key={index} onClick={() => props.pageClickChange(p)} className={click}>{p}</span>
                    })
                }
            </div>
            {props.users.map(u => {
                return (
                    <div className={s.userBody} key={u.id}>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img style={{width: '60px'}} src={u.photos.small === null ? Photos : u.photos.small}
                                     alt="121"/>
                            </NavLink>
                            {u.followed ?
                                <button disabled={props.dissabledInProgressUser.some(id => id === u.id)}
                                        onClick={() => {
                                            props.unfollowThunk(u.id)
                                        }} style={{width: '100px', height: '20px'}}>UnFollowed</button>
                                :
                                <button disabled={props.dissabledInProgressUser.some(id => id === u.id)}
                                        onClick={() => { props.followThunk(u.id)}} style={{width: '100px', height: '30px'}}>Followed</button>}
                        </div>
                        <div className={s.textUser}>
                            <span>{u.name}</span>
                            <span>{u.status}</span>
                            <span>
                          <p>{'u.location.title'}
                              {'u.location.city'}</p>
                         </span>
                        </div>
                    </div>
                )

            })
            }
        </div>
    );
};