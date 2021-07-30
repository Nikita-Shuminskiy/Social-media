import React from 'react';
import { AppDispatchType, AppStateType } from '../../../Redux/redux-store';
import { addPost, postValueChange } from '../../../Redux/ProfileReducer';
import { connect } from 'react-redux';
import MyPost from './MyPost';
import { PostType, ProfileUsersType } from '../../../Redux/React_Redux_StoreType/types/StateType';

type mapStateToPropsType = {
    postData:Array<PostType>
    newValue: string
    profileUsers: ProfileUsersType
}

const mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        postData: state.profile.postData,
        newValue: state.profile.newValue,
        profileUsers: state.profile.profileUsers
    }
}

const mapDispatchToProps = (dispatch: AppDispatchType) => {
    return {
        postValueChange: (textValue: string) => {
            dispatch(postValueChange(textValue))},
        addPost: (text:string) => {dispatch(addPost(text))}
    }
}

const MyPostContainer = connect(mapStateToProps, { postValueChange, addPost})(MyPost)

export default MyPostContainer
