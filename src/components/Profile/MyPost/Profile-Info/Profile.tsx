import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import s from './ProfileInfo.module.css';
import { HeaderImg, ProfileUsersType } from '../../../../Redux/React_Redux_StoreType/types/StateType';
import Loader from '../../../Common/Loader/Loader';
import Photos
    from '../../../../img/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png';
import { ProfileStatuses } from './ProfileStatuses';


export type ProfileType = {
    profileUsers:ProfileUsersType
    profile: HeaderImg
    status: string
    updateStatusThunk: (status: string) => void
    updatePhoto: (photo: string) => void
    owner:number
}
export const Profile: React.FC<ProfileType> = (props) => {
    if (!props.profile) {
        return <Loader/>
    }
    const uploadPhoto = (e: any) => {
       /* const target = e.target as HTMLInputElement;
        // @ts-ignore
        const files = target.files[0];
            props.updatePhoto(files)*/
         if (e.target.files.length){
             props.updatePhoto(e.target.files[0])
         }
    }
    return (
        <div>
            <img className={s.img} src={props.profile.img} alt={'sa'}/>
            <div className={s.info}>
                <img className={s.img_avatar} src={props.profileUsers.photos.small !== null ? props.profileUsers.photos.small : Photos } alt={'12'}/>
                {!props.owner && <input type={'file'} onChange={uploadPhoto} />}
                <ProfileStatuses updateStatusThunk={props.updateStatusThunk} status={props.status}/>
                <div>
                    <span> {props.profileUsers.fullName}</span> <br/>
                    <span> {props.profileUsers.lookingForAJob}</span><br/>
                    <span> {props.profileUsers.lookingForAJobDescription}</span><br/>
                    <span> {props.profileUsers.aboutMe}</span>
                </div>
            </div>

        </div>
    )
}