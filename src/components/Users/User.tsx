import React from 'react';
import s from './users.module.css';
import Photos
    from '../../img/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png';
import { UserType } from '../../Redux/UsersReducer';
import { NavLink } from 'react-router-dom';
import axios from 'axios';


export type UserComponentType = {
    pageClickChange: (page: number) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    users: UserType[]
    pageSize: number
    currentPage: number
    totalCount: number
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
                    pages.map( (p:number, index) => {
                        const click = props.currentPage === p ?  s.totalCount: ''
                        return <span key={index} onClick={() => props.pageClickChange(p)} className={click}>{p}</span>
                    })
                }
            </div>
            {props.users.map(u => {
                return (
                    <div className={s.userBody} key={u.id}>
                        <div>
                            <NavLink to={'/profile/' + u.id} >
                                <img style={{width: '60px'}} src={u.photos.small === null ? Photos: u.photos.small}
                                     alt="121"/>
                            </NavLink>
                            {u.followed ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {'API-KEY': '4b7b5ab4-7bcb-48d4-a324-27c29621ab2c'}
                                    })
                                        .then(response => {
                                           if (response.data.resultCode == 0) {
                                               props.unFollow(u.id)
                                           }
                                        })
                                }}
                                                  style={{width: '100px', height: '20px'}}>UnFollowed</button> :
                                <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {'API-KEY': '4b7b5ab4-7bcb-48d4-a324-27c29621ab2c'}
                                    })
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.follow(u.id)
                                            }
                                        })
                                }}
                                        style={{width: '100px', height: '30px'}}>Followed</button>}
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