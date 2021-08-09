import React from 'react'
import { HeaderImg, ProfileUsersType,  } from '../../../../Redux/React_Redux_StoreType/types/StateType';
import s from './ProfileInfo.module.css';
import { Profile } from './Profile';
import MyPostContainer from '../MyPostContainer';



type ProfileInfoType = {
    profileUsers:ProfileUsersType
    profile: HeaderImg
}
export const ProfileInfo: React.FC<ProfileInfoType> = (props) => {

    return (
        <>
            <Profile profileUsers={props.profileUsers} profile={props.profile} />
            <MyPostContainer/>
        </>
    )
}

