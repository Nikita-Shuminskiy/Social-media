import React from 'react'
import { ProfileUsersType } from '../../../../Redux/React_Redux_StoreType/types/StateType';
import s from './ProfileInfo.module.css';
import { Profile } from './Profile';
import MyPostContainer from '../MyPostContainer';


type ProfileInfoType = {
    profileUsers: ProfileUsersType
    status: string
    updateStatusThunk: (status: string) => void
    owner: number
    updatePhoto: (photo: string) => void
    updProfileData: (data: ProfileUsersType) => void
}
export const ProfileInfo: React.FC<ProfileInfoType> = (props) => {

    return (
        <>
            <Profile owner={props.owner}
                     updatePhoto={props.updatePhoto}
                     status={props.status}
                     updateStatusThunk={props.updateStatusThunk}
                     profileUsers={props.profileUsers}
                     updProfileData={props.updProfileData}/>
            <MyPostContainer/>
        </>
    )
}

