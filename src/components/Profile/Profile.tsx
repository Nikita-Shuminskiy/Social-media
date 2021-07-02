import React from 'react';
import s from './Profile.module.css'
import MyPost from './MyPost/MyPost';
import ProfileInfo from './MyPost/Profile-Info/ProfileInfo';
import { ActionsTypes, ProfilePageType } from '../../Redux/store';



type ProfileType = {
    profilePage: ProfilePageType
    /*addPost: (message:string) => void
    newChangePost:(newPost:string) => void*/
    newValue: string
    dispatch:(action:ActionsTypes) => void
}

const Profile = (props:ProfileType) => {
    return (
        <div>
            <ProfileInfo proFileHeader={props.profilePage.proFileHeader} />
            <MyPost dispatch={props.dispatch.bind(props.dispatch)} newValue={props.newValue} postData={props.profilePage.postData}/>
        </div>
    )
}

export default Profile