import React from 'react';
import { AppDispatchType, AppStateType } from '../../../Redux/redux-store';
import { addPostAC, postValueChangeAC } from '../../../Redux/ProfileReducer';
import { connect } from 'react-redux';
import MyPost from './MyPost';



const mapStateToProps = (state: AppStateType) => {
    return {
        postData: state.profile.postData,
        newValue: state.profile.newValue
    }
}

const mapDispatchToProps = (dispatch: AppDispatchType) => {
    return {
        newChangePost: (textValue: string) => {
            dispatch(postValueChangeAC(textValue))},
        addPost: (text:string) => {dispatch(addPostAC(text))}
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)

export default MyPostContainer
