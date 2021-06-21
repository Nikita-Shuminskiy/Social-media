import React, { ChangeEvent } from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';
import { ActionsTypes, AddPostAC, newChangePostAC, postType } from '../../../Redux/state';



type MyPostType = {
    postData:  Array<postType>
   /* addPost: (message:string) => void*/
    dispatch:(action:ActionsTypes) => void
    newValue: string
   /* newChangePost: (newPost:string) => void*/
}

const MyPost = (props: MyPostType) => {
    let PostElementData = props.postData.map(p => <Post img={p.img} post={p.messege} like={p.likesCount} imgLogo={p.imgLogo}/>)
    const postTextArea = React.createRef<HTMLTextAreaElement>() // создаем ссылку и типизируем
    const addPostic = () => {
        /*props.newChangePost('')*/
        props.dispatch(newChangePostAC(''))
        if(postTextArea.current) {
           /* let message = postTextArea.current?.value*/
            /*props.addPost(props.newValue)*/
            props.dispatch(AddPostAC(props.newValue))
        }
    }
    const newPostValue = (e:ChangeEvent<HTMLTextAreaElement>) => {
        const text = (e.currentTarget.value)
        props.dispatch(newChangePostAC(text))
    }
    return (
        <div className={s.item}>
            <textarea value={props.newValue} onChange={newPostValue} ref={postTextArea}/>
            <button onClick={addPostic} >add post</button>
           <div className={s.post}>
               {PostElementData}
           </div>
         </div>
    )
}
export default MyPost