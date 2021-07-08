import React, { ChangeEvent } from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';
import { ActionsTypes, StoreType } from '../../../Redux/store';
import { addPostAC, PostType, postValueChangeAC } from '../../../Redux/ProfileReducer';
import MyPost from './MyPost';



type MyPostContainerType = {
   /* postData: Array<PostType>
    dispatch: (action: ActionsTypes) => void
    newValue: string*/
    /*newChangePost: (newPost: string) => void*/
    store:StoreType
}

const MyPostContainer = (props: MyPostContainerType) => {

    const postTextArea = React.createRef<HTMLTextAreaElement>()
     // создаем ссылку и типизируем
    const addPost = () => {
        props.store.dispatch(postValueChangeAC(''))
          if (postTextArea.current) {
              /* let message = postTextArea.current?.value*/
              /*   props.addPost(props.newValue)*/
              props.store.dispatch(addPostAC(props.store._state.profilePage.newValue))
          }
    }
    const changePostAdd = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const textValue = e.currentTarget.value
        /*  props.newChangePost(textValue)*/
        props.store.dispatch(postValueChangeAC(textValue))
    }

    return (
        <MyPost postTextArea={postTextArea} newValue={props.store._state.profilePage.newValue} postData={props.store._state.profilePage.postData} addPost={addPost} newChangePost={changePostAdd}/>
    )
}
export default MyPostContainer