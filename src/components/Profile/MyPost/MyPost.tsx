import React, { ChangeEvent } from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';
import { PostType, ProfileUsersType } from '../../../Redux/React_Redux_StoreType/types/StateType';




type MyPostType = {
    addPost: (text:string) => void
    postValueChange: (textValue:string) => void
    postData:PostType[]
    newValue:string
    profileUsers:ProfileUsersType
}


const MyPost = (props: MyPostType) => {
    const PostElementData = props.postData.map(p => <Post key={p.id} post={p.message}  like={p.likesCount} img={ props.profileUsers.photos.large !== null ? props.profileUsers.photos.small : p.img}
                                                          imgLogo={p.imgLogo}/>)


    const onAddPost = () => {
        props.addPost(props.newValue)
    }
    const onChangePost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const textValue = e.currentTarget.value
        props.postValueChange(textValue)
    }

    return (

        <div className={s.item}>
            <textarea value={props.newValue}  onChange={onChangePost} />
            <button onClick={onAddPost}>add post</button>
           <div className={s.post}>
               {PostElementData}
           </div>
         </div>
    )
}
export default MyPost