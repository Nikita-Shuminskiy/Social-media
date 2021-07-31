import React from 'react';
import s from './ProfileInfo.module.css';
import { HeaderImg, ProfileUsersType } from '../../../../Redux/React_Redux_StoreType/types/StateType';
import Loader from '../../../Loader/Loader';


export type ProfileType = {
    profile: HeaderImg
    profileUsers:ProfileUsersType
}
export const Profile: React.FC<ProfileType> = (props) => {
    if (!props.profile) {
        return <Loader/>
    }
    return (
        <div>
            <img className={s.img} src={props.profile.img} alt={'sa'}/>
            <div className={s.info}>
                <span> FirstName: Nick</span>
                <img className={s.img_avatar} src={props.profileUsers.photos.large != null ? props.profileUsers.photos.large: props.profile.imgAvatar } alt={'12'}/>
            </div>

        </div>
    )
}