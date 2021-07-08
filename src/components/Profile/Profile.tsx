import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from './MyPost/Profile-Info/ProfileInfo';
import { ProfilePageType } from '../../Redux/ProfileReducer';
import { ActionsTypes, StoreType } from '../../Redux/store';
import MyPostContainer from './MyPost/MyPostContainer';




type ProfileType = {
    profilePage: ProfilePageType
    /*addPost: (message:string) => void
    newChangePost:(newPost:string) => void*/
    newValue: string
    dispatch:(action:ActionsTypes) => void
    store:StoreType
}

const Profile = (props:ProfileType) => {
    return (
        <div>
            <ProfileInfo proFileHeader={props.profilePage.proFileHeader} />
            <MyPostContainer store={props.store} />
        </div>
    )
}

export default Profile