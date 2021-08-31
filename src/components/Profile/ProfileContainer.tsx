import React, { ComponentType } from 'react'
import s from './ProfileInfo.module.css'
import { connect } from 'react-redux';
import { AppStateType } from '../../Redux/Redux_Store';
import { ProfileInfo } from './MyPost/Profile-Info/ProfileInfo';
import { ProfileUsersType } from '../../Redux/React_Redux_StoreType/types/StateType';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../Hoc/WithAuthRedirect';
import { compose } from 'redux';
import {
    getStatusThunk,
    updateStatusThunk,
    getUserProfileThunk,
    updatePhotoThunk,
    updProfileDataThunk
} from '../../Redux/ProfileReducer';



type PathParamsType = {
    userId: number
}
type MapStateToPropsType = {
    profileUsers: ProfileUsersType
    status: string
    authID: number
}
type MapStateDispatchToPropsType = {
    getUserProfileThunk: (userId: number) => void
    getStatusThunk: (userId: number) => void
    updateStatusThunk: (status: string) => void
    updatePhotoThunk: (photo: string) => void
    updProfileDataThunk: (data: ProfileUsersType) => void

}

type ProfileContainerType = MapStateToPropsType & MapStateDispatchToPropsType


// @ts-ignore
type PropsProfileContainerType = RouteComponentProps<PathParamsType> & ProfileContainerType

export type State = {}

class ProfileContainer extends React.Component<PropsProfileContainerType, State> {
    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authID
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfileThunk(userId)
        this.props.getStatusThunk(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsProfileContainerType>, prevState: Readonly<State>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }


    render() {
        return (
            <>
                <ProfileInfo {...this.props} updProfileData={this.props.updProfileDataThunk} updatePhoto={this.props.updatePhotoThunk} owner={this.props.match.params.userId} updateStatusThunk={this.props.updateStatusThunk} status={this.props.status}
                             profileUsers={this.props.profileUsers}/>
            </>
        )
    }
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profileUsers: state.profile.profileUsers,
    status: state.profile.status,
    authID: state.authMe.data.id,
})


export default compose<ComponentType>(connect(mapStateToProps, {
    getUserProfileThunk,
    getStatusThunk,
    updateStatusThunk,
    updatePhotoThunk,
    updProfileDataThunk
}), withAuthRedirect, withRouter)(ProfileContainer)






