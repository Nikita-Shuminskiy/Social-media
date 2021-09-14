import React, { ChangeEvent, useState } from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';
import { PostType, ProfilePageType } from '../../../Redux/React_Redux_StoreType/types/StateType';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Photos
    from '../../../img/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png';


type MyPostType = {
    addPost: (text: string) => void
    postData: PostType[]
    profileUsers: ProfilePageType
    deletePost: (id: string) => void
}




const MyPost = (props: MyPostType) => {
    const [value, setValue] = useState('')

    const deletePost = (id: string) => {
        props.postData.find(i => i.id === id ? props.deletePost(id) : '')
    }
    const onChangePost = (e:ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const addPost = () => {
        if (value !== ''){
            props.addPost(value)
        }
        setValue('')
    }

    const PostElementData = props.postData.map(p => <Post deletePost={deletePost} key={p.id}
                                                          id={p.id}
                                                          post={p.message}
                                                          like={p.likesCount}
                                                          img={props.profileUsers?.profileUsers?.photos?.small !== undefined ? props.profileUsers?.profileUsers?.photos.small
                                                              :
                                                              Photos }/>)

    return <div className={s.item}>
            <div>
                <TextField
                    onChange={onChangePost}
                    placeholder={'Enter Post'}
                    value={value}
                />
                <Button  onClick={addPost} type={'submit'} variant="contained" color="default" size={'small'}>
                    Send Post
                </Button>
            </div>
           <div>
               {PostElementData}
           </div>
        </div>
}

export default MyPost