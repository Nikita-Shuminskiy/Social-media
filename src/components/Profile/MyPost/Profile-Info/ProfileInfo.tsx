import React from 'react'
import { ProfilePageType } from '../../../../Redux/React_Redux_StoreType/types/StateType';
import s from './ProfileInfo.module.css';
import { Profile } from './Profile';
import MyPostContainer from '../MyPostContainer';
import { GetProfileUserType } from '../../../../Api/Api';


type ProfileInfoType = {
    profileUsers: ProfilePageType
    status: string
    updateStatusThunk: (status: string) => void
    owner: number
    updatePhoto: (photo: string) => void
    updProfileData: (data: GetProfileUserType) => void
}
export const ProfileInfo: React.FC<ProfileInfoType> = (props) => {

    return (
        <div className={s.container}>
            <Profile owner={props.owner}
                     updatePhoto={props.updatePhoto}
                     status={props.status}
                     updateStatusThunk={props.updateStatusThunk}
                     profileUsers={props.profileUsers}
                     updProfileData={props.updProfileData}/>
            <MyPostContainer/>
        </div>
    )
}

