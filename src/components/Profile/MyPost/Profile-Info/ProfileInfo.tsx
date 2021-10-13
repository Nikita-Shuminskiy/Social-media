import React from 'react'
import s from './ProfileInfo.module.css';
import { Profile } from './Profile/Profile';
import MyPostContainer from '../MyPostContainer';
import {  PhotosProfileType, ProfileType } from '../../../../Api/Api';


type ProfileInfoType = {
    profileUsers: ProfileType
    status: string
    updateStatusThunk: (status: string) => void
    owner: number
    updatePhoto: (photo: string) => void
    updProfileData: (data: ProfileType) => void
    photos: PhotosProfileType
}
export const ProfileInfo: React.FC<ProfileInfoType> = (props) => {

    return (
        <div className={s.container}>
            <Profile owner={props.owner}
                     updatePhoto={props.updatePhoto}
                     status={props.status}
                     updateStatusThunk={props.updateStatusThunk}
                     profileUsers={props.profileUsers}
                     updProfileData={props.updProfileData}
                    photos={props.photos}
            />
            <MyPostContainer/>
        </div>
    )
}

