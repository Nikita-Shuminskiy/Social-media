import React from 'react';
import s from './Post.module.css'

type PostType = {
    img: string
    post: string
    like:number
}

const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img className={s.img} src={props.img}/>
                <span>  {props.post}</span>
            <span>. {props.like}</span>
        </div>
)
}

export default Post