import React from 'react'
import s from './ProfileInfo.module.css'
import { stateType } from '../../../../Redux/state';


type ProfilInfoType = {
    state:stateType
}



const ProfileInfo: React.FC<ProfilInfoType> = (props) => {
    return (
        <div>
            <img className={s.img} src={props.state.headerPage.proFileHeader.img}/>
            <img className={s.img_avatar} src={props.state.headerPage.proFileHeader.imgAvatar}/>
            <div className={s.info} >
                <span> FirstName: Nick</span>
                <span> FirstName: Nick</span>
                <span> FirstName: Nick</span>
            </div>
        </div>
    )
}


export default ProfileInfo