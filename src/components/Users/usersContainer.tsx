import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { ActionsTypes, AppDispatchType, AppStateType } from '../../Redux/Redux_Store';

import {
    UserType, userDissableButton,getUserThunk,followThunk,unfollowThunk
} from '../../Redux/UsersReducer';
import axios from 'axios';
import { User } from './User';
import Loader from '../Loader/Loader';
import { usersAPI } from '../../Api/Api';


type UsersContainerApiType = {
    isFetching: boolean
    users: UserType[]
    pageSize: number
    currentPage: number
    totalCount: number
    dissabledInProgressUser: Array<number>
    getUserThunk: (currentPage: number, pageSize: number) => any
    followThunk: (id: number) => any
    unfollowThunk: (id: number) => any

}
export type State = {}

class UsersContainerAPI extends React.Component<UsersContainerApiType, State> {
    componentDidMount() {
        this.props.getUserThunk(this.props.currentPage, this.props.pageSize)
    }

    pageClickChange = (page: number) => {
        this.props.getUserThunk(page, this.props.pageSize)
    }

    render() {

        return <>
            {this.props.isFetching ? <Loader/> : null}

            <User users={this.props.users}
                  totalCount={this.props.totalCount}
                  currentPage={this.props.currentPage}
                  pageSize={this.props.pageSize}
                  pageClickChange={this.pageClickChange}
                  dissabledInProgressUser={this.props.dissabledInProgressUser}
                  unfollowThunk={this.props.unfollowThunk}
                  followThunk={this.props.followThunk}

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



export default connect(mapStateToProps, {getUserThunk, followThunk, unfollowThunk})(UsersContainerAPI)

