import React from 'react'
import s from './ProfileInfo.module.css'
import { connect } from 'react-redux';
import { AppStateType } from '../../Redux/redux-store';
import { State } from '../Users/usersContainer';
import axios from 'axios';
import { setProfileUser } from '../../Redux/ProfileReducer';
import { ProfileInfo } from './MyPost/Profile-Info/ProfileInfo';
import { HeaderImg, ProfileUsersType } from '../../Redux/React_Redux_StoreType/types/StateType';
import { RouteComponentProps, withRouter } from 'react-router-dom';


type ProfileContainerAPIType = MapStateToPropsType & MapStateDispatchToPropsType
type PathParamsType = {
    userId: number
}
type MapStateToPropsType = {
    profileTest: any
    profile:HeaderImg
}
type MapStateDispatchToPropsType = {
    setProfileUser: (profile: ProfileUsersType) => void
}


// @ts-ignore
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerAPIType
class ProfileContainerAPI extends React.Component<PropsType, State> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setProfileUser(response.data)
            })
    }

    render() {
        return (
            <>
                <ProfileInfo {...this.props} profileUsers={this.props.profileTest} profile={this.props.profile}/>
            </>
        )
    }
}


const mapStateToProps = (state: AppStateType):MapStateToPropsType => ({
            profileTest: state.profile.profileUsers,
            profile: state.profile.proFileHeader.headerImg

})

export default withRouter(connect(
    mapStateToProps,
    {setProfileUser},
)(ProfileContainerAPI));






