import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import { ProfilePageType } from '../../../../Redux/React_Redux_StoreType/types/StateType';
import Loader from '../../../Common/Loader/Loader';
import Photos
    from '../../../../img/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png';
import { ProfileStatuses } from './ProfileStatuses';
import ProfileData from './ProfileData/ProfileData';
import ProfileDataReduxForm  from './ProfileData/ProfileDataForm';
import { GetProfileUserType } from '../../../../Api/Api';


export type ProfileType = {
    profileUsers: ProfilePageType
    status: string
    updateStatusThunk: (status: string) => void
    updatePhoto: (photo: string) => void
    owner: number
    updProfileData: (data: GetProfileUserType) => void
}
export const Profile: React.FC<ProfileType> = (props) => {
    const [editMode,setEditMode] = useState(false)
    if (!props.profileUsers) {
        return <Loader/>
    }
    const uploadPhoto = (e: any) => {
        if (e.target.files.length) {
            props.updatePhoto(e.target.files[0])
        }
    }

    const onSubmit = (value:GetProfileUserType) => {
        console.log(value)
        setEditMode(false)
        props.updProfileData(value)
    }
    const openEditMenu = () => setEditMode(true)
    return (
        <div className={s.container}>
            <div>
                <img className={s.img_avatar}
                     src={props.profileUsers.profileUsers.photos.small !== null ? props.profileUsers.profileUsers.photos.small : Photos}/>
                <div>
                    {!props.owner && <input type={'file'} onChange={uploadPhoto}/>}
                </div>
            </div>
            <div className={s.info}>
                <ProfileStatuses updateStatusThunk={props.updateStatusThunk} status={props.status}/>
                <div>
                    {editMode ?

                        // @ts-ignore
                        <ProfileDataReduxForm initialValues={props.profileUsers} profileUsers={props.profileUsers} onSubmit={onSubmit}/>
                        :
                        <ProfileData openEditMenu={openEditMenu} profileUsers={props.profileUsers.profileUsers} />}
                </div>
            </div>
        </div>
    )
}
