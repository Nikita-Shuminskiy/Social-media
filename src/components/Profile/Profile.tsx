import React from 'react';
import s from './Profile.module.css'
import MyPost from './MyPost/MyPost';
import ProfileInfo from './MyPost/Profile-Info/ProfileInfo';
import { stateType } from '../../Redux/state';



type ProfileType = {
    state: stateType
}

const Profile = (props:ProfileType) => {
    return (
        <div>
            <ProfileInfo
                state={props.state} />
            <MyPost state={props.state}/>
        </div>
    )
}

export default Profile