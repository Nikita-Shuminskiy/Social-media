import React, { ChangeEvent } from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';
import { stateType } from '../../../Redux/state';



type MyPostType = {
    state: stateType
    addPost: (message:string) => void
    newValue:string
    newChangePost:(newPost:string) => void
}

const MyPost = (props: MyPostType) => {
    let PostElementData = props.state.profilePage.postData.map(p => <Post img={p.img} post={p.messege} like={p.likesCount} imgLogo={p.imgLogo}/>)
    const postTextArea = React.createRef<HTMLTextAreaElement>() // создаем ссылку и типизируем
    const addPostic = () => {
        props.newChangePost('')
        if(postTextArea.current) {
           /* let message = postTextArea.current?.value*/
            props.addPost(props.newValue)
        }
    }
    const callValue = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.newChangePost(e.currentTarget.value)
    }
    return (
        <div className={s.item}>
            <textarea value={props.newValue} onChange={callValue} ref={postTextArea}></textarea>
            <button onClick={addPostic}  >add post</button>
           <div className={s.post}>
               {PostElementData}
           </div>
         </div>
    )
}
export default MyPost