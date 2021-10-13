import { AppStateType } from '../../../Redux/Redux_Store';
import { addPost, deletePost } from '../../../Redux/ProfileReducer';
import { connect } from 'react-redux';
import MyPost from './MyPost';
import { PostType } from '../../../Redux/React_Redux_StoreType/types/StateType';
import { PhotosProfileType } from '../../../Api/Api';

type mapStateToPropsType = {
    postData:Array<PostType>
    photos: any
}

const mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        postData: state.profile.postData,
        photos: state.profile?.profileUsers?.photos
    }
}


const MyPostContainer = connect(mapStateToProps, {addPost,deletePost})(MyPost)

export default MyPostContainer
