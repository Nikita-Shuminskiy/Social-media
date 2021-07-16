import React from 'react';
import { connect } from 'react-redux';
import Users from './users';
import { AppDispatchType, AppStateType } from '../../Redux/redux-store';
import {
    setCurrentPagesAC,
    followAc,
    setUsersAC,
    unFollowAC,
    setTotalUserCountAC, UserType
} from '../../Redux/UsersReducer';





const mapStateToProps = (state:AppStateType) => {
    return {
        users: state.usersData.dataUsers,
        pageSize: state.usersData.pageSize,
        currentPage: state.usersData.currentPage,
        totalCount: state.usersData.totalCount,


    }
}

const mapDispatchToProps = (dispatch: AppDispatchType) => {
    return {
        follow: (userID: number) => {
            dispatch(followAc(userID))},
        unFollow: (userID:number) => {dispatch(unFollowAC(userID))},
        setUsers: (user: UserType[]) => { dispatch(setUsersAC(user))},
        currentPages: (pageNumberCurrent: number) => {dispatch(setCurrentPagesAC(pageNumberCurrent))},
        setTotalUserCount: (totalCount:number) => {dispatch(setTotalUserCountAC(totalCount))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)

