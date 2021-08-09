import React from 'react';
import s from './ProfileInfo.module.css';
import { HeaderImg, ProfileUsersType } from '../../../../Redux/React_Redux_StoreType/types/StateType';
import Loader from '../../../Loader/Loader';
import Photos
    from '../../../../img/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png';


export type ProfileType = {
    profileUsers:ProfileUsersType
    profile: HeaderImg
}
export const Profile: React.FC<ProfileType> = (props) => {
    if (!props.profile) {
        return <Loader/>
    }
    return (
        <div>
            <img className={s.img} src={props.profile.img} alt={'sa'}/>
            <div className={s.info}>
                <img className={s.img_avatar} src={props.profileUsers.photos.large !== null ? props.profileUsers.photos.large : Photos } alt={'12'}/>
                <span> {props.profileUsers.fullName}</span>
                <span> {props.profileUsers.lookingForAJob}</span>
                <span> {props.profileUsers.lookingForAJobDescription}</span>
                <span> {props.profileUsers.aboutMe}</span>
            </div>

        </div>
    )
}