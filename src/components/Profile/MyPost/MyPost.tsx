import React, { ChangeEvent } from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';
import { PostType } from '../../../Redux/React_Redux_StoreType/types/StateType';




type MyPostType = {
    addPost: (text:string) => void
    newChangePost: (textValue:string) => void
    postData:PostType[]
    newValue:string
}


const MyPost = (props: MyPostType) => {
    const PostElementData = props.postData.map(p => <Post key={p.id} img={p.img} post={p.messege} like={p.likesCount}
                                                          imgLogo={p.imgLogo}/>)


    const onAddPost = () => {
        props.addPost(props.newValue)
    }
    const onChangePost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const textValue = e.currentTarget.value
        props.newChangePost(textValue)
    }

    return (

        <div className={s.item}>
            <textarea   onChange={onChangePost} />
            <button onClick={onAddPost}>add post</button>
           <div className={s.post}>
               {PostElementData}
           </div>
         </div>
    )
}
export default MyPost