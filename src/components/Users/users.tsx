import React from 'react';
import { DataUsersTye, UserType } from '../../Redux/UsersReducer';
import s from './users.module.css'
import axios from 'axios';
import Photos
    from '../../img/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png'

export type UsersType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (user: UserType[]) => void
    currentPages: (pageNumberCurrent: number) => void
    users: UserType[]
    pageSize: number
    currentPage: number
    totalCount: number
    setTotalUserCount: (totalCount:number) => void

}
export type State = {
    getUsers: () => void
}

class Users extends React.Component<UsersType, State> {
    componentDidMount() {
        getUsers: {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUserCount(response.data.totalCount)
                })
        }
    }
    pageClickChange = (page:number) => {
        debugger
        this.props.currentPages(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
    }

    render() {
        let pageCount = Math.ceil(this.props.totalCount / this.props.pageSize)

        let pages = []
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }

        return (
            <div className={s.userDiv}>
                <div style={{margin: '100px'}}>
                    {
                        pages.map(p => {
                            const pagesIF = this.props.pageSize === p && s.totalCount

                            return <span /*onClick={ (e:any) => this.pageClickChange(e) } */className={pagesIF ? pagesIF : ''}>{p}</span>
                        })
                    }
                </div>
                {this.props.users.map(u => {
                    return (
                        <div className={s.userBody} key={u.id}>
                            <div>
                                <img style={{width: '60px'}} src={u.photos.small != null ? u.photos.small : Photos}
                                     alt="121"/>
                                {u.followed ? <button onClick={() => this.props.unFollow(u.id)}
                                                      style={{width: '100px', height: '20px'}}>UnFollowed</button> :
                                    <button onClick={() => this.props.follow(u.id)}
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
        )
    }
}

export default Users