import React, { ChangeEvent } from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';
import { PostType } from '../../../Redux/store';




type MyPostType = {
    addPost: () => void
    newChangePost: (e: ChangeEvent<HTMLTextAreaElement>) => void
    postData:PostType[]
    newValue:string
    postTextArea:any
}


const MyPost = (props: MyPostType) => {
    const PostElementData = props.postData.map(p => <Post key={p.id} img={p.img} post={p.messege} like={p.likesCount}
                                                          imgLogo={p.imgLogo}/>)


    /*const onAddPost = () => {
        props.addPost()
    }
    const onChangePost = () => {
        let text = postTextArea.current.value
        props.newChangePost(text)
    }*/

    return (

        <div className={s.item}>
            <textarea value={props.newValue} onChange={props.postTextArea} ref={props.postTextArea}/>
            <button onClick={props.addPost}>add post</button>
           <div className={s.post}>
               {PostElementData}
           </div>
         </div>
    )
}
export default MyPost