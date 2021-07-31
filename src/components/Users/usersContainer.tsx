import React from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../Redux/Redux_Store';

import {
    setCurrentPages,
    follow,
    setUsers,
    unFollow,
    setTotalUserCount, UserType, setIsFetching
} from '../../Redux/UsersReducer';
import axios from 'axios';
import { User } from './User';
import Loader from '../Loader/Loader';


type UsersContainerApiType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (user: UserType[]) => void
    setCurrentPages: (pageNumberCurrent: number) => void
    users: UserType[]
    pageSize: number
    currentPage: number
    totalCount: number
    setTotalUserCount: (totalCount: number) => void
    isFetching: boolean
    setIsFetching: (isFetching: boolean) => void

}
export type State = {
    getUsers: () => void
}

class UsersContainerAPI extends React.Component<UsersContainerApiType, State> {
    componentDidMount() {
        this.props.setIsFetching(true)
        getUsers: {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
                withCredentials: true
            })
                .then(response => {
                    this.props.setIsFetching(false)
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUserCount(response.data.totalCount)
                })
        }
    }

    pageClickChange = (page: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPages(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        return <>
            {this.props.isFetching ? <Loader/> : null}

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

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersData.dataUsers,
        pageSize: state.usersData.pageSize,
        currentPage: state.usersData.currentPage,
        totalCount: state.usersData.totalCount,
        isFetching: state.usersData.isFetching
    }
}


export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPages,
    setTotalUserCount,
    setIsFetching
})(UsersContainerAPI)

