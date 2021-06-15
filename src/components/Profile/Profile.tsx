import React from 'react';
import s from './Profile.module.css'
import MyPost from './MyPost/MyPost';
import ProfileInfo from './MyPost/Profile-Info/ProfileInfo';
import { addPost, stateType } from '../../Redux/state';



type ProfileType = {
    state: stateType
    addPost: (message:string) => void
    newValue: string
    newChangePost:(newPost:string) => void
}

const Profile = (props:ProfileType) => {
    return (
        <div>
            <ProfileInfo
                state={props.state} />
            <MyPost newChangePost={props.newChangePost} newValue={props.newValue} addPost={addPost} state={props.state}/>
        </div>
    )
}

export default Profile