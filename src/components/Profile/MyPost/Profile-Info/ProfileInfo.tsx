import React from 'react'
import s from './ProfileInfo.module.css'
import { proFileHeaderType } from '../../../../Redux/state';


type ProfileInfoType = {
    proFileHeader: proFileHeaderType
}



const ProfileInfo: React.FC<ProfileInfoType> = (props) => {
    const imgHeader = props.proFileHeader.headerImg.map( img =>  <img className={s.img} src={img.img} alt={'12'}/> )
    const imgAvatar = props.proFileHeader.headerImg.map( img =>  <img className={s.img_avatar} src={img.imgAvatar} alt={'sa'}/>  )

    return (
        <div>
            {imgHeader}
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