import React from 'react';
import s from './Post.module.css'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { CircularProgress } from '@material-ui/core';
import Photos
    from '../../../../img/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png';

type PostType = {
    img?: string
    post: string
    like:number
    id:string
    deletePost:(id:string) => void
}

const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img className={s.img} src={props.img ? props.img : Photos}/>
            <IconButton  onClick={ () => props.deletePost(props.id)}  aria-label="delete">
                <DeleteIcon  />
            </IconButton>

                <span>  {props.post}</span>
            <span>. {props.like}</span>
        </div>
)
}

export default Post