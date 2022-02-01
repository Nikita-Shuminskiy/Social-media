import React from 'react';
import { ApiUserType } from '../../../Api/Api';
import { Paginator } from '../../Common/Paginator/Paginator';
import { User } from '../User/User';
import s from './Users.module.css';

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
  const array1 = [1, 2, 3, 4, 5, 6,1,2,3,4]

  const mapArr = (arr: number[]) => {
    let new_arr = []
    for (let item of arr) {
      new_arr.push(item)
    }
    return <div>{new_arr}</div>
  }

  return (<div className={s.container}>
      {mapArr(array1)}
      {props.users.map(u => {
          return (<User key={u.id}
                        idUser={u.id}
                        smallImgUser={u.photos.small}
                        disabledInProgressUser={props.disabledInProgressUser}
                        followed={u.followed}
                        unfollowThunk={props.unfollowThunk}
                        followThunk={props.followThunk}
                        nameUser={u.name}
                        status={u.status}/>)
        },
      )
      }
      <div>
        <Paginator pageClickChange={props.pageClickChange}
                   currentPage={props.currentPage}
                   pageSize={props.pageSize}
                   totalCount={props.totalCount}/>
      </div>
    </div>
  )
}
