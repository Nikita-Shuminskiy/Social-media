import React, { ChangeEvent } from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';
import { PostType, ProfileUsersType } from '../../../Redux/React_Redux_StoreType/types/StateType';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../Utils/Validators/Validators';
import { TextControlForm } from '../../Common/FormControls/FormControls';


type MyPostType = {
    addPost: (text: string) => void
    postData: PostType[]
    profileUsers: ProfileUsersType
}


const MyPost = (props: MyPostType) => {
    const PostElementData = props.postData.map(p => <Post key={p.id} post={p.message}
                                                          like={p.likesCount}
                                                          img={props.profileUsers.photos.large !== null ? props.profileUsers.photos.small
                                                              :
                                                              p.img}/>)

    const onSubmit = (value: FormDataType) => {
        value.postProfile && props.addPost(value.postProfile)
        value.postProfile = ''
    }
    return (
        <div className={s.item}>
            <div className={s.post}>
                <AddProfileReduxForm onSubmit={onSubmit}/>
                {PostElementData}
            </div>
        </div>
    )
}

type FormDataType = {
    postProfile: string
}
const maxLengthValidator = maxLengthCreator(10)

const AddPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                placeholder={'Enter Post'}
                name={'postProfile'}
                component={TextControlForm}
                validate={[required, maxLengthValidator]}
            />
            <button>send</button>
        </form>
    )
}
const AddProfileReduxForm = reduxForm<FormDataType>({form: 'ProfileAddPost'})(AddPostForm)

export default MyPost