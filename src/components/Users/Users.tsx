import React from 'react';
import s from './Users.module.css';
import { User } from './User/User';
import { Paginator } from '../Common/Paginator/Paginator';
import { ApiUserType } from '../../Api/Api';


export type UserComponentType = {
    pageClickChange: (page: number) => void
    users: ApiUserType[]
    pageSize: number
    currentPage: number
    totalCount: number
    disabledInProgressUser: Array<number>
    followThunk: (id: number) => void
    unfollowThunk: (id: number) => void
}


export const Users = (props: UserComponentType) => {



    return (<div>
            <div style={{margin: '100px'}}>
                <Paginator pageClickChange={props.pageClickChange}
                           currentPage={props.currentPage}
                           pageSize={props.pageSize}
                           totalCount={props.totalCount}/>
            </div>
            {props.users.map(u => {
                    return (<User key={u.id}
                                  idUser={u.id}
                                  smallImg={u.photos.small}
                                  disabledInProgressUser={props.disabledInProgressUser}
                                  followed={u.followed}
                                  unfollowThunk={props.unfollowThunk}
                                  followThunk={props.followThunk}
                                  nameUser={u.name}
                                  status={u.status}/>)
                }
            )
            }
        </div>
    )
}