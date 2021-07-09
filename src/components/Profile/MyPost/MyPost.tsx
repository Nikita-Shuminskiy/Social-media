import React, { ChangeEvent } from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';
import { PostType } from '../../../Redux/store';




type MyPostType = {
    addPost: () => void
    newChangePost: (body:string) => void
    postData:PostType[]
    newValue:string
}


const MyPost = (props: MyPostType) => {
    const PostElementData = props.postData.map(p => <Post key={p.id} img={p.img} post={p.messege} like={p.likesCount}
                                                          imgLogo={p.imgLogo}/>)


    const onAddPost = () => {
        props.addPost()
    }
    const onChangePost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const body = e.currentTarget.value
        props.newChangePost(body)
    }

    return (

        <div className={s.item}>
            <textarea value={props.newValue} onChange={onChangePost} />
            <button onClick={onAddPost}>add post</button>
           <div className={s.post}>
               {PostElementData}
           </div>
         </div>
    )
}
export default MyPost