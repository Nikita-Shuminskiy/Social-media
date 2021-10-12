import { AppStateType } from '../../../Redux/Redux_Store';
import { addPost, deletePost } from '../../../Redux/ProfileReducer';
import { connect } from 'react-redux';
import MyPost from './MyPost';
import { PostType, ProfilePageType } from '../../../Redux/React_Redux_StoreType/types/StateType';

type mapStateToPropsType = {
    postData:Array<PostType>
    profileUsers: ProfilePageType
}

const mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        postData: state.profile.postData,
        profileUsers: state.profile
    }
}


const MyPostContainer = connect(mapStateToProps, {addPost,deletePost})(MyPost)

export default MyPostContainer
