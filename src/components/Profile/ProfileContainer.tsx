import React, { ComponentType } from 'react'
import s from './ProfileInfo.module.css'
import { connect } from 'react-redux';
import { AppStateType } from '../../Redux/Redux_Store';
import { ProfileInfo } from './MyPost/Profile-Info/ProfileInfo';
import { HeaderImg, ProfileUsersType } from '../../Redux/React_Redux_StoreType/types/StateType';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../Hoc/WithAuthRedirect';
import { compose } from 'redux';
import { getStatusThunk, updateStatusThunk, userIdThunk } from '../../Redux/Profile_Reducer';


type PathParamsType = {
    userId: number
}
type MapStateToPropsType = {
    profileUsers: ProfileUsersType
    profile: HeaderImg // проверить зачем ?
    status: string
}
type MapStateDispatchToPropsType = {
    userIdThunk: (userId: number) => void
    getStatusThunk: (userId: number) => void
    updateStatusThunk: (status: string) => void

}

type ProfileContainerType = MapStateToPropsType & MapStateDispatchToPropsType



// @ts-ignore
type PropsProfileContainerType = RouteComponentProps<PathParamsType> & ProfileContainerType

export type State = {}

class ProfileContainer extends React.Component<PropsProfileContainerType, State> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId && this.props.profileUsers) {
            userId = /*Number(this.props.profileUsers.userId)*/ 1049
        }
        this.props.userIdThunk(userId)
        this.props.getStatusThunk(userId)

    }


    render() {
        return (
            <>
                <ProfileInfo {...this.props} updateStatusThunk={this.props.updateStatusThunk} status={this.props.status}
                             profileUsers={this.props.profileUsers} profile={this.props.profile}/>
            </>
        )
    }
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profileUsers: state.profile.profileUsers,
    profile: state.profile.proFileHeader.headerImg,
    status: state.profile.status
})


export default compose<ComponentType>(
    connect(mapStateToProps, {userIdThunk, getStatusThunk, updateStatusThunk}),
    withAuthRedirect,
    withRouter)(ProfileContainer)






