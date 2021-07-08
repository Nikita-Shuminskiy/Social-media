import React from 'react'
import s from './ProfileInfo.module.css'
import { ProFileHeaderType } from '../../../../Redux/store';


type ProfileInfoType = {
    proFileHeader: ProFileHeaderType
}


const ProfileInfo: React.FC<ProfileInfoType> = (props) => {
    const img = props.proFileHeader.headerImg
        .filter(el => el.hasOwnProperty('img'))
        .map(img => <img className={s.img} src={img.img} alt={'12'}/>)
    const imgAvatar = props.proFileHeader.headerImg
        .filter(el => el.hasOwnProperty('imgAvatar'))
        .map(img => <img className={s.img_avatar} src={img.imgAvatar} alt={'sa'}/>)



    return (
        <div>
            {img}
            {imgAvatar}
            <div className={s.info}>
                <span> FirstName: Nick</span>
                <span> FirstName: Nick</span>
                <span> FirstName: Nick</span>
            </div>

        </div>
    )
}


export default ProfileInfo