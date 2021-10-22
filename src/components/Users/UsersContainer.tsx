import React from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../Redux/Redux_Store';
import { followThunk, getUserThunk, unfollowThunk } from '../../Redux/UsersReducer';
import {
    currentPageUsers,
    getUsers,
    isFetchingUsers,
    pageSizeUsers,
    progressDisabledUsers,
    totalCountUsers
} from './UserSelectors';
import { ApiUserType } from '../../Api/Api';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import { Users } from './Users/Users';


type MapStateToProps = {
    users: ApiUserType[]
    isFetching: boolean
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


class UsersContainer extends React.Component<UsersContainerType> {
    componentDidMount() {
        this.props.getUserThunk(this.props.currentPage, this.props.pageSize)
    }
    pageClickChange = (page: number) => {
        this.props.getUserThunk(page, this.props.pageSize)
    }

    render() {

        return (
            <>
                {this.props.isFetching ? <div style={{position: 'relative', left: '50%'}}><CircularProgress/></div>
                    : <Users users={this.props.users}
                             totalCount={this.props.totalCount}
                             currentPage={this.props.currentPage}
                             pageSize={this.props.pageSize}
                             pageClickChange={this.pageClickChange}
                             disabledInProgressUser={this.props.disabledInProgressUser}
                             unfollowThunk={this.props.unfollowThunk}
                             followThunk={this.props.followThunk}

                    />}

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


// @ts-ignore
export default connect<MapStateToProps,MapDispatchToProps>(mapStateToProps, {getUserThunk, followThunk, unfollowThunk})(UsersContainer)




