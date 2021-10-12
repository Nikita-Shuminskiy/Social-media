import React from 'react';
import s from './friends.module.css'

export type friendsType = {
    img:string
    alt:string
    name:string
}

const Friends = (props:friendsType) => {
    return (
        <div className={s.container} >
             <img src={props.img} className={s.img_avatar} alt={props.alt}/>
              <p className={s.name}>{props.name}</p>
        </div>
    );
};

export default Friends;