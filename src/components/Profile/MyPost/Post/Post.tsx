import React from 'react';
import s from './Post.module.css'

type PostType = {
    img: string
    post: string
    like:number
    imgLogo: string
}

const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img className={s.img}
                 src={props.img}
                 alt='logo' />
                <span>{props.post}</span>
            <span><img className={s.like} src={props.imgLogo} alt="123"/> {props.like}</span>
        </div>
)
}

export default Post