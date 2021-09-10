import React from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';
import { PostType, ProfilePageType } from '../../../Redux/React_Redux_StoreType/types/StateType';
import { TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import Photos from '../../../img/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png';


type MyPostType = {
    addPost: (text: string) => void
    postData: PostType[]
    profileUsers: ProfilePageType
    deletePost: (id: string) => void
}

type FormikErrorType = {
    postProfile?: string
}


const MyPost = (props: MyPostType) => {


    const formik = useFormik({
        initialValues: {
            postProfile: ''
        },/*dsdsds*/
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.postProfile) {
                errors.postProfile = 'Required';
            }
            return errors;
        },
        onSubmit: value => {
            console.log(value)
            value.postProfile && props.addPost(value.postProfile)
            formik.resetForm()
        }
    })
    const deletePost = (id: string) => {
        props.postData.find(i => i.id === id ? props.deletePost(id) : '')
    }

    const PostElementData = props.postData.map(p => <Post deletePost={deletePost} key={p.id}
                                                          id={p.id}
                                                          post={p.message}
                                                          like={p.likesCount}
                                                          img={props.profileUsers.photos.large !== null ? props.profileUsers.photos.large
                                                              :
                                                              Photos }/>)

    return <div className={s.item}>
            <img className={s.imgPost}
                 src={props.profileUsers.photos.small !== null ? props.profileUsers.photos.small : ''}/>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    placeholder={'Enter Post'}
                    {...formik.getFieldProps('postProfile')}
                />
                {formik.errors.postProfile ? <div><b> {formik.errors.postProfile}</b></div> : null}
                <Button type={'submit'} variant="contained" color="default" size={'small'}>
                    Send Post
                </Button>
            </form>
            {PostElementData}
        </div>
}

export default MyPost