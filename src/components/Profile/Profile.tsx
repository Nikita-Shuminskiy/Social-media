import React from 'react';
import s from './Profile.module.css'
import MyPost from './MyPost/MyPost';
import ProfileInfo from './MyPost/Profile-Info/ProfileInfo';
import {profilePageType } from '../../Redux/state';



type ProfileType = {
    profilePage: profilePageType
    addPost: (message:string) => void
    newValue: string
    newChangePost:(newPost:string) => void
}

const Profile = (props:ProfileType) => {
    return (
        <div>
            <ProfileInfo proFileHeader={props.profilePage.proFileHeader} />
            <MyPost newChangePost={props.newChangePost} newValue={props.newValue} addPost={props.addPost} postData={props.profilePage.postData}/>
        </div>
    )
}

export default Profile