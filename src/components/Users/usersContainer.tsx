import React from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../Redux/Redux_Store';

import {
    UserType, getUserThunk, followThunk, unfollowThunk
} from '../../Redux/UsersReducer';
import { User } from './User';
import Loader from '../Loader/Loader';
import { withAuthRedirect } from '../../Hoc/WithAuthRedirect';


type MapStateToProps = {
    isFetching: boolean
    users: UserType[]
    pageSize: number
    currentPage: number
    totalCount: number
    dissabledInProgressUser: Array<number>

}
type MapDispatchToProps = {
    getUserThunk: (currentPage: number, pageSize: number) => void
    followThunk: (id: number) => void
    unfollowThunk: (id: number) => void
}

type UsersContainerType = MapDispatchToProps & MapStateToProps

export type State = {}

class UsersContainer extends React.Component<UsersContainerType, State> {
    componentDidMount() {
        this.props.getUserThunk(this.props.currentPage, this.props.pageSize)
    }

    pageClickChange = (page: number) => {
        this.props.getUserThunk(page, this.props.pageSize)
    }

    render() {

        return (
            <>
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
        )
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


export default withAuthRedirect(connect(mapStateToProps, {getUserThunk, followThunk, unfollowThunk})(UsersContainer))




