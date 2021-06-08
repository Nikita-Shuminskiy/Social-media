import React from 'react'
import s from './ProfileInfo.module.css'


type ProfilInfoType = {
    img: string
    imgAvatar: string
}

const ProfileInfo: React.FC<ProfilInfoType> = (props) => {
    return (
        <div>
            <img className={s.img} src={props.img}/>
            <img className={s.img_avatar} src={props.imgAvatar}/>
            <div className={s.info} >
                <span> FirstName: Nick</span>
                <span> FirstName: Nick</span>
                <span> FirstName: Nick</span>
            </div>
        </div>
    )
}


export default ProfileInfo