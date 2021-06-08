import React from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';

type MyPostType = {

}
type PostArrayType = {
    id: number
    messege: string
    likesCount: number
    img: string
    imgLogo: string
}
let postData: Array<PostArrayType> = [
    {
        id: 1,
        messege: 'helo how are you',
        likesCount: 12,
        img: 'https://www.meme-arsenal.com/memes/a5dd2f55b36488a10172f4f84352846b.jpg',
        imgLogo: 'https://cdn130.picsart.com/291236398052211.png?type=webp&to=min&r=640'
    },
    {
        id: 2,
        messege: 'helo World',
        likesCount: 1,
        img: 'https://www.meme-arsenal.com/memes/a5dd2f55b36488a10172f4f84352846b.jpg',
        imgLogo: 'https://cdn130.picsart.com/291236398052211.png?type=webp&to=min&r=640'
    },
]

let PostElementData = postData.map(post => <Post img={post.img}
                                                 post={post.messege}
                                                 like={post.likesCount}
                                                 imgLogo={post.imgLogo}/>)
const MyPost = (props: MyPostType) => {
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