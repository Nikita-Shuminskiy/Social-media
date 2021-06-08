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
                img={'https://image.freepik.com/free-photo/the-color-and-beauty-of-the-sky-at-sunset_51141-13.jpg'}
                imgAvatar={'https://illustrators.ru/uploads/illustration/image/1236582/main_Cat2.jpg'}/>
            <MyPost state={props.state}/>
        </div>
    )
}

export default Profile