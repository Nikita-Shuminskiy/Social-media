import React, { ChangeEvent } from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';
import { ActionsTypes, PostType } from '../../../Redux/store';
import { addPostAC, postValueChangeAC } from '../../../Redux/Profile-Reduser';



type MyPostType = {
    postData:  Array<PostType>
   /* addPost: (message:string) => void*/
    dispatch:(action:ActionsTypes) => void
    newValue: string
   /* newChangePost: (newPost:string) => void*/
}

const MyPost = (props: MyPostType) => {

    const PostElementData = props.postData.map(p => <Post img={p.img} post={p.messege} like={p.likesCount} imgLogo={p.imgLogo}/>)
    const postTextArea = React.createRef<HTMLTextAreaElement>() // создаем ссылку и типизируем

    const addPost = () => {
        props.dispatch(postValueChangeAC(''))
        if(postTextArea.current) {
           /* let message = postTextArea.current?.value*/
            /*props.addPost(props.newValue)*/
            props.dispatch(addPostAC(props.newValue))
        }
    }

    const changePostAdd = (e:ChangeEvent<HTMLTextAreaElement>) => {
        debugger
        const textValue = e.currentTarget.value
        props.dispatch(postValueChangeAC(textValue))
    }

    return (
        <div className={s.item}>
            <textarea value={props.newValue} onChange={changePostAdd} ref={postTextArea}/>
            <button onClick={addPost} >add post</button>
           <div className={s.post}>
               {PostElementData}
           </div>
         </div>
    )
}
export default MyPost