import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from './MyPost/Profile-Info/ProfileInfo';
import { ActionsTypes, StoreType } from '../../Redux/store';
import MyPostContainer from './MyPost/MyPostContainer';



type ProfileType = {
    store:StoreType
}

const Profile = (props:ProfileType) => {
    return (
        <div>
            <ProfileInfo proFileHeader={props.store._state.profilePage.proFileHeader} />
            <MyPostContainer store={props.store} />
        </div>
    )
}

export default Profile