import React from 'react';
import { connect } from 'react-redux';
import Users from './users';
import { AppDispatchType, AppStateType } from '../../Redux/redux-store';
import { followAc, setUsers, unFollowAC, UserType } from '../../Redux/UsersReducer';





const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersData.dataUsers,
        pageGlobal: state.usersData.pageGlobal,


    }
}

const mapDispatchToProps = (dispatch: AppDispatchType) => {
    return {
        follow: (userID: number) => {
            dispatch(followAc(userID))},
        unFollow: (userID:number) => {dispatch(unFollowAC(userID))},
        setUsers: (user: UserType[]) => { dispatch(setUsers(user))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)

