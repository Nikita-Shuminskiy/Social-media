import React from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../Redux/Redux_Store';

import {
    setCurrentPages,
    follow,
    setUsers,
    unFollow,
    setTotalUserCount, UserType, setIsFetching,userDissableButton
} from '../../Redux/UsersReducer';
import axios from 'axios';
import { User } from './User';
import Loader from '../Loader/Loader';
import { usersAPI } from '../../Api/Api';


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
    dissabledInProgressUser: Array<number>
    userDissableButton:(dissFetching:boolean, idUser:number) => void
}
export type State = {
    getUsers: () => void
}
class UsersContainerAPI extends React.Component<UsersContainerApiType, State> {
    componentDidMount() {
        this.props.setIsFetching(true)
            usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data => {
                    this.props.setIsFetching(false)
                    this.props.setUsers(data.items)
                    this.props.setTotalUserCount(data.totalCount)
                })
    }

    pageClickChange = (page: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPages(page)
        usersAPI.getUsers(page, this.props.pageSize).then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items)
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
                  pageClickChange={this.pageClickChange}
                  dissabledInProgressUser={this.props.dissabledInProgressUser}
                  userDissableButton={this.props.userDissableButton}
            />
        </>
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersData.dataUsers,
        pageSize: state.usersData.pageSize,
        currentPage: state.usersData.currentPage,
        totalCount: state.usersData.totalCount,
        isFetching: state.usersData.isFetching,
        dissabledInProgressUser: state.usersData.dissabledInProgressUser,
    }
}


export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPages,
    setTotalUserCount,
    setIsFetching, userDissableButton
})(UsersContainerAPI)

