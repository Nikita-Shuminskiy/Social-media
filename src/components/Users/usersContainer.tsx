import React, { FormEvent } from 'react';
import { connect } from 'react-redux';
import { AppDispatchType, AppStateType } from '../../Redux/redux-store';

import {
    setCurrentPagesAC,
    followAc,
    setUsersAC,
    unFollowAC,
    setTotalUserCountAC, UserType, setIsFetchingAC
} from '../../Redux/UsersReducer';
import axios from 'axios';
import { User } from './User';
import Loader from '../Loader/Loader';


export type UsersContainerApiType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (user: UserType[]) => void
    currentPages: (pageNumberCurrent: number) => void
    users: UserType[]
    pageSize: number
    currentPage: number
    totalCount: number
    setTotalUserCount: (totalCount: number) => void
    isFetching:boolean
    setIsFetching:(isFetching:boolean) => void

}
export type State = {
    getUsers: () => void
}
export class UsersContainerAPI extends React.Component<UsersContainerApiType, State> {
    componentDidMount() {
        this.props.setIsFetching(true)
        getUsers: {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setIsFetching(false)
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUserCount(response.data.totalCount)
                })
        }
    }

    pageClickChange = (page: number) => {
        this.props.setIsFetching(true)
        this.props.currentPages(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        return <>
            {this.props.isFetching ? <Loader/>: null}

            <User users={this.props.users}
                  totalCount={this.props.totalCount}
                  currentPage={this.props.currentPage}
                  pageSize={this.props.pageSize}
                  follow={this.props.follow}
                  unFollow={this.props.unFollow}
                  pageClickChange={this.pageClickChange}/>
        </>
    }
}



const mapStateToProps = (state:AppStateType) => {
    return {
        users: state.usersData.dataUsers,
        pageSize: state.usersData.pageSize,
        currentPage: state.usersData.currentPage,
        totalCount: state.usersData.totalCount,
        isFetching: state.usersData.isFetching
    }
}

const mapDispatchToProps = (dispatch: AppDispatchType) => {
    return {
        follow: (userID: number) => {
            dispatch(followAc(userID))},
        unFollow: (userID:number) => {dispatch(unFollowAC(userID))},
        setUsers: (user: UserType[]) => { dispatch(setUsersAC(user))},
        currentPages: (pageNumberCurrent: number) => {dispatch(setCurrentPagesAC(pageNumberCurrent))},
        setTotalUserCount: (totalCount:number) => {dispatch(setTotalUserCountAC(totalCount))},
        setIsFetching: (isFetching:boolean) => {dispatch(setIsFetchingAC(isFetching))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainerAPI)

