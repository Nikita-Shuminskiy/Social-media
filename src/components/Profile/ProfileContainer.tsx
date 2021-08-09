import React, { ComponentType } from 'react'
import s from './ProfileInfo.module.css'
import { connect } from 'react-redux';
import { AppStateType } from '../../Redux/Redux_Store';
import axios from 'axios';
import { ProfileInfo } from './MyPost/Profile-Info/ProfileInfo';
import { HeaderImg, ProfileUsersType } from '../../Redux/React_Redux_StoreType/types/StateType';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { usersAPI } from '../../Api/Api';
import { withAuthRedirect } from '../../Hoc/WithAuthRedirect';
import { compose } from 'redux';
import { userIdThunk } from '../../Redux/Profile_Reducer';



type PathParamsType = {
    userId: number
}
type MapStateToPropsType = {
    profileUsers: ProfileUsersType
    profile: HeaderImg // проверить зачем ?
}
type MapStateDispatchToPropsType = {
    userIdThunk: (userId: number) => void
}

type ProfileContainerType = MapStateToPropsType & MapStateDispatchToPropsType


// @ts-ignore
type PropsProfileContainerType = RouteComponentProps<PathParamsType> & ProfileContainerType

export type State = {}

class ProfileContainer extends React.Component<PropsProfileContainerType, State> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId && this.props.profileUsers){
            userId = Number(this.props.profileUsers.userId)
        }
        this.props.userIdThunk(userId)

    }

    render() {
        return (
            <>
                <ProfileInfo {...this.props} profileUsers={this.props.profileUsers} profile={this.props.profile}/>
            </>
        )
    }
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profileUsers: state.profile.profileUsers,
    profile: state.profile.proFileHeader.headerImg
})


export default compose<ComponentType>(
    connect(mapStateToProps, {userIdThunk}),
    withAuthRedirect,
    withRouter )(ProfileContainer)






