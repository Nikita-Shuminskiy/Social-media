import React from 'react';
import s from './Profile.module.css'
import MyPostContainer from './MyPost/MyPostContainer';
import ProfileInfoContainer from './MyPost/Profile-Info/ProfileInfoContainer';




type ProfileType = {
}

const Profile = (props:ProfileType) => {
    return (
        <div>
          <ProfileInfoContainer/>
          <MyPostContainer/>
            </div>
    )
}

export default Profile