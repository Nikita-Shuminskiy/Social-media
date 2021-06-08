import React from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';
import { stateType } from '../../../Redux/state';



type MyPostType = {
    state: stateType
}

const MyPost = (props: MyPostType) => {
    let PostElementData = props.state.profilePage.postData.map(p => <Post img={p.img} post={p.messege} like={p.likesCount} imgLogo={p.imgLogo}/>)
    return (
        <div className={s.item}>
            <textarea></textarea>
            <button>add post</button>
           <div className={s.post}>
               {PostElementData}
               {PostElementData}
               {PostElementData}
               {PostElementData}
               {PostElementData}
           </div>
         </div>
    )
}
export default MyPost