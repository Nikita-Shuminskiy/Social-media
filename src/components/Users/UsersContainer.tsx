import React from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../Redux/Redux_Store';
import {
    getUserThunk, followThunk, unfollowThunk, UserType
} from '../../Redux/UsersReducer';
import { Users } from './Users';
import Loader from '../Common/Loader/Loader';
import {
    currentPageUsers,
    getUsers,
    isFetchingUsers,
    pageSizeUsers,
    progressDisabledUsers,
    totalCountUsers
} from './UserSelectors';


type MapStateToProps = {
    isFetching: boolean
    users: any
    pageSize: number
    currentPage: number
    totalCount: number
    disabledInProgressUser: Array<number>

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

                <Users users={this.props.users}
                       totalCount={this.props.totalCount}
                       currentPage={this.props.currentPage}
                       pageSize={this.props.pageSize}
                       pageClickChange={this.pageClickChange}
                       disabledInProgressUser={this.props.disabledInProgressUser}
                       unfollowThunk={this.props.unfollowThunk}
                       followThunk={this.props.followThunk}

                />
            </>
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        users: getUsers(state),
        pageSize: pageSizeUsers(state),
        currentPage: currentPageUsers(state),
        totalCount: totalCountUsers(state),
        isFetching: isFetchingUsers(state),
        disabledInProgressUser:progressDisabledUsers(state),
    }
}


export default connect(mapStateToProps, {getUserThunk, followThunk, unfollowThunk})(UsersContainer)




