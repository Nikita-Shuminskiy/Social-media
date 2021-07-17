import React, { DetailedHTMLProps, FormEvent, HTMLAttributes } from 'react';
import s from './users.module.css';
import Photos
    from '../../img/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png';
import { UserType } from '../../Redux/UsersReducer';


export type UserComponentType = {
    pageClickChange: (page: number) => void
    follow: (userID: number) => void
    unFollow: (userID: number) => void
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
                    pages.map((p:number, index) => {
                        const click = props.currentPage == p ?  s.totalCount: ''
                        return <span key={index} onClick={ (e:FormEvent<HTMLSpanElement>) => {
                            props.pageClickChange(+e)
                        }}
                                     className={click}>{p}</span>
                    })
                }
            </div>
            {props.users.map(u => {
                return (
                    <div className={s.userBody} key={u.id}>
                        <div>
                            <img style={{width: '60px'}} src={u.photos.small != null ? u.photos.small : Photos}
                                 alt="121"/>
                            {u.followed ? <button onClick={() => props.unFollow(u.id)}
                                                  style={{width: '100px', height: '20px'}}>UnFollowed</button> :
                                <button onClick={() => props.follow(u.id)}
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