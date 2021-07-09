import React, { ChangeEvent } from 'react';
import s from './MyPost.module.css'
import { StoreType } from '../../../Redux/store';
import { addPostAC , postValueChangeAC } from '../../../Redux/ProfileReducer';
import MyPost from './MyPost';



type MyPostContainerType = {
   /* postData: Array<PostType>
    dispatch: (action: ActionsTypes) => void
    newValue: string*/
    /*newChangePost: (newPost: string) => void*/
    store:StoreType
}

const MyPostContainer = (props: MyPostContainerType) => {

    /*const postTextArea = React.createRef<HTMLTextAreaElement>()*/
     // создаем ссылку и типизируем
    const addPost = () => {
        /*props.store.dispatch(postValueChangeAC(''))*/
     /*     if (postTextArea.current) {*/
              /* let message = postTextArea.current?.value*/
              /*   props.addPost(props.newValue)*/
              props.store.dispatch(addPostAC(props.store._state.profilePage.newValue))
    }
    const changePostAdd = (body:string) => {
      /*  const textValue = e.currentTarget.value*/
        /*  props.newChangePost(textValue)*/
        props.store.dispatch(postValueChangeAC(body))
    }

    return (
        <MyPost  newValue={props.store._state.profilePage.newValue} postData={props.store._state.profilePage.postData} addPost={addPost} newChangePost={changePostAdd}/>
    )
}
export default MyPostContainer